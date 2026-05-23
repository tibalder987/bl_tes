<template>
    <div class="file-modal__overlay" @click.self="$emit('close')">
        <div class="file-modal__content file-modal__content--rename">
            <div class="file-modal__header">
                <h3>Renommer {{ item.type === 'folder' ? 'le dossier' : 'le fichier' }}</h3>
                <button class="btn btn-sm" @click="$emit('close')">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            
            <div class="file-modal__body">
                <div class="form-group">
                    <label>Nom</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        v-model="newName"
                        @keyup.enter="handleRename"
                        ref="nameInput"
                        :placeholder="item.name">
                </div>
            </div>
            
            <div class="file-modal__footer">
                <button class="btn" @click="$emit('close')">Annuler</button>
                <button class="btn btn-primary" @click="handleRename" :disabled="!newName || newName.trim() === ''">
                    Renommer
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
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
            newName: '',
        };
    },
    mounted() {
        // Set initial name and focus input
        this.newName = this.item.name;
        this.$nextTick(() => {
            if (this.$refs.nameInput) {
                this.$refs.nameInput.focus();
                this.$refs.nameInput.select();
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
        
        async handleRename() {
            if (!this.newName || this.newName.trim() === '') {
                return;
            }
            
            try {
                const response = await fetch(`/api/files/${this.item.id}/rename`, this.addCsrfToFetchOptions({
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.newName.trim(),
                        type: this.item.type,
                    }),
                }));
                
                const data = await response.json();
                
                if (response.ok) {
                    this.$emit('renamed', { ...this.item, name: this.newName.trim() });
                    this.$emit('close');
                } else {
                    alert('Erreur: ' + (data.error || 'Impossible de renommer'));
                }
            } catch (error) {
                console.error('Error renaming:', error);
                alert('Erreur lors du renommage');
            }
        },
    },
};
</script>

