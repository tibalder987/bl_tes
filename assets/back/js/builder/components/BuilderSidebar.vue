<template>

<div class="builder-sidebar">
        <div class="builder-sidebar__header">
            <div >
                <input type="text" class="form-control form-control-sm" placeholder="Rechercher..." v-model="searchQuery">
            </div>
        </div>
        <div class="builder-sidebar__content">
            <div v-for="(elements, category) in groupedElements" :key="category" class="builder-sidebar__category mb-3">
                <div class="builder-sidebar__category-title d-flex justify-content-between align-items-center p-2 bg-light rounded cursor-pointer" @click="toggleCategory(category)" style="cursor: pointer;">
                    <span class="fw-bold text-uppercase small text-muted">{{ category }}</span>
                    <i class="fa fa-xs text-muted" :class="collapsedCategories[category] ? 'fa-chevron-right' : 'fa-chevron-down'"></i>
                </div>
                
                <draggable
                    v-show="!collapsedCategories[category]"
                    class="dragArea list-group mt-2"
                    :list="elements"
                    :group="{ name: 'builder', pull: 'clone', put: false }"
                    :clone="cloneElement"
                    :sort="false"
                >
                    <div class="list-group-item builder-sidebar__item" v-for="element in elements" :key="element.template">
                        <div class="builder-sidebar__item-icon">
                            <i class="fa" :class="element.icon || 'fa-cube'"></i>
                        </div>
                        <span class="builder-sidebar__item-label">{{ element.name }}</span>
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import availableElements from '../elements/StylesheetElements';

    export default {
        name: 'BuilderSidebar',
        components: {
            draggable
        },
        props: ['builderData'],
        data() {
            return {
                availableElements: availableElements(this.builderData),
                searchQuery: '',
                collapsedCategories: {}
            };
        },
        computed: {
            filteredElements() {
                if (!this.searchQuery) {
                    return this.availableElements;
                }
                const query = this.searchQuery.toLowerCase();
                return this.availableElements.filter(element => 
                    element.name.toLowerCase().includes(query)
                );
            },
            groupedElements() {
                const groups = {};
                // Define order of categories if desired, or just let them appear naturally
                const order = ['Mise en page', 'Basique', 'Média', 'Avancé', 'Dynamique', 'Autres'];
                
                this.filteredElements.forEach(element => {
                    const category = element.category || 'Autres';
                    if (!groups[category]) {
                        groups[category] = [];
                    }
                    groups[category].push(element);
                });
                
                // Sort keys based on order
                const sortedGroups = {};
                Object.keys(groups).sort((a, b) => {
                    return order.indexOf(a) - order.indexOf(b);
                }).forEach(key => {
                    sortedGroups[key] = groups[key];
                });
                
                return sortedGroups;
            }
        },
        methods: {
            toggleCategory(category) {
                this.$set(this.collapsedCategories, category, !this.collapsedCategories[category]);
            },
            cloneElement(element) {
                // Return a fresh copy of the element structure for the builder
                return {
                    template: element.template,
                    name: element.name,
                    icon: element.icon, // Pass the icon to the builder element
                    visible: true,
                    form: element.form,
                    formVisible: true, // Auto-open form on drop
                    id: this._randomString()
                };
            },
            _randomString() {
                let x = 2147423648;
                let now = +new Date();
                return Math.floor(Math.random() * x).toString(36) +
                    Math.abs(Math.floor(Math.random() * x) ^ now).toString(36);
            }
        }
    };
</script>

<style lang="scss" scoped>
.builder-sidebar {
    width: 300px;
    background: #fff;
    border-right: 1px solid #e3e7ee;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px); /* Adjust based on header height */
    position: sticky;
    top: 80px; /* Adjust based on header height */
    overflow-y: hidden; /* Container hidden, content scrolls */

    &__header {
        padding: 1rem;
        border-bottom: 1px solid #e3e7ee;
        background: #fff;
        z-index: 10;
        
        h3 {
            margin: 0;
            font-size: 1.1rem;
            color: #4c5367;
        }
    }

    &__content {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
        
        /* Custom scrollbar */
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb {
            background: #cbd5e0;
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #a0aec0;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        margin-bottom: 0.5rem;
        background: #fff;
        border: 1px solid #e3e7ee;
        border-radius: 4px;
        cursor: grab;
        transition: all 0.2s;

        &:hover {
            border-color: #4c5367;
            background: #f8fafc;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transform: translateY(-1px);
        }

        &-icon {
            margin-right: 0.75rem;
            color: #6c757d;
            width: 20px;
            text-align: center;
        }

        &-label {
            font-weight: 500;
            color: #4c5367;
            font-size: 0.9rem;
        }
    }
}
</style>
