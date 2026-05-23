<template>
    <div class="file-grid">
        <div v-for="folder in folders" 
             :key="'folder-' + folder.id"
             class="file-grid__item"
             :class="{ 'drag-over': dragOverFolderId === folder.id }"
             @dragover.prevent="handleDragOver(folder, $event)"
             @dragleave="handleDragLeave(folder)"
             @drop.prevent="handleDrop(folder, $event)">
            <FileItem
                :item="{ ...folder, type: 'folder' }"
                :selected="isSelected(folder, 'folder')"
                @click="handleClick(folder, 'folder', $event)"
                @dblclick="handleDblClick(folder, 'folder')"
                @star="toggleStar(folder, 'folder')"
                @more="handleMore({ ...folder, type: 'folder' }, $event)"
                @context-menu="handleContextMenu({ ...folder, type: 'folder' }, $event)"
            />
        </div>
        
        <div v-for="file in files" 
             :key="'file-' + file.id"
             class="file-grid__item">
            <FileItem
                :item="{ ...file, type: 'file' }"
                :selected="isSelected(file, 'file')"
                @click="handleClick(file, 'file', $event)"
                @dblclick="handleDblClick(file, 'file')"
                @star="toggleStar(file, 'file')"
                @more="handleMore({ ...file, type: 'file' }, $event)"
                @context-menu="handleContextMenu({ ...file, type: 'file' }, $event)"
            />
        </div>
    </div>
</template>

<script>
import FileItem from './FileItem.vue';

export default {
    components: {
        FileItem,
    },
    props: {
        files: {
            type: Array,
            default: () => [],
        },
        folders: {
            type: Array,
            default: () => [],
        },
        selectedItems: {
            type: Array,
            default: () => [],
        },
        csrfToken: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            lastClickTime: 0,
            lastClickItem: null,
            clickTimeout: null,
            dragOverFolderId: null,
            draggedItem: null,
        };
    },
    methods: {
        isSelected(item, type) {
            return this.selectedItems.some(i => i.id === item.id && i.type === type);
        },
        handleDragOver(folder, event) {
            // Only allow drop on folders
            if (folder.type !== 'folder') return;
            
            // Check if we have dragged item data (from dragstart event stored in parent)
            // We can't read dataTransfer.getData() during dragover, so we check types
            if (event.dataTransfer.types.includes('application/json')) {
                // Don't allow dropping on itself - we'll check this in drop handler
                event.dataTransfer.dropEffect = 'move';
                this.dragOverFolderId = folder.id;
            }
        },
        handleDragLeave(folder) {
            // Only clear if we're actually leaving the folder (not entering a child)
            setTimeout(() => {
                if (this.dragOverFolderId === folder.id) {
                    this.dragOverFolderId = null;
                }
            }, 50);
        },
        handleDrop(folder, event) {
            this.dragOverFolderId = null;
            
            const draggedData = event.dataTransfer.getData('application/json');
            if (!draggedData) return;
            
            try {
                const dragged = JSON.parse(draggedData);
                
                // Don't allow dropping on itself
                if (dragged.id === folder.id && dragged.type === 'folder') {
                    return;
                }
                
                // Emit drop event to parent
                this.$emit('drop', {
                    item: dragged,
                    targetFolder: folder,
                });
            } catch (e) {
                console.error('Error parsing drag data:', e);
            }
        },
        handleClick(item, type, event) {
            // If Ctrl/Meta is pressed, emit immediately (no need to wait for double-click detection)
            if (event.ctrlKey || event.metaKey) {
                this.$emit('select', { ...item, type }, event);
                event.stopPropagation();
                return;
            }
            
            // Prevent single click if double click is detected
            const now = Date.now();
            const timeDiff = now - this.lastClickTime;
            
            if (this.lastClickItem && 
                this.lastClickItem.id === item.id && 
                this.lastClickItem.type === type && 
                timeDiff < 300) {
                // Double click detected, cancel single click
                clearTimeout(this.clickTimeout);
                this.lastClickTime = 0;
                this.lastClickItem = null;
                return;
            }
            
            this.lastClickTime = now;
            this.lastClickItem = { id: item.id, type };
            
            // Delay single click to allow double click detection (only if Ctrl/Meta not pressed)
            this.clickTimeout = setTimeout(() => {
                this.$emit('select', { ...item, type }, event);
                this.lastClickTime = 0;
                this.lastClickItem = null;
            }, 300);
            
            // Stop propagation to prevent parent click handler from clearing selection
            event.stopPropagation();
        },
        handleDblClick(item, type) {
            // Cancel pending single click
            clearTimeout(this.clickTimeout);
            this.lastClickTime = 0;
            this.lastClickItem = null;
            this.$emit('open', { ...item, type });
        },
        handleMore(item, event) {
            // Emit context menu event with position
            if (event) {
                this.$emit('context-menu', { ...item }, event);
            } else {
                this.$emit('more', { ...item });
            }
        },
        handleContextMenu(item, event) {
            event.preventDefault();
            this.$emit('context-menu', { ...item }, event);
        },
        async toggleStar(item, type) {
            try {
                const response = await fetch(`/api/files/${item.id}/star?type=${type}`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-Token': this.csrfToken,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    item.isStarred = data.starred;
                }
            } catch (error) {
                console.error('Error toggling star:', error);
            }
        },
    },
};
</script>

