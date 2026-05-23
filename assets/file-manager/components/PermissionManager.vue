<template>
    <div class="file-modal__overlay" @click.self="$emit('close')">
        <div class="file-modal__content file-modal__content--permissions">
            <div class="file-modal__header">
                <h3>Gestion des permissions</h3>
                <button class="btn btn-sm" @click="$emit('close')">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            
            <div class="file-modal__body">
                <div v-if="!resourceId" class="alert alert-danger">
                    <strong>Erreur:</strong> ID de ressource invalide. Veuillez fermer cette modale et réessayer.
                </div>
                
                <div v-else-if="loading" class="file-loading">
                    <i class="fa fa-spinner fa-spin"></i> Chargement...
                </div>
                
                <div v-else>
                    <h4><i class="fa fa-shield-alt" style="margin-right: 0.5rem; color: #002043;"></i>Permissions actuelles</h4>
                    <div v-if="permissions.length === 0" class="permissions-empty">
                        <i class="fa fa-info-circle"></i>
                        <strong>Aucune permission spécifique</strong>
                        <div>
                            <small>Seul l'administrateur aura accès à cette ressource</small>
                        </div>
                    </div>
                    <div v-else class="permissions-current-list">
                        <div v-for="permission in permissions" 
                             :key="permission.id"
                             class="permission-current-item">
                            <span v-if="permission.user" class="permission-current-item__badge permission-current-item__badge--user">
                                <i class="fa fa-user"></i>
                                {{ permission.user.name }}
                            </span>
                            <span v-else-if="permission.group" class="permission-current-item__badge permission-current-item__badge--group">
                                <i class="fa fa-users"></i>
                                {{ permission.group.label }}
                            </span>
                            <span v-else class="permission-current-item__badge permission-current-item__badge--role">
                                <i class="fa fa-shield"></i>
                                {{ permission.role }}
                            </span>
                            <span class="permission-current-item__granted-by">
                                Accordé par {{ permission.grantedBy.name }}
                            </span>
                            <button class="permission-current-item__delete" 
                                    @click="deletePermission(permission.id)"
                                    title="Supprimer">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    <hr>
                    
                    <h5>Ajouter une permission</h5>
                    <p class="text-muted" style="font-size: 0.875rem;">
                        Les utilisateurs/rôles avec une permission auront accès en lecture et téléchargement uniquement. Les permissions peuvent être modifiées ultérieurement.
                    </p>
                    
                    <div class="permissions-list">
                        <div class="permission-item">
                            <div class="permission-item__grid">
                                <div class="permission-item__type">
                                    <label class="permission-label">Type</label>
                                    <select v-model="newPermission.type" class="form-control form-control-sm permission-select">
                                        <option value="user">Utilisateur</option>
                                        <option value="role">Rôle</option>
                                        <option value="group">Groupe</option>
                                    </select>
                                </div>
                                
                                <div class="permission-item__value">
                                    <label class="permission-label" v-if="newPermission.type === 'user'">Utilisateurs</label>
                                    <label class="permission-label" v-else-if="newPermission.type === 'role'">Rôle</label>
                                    <label class="permission-label" v-else>Groupe</label>
                                    
                                    <div v-if="newPermission.type === 'user'" class="permission-input-wrapper">
                                        <select 
                                               ref="userSelect"
                                               class="form-control form-control-sm user-selectize"
                                               multiple
                                               placeholder="Rechercher et sélectionner des utilisateurs...">
                                        </select>
                                    </div>
                                    
                                    <select v-else-if="newPermission.type === 'role'" v-model="newPermission.role" class="form-control form-control-sm permission-select">
                                        <option value="">Sélectionner un rôle</option>
                                        <option v-for="role in availableRoles" :key="role.value" :value="role.value">
                                            {{ role.label }}
                                        </option>
                                    </select>
                                    
                                    <select v-else v-model="newPermission.groupId" class="form-control form-control-sm permission-select">
                                        <option value="">Sélectionner un groupe</option>
                                        <option v-for="group in availableGroups" :key="group.value" :value="group.value">
                                            {{ group.label }}
                                        </option>
                                    </select>
                                </div>
                                
                                <div class="permission-item__action">
                                    <button class="btn btn-sm btn-primary permission-add-confirm-btn" 
                                            @click="addPermission"
                                            :disabled="!canAddPermission"
                                            title="Ajouter cette permission">
                                        <i class="fa fa-plus"></i> Ajouter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="file-modal__footer">
                <button class="btn" @click="$emit('close')">Fermer</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        resource: {
            type: Object,
            required: true,
        },
        csrfToken: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            permissions: [],
            users: [],
            userResults: [],
            newPermission: {
                type: 'user',
                userIds: [], // Array of user IDs for multiple selection
                role: null,
                groupId: null,
                selectizeInstance: null,
            },
            availableRoles: [],
            availableGroups: [],
        };
    },
    computed: {
        canAddPermission() {
            if (this.newPermission.type === 'user') {
                return this.newPermission.userIds && this.newPermission.userIds.length > 0;
            } else if (this.newPermission.type === 'role') {
                return this.newPermission.role !== null && this.newPermission.role !== '';
            } else {
                return this.newPermission.groupId !== null && this.newPermission.groupId !== '';
            }
        },
        resourceType() {
            if (!this.resource || typeof this.resource !== 'object') {
                return 'file';
            }
            return this.resource.type || (this.resource.folderId !== undefined ? 'folder' : 'file');
        },
        resourceId() {
            if (!this.resource || typeof this.resource !== 'object') {
                return null;
            }
            const id = this.resource.id;
            // Ensure id is a number
            if (typeof id === 'number') {
                return id;
            }
            if (typeof id === 'string' && /^\d+$/.test(id)) {
                return parseInt(id, 10);
            }
            return null;
        },
    },
    mounted() {
        this.loadPermissions();
        this.loadRoles();
        this.loadGroups();
        
        // Initialize SelectizeJS after Vue has rendered
        this.$nextTick(() => {
            this.initSelectize();
        });
    },
    beforeDestroy() {
        // Destroy SelectizeJS instance
        if (this.newPermission.selectizeInstance) {
            this.newPermission.selectizeInstance.destroy();
        }
    },
    watch: {
        'newPermission.type'(newType) {
            // Reinitialize SelectizeJS when type changes
            if (this.newPermission.selectizeInstance) {
                this.newPermission.selectizeInstance.destroy();
                this.newPermission.selectizeInstance = null;
            }
            
            if (newType === 'user') {
                this.$nextTick(() => {
                    this.initSelectize();
                });
            } else {
                this.newPermission.userIds = [];
            }
        },
        
        permissions() {
            // Reinitialize SelectizeJS when permissions list changes (after adding)
            if (this.newPermission.type === 'user') {
                this.$nextTick(() => {
                    this.initSelectize();
                });
            }
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
        
        async loadPermissions() {
            if (!this.resourceId) {
                console.error('Invalid resource ID:', this.resource);
                return;
            }
            
            this.loading = true;
            try {
                const response = await fetch(`/api/files/${this.resourceId}/permissions?type=${this.resourceType}`, this.addCsrfToFetchOptions());
                const data = await response.json();
                if (response.ok) {
                    this.permissions = data.permissions || [];
                }
            } catch (error) {
                console.error('Error loading permissions:', error);
            } finally {
                this.loading = false;
            }
        },
        
        async searchUsers() {
            // Not needed anymore, SelectizeJS handles search
        },
        
        selectUser(user) {
            // Not needed anymore, SelectizeJS handles selection
        },
        
        initSelectize() {
            if (this.newPermission.type !== 'user') {
                return;
            }
            
            const selectElement = this.$refs.userSelect;
            if (!selectElement) {
                // Retry if element not rendered yet
                setTimeout(() => this.initSelectize(), 100);
                return;
            }
            
            // Check if jQuery and SelectizeJS are available
            if (typeof window.$ === 'undefined' || !window.$.fn.selectize) {
                console.warn('SelectizeJS not loaded yet, retrying...');
                setTimeout(() => this.initSelectize(), 100);
                return;
            }
            
            // Destroy existing instance if any
            if (this.newPermission.selectizeInstance) {
                this.newPermission.selectizeInstance.destroy();
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
                        
                        fetch(`/api/users/search?q=${encodeURIComponent(query)}&limit=20`)
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
                            this.newPermission.userIds = value;
                        } else if (typeof value === 'string' && value.length > 0) {
                            this.newPermission.userIds = value.split(',');
                        } else {
                            this.newPermission.userIds = [];
                        }
                    },
                });
                
                this.newPermission.selectizeInstance = selectize[0].selectize;
            } catch (error) {
                console.error('Error initializing SelectizeJS:', error);
            }
        },
        
        async addPermission() {
            if (!this.resourceId) {
                alert('Erreur: ID de ressource invalide');
                return;
            }
            
            if (!this.canAddPermission) {
                return;
            }
            
            try {
                if (this.newPermission.type === 'user' && this.newPermission.userIds && this.newPermission.userIds.length > 0) {
                    // Create one permission per selected user
                    const errors = [];
                    for (const userId of this.newPermission.userIds) {
                        try {
                            const response = await fetch(`/api/files/${this.resourceId}/permissions`, this.addCsrfToFetchOptions({
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    type: this.resourceType,
                                    userId: userId,
                                }),
                            }));
                            
                            const data = await response.json();
                            if (!response.ok) {
                                errors.push(data.error || 'Erreur inconnue');
                            }
                        } catch (error) {
                            errors.push('Erreur lors de l\'ajout de la permission');
                        }
                    }
                    
                    if (errors.length > 0) {
                        alert('Erreurs lors de l\'ajout des permissions: ' + errors.join(', '));
                    } else {
                        this.loadPermissions();
                        this.resetNewPermission();
                    }
                } else if (this.newPermission.type === 'role' && this.newPermission.role) {
                    const response = await fetch(`/api/files/${this.resourceId}/permissions`, this.addCsrfToFetchOptions({
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            type: this.resourceType,
                            role: this.newPermission.role,
                        }),
                    }));
                    
                    const data = await response.json();
                    if (response.ok) {
                        this.loadPermissions();
                        this.resetNewPermission();
                    } else {
                        alert('Erreur: ' + data.error);
                    }
                } else if (this.newPermission.type === 'group' && this.newPermission.groupId) {
                    const response = await fetch(`/api/files/${this.resourceId}/permissions`, this.addCsrfToFetchOptions({
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            type: this.resourceType,
                            groupId: this.newPermission.groupId,
                        }),
                    }));
                    
                    const data = await response.json();
                    if (response.ok) {
                        this.loadPermissions();
                        this.resetNewPermission();
                    } else {
                        alert('Erreur: ' + data.error);
                    }
                }
            } catch (error) {
                console.error('Error adding permission:', error);
                alert('Erreur lors de l\'ajout de la permission');
            }
        },
        
        resetNewPermission() {
            // Destroy SelectizeJS instance completely
            if (this.newPermission.selectizeInstance) {
                this.newPermission.selectizeInstance.destroy();
                this.newPermission.selectizeInstance = null;
            }
            
            // Reset the form but keep type as 'user' so form stays visible
            this.newPermission.userIds = [];
            this.newPermission.role = null;
            this.newPermission.groupId = null;
            
            // Reinitialize SelectizeJS after reset
            this.$nextTick(() => {
                if (this.newPermission.type === 'user') {
                    this.initSelectize();
                }
            });
        },
        
        async deletePermission(permissionId) {
            if (!this.resourceId) {
                alert('Erreur: ID de ressource invalide');
                return;
            }
            
            if (!confirm('Supprimer cette permission ?')) {
                return;
            }
            
            try {
                const response = await fetch(`/api/files/${this.resourceId}/permissions/${permissionId}`, this.addCsrfToFetchOptions({
                    method: 'DELETE',
                }));
                
                if (response.ok) {
                    this.loadPermissions();
                } else {
                    const data = await response.json();
                    alert('Erreur: ' + data.error);
                }
            } catch (error) {
                console.error('Error deleting permission:', error);
            }
        },
    },
};
</script>

