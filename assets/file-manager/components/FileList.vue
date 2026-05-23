<template>
  <div class="file-list" 
       :class="{ 'drag-over': isDraggingFiles }"
       @dragover.prevent="handleFileDragOver"
       @dragenter.prevent="handleFileDragEnter"
       @dragleave="handleFileDragLeave"
       @drop.prevent="handleFileDrop">
    <div class="file-list__header">
      <div>Nom</div>
      <div>Taille</div>
      <div>Modifié</div>
      <div>Propriétaire</div>
      <div>Actions</div>
    </div>

    <div class="file-list__body">
      <div
        v-for="folder in folders"
        :key="'folder-' + folder.id"
        class="file-list__item"
        :class="{
          selected: isSelected(folder, 'folder'),
          'drag-over': dragOverFolderId === folder.id,
          'dragging': draggedItem && draggedItem.id === folder.id && draggedItem.type === 'folder',
        }"
        draggable="true"
        @dragstart="handleDragStart(folder, 'folder', $event)"
        @dragend="handleDragEnd"
        @dragover.prevent="handleDragOver(folder, $event)"
        @dragleave="handleDragLeave(folder)"
        @drop.prevent="handleDrop(folder, $event)"
        @click="handleClick(folder, 'folder', $event)"
        @dblclick="handleDblClick(folder, 'folder')"
        @contextmenu.prevent="
          handleContextMenu({ ...folder, type: 'folder' }, $event)
        "
      >
        <div>
          <i
            class="fa fa-folder"
            style="margin-right: 0.75rem; color: #ffcb00; font-size: 1.25rem"
          ></i>
          <span style="font-weight: 500">{{ folder.name }}</span>
        </div>
        <div>-</div>
        <div>{{ formatDate(folder.updatedAt) }}</div>
        <div>{{ folder.owner.name }}</div>
        <div class="file-list__actions">
          <button 
            @click.stop="toggleStar(folder, 'folder')"
            :title="folder.isStarred ? 'Retirer des favoris' : 'Ajouter aux favoris'"
            class="file-list__action-btn">
            <i class="fa" :class="folder.isStarred ? 'fa-star' : 'fa-star-o'"></i>
          </button>
        </div>
      </div>

      <div
        v-for="file in files"
        :key="'file-' + file.id"
        class="file-list__item"
        :class="{ 
          selected: isSelected(file, 'file'),
          'dragging': draggedItem && draggedItem.id === file.id && draggedItem.type === 'file',
        }"
        draggable="true"
        @dragstart="handleDragStart(file, 'file', $event)"
        @dragend="handleDragEnd"
        @click="handleClick(file, 'file', $event)"
        @dblclick="handleDblClick(file, 'file')"
        @contextmenu.prevent="
          handleContextMenu({ ...file, type: 'file' }, $event)
        "
      >
        <div>
          <i
            :class="[getFileIcon(file), getFileIconClass(file)]"
            style="margin-right: 0.75rem; font-size: 1.25rem"
          ></i>
          <span style="font-weight: 500">{{ file.name }}</span>
        </div>
        <div>{{ file.formattedSize }}</div>
        <div>{{ formatDate(file.updatedAt) }}</div>
        <div>{{ file.owner.name }}</div>
        <div class="file-list__actions">
          <button 
            @click.stop="toggleStar(file, 'file')"
            :title="file.isStarred ? 'Retirer des favoris' : 'Ajouter aux favoris'"
            class="file-list__action-btn">
            <i class="fa" :class="file.isStarred ? 'fa-star' : 'fa-star-o'"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFileIcon, getFileIconClass } from '../file-icons.js';

