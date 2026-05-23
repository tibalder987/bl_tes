<template>
    <div class="file-modal__overlay" @click.self="handleClose">
        <div class="file-modal__content file-modal__content--upload">
            <div class="file-modal__header">
                <h3>Téléverser des fichiers</h3>
                <button class="btn btn-sm" @click="handleClose">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            
            <div class="file-modal__body">
                <div class="file-uploader__dropzone" 
                     :class="{ 'dragover': isDragging, 'has-files': allFiles.length > 0 }"
                     @drop.prevent="handleDrop"
                     @dragover.prevent="handleDragOver"
                     @dragenter.prevent="handleDragEnter"
                     @dragleave="handleDragLeave"
                     @click="triggerFileInput">
                    <i class="fa fa-cloud-upload fa-3x"></i>
                    <p><strong>Glissez-déposez vos fichiers ici</strong></p>
                    <p style="font-size: 0.875rem; color: #999; margin: 0.5rem 0;">ou</p>
                    <button class="btn btn-primary">
                        <i class="fa fa-folder-open"></i> Parcourir
                    </button>
                </div>
                
                <input type="file" 
                       ref="fileInput" 
                       multiple 
                       style="display: none;"
                       @change="handleFileSelect">
                
                <div v-if="allFiles.length > 0" class="selected-files">
                    <hr style="margin: 1.5rem 0;">
                    <h5>
                        <i class="fa fa-file" style="margin-right: 0.5rem; color: #002043;"></i>
                        Fichiers ({{ allFiles.length }})
                    </h5>
                    <div class="file-upload-list">
                        <div v-for="fileItem in allFiles" 
                             :key="fileItem.id"
                             class="file-upload-item"
                             :class="{
                                 'file-upload-item--uploading': fileItem.status === 'uploading',
                                 'file-upload-item--completed': fileItem.status === 'completed',
                                 'file-upload-item--error': fileItem.status === 'error'
                             }">
                            <div class="file-upload-item__info">
                                <div style="display: flex; align-items: center; gap: 0.5rem; width: 100%;">
                                    <i 
                                    :class="getFileIcon(fileItem)"
                                    :style="{ color: fileItem.status === 'completed' ? '#28a745' : fileItem.status === 'uploading' ? '#002043' : fileItem.status === 'error' ? '#dc3545' : '#002043' }"
                                    ></i>
                                    <span style="flex: 1;">{{ fileItem.file.name }}</span>
                                    <span class="file-size">({{ formatFileSize(fileItem.file.size) }})</span>
                                </div>
                                
                                <!-- Progress bar for uploading files -->
                                <div v-if="fileItem.status === 'uploading'" class="file-upload-item__progress">
                                    <span class="file-upload-item__progress-text">{{ Math.round(fileItem.progress) }}%</span>
                                    <div class="progress" style="flex: 1; height: 6px; background-color: #e9ecef;">
                                        <div class="progress-bar" 
                                             role="progressbar"
                                             :style="{ width: fileItem.progress + '%', backgroundColor: '#002043' }"
                                             :aria-valuenow="fileItem.progress"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                </div>
                                
                                <!-- Success icon for completed files -->
                                <div v-if="fileItem.status === 'completed'" class="file-upload-item__status" style="margin-top: 0.25rem;">
                                    <span style="font-size: 0.8125rem; color: #28a745; margin-left: 0.25rem;">Téléversé</span>
                                </div>
                                
                                <!-- Error message for failed files -->
                                <div v-if="fileItem.status === 'error'" class="file-upload-item__error">
                                    <span style="color: #dc3545; font-size: 0.8125rem; margin-left: 0.25rem;">{{ fileItem.error }}</span>
                                </div>
                            </div>
                            <button 
                                class="btn btn-sm btn-danger" 
                                @click="removeFileItem(fileItem)"
                                :disabled="fileItem.status === 'uploading'"
                                :title="fileItem.status === 'uploading' ? 'Impossible de supprimer pendant le téléversement' : 'Supprimer'">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div v-if="allFiles.length > 0 && !uploading && isAdmin" class="permissions-section">
                    <hr style="margin: 1.5rem 0;">
                    <h5><i class="fa fa-shield-alt" style="margin-right: 0.5rem; color: #002043;"></i>Permissions</h5>
                    <p class="text-muted" style="font-size: 0.875rem; margin-bottom: 1rem;">
                        Définissez les permissions pour les fichiers téléversés. Les utilisateurs/rôles avec une permission auront accès en lecture et téléchargement uniquement. Ces permissions s'appliqueront à tous les fichiers sélectionnés.
                    </p>
                    
                    <div class="permissions-list">
                        <div v-for="(permission, index) in permissions" 
                             :key="index"
                             class="permission-item">
                            <div class="permission-item__grid">
                                <div class="permission-item__type">
                                    <label class="permission-label">Type</label>
                                    <select v-model="permission.type" class="form-control form-control-sm permission-select">
                                        <option value="user">Utilisateur</option>
                                        <option value="role">Rôle</option>
                                        <option value="group">Groupe</option>
                                    </select>
                                </div>
                                
                                <div class="permission-item__value">
                                    <label class="permission-label" v-if="permission.type === 'user'">Utilisateurs</label>
                                    <label class="permission-label" v-else-if="permission.type === 'role'">Rôle</label>
                                    <label class="permission-label" v-else>Groupe</label>
                                    
                                    <div v-if="permission.type === 'user'" class="permission-input-wrapper">
                                        <select 
                                               :ref="'userSelect-' + index"
                                               :data-index="index"
                                               class="form-control form-control-sm user-selectize"
                                               multiple
                                               placeholder="Rechercher et sélectionner des utilisateurs...">
                                        </select>
                                    </div>
                                    
                                    <select v-else-if="permission.type === 'role'" v-model="permission.role" class="form-control form-control-sm permission-select">
                                        <option value="">Sélectionner un rôle</option>
                                        <option v-for="role in (availableRoles || [])" :key="role.value" :value="role.value">
                                            {{ role.label }}
                                        </option>
                                    </select>
                                    
                                    <select v-else v-model="permission.groupId" class="form-control form-control-sm permission-select">
                                        <option value="">Sélectionner un groupe</option>
                                        <option v-for="group in (availableGroups || [])" :key="group.value" :value="group.value">
                                            {{ group.label }}
                                        </option>
                                    </select>
                                </div>
                                
                                <div class="permission-item__action">
                                    <button class="btn btn-sm btn-danger permission-remove-btn" 
                                            @click="removePermission(index)"
                                            :title="'Supprimer cette permission'">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <button class="btn btn-sm btn-outline-primary permission-add-btn" @click="addPermission">
                            <i class="fa fa-plus"></i> Ajouter une permission
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="file-modal__footer">
                <button class="btn" @click="handleClose">Annuler</button>
                <button class="btn btn-primary" 
                        @click="uploadFiles"
                        :disabled="selectedFilesCount === 0 || uploading">
                    <i class="fa fa-upload"></i> Téléverser ({{ selectedFilesCount }})
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        folderId: {
            type: Number,
            default: null,
        },
        initialFiles: {
            type: Array,
            default: null,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        csrfToken: {
            type: String,
            required: true,
        },
        maxFileSize: {
            type: Number,
            default: 104857600, // 100 MB par défaut
        },
    },
    data() {
        return {
            isDragging: false,
            selectedFiles: [],
            uploads: [],
            uploading: false,
            permissions: [],
            searchTimeout: null,
            availableRoles: [],
            availableGroups: [],
            activeXhrRequests: [], // Stocker les requêtes XMLHttpRequest actives
        };
    },
    computed: {
        allFiles() {
            const files = [];
            
            // Add selected files (not yet uploaded)
            this.selectedFiles.forEach((file, index) => {
                // Check if this file is already in uploads
                const upload = this.uploads.find(u => 
                    u.file.name === file.name && 
                    u.file.size === file.size &&
                    u.file.lastModified === file.lastModified
                );
                
                if (!upload) {
                    files.push({
                        id: `selected-${index}`,
                        file: file,
                        status: 'selected',
                        progress: 0,
                        error: null,
                    });
                }
            });
            
            // Add files being uploaded or completed
            this.uploads.forEach(upload => {
                let status = 'uploading';
                if (upload.error) {
                    status = 'error';
                } else if (upload.progress >= 100) {
                    status = 'completed';
                }
                
                files.push({
                    id: upload.id,
                    file: upload.file,
                    status: status,
                    progress: upload.progress,
                    error: upload.error,
                });
            });
            
            return files;
        },
        
        selectedFilesCount() {
            return this.selectedFiles.filter(file => {
                // Don't count files that are already uploading/completed
                return !this.uploads.find(u => 
                    u.file.name === file.name && 
                    u.file.size === file.size &&
                    u.file.lastModified === file.lastModified
                );
            }).length;
        },
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
        
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        
        handleFileSelect(event) {
            const files = Array.from(event.target.files);
            this.addFiles(files);
            // Réinitialiser l'input pour permettre de sélectionner les mêmes fichiers à nouveau
            event.target.value = '';
        },
        
        handleDragOver(event) {
            event.preventDefault();
            event.stopPropagation();
            this.isDragging = true;
        },
        
        handleDragEnter(event) {
            event.preventDefault();
            event.stopPropagation();
            this.isDragging = true;
        },
        
        handleDragLeave(event) {
            event.preventDefault();
            event.stopPropagation();
            // Only set isDragging to false if we're leaving the dropzone itself
            // (not a child element)
            if (!event.currentTarget.contains(event.relatedTarget)) {
                this.isDragging = false;
            }
        },
        
        handleDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            this.isDragging = false;
            const files = Array.from(event.dataTransfer.files);
            this.addFiles(files);
        },
        
        addFiles(files) {
            for (const file of files) {
                // Vérifier la taille du fichier
                if (file.size > this.maxFileSize) {
                    const maxSizeMB = Math.round(this.maxFileSize / 1024 / 1024);
                    const fileSizeMB = Math.round(file.size / 1024 / 1024);
                    alert(`Le fichier "${file.name}" est trop volumineux (${fileSizeMB} MB). La taille maximale autorisée est de ${maxSizeMB} MB.`);
                    continue;
                }
                
                // Check if file already selected
                if (!this.selectedFiles.find(f => f.name === file.name && f.size === file.size)) {
                    this.selectedFiles.push(file);
                }
            }
        },
        
        removeFileItem(fileItem) {
            if (fileItem.status === 'selected') {
                // Remove from selectedFiles
                const index = this.selectedFiles.findIndex(f => 
                    f.name === fileItem.file.name && 
                    f.size === fileItem.file.size &&
                    f.lastModified === fileItem.file.lastModified
                );
                if (index > -1) {
                    this.selectedFiles.splice(index, 1);
                }
            } else {
                // Remove from uploads
                this.removeUpload(fileItem.id);
            }
        },
        
        formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        },
        
        getFileIcon(file) {

            if(file.status === 'completed') {
                return 'fa fa-check-circle';
            }
            if(file.status === 'uploading') {
                return 'fa fa-spinner fa-spin';
            }
            if(file.status === 'error') {
                return 'fa fa-exclamation-circle';
            }

            const name = file.file.name.toLowerCase();
            if (name.endsWith('.pdf')) return 'fa fa-file-pdf';
            if (name.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) return 'fa fa-file-image';
            if (name.match(/\.(doc|docx)$/)) return 'fa fa-file-word';
            if (name.match(/\.(xls|xlsx)$/)) return 'fa fa-file-excel';
            if (name.match(/\.(zip|rar|7z|tar|gz)$/)) return 'fa fa-file-archive';
            if (name.match(/\.(mp4|avi|mov|wmv|flv)$/)) return 'fa fa-file-video';
            if (name.match(/\.(mp3|wav|ogg|flac)$/)) return 'fa fa-file-audio';
            return 'fa fa-file';
        },
        
        addPermission() {
            const index = this.permissions.length;
            this.permissions.push({
                type: 'user',
                userIds: [], // Array of user IDs for multiple selection
                role: null,
                groupId: null,
                selectizeInstance: null,
            });
            
            // Initialize SelectizeJS after Vue has rendered
            this.$nextTick(() => {
                this.initSelectize(index);
            });
        },
        
        removePermission(index) {
            const permission = this.permissions[index];
            // Destroy SelectizeJS instance if it exists
            if (permission.selectizeInstance) {
                permission.selectizeInstance.destroy();
            }
            this.permissions.splice(index, 1);
            
            // Reinitialize SelectizeJS for remaining permissions
            this.$nextTick(() => {
                this.permissions.forEach((perm, idx) => {
                    if (perm.type === 'user' && !perm.selectizeInstance) {
                        this.initSelectize(idx);
                    }
                });
            });
        },
        
        initSelectize(index) {
            const permission = this.permissions[index];
            if (!permission || permission.type !== 'user') {
                return;
            }
            
            const selectElement = this.$refs[`userSelect-${index}`];
            if (!selectElement) {
                // Retry if element not rendered yet
                setTimeout(() => this.initSelectize(index), 100);
                return;
            }
            
            // Check if jQuery is available
            if (typeof window.$ === 'undefined') {
                console.error('jQuery is not available');
                setTimeout(() => this.initSelectize(index), 100);
                return;
            }
            
            // Check if SelectizeJS is available
            if (!window.$.fn.selectize) {
                console.warn('SelectizeJS not loaded yet, retrying...');
                setTimeout(() => this.initSelectize(index), 100);
                return;
            }
            
            // Destroy existing instance if any
            if (permission.selectizeInstance) {
                permission.selectizeInstance.destroy();
            }
            
            // Initialize SelectizeJS
            try {
                const selectize = window.$(selectElement).selectize({
                    plugins: ['remove_button'],
                    valueField: 'id',
                    labelField: 'name',
                    searchField: ['name', 'email'],
                    create: false,
                    maxItems: null, // No limit
                    dropdownParent: 'body', // Attach dropdown to body to avoid scroll issues
                    load: (query, callback) => {
                        if (!query || query.length < 2) {
                            callback();
                            return;
                        }
                        
                        fetch(`/api/users/search?q=${encodeURIComponent(query)}&limit=20`, this.addCsrfToFetchOptions())
                            .then(response => response.json())
                            .then(data => {
                                if (data.users) {
                                    callback(data.users.map(user => ({
                                        id: user.id,
                                        name: `${user.name} (${user.email})`,
                                        email: user.email,
                                    })));
                                } else {
                                    callback();
                                }
                            })
                            .catch(() => callback());
                    },
                    onChange: (value) => {
                        // SelectizeJS with multiple can return either an array or a comma-separated string
                        if (Array.isArray(value)) {
                            permission.userIds = value;
                        } else if (typeof value === 'string' && value.length > 0) {
                            permission.userIds = value.split(',');
                        } else {
                            permission.userIds = [];
                        }
                    },
                });
                
                permission.selectizeInstance = selectize[0].selectize;
            } catch (error) {
                console.error('Error initializing SelectizeJS:', error);
            }
        },
        
        async uploadFiles() {
            // Get only files that are not already uploading
            const filesToUpload = this.selectedFiles.filter(file => {
                return !this.uploads.find(u => 
                    u.file.name === file.name && 
                    u.file.size === file.size &&
                    u.file.lastModified === file.lastModified
                );
            });
            
            if (filesToUpload.length === 0 || this.uploading) {
                return;
            }
            
            this.uploading = true;
            
            // Store the number of files to upload
            const totalFiles = filesToUpload.length;
            let completedFiles = 0;
            
            for (const file of filesToUpload) {
                const uploadId = Date.now() + Math.random();
                this.uploads.push({
                    id: uploadId,
                    file: file,
                    progress: 0,
                    error: null,
                    status: 'uploading',
                });
                
                try {
                    await this.uploadFile(file, uploadId);
                    completedFiles++;
                } catch (error) {
                    // Ignorer les erreurs d'annulation (c'est normal quand on ferme la modal)
                    if (error.message !== 'Upload cancelled') {
                        // Pour les autres erreurs, on continue quand même
                        console.error('Upload error:', error);
                    }
                    // Si l'upload est annulé, on arrête la boucle
                    if (error.message === 'Upload cancelled') {
                        break;
                    }
                }
                
                // Check if all files are completed
                if (completedFiles === totalFiles) {
                    // All files uploaded, check if modal should close
                    this.$nextTick(() => {
                        this.checkAndCloseModal();
                    });
                }
            }
            
            this.uploading = false;
        },
        
        async uploadFile(file, uploadId) {
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('file', file);
                if (this.folderId) {
                    formData.append('folderId', this.folderId);
                }
                
                const xhr = new XMLHttpRequest();
                
                // Stocker la référence XHR pour pouvoir l'annuler
                const xhrRef = {
                    xhr: xhr,
                    uploadId: uploadId,
                };
                this.activeXhrRequests.push(xhrRef);
                
                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        const progress = (e.loaded / e.total) * 100;
                        const upload = this.uploads.find(u => u.id === uploadId);
                        if (upload) {
                            upload.progress = progress;
                        }
                    }
                });
                
                xhr.addEventListener('load', async () => {
                    // Retirer la référence XHR de la liste des requêtes actives
                    this.removeXhrRequest(uploadId);
                    
                    if (xhr.status === 201) {
                        const upload = this.uploads.find(u => u.id === uploadId);
                        if (upload) {
                            upload.progress = 100;
                            upload.status = 'completed';
                            const data = JSON.parse(xhr.responseText);
                            
                            // Add permissions if any and user is admin
                            if (this.isAdmin && this.permissions.length > 0 && data.file) {
                                await this.addPermissionsToFile(data.file.id);
                            }
                            
                            // Remove from uploads immediately
                            this.removeUpload(uploadId);
                            
                            // Remove from selectedFiles if still present
                            const fileIndex = this.selectedFiles.findIndex(f => 
                                f.name === file.name && 
                                f.size === file.size &&
                                f.lastModified === file.lastModified
                            );
                            if (fileIndex > -1) {
                                this.selectedFiles.splice(fileIndex, 1);
                            }
                            
                            resolve();
                        } else {
                            reject(new Error('Upload not found'));
                        }
                    } else {
                        const upload = this.uploads.find(u => u.id === uploadId);
                        if (upload) {
                            try {
                                const data = JSON.parse(xhr.responseText);
                                upload.error = data.error || 'Erreur lors du téléversement';
                            } catch (error) {
                                upload.error = 'Erreur lors du téléversement';
                            }
                            upload.status = 'error';
                            reject(new Error('Upload failed'));
                        }
                    }
                });
                
                xhr.addEventListener('error', () => {
                    // Retirer la référence XHR de la liste des requêtes actives
                    this.removeXhrRequest(uploadId);
                    
                    const upload = this.uploads.find(u => u.id === uploadId);
                    if (upload) {
                        upload.error = 'Erreur réseau';
                        upload.status = 'error';
                    }
                    reject(new Error('Network error'));
                });
                
                xhr.addEventListener('abort', () => {
                    // Retirer la référence XHR de la liste des requêtes actives
                    this.removeXhrRequest(uploadId);
                    reject(new Error('Upload cancelled'));
                });
                
                xhr.open('POST', '/api/files/upload');
                // Add CSRF token header
                xhr.setRequestHeader('X-CSRF-Token', this.csrfToken);
                xhr.send(formData);
            });
        },
        
        async addPermissionsToFile(fileId) {
            for (const perm of this.permissions) {
                if (perm.type === 'user' && perm.userIds && perm.userIds.length > 0) {
                    // Create one permission per selected user
                    for (const userId of perm.userIds) {
                        await this.addPermissionToFile(fileId, {
                            type: 'file',
                            userId: userId,
                        });
                    }
                } else if (perm.type === 'role' && perm.role) {
                    await this.addPermissionToFile(fileId, {
                        type: 'file',
                        role: perm.role,
                    });
                } else if (perm.type === 'group' && perm.groupId) {
                    await this.addPermissionToFile(fileId, {
                        type: 'file',
                        groupId: perm.groupId,
                    });
                }
            }
        },
        
        async addPermissionToFile(fileId, permissionData) {
            try {
                // Ensure fileId is a number
                const id = Number(fileId);
                if (!id || isNaN(id)) {
                    console.error('Invalid file ID:', fileId);
                    return;
                }
                
                const response = await fetch(`/api/files/${id}/permissions`, this.addCsrfToFetchOptions({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(permissionData),
                }));
                
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error adding permission:', errorData.error || 'Unknown error');
                }
            } catch (error) {
                console.error('Error adding permission:', error);
            }
        },
        
        removeUpload(uploadId) {
            const index = this.uploads.findIndex(u => u.id === uploadId);
            if (index > -1) {
                this.uploads.splice(index, 1);
            }
        },
        
        removeXhrRequest(uploadId) {
            const index = this.activeXhrRequests.findIndex(r => r.uploadId === uploadId);
            if (index > -1) {
                this.activeXhrRequests.splice(index, 1);
            }
        },
        
        /**
         * Annuler tous les téléversements en cours
         */
        cancelAllUploads() {
            // Annuler toutes les requêtes XMLHttpRequest actives
            this.activeXhrRequests.forEach(ref => {
                if (ref.xhr && ref.xhr.readyState !== XMLHttpRequest.DONE) {
                    ref.xhr.abort();
                }
            });
            
            // Réinitialiser l'état d'upload
            this.uploading = false;
            this.activeXhrRequests = [];
        },
        
        /**
         * Gérer la fermeture de la modal avec annulation des uploads en cours
         */
        handleClose() {
            // Si des uploads sont en cours, les annuler
            if (this.uploading || this.activeXhrRequests.length > 0) {
                this.cancelAllUploads();
            }
            
            // Nettoyer les SelectizeJS instances
            this.permissions.forEach(permission => {
                if (permission.selectizeInstance) {
                    permission.selectizeInstance.destroy();
                }
            });
            
            // Émettre l'événement de fermeture
            this.$emit('close');
        },
        
        checkAndCloseModal() {
            // Close modal if all files are uploaded and no files are selected
            // Use Vue.nextTick to ensure reactivity has updated
            this.$nextTick(() => {
                const hasUploads = this.uploads.length > 0;
                const hasSelectedFiles = this.selectedFiles.length > 0;
                const hasAllFiles = this.allFiles.length > 0;
                
                if (!hasUploads && !hasSelectedFiles && !hasAllFiles) {
                    // Destroy all SelectizeJS instances before clearing
                    this.permissions.forEach(permission => {
                        if (permission.selectizeInstance) {
                            permission.selectizeInstance.destroy();
                        }
                    });
                    this.$emit('uploaded');
                    this.selectedFiles = [];
                    this.permissions = [];
                }
            });
        },
        
        async loadRoles() {
            try {
                const response = await fetch('/api/roles', this.addCsrfToFetchOptions());
                if (response.ok) {
                    const data = await response.json();
                    this.availableRoles = data.roles || [];
                }
            } catch (error) {
                console.error('Error loading roles:', error);
                // Fallback to default roles if API fails
                this.availableRoles = [
                    { value: 'ROLE_USER', label: 'User' },
                    { value: 'ROLE_TECHNICIEN', label: 'Technicien' },
                    { value: 'ROLE_ADMIN', label: 'Admin' },
                ];
            }
        },
        
        async loadGroups() {
            try {
                const response = await fetch('/api/groups', this.addCsrfToFetchOptions());
                if (response.ok) {
                    const data = await response.json();
                    this.availableGroups = data.groups || [];
                }
            } catch (error) {
                console.error('Error loading groups:', error);
                this.availableGroups = [];
            }
        },
    },
    watch: {
        permissions: {
            handler(newPerms) {
                // Initialize SelectizeJS for new user permissions
                this.$nextTick(() => {
                    newPerms.forEach((perm, idx) => {
                        if (perm.type === 'user' && !perm.selectizeInstance) {
                            this.initSelectize(idx);
                        } else if (perm.type !== 'user' && perm.selectizeInstance) {
                            // Destroy SelectizeJS if type changes from user to role
                            perm.selectizeInstance.destroy();
                            perm.selectizeInstance = null;
                        }
                    });
                });
            },
            deep: true,
        },
    },
    mounted() {
        // Load available roles and groups only if user is admin (non-blocking)
        if (this.isAdmin) {
            // Use setTimeout to make it non-blocking
            setTimeout(() => {
                this.loadRoles().catch(() => {
                    // Silently fail
                    this.availableRoles = [];
                });
                this.loadGroups().catch(() => {
                    // Silently fail
                    this.availableGroups = [];
                });
            }, 0);
        }
        
        // Add initial files if provided
        if (this.initialFiles && this.initialFiles.length > 0) {
            this.addFiles(this.initialFiles);
        }
        
        // Prevent default drag behaviors on the document to avoid opening files
        this.preventDefaults = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            document.addEventListener(eventName, this.preventDefaults, false);
        });
    },
    beforeDestroy() {
        // Annuler tous les téléversements en cours avant de détruire le composant
        this.cancelAllUploads();
        
        // Destroy all SelectizeJS instances
        this.permissions.forEach(permission => {
            if (permission.selectizeInstance) {
                permission.selectizeInstance.destroy();
            }
        });
        
        // Remove event listeners
        if (this.preventDefaults) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                document.removeEventListener(eventName, this.preventDefaults, false);
            });
        }
    },
};
</script>