<style scoped>
/* Permissions current list */
.permissions-empty {
    margin-top: 0.75rem;
    padding: 2rem 1rem;
    text-align: center;
    color: #5f6368;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e1e5e9;
}

.permissions-empty i {
    font-size: 2rem;
    opacity: 0.4;
    color: #5f6368;
    display: block;
    margin-bottom: 0.75rem;
}

.permissions-empty strong {
    display: block;
    font-size: 0.9375rem;
    color: #202124;
    margin-bottom: 0.25rem;
}

.permissions-empty small {
    display: block;
    font-size: 0.8125rem;
    color: #5f6368;
}

.permissions-current-list {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.permission-current-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.875rem 1rem;
    background: #fff;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #e1e5e9;
    transition: all 0.2s ease;
}

.permission-current-item:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.permission-current-item:last-child {
    border-bottom: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.permission-current-item:hover {
    background: #f8f9fa;
}

.permission-current-item__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
    min-width: 120px;
}

.permission-current-item__badge i {
    font-size: 0.875rem;
    opacity: 0.8;
}

.permission-current-item__badge--user {
    background-color: #e8f0fe;
    color: #1967d2;
}

.permission-current-item__badge--user i {
    color: #1967d2;
}

.permission-current-item__badge--role {
    background-color: #fef7e0;
    color: #ea8600;
}

