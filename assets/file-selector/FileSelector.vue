<template>
    <div class="file-selector">
        <div class="file-selector__toolbar">
            <button 
                v-if="currentFolder"
                @click="goBack"
                class="file-selector__btn">
                <i class="fa fa-arrow-left"></i> Retour
            </button>
            
            <div class="file-selector__breadcrumb">
                <span @click="loadRoot" class="file-selector__breadcrumb-item">
                    <i class="fa fa-home"></i> Accueil
                </span>
                <template v-for="(folder, index) in breadcrumb">
                    <i class="fa fa-chevron-right"></i>
                    <span 
                        
                        @click="navigateToFolder(folder.id)"
                        class="file-selector__breadcrumb-item">
                        {{ folder.name }}
                    </span>
                </template>
            </div>
            
            <input 
                type="text"
                v-model="searchQuery"
                placeholder="Rechercher..."
                class="file-selector__search"
                @input="handleSearch">
        </div>
        
        <div class="file-selector__main" v-if="!loading">
            <div class="file-selector__content" 
                 @click="handleContentClick">
                <div 
                    v-if="folders.length === 0 && files.length === 0"
                    class="file-selector__empty">
                    <i class="fa fa-folder-open fa-3x"></i>
                    <p>Aucun fichier trouvé</p>
                </div>
                
                <div v-else class="file-selector__grid">
                    <!-- Dossiers -->
                    <div 
                        v-for="folder in folders"
                        :key="'folder-' + folder.id"
                        class="file-selector__item file-selector__item--folder"
                        @click.stop="navigateToFolder(folder.id)">
                        <div class="file-selector__icon" :class="getFileIconClass({ ...folder, type: 'folder' })">
                            <i :class="getFileIcon({ ...folder, type: 'folder' })"></i>
                        </div>
                        <div class="file-selector__name">{{ folder.name }}</div>
                    </div>
                    
                    <!-- Fichiers (images uniquement) -->
                    <div 
                        v-for="file in files"
                        :key="'file-' + file.id"
                        class="file-selector__item file-selector__item--file"
                        :class="{'file-selector__item--selected': selectedFile && selectedFile.id === file.id}"
                        @click.stop="selectFile(file)"
                        @dblclick.stop="confirmSelection(file)">
                        <div class="file-selector__icon" :class="getFileIconClass({ ...file, type: 'file' })">
                            <i :class="getFileIcon({ ...file, type: 'file' })"></i>
                        </div>
                        <div class="file-selector__name">{{ file.name }}</div>
                        <div class="file-selector__size">{{ formatSize(file.size) }}</div>
                    </div>
                </div>
            </div>
            
            <!-- Visionneuse à droite -->
            <div v-if="selectedFile" class="file-selector__preview">
                <div class="file-selector__preview-header">
                    <h4>{{ selectedFile.name }}</h4>
                    <button @click="selectedFile = null" class="file-selector__preview-close" title="Fermer">
                        <i class="fa fa-times"></i>
                    </button>
                </div>
                <div class="file-selector__preview-content">
                    <div v-if="selectedFile.isImage" class="file-selector__preview-image">
                        <img :src="getFilePreviewUrl(selectedFile.id)" :alt="selectedFile.name">
                    </div>
                    <div v-else class="file-selector__preview-info">
                        <div class="file-selector__preview-icon">
                            <i :class="[getFileIcon({ ...selectedFile, type: 'file' }), getFileIconClass({ ...selectedFile, type: 'file' })]"></i>
                        </div>
                        <p class="file-selector__preview-message">Aperçu non disponible</p>
                    </div>
                </div>
                <div class="file-selector__preview-footer">
                    <div class="file-selector__preview-meta">
                        <div><strong>Taille:</strong> {{ formatSize(selectedFile.size) }}</div>
                        <div v-if="selectedFile.mimeType"><strong>Type:</strong> {{ selectedFile.mimeType }}</div>
                    </div>
                    <button @click="confirmSelection(selectedFile)" class="file-selector__preview-btn">
                        <i class="fa fa-check"></i> Sélectionner
                    </button>
                </div>
            </div>
        </div>
        
        <div v-else class="file-selector__loading">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
            <p>Chargement...</p>
        </div>
    </div>
