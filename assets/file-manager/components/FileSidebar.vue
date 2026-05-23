<template>
    <div class="file-sidebar">
        <div class="file-sidebar__section">
            <div class="file-sidebar__title">Navigation</div>
            <a href="#" 
               class="file-sidebar__item" 
               :class="{ active: currentView === 'home' }"
               @click.prevent="$emit('view-changed', 'home')">
                <i class="fa fa-home"></i>
                Accueil
            </a>
            <a href="#" 
               class="file-sidebar__item" 
               :class="{ active: currentView === 'starred' }"
               @click.prevent="$emit('view-changed', 'starred')">
                <i class="fa fa-star"></i>
                Favoris
            </a>
            <a href="#" 
               class="file-sidebar__item" 
               :class="{ active: currentView === 'trash' }"
               @click.prevent="$emit('view-changed', 'trash')">
                <i class="fa fa-trash"></i>
                Corbeille
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentView: {
            type: String,
            default: 'home',
        },
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

