/**
 * Intégration du File Manager avec le Builder
 * Permet de sélectionner des images depuis le File Manager et de les copier dans le Builder
 */

export default class BuilderFileManagerIntegration {
    static currentTargetField = null;
    static currentButton = null;
    static modalInstance = null;

    /**
     * Initialiser les événements
     */
    static init() {
        console.log('BuilderFileManagerIntegration initialized');

        // Gérer les clics sur "Choisir depuis la médiathèque"
        $(document).on('click', '.btn-select-from-filemanager', function (e) {
            e.preventDefault();
            const targetField = $(this).data('target');
            BuilderFileManagerIntegration.openModal(targetField, $(this));
        });

        // Écouter les messages du file-manager (sélection d'un fichier)
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'filemanager-selection') {
                BuilderFileManagerIntegration.handleFileSelection(event.data.file);
            }
        });
    }

    /**
     * Ouvrir la modal avec le file-manager
     */
    static openModal(targetField, $button) {
        this.currentTargetField = targetField;
        this.currentButton = $button;

        // Créer la modal si elle n'existe pas
        if ($('#filemanager-selector-modal').length === 0) {
            const modal = `
                <div id="filemanager-selector-modal" class="modal fade" tabindex="-1">
                    <div class="modal-dialog modal-xl" style="max-width: 90%;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">
                                    <i class="fa fa-folder-open"></i> 
                                    Sélectionner une image depuis la médiathèque
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style="padding: 0; height: 70vh; overflow: hidden;">
                                <iframe id="filemanager-selector-iframe" 
                                        src="/${window.BUILDER_LOCALE || 'fr'}/admin/file-selector" 
                                        style="width: 100%; height: 100%; border: none;">
                                </iframe>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('body').append(modal);
        }

        // Afficher la modal
        const modalElement = document.getElementById('filemanager-selector-modal');
        this.modalInstance = new bootstrap.Modal(modalElement, {
            backdrop: 'static',
            keyboard: false
        });

        // Écouter la fermeture de la modal pour nettoyer le backdrop
        modalElement.addEventListener('hidden.bs.modal', () => {
            // Supprimer le backdrop s'il existe encore
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            // Supprimer la classe modal-open du body
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        });

        this.modalInstance.show();
    }

    /**
     * Gérer la sélection d'un fichier depuis le file-manager
     * Appelé directement quand l'utilisateur clique sur "Sélectionner" dans la visionneuse
     */
    static async handleFileSelection(file) {
        console.log('File selected:', file);

        // Vérifier que c'est bien une image
        if (!file.mimeType || !file.mimeType.startsWith('image/')) {
            alert('Veuillez sélectionner une image (jpg, png)');
            return;
        }

        // Copier directement le fichier
        try {
            await this.copyMediaToBuilder(file.id);
        } catch (error) {
            console.error('Erreur lors de la copie:', error);
            alert('Erreur lors de la copie du fichier');
        }
    }

    /**
     * Copier le fichier du file-manager vers le builder
     */
    static async copyMediaToBuilder(fileId) {
        try {
            const response = await fetch('/api/builder/copy-media', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fileId: fileId })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erreur lors de la copie');
            }

            const data = await response.json();

            if (data.success) {
                // Trouver le formulaire parent spécifique via le bouton qui a ouvert la modal
                if (!this.currentButton || this.currentButton.length === 0) {
                    console.error('Bouton source introuvable');
                    throw new Error('Impossible de trouver le formulaire cible');
                }

                // Trouver le form-group-image parent du bouton
                const $formGroup = this.currentButton.closest('.form-group-image');
                if ($formGroup.length === 0) {
                    console.error('Form-group-image introuvable');
                    throw new Error('Impossible de trouver le formulaire cible');
                }

                // Mettre à jour l'input hidden avec l'URL dans ce form-group spécifique
                const $hiddenInput = $formGroup.find(`input[data-name="${this.currentTargetField}_url"]`);
                if ($hiddenInput.length === 0) {
                    console.error('Input hidden introuvable');
                    throw new Error('Impossible de trouver le champ cible');
                }
                $hiddenInput.val(data.url);

                // Afficher la prévisualisation dans le widget
                const $widget = $formGroup.find('.image-upload-widget');
                $widget.find('.image-upload-empty').hide();
                $widget.find('.image-upload-preview').show();
                $widget.find('.image-upload-preview img').attr('src', data.url);
                $widget.find('.filename-preview').text(data.name || '');

                // Gérer le bouton supprimer
                $widget.find('.file-preview-delete').off('click').on('click', function (e) {
                    e.preventDefault();
                    $widget.find('.image-upload-preview').hide();
                    $widget.find('.image-upload-empty').show();
                    // Vider les inputs
                    $hiddenInput.val('');
                    $formGroup.find('input[type="file"]').val('');
                    $widget.find('.filename-preview').text('');
                });

                // Masquer l'input file local si nécessaire
                $formGroup.find('input[type="file"]').val('');

                // Fermer la modal
                if (this.modalInstance) {
                    this.modalInstance.hide();
                    // Nettoyer le backdrop immédiatement
                    setTimeout(() => {
                        const backdrop = document.querySelector('.modal-backdrop');
                        if (backdrop) {
                            backdrop.remove();
                        }
                        document.body.classList.remove('modal-open');
                        document.body.style.overflow = '';
                        document.body.style.paddingRight = '';
                    }, 100);
                }

                // Afficher un message de succès
                console.log('Fichier copié avec succès:', data.url);
            } else {
                throw new Error(data.error || 'Erreur inconnue');
            }
        } catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    }
}

// Auto-initialisation
$(document).ready(() => {
    BuilderFileManagerIntegration.init();
});