.permission-current-item__badge--role i {
    color: #ea8600;
}

.permission-current-item__badge--group {
    background-color: #e8f5e9;
    color: #2e7d32;
}

.permission-current-item__badge--group i {
    color: #2e7d32;
}

.permission-current-item__granted-by {
    font-size: 0.875rem;
    color: #5f6368;
    flex: 1;
    min-width: 0;
}

.permission-current-item__delete {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid #e1e5e9;
    background-color: #fff;
    color: #dc3545;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    padding: 0;
    flex-shrink: 0;
}

.permission-current-item__delete:hover {
    background-color: #dc3545;
    color: #fff;
    border-color: #dc3545;
}

.permission-current-item__delete:active {
    background-color: #c82333;
    border-color: #c82333;
}

.permission-current-item__delete i {
    font-size: 0.875rem;
}

/* Permissions list (same style as CreateFolderModal) */
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
    min-width: 0;
}

.permission-item__action {
    display: flex;
    align-items: flex-start;
    padding-top: 1.5rem;
    gap: 0.5rem;
}

.permission-add-confirm-btn {
    padding: 0.375rem 0.875rem;
    border-radius: 6px;
    transition: opacity 0.2s ease, background-color 0.2s ease;
    white-space: nowrap;
}

.permission-add-confirm-btn:hover:not(:disabled) {
    opacity: 0.9;
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
}

@media (max-width: 768px) {
    .permission-item__grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }
    
    .permission-item__action {
        padding-top: 0;
        justify-content: flex-end;
    }
    
    .permission-current-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
    
    .permission-current-item__granted-by {
        width: 100%;
    }
}

