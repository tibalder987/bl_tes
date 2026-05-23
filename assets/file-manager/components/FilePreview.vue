<template>
    <div class="file-modal__overlay file-preview-overlay" @click.self="$emit('close')">
        <div class="file-modal__content file-preview-content">
            <div class="file-modal__header file-preview-header">
                <div class="file-preview-title">
                    <i :class="getFileIcon()" style="margin-right: 0.75rem; font-size: 1.5rem;"></i>
                    <h3>{{ file.name }}</h3>
                </div>
                <div class="file-preview-actions">
                    <a :href="downloadUrl" 
                       class="btn btn-sm btn-primary"
                       download
                       title="Télécharger">
                        <i class="fa fa-download"></i> Télécharger
                    </a>
                    <button class="btn btn-sm btn-secondary" 
                            @click="shareFile" 
                            title="Partager">
                        <i class="fa fa-share-alt"></i> Partager
                    </button>
                    <button class="btn btn-sm btn-close" @click="$emit('close')" title="Fermer">
                        <i class="fa fa-times"></i>
                    </button>
                </div>
            </div>
            
            <div class="file-modal__body file-preview-body">
                <!-- Image Preview -->
                <div v-if="file.isImage" class="file-preview-image">
                    <img :src="previewUrl" 
                         :alt="file.name"
                         class="preview-image">
                </div>
                
                <!-- Video Preview -->
                <div v-else-if="file.isVideo" class="file-preview-video">
                    <video :src="previewUrl" 
                           controls
                           class="preview-video">
                        Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                </div>
                
                <!-- PDF Preview -->
                <div v-else-if="file.isPdf" class="file-preview-pdf">
                    <div class="pdf-toolbar">
                        <a :href="downloadUrl" 
                           class="pdf-toolbar-btn"
                           download
                           title="Télécharger">
                            <i class="fa fa-download"></i>
                        </a>
                        <button class="pdf-toolbar-btn" @click="printPdf" title="Imprimer">
                            <i class="fa fa-print"></i>
                        </button>
                        <button class="pdf-toolbar-btn" @click="toggleFullscreen" title="Plein écran">
                            <i class="fa" :class="isFullscreen ? 'fa-compress' : 'fa-expand'"></i>
                        </button>
                    </div>
                    <div class="pdf-viewer-container">
                        <iframe :src="previewUrl" 
                                class="pdf-viewer"
                                ref="pdfIframe">
                        </iframe>
                    </div>
                </div>
                
                <!-- Text Preview -->
                <div v-else-if="file.isText" class="file-preview-text">
                    <div class="text-toolbar">
                        <a :href="downloadUrl" 
                           class="text-toolbar-btn"
                           download
                           title="Télécharger">
                            <i class="fa fa-download"></i>
                        </a>
                    </div>
                    <pre class="text-content">{{ textContent }}</pre>
                </div>
                
                <!-- Unsupported File Type -->
                <div v-else class="file-preview-unsupported">
                    <i class="fa fa-file fa-5x" style="opacity: 0.3; margin-bottom: 1.5rem; color: #002043;"></i>
                    <p style="font-size: 1.125rem; color: #666; margin-bottom: 1.5rem;">Aperçu non disponible pour ce type de fichier</p>
                    <a :href="downloadUrl" 
                       class="btn btn-primary"
                       download>
                        <i class="fa fa-download"></i> Télécharger le fichier
                    </a>
                </div>
            </div>
            
            <div class="file-modal__footer file-preview-footer">
                <div class="file-preview-metadata">
                    <div class="metadata-item">
                        <i class="fa fa-file"></i>
                        <span><strong>Taille:</strong> {{ file.formattedSize }}</span>
                    </div>
                    <div class="metadata-item">
                        <i class="fa fa-tag"></i>
                        <span><strong>Type:</strong> {{ file.mimeType }}</span>
                    </div>
                    <div class="metadata-item">
                        <i class="fa fa-user"></i>
                        <span><strong>Ajouté par:</strong> {{ file.owner.name }}</span>
                    </div>
                    <div class="metadata-item">
                        <i class="fa fa-clock"></i>
                        <span><strong>Ajouté le:</strong> {{ formatDate(file.createdAt) }}</span>
                    </div>
                </div>
                <button class="btn" @click="$emit('close')">Fermer</button>
            </div>
        </div>
        
        <!-- Toast de confirmation -->
        <transition name="toast">
            <div v-if="showToast" class="file-preview-toast">
                <i class="fa fa-check-circle"></i>
                {{ toastMessage }}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        file: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            textContent: null,
            isFullscreen: false,
            showToast: false,
            toastMessage: '',
        };
    },
    computed: {
        previewUrl() {
            return `/api/files/${this.file.id}/preview`;
        },
        downloadUrl() {
            return `/api/files/${this.file.id}/download`;
        },
    },
    mounted() {
        if (this.file.isText) {
            this.loadTextContent();
        }
    },
    methods: {
        async loadTextContent() {
            try {
                const response = await fetch(this.previewUrl);
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement');
                }
                this.textContent = await response.text();
            } catch (error) {
                this.textContent = 'Erreur lors du chargement du contenu';
            }
        },
        formatDate(dateString) {
            if (!dateString) return '-';
            const date = new Date(dateString);
            return date.toLocaleDateString('fr-FR', { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        },
        getFileIcon() {
            if (this.file.isPdf) return 'fa fa-file-pdf';
            if (this.file.isImage) return 'fa fa-file-image';
            if (this.file.isVideo) return 'fa fa-file-video';
            if (this.file.isText) return 'fa fa-file-alt';
            return 'fa fa-file';
        },
        printPdf() {
            if (this.$refs.pdfIframe && this.$refs.pdfIframe.contentWindow) {
                this.$refs.pdfIframe.contentWindow.print();
            }
        },
        toggleFullscreen() {
            this.isFullscreen = !this.isFullscreen;
            const content = this.$el.querySelector('.file-preview-content');
            if (this.isFullscreen) {
                content.classList.add('fullscreen');
            } else {
                content.classList.remove('fullscreen');
            }
        },
        async shareFile() {
            try {
                // Construire l'URL complète du fichier
                const fileUrl = window.location.origin + this.downloadUrl;
                
                // Copier dans le presse-papier
                await navigator.clipboard.writeText(fileUrl);
                
                // Afficher le toast de confirmation
                this.toastMessage = 'Lien copié dans le presse-papier !';
                this.showToast = true;
                
                // Masquer le toast après 3 secondes
                setTimeout(() => {
                    this.showToast = false;
                }, 3000);
            } catch (error) {
                console.error('Erreur lors de la copie:', error);
                // Fallback si clipboard API n'est pas disponible
                this.toastMessage = 'Erreur lors de la copie du lien';
                this.showToast = true;
                setTimeout(() => {
                    this.showToast = false;
                }, 3000);
            }
        },
    },
};
</script>

