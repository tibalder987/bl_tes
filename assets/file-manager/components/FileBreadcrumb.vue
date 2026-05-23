<template>
    <div class="file-breadcrumb">
        <a href="#" 
           class="file-breadcrumb__item"
           :class="{ 'drag-over': dragOverItemId === 'root' }"
           @click.prevent="$emit('navigate', null)"
           @dragover.prevent="handleDragOver('root', $event)"
           @dragleave="handleDragLeave('root')"
           @drop.prevent="handleDrop(null, $event)">
            <i class="fa fa-home"></i> Accueil
        </a>
        
        <span class="file-breadcrumb__separator" v-if="items.length > 0">/</span>
        
        <template v-for="(item, index) in items">
            <a :key="item.id"
               href="#" 
               class="file-breadcrumb__item"
               :class="{ 
                   active: index === items.length - 1,
                   'drag-over': dragOverItemId === item.id
               }"
               @click.prevent="$emit('navigate', item)"
               @dragover.prevent="handleDragOver(item.id, $event)"
               @dragleave="handleDragLeave(item.id)"
               @drop.prevent="handleDrop(item, $event)">
                {{ item.name }}
            </a>
            <span v-if="index < items.length - 1" :key="'sep-' + item.id" class="file-breadcrumb__separator">/</span>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            dragOverItemId: null,
        };
    },
    methods: {
        handleDragOver(itemId, event) {
            // Check if we have dragged item data
            if (event.dataTransfer.types.includes('application/json')) {
                event.dataTransfer.dropEffect = 'move';
                this.dragOverItemId = itemId;
            }
        },
        handleDragLeave(itemId) {
            // Only clear if we're actually leaving the item
            setTimeout(() => {
                if (this.dragOverItemId === itemId) {
                    this.dragOverItemId = null;
                }
            }, 50);
        },
        handleDrop(folder, event) {
            this.dragOverItemId = null;
            
            const draggedData = event.dataTransfer.getData('application/json');
            if (!draggedData) return;
            
            try {
                const dragged = JSON.parse(draggedData);
                
                // Don't allow dropping on itself if it's a folder
                if (folder && dragged.id === folder.id && dragged.type === 'folder') {
                    return;
                }
                
                // Emit drop event to parent
                this.$emit('drop', {
                    item: dragged,
                    targetFolder: folder, // null for root, folder object for parent folders
                });
            } catch (e) {
                console.error('Error parsing drag data:', e);
            }
        },
    },
};
</script>

