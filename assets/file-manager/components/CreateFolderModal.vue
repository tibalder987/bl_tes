<template>
    <div class="file-modal__overlay" @click.self="$emit('close')">
        <div class="file-modal__content file-modal__content--folder">
            <div class="file-modal__header">
                <h3>Nouveau dossier</h3>
                <button class="btn btn-sm" @click="$emit('close')">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            
            <div class="file-modal__body">
                <div class="form-group">
                    <label>Nom du dossier <span class="text-danger">*</span></label>
                    <input type="text" 
                           class="form-control" 
                           v-model="folderName"
                           placeholder="Nom du dossier"
                           @keyup.enter="createFolder"
                           ref="nameInput">
                </div>
                
                <hr v-if="isAdmin">
                
                <div v-if="isAdmin">
                    <h5>Permissions</h5>
                    <p class="text-muted" style="font-size: 0.875rem;">
                        Définissez les permissions pour ce dossier. Les utilisateurs/rôles avec une permission auront accès en lecture et téléchargement uniquement. Les permissions peuvent être modifiées ultérieurement.
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
                <button class="btn" @click="$emit('close')">Annuler</button>
                <button class="btn btn-primary" 
                        @click="createFolder"
                        :disabled="!canCreate">
                    Créer
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        parentFolderId: {
            type: Number,
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
    },
    data() {
        return {
            folderName: '',
            permissions: [],
            searchTimeout: null,
            availableRoles: [],
            availableGroups: [],
        };
    },
    computed: {
        canCreate() {
            return this.folderName.trim().length > 0;
        },
    },
    watch: {
        permissions: {
            handler(newPerms) {
                // Only initialize SelectizeJS if user is admin
                if (!this.isAdmin) {
                    return;
                }
                
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
        
        this.$nextTick(() => {
            if (this.$refs.nameInput) {
                this.$refs.nameInput.focus();
            }
        });
    },
    beforeDestroy() {
        // Destroy all SelectizeJS instances
        this.permissions.forEach(permission => {
            if (permission.selectizeInstance) {
                permission.selectizeInstance.destroy();
            }
        });
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
            
            // Check if jQuery and SelectizeJS are available
            if (typeof window.$ === 'undefined' || !window.$.fn.selectize) {
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
        
        async createFolder() {
            if (!this.canCreate) {
                return;
            }
            
            try {
                // First create the folder
                const response = await fetch('/api/files/folders', this.addCsrfToFetchOptions({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.folderName,
                        parentFolderId: this.parentFolderId,
                    }),
                }));
                
                const data = await response.json();
                if (!response.ok) {
                    alert('Erreur: ' + (data.error || 'Impossible de créer le dossier'));
                    return;
                }
                
                // Ensure folderId is a valid number
                const folderId = data.folder?.id;
                if (!folderId || isNaN(Number(folderId))) {
                    console.error('Invalid folder ID received:', data.folder);
                    alert('Erreur: ID de dossier invalide reçu');
                    return;
                }
                
                // Then add permissions if any and user is admin
                if (this.isAdmin && this.permissions.length > 0) {
                    const permissionErrors = [];
                    for (const perm of this.permissions) {
                        try {
                            if (perm.type === 'user' && perm.userIds && perm.userIds.length > 0) {
                                // Create one permission per selected user
                                for (const userId of perm.userIds) {
                                    await this.sendPermissionToServer(folderId, {
                                        type: 'folder',
                                        userId: userId,
                                    });
                                }
                            } else if (perm.type === 'role' && perm.role) {
                                await this.sendPermissionToServer(folderId, {
                                    type: 'folder',
                                    role: perm.role,
                                });
                            } else if (perm.type === 'group' && perm.groupId) {
                                await this.sendPermissionToServer(folderId, {
                                    type: 'folder',
                                    groupId: perm.groupId,
                                });
                            }
                        } catch (error) {
                            console.error('Error adding permission:', error);
                            permissionErrors.push(`Permission pour ${perm.type === 'user' ? 'utilisateur' : 'rôle'} non ajoutée`);
                        }
                    }
                    
                    if (permissionErrors.length > 0) {
                        console.warn('Some permissions could not be added:', permissionErrors);
                        // Don't fail the folder creation, just warn
                    }
                }
                
                this.$emit('created', data.folder);
                this.$emit('close');
            } catch (error) {
                console.error('Error creating folder:', error);
                alert('Erreur lors de la création du dossier');
            }
        },
        
        async sendPermissionToServer(folderId, permissionData) {
            try {
                // Ensure folderId is a number
                const id = typeof folderId === 'number' ? folderId : Number(folderId);
                if (!id || isNaN(id)) {
                    console.error('Invalid folder ID:', folderId);
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
                    throw new Error(errorData.error || 'Unknown error');
                }
            } catch (error) {
                console.error('Error adding permission:', error);
                throw error;
            }
        },
    },
};
</script>

<style scoped>
.permissions-list {
    margin-top: 1rem;
}

.permission-item {
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e1e5e9;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.permission-item:hover {
    border-color: #002043;
    box-shadow: 0 2px 8px rgba(0, 32, 67, 0.1);
}

.permission-item__grid {
    display: grid;
    grid-template-columns: 140px 1fr auto;
    gap: 1rem;
    align-items: start;
}

.permission-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: #5f6368;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.375rem;
}

.permission-select {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #e1e5e9;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.permission-select:focus {
    border-color: #002043;
    box-shadow: 0 0 0 3px rgba(0, 32, 67, 0.1);
}

.permission-input-wrapper {
    width: 100%;
}

.permission-item__type {
    min-width: 140px;
}

.permission-item__value {
    flex: 1;
    min-width: 0; /* Important pour éviter le débordement */
}

.permission-item__action {
    display: flex;
    align-items: flex-start;
    padding-top: 1.5rem; /* Aligne avec les inputs */
}

.permission-remove-btn {
    padding: 0.375rem 0.625rem;
    border-radius: 6px;
    transition: opacity 0.2s ease, background-color 0.2s ease;
    min-width: 36px;
}

.permission-remove-btn:hover {
    opacity: 0.9;
    /* Removed transform and box-shadow to prevent size changes */
}

.permission-add-btn {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    transition: opacity 0.2s ease, background-color 0.2s ease;
}

.permission-add-btn:hover {
    opacity: 0.9;
    /* Removed transform and box-shadow to prevent size changes */
}

/* Responsive: sur petits écrans, passer en colonne */
@media (max-width: 768px) {
    .permission-item__grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }
    
    .permission-item__action {
        padding-top: 0;
        justify-content: flex-end;
    }
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

