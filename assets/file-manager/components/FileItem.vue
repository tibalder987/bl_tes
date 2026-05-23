<template>
    <div class="file-item" 
         :class="{ selected: selected, 'dragging': isDragging }"
         draggable="true"
         @dragstart="handleDragStart"
         @dragend="handleDragEnd"
         @click="$emit('click', $event)"
         @dblclick="$emit('dblclick')"
         @contextmenu="$emit('context-menu', $event)">


         <div 
                class="file-item__star"
                :class="{ 'file-item__star--starred': item.isStarred }"
                @click.stop="$emit('star')"
                :title="item.isStarred ? 'Retirer des favoris' : 'Ajouter aux favoris'">
            <i class="fa" :style="{ color: item.isStarred ? '#FFCB00' : '#000' }" :class="item.isStarred ? 'fa-star' : 'fa-star-o'"></i>
        </div>
        
        <div class="file-item__icon" :class="getFileIconClass(item)">
            <i :class="getFileIcon(item)"></i>
        </div>
        
        <div class="file-item__name" :title="item.name">{{ item.name }}</div>
        
        <div class="file-item__meta" v-if="item.type === 'file'">
            {{ item.formattedSize }}
        </div>
        
        <div class="file-item__actions">
            <button 
                    @click.stop="$emit('more', $event)"
                    title="Plus d'options">
                <i class="fa fa-ellipsis-v"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { getFileIcon, getFileIconClass } from '../file-icons.js';

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
        selected: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isDragging: false,
        };
    },
    methods: {
        getFileIcon,
        getFileIconClass,
        handleDragStart(event) {
            this.isDragging = true;
            // Store the dragged item data
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('application/json', JSON.stringify({
                id: this.item.id,
                type: this.item.type,
                name: this.item.name,
            }));
            
            // Add visual feedback
            event.dataTransfer.setDragImage(event.target, 0, 0);
        },
        handleDragEnd() {
            this.isDragging = false;
        },
    },
};
</script>

