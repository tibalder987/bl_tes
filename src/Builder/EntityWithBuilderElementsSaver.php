<?php

namespace App\Builder;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\PropertyAccess\PropertyAccess;

final class EntityWithBuilderElementsSaver
{
    /** @var EntityManagerInterface  */
    private EntityManagerInterface $em;

    private $accessor;

    private string $uriUploadedFilesBuilder;

    /** @var RequestStack */
    private RequestStack $requestStack;

    public function __construct(
        EntityManagerInterface $entityManager,
        RequestStack $requestStack,
        private readonly \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface $tokenStorage
    ) {
        $this->em = $entityManager;
        $this->accessor = PropertyAccess::createPropertyAccessor();
        $this->uriUploadedFilesBuilder = '/uploads';
        $this->requestStack = $requestStack;
    }

    public function save($entity, $fieldName)
    {
        $this->persist($entity, $fieldName, $this->cleanElements($this->accessor->getValue($entity, $fieldName)));
    }

    private function persist($entity, $fieldName, array $cleanElements): void
    {
        $this->accessor->setValue($entity, $fieldName, $cleanElements);
        $this->em->persist($entity);

        if (method_exists($entity, 'getId') && $entity->getId()) {
            $this->createRevision($entity, $fieldName, $cleanElements);
        }

        $this->em->flush();
    }

    private function createRevision($entity, string $fieldName, array $elements): void
    {
        $entityClass = get_class($entity);
        $entityId = $entity->getId();

        // Check the most recent revision
        $lastRevision = $this->em->getRepository(\App\Entity\BuilderRevision::class)->findOneBy(
            ['entityClass' => $entityClass, 'entityId' => $entityId, 'fieldName' => $fieldName],
            ['createdAt' => 'DESC']
        );

        if ($lastRevision) {
            $lastElements = $lastRevision->getElements();
            if (json_encode($lastElements) === json_encode($elements)) {
                // The elements are identical to the last revision, don't create a new one
                return;
            }
        }

        $revision = new \App\Entity\BuilderRevision();
        $revision->setEntityClass($entityClass);
        $revision->setEntityId($entityId);
        $revision->setFieldName($fieldName);
        $revision->setElements($elements);

        $token = $this->tokenStorage->getToken();
        if ($token && $token->getUser() instanceof \App\Entity\User) {
            $revision->setAuthor($token->getUser());
        }

        $this->em->persist($revision);
    }

    private function cleanElements($elements): array
    {
        if (!$elements) {
            return [];
        }

        foreach ($elements as $elementTmpId => $element) {
            // If element is not an array (e.g. at recursion leaf if incorrectly passed), skip or handle?
            // cleanElements is expected to receive array of arrays.
            if (!is_array($element)) {
                continue;
            }

            foreach ($element as $property => $value) {
                if ($value instanceof UploadedFile) {
                    try {
                        $elements[$elementTmpId][$property . '_url'] = $this->saveUploadedFile($value);
                        unset($elements[$elementTmpId][$property]);
                    } catch (\Exception $e) {
                        // Cannot upload file
                        $this->requestStack->getSession()->getFlashBag()->add("warning", "Un ou plusieurs fichiers n'ont pas pu être chargés : " . $e->getMessage());
                        $elements[$elementTmpId][$property] = null;
                    }
                } elseif (is_array($value)) {
                    // Check if it's a nested structure (Array of Arrays) or a Multiselect (Array of Scalars)
                    $isNested = false;
                    $first = reset($value);
                    if (is_array($first)) {
                        $isNested = true;
                    }

                    if ($isNested) {
                        $elements[$elementTmpId][$property] = $this->cleanElements($value);
                    } else {
                        $elements[$elementTmpId][$property] = implode(',', $value);
                    }
                }
            }
        }

        return array_values($elements);
    }

    private function isAssociative(array $arr): bool
    {
        if (array() === $arr) return false;
        return array_keys($arr) !== range(0, count($arr) - 1);
    }

    private function saveUploadedFile(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
        $fileName = $safeFilename . '-' . uniqid('', true) . '.' . $file->guessExtension();

        if (!is_dir(getcwd() . '/uploads') && !mkdir(getcwd() . '/uploads', 0755, true)) {
            throw new \RuntimeException(sprintf('Directory "%s" was not created', getcwd() . '/uploads'));
        }
        $file->move(getcwd() . '/uploads', $fileName);

        return $this->uriUploadedFilesBuilder . '/' . $fileName;
    }
}