<style scoped>
.selected-files {
    margin-top: 1.5rem;
}

.file-list {
    margin-top: 0.75rem;
}

.file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: #f8f9fa;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.file-item--uploading {
    background: #e7f3ff;
    border-left: 3px solid #002043;
}

.file-item--completed {
    background: #d4edda;
    border-left: 3px solid #28a745;
}

.file-item--error {
    background: #f8d7da;
    border-left: 3px solid #dc3545;
}

.file-item__info {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex: 1;
    flex-direction: column;
}

.file-item__progress {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin-top: 0.5rem;
}

.file-item__progress-text {
    font-size: 0.75rem;
    color: #666;
    min-width: 40px;
    text-align: right;
}

.file-item__status {
    margin-top: 0.25rem;
}

.file-item__error {
    width: 100%;
    margin-top: 0.25rem;
}

.file-size {
    color: #666;
    font-size: 0.875rem;
}

.permissions-section {
    margin-top: 1.5rem;
}

.permissions-list {
    margin-top: 1rem;
}

.permission-item {
    margin-bottom: 1rem;
    padding: 0.75rem;
    background: #f8f9fa;
    border-radius: 4px;
}

.permission-item__header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.user-results {
    position: absolute;
    z-index: 1000;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 0.25rem;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    width: 100%;
}

.user-result-item {
    display: block;
    padding: 0.5rem 0.75rem;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #eee;
}

.user-result-item:hover {
    background: #f0f0f0;
}

.user-result-item:last-child {
    border-bottom: none;
}
</style>
