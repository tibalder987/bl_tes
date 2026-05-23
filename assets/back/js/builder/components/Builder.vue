<template>
    <div class="builder-wrapper">
        <builder-sidebar :builder-data="builderData" />

        <div class="builder-content">
            <div class="builder-toolbar">
                <div class="builder-toolbar__section">
                    <div class="builder-toolbar__group">
                        <button type="button" class="btn btn-sm btn-light" @click="collapseAll" title="Réduire tous les éléments">
                            <i class="fa fa-compress"></i>
                        </button>
                        <div class="builder-toolbar__divider"></div>

                        <button type="button" class="btn btn-sm btn-light" @click="expandAll" title="Développer tous les éléments">
                            <i class="fa fa-expand"></i>
                        </button>
                    </div>
                    
                </div>
                
                <div class="builder-toolbar__section">
                    <button type="button" class="btn btn-sm btn-primary" @click="openPreview" title="Ouvrir l'aperçu en direct" v-if="previewUrl">
                        <i class="fa fa-eye me-1"></i> Aperçu
                    </button>
                    
                    <button type="button" class="btn btn-sm btn-outline-info" @click="openRevisions" v-if="builderData && builderData.entityClass && builderData.entityId" title="Voir l'historique des révisions">
                        <i class="fa fa-history me-1"></i> Historique
                    </button>
                    
                    <button type="button" class="btn btn-sm btn-outline-danger" @click="clearAll" v-if="currentElements.length > 0">
                        <i class="fa fa-trash me-1"></i> Tout supprimer
                    </button>
                </div>
            </div>

            <draggable
                v-model="currentElements"
                class="builder-canvas"
                handle=".builder__element__handle"
                group="builder"
                ghost-class="builder__element--ghost"
                @change="onChange"
            >
                <builder-element
                    v-for="(element, index) in currentElements"
                    :key="element.id"
                    :element="element"
                    :basename="basename"
                    :builder-data="builderData"
                    :current-elements="currentElements"
                    :index="index"
                    @elementRemoved="removeElementById"
                    @elementFormHidden="hideFormElement"
                    @elementFormShown="showFormElement"
                    @elementHidden="hideElement"
                    @elementShown="showElement"
                    @duplicate="duplicateElement"
                    @moveUp="moveUp(index)"
                    @moveDown="moveDown(index)"
                />
                
                <div slot="footer" v-if="currentElements.length === 0" class="builder-canvas__empty">
                    <div class="text-center text-muted">
                        <i class="fa fa-arrow-left fa-2x mb-3"></i>
                        <p>Glissez des éléments depuis la barre latérale pour construire votre page.</p>
                    </div>
                </div>
            </draggable>
        </div>

        <revisions-modal 
            v-if="builderData && builderData.entityClass && builderData.entityId"
            ref="revisionsModal" 
            :entity-class="builderData.entityClass" 
            :entity-id="builderData.entityId" 
            @restore="restoreElements" 
            @preview="previewRevision"
        />
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import BuilderElement from './BuilderElement.vue';
    import BuilderSidebar from './BuilderSidebar.vue';
    import RevisionsModal from './RevisionsModal.vue';
    import availableElements from '../elements/StylesheetElements';

    export default {
        components: {
            draggable,
            BuilderElement,
            BuilderSidebar,
            RevisionsModal
        },
        props: {
            elements: {
                type: [Array, Object, String],
                default: () => []
            },
            basename: {
                type: String,
                required: true
            },
            builderData: {
                type: Object,
                default: () => ({})
            },
            previewUrl: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                currentElements: this.initialize(this.elements),
                formHasChanged: false,
                previewWindow: null,
                previewUpdateTimer: null
            }
        },
        watch: {
            currentElements: {
                handler() {
                    this.schedulePreviewUpdate();
                },
                deep: true
            }
        },
        methods: {
            onChange() {
                this.formHasChanged = true;
            },
            removeElementById(id) {
                this.currentElements = this.currentElements.filter(element => element.id !== id);
                this.formHasChanged = true;
            },
            moveUp(index) {
                if (index > 0) {
                    this.swapElements(index, index - 1);
                }
            },
            moveDown(index) {
                if (index < this.currentElements.length - 1) {
                    this.swapElements(index, index + 1);
                }
            },
            swapElements(oldPosition, newPosition) {
                let tmpElement = this.currentElements[oldPosition];
                this.$set(this.currentElements, oldPosition, this.currentElements[newPosition]);
                this.$set(this.currentElements, newPosition, tmpElement);
                this.formHasChanged = true;
            },
            hideFormElement(id) {
                const element = this.currentElements.find(element => element.id === id);
                if (element) element.formVisible = false;
            },
            showFormElement(id) {
                const element = this.currentElements.find(element => element.id === id);
                if (element) element.formVisible = true;
            },
            hideElement(id) {
                const element = this.currentElements.find(element => element.id === id);
                if (element) {
                    element.visible = false;
                    this.formHasChanged = true;
                }
            },
            showElement(id) {
                const element = this.currentElements.find(element => element.id === id);
                if (element) {
                    element.visible = true;
                    this.formHasChanged = true;
                }
            },
            initialize(elements) {
                if (!elements) {
                    return [];
                }
                let currentElements = [];

                Object.entries(elements).forEach(element => {
                    const [key, value] = element;
                    let currentElement = this._createElementFromTemplate(value.template, value);
                    if (currentElement) {
                        currentElement.formVisible = false;
                        currentElements.push(currentElement);
                    }
                });

                return currentElements;
            },
            _createElementFromTemplate(template, element) {
                let available = availableElements(this.builderData)
                    .find(element => element.template === template);

                if (!available) {
                    return null;
                }

                let createdElement = {
                    id: this._randomString(),
                    template: template,
                    name: available.name,
                    icon: available.icon,
                    visible: element ? element.visible === '1' : true,
                    form: available.form,
                    formVisible: true
                };
                
                if (element) {
                    // Preserve existing properties (id, name, etc.) but ensure form structure is up to date
                    return Object.assign({}, createdElement, element);
                }
                
                return createdElement;
            },
            duplicateElement(id) {
                const index = this.currentElements.findIndex(el => el.id === id);
                if (index === -1) return;

                const original = this.currentElements[index];
                
                // Deep clone the element to avoid reference issues
                // We need to generate a new ID and potentially handle form content cloning if it's complex
                // For now, simple object copy with new ID
                
                let newElement = JSON.parse(JSON.stringify(original));
                newElement.id = this._randomString();
                newElement.name = original.name + ' (Copie)';
                newElement.icon = original.icon;
                newElement.formVisible = true; // Open the new element's form
                
                // Insert after the original
                this.currentElements.splice(index + 1, 0, newElement);
                this.formHasChanged = true;
                
                // Scroll to new element?
            },
            collapseAll() {
                this.currentElements.forEach(element => {
                    element.formVisible = false;
                });
            },
            expandAll() {
                this.currentElements.forEach(element => {
                    element.formVisible = true;
                });
            },
            clearAll() {
                if (confirm('Êtes-vous sûr de vouloir supprimer tous les éléments ?')) {
                    this.currentElements = [];
                    this.formHasChanged = true;
                }
            },
            openPreview() {
                if (!this.previewUrl) {
                    alert('L\'URL de prévisualisation n\'est pas configurée.');
                    return;
                }
                
                const windowFeatures = 'width=1200,height=800,menubar=no,toolbar=no,location=no,status=no';
                
                if (this.previewWindow && !this.previewWindow.closed) {
                    this.previewWindow.focus();
                } else {
                    this.previewWindow = window.open(this.previewUrl, 'BuilderPreview', windowFeatures);
                    
                    // Wait for preview window to be ready
                    window.addEventListener('message', (event) => {
                        if (event.data.type === 'PREVIEW_READY') {
                            this.sendPreviewUpdate();
                        }
                    });
                }
            },
            openRevisions() {
                if (this.$refs.revisionsModal) {
                    this.$refs.revisionsModal.show();
                }
            },
            restoreElements(elements) {
                // elements comes directly from the database json via API
                // it needs to be parsed through initialize to convert to valid Vue structure with generated IDs
                // Ensure all elements forms are open by default like normal initial load
                
                let restoredElements = [];
                if(elements && typeof elements === 'object') {
                    restoredElements = this.initialize(elements);
                }

                // Small delay to allow Vue to clear DOM safely before injecting new ones
                this.currentElements = [];
                this.$nextTick(() => {
                    this.currentElements = restoredElements;
                    this.formHasChanged = true;
                });
            },
            previewRevision(elements) {
                if (!this.previewWindow || this.previewWindow.closed) {
                    alert('Veuillez d\'abord ouvrir la fenêtre d\'aperçu en direct avec le bouton "Aperçu".');
                    return;
                }
                
                let previewElements = [];
                if(elements && typeof elements === 'object') {
                    previewElements = this.initialize(elements);
                }

                const elementsToSend = JSON.parse(JSON.stringify(previewElements));

                this.previewWindow.postMessage({
                    type: 'UPDATE_PREVIEW',
                    elements: elementsToSend
                }, '*');
            },
            sendPreviewUpdate() {
                if (this.previewWindow && !this.previewWindow.closed) {
                    // Deep clone elements
                    const elementsToSend = JSON.parse(JSON.stringify(this.currentElements));
                    
                    // Capture current values from the DOM for each element
                    // Since ElementFormMounter doesn't sync back to Vue data, we must read from DOM
                    elementsToSend.forEach(element => {
                        // Find the form container for this element
                        // We can use the element ID to find inputs
                        // Inputs have names like basename[id][property]
                        // Or we can search by data-name attribute within the builder element
                        
                        // We need to find the DOM element corresponding to this builder element
                        // Since we don't have direct refs to DOM elements easily mapped here without iterating
                        // We can search by the hidden inputs that ElementFormMounter creates/updates?
                        // Actually ElementFormMounter updates inputs inside the .builder__element__form
                        
                        // Let's try to find inputs by data-name in the document that belong to this element
                        // The inputs are inside a div with ref="elementForm" in BuilderElement
                        // But we are in Builder.vue
                        
                        // We can query selector using the element ID if we had put it on the DOM
                        // BuilderElement puts ID on inputs: elementId + '-' + propertyName
                        
                        if (element.form) {
                            // Parse the form string to find what properties we expect
                            // This is a bit hacky but we know what properties to look for from the form HTML string?
                            // No, that's hard.
                            
                            // Better: Look for all inputs that start with the element ID in their ID attribute
                            // ElementFormMounter.inputId(element.id, propertyName) -> elementId + '-' + propertyName
                            
                            const prefix = element.id + '-';
                            // Use a more specific selector to avoid getting inputs from other elements if IDs overlap (unlikely but safe)
                            // But actually we want to find inputs based on the structure ElementFormMounter created.
                            // ElementFormMounter uses ID: elementId + '-' + cleanPropName
                            const inputs = document.querySelectorAll(`[id^="${prefix}"]`);
                            
                            inputs.forEach(input => {
                                // Skip if input doesn't have a name (shouldn't happen for valid fields)
                                if (!input.name) return;

                                // Parse name to build nested structure
                                // Name format: basename[elementId][prop][subprop]...
                                // We want to extract [prop][subprop]...
                                
                                // The prefix in name is `${this.basename}[${element.id}]`
                                const namePrefix = `${this.basename}[${element.id}]`;
                                if (!input.name.startsWith(namePrefix)) return;

                                const remaining = input.name.substring(namePrefix.length);
                                // remaining is like "[plans][0][name]" or "[title]"
                                
                                const path = remaining.split('][').map(p => p.replace(/[\[\]]/g, ''));
                                
                                let value;
                                if (input.type === 'checkbox' || input.type === 'radio') {
                                    if (input.checked) {
                                        value = input.value;
                                    } else if (input.type === 'checkbox' && !element[path[0]]) {
                                        // Handle unchecked
                                    } else {
                                        return; // Skip unchecked radio or unchecked box if we don't handle false explicit
                                    }
                                } else {
                                    value = input.value;
                                }

                                // Special handling for Trix
                                if (input.tagName === 'TRIX-EDITOR') {
                                    value = input.value; 
                                }

                                if (value !== undefined) {
                                    this._setNestedValue(element, path, value);
                                }
                            });
                        }
                    });
                    
                    this.previewWindow.postMessage({
                        type: 'UPDATE_PREVIEW',
                        elements: elementsToSend
                    }, '*');
                }
            },
            _setNestedValue(obj, path, value) {
                let current = obj;
                for (let i = 0; i < path.length - 1; i++) {
                    const key = path[i];
                    
                    // If key is empty string? shouldn't happen with split logic above
                    // If we need to create array or object?
                    // "plans" -> "0" -> "name"
                    // obj["plans"] should be array/object.
                    
                    if (current[key] === undefined || current[key] === null) {
                        // Check if next key is a number to decide if array
                        const nextKey = path[i + 1];
                        const isInt = /^\d+$/.test(nextKey);
                        current[key] = isInt ? [] : {};
                    }
                    
                    current = current[key];
                }
                const lastKey = path[path.length - 1];
                current[lastKey] = value;
            },
            schedulePreviewUpdate() {
                if (this.previewUpdateTimer) {
                    clearTimeout(this.previewUpdateTimer);
                }
                
                this.previewUpdateTimer = setTimeout(() => {
                    this.sendPreviewUpdate();
                }, 500); // Debounce 500ms
            },
            _randomString() {
                let x = 2147423648;
                let now = +new Date();

                return Math.floor(Math.random() * x).toString(36) +
                    Math.abs(Math.floor(Math.random() * x) ^ now).toString(36);
            }
        },
        mounted() {
            // Track form changes for unsaved warning
            document.addEventListener('change', () => this.formHasChanged = true);
            document.addEventListener('submit', () => this.formHasChanged = false);

            // Listen for ANY input change in the builder to update preview
            // We use a debounced update, so it's safe to listen to 'input' events
            const updateEvents = ['input', 'change', 'blur', 'keyup'];
            
            updateEvents.forEach(eventType => {
                this.$el.addEventListener(eventType, (e) => {
                    // Only care if it's an input/select/textarea inside the builder
                    if (e.target.matches('input, select, textarea, trix-editor')) {
                        this.schedulePreviewUpdate();
                    }
                }, { capture: true }); // Use capture to ensure we catch it
            });
            
            // Also listen for Select2 events using jQuery since they don't bubble as native events
            if (window.jQuery) {
                const $el = window.jQuery(this.$el);
                $el.on('select2:select select2:unselect', (e) => {
                    this.schedulePreviewUpdate();
                });
            }

            window.addEventListener('beforeunload', (event) => {
                if (this.formHasChanged) {
                    event.preventDefault();
                    event.returnValue = '';
                }
            });
        },
    };
