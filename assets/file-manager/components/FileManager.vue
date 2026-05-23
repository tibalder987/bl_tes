<template>
    <div class="file-manager">
        <FileSidebar 
            ref="sidebar"
            :current-view="currentView"
            @view-changed="changeView"
            @folder-selected="navigateToFolder"
        />
        
        <div class="file-manager__content" @click="handleContentClick">
            <FileToolbar
                :current-folder="currentFolder"
                :selected-items="selectedItems"
                :search-query="searchQuery"
                :current-view="currentView"
                :view-mode="viewMode"
                :can-upload-file="canUploadFile"
                :can-create-folder="canCreateFolder"
                @upload="handleUpload"
                @create-folder="handleCreateFolder"
                @delete="handleDelete"
                @search="handleSearch"
                @view-mode-changed="viewMode = $event"
            />
            
            <FileBreadcrumb
                v-if="breadcrumb.length > 0"
                :items="breadcrumb"
                @navigate="navigateToFolder"
                @drop="handleDrop"
            />
            
            <div class="file-manager__view">
                <div v-if="loading" class="file-loading">
                    <i class="fa fa-spinner fa-spin"></i> Chargement...
                </div>
                
                <div v-else-if="files.length === 0 && folders.length === 0" 
                     class="file-manager__empty"
                     :class="{ 'drag-over': dragOverRoot }"
                     @dragover.prevent="handleRootDragOver"
                     @dragleave="handleRootDragLeave"
                     @drop.prevent="handleRootDrop">
                    <i class="fa fa-folder-open fa-3x" style="margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Ce dossier est vide</p>
                    <p v-if="dragOverRoot" style="margin-top: 1rem; color: #002043; font-weight: 500;">
                        <i class="fa fa-hand-pointer"></i> Déposer ici pour déplacer vers la racine
                    </p>
                </div>
                
                <FileGrid
                    v-else-if="viewMode === 'grid'"
                    :files="files"
                    :folders="folders"
                    :selected-items="selectedItems"
                    :csrf-token="csrfToken"
                    @select="handleSelect"
                    @open="handleOpen"
                    @more="handleMore"
                    @context-menu="handleContextMenu"
                    @drop="handleDrop"
                />
                
                <FileList
                    v-else
                    :files="files"
                    :folders="folders"
                    :selected-items="selectedItems"
                    :csrf-token="csrfToken"
                    @select="handleSelect"
                    @open="handleOpen"
                    @more="handleMore"
                    @context-menu="handleContextMenu"
                    @drop="handleDrop"
                    @file-drop="handleFileDrop"
                />
            </div>
        </div>
        
        <UploadModal
            v-if="showUploader"
            :folder-id="currentFolder?.id"
            :initial-files="droppedFiles"
            :is-admin="isAdmin"
            :csrf-token="csrfToken"
            :max-file-size="maxFileSize"
            @uploaded="handleFileUploaded"
            @close="handleCloseUploader"
        />
        
        <CreateFolderModal
            v-if="showCreateFolder"
            :parent-folder-id="currentFolder?.id"
            :is-admin="isAdmin"
            :csrf-token="csrfToken"
            @created="handleFolderCreated"
            @close="showCreateFolder = false"
        />
        
        <FilePreview
            v-if="previewFile"
            :file="previewFile"
            @close="previewFile = null"
        />
        
        <PermissionManager
            v-if="permissionResource"
            :resource="permissionResource"
            :csrf-token="csrfToken"
            @close="permissionResource = null"
        />
        
        <RenameModal
            v-if="renameItem"
            :item="renameItem"
            :csrf-token="csrfToken"
            @renamed="handleRenamed"
            @close="renameItem = null"
        />
        
        <ContextMenu
            v-if="contextMenu.visible"
            :visible="contextMenu.visible"
            :item="contextMenu.item"
            :position="contextMenu.position"
            :current-view="currentView"
            :is-admin="isAdmin"
            @open="handleOpen"
            @rename="handleRename"
            @delete="handleDeleteItem"
            @restore="handleRestore"
            @permanent-delete="handlePermanentDelete"
            @permissions="handleMore"
            @close="contextMenu = { visible: false, item: null, position: { x: 0, y: 0 } }"
        />
        
        <ConfirmModal
            v-if="confirmModal.visible"
            :title="confirmModal.title"
            :message="confirmModal.message"
            :sub-message="confirmModal.subMessage"
            :type="confirmModal.type"
            :confirm-text="confirmModal.confirmText"
            :cancel-text="confirmModal.cancelText"
            :loading="confirmModal.loading"
            @confirm="confirmModal.onConfirm"
            @cancel="confirmModal = { visible: false }"
        />
    </div>
