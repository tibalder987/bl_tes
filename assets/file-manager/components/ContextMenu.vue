<template>
    <div v-if="visible" class="context-menu" :style="menuStyle" @click.stop>
        <div class="context-menu__item" @click="handleOpen">
            <i class="fa" :class="item.type === 'folder' ? 'fa-folder-open' : 'fa-eye'"></i> 
            {{ item.type === 'folder' ? 'Ouvrir' : 'Voir' }}
        </div>
        
        <div v-if="isAdmin || item.canDelete || item.canEdit" class="context-menu__separator"></div>
        
        <div v-if="currentView !== 'trash' && item.canEdit" class="context-menu__item" @click="handleRename">
            <i class="fa fa-edit"></i> Renommer
        </div>
        
        <div v-if="currentView === 'trash' && item.canDelete" class="context-menu__item" @click="handleRestore">
            <i class="fa fa-undo"></i> Restaurer
        </div>
        
        <div v-if="currentView === 'trash' && item.canDelete" class="context-menu__item danger" @click="handlePermanentDelete">
            <i class="fa fa-trash"></i> Supprimer définitivement
        </div>
        
        <div v-if="currentView !== 'trash' && isAdmin" class="context-menu__item" @click="handlePermissions">
            <i class="fa fa-lock"></i> Permissions
        </div>
        
        <div v-if="currentView !== 'trash' && item.canDelete" class="context-menu__separator"></div>
        
        <div v-if="currentView !== 'trash' && item.canDelete" class="context-menu__item danger" @click="handleDelete">
            <i class="fa fa-trash"></i> Supprimer
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            default: null,
        },
        position: {
            type: Object,
            default: () => ({ x: 0, y: 0 }),
        },
        currentView: {
            type: String,
            default: 'home',
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        menuStyle() {
            return {
                left: `${this.position.x}px`,
                top: `${this.position.y}px`,
            };
        },
    },
    methods: {
        handleOpen() {
            this.$emit('open', this.item);
            this.$emit('close');
        },
        handleRename() {
            this.$emit('rename', this.item);
            this.$emit('close');
        },
        handleDelete() {
            this.$emit('delete', this.item);
            this.$emit('close');
        },
        handleRestore() {
            this.$emit('restore', this.item);
            this.$emit('close');
        },
        handlePermanentDelete() {
            this.$emit('permanent-delete', this.item);
            this.$emit('close');
        },
        handlePermissions() {
            this.$emit('permissions', this.item);
            this.$emit('close');
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.$emit('close');
            }
        },
    },
    mounted() {
        // Close menu when clicking outside
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>