</script>

<style lang="scss" scoped>
.builder-wrapper {
    display: flex;
    align-items: flex-start;
    background: #f4f6f8;
    min-height: 600px;
}

.builder-content {
    flex: 1;
    min-width: 0; /* Prevent flex overflow */
    padding: 10px;
}

.builder-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.875rem 1.25rem;
    background: linear-gradient(to bottom, #ffffff, #fafbfc);
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    margin-bottom: 1.25rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    
    &__section {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }
    
    &__group {
        display: flex;
        gap: 0.375rem;
        background: #f6f8fa;
        padding: 0.25rem;
        border-radius: 6px;
        border: 1px solid #e1e4e8;
        
        .btn {
            border-radius: 4px;
            border: none;
            background: transparent;
            color: #586069;
            padding: 0.375rem 0.625rem;
            transition: all 0.15s ease;
            
            i {
                font-size: 0.875rem;
            }
            
            &:hover {
                background: #fff;
                color: #24292e;
                box-shadow: 0 1px 3px rgba(0,0,0,0.08);
            }
            
            &:active {
                transform: scale(0.97);
            }
        }
    }
    
    &__divider {
        width: 1px;
        height: 28px;
        background: linear-gradient(to bottom, transparent, #d1d5da 20%, #d1d5da 80%, transparent);
    }
    
    &__info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.375rem 0.75rem;
        background: #f6f8fa;
        border-radius: 6px;
        border: 1px solid #e1e4e8;
        font-size: 0.875rem;
        
        i {
            color: #6a737d;
            font-size: 0.875rem;
        }
        
        .badge {
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.25em 0.6em;
            background: #0366d6;
            border: none;
        }
        
        .text-muted {
            color: #586069;
            font-weight: 500;
        }
    }
    
    .btn-outline-danger {
        border-color: #d73a49;
        color: #d73a49;
        background: #fff;
        font-weight: 500;
        padding: 0.375rem 0.875rem;
        border-radius: 6px;
        transition: all 0.15s ease;
        
        &:hover {
            background: #d73a49;
            color: #fff;
            border-color: #d73a49;
            box-shadow: 0 2px 4px rgba(215, 58, 73, 0.2);
        }
        
        i {
            font-size: 0.875rem;
        }
    }
    
    .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        color: #fff;
        font-weight: 500;
        padding: 0.375rem 0.875rem;
        border-radius: 6px;
        transition: all 0.15s ease;
        box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
        
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
        }
        
        &:active {
            transform: translateY(0);
        }
        
        i {
            font-size: 0.875rem;
        }
    }
}

.builder-canvas {
    min-height: 400px;
    padding-bottom: 100px;
    
    &__empty {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        border: 2px dashed #cbd5e0;
        border-radius: 8px;
        margin: 1rem;
        color: #718096;
    }
}
</style>