</template>

<script>
import FileSidebar from './FileSidebar.vue';
import FileToolbar from './FileToolbar.vue';
import FileBreadcrumb from './FileBreadcrumb.vue';
import FileGrid from './FileGrid.vue';
import FileList from './FileList.vue';
import UploadModal from './UploadModal.vue';
import CreateFolderModal from './CreateFolderModal.vue';
import FilePreview from './FilePreview.vue';
import PermissionManager from './PermissionManager.vue';
import RenameModal from './RenameModal.vue';
import ContextMenu from './ContextMenu.vue';
import ConfirmModal from './ConfirmModal.vue';

export default {
    components: {
        FileSidebar,
        FileToolbar,
        FileBreadcrumb,
        FileGrid,
        FileList,
        UploadModal,
        CreateFolderModal,
        FilePreview,
        PermissionManager,
        RenameModal,
        ContextMenu,
        ConfirmModal,
    },
    props: {
        csrfToken: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            currentView: 'home',
            viewMode: localStorage.getItem('fileManagerViewMode') || 'grid', // 'grid' or 'list'
            currentFolder: null,
            files: [],
            folders: [],
            breadcrumb: [],
            selectedItems: [],
            loading: false,
            showUploader: false,
            showCreateFolder: false,
            previewFile: null,
            permissionResource: null,
            searchQuery: '',
            dragOverRoot: false,
            renameItem: null,
            droppedFiles: null,
            isAdmin: false,
            canUploadFile: true,
            canCreateFolder: true,
            maxFileSize: 104857600, // Valeur par défaut (100 MB), sera remplacée par l'API
            contextMenu: {
                visible: false,
                item: null,
                position: { x: 0, y: 0 },
            },
            confirmModal: {
                visible: false,
                title: '',
                message: '',
                subMessage: null,
                type: 'confirm',
                confirmText: 'Confirmer',
                cancelText: 'Annuler',
                loading: false,
                onConfirm: null,
            },
        };
    },
    watch: {
        viewMode(newMode) {
            // Sauvegarder le mode de vue dans le localStorage
            localStorage.setItem('fileManagerViewMode', newMode);
        },
    },
    mounted() {
        this.loadUserInfo();
        
        // Charger le dossier depuis l'URL si présent
        const urlParams = new URLSearchParams(window.location.search);
        const folderIdFromUrl = urlParams.get('folderId');
        const initialFolderId = folderIdFromUrl ? parseInt(folderIdFromUrl, 10) : null;
        
        // Initialiser l'état de l'historique pour l'URL actuelle
        window.history.replaceState({ folderId: initialFolderId }, '', window.location.href);
        
        this.loadFolder(initialFolderId);
        
        // Écouter les changements d'historique (bouton retour/avant du navigateur)
        window.addEventListener('popstate', this.handlePopState);
    },
    beforeUnmount() {
        // Nettoyer l'écouteur d'événements
        window.removeEventListener('popstate', this.handlePopState);
    },
    methods: {
        /**
         * Helper method to get fetch headers with CSRF token
         */
        getCsrfHeaders() {
            return {
                'X-CSRF-Token': this.csrfToken,
            };
        },
        
        /**
         * Helper method to add CSRF token to fetch options
         */
        addCsrfToFetchOptions(options = {}) {
            return {
                ...options,
                headers: {
                    ...this.getCsrfHeaders(),
                    ...(options.headers || {}),
                },
            };
        },
        
        async loadUserInfo() {
            try {
                const response = await fetch('/api/files/me', this.addCsrfToFetchOptions());
                const data = await response.json();
                if (response.ok) {
                    this.isAdmin = data.isAdmin || false;
                    this.canUploadFile = data.canUploadFile !== undefined ? data.canUploadFile : true;
                    this.canCreateFolder = data.canCreateFolder !== undefined ? data.canCreateFolder : true;
                    this.maxFileSize = data.maxFileSize || 104857600; // 100 MB par défaut
                }
            } catch (error) {
                console.error('Error loading user info:', error);
            }
        },
        
        showConfirmModal(config) {
            this.confirmModal = {
                visible: true,
                title: config.title || 'Confirmation',
                message: config.message,
                subMessage: config.subMessage || null,
                type: config.type || 'confirm',
                confirmText: config.confirmText || 'Confirmer',
                cancelText: config.cancelText || 'Annuler',
                loading: false,
                onConfirm: () => {
                    this.confirmModal.loading = true;
                    if (config.onConfirm) {
                        config.onConfirm();
                    }
                },
            };
        },
        
        showErrorModal(message) {
            this.showConfirmModal({
                title: 'Erreur',
                message: message,
                type: 'error',
                confirmText: 'OK',
                cancelText: '',
                onConfirm: () => {
                    this.confirmModal.visible = false;
                },
            });
        },
        
        async loadFolder(folderId, updateUrl = true) {
            this.loading = true;
            this.selectedItems = [];
            
            try {
                // Ensure folderId is a number or null
                const id = folderId !== null && folderId !== undefined ? Number(folderId) : null;
                const params = id ? `?folderId=${id}` : '';
                const response = await fetch(`/api/files${params}`, this.addCsrfToFetchOptions());
                const data = await response.json();
                
                if (response.ok) {
                    this.files = data.files || [];
                    this.folders = data.folders || [];
                    this.currentFolder = data.currentFolder;
                    this.breadcrumb = data.breadcrumb || [];
                    
                    // Mettre à jour l'URL du navigateur
                    if (updateUrl) {
                        this.updateUrlWithFolderId(id);
                    }
                } else {
                    console.error('Error loading folder:', data.error);
                    this.showErrorModal(data.error || 'Impossible de charger le dossier');
                }
            } catch (error) {
                console.error('Error:', error);
                this.showErrorModal('Erreur lors du chargement du dossier');
            } finally {
                this.loading = false;
            }
        },
        
        updateUrlWithFolderId(folderId) {
            const url = new URL(window.location);
            
            if (folderId) {
                url.searchParams.set('folderId', folderId);
            } else {
                url.searchParams.delete('folderId');
            }
            
            // Mettre à jour l'URL sans recharger la page
            window.history.pushState({ folderId }, '', url);
        },
        
        handlePopState(event) {
            // Gérer le bouton retour/avant du navigateur
            const folderId = event.state?.folderId || null;
            this.loadFolder(folderId, false); // false pour ne pas créer une nouvelle entrée d'historique
        },
        
        changeView(view) {
            this.currentView = view;
            
            if (view === 'home') {
                this.loadFolder(null);
            } else if (view === 'starred') {
                this.loadStarred();
                // Nettoyer le paramètre folderId de l'URL pour les vues spéciales
                this.updateUrlWithFolderId(null);
            } else if (view === 'trash') {
                this.loadTrash();
                // Nettoyer le paramètre folderId de l'URL pour les vues spéciales
                this.updateUrlWithFolderId(null);
            }
        },
        
        async loadStarred() {
            this.loading = true;
            try {
                const response = await fetch('/api/files/starred', this.addCsrfToFetchOptions());
                const data = await response.json();
                this.files = data.files || [];
                this.folders = data.folders || [];
                this.currentFolder = null;
                this.breadcrumb = [];
            } catch (error) {
                console.error('Error:', error);
            } finally {
                this.loading = false;
            }
        },
        
        async loadTrash() {
            this.loading = true;
            try {
                const response = await fetch('/api/files/trash', this.addCsrfToFetchOptions());
                const data = await response.json();
                this.files = data.files || [];
                this.folders = data.folders || [];
                this.currentFolder = null;
                this.breadcrumb = [];
            } catch (error) {
                console.error('Error:', error);
            } finally {
                this.loading = false;
            }
        },
        
        navigateToFolder(folder) {
            if (folder === null || folder === undefined) {
                this.loadFolder(null);
            } else {
                // Ensure we have a numeric ID
                const folderId = typeof folder === 'object' ? folder.id : folder;
                this.loadFolder(folderId ? Number(folderId) : null);
            }
        },
        
        handleSelect(item, event) {
            if (event.ctrlKey || event.metaKey) {
                // Multi-select: toggle selection only if Ctrl/Meta is pressed
                const index = this.selectedItems.findIndex(i => i.id === item.id && i.type === item.type);
                if (index > -1) {
                    // Deselect if already selected
                    this.selectedItems.splice(index, 1);
                } else {
                    // Add to selection
                    this.selectedItems.push(item);
                }
            } else {
                // No Ctrl/Meta: clear all selections
                this.selectedItems = [];
            }
        },
        
        handleContentClick(event) {
            // Check if click is on an interactive element that should not clear selection
            const target = event.target;
            
            // Don't clear if clicking on:
            // - Buttons (including action buttons like delete, etc.)
            // - Links
            // - Inputs, selects, textareas
            // - Modals or their overlays
            // - Context menus
            // - File items or folders (handled by handleSelect - these emit 'select' event)
            // - Toolbar, breadcrumb, sidebar
            // - Empty state message
            const isInteractive = target.closest('button') ||
                                  target.closest('a') ||
                                  target.closest('input') ||
                                  target.closest('select') ||
                                  target.closest('textarea') ||
                                  target.closest('.file-modal') ||
                                  target.closest('.file-modal__overlay') ||
                                  target.closest('.file-modal__content') ||
                                  target.closest('.context-menu') ||
                                  target.closest('.file-item') ||
                                  target.closest('.file-list__item') ||
                                  target.closest('.file-grid__item') ||
                                  target.closest('.file-toolbar') ||
                                  target.closest('.file-breadcrumb') ||
                                  target.closest('.file-sidebar') ||
                                  target.closest('.file-manager__empty');
            
            // Only clear selection if clicking on empty space (not on interactive elements)
            // Also check that we're not in the middle of a double-click detection
            if (!isInteractive && this.selectedItems.length > 0) {
                this.selectedItems = [];
            }
        },
        
        handleOpen(item) {
            if (item.type === 'folder') {
                this.navigateToFolder(item);
            } else {
                this.previewFile = item;
            }
        },
        
        handleMore(item, event) {
            // Open context menu or permission modal
            if (event) {
                // If event is provided, open context menu
                this.handleContextMenu(item, event);
            } else {
                // Otherwise, open permission modal directly
                this.permissionResource = item;
            }
        },
        
        handleContextMenu(item, event) {
            event.preventDefault();
            const position = {
                x: event.clientX || event.pageX || 0,
                y: event.clientY || event.pageY || 0,
            };
            this.contextMenu = {
                visible: true,
                item: item,
                position: position,
            };
        },
        
        handleRename(item) {
            this.renameItem = item;
        },
        
        handleRenamed(item) {
            // Reload current folder to reflect changes
            if (this.currentView === 'trash') {
                this.loadTrash();
            } else if (this.currentView === 'starred') {
                this.loadStarred();
            } else {
                this.loadFolder(this.currentFolder?.id || null);
            }
        },
        
        handleDeleteItem(item) {
            this.showConfirmModal({
                title: 'Supprimer',
                message: `Supprimer "${item.name}" ?`,
                type: 'danger',
                confirmText: 'Supprimer',
                onConfirm: () => {
                    this.deleteItem(item);
                },
            });
        },
        
        async deleteItem(item) {
            try {
                const response = await fetch(`/api/files/${item.id}?type=${item.type}`, this.addCsrfToFetchOptions({
                    method: 'DELETE',
                }));
                
                if (response.ok) {
                    // Reload current view
                    this.confirmModal.visible = false;
                    if (this.currentView === 'trash') {
                        this.loadTrash();
                    } else if (this.currentView === 'starred') {
                        this.loadStarred();
                    } else {
                        this.loadFolder(this.currentFolder?.id || null);
                    }
                } else {
                    const data = await response.json();
                    this.showErrorModal(data.error || 'Impossible de supprimer');
                }
            } catch (error) {
                console.error('Error:', error);
                this.showErrorModal('Erreur lors de la suppression');
            } finally {
                this.confirmModal.loading = false;
            }
        },
        
        async handleRestore(item) {
            try {
                const response = await fetch(`/api/files/${item.id}/restore?type=${item.type}`, this.addCsrfToFetchOptions({
                    method: 'POST',
                }));
                
                if (response.ok) {
                    this.loadTrash();
                } else {
                    const data = await response.json();
                    this.showErrorModal(data.error || 'Impossible de restaurer');
                }
            } catch (error) {
                console.error('Error:', error);
                this.showErrorModal('Erreur lors de la restauration');
            }
        },
        
        async handlePermanentDelete(item) {
            this.showConfirmModal({
                title: 'Supprimer définitivement',
                message: `Supprimer définitivement "${item.name}" ?`,
                subMessage: 'Cette action est irréversible.',
                type: 'danger',
                confirmText: 'Supprimer définitivement',
                onConfirm: () => {
                    this.performPermanentDelete(item);
                },
            });
        },
        
        async performPermanentDelete(item) {
            try {
                const response = await fetch(`/api/files/${item.id}/permanent-delete?type=${item.type}`, this.addCsrfToFetchOptions({
                    method: 'DELETE',
                }));
                
                if (response.ok) {
                    this.confirmModal.visible = false;
                    this.loadTrash();
                } else {
                    const data = await response.json();
                    this.showErrorModal(data.error || 'Impossible de supprimer définitivement');
                }
            } catch (error) {
                console.error('Error:', error);
                this.showErrorModal('Erreur lors de la suppression définitive');
            } finally {
                this.confirmModal.loading = false;
            }
        },
        
        handleUpload() {
            this.showUploader = true;
        },
        
        handleCreateFolder() {
            this.showCreateFolder = true;
        },
        
        handleFolderCreated() {
            this.showCreateFolder = false;
            // Refresh current folder
            this.loadFolder(this.currentFolder?.id || null);
        },
        
        async handleDelete() {
            if (this.selectedItems.length === 0) return;
            
            const isTrash = this.currentView === 'trash';
            this.showConfirmModal({
                title: isTrash ? 'Supprimer définitivement' : 'Supprimer',
                message: `${isTrash ? 'Supprimer définitivement' : 'Supprimer'} ${this.selectedItems.length} élément(s) ?`,
                subMessage: isTrash ? 'Cette action est irréversible.' : null,
                type: 'danger',
                confirmText: isTrash ? 'Supprimer définitivement' : 'Supprimer',
                onConfirm: () => {
                    this.performDelete();
                },
            });
        },
        
        async performDelete() {
            let hasError = false;
            let errorMessage = '';
            
            for (const item of this.selectedItems) {
                try {
                    if (this.currentView === 'trash') {
                        // Permanent delete from trash
                        const response = await fetch(`/api/files/${item.id}/permanent-delete?type=${item.type}`, this.addCsrfToFetchOptions({
                            method: 'DELETE',
                        }));
                        
                        if (!response.ok) {
                            const data = await response.json();
                            hasError = true;
                            errorMessage = data.error || 'Erreur lors de la suppression';
                        }
                    } else {
                        // Soft delete (move to trash)
                        const response = await fetch(`/api/files/${item.id}?type=${item.type}`, this.addCsrfToFetchOptions({
                            method: 'DELETE',
                        }));
                        
                        if (!response.ok) {
                            const data = await response.json();
                            hasError = true;
                            errorMessage = data.error || 'Erreur lors de la suppression';
                        }
                    }
                } catch (error) {
                    console.error('Error:', error);
                    hasError = true;
                    errorMessage = 'Erreur lors de la suppression';
                }
            }
            
            this.confirmModal.visible = false;
            this.selectedItems = [];
            
            if (hasError) {
                this.showErrorModal(errorMessage);
            }
            
            // Reload current view
            if (this.currentView === 'trash') {
                this.loadTrash();
            } else if (this.currentView === 'starred') {
                this.loadStarred();
            } else {
                this.loadFolder(this.currentFolder?.id || null);
            }
        },
        
        handleSearch(query) {
            this.searchQuery = query;
            if (query) {
                this.performSearch(query);
            } else {
                this.loadFolder(this.currentFolder?.id || null);
            }
        },
        
        async performSearch(query) {
            this.loading = true;
            try {
                // Inclure le dossier courant dans la recherche si on est dans un dossier
                const folderId = this.currentFolder?.id || null;
                const params = new URLSearchParams({
                    q: query,
                });
                if (folderId) {
                    params.append('folderId', folderId);
                }
                
                const response = await fetch(`/api/files/search?${params.toString()}`, this.addCsrfToFetchOptions());
                const data = await response.json();
                
                if (response.ok) {
                    this.files = data.files || [];
                    this.folders = data.folders || [];
                    // Garder le dossier courant et le breadcrumb pour le contexte
                    // Ne pas les réinitialiser pour montrer où on cherche
                } else {
                    console.error('Error loading search:', data.error);
                    this.showErrorModal(data.error || 'Impossible de rechercher');
                }
            } catch (error) {
                console.error('Error:', error);
                this.showErrorModal('Erreur lors de la recherche');
            } finally {
                this.loading = false;
            }
        },
        
        handleRootDragOver(event) {
            // Check if we have dragged item data
            if (event.dataTransfer.types.includes('application/json')) {
                // Don't allow dropping if already at root
                if (!this.currentFolder) {
                    event.dataTransfer.dropEffect = 'none';
                    this.dragOverRoot = false;
                    return;
                }
                
                event.dataTransfer.dropEffect = 'move';
                this.dragOverRoot = true;
            }
        },
        
        handleRootDragLeave() {
            setTimeout(() => {
                this.dragOverRoot = false;
            }, 50);
        },
        
        handleRootDrop(event) {
            this.dragOverRoot = false;
            
            const draggedData = event.dataTransfer.getData('application/json');
            if (!draggedData) return;
            
            try {
                const dragged = JSON.parse(draggedData);
                
                // Don't allow dropping if already at root
                if (!this.currentFolder) {
                    return;
                }
                
                // Move to root (null folder)
                this.moveItem(dragged, null);
            } catch (e) {
                console.error('Error parsing drag data:', e);
            }
        },
        
        async handleDrop({ item, targetFolder }) {
            await this.moveItem(item, targetFolder);
        },
        
        async moveItem(item, targetFolder) {
            try {
                const targetFolderId = targetFolder ? targetFolder.id : null;
                const response = await fetch(`/api/files/${item.id}/move`, this.addCsrfToFetchOptions({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        type: item.type,
                        targetFolderId: targetFolderId,
                    }),
                }));
                
                const data = await response.json();
                
                if (response.ok) {
                    // Reload current folder to reflect changes
                    this.loadFolder(this.currentFolder?.id || null);
                } else {
                    this.showErrorModal(data.error || 'Impossible de déplacer l\'élément');
                }
            } catch (error) {
                console.error('Error moving item:', error);
                this.showErrorModal('Erreur lors du déplacement');
            }
        },
        
        handleFileUploaded() {
            this.showUploader = false;
            // Refresh current folder
            this.loadFolder(this.currentFolder?.id || null);
        },
        
        handleFileDrop({ files }) {
            // Store dropped files and open upload modal
            this.droppedFiles = files;
            this.showUploader = true;
        },
        
        handleCloseUploader() {
            this.showUploader = false;
            this.droppedFiles = null;
        },
    },
};
</script>

<style scoped>
.file-manager {
    font-family: 'Muller', sans-serif;
}
</style>

