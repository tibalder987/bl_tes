<template>
    <div class="file-toolbar">
        <button v-if="canUploadFile" class="file-toolbar__button primary" @click="$emit('upload')">
            <i class="fa fa-upload"></i> Téléverser
        </button>
        
        <button v-if="canCreateFolder" class="file-toolbar__button" @click="$emit('create-folder')">
            <i class="fa fa-folder-plus"></i> Nouveau dossier
        </button>
        
        <div class="file-toolbar__separator" v-if="selectedItems.length > 0"></div>
        
        <button v-if="selectedItems.length > 0 && canDeleteSelected" 
                class="file-toolbar__button" 
                @click="$emit('delete')">
            <i class="fa" :class="currentView === 'trash' ? 'fa-trash' : 'fa-trash'"></i> 
            {{ currentView === 'trash' ? 'Supprimer définitivement' : 'Supprimer' }} ({{ selectedItems.length }})
        </button>
        
        <div class="file-toolbar__separator"></div>
        
        <button class="file-toolbar__button" 
                :class="{ active: viewMode === 'grid' }"
                @click="$emit('view-mode-changed', 'grid')">
            <i class="fa fa-th"></i>
        </button>
        
        <button class="file-toolbar__button" 
                :class="{ active: viewMode === 'list' }"
                @click="$emit('view-mode-changed', 'list')">
            <i class="fa fa-list"></i>
        </button>
        
        <div class="file-toolbar__search">
            <input type="text" 
                   placeholder="Rechercher..."
                   :value="searchQuery"
                   @input="$emit('search', $event.target.value)">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentFolder: {
            type: Object,
            default: null,
        },
        selectedItems: {
            type: Array,
            default: () => [],
        },
        searchQuery: {
            type: String,
            default: '',
        },
        currentView: {
            type: String,
            default: 'home',
        },
        canUploadFile: {
            type: Boolean,
            default: true,
        },
        canCreateFolder: {
            type: Boolean,
            default: true,
        },
        viewMode: {
            type: String,
            default: 'grid',
        },
    },
    computed: {
        canDeleteSelected() {
            return this.selectedItems.some(item => item.canDelete);
        },
    },
};
</script>

<style scoped>
.file-toolbar__button.active {
    background: #002043;
    color: white;
}
</style>

