<?php

declare(strict_types=1);

namespace App\Utilities;

class GlobalConstants
{
    public const LIFETIME_TOKEN_INIT_PASSWORD_IN_HOURS = 24;
    public const LIFETIME_PASSWORD_EXPIRE = "+6 months";

    public const ARTICLE_ACTUALITE = 1;
    public const ARTICLE_COMMUNIQUE_PRESSE = 2;
    public const ARTICLE_EVENEMENT = 3;

    public const HOMEPAGE_ID = 1;
    public const FOOTER_ID = 1;

    public const MEDIA_TYPE_PHOTO = 1;
    public const MEDIA_TYPE_DOCUMENT = 2;

    public const CONFIGURATION_ID = 1;

    public const A_SYSTEM_PAGE = [
        "Page d'accueil" => "app_home_page",
        "Listing des actualités" => "app_article_actualites",
        "Listing des communiqués de presse" => "app_article_communiques",
        "Listing des évènements" => "app_article_event",
        "Médiathèque photo" => "app_mediatheque_photo",
        "Médiathèque document" => "app_mediatheque_document",
        "Page contact" => "app_contact",
        "Offres d'emploi" => "app_job_offers"
    ];


    public const SURVEY_QUESTION_TYPE_ETOILE = 'etoile';
    public const SURVEY_QUESTION_TYPE_TEXT = 'text';
    public const SURVEY_QUESTION_TYPE_RADIO = 'radio';

    // File Manager
    public const FILE_MANAGER_MAX_SIZE = 250 * 1024 * 1024; // 250 MB en octets
    public const FILE_MANAGER_USER_CAN_CREATE_FOLDER = false;
    public const FILE_MANAGER_USER_CAN_UPLOAD_FILE = false;
    public const FILE_MANAGER_AUTO_PERMISSION_INHERITANCE = false;
}
