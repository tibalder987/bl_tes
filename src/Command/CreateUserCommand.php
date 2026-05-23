<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(name: 'app:admin:create', description: 'Créer un nouvel utilisateur ADMIN')]
class CreateUserCommand extends Command
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $entityManager;

    /** @var UserPasswordHasherInterface */
    private UserPasswordHasherInterface $hasher;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $hasher)
    {
        $this->entityManager   = $entityManager;
        $this->hasher = $hasher;

        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            // the short description shown while running "php bin/console list"
            ->setDescription('Creates a new user.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // outputs multiple lines to the console (adding "\n" at the end of each line)
        $output->writeln([
            'User Creator',
            '============',
            '',
        ]);

        $question = new Question('Please enter the e-mail of the user : ');
        $email = $this->getHelper('question')->ask($input, $output, $question);

        $question = new Question('Please enter the firstname of the user : ');
        $firstname = $this->getHelper('question')->ask($input, $output, $question);

        $question = new Question('Please enter the lastname of the user : ');
        $lastname = $this->getHelper('question')->ask($input, $output, $question);

        $question = new Question('Please enter the password of the user : ');
        $password = $this->getHelper('question')->ask($input, $output, $question);

        $user = new User();
        $user->setFirstname($firstname);
        $user->setLastname($lastname);
        $user->setEmail($email);
        $user->setRoles(['ROLE_ADMIN']);
        $user->setActive(true);

        $passEncoder = $this->hasher->hashPassword($user, $password);
        $user->setPassword($passEncoder);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $output->writeln('User ' . $email . ' created!');

        return Command::SUCCESS;
    }
}