export default {
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
      isDraggingFiles: false,
    };
  },
  methods: {
    getFileIcon,
    getFileIconClass,
    isSelected(item, type) {
      return this.selectedItems.some(
        (i) => i.id === item.id && i.type === type
      );
    },
    handleDragStart(item, type, event) {
      this.draggedItem = { id: item.id, type, name: item.name };
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('application/json', JSON.stringify({
        id: item.id,
        type: type,
        name: item.name,
      }));
      // Stop propagation to prevent triggering file drag handlers
      event.stopPropagation();
    },
    handleDragEnd() {
      this.draggedItem = null;
    },
    handleDragOver(folder, event) {
      // Only allow drop on folders
      if (folder.type !== "folder") return;
      
      // Don't handle if files are being dragged from outside
      // Check if it's external files (Files type without application/json)
      if (event.dataTransfer.types.includes('Files') && 
          !event.dataTransfer.types.includes('application/json')) {
        return;
      }

      // Check if we have dragged item data (from dragstart event stored in parent)
      // We can't read dataTransfer.getData() during dragover, so we check types
      if (event.dataTransfer.types.includes("application/json")) {
        // Don't allow dropping on itself - we'll check this in drop handler
        event.dataTransfer.dropEffect = "move";
        this.dragOverFolderId = folder.id;
        event.stopPropagation();
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
      
      // Don't handle if files are being dropped from outside
      // Check if it's external files (Files type without application/json)
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0 &&
          !event.dataTransfer.types.includes('application/json')) {
        return;
      }

      const draggedData = event.dataTransfer.getData("application/json");
      if (!draggedData) return;

      try {
        const dragged = JSON.parse(draggedData);

        // Don't allow dropping on itself
        if (dragged.id === folder.id && dragged.type === "folder") {
          return;
        }

        // Emit drop event to parent
        this.$emit("drop", {
          item: dragged,
          targetFolder: folder,
        });
        event.stopPropagation();
      } catch (e) {
        console.error("Error parsing drag data:", e);
      }
    },
    handleClick(item, type, event) {
      // If Ctrl/Meta is pressed, emit immediately (no need to wait for double-click detection)
      if (event.ctrlKey || event.metaKey) {
        this.$emit("select", { ...item, type }, event);
        event.stopPropagation();
        return;
      }

      // Prevent single click if double click is detected
      const now = Date.now();
      const timeDiff = now - this.lastClickTime;

      if (
        this.lastClickItem &&
        this.lastClickItem.id === item.id &&
        this.lastClickItem.type === type &&
        timeDiff < 300
      ) {
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
        this.$emit("select", { ...item, type }, event);
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
      this.$emit("open", { ...item, type });
    },
    handleMore(item) {
      this.$emit("more", { ...item });
    },
    handleContextMenu(item, event) {
      this.$emit("context-menu", { ...item }, event);
    },
    async toggleStar(item, type) {
      try {
        const response = await fetch(`/api/files/${item.id}/star?type=${type}`, {
          method: "POST",
          headers: {
            'X-CSRF-Token': this.csrfToken,
          },
        });
        const data = await response.json();
        if (response.ok) {
          item.isStarred = data.starred;
          // Emit event to parent to update the item in the list
          this.$emit("star-toggled", { ...item, type, isStarred: data.starred });
        }
      } catch (error) {
        console.error("Error toggling star:", error);
      }
    },
    formatDate(dateString) {
      if (!dateString) return "-";
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    
    handleFileDragEnter(event) {
      // Check if files are being dragged from outside (not from within the app)
      // Only handle if Files type is present but NOT application/json (internal drag)
      if (event.dataTransfer.types.includes('Files') && 
          !event.dataTransfer.types.includes('application/json')) {
        event.preventDefault();
        event.stopPropagation();
        this.isDraggingFiles = true;
      }
    },
    
    handleFileDragOver(event) {
      // Check if files are being dragged from outside
      // Only handle if Files type is present but NOT application/json (internal drag)
      if (event.dataTransfer.types.includes('Files') && 
          !event.dataTransfer.types.includes('application/json')) {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
      }
    },
    
    handleFileDragLeave(event) {
      // Only clear if we're actually leaving the list container
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setTimeout(() => {
          this.isDraggingFiles = false;
        }, 50);
      }
    },
    
    handleFileDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDraggingFiles = false;
      
      // Check if files are being dropped from outside
      // Only handle if Files type is present but NOT application/json (internal drag)
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0 &&
          !event.dataTransfer.types.includes('application/json')) {
        // Emit event to parent to open upload modal
        this.$emit('file-drop', {
          files: Array.from(event.dataTransfer.files),
        });
      }
    },
  },
};
</script>
