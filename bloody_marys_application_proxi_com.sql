-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 22, 2026 at 07:53 PM
-- Server version: 8.0.45-0ubuntu0.22.04.1
-- PHP Version: 7.2.34-38+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bloody_marys_application_proxi_com`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int NOT NULL,
  `author_id` int NOT NULL,
  `type_article` int NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL,
  `date_schedule` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `image_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ahead` tinyint(1) NOT NULL DEFAULT '0',
  `date_end_schedule` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `article_category`
--

CREATE TABLE `article_category` (
  `article_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `article_translation`
--

CREATE TABLE `article_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `elements` json DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `builder_revision`
--

CREATE TABLE `builder_revision` (
  `id` int NOT NULL,
  `author_id` int DEFAULT NULL,
  `entity_class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity_id` int NOT NULL,
  `field_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `elements` json NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `builder_revision`
--

INSERT INTO `builder_revision` (`id`, `author_id`, `entity_class`, `entity_id`, `field_name`, `elements`, `created_at`) VALUES
(1, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Informations Techniques</strong><br />\\r\\n&bull;&nbsp;&nbsp; &nbsp;Design du site: Proximity SAS<br />\\r\\n&nbsp; &nbsp; &nbsp; 3rd floor, Centre Vaima, Office 85<br />\\r\\n&bull;&nbsp;&nbsp; &nbsp;Hosting du site: OVH SAS<br />\\r\\n&nbsp; &nbsp; &nbsp; Head office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-04-23 09:05:08'),
(2, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-04-23 09:05:08'),
(3, 1, 'App\\Entity\\PageTranslation', 3, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Privacy Policy\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-04-23 09:09:34'),
(4, 1, 'App\\Entity\\PageTranslation', 4, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \" Politique de Confidentialité\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p>Bloody Mary&rsquo;s Hotel is committed to respecting your privacy and ensuring the processing of your personal data collected via the website https://www.bloodymarysborabora.com/&nbsp;<br />\\r\\ncomplies with the EU law n&deg;78-17 of 6 January 1978 as amended, relating to data processing, files and civil liberties, and with the EU&#39;s General Data Protection Regulation (GDPR).</p>\\r\\n\\r\\n<p>This policy explains what information we collect, how it is used, and how it is protected.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Information We Collect</strong><br />\\r\\nWe may collect the following personal information:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Name and contact details (email, phone)</li>\\r\\n\\t<li>Address</li>\\r\\n\\t<li>Booking information</li>\\r\\n\\t<li>Payment details</li>\\r\\n\\t<li>Travel details (arrival, departure, preferences)</li>\\r\\n\\t<li>Communications and requests</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>How We Use Your Information</strong><br />\\r\\nYour data is used to:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Manage reservations and stays</li>\\r\\n\\t<li>Provide personalized service</li>\\r\\n\\t<li>Communicate with you</li>\\r\\n\\t<li>Improve our services</li>\\r\\n\\t<li>Send news, updates or offers (if you opt in)</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Third-Party Services</strong><br />\\r\\nWe may share your data with trusted partners, including:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Booking systems (e.g., Agilysys / SiteMinder)</li>\\r\\n\\t<li>The chosen marketing platform (e.g., Brevop, MailPerformance)</li>\\r\\n\\t<li>Analytics tools</li>\\r\\n\\t<li>Customer service providers</li>\\r\\n</ul>\\r\\n\\r\\n<p>All partners are required to respect data confidentiality.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use &amp; Cookies</strong><br />\\r\\nWhen browsing our website, cookies may be used to:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>analyze traffic and usage</li>\\r\\n\\t<li>improve user experience</li>\\r\\n\\t<li>personalize content</li>\\r\\n</ul>\\r\\n\\r\\n<p>You can manage or disable cookies in your browser settings.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contact Forms &amp; Newsletter</strong><br />\\r\\nWhen submitting a form or subscribing:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>We collect your contact details to respond or communicate</li>\\r\\n\\t<li>Newsletter subscriptions are optional</li>\\r\\n\\t<li>You may unsubscribe at any time</li>\\r\\n</ul>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Social networks</li>\\r\\n</ul>\\r\\n\\r\\n<p>Our website may include elements linked to social networks (such as buttons or plug-ins) that allow you to share content or interact with our pages.<br />\\r\\nIf you are connected to a social network while browsing, these elements may allow that platform to track your activity on our website.<br />\\r\\nThe collection and use of this information are governed by the privacy policies of the respective social networks. Bloody Mary&rsquo;s Hotel has no control over how this data is processed.<br />\\r\\nWe invite you to consult the privacy policies of these platforms to learn more about how your data is used and how to manage your privacy settings.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nWhen making a booking:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Personal and payment information is securely processed</li>\\r\\n\\t<li>Data is used to prepare your stay and complete transactions</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>During Your Stay</strong><br />\\r\\nWe may collect information related to your stay, including:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>preferences</li>\\r\\n\\t<li>requests</li>\\r\\n\\t<li>expenses</li>\\r\\n\\t<li>guest profile details</li>\\r\\n</ul>\\r\\n\\r\\n<p>This helps us provide a better experience.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Data Storage &amp; Security</strong><br />\\r\\nYour data is stored securely and accessible only to authorized personnel.<br />\\r\\nWe take appropriate measures to protect your information. However, no system can guarantee absolute security, and risks such as unauthorized access, technical issues, or malicious activity may occur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Data Retention</strong><br />\\r\\nYour data is retained only as long as necessary for operational, legal, or service purposes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Your Rights</strong><br />\\r\\nYou may:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>access your data</li>\\r\\n\\t<li>request corrections</li>\\r\\n\\t<li>request deletion (subject to legal requirements)</li>\\r\\n</ul>\\r\\n\\r\\n<p>To do so, you may contact:<br />\\r\\n<a href=\\\"mailto:stay@bloodymarys.com\\\">stay@bloodymarys.com</a></p>\\r\\n\\r\\n<p>Proof of identity will be required.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Updates</strong><br />\\r\\nThis Privacy Policy may be updated at any time. Any significant changes will be communicated on this page.<br />\\r\\n&nbsp;</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-04-23 09:09:34'),
(5, 1, 'App\\Entity\\PageTranslation', 3, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Privacy Policy\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p>Bloody Mary&rsquo;s Hotel is committed to respecting your privacy and ensuring the processing of your personal data collected via the website https://www.bloodymarysborabora.com/&nbsp;<br />\\r\\ncomplies with the EU law n&deg;78-17 of 6 January 1978 as amended, relating to data processing, files and civil liberties, and with the EU&#39;s General Data Protection Regulation (GDPR).</p>\\r\\n\\r\\n<p>This policy explains what information we collect, how it is used, and how it is protected.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Information We Collect</strong><br />\\r\\nWe may collect the following personal information:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Name and contact details (email, phone)</li>\\r\\n\\t<li>Address</li>\\r\\n\\t<li>Booking information</li>\\r\\n\\t<li>Payment details</li>\\r\\n\\t<li>Travel details (arrival, departure, preferences)</li>\\r\\n\\t<li>Communications and requests</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>How We Use Your Information</strong><br />\\r\\nYour data is used to:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Manage reservations and stays</li>\\r\\n\\t<li>Provide personalized service</li>\\r\\n\\t<li>Communicate with you</li>\\r\\n\\t<li>Improve our services</li>\\r\\n\\t<li>Send news, updates or offers (if you opt in)</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Third-Party Services</strong><br />\\r\\nWe may share your data with trusted partners, including:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Booking systems (e.g., Agilysys / SiteMinder)</li>\\r\\n\\t<li>The chosen marketing platform (e.g., Brevop, MailPerformance)</li>\\r\\n\\t<li>Analytics tools</li>\\r\\n\\t<li>Customer service providers</li>\\r\\n</ul>\\r\\n\\r\\n<p>All partners are required to respect data confidentiality.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use &amp; Cookies</strong><br />\\r\\nWhen browsing our website, cookies may be used to:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>analyze traffic and usage</li>\\r\\n\\t<li>improve user experience</li>\\r\\n\\t<li>personalize content</li>\\r\\n</ul>\\r\\n\\r\\n<p>You can manage or disable cookies in your browser settings.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contact Forms &amp; Newsletter</strong><br />\\r\\nWhen submitting a form or subscribing:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>We collect your contact details to respond or communicate</li>\\r\\n\\t<li>Newsletter subscriptions are optional</li>\\r\\n\\t<li>You may unsubscribe at any time</li>\\r\\n</ul>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Social networks</li>\\r\\n</ul>\\r\\n\\r\\n<p>Our website may include elements linked to social networks (such as buttons or plug-ins) that allow you to share content or interact with our pages.<br />\\r\\nIf you are connected to a social network while browsing, these elements may allow that platform to track your activity on our website.<br />\\r\\nThe collection and use of this information are governed by the privacy policies of the respective social networks. Bloody Mary&rsquo;s Hotel has no control over how this data is processed.<br />\\r\\nWe invite you to consult the privacy policies of these platforms to learn more about how your data is used and how to manage your privacy settings.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nWhen making a booking:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Personal and payment information is securely processed</li>\\r\\n\\t<li>Data is used to prepare your stay and complete transactions</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>During Your Stay</strong><br />\\r\\nWe may collect information related to your stay, including:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>preferences</li>\\r\\n\\t<li>requests</li>\\r\\n\\t<li>expenses</li>\\r\\n\\t<li>guest profile details</li>\\r\\n</ul>\\r\\n\\r\\n<p>This helps us provide a better experience.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Data Storage &amp; Security</strong><br />\\r\\nYour data is stored securely and accessible only to authorized personnel.<br />\\r\\nWe take appropriate measures to protect your information. However, no system can guarantee absolute security, and risks such as unauthorized access, technical issues, or malicious activity may occur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Data Retention</strong><br />\\r\\nYour data is retained only as long as necessary for operational, legal, or service purposes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Your Rights</strong><br />\\r\\nYou may:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>access your data</li>\\r\\n\\t<li>request corrections</li>\\r\\n\\t<li>request deletion (subject to legal requirements)</li>\\r\\n</ul>\\r\\n\\r\\n<p>To do so, you may contact:<br />\\r\\n<a href=\\\"mailto:stay@bloodymarys.com\\\">stay@bloodymarys.com</a></p>\\r\\n\\r\\n<p>Proof of identity will be required.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Updates</strong><br />\\r\\nThis Privacy Policy may be updated at any time. Any significant changes will be communicated on this page.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-04-23 09:12:39'),
(6, 1, 'App\\Entity\\PageTranslation', 4, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \" Politique de Confidentialité\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p>Le Bloody Mary&rsquo;s Hotel s&rsquo;engage &agrave; respecter votre vie priv&eacute;e et &agrave; assurer que le traitement de vos donn&eacute;es personnelles collect&eacute;es via le site https://www.bloodymarysborabora.com/ est conforme &agrave; la loi n&deg;78-17 du 6 janvier 1978 modifi&eacute;e relative &agrave; l&rsquo;informatique, aux fichiers et aux libert&eacute;s, ainsi qu&rsquo;au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD).<br />\\r\\nLa pr&eacute;sente politique a pour objet de vous informer sur les donn&eacute;es collect&eacute;es, leur utilisation ainsi que les mesures mises en &oelig;uvre pour en assurer la protection.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Donn&eacute;es Collect&eacute;es</strong><br />\\r\\nNous sommes susceptibles de collecter les donn&eacute;es personnelles suivantes :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Nom et coordonn&eacute;es (adresse e-mail, num&eacute;ro de t&eacute;l&eacute;phone)</li>\\r\\n\\t<li>Adresse postale</li>\\r\\n\\t<li>Informations de r&eacute;servation</li>\\r\\n\\t<li>Donn&eacute;es de paiement</li>\\r\\n\\t<li>Informations relatives au s&eacute;jour (arriv&eacute;e, d&eacute;part, pr&eacute;f&eacute;rences)</li>\\r\\n\\t<li>Communications et demandes adress&eacute;es &agrave; nos services</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Utilisation des Donn&eacute;es</strong><br />\\r\\nVos donn&eacute;es personnelles sont utilis&eacute;es pour :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>G&eacute;rer les r&eacute;servations et les s&eacute;jours</li>\\r\\n\\t<li>Fournir un service personnalis&eacute;</li>\\r\\n\\t<li>Communiquer avec vous</li>\\r\\n\\t<li>Am&eacute;liorer nos services</li>\\r\\n\\t<li>Vous adresser des actualit&eacute;s, informations ou offres (sous r&eacute;serve de votre consentement pr&eacute;alable)</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Partage des Donn&eacute;es avec des Tiers</strong><br />\\r\\nVos donn&eacute;es peuvent &ecirc;tre transmises &agrave; des partenaires de confiance, notamment :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Les syst&egrave;mes de r&eacute;servation (ex. : Agilysys / SiteMinder)</li>\\r\\n\\t<li>Les plateformes marketing utilis&eacute;es (ex. : Brevo, MailPerformance)</li>\\r\\n\\t<li>Les outils d&rsquo;analyse et de mesure d&rsquo;audience</li>\\r\\n\\t<li>Les prestataires de services clients</li>\\r\\n</ul>\\r\\n\\r\\n<p>L&rsquo;ensemble de ces partenaires est tenu de respecter la confidentialit&eacute; des donn&eacute;es et de les traiter conform&eacute;ment &agrave; la r&eacute;glementation en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Utilisation du Site et Cookies</strong><br />\\r\\nLors de la navigation sur notre site, des cookies peuvent &ecirc;tre utilis&eacute;s afin de :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Analyser la fr&eacute;quentation et l&rsquo;utilisation du site</li>\\r\\n\\t<li>Am&eacute;liorer l&rsquo;exp&eacute;rience utilisateur</li>\\r\\n\\t<li>Personnaliser les contenus propos&eacute;s</li>\\r\\n</ul>\\r\\n\\r\\n<p>Vous pouvez &agrave; tout moment configurer, g&eacute;rer ou d&eacute;sactiver les cookies via les param&egrave;tres de votre navigateur.</p>\\r\\n\\r\\n<p><strong>Formulaires de Contact et Newsletter</strong><br />\\r\\nLors de l&rsquo;envoi d&rsquo;un formulaire ou de votre inscription :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Nous collectons vos coordonn&eacute;es afin de r&eacute;pondre &agrave; vos demandes ou communiquer avec vous</li>\\r\\n\\t<li>L&rsquo;inscription &agrave; la newsletter est facultative</li>\\r\\n\\t<li>Vous pouvez vous d&eacute;sinscrire &agrave; tout moment</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;seaux Sociaux</strong><br />\\r\\nNotre site peut int&eacute;grer des fonctionnalit&eacute;s li&eacute;es aux r&eacute;seaux sociaux (telles que des boutons ou des modules d&rsquo;interaction) vous permettant de partager du contenu ou d&rsquo;interagir avec nos pages.<br />\\r\\nSi vous &ecirc;tes connect&eacute; &agrave; un r&eacute;seau social lors de votre navigation, ces fonctionnalit&eacute;s peuvent permettre &agrave; ce dernier de suivre votre activit&eacute; sur notre site.<br />\\r\\nLa collecte et l&rsquo;utilisation de ces donn&eacute;es sont r&eacute;gies par les politiques de confidentialit&eacute; propres &agrave; chaque r&eacute;seau social. Le Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur le traitement de ces donn&eacute;es.<br />\\r\\nNous vous invitons &agrave; consulter les politiques de confidentialit&eacute; de ces plateformes afin de mieux comprendre l&rsquo;utilisation de vos donn&eacute;es et les options dont vous disposez pour g&eacute;rer vos param&egrave;tres de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLors de la r&eacute;alisation d&rsquo;une r&eacute;servation :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Les informations personnelles et de paiement sont trait&eacute;es de mani&egrave;re s&eacute;curis&eacute;e</li>\\r\\n\\t<li>Les donn&eacute;es sont utilis&eacute;es afin de pr&eacute;parer votre s&eacute;jour et de finaliser les transactions</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Pendant votre S&eacute;jour</strong><br />\\r\\nNous pouvons collecter certaines informations li&eacute;es &agrave; votre s&eacute;jour, notamment :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Vos pr&eacute;f&eacute;rences</li>\\r\\n\\t<li>Vos demandes</li>\\r\\n\\t<li>Vos d&eacute;penses</li>\\r\\n\\t<li>Les informations relatives &agrave; votre profil client</li>\\r\\n</ul>\\r\\n\\r\\n<p>Ces donn&eacute;es nous permettent d&rsquo;am&eacute;liorer la qualit&eacute; de nos services et de vous offrir une exp&eacute;rience personnalis&eacute;e.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Stockage et S&eacute;curit&eacute; des Donn&eacute;es</strong><br />\\r\\nVos donn&eacute;es sont stock&eacute;es de mani&egrave;re s&eacute;curis&eacute;e et accessibles uniquement aux personnes d&ucirc;ment autoris&eacute;es.<br />\\r\\nNous mettons en &oelig;uvre des mesures techniques et organisationnelles appropri&eacute;es afin de prot&eacute;ger vos informations. Toutefois, aucun syst&egrave;me ne peut garantir une s&eacute;curit&eacute; absolue, et des risques tels qu&rsquo;un acc&egrave;s non autoris&eacute;, des incidents techniques ou des actes malveillants peuvent survenir.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Dur&eacute;e de Conservation des Donn&eacute;es</strong><br />\\r\\nVos donn&eacute;es sont conserv&eacute;es uniquement pendant la dur&eacute;e n&eacute;cessaire aux finalit&eacute;s op&eacute;rationnelles, contractuelles, l&eacute;gales ou li&eacute;es aux services fournis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Vos droits</strong><br />\\r\\nConform&eacute;ment &agrave; la r&eacute;glementation en vigueur, vous disposez des droits suivants :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Acc&eacute;der &agrave; vos donn&eacute;es personnelles</li>\\r\\n\\t<li>Demander la rectification de vos donn&eacute;es</li>\\r\\n\\t<li>Demander la suppression de vos donn&eacute;es (sous r&eacute;serve des obligations l&eacute;gales)</li>\\r\\n</ul>\\r\\n\\r\\n<p>Pour exercer ces droits, vous pouvez nous contacter &agrave; l&rsquo;adresse suivante :<br />\\r\\n<a href=\\\"mailto:stay@bloodymarys.com\\\">stay@bloodymarys.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Mise &agrave; Jour de la Politique</strong><br />\\r\\nLa pr&eacute;sente Politique de confidentialit&eacute; peut &ecirc;tre modifi&eacute;e &agrave; tout moment.<br />\\r\\nToute modification substantielle sera port&eacute;e &agrave; votre connaissance sur cette page.<br />\\r\\n&nbsp;</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-04-23 09:12:39'),
(7, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:49:26'),
(8, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Webdesign &amp; UX</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>D&eacute;veloppement</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>H&eacute;bergement</strong></p>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:49:26');
INSERT INTO `builder_revision` (`id`, `author_id`, `entity_class`, `entity_id`, `field_name`, `elements`, `created_at`) VALUES
(9, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:50:45'),
(10, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Webdesign &amp; UX</strong></p>\\r\\n\\r\\n<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>D&eacute;veloppement</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>H&eacute;bergement</strong></p>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:50:45'),
(11, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:51:03'),
(12, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Webdesign &amp; UX</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>D&eacute;veloppement</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>H&eacute;bergement</strong></p>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:51:03'),
(13, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:51:33'),
(14, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Webdesign &amp; UX</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>D&eacute;veloppement</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>H&eacute;bergement</strong></p>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:51:33'),
(15, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Technical Information</strong><br />\\r\\nWebsite design: Proximity SAS<br />\\r\\n3rd floor, Centre Vaima, Office 85</p>\\r\\n\\r\\n<p>Website hosting: OVH SAS<br />\\r\\nHead office: 2 rue Kellermann - 59100 Roubaix - France</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:52:46');
INSERT INTO `builder_revision` (`id`, `author_id`, `entity_class`, `entity_id`, `field_name`, `elements`, `created_at`) VALUES
(16, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign &amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>D&eacute;veloppement</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>H&eacute;bergement</strong>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:52:46'),
(17, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign&nbsp;&amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design of digital experiences and identities, creates ergonomic and engaging interfaces designed for user comfort and search engine optimization.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Development</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design and creation of websites and mobile applications in French Polynesia.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Hosting</strong>\\r\\n\\r\\n<p>IT management and webmastering provided by the digital agency&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i.</a></p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>Hosting on OVH servers<br />\\r\\nOVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nAPE Code: 2620Z<br />\\r\\nVAT No.: FR 22 424 761 419<br />\\r\\nHead Office: 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" tabindex=\\\"0\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:55:15'),
(18, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Webdesign &amp; UX</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>D&eacute;veloppement</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>H&eacute;bergement</strong></p>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 08:55:15'),
(19, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Webdesign&nbsp;&amp; UX</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design of digital experiences and identities, creates ergonomic and engaging interfaces designed for user comfort and search engine optimization.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Development</strong></p>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design and creation of websites and mobile applications in French Polynesia.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>Hosting</strong></p>\\r\\n\\r\\n<p>IT management and webmastering provided by the digital agency&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i.</a></p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>Hosting on OVH servers<br />\\r\\nOVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nAPE Code: 2620Z<br />\\r\\nVAT No.: FR 22 424 761 419<br />\\r\\nHead Office: 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" tabindex=\\\"0\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 09:22:32'),
(20, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign &amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>D&eacute;veloppement</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>H&eacute;bergement</strong>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 09:22:32'),
(21, 1, 'App\\Entity\\PageTranslation', 2, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign&nbsp;&amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design of digital experiences and identities, creates ergonomic and engaging interfaces designed for user comfort and search engine optimization.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Development</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design and creation of websites and mobile applications in French Polynesia.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Hosting</strong>\\r\\n\\r\\n<p>IT management and webmastering provided by the digital agency&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i.</a></p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>Hosting on OVH servers<br />\\r\\nOVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nAPE Code: 2620Z<br />\\r\\nVAT No.: FR 22 424 761 419<br />\\r\\nHead Office: 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" tabindex=\\\"0\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 09:23:21');
INSERT INTO `builder_revision` (`id`, `author_id`, `entity_class`, `entity_id`, `field_name`, `elements`, `created_at`) VALUES
(22, 1, 'App\\Entity\\PageTranslation', 1, 'elements', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign &amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>D&eacute;veloppement</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>H&eacute;bergement</strong>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', '2026-05-13 09:23:21');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category_translation`
--

CREATE TABLE `category_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `configuration`
--

CREATE TABLE `configuration` (
  `id` int NOT NULL,
  `logo_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maintenance` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `favicon_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_page_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name_news` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name_communique` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name_events` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name_mediatheque` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name_offers` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image_name_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci,
  `phone_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tiktok` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_analytics_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `configuration`
--

INSERT INTO `configuration` (`id`, `logo_name`, `maintenance`, `title`, `meta_image_name`, `created_at`, `updated_at`, `favicon_name`, `logo_page_name`, `meta_image_name_news`, `meta_image_name_communique`, `meta_image_name_events`, `meta_image_name_mediatheque`, `meta_image_name_offers`, `meta_image_name_contact`, `address`, `phone_contact`, `email_contact`, `facebook`, `instagram`, `youtube`, `twitter`, `linkedin`, `tiktok`, `google_analytics_id`) VALUES
(1, NULL, 0, NULL, NULL, '2026-04-23 08:03:39', '2026-04-23 08:03:54', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Povai Bay, Bora-Bora 98730, Polynésie française', '+689 40 67 69 10', 'stay@bloodymarys.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `configuration_translation`
--

CREATE TABLE `configuration_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title_news` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description_news` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title_communique` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description_communique` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title_events` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description_events` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title_mediatheque` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description_mediatheque` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title_offers` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description_offers` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `configuration_translation`
--

INSERT INTO `configuration_translation` (`id`, `translatable_id`, `meta_title`, `meta_description`, `meta_title_news`, `meta_description_news`, `meta_title_communique`, `meta_description_communique`, `meta_title_events`, `meta_description_events`, `meta_title_mediatheque`, `meta_description_mediatheque`, `meta_title_offers`, `meta_description_offers`, `meta_title_contact`, `meta_description_contact`, `locale`) VALUES
(1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'fr');

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230805005105', '2026-03-24 20:28:33', 11),
('DoctrineMigrations\\Version20230805135531', '2026-03-24 20:28:33', 10),
('DoctrineMigrations\\Version20230808113958', '2026-03-24 20:28:33', 4),
('DoctrineMigrations\\Version20230808123735', '2026-03-24 20:28:33', 7),
('DoctrineMigrations\\Version20230810045302', '2026-03-24 20:28:33', 147),
('DoctrineMigrations\\Version20230810123245', '2026-03-24 20:28:33', 19),
('DoctrineMigrations\\Version20230810140021', '2026-03-24 20:28:33', 47),
('DoctrineMigrations\\Version20230810221830', '2026-03-24 20:28:34', 10),
('DoctrineMigrations\\Version20230810224654', '2026-03-24 20:28:34', 8),
('DoctrineMigrations\\Version20230811050701', '2026-03-24 20:28:34', 44),
('DoctrineMigrations\\Version20230831043719', '2026-03-24 20:28:34', 82),
('DoctrineMigrations\\Version20230912182546', '2026-03-24 20:28:34', 5),
('DoctrineMigrations\\Version20230912192440', '2026-03-24 20:28:34', 4),
('DoctrineMigrations\\Version20230919121911', '2026-03-24 20:28:34', 18),
('DoctrineMigrations\\Version20230920230730', '2026-03-24 20:28:34', 17),
('DoctrineMigrations\\Version20230921105411', '2026-03-24 20:28:34', 4),
('DoctrineMigrations\\Version20230921110428', '2026-03-24 20:28:34', 5),
('DoctrineMigrations\\Version20230921112905', '2026-03-24 20:28:34', 6),
('DoctrineMigrations\\Version20230921113325', '2026-03-24 20:28:34', 10),
('DoctrineMigrations\\Version20230928143942', '2026-03-24 20:28:34', 7),
('DoctrineMigrations\\Version20230928145242', '2026-03-24 20:28:34', 10),
('DoctrineMigrations\\Version20231215095936', '2026-03-24 20:28:34', 44),
('DoctrineMigrations\\Version20231222062154', '2026-03-24 20:28:34', 10),
('DoctrineMigrations\\Version20240114160038', '2026-03-24 20:28:34', 81),
('DoctrineMigrations\\Version20240115065232', '2026-03-24 20:28:34', 49),
('DoctrineMigrations\\Version20240209135620', '2026-03-24 20:28:34', 5),
('DoctrineMigrations\\Version20240209140443', '2026-03-24 20:28:34', 7),
('DoctrineMigrations\\Version20240209143222', '2026-03-24 20:28:34', 8),
('DoctrineMigrations\\Version20240513080207', '2026-03-24 20:28:34', 69),
('DoctrineMigrations\\Version20240513083715', '2026-03-24 20:28:34', 17),
('DoctrineMigrations\\Version20251108004019', '2026-03-24 20:28:34', 18),
('DoctrineMigrations\\Version20251108004527', '2026-03-24 20:28:34', 200),
('DoctrineMigrations\\Version20251110212545', '2026-03-24 20:28:34', 10),
('DoctrineMigrations\\Version20251110233629', '2026-03-24 20:28:34', 30),
('DoctrineMigrations\\Version20251112184301', '2026-03-24 20:28:34', 102),
('DoctrineMigrations\\Version20251112190627', '2026-03-24 20:28:34', 25),
('DoctrineMigrations\\Version20251112193250', '2026-03-24 20:28:34', 44),
('DoctrineMigrations\\Version20251117213529', '2026-03-24 20:28:35', 8),
('DoctrineMigrations\\Version20260224235237', '2026-03-24 20:28:35', 14),
('DoctrineMigrations\\Version20260226191010', '2026-03-24 20:28:35', 3),
('DoctrineMigrations\\Version20260226202440', '2026-03-24 20:28:35', 16),
('DoctrineMigrations\\Version20260507022749', '2026-05-07 02:42:13', 11),
('DoctrineMigrations\\Version20260512021020', '2026-05-12 02:38:42', 37),
('DoctrineMigrations\\Version20260512023153', '2026-05-12 02:38:42', 37);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` int NOT NULL,
  `theme_id` int NOT NULL,
  `ahead` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq_theme`
--

CREATE TABLE `faq_theme` (
  `id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq_theme_translation`
--

CREATE TABLE `faq_theme_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq_translation`
--

CREATE TABLE `faq_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_file`
--

CREATE TABLE `file_manager_file` (
  `id` int NOT NULL,
  `parent_folder_id` int DEFAULT NULL,
  `owner_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` bigint NOT NULL,
  `path` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extension` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_trashed` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  `metadata` json DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_file_star`
--

CREATE TABLE `file_manager_file_star` (
  `id` int NOT NULL,
  `file_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_folder`
--

CREATE TABLE `file_manager_folder` (
  `id` int NOT NULL,
  `parent_folder_id` int DEFAULT NULL,
  `owner_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_trashed` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_folder_star`
--

CREATE TABLE `file_manager_folder_star` (
  `id` int NOT NULL,
  `folder_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_manager_permission`
--

CREATE TABLE `file_manager_permission` (
  `id` int NOT NULL,
  `file_id` int DEFAULT NULL,
  `folder_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `granted_by_id` int NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `group_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int NOT NULL,
  `logo_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer`
--

INSERT INTO `footer` (`id`, `logo_name`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `footer_link`
--

CREATE TABLE `footer_link` (
  `id` int NOT NULL,
  `footer_id` int DEFAULT NULL,
  `position` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `footer_link_translation`
--

CREATE TABLE `footer_link_translation` (
  `id` int NOT NULL,
  `page_id` int DEFAULT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `external_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_system` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schema_data` json NOT NULL,
  `configuration` json NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `form_submission`
--

CREATE TABLE `form_submission` (
  `id` int NOT NULL,
  `form_id` int NOT NULL,
  `data` json NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `id` int NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `home_page`
--

CREATE TABLE `home_page` (
  `id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_page`
--

INSERT INTO `home_page` (`id`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `home_page_translation`
--

CREATE TABLE `home_page_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `elements` json DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_page_translation`
--

INSERT INTO `home_page_translation` (`id`, `translatable_id`, `elements`, `locale`) VALUES
(1, 1, NULL, 'fr');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_offer`
--

CREATE TABLE `job_offer` (
  `id` int NOT NULL,
  `job_id` int NOT NULL,
  `job_type_id` int NOT NULL,
  `date_limit_offer` datetime DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_offer_translation`
--

CREATE TABLE `job_offer_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `presentation` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `missions` longtext COLLATE utf8mb4_unicode_ci,
  `competences` longtext COLLATE utf8mb4_unicode_ci,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_translation`
--

CREATE TABLE `job_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_type`
--

CREATE TABLE `job_type` (
  `id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_type`
--

INSERT INTO `job_type` (`id`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL),
(2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `job_type_translation`
--

CREATE TABLE `job_type_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_type_translation`
--

INSERT INTO `job_type_translation` (`id`, `translatable_id`, `title`, `locale`) VALUES
(1, 1, 'CDI', 'fr'),
(2, 2, 'CDD', 'fr');

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id` int NOT NULL,
  `source` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id`, `source`, `action`, `entity`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Cascales Arthur (#1)', 'Login - Back-office', 'Utilisateur', 'Succ&egrave;s', '2026-04-23 08:00:17', '2026-04-23 08:00:17'),
(2, 'Cascales Arthur (#1)', 'Création', 'Page', 'Cr&eacute;ation d&#039;une page : Mentions L&eacute;gales', '2026-04-23 09:05:08', '2026-04-23 09:05:08'),
(3, 'Cascales Arthur (#1)', 'Création', 'Page', 'Cr&eacute;ation d&#039;une page : Politique de Confidentialit&eacute;', '2026-04-23 09:09:34', '2026-04-23 09:09:34'),
(4, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Politique de Confidentialit&eacute;', '2026-04-23 09:12:39', '2026-04-23 09:12:39'),
(5, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 08:49:26', '2026-05-13 08:49:26'),
(6, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 08:50:45', '2026-05-13 08:50:45'),
(7, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 08:51:03', '2026-05-13 08:51:03'),
(8, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 08:51:33', '2026-05-13 08:51:33'),
(9, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 08:52:46', '2026-05-13 08:52:46'),
(10, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 08:55:15', '2026-05-13 08:55:15'),
(11, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 09:22:32', '2026-05-13 09:22:32'),
(12, 'Cascales Arthur (#1)', 'Modification', 'Page', 'Modification d&#039;une page : Mentions L&eacute;gales', '2026-05-13 09:23:21', '2026-05-13 09:23:21');

-- --------------------------------------------------------

--
-- Table structure for table `mail_log`
--

CREATE TABLE `mail_log` (
  `id` int NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recipient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int NOT NULL,
  `media_document_type_id` int DEFAULT NULL,
  `media_type` int NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media_document_type`
--

CREATE TABLE `media_document_type` (
  `id` int NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media_document_type_translation`
--

CREATE TABLE `media_document_type_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media_translation`
--

CREATE TABLE `media_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int NOT NULL,
  `parent_id` int DEFAULT NULL,
  `page_id` int DEFAULT NULL,
  `external_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `position` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `page_system` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_translation`
--

CREATE TABLE `menu_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_subscriber`
--

CREATE TABLE `newsletter_subscriber` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `id` int NOT NULL,
  `author_id` int NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `meta_image_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`id`, `author_id`, `active`, `created_at`, `updated_at`, `meta_image_name`) VALUES
(1, 1, 1, '2026-04-23 09:05:08', '2026-04-23 09:05:08', NULL),
(2, 1, 1, '2026-04-23 09:09:34', '2026-04-23 09:09:34', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `page_onglet`
--

CREATE TABLE `page_onglet` (
  `id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page_onglet_translation`
--

CREATE TABLE `page_onglet_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `elements` json DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page_translation`
--

CREATE TABLE `page_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `elements` json DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_translation`
--

INSERT INTO `page_translation` (`id`, `translatable_id`, `title`, `path`, `elements`, `locale`, `description`, `meta_title`, `meta_description`) VALUES
(1, 1, 'Mentions Légales', 'mentions-legales', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Mentions Légales\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nVous &ecirc;tes actuellement connect&eacute;s au site internet du Bloody Mary&rsquo;s Hotel.<br />\\r\\nCes Conditions G&eacute;n&eacute;rales r&eacute;gissent l&rsquo;utilisation du site internet et des services du Bloody Mary&rsquo;s Hotel.&nbsp;<br />\\r\\nEn acc&eacute;dant &agrave; ce site, vous acceptez de vous conformer &agrave; ces conditions.</p>\\r\\n\\r\\n<p>Ce site est la propri&eacute;t&eacute; de SAS Bloody Mary&rsquo;s, immatricul&eacute;e en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nAdresse :<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, Polyn&eacute;sie fran&ccedil;aise</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign &amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale experte en conception d&rsquo;exp&eacute;riences et identit&eacute;s digitales, r&eacute;alise des interfaces ergonomiques et engageantes, pens&eacute;es pour le confort utilisateur et le r&eacute;f&eacute;rencement.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>D&eacute;veloppement</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, agence digitale sp&eacute;cialis&eacute;e dans la conception et la cr&eacute;ation de sites internet et d&rsquo;applications mobiles en Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>H&eacute;bergement</strong>\\r\\n\\r\\n<p>Infog&eacute;rance et webmastering assur&eacute;s par l&rsquo;agence digitale&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3&egrave;me &eacute;tage Centre Vaima, Bureau 85<br />\\r\\nT&eacute;l :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" title=\\\"https://www.prox-i.pf/\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>H&eacute;bergement sur serveur OVH</strong><br />\\r\\n<strong>OVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nCode APE 2620Z<br />\\r\\nN&deg; TVA : FR 22 424 761 419<br />\\r\\nSi&egrave;ge social : 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" title=\\\"https://www.ovh.com/\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use</strong><br />\\r\\nCe site internet a pour objet de fournir des informations relatives au Bloody Mary&rsquo;s Hotel, notamment concernant ses h&eacute;bergements, sa restauration, son acc&egrave;s et ses services.<br />\\r\\nNous nous effor&ccedil;ons d&rsquo;assurer l&rsquo;exactitude et la mise &agrave; jour des informations pr&eacute;sent&eacute;es. Toutefois, le contenu du site est susceptible d&rsquo;&ecirc;tre modifi&eacute;, actualis&eacute; ou supprim&eacute; &agrave; tout moment, sans pr&eacute;avis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Propri&eacute;t&eacute; Intellectuelle</strong><br />\\r\\nL&rsquo;ensemble des &eacute;l&eacute;ments composant ce site internet, notamment le nom de domaine, la marque, le logo, les textes, illustrations, graphismes, photographies et &eacute;l&eacute;ments de design, est prot&eacute;g&eacute; par les lois en vigueur relatives &agrave; la propri&eacute;t&eacute; intellectuelle et demeure la propri&eacute;t&eacute; exclusive de SAS Bloody Mary&rsquo;s, sauf mention contraire.<br />\\r\\nToute reproduction, repr&eacute;sentation, modification, publication, transmission ou distribution, totale ou partielle, de ces &eacute;l&eacute;ments, sans autorisation &eacute;crite pr&eacute;alable, est strictement interdite, &agrave; l&rsquo;exception d&rsquo;un usage strictement personnel, priv&eacute; et non commercial.<br />\\r\\nToute utilisation non autoris&eacute;e constitue une contrefa&ccedil;on au sens des dispositions applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et est susceptible d&rsquo;engager la responsabilit&eacute; de son auteur, pouvant donner lieu &agrave; des poursuites judiciaires.<br />\\r\\nCr&eacute;dit photos: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contenu</strong><br />\\r\\nToutes les informations pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre informatif et peuvent &ecirc;tre modifi&eacute;es, mises &agrave; jour ou supprim&eacute;es &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nBien que le Bloody Mary&rsquo;s Hotel s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffus&eacute;es, aucune garantie n&rsquo;est donn&eacute;e quant &agrave; leur exhaustivit&eacute;, leur exactitude ou leur actualit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Photos Non-Contractuelles</strong><br />\\r\\nLes images, illustrations et descriptions pr&eacute;sent&eacute;es sur ce site sont fournies &agrave; titre purement illustratif et n&rsquo;ont pas de valeur contractuelle.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLes r&eacute;servations en ligne sont trait&eacute;es via un syst&egrave;me de r&eacute;servation tiers (Agilysys ou toute autre plateforme &eacute;quivalente).<br />\\r\\nEn effectuant une r&eacute;servation, vous acceptez les conditions g&eacute;n&eacute;rales du prestataire tiers concern&eacute;.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des services, de la disponibilit&eacute; ou des politiques appliqu&eacute;es par ces plateformes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liens Externes</strong><br />\\r\\nCe site peut contenir des liens vers des sites internet ou des plateformes tiers.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur ces sites externes et ne saurait &ecirc;tre tenu responsable de leur contenu, de leur disponibilit&eacute; ou de leurs politiques de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Responsabilit&eacute;</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne saurait &ecirc;tre tenu responsable des dommages directs ou indirects r&eacute;sultant de l&rsquo;acc&egrave;s ou de l&rsquo;utilisation de ce site, ou de la confiance accord&eacute;e aux informations qui y sont pr&eacute;sent&eacute;es.<br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas un acc&egrave;s continu et ininterrompu au site et ne pourra &ecirc;tre tenu responsable de toute interruption, dysfonctionnement technique ou erreur.<br />\\r\\nL&rsquo;utilisateur est seul responsable de l&rsquo;utilisation qu&rsquo;il fait du site et s&rsquo;engage &agrave; respecter les lois et r&eacute;glementations en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Disponibilit&eacute; du Site et Risques Techniques</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel ne garantit pas que le site sera accessible en permanence ni exempt d&rsquo;interruptions. L&rsquo;acc&egrave;s au site peut &ecirc;tre temporairement suspendu, notamment pour des op&eacute;rations de maintenance ou pour des raisons techniques.<br />\\r\\nL&rsquo;utilisateur reconna&icirc;t que le r&eacute;seau Internet n&rsquo;est pas un r&eacute;seau s&eacute;curis&eacute; et que l&rsquo;acc&egrave;s au site peut &ecirc;tre interrompu, retard&eacute; ou affect&eacute; par des dysfonctionnements techniques ind&eacute;pendants de notre volont&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications des Conditions</strong><br />\\r\\nLe Bloody Mary&rsquo;s Hotel se r&eacute;serve le droit de modifier ou de mettre &agrave; jour les pr&eacute;sentes Conditions G&eacute;n&eacute;rales &agrave; tout moment, sans pr&eacute;avis.<br />\\r\\nToute modification prendra effet d&egrave;s sa publication sur le pr&eacute;sent site.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Comportement des Utilisateurs</strong><br />\\r\\nL&rsquo;utilisateur s&rsquo;engage &agrave; ne pas utiliser le site de mani&egrave;re &agrave; en perturber le fonctionnement, &agrave; en compromettre la s&eacute;curit&eacute; ou &agrave; y introduire des contenus illicites, nuisibles ou non autoris&eacute;s.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Droit Applicable et Juridiction Comp&eacute;tente</strong><br />\\r\\nLes pr&eacute;sentes Conditions G&eacute;n&eacute;rales sont r&eacute;gies par le droit applicable en Polyn&eacute;sie fran&ccedil;aise.<br />\\r\\nTout litige relatif &agrave; l&rsquo;utilisation du pr&eacute;sent site sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux comp&eacute;tents de Polyn&eacute;sie fran&ccedil;aise.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', 'fr', NULL, NULL, NULL),
(2, 1, 'Terms & Conditions', 'terms-conditions', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Terms & Conditions\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p><strong>Introduction</strong><br />\\r\\nYou are currently connected to the Bloody Mary&rsquo;s Hotel website.&nbsp;<br />\\r\\nThese Terms &amp; Conditions govern the use of the Bloody Mary&rsquo;s Hotel website and services. By accessing this website, you agree to comply with these terms.&nbsp;</p>\\r\\n\\r\\n<p>This website belongs to SAS Bloody Mary&rsquo;s, registered in French Polynesia.&nbsp;<br />\\r\\nAddress:&nbsp;<br />\\r\\nBaie de Povai &ndash; Amanahune<br />\\r\\nBP 515 &ndash; 98 730 Vaitape<br />\\r\\nBora Bora, French Polynesia</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Webdesign&nbsp;&amp; UX</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design of digital experiences and identities, creates ergonomic and engaging interfaces designed for user comfort and search engine optimization.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Development</strong>\\r\\n\\r\\n<p><a href=\\\"https://www.prox-i.pf/\\\">#Prox-i</a>, a digital agency specializing in the design and creation of websites and mobile applications in French Polynesia.</p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<strong>Hosting</strong>\\r\\n\\r\\n<p>IT management and webmastering provided by the digital agency&nbsp;<a href=\\\"https://www.prox-i.pf/\\\">#Prox-i.</a></p>\\r\\n\\r\\n<p><strong>PROXIMITY SAS</strong><br />\\r\\n3rd Floor, Centre Vaima, Office 85<br />\\r\\nPhone :&nbsp;<a href=\\\"tel:40541145\\\">40 54 11 45</a>&nbsp;&ndash;&nbsp;<a href=\\\"mailto:contact@prox-i.pf\\\" title=\\\"mailto:contact@prox-i.pf\\\">contact@prox-i.pf</a><br />\\r\\n<a href=\\\"https://www.prox-i.pf/\\\" tabindex=\\\"0\\\">https://www.prox-i.pf</a></p>\\r\\n\\r\\n<p><strong>Hosting on OVH servers<br />\\r\\nOVH SAS</strong><br />\\r\\nRCS Lille M&eacute;tropole 424 761 419 00045<br />\\r\\nAPE Code: 2620Z<br />\\r\\nVAT No.: FR 22 424 761 419<br />\\r\\nHead Office: 2 rue Kellermann &ndash; 59100 Roubaix &ndash; France<br />\\r\\n<a href=\\\"https://www.ovh.com/\\\" tabindex=\\\"0\\\">https://www.ovh.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use&nbsp;</strong><br />\\r\\nThis website is intended to provide information about Bloody Mary&rsquo;s Hotel, its rooms, dining, access and services. Content may be updated or modified at any time without notice.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Intellectual Property</strong><br />\\r\\nAll elements of this website &ndash; including domain name, brand, logo, texts, illustrations, graphics, and design &ndash; are protected by applicable intellectual property laws and remain the property of SAS Bloody Mary&rsquo;s, unless otherwise stated.<br />\\r\\nNo part of this website may be copied, reproduced, modified, or distributed in any form without prior written consent, except for strictly personal, private, and non-commercial use.<br />\\r\\nAny unauthorized use constitutes an infringement under applicable intellectual property laws.<br />\\r\\nPhoto credit: Tahiti Tourisme (Denis Grosmaire, Alikaphoto, Overpeek Studio, Gr&eacute;goire Le Bacon, Dimitri Nguyen, Megane Salmon, Marc G&eacute;rard Photography) &ndash; Rani Chaves&nbsp;</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Content</strong><br />\\r\\nAll information provided on this website is for informational purposes only and is subject to change at any time without notice.<br />\\r\\nBloody Mary&rsquo;s Hotel strives to ensure accuracy but does not guarantee that all content is complete, current, or error-free.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nOnline reservations are processed through a third-party booking system (Agilysys). By making a booking, you agree to the terms and conditions of this third-party platform.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>External Links</strong><br />\\r\\nThis website may include links to external platforms. We are not responsible for their content or policies.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Liability</strong><br />\\r\\nBloody Mary&rsquo;s Hotel shall not be held liable for any direct or indirect damages resulting from the use of this website or the information contained within it.<br />\\r\\nUsers are responsible for ensuring that the use of this website complies with applicable laws.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Modifications</strong><br />\\r\\nBloody Mary&rsquo;s Hotel reserves the right to update or modify these terms at any time.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Governing Law</strong><br />\\r\\nThese terms are governed by the laws of French Polynesia.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', 'en', NULL, NULL, NULL),
(3, 2, 'Privacy Policy', 'privacy-policy', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \"Privacy Policy\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p>Bloody Mary&rsquo;s Hotel is committed to respecting your privacy and ensuring the processing of your personal data collected via the website https://www.bloodymarysborabora.com/&nbsp;<br />\\r\\ncomplies with the EU law n&deg;78-17 of 6 January 1978 as amended, relating to data processing, files and civil liberties, and with the EU&#39;s General Data Protection Regulation (GDPR).</p>\\r\\n\\r\\n<p>This policy explains what information we collect, how it is used, and how it is protected.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Information We Collect</strong><br />\\r\\nWe may collect the following personal information:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Name and contact details (email, phone)</li>\\r\\n\\t<li>Address</li>\\r\\n\\t<li>Booking information</li>\\r\\n\\t<li>Payment details</li>\\r\\n\\t<li>Travel details (arrival, departure, preferences)</li>\\r\\n\\t<li>Communications and requests</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>How We Use Your Information</strong><br />\\r\\nYour data is used to:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Manage reservations and stays</li>\\r\\n\\t<li>Provide personalized service</li>\\r\\n\\t<li>Communicate with you</li>\\r\\n\\t<li>Improve our services</li>\\r\\n\\t<li>Send news, updates or offers (if you opt in)</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Third-Party Services</strong><br />\\r\\nWe may share your data with trusted partners, including:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Booking systems (e.g., Agilysys / SiteMinder)</li>\\r\\n\\t<li>The chosen marketing platform (e.g., Brevop, MailPerformance)</li>\\r\\n\\t<li>Analytics tools</li>\\r\\n\\t<li>Customer service providers</li>\\r\\n</ul>\\r\\n\\r\\n<p>All partners are required to respect data confidentiality.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Website Use &amp; Cookies</strong><br />\\r\\nWhen browsing our website, cookies may be used to:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>analyze traffic and usage</li>\\r\\n\\t<li>improve user experience</li>\\r\\n\\t<li>personalize content</li>\\r\\n</ul>\\r\\n\\r\\n<p>You can manage or disable cookies in your browser settings.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Contact Forms &amp; Newsletter</strong><br />\\r\\nWhen submitting a form or subscribing:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>We collect your contact details to respond or communicate</li>\\r\\n\\t<li>Newsletter subscriptions are optional</li>\\r\\n\\t<li>You may unsubscribe at any time</li>\\r\\n</ul>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Social networks</li>\\r\\n</ul>\\r\\n\\r\\n<p>Our website may include elements linked to social networks (such as buttons or plug-ins) that allow you to share content or interact with our pages.<br />\\r\\nIf you are connected to a social network while browsing, these elements may allow that platform to track your activity on our website.<br />\\r\\nThe collection and use of this information are governed by the privacy policies of the respective social networks. Bloody Mary&rsquo;s Hotel has no control over how this data is processed.<br />\\r\\nWe invite you to consult the privacy policies of these platforms to learn more about how your data is used and how to manage your privacy settings.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Reservations</strong><br />\\r\\nWhen making a booking:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Personal and payment information is securely processed</li>\\r\\n\\t<li>Data is used to prepare your stay and complete transactions</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>During Your Stay</strong><br />\\r\\nWe may collect information related to your stay, including:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>preferences</li>\\r\\n\\t<li>requests</li>\\r\\n\\t<li>expenses</li>\\r\\n\\t<li>guest profile details</li>\\r\\n</ul>\\r\\n\\r\\n<p>This helps us provide a better experience.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Data Storage &amp; Security</strong><br />\\r\\nYour data is stored securely and accessible only to authorized personnel.<br />\\r\\nWe take appropriate measures to protect your information. However, no system can guarantee absolute security, and risks such as unauthorized access, technical issues, or malicious activity may occur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Data Retention</strong><br />\\r\\nYour data is retained only as long as necessary for operational, legal, or service purposes.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Your Rights</strong><br />\\r\\nYou may:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>access your data</li>\\r\\n\\t<li>request corrections</li>\\r\\n\\t<li>request deletion (subject to legal requirements)</li>\\r\\n</ul>\\r\\n\\r\\n<p>To do so, you may contact:<br />\\r\\n<a href=\\\"mailto:stay@bloodymarys.com\\\">stay@bloodymarys.com</a></p>\\r\\n\\r\\n<p>Proof of identity will be required.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Updates</strong><br />\\r\\nThis Privacy Policy may be updated at any time. Any significant changes will be communicated on this page.</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"no_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', 'en', NULL, NULL, NULL),
(4, 2, 'Politique de Confidentialité', 'politique-de-confidentialite', '[{\"name\": \"Titre (H1 à H6)\", \"type\": \"h1\", \"color\": \"primary\", \"title\": \" Politique de Confidentialité\", \"subline\": \"false\", \"visible\": \"1\", \"template\": \"title\", \"alignment\": \"start\", \"fullwidth\": \"false\", \"styletitle\": \"h1\"}, {\"name\": \"Texte\", \"text\": \"<p>Le Bloody Mary&rsquo;s Hotel s&rsquo;engage &agrave; respecter votre vie priv&eacute;e et &agrave; assurer que le traitement de vos donn&eacute;es personnelles collect&eacute;es via le site https://www.bloodymarysborabora.com/ est conforme &agrave; la loi n&deg;78-17 du 6 janvier 1978 modifi&eacute;e relative &agrave; l&rsquo;informatique, aux fichiers et aux libert&eacute;s, ainsi qu&rsquo;au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD).<br />\\r\\nLa pr&eacute;sente politique a pour objet de vous informer sur les donn&eacute;es collect&eacute;es, leur utilisation ainsi que les mesures mises en &oelig;uvre pour en assurer la protection.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Donn&eacute;es Collect&eacute;es</strong><br />\\r\\nNous sommes susceptibles de collecter les donn&eacute;es personnelles suivantes :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Nom et coordonn&eacute;es (adresse e-mail, num&eacute;ro de t&eacute;l&eacute;phone)</li>\\r\\n\\t<li>Adresse postale</li>\\r\\n\\t<li>Informations de r&eacute;servation</li>\\r\\n\\t<li>Donn&eacute;es de paiement</li>\\r\\n\\t<li>Informations relatives au s&eacute;jour (arriv&eacute;e, d&eacute;part, pr&eacute;f&eacute;rences)</li>\\r\\n\\t<li>Communications et demandes adress&eacute;es &agrave; nos services</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Utilisation des Donn&eacute;es</strong><br />\\r\\nVos donn&eacute;es personnelles sont utilis&eacute;es pour :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>G&eacute;rer les r&eacute;servations et les s&eacute;jours</li>\\r\\n\\t<li>Fournir un service personnalis&eacute;</li>\\r\\n\\t<li>Communiquer avec vous</li>\\r\\n\\t<li>Am&eacute;liorer nos services</li>\\r\\n\\t<li>Vous adresser des actualit&eacute;s, informations ou offres (sous r&eacute;serve de votre consentement pr&eacute;alable)</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Partage des Donn&eacute;es avec des Tiers</strong><br />\\r\\nVos donn&eacute;es peuvent &ecirc;tre transmises &agrave; des partenaires de confiance, notamment :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Les syst&egrave;mes de r&eacute;servation (ex. : Agilysys / SiteMinder)</li>\\r\\n\\t<li>Les plateformes marketing utilis&eacute;es (ex. : Brevo, MailPerformance)</li>\\r\\n\\t<li>Les outils d&rsquo;analyse et de mesure d&rsquo;audience</li>\\r\\n\\t<li>Les prestataires de services clients</li>\\r\\n</ul>\\r\\n\\r\\n<p>L&rsquo;ensemble de ces partenaires est tenu de respecter la confidentialit&eacute; des donn&eacute;es et de les traiter conform&eacute;ment &agrave; la r&eacute;glementation en vigueur.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Utilisation du Site et Cookies</strong><br />\\r\\nLors de la navigation sur notre site, des cookies peuvent &ecirc;tre utilis&eacute;s afin de :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Analyser la fr&eacute;quentation et l&rsquo;utilisation du site</li>\\r\\n\\t<li>Am&eacute;liorer l&rsquo;exp&eacute;rience utilisateur</li>\\r\\n\\t<li>Personnaliser les contenus propos&eacute;s</li>\\r\\n</ul>\\r\\n\\r\\n<p>Vous pouvez &agrave; tout moment configurer, g&eacute;rer ou d&eacute;sactiver les cookies via les param&egrave;tres de votre navigateur.</p>\\r\\n\\r\\n<p><strong>Formulaires de Contact et Newsletter</strong><br />\\r\\nLors de l&rsquo;envoi d&rsquo;un formulaire ou de votre inscription :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Nous collectons vos coordonn&eacute;es afin de r&eacute;pondre &agrave; vos demandes ou communiquer avec vous</li>\\r\\n\\t<li>L&rsquo;inscription &agrave; la newsletter est facultative</li>\\r\\n\\t<li>Vous pouvez vous d&eacute;sinscrire &agrave; tout moment</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;seaux Sociaux</strong><br />\\r\\nNotre site peut int&eacute;grer des fonctionnalit&eacute;s li&eacute;es aux r&eacute;seaux sociaux (telles que des boutons ou des modules d&rsquo;interaction) vous permettant de partager du contenu ou d&rsquo;interagir avec nos pages.<br />\\r\\nSi vous &ecirc;tes connect&eacute; &agrave; un r&eacute;seau social lors de votre navigation, ces fonctionnalit&eacute;s peuvent permettre &agrave; ce dernier de suivre votre activit&eacute; sur notre site.<br />\\r\\nLa collecte et l&rsquo;utilisation de ces donn&eacute;es sont r&eacute;gies par les politiques de confidentialit&eacute; propres &agrave; chaque r&eacute;seau social. Le Bloody Mary&rsquo;s Hotel n&rsquo;exerce aucun contr&ocirc;le sur le traitement de ces donn&eacute;es.<br />\\r\\nNous vous invitons &agrave; consulter les politiques de confidentialit&eacute; de ces plateformes afin de mieux comprendre l&rsquo;utilisation de vos donn&eacute;es et les options dont vous disposez pour g&eacute;rer vos param&egrave;tres de confidentialit&eacute;.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>R&eacute;servations</strong><br />\\r\\nLors de la r&eacute;alisation d&rsquo;une r&eacute;servation :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Les informations personnelles et de paiement sont trait&eacute;es de mani&egrave;re s&eacute;curis&eacute;e</li>\\r\\n\\t<li>Les donn&eacute;es sont utilis&eacute;es afin de pr&eacute;parer votre s&eacute;jour et de finaliser les transactions</li>\\r\\n</ul>\\r\\n\\r\\n<p><br />\\r\\n<strong>Pendant votre S&eacute;jour</strong><br />\\r\\nNous pouvons collecter certaines informations li&eacute;es &agrave; votre s&eacute;jour, notamment :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Vos pr&eacute;f&eacute;rences</li>\\r\\n\\t<li>Vos demandes</li>\\r\\n\\t<li>Vos d&eacute;penses</li>\\r\\n\\t<li>Les informations relatives &agrave; votre profil client</li>\\r\\n</ul>\\r\\n\\r\\n<p>Ces donn&eacute;es nous permettent d&rsquo;am&eacute;liorer la qualit&eacute; de nos services et de vous offrir une exp&eacute;rience personnalis&eacute;e.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Stockage et S&eacute;curit&eacute; des Donn&eacute;es</strong><br />\\r\\nVos donn&eacute;es sont stock&eacute;es de mani&egrave;re s&eacute;curis&eacute;e et accessibles uniquement aux personnes d&ucirc;ment autoris&eacute;es.<br />\\r\\nNous mettons en &oelig;uvre des mesures techniques et organisationnelles appropri&eacute;es afin de prot&eacute;ger vos informations. Toutefois, aucun syst&egrave;me ne peut garantir une s&eacute;curit&eacute; absolue, et des risques tels qu&rsquo;un acc&egrave;s non autoris&eacute;, des incidents techniques ou des actes malveillants peuvent survenir.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Dur&eacute;e de Conservation des Donn&eacute;es</strong><br />\\r\\nVos donn&eacute;es sont conserv&eacute;es uniquement pendant la dur&eacute;e n&eacute;cessaire aux finalit&eacute;s op&eacute;rationnelles, contractuelles, l&eacute;gales ou li&eacute;es aux services fournis.</p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Vos droits</strong><br />\\r\\nConform&eacute;ment &agrave; la r&eacute;glementation en vigueur, vous disposez des droits suivants :</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Acc&eacute;der &agrave; vos donn&eacute;es personnelles</li>\\r\\n\\t<li>Demander la rectification de vos donn&eacute;es</li>\\r\\n\\t<li>Demander la suppression de vos donn&eacute;es (sous r&eacute;serve des obligations l&eacute;gales)</li>\\r\\n</ul>\\r\\n\\r\\n<p>Pour exercer ces droits, vous pouvez nous contacter &agrave; l&rsquo;adresse suivante :<br />\\r\\n<a href=\\\"mailto:stay@bloodymarys.com\\\">stay@bloodymarys.com</a></p>\\r\\n\\r\\n<p><br />\\r\\n<strong>Mise &agrave; Jour de la Politique</strong><br />\\r\\nLa pr&eacute;sente Politique de confidentialit&eacute; peut &ecirc;tre modifi&eacute;e &agrave; tout moment.<br />\\r\\nToute modification substantielle sera port&eacute;e &agrave; votre connaissance sur cette page.<br />\\r\\n&nbsp;</p>\\r\\n\", \"visible\": \"1\", \"template\": \"text\", \"fullwidth\": \"false\"}, {\"name\": \"Séparateur\", \"style\": \"with_line\", \"height\": \"0\", \"visible\": \"1\", \"template\": \"hr\", \"fullwidth\": \"false\"}]', 'fr', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `service_contact`
--

CREATE TABLE `service_contact` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `slug` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_contact`
--

INSERT INTO `service_contact` (`id`, `email`, `active`, `created_at`, `updated_at`, `slug`) VALUES
(1, 'stay@bloodymarys.com', 1, '2026-05-11 16:40:08', '2026-05-11 16:49:23', 'stay'),
(2, 'dine@bloodymarys.com', 1, '2026-05-11 16:40:23', '2026-05-11 16:48:11', 'dine'),
(3, 'stay@bloodymarys.com', 1, '2026-05-11 16:40:52', '2026-05-11 16:40:52', NULL),
(4, 'play@bloodymarys.com', 1, '2026-05-11 16:41:13', '2026-05-11 16:49:42', 'play'),
(5, 'stay@bloodymarys.com', 1, '2026-05-11 16:41:28', '2026-05-11 16:41:28', NULL),
(6, 'marketing@bloodymarys.com', 1, '2026-05-11 16:41:44', '2026-05-11 16:41:44', NULL),
(7, 'marketing@bloodymarys.com', 1, '2026-05-11 16:41:55', '2026-05-11 16:41:55', NULL),
(8, 'stay@bloodymarys.com', 1, '2026-05-11 16:42:17', '2026-05-11 16:42:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `service_contact_translation`
--

CREATE TABLE `service_contact_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_contact_translation`
--

INSERT INTO `service_contact_translation` (`id`, `translatable_id`, `title`, `locale`) VALUES
(1, 1, 'Demande de Réservation', 'fr'),
(2, 1, 'Room Inquiry', 'en'),
(3, 2, 'Réservation Restaurant', 'fr'),
(4, 2, 'Restaurant Reservations', 'en'),
(5, 3, 'Questions sur Mon Séjour', 'fr'),
(6, 3, 'Questions Regarding my Stay', 'en'),
(7, 4, 'Réservations d\'Excursions', 'fr'),
(8, 4, 'Excursions Bookings', 'en'),
(9, 5, 'Question Facturation', 'fr'),
(10, 5, 'Room Invoicing', 'en'),
(11, 6, 'Presse', 'fr'),
(12, 6, 'Media & Trade Inquiry', 'en'),
(13, 7, 'Partenariat marketing', 'fr'),
(14, 7, 'Marketing collab', 'en'),
(15, 8, 'Autre', 'fr'),
(16, 8, 'Other', 'en');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `id` int NOT NULL,
  `public` tinyint(1) NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_access`
--

CREATE TABLE `survey_access` (
  `id` int NOT NULL,
  `survey_id` int NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_participation`
--

CREATE TABLE `survey_participation` (
  `id` int NOT NULL,
  `survey_access_id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_participation_detail`
--

CREATE TABLE `survey_participation_detail` (
  `id` int NOT NULL,
  `survey_participation_id` int NOT NULL,
  `survey_question_id` int NOT NULL,
  `survey_question_answer_id` int DEFAULT NULL,
  `value_txt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value_int` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_question`
--

CREATE TABLE `survey_question` (
  `id` int NOT NULL,
  `survey_id` int DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_question_answer`
--

CREATE TABLE `survey_question_answer` (
  `id` int NOT NULL,
  `survey_question_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_question_answer_translation`
--

CREATE TABLE `survey_question_answer_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_question_translation`
--

CREATE TABLE `survey_question_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `survey_translation`
--

CREATE TABLE `survey_translation` (
  `id` int NOT NULL,
  `translatable_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` longtext COLLATE utf8mb4_unicode_ci,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `token_init_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token_password_expired_at` datetime DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `date_expire_password` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `lastname`, `firstname`, `last_login`, `created_at`, `updated_at`, `token_init_password`, `token_password_expired_at`, `active`, `date_expire_password`) VALUES
(1, 'dev@prox-i.pf', '[\"ROLE_ADMIN\"]', '$2y$13$1Xajxb8RsQvcJrw5Xn0vLOWSMZJMQrOkmUwQOomva.aC97BY3fese', 'Cascales', 'Arthur', '2026-04-23 08:00:17', '2026-04-23 18:00:02', '2026-04-23 08:00:17', NULL, NULL, 1, '2026-10-23 18:00:02');

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE `user_group` (
  `user_id` int NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_23A0E66F675F31B` (`author_id`);

--
-- Indexes for table `article_category`
--
ALTER TABLE `article_category`
  ADD PRIMARY KEY (`article_id`,`category_id`),
  ADD KEY `IDX_53A4EDAA7294869C` (`article_id`),
  ADD KEY `IDX_53A4EDAA12469DE2` (`category_id`);

--
-- Indexes for table `article_translation`
--
ALTER TABLE `article_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `article_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_2EEA2F082C2AC5D3` (`translatable_id`);

--
-- Indexes for table `builder_revision`
--
ALTER TABLE `builder_revision`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8C82E8F0F675F31B` (`author_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_translation`
--
ALTER TABLE `category_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_3F207042C2AC5D3` (`translatable_id`);

--
-- Indexes for table `configuration`
--
ALTER TABLE `configuration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `configuration_translation`
--
ALTER TABLE `configuration_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `configuration_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_DFFE27172C2AC5D3` (`translatable_id`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E8FF75CC59027487` (`theme_id`);

--
-- Indexes for table `faq_theme`
--
ALTER TABLE `faq_theme`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faq_theme_translation`
--
ALTER TABLE `faq_theme_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `faq_theme_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_C6A36D9C2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `faq_translation`
--
ALTER TABLE `faq_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `faq_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_50A668562C2AC5D3` (`translatable_id`);

--
-- Indexes for table `file_manager_file`
--
ALTER TABLE `file_manager_file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_file_parent_folder` (`parent_folder_id`),
  ADD KEY `idx_file_owner` (`owner_id`),
  ADD KEY `idx_file_trashed` (`is_trashed`);

--
-- Indexes for table `file_manager_file_star`
--
ALTER TABLE `file_manager_file_star`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_file_user_star` (`file_id`,`user_id`),
  ADD KEY `idx_file_star_file` (`file_id`),
  ADD KEY `idx_file_star_user` (`user_id`);

--
-- Indexes for table `file_manager_folder`
--
ALTER TABLE `file_manager_folder`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B758B6E4989D9B62` (`slug`),
  ADD KEY `idx_folder_parent` (`parent_folder_id`),
  ADD KEY `idx_folder_owner` (`owner_id`),
  ADD KEY `idx_folder_trashed` (`is_trashed`);

--
-- Indexes for table `file_manager_folder_star`
--
ALTER TABLE `file_manager_folder_star`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_folder_user_star` (`folder_id`,`user_id`),
  ADD KEY `idx_folder_star_folder` (`folder_id`),
  ADD KEY `idx_folder_star_user` (`user_id`);

--
-- Indexes for table `file_manager_permission`
--
ALTER TABLE `file_manager_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_file_permission` (`file_id`,`user_id`,`role`,`group_id`),
  ADD UNIQUE KEY `unique_folder_permission` (`folder_id`,`user_id`,`role`,`group_id`),
  ADD KEY `IDX_E19B4A783151C11F` (`granted_by_id`),
  ADD KEY `idx_permission_file` (`file_id`),
  ADD KEY `idx_permission_folder` (`folder_id`),
  ADD KEY `idx_permission_user` (`user_id`),
  ADD KEY `idx_permission_group` (`group_id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_link`
--
ALTER TABLE `footer_link`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6A05B20A2412A144` (`footer_id`);

--
-- Indexes for table `footer_link_translation`
--
ALTER TABLE `footer_link_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `footer_link_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_286018CCC4663E4` (`page_id`),
  ADD KEY `IDX_286018CC2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form_submission`
--
ALTER TABLE `form_submission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D2C216675FF69B7D` (`form_id`);

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_page`
--
ALTER TABLE `home_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_page_translation`
--
ALTER TABLE `home_page_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `home_page_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_C82918482C2AC5D3` (`translatable_id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_offer`
--
ALTER TABLE `job_offer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_288A3A4EBE04EA9` (`job_id`),
  ADD KEY `IDX_288A3A4E5FA33B08` (`job_type_id`);

--
-- Indexes for table `job_offer_translation`
--
ALTER TABLE `job_offer_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `job_offer_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_314D39942C2AC5D3` (`translatable_id`);

--
-- Indexes for table `job_translation`
--
ALTER TABLE `job_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `job_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_D7055E262C2AC5D3` (`translatable_id`);

--
-- Indexes for table `job_type`
--
ALTER TABLE `job_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_type_translation`
--
ALTER TABLE `job_type_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `job_type_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_229672782C2AC5D3` (`translatable_id`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mail_log`
--
ALTER TABLE `mail_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6A2CA10C2B8AF27A` (`media_document_type_id`);

--
-- Indexes for table `media_document_type`
--
ALTER TABLE `media_document_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media_document_type_translation`
--
ALTER TABLE `media_document_type_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `media_document_type_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_53BCF6AF2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `media_translation`
--
ALTER TABLE `media_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `media_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_430137FC2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7D053A93727ACA70` (`parent_id`),
  ADD KEY `IDX_7D053A93C4663E4` (`page_id`);

--
-- Indexes for table `menu_translation`
--
ALTER TABLE `menu_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menu_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_DC955B232C2AC5D3` (`translatable_id`);

--
-- Indexes for table `newsletter_subscriber`
--
ALTER TABLE `newsletter_subscriber`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uniq_newsletter_email` (`email`);

--
-- Indexes for table `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_140AB620F675F31B` (`author_id`);

--
-- Indexes for table `page_onglet`
--
ALTER TABLE `page_onglet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_onglet_translation`
--
ALTER TABLE `page_onglet_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `page_onglet_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_31A571062C2AC5D3` (`translatable_id`);

--
-- Indexes for table `page_translation`
--
ALTER TABLE `page_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `page_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_A3D51B1D2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `service_contact`
--
ALTER TABLE `service_contact`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_83E6B4A4989D9B62` (`slug`);

--
-- Indexes for table `service_contact_translation`
--
ALTER TABLE `service_contact_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `service_contact_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_1B52344B2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_access`
--
ALTER TABLE `survey_access`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2E67E338B3FE509D` (`survey_id`);

--
-- Indexes for table `survey_participation`
--
ALTER TABLE `survey_participation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C04E61B7EABC25E2` (`survey_access_id`);

--
-- Indexes for table `survey_participation_detail`
--
ALTER TABLE `survey_participation_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_60C13DEF4BD21B14` (`survey_participation_id`),
  ADD KEY `IDX_60C13DEFA6DF29BA` (`survey_question_id`),
  ADD KEY `IDX_60C13DEFB234F028` (`survey_question_answer_id`);

--
-- Indexes for table `survey_question`
--
ALTER TABLE `survey_question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_EA000F69B3FE509D` (`survey_id`);

--
-- Indexes for table `survey_question_answer`
--
ALTER TABLE `survey_question_answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7554B719A6DF29BA` (`survey_question_id`);

--
-- Indexes for table `survey_question_answer_translation`
--
ALTER TABLE `survey_question_answer_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `survey_question_answer_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_71EEB542C2AC5D3` (`translatable_id`);

--
-- Indexes for table `survey_question_translation`
--
ALTER TABLE `survey_question_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `survey_question_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_63CF5EBB2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `survey_translation`
--
ALTER TABLE `survey_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `survey_translation_unique_translation` (`translatable_id`,`locale`),
  ADD KEY `IDX_C919A6A2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- Indexes for table `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`user_id`,`group_id`),
  ADD KEY `IDX_8F02BF9DA76ED395` (`user_id`),
  ADD KEY `IDX_8F02BF9DFE54D947` (`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `article_translation`
--
ALTER TABLE `article_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `builder_revision`
--
ALTER TABLE `builder_revision`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category_translation`
--
ALTER TABLE `category_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `configuration`
--
ALTER TABLE `configuration`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `configuration_translation`
--
ALTER TABLE `configuration_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq_theme`
--
ALTER TABLE `faq_theme`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq_theme_translation`
--
ALTER TABLE `faq_theme_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq_translation`
--
ALTER TABLE `faq_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_manager_file`
--
ALTER TABLE `file_manager_file`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_manager_file_star`
--
ALTER TABLE `file_manager_file_star`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_manager_folder`
--
ALTER TABLE `file_manager_folder`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_manager_folder_star`
--
ALTER TABLE `file_manager_folder_star`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_manager_permission`
--
ALTER TABLE `file_manager_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `footer_link`
--
ALTER TABLE `footer_link`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footer_link_translation`
--
ALTER TABLE `footer_link_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `form_submission`
--
ALTER TABLE `form_submission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `home_page`
--
ALTER TABLE `home_page`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_page_translation`
--
ALTER TABLE `home_page_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_offer`
--
ALTER TABLE `job_offer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_offer_translation`
--
ALTER TABLE `job_offer_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_translation`
--
ALTER TABLE `job_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `job_type_translation`
--
ALTER TABLE `job_type_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `mail_log`
--
ALTER TABLE `mail_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media_document_type`
--
ALTER TABLE `media_document_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media_document_type_translation`
--
ALTER TABLE `media_document_type_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media_translation`
--
ALTER TABLE `media_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu_translation`
--
ALTER TABLE `menu_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_subscriber`
--
ALTER TABLE `newsletter_subscriber`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `page_onglet`
--
ALTER TABLE `page_onglet`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_onglet_translation`
--
ALTER TABLE `page_onglet_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_translation`
--
ALTER TABLE `page_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `service_contact`
--
ALTER TABLE `service_contact`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `service_contact_translation`
--
ALTER TABLE `service_contact_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_access`
--
ALTER TABLE `survey_access`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_participation`
--
ALTER TABLE `survey_participation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_participation_detail`
--
ALTER TABLE `survey_participation_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_question`
--
ALTER TABLE `survey_question`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_question_answer`
--
ALTER TABLE `survey_question_answer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_question_answer_translation`
--
ALTER TABLE `survey_question_answer_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_question_translation`
--
ALTER TABLE `survey_question_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_translation`
--
ALTER TABLE `survey_translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_23A0E66F675F31B` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `article_category`
--
ALTER TABLE `article_category`
  ADD CONSTRAINT `FK_53A4EDAA12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_53A4EDAA7294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `article_translation`
--
ALTER TABLE `article_translation`
  ADD CONSTRAINT `FK_2EEA2F082C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `article` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `builder_revision`
--
ALTER TABLE `builder_revision`
  ADD CONSTRAINT `FK_8C82E8F0F675F31B` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `category_translation`
--
ALTER TABLE `category_translation`
  ADD CONSTRAINT `FK_3F207042C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `category` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `configuration_translation`
--
ALTER TABLE `configuration_translation`
  ADD CONSTRAINT `FK_DFFE27172C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `configuration` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `faq`
--
ALTER TABLE `faq`
  ADD CONSTRAINT `FK_E8FF75CC59027487` FOREIGN KEY (`theme_id`) REFERENCES `faq_theme` (`id`);

--
-- Constraints for table `faq_theme_translation`
--
ALTER TABLE `faq_theme_translation`
  ADD CONSTRAINT `FK_C6A36D9C2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `faq_theme` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `faq_translation`
--
ALTER TABLE `faq_translation`
  ADD CONSTRAINT `FK_50A668562C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `faq` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `file_manager_file`
--
ALTER TABLE `file_manager_file`
  ADD CONSTRAINT `FK_29082FE37E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_29082FE3E76796AC` FOREIGN KEY (`parent_folder_id`) REFERENCES `file_manager_folder` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `file_manager_file_star`
--
ALTER TABLE `file_manager_file_star`
  ADD CONSTRAINT `FK_498EE63B93CB796C` FOREIGN KEY (`file_id`) REFERENCES `file_manager_file` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_498EE63BA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `file_manager_folder`
--
ALTER TABLE `file_manager_folder`
  ADD CONSTRAINT `FK_B758B6E47E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B758B6E4E76796AC` FOREIGN KEY (`parent_folder_id`) REFERENCES `file_manager_folder` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `file_manager_folder_star`
--
ALTER TABLE `file_manager_folder_star`
  ADD CONSTRAINT `FK_B8981D21162CB942` FOREIGN KEY (`folder_id`) REFERENCES `file_manager_folder` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B8981D21A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `file_manager_permission`
--
ALTER TABLE `file_manager_permission`
  ADD CONSTRAINT `FK_E19B4A78162CB942` FOREIGN KEY (`folder_id`) REFERENCES `file_manager_folder` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_E19B4A783151C11F` FOREIGN KEY (`granted_by_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_E19B4A7893CB796C` FOREIGN KEY (`file_id`) REFERENCES `file_manager_file` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_E19B4A78A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_E19B4A78FE54D947` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `footer_link`
--
ALTER TABLE `footer_link`
  ADD CONSTRAINT `FK_6A05B20A2412A144` FOREIGN KEY (`footer_id`) REFERENCES `footer` (`id`);

--
-- Constraints for table `footer_link_translation`
--
ALTER TABLE `footer_link_translation`
  ADD CONSTRAINT `FK_286018CC2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `footer_link` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_286018CCC4663E4` FOREIGN KEY (`page_id`) REFERENCES `page` (`id`);

--
-- Constraints for table `form_submission`
--
ALTER TABLE `form_submission`
  ADD CONSTRAINT `FK_D2C216675FF69B7D` FOREIGN KEY (`form_id`) REFERENCES `form` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `home_page_translation`
--
ALTER TABLE `home_page_translation`
  ADD CONSTRAINT `FK_C82918482C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `home_page` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_offer`
--
ALTER TABLE `job_offer`
  ADD CONSTRAINT `FK_288A3A4E5FA33B08` FOREIGN KEY (`job_type_id`) REFERENCES `job_type` (`id`),
  ADD CONSTRAINT `FK_288A3A4EBE04EA9` FOREIGN KEY (`job_id`) REFERENCES `job` (`id`);

--
-- Constraints for table `job_offer_translation`
--
ALTER TABLE `job_offer_translation`
  ADD CONSTRAINT `FK_314D39942C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `job_offer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_translation`
--
ALTER TABLE `job_translation`
  ADD CONSTRAINT `FK_D7055E262C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `job` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_type_translation`
--
ALTER TABLE `job_type_translation`
  ADD CONSTRAINT `FK_229672782C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `job_type` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `FK_6A2CA10C2B8AF27A` FOREIGN KEY (`media_document_type_id`) REFERENCES `media_document_type` (`id`);

--
-- Constraints for table `media_document_type_translation`
--
ALTER TABLE `media_document_type_translation`
  ADD CONSTRAINT `FK_53BCF6AF2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `media_document_type` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `media_translation`
--
ALTER TABLE `media_translation`
  ADD CONSTRAINT `FK_430137FC2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `media` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `FK_7D053A93727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `menu` (`id`),
  ADD CONSTRAINT `FK_7D053A93C4663E4` FOREIGN KEY (`page_id`) REFERENCES `page` (`id`);

--
-- Constraints for table `menu_translation`
--
ALTER TABLE `menu_translation`
  ADD CONSTRAINT `FK_DC955B232C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `menu` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `page`
--
ALTER TABLE `page`
  ADD CONSTRAINT `FK_140AB620F675F31B` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `page_onglet_translation`
--
ALTER TABLE `page_onglet_translation`
  ADD CONSTRAINT `FK_31A571062C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `page_onglet` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `page_translation`
--
ALTER TABLE `page_translation`
  ADD CONSTRAINT `FK_A3D51B1D2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `page` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `service_contact_translation`
--
ALTER TABLE `service_contact_translation`
  ADD CONSTRAINT `FK_1B52344B2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `service_contact` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_access`
--
ALTER TABLE `survey_access`
  ADD CONSTRAINT `FK_2E67E338B3FE509D` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`);

--
-- Constraints for table `survey_participation`
--
ALTER TABLE `survey_participation`
  ADD CONSTRAINT `FK_C04E61B7EABC25E2` FOREIGN KEY (`survey_access_id`) REFERENCES `survey_access` (`id`);

--
-- Constraints for table `survey_participation_detail`
--
ALTER TABLE `survey_participation_detail`
  ADD CONSTRAINT `FK_60C13DEF4BD21B14` FOREIGN KEY (`survey_participation_id`) REFERENCES `survey_participation` (`id`),
  ADD CONSTRAINT `FK_60C13DEFA6DF29BA` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_question` (`id`),
  ADD CONSTRAINT `FK_60C13DEFB234F028` FOREIGN KEY (`survey_question_answer_id`) REFERENCES `survey_question_answer` (`id`);

--
-- Constraints for table `survey_question`
--
ALTER TABLE `survey_question`
  ADD CONSTRAINT `FK_EA000F69B3FE509D` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`);

--
-- Constraints for table `survey_question_answer`
--
ALTER TABLE `survey_question_answer`
  ADD CONSTRAINT `FK_7554B719A6DF29BA` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_question` (`id`);

--
-- Constraints for table `survey_question_answer_translation`
--
ALTER TABLE `survey_question_answer_translation`
  ADD CONSTRAINT `FK_71EEB542C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `survey_question_answer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_question_translation`
--
ALTER TABLE `survey_question_translation`
  ADD CONSTRAINT `FK_63CF5EBB2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `survey_question` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_translation`
--
ALTER TABLE `survey_translation`
  ADD CONSTRAINT `FK_C919A6A2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `survey` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_group`
--
ALTER TABLE `user_group`
  ADD CONSTRAINT `FK_8F02BF9DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_8F02BF9DFE54D947` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
