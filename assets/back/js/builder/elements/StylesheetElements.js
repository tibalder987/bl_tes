import FormBuilder from './FormBuilder';

export default function (builderData = {}) {

    return [
        {
            category: 'Média',
            icon: 'fa-images',
            name: 'Slider',
            template: 'slider',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addRepeatable('slides', {
                    label: 'Slide',
                    addButtonText: '+ Ajouter un slide',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addNumber(`slides][${idx}][order`, 'Ordre')
                            .addImage(`slides][${idx}][imagePath`, 'Image arrière plan (1387px X 440px)', {
                                required: i <= 2,
                                format: '1387x440'
                            })
                            .addText(`slides][${idx}][title`, 'Titre du slider', { required: i <= 2, span: 2 })
                            .addText(`slides][${idx}][subTitle`, 'Sous-titre du slider', { span: 2 })
                            .row()
                            .addText(`slides][${idx}][buttonTitle`, 'Libellé du bouton')
                            .addText(`slides][${idx}][buttonPath`, 'URL de redirection du bouton')
                            .endRow();
                    }
                })
                .render()
        },
        {
            category: 'Média',
            icon: 'fa-images',
            name: 'Carousel',
            template: 'carousel',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addRepeatable('images', {
                    label: 'Image',
                    addButtonText: '+ Ajouter une image',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`images][${idx}][imagePath`, 'Image arrière plan', {
                                required: i <= 2,
                                acceptedFormats: 'image/jpeg,image/png'
                            });
                    }
                })
                .render()
        },
        {
            category: 'Basique',
            icon: 'fa-heading',
            name: 'Titre (H1 à H6)',
            template: 'title',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('alignment', 'Alignement', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                .endRow()
                .row()
                .addSelect('type', 'Type', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .endRow()
                .addText('title', 'Titre', { span: 2 })
                .row()
                .addSelect('color', 'Couleur', { primary: 'Defaut', body: 'Noir' }, { required: true })
                .addSelect('subline', 'Souligné', { false: 'Non', true: 'Oui' }, { required: true })
                .endRow()
                .render()
        },
        {
            category: 'Mise en page',
            icon: 'fa-image',
            name: 'Bandeau',
            template: 'bandeau',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('height', 'Hauteur du bandeau', { false: 'normal', true: 'Ecran', entete: 'Entête' }, { required: true })
                .endRow()
                .addImage('imagePath', 'Image', { acceptedFormats: 'image/jpeg,image/png' })
                .row()
                .addSelect('alignment', 'Alignement', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                .addText('toptitle', 'Titre au dessus')
                .endRow()
                .row()
                .addSelect('type', 'Type', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .endRow()
                .addText('title', 'Titre', { span: 2 })
                .addCKEditor('description', 'Description')
                .row()
                .addText('buttonTitle', 'Libellé du bouton')
                .addText('buttonPath', 'URL de redirection du bouton')
                .endRow()
                .addSelect('target', 'Ouverture du lien', { _blank: 'Nouvelle fenêtre', _self: 'Fenêtre actuelle' }, { required: true, span: 2 })
                .render()
        },
        {
            category: 'Basique',
            icon: 'fa-align-left',
            name: 'Texte',
            template: 'text',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addCKEditor('text', 'Contenu', { required: true })
                .render()
        },
        {
            category: 'Basique',
            icon: 'fa-align-justify',
            name: 'Texte avec fond',
            template: 'text_fond',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addCKEditor('text', 'Contenu', { required: true })
                .render()
        },
        {
            category: 'Basique',
            icon: 'fa-image',
            name: 'Image',
            template: 'image',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addImage('imagePath1', 'Image', { required: true, acceptedFormats: 'image/jpeg,image/png' })
                .render()
        },
        {
            category: 'Basique',
            icon: 'fa-link',
            name: 'Bouton',
            template: 'button',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('alignment', 'Alignement', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                .endRow()
                .row()
                .addText('title', 'Titre', { required: true })
                .addUrl('url', 'Lien', { required: true, showTooltip: true })
                .endRow()
                .addSelect('target', 'Ouverture du lien', { _blank: 'Nouvelle fenêtre', _self: 'Fenêtre actuelle' }, { required: true, span: 2 })
                .render()
        },
        {
            category: 'Mise en page',
            icon: 'fa-minus',
            name: 'Séparateur',
            template: 'hr',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('style', 'Style', { no_line: 'Sans ligne', with_line: 'Avec Ligne' }, { required: true })
                .endRow()
                .addSelect('height', 'Espacement', { 4: 'Normal', 5: 'Grand', 0: 'Petit' }, { required: true })
                .render()
        },
        {
            category: 'Basique',
            icon: 'fa-newspaper',
            name: 'Block Titre et texte',
            template: 'block_title_text',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('alignment', 'Alignement du titre', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                .addSelect('type', 'Type', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .endRow()
                .addText('title', 'Titre', { required: true, span: 2 })
                .addCKEditor('contenu1', 'Contenu', { required: true })
                .render()
        },
        {
            category: 'Mise en page',
            icon: 'fa-columns',
            name: 'Block Texte 2 colonnes',
            template: 'block_text',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('type', 'Type', { 13: '1/3 - 2/3', 12: '1/2 - 1/2', 23: '2/3 - 1/3' }, { required: true })
                .endRow()
                .fieldset('Colonne gauche', builder => builder
                    .addText('title1', 'Titre gauche')
                    .addCKEditor('contenu1', 'Contenu gauche')
                )
                .fieldset('Colonne droite', builder => builder
                    .addText('title2', 'Titre droit')
                    .addCKEditor('contenu2', 'Contenu droit')
                )
                .render()
        },
        {
            category: 'Mise en page',
            icon: 'fa-images',
            name: 'Block Image colonnes',
            template: 'block_image_column234',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('alignment', 'Alignement des blocks', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                .endRow()
                .addRepeatable('columns', {
                    label: 'Colonne',
                    addButtonText: '+ Ajouter une colonne',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`columns][${idx}][imagePath`, `Image ${i}ère colonne`, {
                                required: i <= 2,
                                acceptedFormats: 'image/jpeg,image/png'
                            })
                            .addText(`columns][${idx}][title`, 'Titre', { required: i <= 2, span: 2 })
                            .addText(`columns][${idx}][contenu`, 'Titre du lien', { span: 2 })
                            .addText(`columns][${idx}][buttonPath`, 'Lien de redirection', { span: 2 });
                    }
                })
                .render()
        },
        {
            category: 'Mise en page',
            icon: 'fa-icons',
            name: 'Block Picto colonnes',
            template: 'block_picto_column234',
            form: new FormBuilder(builderData)
                .addSelect('alignment', 'Alignement des blocks', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                .addRepeatable('columns', {
                    label: 'Colonne',
                    addButtonText: '+ Ajouter une colonne',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addIconPicker(`columns][${idx}][iconPath`, `Picto ${i}ère colonne`, { required: i === 1 })
                            .addText(`columns][${idx}][title`, `Titre ${i}ère colonne`, { required: i === 1, span: 2 })
                            .addCKEditor(`columns][${idx}][contenu`, `Contenu ${i}ère colonne`, { required: i === 1 })
                            .addText(`columns][${idx}][buttonPath`, `Lien ${i}ère colonne`, { required: i === 1, span: 2 });
                    }
                })
                .render()
        },
        {
            category: 'Média',
            icon: 'fa-photo-video',
            name: 'Block Image-Vidéo 2 colonnes',
            template: 'block_image_video_column2',
            form: new FormBuilder(builderData)
                .addSelect('position', 'Affichage', { image_video: 'Image à gauche - Vidéo à droite', video_image: 'Vidéo à gauche - Image à droite' }, { required: true })
                .fieldset('Image', builder => builder
                    .addImage('imagePath', 'Image', { required: true, acceptedFormats: 'image/jpeg,image/png' })
                    .addText('titleImage', "Libellé de l'image", { required: true, span: 2 })
                    .addCKEditor('contenuImage', "Contenu de l'image", { required: true })
                )
                .fieldset('Vidéo', builder => builder
                    .addUrl('videoPath', 'URL de la vidéo', { required: true, showTooltip: true, span: 2 })
                    .addText('titleVideo', 'Libellé de la vidéo', { required: true, span: 2 })
                    .addCKEditor('contenuVideo', 'Contenu de la vidéo', { required: true })
                )
                .render()
        },
        {
            category: 'Mise en page',
            icon: 'fa-id-card',
            name: 'Block Image-Texte 2 colonnes',
            template: 'block_image_texte_column2',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('type', 'Type', { 13: '1/3 - 2/3', 12: '1/2 - 1/2', 23: '2/3 - 1/3' }, { required: true })
                .addSelect('position', 'Affichage', { image_text: 'Image à gauche - Texte à droite', text_image: 'Texte à gauche - Image à droite' }, { required: true })
                .endRow()
                .fieldset('Image', builder => builder
                    .addImage('imagePath', 'Image', { required: true, acceptedFormats: 'image/jpeg,image/png' })
                )
                .fieldset('Texte', builder => builder
                    .addText('toptitle', 'Titre au dessus', { span: 2 })
                    .row()
                    .addSelect('typetitle', 'Balise Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                    .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                    .endRow()
                    .row()
                    .addText('title', 'Titre')
                    .addText('subtitle', 'Sous-titre')
                    .endRow()
                    .addSelect('subtitle_class', 'Couleur Sous-titre', { primary: 'Défaut', secondary: 'secondaire' }, { required: true })
                    .addCKEditor('contenu', 'Contenu', { required: true })
                )
                .render()
        },
        {
            category: 'Média',
            icon: 'fa-video',
            name: 'Block Video-Texte 2 colonnes',
            template: 'block_video_texte_column2',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('type', 'Type', { 13: '1/3 - 2/3', 12: '1/2 - 1/2', 23: '2/3 - 1/3' }, { required: true })
                .addSelect('position', 'Affichage', { image_text: 'Image à gauche - Texte à droite', text_image: 'Texte à gauche - Image à droite' }, { required: true })
                .endRow()
                .fieldset('Vidéo', builder => builder
                    .addUrl('videoPath', 'URL de la vidéo', { required: true, showTooltip: true, span: 2 })
                )
                .fieldset('Texte', builder => builder
                    .addText('toptitle', 'Titre au dessus', { span: 2 })
                    .row()
                    .addSelect('typetitle', 'Balise Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                    .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                    .endRow()
                    .row()
                    .addText('title', 'Titre')
                    .addText('subtitle', 'Sous-titre')
                    .endRow()
                    .addSelect('subtitle_class', 'Couleur Sous-titre', { primary: 'Défaut', secondary: 'secondaire' }, { required: true })
                    .addCKEditor('contenu', 'Contenu', { required: true })
                )
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-chart-bar',
            name: 'Block Chiffres clés-Texte 2 colonnes',
            template: 'block_keydata_texte_column2',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .row()
                .addSelect('type', 'Type', { 13: '1/3 - 2/3', 12: '1/2 - 1/2', 23: '2/3 - 1/3' }, { required: true })
                .addSelect('position', 'Affichage', { image_text: 'Chiffre clé à gauche - Texte à droite', text_image: 'Texte à gauche - Chiffre clé' }, { required: true })
                .endRow()
                .fieldset('Texte', builder => builder
                    .addText('toptitle', 'Titre au dessus', { span: 2 })
                    .row()
                    .addSelect('typetitle', 'Balise Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                    .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                    .endRow()
                    .row()
                    .addText('title', 'Titre', { required: true })
                    .addText('subtitle', 'Sous-titre')
                    .endRow()
                    .addSelect('subtitle_class', 'Couleur Sous-titre', { primary: 'Défaut', secondary: 'secondaire' }, { required: true })
                    .addCKEditor('contenu', 'Contenu', { required: true })
                )
                .fieldset('Chiffres clés', builder => builder
                    .addCKEditor('contenu2', 'Contenu', { required: true })
                )
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-folder',
            name: 'Block Onglet',
            template: 'block_onglet_text',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addRepeatable('onglets', {
                    label: 'Onglet',
                    addButtonText: '+ Ajouter un onglet',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`onglets][${idx}][libelle`, "Libellé de l'onglet", { required: i <= 2, span: 2 })
                            .addCKEditor(`onglets][${idx}][contenu`, 'Contenu');
                    }
                })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-question-circle',
            name: 'Block Onglet FAQ',
            template: 'block_onglet_faq',
            form: new FormBuilder(builderData)
                .addRepeatable('onglets', {
                    label: 'Onglet',
                    addButtonText: '+ Ajouter un onglet',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`onglets][${idx}][libelle`, "Libellé de l'onglet", { required: i <= 2, span: 2 })
                            .row()
                            .addText(`onglets][${idx}][title`, 'Titre du block')
                            .addText(`onglets][${idx}][subtitle`, 'Sous-titre du block')
                            .endRow()
                            .addRepeatable(`onglets][${idx}][faqs`, {
                                label: 'FAQ',
                                min: 1,
                                max: 6,
                                initial: 2,
                                addButtonText: '+ Ajouter une FAQ',
                                removeButtonText: 'Supprimer',
                                template: (j, subBuilder) => {
                                    const jdx = typeof j === 'string' ? j + '_MINUS_1' : j - 1;
                                    return subBuilder
                                        .addNumber(`onglets][${idx}][faqs][${jdx}][order`, 'Ordre')
                                        .addText(`onglets][${idx}][faqs][${jdx}][question`, "Titre de la question", { required: j <= 2 && i <= 2, span: 2 })
                                        .addText(`onglets][${idx}][faqs][${jdx}][answer`, "Réponse", { required: j <= 2 && i <= 2, span: 2 });
                                }
                            });
                    }
                })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-file-download',
            name: 'Block "Documents téléchargeables"',
            template: 'block_documents_telechargeables',
            form: new FormBuilder(builderData)
                .addRepeatable('documents', {
                    label: 'Document',
                    addButtonText: '+ Ajouter un document',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`documents][${idx}][imagePath`, 'Document', { required: i === 1, acceptedFormats: 'image/jpeg,image/png,application/pdf' })
                            .addText(`documents][${idx}][title`, 'Titre', { required: i === 1, span: 2 });
                    }
                })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-folder-open',
            name: 'Onglet de page',
            template: 'onglet',
            form: new FormBuilder(builderData)
                .addRepeatable('onglets', {
                    label: 'Onglet',
                    addButtonText: '+ Ajouter un onglet',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`onglets][${idx}][libelle`, `Onglet ${i} - Libellé`, { span: 2 })
                            .addSelect(`onglets][${idx}][contenu`, `Onglet ${i} - Contenu`, builderData.onglets, { span: 2 });
                    }
                })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-table',
            name: 'Tableau',
            template: 'table',
            form: new FormBuilder(builderData)
                .addHelp('Choisir une option d\'entête et remplir autant de lignes / colonnes que nécessaire')
                .row()
                .addSelect('headers', 'Entêtes', { first_line: 'Première ligne', first_two_lines: 'Première et deuxième lignes' })
                .addSelect('type', 'Type', { regular: 'Tableau standard', pivot: 'Tableau croisé' })
                .endRow()
                .addTable(20, 5)
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-table',
            name: 'Block Image-Tableau 2 colonnes',
            template: 'block_image_tableau_column2',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .row()
                .addSelect('colType', 'Type', { 13: '1/3 - 2/3', 12: '1/2 - 1/2', 23: '2/3 - 1/3' }, { required: true })
                .addSelect('position', 'Affichage', { image_tableau: 'Image à gauche - Tableau à droite', tableau_image: 'Tableau à gauche - Image à droite' }, { required: true })
                .endRow()
                .fieldset('Image', builder => builder
                    .addImage('imagePath', 'Image', { required: true, acceptedFormats: 'image/jpeg,image/png' })
                    .addText('titleImg', 'Titre de l\'image', { span: 2 })
                )
                .fieldset('Tableau', builder => builder
                    .addHelp('Choisir une option d\'entête et remplir autant de lignes / colonnes que nécessaire')
                    .row()
                    .addSelect('headers', 'Entêtes', { first_line: 'Première ligne', first_two_lines: 'Première et deuxième lignes' })
                    .addSelect('type', 'Type', { regular: 'Tableau standard', pivot: 'Tableau croisé' })
                    .endRow()
                    .addTable(8, 5)
                )
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-chevron-down',
            name: 'Accordéon',
            template: 'accordion',
            form: new FormBuilder(builderData)
                .addRepeatable('items', {
                    label: 'Accordéon',
                    addButtonText: '+ Ajouter un item',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`items][${idx}][title`, 'Titre', { span: 2 })
                            .addImage(`items][${idx}][imagePath`, 'Image', { acceptedFormats: 'image/jpeg,image/png' })
                            .addCKEditor(`items][${idx}][paragraph`, 'Paragraphe');
                    }
                })
                .render()
        },
        {
            category: 'Dynamique',
            icon: 'fa-rss',
            name: 'Block Derniers articles',
            template: 'last_news',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('type', 'Type article', { 1: 'Actualités', 3: "Évènement" }, { required: true })
                .addNumber('limit', "Nombre d'élément(s) maximum")
                .endRow()
                .render()
        },
        {
            category: 'Dynamique',
            icon: 'fa-newspaper',
            name: 'Block Actualités',
            template: 'actualites',
            form: new FormBuilder(builderData)
                .row()
                .addSelect('categoryID', 'Filtre des actualités via une catégorie', builderData.categories)
                .addNumber('limit', "Nombre d'élément(s) maximum")
                .endRow()
                .addText('topTitle', "Titre top", { span: 2 })
                .row()
                .addSelect('typetitle', 'Balise Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .endRow()
                .addText('title', "Titre du bloc", { span: 2 })
                .addCKEditor('description', "Description du bloc")
                .addText('buttonTitle', "Titre du bouton de redirection", { span: 2 })
                .render()
        },
        {
            category: 'Média',
            icon: 'fa-youtube',
            name: 'Vidéo Youtube',
            template: 'youtube',
            form: new FormBuilder(builderData)
                .addUrl('videoPath', 'URL de la vidéo', { required: true, showTooltip: true })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-chart-line',
            name: 'Block Chiffres clés',
            template: 'block_key_datas',
            form: new FormBuilder(builderData)
                .addImage('imagePath', 'Image', { acceptedFormats: 'image/jpeg,image/png' })
                .row()
                .addSelect('typetitle', 'Balise Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .endRow()
                .addText('title', "Titre du bloc", { span: 2 })
                .addRepeatable('keys', {
                    label: 'Chiffre clé',
                    addButtonText: '+ Ajouter un chiffre clé',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`keys][${idx}][key`, `Chiffre clé ${i + 1}`, { required: i < 3, span: 2 })
                            .addText(`keys][${idx}][data`, "Descriptif", { required: i < 3, span: 2 });
                    }
                })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-th-large',
            name: 'Block 4 Cards',
            template: 'block_4_cards',
            form: new FormBuilder(builderData)
                .addText('topTitle', "Titre top du bloc", { span: 2 })
                .row()
                .addSelect('typetitle', 'Balise Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .addSelect('styletitle', 'Style Hn', { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' }, { required: true })
                .endRow()
                .addText('title', "Titre du bloc", { span: 2 })
                .row()
                .addText('buttonTitle', "Titre du bouton de redirection")
                .addText('buttonPath', "URL de redirection")
                .endRow()
                .addRepeatable('cards', {
                    label: 'Carte',
                    addButtonText: '+ Ajouter une carte',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addSelect(`cards][${idx}][alignment`, 'Alignement des éléments', { start: 'Gauche', center: 'Centre', end: 'Droite' }, { required: true })
                            .addIconPicker(`cards][${idx}][imageIco`, 'Icône')
                            .addText(`cards][${idx}][title`, "Titre de la carte", { required: i === 0, span: 2 })
                            .addText(`cards][${idx}][description`, "Description de la carte", { span: 2 })
                            .row()
                            .addText(`cards][${idx}][linkTitle`, "Titre du lien")
                            .addText(`cards][${idx}][linkPath`, "URL redirection")
                            .endRow();
                    }
                })
                .render()
        },
        {
            category: 'Avancé',
            icon: 'fa-list-ol',
            name: 'Etapes',
            template: 'step',
            form: new FormBuilder(builderData)
                .addText('title', 'Titre', { span: 2 })
                .addImage('imagePath', 'Image', { acceptedFormats: 'image/jpeg,image/png' })
                .addRepeatable('steps', {
                    label: 'Etape',
                    addButtonText: '+ Ajouter une étape',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`steps][${idx}][step`, 'Etape n°', { span: 2 })
                            .addText(`steps][${idx}][title`, 'Titre', { span: 2 })
                            .addCKEditor(`steps][${idx}][paragraph`, 'Paragraphe');
                    }
                })
                .render()
        },
        // ==================== NOUVEAUX ÉLÉMENTS ====================
        {
            category: 'Contenu interactif',
            icon: 'fa-rectangle-list',
            name: 'Formulaire Avancé',
            template: 'form_builder',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addText('title', 'Titre au-dessus du formulaire', { span: 2 })
                .addCKEditor('description', 'Description')
                .addSelect('formId', 'Sélectionnez le formulaire à afficher', builderData.forms || {}, { required: true, span: 2 })
                .render()
        },
        {
            category: 'Marketing',
            icon: 'fa-star',
            name: 'Hero Section',
            template: 'hero_section',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addImage('backgroundImage', 'Image de fond (1920x1080)', { required: true, format: '1920x1080' })
                .addSelect('overlayOpacity', 'Opacité du filtre', { '0': 'Aucun', '0.2': 'Léger (20%)', '0.5': 'Moyen (50%)', '0.8': 'Sombre (80%)' }, { required: true })
                .addText('title', 'Titre principal', { span: 2, required: true })
                .addText('subtitle', 'Sous-titre', { span: 2 })
                .fieldset('Bouton Principal', builder => builder
                    .addText('btn1_text', 'Libellé')
                    .addUrl('btn1_url', 'Lien')
                )
                .fieldset('Bouton Secondaire', builder => builder
                    .addText('btn2_text', 'Libellé')
                    .addUrl('btn2_url', 'Lien')
                )
                .render()
        },
        {
            category: 'Marketing',
            icon: 'fa-table',
            name: 'Tableaux de Prix',
            template: 'pricing_table',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addText('mainTitle', 'Titre de la section', { span: 2 })
                .addRepeatable('plans', {
                    label: 'Offre',
                    addButtonText: '+ Ajouter une offre',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`plans][${idx}][name`, 'Nom de l\'offre (ex: Standard)', { required: true })
                            .addSelect(`plans][${idx}][highlight`, 'Mettre en avant', { false: 'Non', true: 'Oui' })
                            .row()
                            .addText(`plans][${idx}][price`, 'Prix')
                            .addText(`plans][${idx}][currency`, 'Devise (ex: €)', { defaultValue: '€' })
                            .endRow()
                            .addText(`plans][${idx}][period`, 'Période (ex: /mois)')
                            .addTextarea(`plans][${idx}][features`, 'Fonctionnalités (une par ligne)', { rows: 5 })
                            .fieldset('Bouton', btnBuilder => btnBuilder
                                .addText(`plans][${idx}][btn_text`, 'Libellé')
                                .addUrl(`plans][${idx}][btn_url`, 'Lien')
                            );
                    }
                })
                .render()
        },
        {
            category: 'Marketing',
            icon: 'fa-comments',
            name: 'Témoignages',
            template: 'testimonials',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addText('title', 'Titre de la section', { span: 2 })
                .addRepeatable('reviews', {
                    label: 'Témoignage',
                    addButtonText: '+ Ajouter un avis',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`reviews][${idx}][avatar`, 'Photo (Avatar)', { format: '200x200' })
                            .row()
                            .addText(`reviews][${idx}][name`, 'Nom', { required: true })
                            .addText(`reviews][${idx}][position`, 'Poste / Entreprise')
                            .endRow()
                            .addSelect(`reviews][${idx}][stars`, 'Note', { 5: '⭐⭐⭐⭐⭐', 4: '⭐⭐⭐⭐', 3: '⭐⭐⭐', 2: '⭐⭐', 1: '⭐' }, { required: true })
                            .addTextarea(`reviews][${idx}][quote`, 'Citation', { required: true, rows: 3 });
                    }
                })
                .render()
        },
        {
            category: 'Marketing',
            icon: 'fa-handshake-o',
            name: 'Barre de Logos',
            template: 'logo_bar',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addRepeatable('logos', {
                    label: 'Partenaire',
                    addButtonText: '+ Ajouter un logo',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`logos][${idx}][image`, 'Logo', { required: true })
                            .addUrl(`logos][${idx}][url`, 'Lien (optionnel)');
                    }
                })
                .render()
        },
        {
            category: 'Visuel',
            icon: 'fa-th',
            name: 'Galerie Masonry',
            template: 'masonry_gallery',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addRepeatable('images', {
                    label: 'Image',
                    addButtonText: '+ Ajouter une image',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`images][${idx}][path`, 'Image', { required: true })
                            .addText(`images][${idx}][caption`, 'Légende (optionnel)');
                    }
                })
                .render()
        },
        {
            category: 'Visuel',
            icon: 'fa-adjust',
            name: 'Comparateur Avant/Après',
            template: 'before_after',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .row()
                .addImage('image_before', 'Image "Avant"', { required: true })
                .addImage('image_after', 'Image "Après"', { required: true })
                .endRow()
                .row()
                .addText('label_before', 'Label "Avant"', { defaultValue: 'Avant' })
                .addText('label_after', 'Label "Après"', { defaultValue: 'Après' })
                .endRow()
                .render()
        },
        {
            category: 'Corporate',
            icon: 'fa-history',
            name: 'Timeline',
            template: 'timeline',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addSelect('orientation', 'Orientation', { vertical: 'Verticale', horizontal: 'Horizontale' }, { required: true })
                .addRepeatable('events', {
                    label: 'Événement',
                    addButtonText: '+ Ajouter un événement',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addText(`events][${idx}][date`, 'Date / Année', { required: true })
                            .addText(`events][${idx}][title`, 'Titre', { required: true })
                            .addTextarea(`events][${idx}][description`, 'Description', { rows: 3 })
                            .addIconPicker(`events][${idx}][icon`, 'Icône');
                    }
                })
                .render()
        },
        {
            category: 'Corporate',
            icon: 'fa-users',
            name: 'Équipe',
            template: 'team_members',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addText('title', 'Titre de la section', { span: 2 })
                .addRepeatable('members', {
                    label: 'Membre',
                    addButtonText: '+ Ajouter un membre',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .addImage(`members][${idx}][photo`, 'Photo', { format: '400x400', required: true })
                            .row()
                            .addText(`members][${idx}][name`, 'Nom', { required: true })
                            .addText(`members][${idx}][position`, 'Poste', { required: true })
                            .endRow()
                            .addTextarea(`members][${idx}][bio`, 'Courte biographie', { rows: 2 })
                            .row()
                            .addUrl(`members][${idx}][linkedin`, 'LinkedIn')
                            .addUrl(`members][${idx}][twitter`, 'Twitter / X')
                            .endRow();
                    }
                })
                .render()
        },
        {
            category: 'Corporate',
            icon: 'fa-map-marker',
            name: 'Google Maps Pro',
            template: 'google_maps',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addText('address', 'Adresse complète', { span: 2, required: true, helpText: 'Utilisée pour centrer la carte si lat/lng ne sont pas fournis' })
                .row()
                .addNumber('latitude', 'Latitude', { helpText: 'Ex: 48.8566' })
                .addNumber('longitude', 'Longitude', { helpText: 'Ex: 2.3522' })
                .endRow()
                .row()
                .addNumber('zoom', 'Niveau de zoom (1-20)', { defaultValue: 15, min: 1, max: 20 })
                .addSelect('mapStyle', 'Style de carte', { light: 'Clair', dark: 'Sombre', satellite: 'Satellite' }, { required: true })
                .endRow()
                .fieldset('Marqueur', builder => builder
                    .addText('markerTitle', 'Titre du marqueur')
                    .addTextarea('markerDesc', 'Description (Info-bulle)')
                )
                .render()
        },
        {
            category: 'Corporate',
            icon: 'fa-sort-numeric-asc',
            name: 'Compteurs Animés',
            template: 'animated_counters',
            form: new FormBuilder(builderData)
                .addSelect('fullwidth', 'Pleine largeur', { false: 'Non', true: 'Oui' }, { required: true })
                .addImage('backgroundImage', 'Image de fond (optionnel)')
                .addRepeatable('counters', {
                    label: 'Compteur',
                    addButtonText: '+ Ajouter un compteur',
                    removeButtonText: 'Supprimer',
                    template: (i, builder) => {
                        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
                        return builder
                            .row()
                            .addNumber(`counters][${idx}][number`, 'Nombre final', { required: true })
                            .addText(`counters][${idx}][suffix`, 'Suffixe (ex: %, +)', { span: 1 })
                            .endRow()
                            .addText(`counters][${idx}][label`, 'Libellé', { required: true })
                            .addIconPicker(`counters][${idx}][icon`, 'Icône');
                    }
                })
                .render()
        }
    ];
}