</template>

<script>
import { getFileIcon, getFileIconClass } from '../file-manager/file-icons.js';

export default {
    name: 'FileSelector',
    props: {
        csrfToken: {
            type: String,
            required: true,
        },
        acceptedTypes: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            currentFolder: null,
            folders: [],
            files: [],
            breadcrumb: [],
            searchQuery: '',
            selectedFile: null,
            loading: false,
        };
    },
    computed: {
        // Plus besoin de computed properties, la recherche se fait côté API
    },
    mounted() {
        this.loadRoot();
    },
    methods: {
        getFileIcon,
        getFileIconClass(item) {
            // Mapper les classes du file-manager vers les classes du file-selector
            const baseClass = getFileIconClass(item);
            return baseClass.replace('file-item__icon--', 'file-selector__icon--');
        },
        async loadRoot() {
            this.currentFolder = null;
            this.breadcrumb = [];
            await this.loadFolder(null);
        },
        
        async loadFolder(folderId) {
            this.loading = true;
            this.selectedFile = null;
            
            try {
                // Utiliser la route /api/files avec le paramètre folderId
                const url = folderId 
                    ? `/api/files?folderId=${folderId}`
                    : '/api/files';
                    
                const response = await fetch(url, {
                    headers: {
                        'X-CSRF-Token': this.csrfToken,
                    },
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                this.folders = data.folders || [];
                
                // Filtrer les fichiers selon les types acceptés
                let filesToShow = data.files || [];
                if (this.acceptedTypes && this.acceptedTypes.length > 0) {
                    filesToShow = filesToShow.filter(file => {
                        if (!file.mimeType) return false;
                        return this.acceptedTypes.some(acceptedType => {
                            if (acceptedType.endsWith('/*')) {
                                // Wildcard match (ex: image/*)
                                const baseType = acceptedType.slice(0, -2);
                                return file.mimeType.startsWith(baseType + '/');
                            }
                            return file.mimeType === acceptedType;
                        });
                    });
                } else {
                    // Par défaut, ne garder que les images si aucun type accepté n'est spécifié
                    filesToShow = filesToShow.filter(f => 
                        f.mimeType && f.mimeType.startsWith('image/')
                    );
                }
                
                this.files = filesToShow;
                this.currentFolder = data.currentFolder || null;
                this.breadcrumb = data.breadcrumb || [];
                
            } catch (error) {
                console.error('Erreur de chargement:', error);
                alert('Erreur lors du chargement des fichiers');
            } finally {
                this.loading = false;
            }
        },
        
        async navigateToFolder(folderId) {
            await this.loadFolder(folderId);
        },
        
        goBack() {
            if (this.currentFolder && this.currentFolder.parentFolderId !== null && this.currentFolder.parentFolderId !== undefined) {
                // Aller au dossier parent
                this.navigateToFolder(this.currentFolder.parentFolderId);
            } else {
                // Retour à la racine
                this.loadRoot();
            }
        },
        
        getFilePreviewUrl(fileId) {
            return `/api/files/${fileId}/preview`;
        },
        
        handleImageError(event) {
            // Si l'image ne charge pas, afficher une icône par défaut
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.file-selector__error-icon')) {
                const icon = document.createElement('i');
                icon.className = 'fa fa-image file-selector__error-icon';
                parent.appendChild(icon);
            }
        },
        
        selectFile(file) {
            this.selectedFile = file;
        },
        
        handleContentClick(event) {
            // Si on clique sur le contenu (pas sur un item), désélectionner
            const target = event.target;
            const currentTarget = event.currentTarget;
            
            // Si on clique directement sur le conteneur content
            if (target === currentTarget) {
                this.selectedFile = null;
                return;
            }
            
            // Si on clique sur l'élément empty
            if (target.closest('.file-selector__empty')) {
                this.selectedFile = null;
                return;
            }
            
            // Si on clique sur la grille mais pas sur un item (espace entre les items)
            const clickedItem = target.closest('.file-selector__item');
            if (!clickedItem) {
                // On a cliqué sur la grille mais pas sur un item
                const grid = target.closest('.file-selector__grid');
                if (grid) {
                    this.selectedFile = null;
                }
            }
        },
        
        confirmSelection(file) {
            if (!file.mimeType || !file.mimeType.startsWith('image/')) {
                alert('Veuillez sélectionner une image');
                return;
            }
            
            // Envoyer au parent
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({
                    type: 'filemanager-selection',
                    file: {
                        id: file.id,
                        name: file.name,
                        path: file.path,
                        mimeType: file.mimeType,
                        size: file.size
                    }
                }, '*');
            }
        },
        
        handleSearch() {
            if (this.searchQuery) {
                this.performSearch(this.searchQuery);
            } else {
                // Si la recherche est vide, recharger le dossier actuel
                if (this.currentFolder) {
                    this.loadFolder(this.currentFolder.id);
                } else {
                    this.loadRoot();
                }
            }
        },
        
        async performSearch(query) {
            this.loading = true;
            this.selectedFile = null;
            
            try {
                // Inclure le dossier courant dans la recherche si on est dans un dossier
                const folderId = this.currentFolder?.id || null;
                const params = new URLSearchParams({
                    q: query,
                });
                if (folderId) {
                    params.append('folderId', folderId);
                }
                
                const response = await fetch(`/api/files/search?${params.toString()}`, {
                    headers: {
                        'X-CSRF-Token': this.csrfToken,
                    },
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Filtrer les fichiers selon les types acceptés
                let filesToShow = data.files || [];
                if (this.acceptedTypes && this.acceptedTypes.length > 0) {
                    filesToShow = filesToShow.filter(file => {
                        if (!file.mimeType) return false;
                        return this.acceptedTypes.some(acceptedType => {
                            if (acceptedType.endsWith('/*')) {
                                // Wildcard match (ex: image/*)
                                const baseType = acceptedType.slice(0, -2);
                                return file.mimeType.startsWith(baseType + '/');
                            }
                            return file.mimeType === acceptedType;
                        });
                    });
                } else {
                    // Par défaut, ne garder que les images si aucun type accepté n'est spécifié
                    filesToShow = filesToShow.filter(f => 
                        f.mimeType && f.mimeType.startsWith('image/')
                    );
                }
                
                this.folders = data.folders || [];
                this.files = filesToShow;
                this.currentFolder = null;
                this.breadcrumb = [];
                
            } catch (error) {
                console.error('Erreur de recherche:', error);
                alert('Erreur lors de la recherche');
            } finally {
                this.loading = false;
            }
        },
        
        formatSize(bytes) {
            if (!bytes) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        },
    },
};
</script>

<style lang="scss" scoped>
.file-selector {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fff;
    
    &__toolbar {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid #e1e5e9;
        background: #fafbfc;
    }
    
    &__btn {
        padding: 0.5rem 1rem;
        background: #002043;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
        
        &:hover {
            background: #001a35;
        }
        
        i {
            margin-right: 0.5rem;
        }
    }
    
    &__breadcrumb {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        color: #5f6368;
        
        &-item {
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            
            &:hover {
                background: #e8f0fe;
                color: #002043;
            }
        }
        
        .fa-chevron-right {
            font-size: 0.7rem;
        }
    }
    
    &__search {
        width: 250px;
        padding: 0.5rem 1rem;
        border: 1px solid #e1e5e9;
        border-radius: 4px;
        font-size: 0.9rem;
        
        &:focus {
            outline: none;
            border-color: #002043;
        }
    }
    
    &__main {
        display: flex;
        flex: 1;
        overflow: hidden;
    }
    
    &__content {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
    }
    
    &__empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #5f6368;
        
        i {
            margin-bottom: 1rem;
            opacity: 0.3;
        }
    }
    
    &__loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #5f6368;
        
        i {
            margin-bottom: 1rem;
        }
    }
    
    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
    }
    
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
            border-color: #002043;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        &--selected {
            border-color: #002043;
            background: #e8f0fe;
        }
        
        &--file:active {
            transform: scale(0.98);
        }
    }
    
    &__icon {
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60px;
        
        i {
            font-size: 3rem;
            line-height: 1;
        }
        
        // Styles pour les différents types de fichiers (copiés du file-manager)
        &--folder {
            color: #fbbc04;
            
            i {
                color: #fbbc04;
            }
        }
        
        &--archive {
            color: #8b4513;
            
            i {
                color: #8b4513;
            }
        }
        
        &--pdf {
            color: #d32f2f;
            
            i {
                color: #d32f2f;
            }
        }
        
        &--word {
            color: #2b579a;
            
            i {
                color: #2b579a;
            }
        }
        
        &--excel {
            color: #1d6f42;
            
            i {
                color: #1d6f42;
            }
        }
        
        &--powerpoint {
            color: #d04423;
            
            i {
                color: #d04423;
            }
        }
        
        &--text {
            color: #5f6368;
            
            i {
                color: #5f6368;
            }
        }
        
        &--image {
            color: #4285f4;
            
            i {
                color: #4285f4;
            }
        }
        
        &--video {
            color: #9c27b0;
            
            i {
                color: #9c27b0;
            }
        }
        
        &--audio {
            color: #ff9800;
            
            i {
                color: #ff9800;
            }
        }
        
        &--code {
            color: #f44336;
            
            i {
                color: #f44336;
            }
        }
        
        &--file {
            color: #757575;
            
            i {
                color: #757575;
            }
        }
    }
    
    &__name {
        font-size: 0.85rem;
        text-align: center;
        word-break: break-word;
        color: #202124;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    &__size {
        font-size: 0.75rem;
        color: #5f6368;
        margin-top: 0.25rem;
    }
    
    &__preview {
        position: fixed;
        right: 0;
        top: 0;
        width: 400px;
        height: 100%;
        background: #fff;
        border-left: 1px solid #e1e5e9;
        display: flex;
        flex-direction: column;
        z-index: 1000;
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
        transform: translateX(0);
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    
    &__preview-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #e1e5e9;
        background: #fafbfc;
        
        h4 {
            margin: 0;
            font-size: 1rem;
            font-weight: 500;
            color: #202124;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
    &__preview-close {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        color: #5f6368;
        font-size: 1.25rem;
        margin-left: 1rem;
        
        &:hover {
            color: #202124;
        }
    }
    
    &__preview-content {
        flex: 1;
        overflow-y: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: #f5f5f5;
    }
    
    &__preview-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
    }
    
    &__preview-info {
        text-align: center;
        color: #5f6368;
    }
    
    &__preview-icon {
        font-size: 5rem;
        margin-bottom: 1rem;
        
        i {
            font-size: 5rem;
        }
    }
    
    &__preview-message {
        font-size: 1rem;
        margin: 0;
    }
    
    &__preview-footer {
        padding: 1rem;
        border-top: 1px solid #e1e5e9;
        background: #fff;
    }
    
    &__preview-meta {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #5f6368;
        
        div {
            margin-bottom: 0.5rem;
        }
        
        strong {
            color: #202124;
            margin-right: 0.5rem;
        }
    }
    
    &__preview-btn {
        width: 100%;
        padding: 0.75rem;
        background: #002043;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: background 0.2s;
        
        &:hover {
            background: #001a35;
        }
        
        i {
            margin-right: 0.5rem;
        }
    }
}
</style>

