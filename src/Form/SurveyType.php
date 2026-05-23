<?php
namespace App\Form;

use App\Entity\SurveyAccess;
use App\Utilities\GlobalConstants;
use Karser\Recaptcha3Bundle\Form\Recaptcha3Type;
use Karser\Recaptcha3Bundle\Validator\Constraints\Recaptcha3;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SurveyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $surveyAccess = $builder->getData();
        $builder
            ->add('captcha', Recaptcha3Type::class, [
                'constraints' => new Recaptcha3(),
                'action_name' => 'survey'
            ])
        ;

        if($surveyAccess instanceof SurveyAccess) {
            foreach ($surveyAccess->getSurvey()->getSurveyQuestions() as $question) {
                if($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_ETOILE) {
                    $builder
                        ->add('question-'.$question->getId(), IntegerType::class, [
                            'label' => $question->getTitle(),
                            'mapped' => false,
                            'required' => true,
                            'row_attr' => [
                                'class' => 'mb-5'
                            ],
                            'label_attr' => [
                                'class' => 'form-label'
                            ],
                            'block_name' => "form_star"
                        ])
                    ;
                } else if($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_TEXT) {
                    $builder
                        ->add('question-'.$question->getId(), TextareaType::class, [
                            'label' => $question->getTitle(),
                            'mapped' => false,
                            'required' => true,
                            'row_attr' => [
                                'class' => 'mb-5'
                            ],
                            'label_attr' => [
                                'class' => 'form-label'
                            ],
                            'attr' => [
                                'class' => 'form-control',
                                'rows' => 3
                            ]
                        ])
                    ;
                } else if($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_RADIO) {

                    $arrayChoices = [];
                    foreach ($question->getSurveyQuestionAnswers() as $questionAnswer) {
                        $arrayChoices[$questionAnswer->getTitle()] = $questionAnswer->getId();
                    }

                    $builder
                        ->add('question-'.$question->getId(), ChoiceType::class, [
                            'label' => $question->getTitle(),
                            'expanded' => true,
                            'required' => true,
                            'choices' => $arrayChoices,
                            'mapped' => false,
                            'row_attr' => [
                                'class' => 'mb-5'
                            ],
                            'block_name' => "form_radio"
                        ])
                    ;
                }
            }
        }

        $builder
            ->add('submit', SubmitType::class, [
                'label' => 'Soumettre',
                'row_attr' => [
                    'class' => 'text-center'
                ]
            ])
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SurveyAccess::class
        ]);
    }
}
