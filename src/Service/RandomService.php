<?php
declare(strict_types=1);

namespace App\Service;

use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class RandomService
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $em;

    /**
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }


    /**
     * @param int $length
     * @param string $type
     * @return string
     * @throws Exception
     */
    public function randomCode(int $length, string $type = "numeric"): string
    {
        $characters = ($type === "numeric") ?  '0123456789' : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[random_int(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    /**
     * @throws Exception
     */
    public function uniqueRandomCode(int $length, $class = null, $property = null, $type = "numeric"): ?string
    {

        $unique = false;
        $randomCode = null;
        while(!$unique){
            $randomCode = $this->randomCode($length, $type);

            if($class && $property) {
                $verification = $this->em->getRepository($class)->findOneBy([$property => $randomCode]);
                if(!$verification){
                    $unique = true;
                }
            }
        }
        return $randomCode;
    }

    public function uniqueRandomDeclarationCode(int $length, $class = null, $property = null, $type = "numeric"): ?string {

        $date = new DateTime();
        $unique = false;
        $randomCode = null;
        while(!$unique){
            $randomCode = "TO".$date->format("my")."-".$this->randomCode($length, $type);

            if($class && $property) {
                $verification = $this->em->getRepository($class)->findOneBy([$property => $randomCode]);
                if(!$verification){
                    $unique = true;
                }
            }
        }
        return $randomCode;
    }
}
