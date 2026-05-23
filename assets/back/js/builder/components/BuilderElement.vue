<template>
    <div class="builder__element" :class="{'builder__element--hidden': !element.visible}">
        <div class="builder__element__header">
            <div class="builder__element__header__left">
                <div class="builder__element__handle" title="Déplacer">
                    <i class="fa fa-grip-vertical"></i>
                </div>
                <div class="builder__element__title">
                    <span class="badge badge-secondary">{{ index + 1 }}</span>
                    <i class="fa me-2 text-muted" :class="element.icon || 'fa-cube'" style="margin-right: 8px;"></i>
                    
                    <div v-if="isEditingName" class="builder__element__title-edit">
                        <input 
                            type="text" 
                            v-model="element.name" 
                            @blur="stopEditingName" 
                            @keydown.enter.prevent="stopEditingName"
                            ref="nameInput"
                            class="form-control form-control-sm"
                        >
                    </div>
                    <strong v-else @dblclick="startEditingName" title="Double-cliquer pour renommer">
                        {{ element.name }}
                        <i class="fa fa-pencil ms-2 text-muted" style="font-size: 0.8em; opacity: 0.5;"></i>
                    </strong>
                </div>
            </div>
            
            <div class="builder__element__actions">
                <button v-if="form" @click.prevent="toggleForm" class="btn btn-sm btn-light" :title="formVisible ? 'Réduire' : 'Éditer'">
                    <i :class="formVisible ? 'fa fa-chevron-down' : 'fa fa-chevron-right'"></i>
                </button>

                <button @click.prevent="duplicate" class="btn btn-sm btn-light" title="Dupliquer">
                    <i class="fa fa-copy"></i>
                </button>
                
                <button @click.prevent="toggleVisibility" class="btn btn-sm btn-light" :title="element.visible ? 'Masquer' : 'Afficher'">
                    <i :class="element.visible ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
                </button>
                
                <button @click.prevent="remove" class="btn btn-sm btn-danger" title="Supprimer">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>

        <input type="hidden" :name="templateInputName" :value="element.template"/>
        <input type="hidden" :name="visibleInputName" :value="element.visible ? 1 : 0"/>
        <input type="hidden" :name="nameInputName" :value="element.name"/>

        <transition name="slide">
            <div class="builder__element__body" v-if="form" v-show="formVisible">
                <div class="builder__element__form" v-html="form" ref="elementForm"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import ElementFormMounter from '../elements/ElementFormMounter';

    export default {
        props: ['basename', 'element', 'currentElements', 'builderData', 'index'],
        data() {
            return {
                isEditingName: false
            };
        },
        computed: {
            templateInputName() {
                return ElementFormMounter.inputName(this.basename, this.element.id, 'template');
            },
            visibleInputName() {
                return ElementFormMounter.inputName(this.basename, this.element.id, 'visible');
            },
            nameInputName() {
                return ElementFormMounter.inputName(this.basename, this.element.id, 'name');
            },
            form() {
                return this.element.form;
            },
            formVisible() {
                return this.element.formVisible;
            }
        },
        methods: {
            startEditingName() {
                this.isEditingName = true;
                this.$nextTick(() => {
                    if (this.$refs.nameInput) {
                        this.$refs.nameInput.focus();
                    }
                });
            },
            stopEditingName() {
                this.isEditingName = false;
                if (!this.element.name || this.element.name.trim() === '') {
                    // Revert to default name if empty? Or keep empty? 
                    // Let's keep it but maybe we should have a default.
                    // For now, let user decide.
                }
            },
            remove() {
                ElementFormMounter.confirm(() => this.$emit('elementRemoved', this.element.id));
            },
            duplicate() {
                this.$emit('duplicate', this.element.id);
            },
            toggleForm() {
                if (this.formVisible) {
                    if (ElementFormMounter.validateFormElement(this.$refs.elementForm)) {
                        this.$emit('elementFormHidden', this.element.id);
                    }
                } else {
                    this.$emit('elementFormShown', this.element.id);
                }
            },
            toggleVisibility() {
                if (this.element.visible) {
                    this.$emit('elementHidden', this.element.id);
                } else {
                    this.$emit('elementShown', this.element.id);
                }
            }
        },
        mounted() {
            ElementFormMounter.mount(
                this.basename,
                this.element,
                this.$refs.elementForm
            );
        }
    }
</script>

<style lang="scss" scoped>
    .builder__element {
        background: #fff;
        border: 1px solid #e3e7ee;
        border-radius: 6px;
        margin-bottom: 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        transition: all 0.2s;

        &:hover {
            border-color: #cbd5e0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        &--hidden {
            opacity: 0.6;
            background: #f8fafc;
            
            .builder__element__header {
                background: #f8fafc;
            }
        }

        &--ghost {
            opacity: 0.5;
            background: #edf2f7;
            border: 1px dashed #a0aec0;
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            background: #fff;
            border-bottom: 1px solid transparent;
            border-radius: 6px 6px 0 0;

            &__left {
                display: flex;
                align-items: center;
            }
        }

        &__handle {
            cursor: grab;
            color: #a0aec0;
            margin-right: 1rem;
            padding: 0.25rem;
            
            &:hover {
                color: #4a5568;
            }
            
            &:active {
                cursor: grabbing;
            }
        }

        &__title {
            display: flex;
            align-items: center;
            font-size: 0.95rem;
            color: #2d3748;

            .badge {
                margin-right: 0.75rem;
                background: #edf2f7;
                color: #4a5568;
                font-weight: 600;
                padding: 0.35em 0.65em;
            }
        }

        &__actions {
            display: flex;
            gap: 0.5rem;

            .btn {
                padding: 0.25rem 0.5rem;
                font-size: 0.875rem;
                line-height: 1.5;
                border-radius: 0.2rem;
                
                i {
                    font-size: 0.875rem;
                }
            }
        }

        &__body {
            border-top: 1px solid #e3e7ee;
            padding: 1.5rem;
            background: #fcfcfc;
            border-radius: 0 0 6px 6px;
        }
        
        &__form {
            /* Styles are now handled globally in builder.scss for better control */
        }
    }
    
    /* Transitions */
    .slide-enter-active, .slide-leave-active {
        transition: all 0.3s ease;
        max-height: 2000px; /* Arbitrary large height */
        overflow: hidden;
    }
    .slide-enter, .slide-leave-to {
        max-height: 0;
        opacity: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
</style>