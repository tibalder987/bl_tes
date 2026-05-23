<template>
  <div class="container-fluid p-0 form-builder-app text-start">
    <div class="row g-0">
      <!-- Left Sidebar: Elements -->
      <div class="col-md-3 bg-light p-3 border-end">
        <h5 class="mb-3">Éléments disponibles</h5>
        <draggable class="elements-list" :list="availableElements" :group="{ name: 'fields', pull: 'clone', put: false }" :clone="cloneElement">
          <div class="card mb-2 cursor-grab" v-for="element in availableElements" :key="element.type">
            <div class="card-body p-2">
              <i :class="element.icon" class="me-2 text-primary"></i> {{ element.label }}
            </div>
          </div>
        </draggable>
        <div class="mt-4 text-muted small">
          <i class="fa fa-info-circle"></i> Glissez et déposez ces éléments sur la zone de construction sélectionnée au centre.
        </div>
      </div>

      <!-- Main Canvas -->
      <div class="col-md-6 p-4 bg-white main-canvas">
        <div class="d-flex justify-content-between align-items-center mb-3">
           <h5 class="mb-0">Zone de construction</h5>
        </div>

        <!-- Steps Navigation -->
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item" v-for="(step, index) in schema.steps" :key="step.id">
            <a class="nav-link cursor-pointer" :class="{active: currentStepIndex === index}" @click="selectStep(index)">
              {{ step.title }}
              <i v-if="schema.steps.length > 1" class="fa fa-times text-danger ms-2 cursor-pointer" @click.stop="removeStep(index)"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link cursor-pointer bg-light" @click="addStep"><i class="fa fa-plus text-success"></i> Ajouter Étape</a>
          </li>
        </ul>
        
        <draggable class="row border p-3 bg-light m-0 rounded" :list="currentStep.fields" group="fields">
          <div v-for="(field, index) in currentStep.fields" :key="field.id" 
               :class="'p-2 col-md-' + (field.width || 12)" 
               @click="selectField(field)">
            <div class="field-wrapper p-3 border rounded bg-white position-relative cursor-pointer" 
                 :class="{'border-primary shadow': selectedField && selectedField.id === field.id}">
              
              <div class="position-absolute top-0 end-0 p-1 z-index-2">
                <button class="btn btn-sm btn-outline-danger border-0" @click.stop="removeField(index)"><i class="fa fa-trash"></i></button>
              </div>
              
              <div v-if="['text', 'email', 'phone'].includes(field.type)">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <input :type="field.type === 'phone' ? 'tel' : field.type" class="form-control" :placeholder="field.placeholder" :minlength="field.minLength" :maxlength="field.maxLength" disabled>
              </div>

              <div v-if="field.type === 'number'">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <input type="number" class="form-control" :placeholder="field.placeholder" :min="field.min" :max="field.max" :step="field.step" disabled>
              </div>
              
              <div v-if="field.type === 'textarea'">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <textarea class="form-control" :placeholder="field.placeholder" :minlength="field.minLength" :maxlength="field.maxLength" disabled></textarea>
              </div>

              <div v-if="['date', 'time'].includes(field.type)">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <input :type="field.type" class="form-control" :min="field.minDate" :max="field.maxDate" disabled>
              </div>
              
              <div v-if="field.type === 'file'">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <input type="file" class="form-control" disabled>
              </div>
              
              <div v-if="field.type === 'select'">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <select class="form-select" disabled>
                  <option v-for="opt in field.options" :key="opt.value">{{ opt.label }}</option>
                </select>
              </div>

              <div v-if="field.type === 'checkbox'">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <div v-for="opt in field.options" :key="opt.value" class="form-check">
                  <input class="form-check-input" type="checkbox" disabled>
                  <label class="form-check-label">{{ opt.label }}</label>
                </div>
              </div>

              <div v-if="field.type === 'radio'">
                <label class="form-label font-weight-bold">{{ field.label }} <span v-if="field.required" class="text-danger">*</span></label>
                <div v-for="opt in field.options" :key="opt.value" class="form-check">
                  <input class="form-check-input" type="radio" disabled>
                  <label class="form-check-label">{{ opt.label }}</label>
                </div>
              </div>

              <div v-if="field.type === 'paragraph'">
                 <div v-html="field.content"></div>
              </div>
              
              <!-- Conditional Logic Indicator -->
              <div v-if="field.conditionalLogic && field.conditionalLogic.enabled" class="mt-2 text-end text-warning small">
                <i class="fa fa-code-branch"></i> Logique conditionnelle active
              </div>
            </div>
          </div>
          
          <div v-if="currentStep.fields.length === 0" class="col-12 text-center text-muted py-5">
            Étape vide. Déposez des éléments ici.
          </div>
        </draggable>
      </div>

      <!-- Right Sidebar: Settings -->
      <div class="col-md-3 bg-light p-3 border-start overflow-auto" style="max-height: 100vh;">
        <ul class="nav nav-tabs mb-3 nav-fill">
          <li class="nav-item">
            <a class="nav-link cursor-pointer p-2" :class="{ active: activeTab === 'field' }" @click="activeTab = 'field'">Champ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link cursor-pointer p-2" :class="{ active: activeTab === 'step' }" @click="activeTab = 'step'">Étape</a>
          </li>
          <li class="nav-item">
            <a class="nav-link cursor-pointer p-2" :class="{ active: activeTab === 'form' }" @click="activeTab = 'form'">Général</a>
          </li>
        </ul>

        <!-- FIELD TAB -->
        <div v-if="activeTab === 'field'">
          <div v-if="selectedField">
            <div class="mb-3">
              <label class="form-label font-weight-bold">Libellé (Label)</label>
              <input type="text" class="form-control" v-model="selectedField.label">
            </div>
            
            <div class="mb-3" v-if="!['paragraph', 'date', 'time', 'file', 'radio', 'checkbox', 'select'].includes(selectedField.type)">
              <label class="form-label font-weight-bold">Texte indicatif (Placeholder)</label>
              <input type="text" class="form-control" v-model="selectedField.placeholder">
            </div>
            
            <div class="mb-3" v-if="selectedField.type !== 'paragraph'">
              <div class="form-check form-switch border p-2 rounded bg-white">
                <input class="form-check-input" type="checkbox" v-model="selectedField.required" :id="'req_' + selectedField.id">
                <label class="form-check-label font-weight-bold" :for="'req_' + selectedField.id">Champ requis</label>
              </div>
            </div>

            <!-- Specific configs for Text types -->
            <div class="mb-3" v-if="['text', 'textarea', 'email'].includes(selectedField.type)">
               <div class="row">
                 <div class="col-6">
                   <label class="form-label font-weight-bold">Long. min</label>
                   <input type="number" class="form-control" v-model="selectedField.minLength">
                 </div>
                 <div class="col-6">
                   <label class="form-label font-weight-bold">Long. max</label>
                   <input type="number" class="form-control" v-model="selectedField.maxLength">
                 </div>
               </div>
            </div>

            <!-- Specific configs for Number type -->
            <div class="mb-3" v-if="selectedField.type === 'number'">
               <div class="row">
                 <div class="col-4">
                   <label class="form-label font-weight-bold">Min</label>
                   <input type="number" class="form-control" v-model="selectedField.min">
                 </div>
                 <div class="col-4">
                   <label class="form-label font-weight-bold">Max</label>
                   <input type="number" class="form-control" v-model="selectedField.max">
                 </div>
                 <div class="col-4">
                   <label class="form-label font-weight-bold">Pas (Step)</label>
                   <input type="number" class="form-control" v-model="selectedField.step">
                 </div>
               </div>
               <small class="text-muted">Laissez vide pour aucune restriction.</small>
            </div>

            <!-- Specific configs for Date type -->
            <div class="mb-3" v-if="['date', 'time'].includes(selectedField.type)">
               <div class="row">
                 <div class="col-6">
                   <label class="form-label font-weight-bold">Min</label>
                   <input :type="selectedField.type" class="form-control" v-model="selectedField.minDate">
                 </div>
                 <div class="col-6">
                   <label class="form-label font-weight-bold">Max</label>
                   <input :type="selectedField.type" class="form-control" v-model="selectedField.maxDate">
                 </div>
               </div>
            </div>

            <!-- Specific configs for File type -->
            <div class="mb-3" v-if="selectedField.type === 'file'">
               <div class="row">
                 <div class="col-12 mb-2">
                   <label class="form-label font-weight-bold">Extensions autorisées (séparées par des virgules)</label>
                   <input type="text" class="form-control" placeholder=".pdf, .jpg, .json" v-model="selectedField.allowedExtensions">
                 </div>
                 <div class="col-12">
                   <label class="form-label font-weight-bold">Taille max (en Mo)</label>
                   <input type="number" class="form-control" placeholder="5" v-model="selectedField.maxSizeMb">
                 </div>
               </div>
            </div>

            <div class="mb-3" v-if="selectedField.type === 'paragraph'">
              <label class="form-label font-weight-bold">Contenu HTML</label>
              <textarea class="form-control" v-model="selectedField.content" rows="6"></textarea>
            </div>

            <div class="mb-3" v-if="['select', 'radio', 'checkbox'].includes(selectedField.type)">
              <label class="form-label font-weight-bold">Options du champ</label>
              <div v-for="(opt, index) in selectedField.options" :key="index" class="d-flex mb-2">
                 <input type="text" class="form-control form-control-sm me-2" v-model="opt.label" @input="opt.value = opt.label" placeholder="Nom de l'option">
                 <button class="btn btn-sm btn-outline-danger" @click="selectedField.options.splice(index, 1)"><i class="fa fa-times"></i></button>
              </div>
              <button class="btn btn-sm btn-outline-primary w-100 mt-1" @click="selectedField.options.push({label: 'Nouvelle option', value: 'Nouvelle option'})"><i class="fa fa-plus"></i> Ajouter une option</button>
            </div>
            
            <div class="mb-3">
               <label class="form-label font-weight-bold">Largeur (Colonnes)</label>
               <select class="form-select" v-model="selectedField.width">
                  <option value="12">100% (Pleine largeur)</option>
                  <option value="6">50% (Moitié)</option>
                  <option value="4">33% (Un tiers)</option>
                  <option value="3">25% (Un quart)</option>
               </select>
            </div>

            <!-- Conditional Logic for Field -->
            <div class="mb-3 border-top pt-3 mt-3">
              <h6 class="font-weight-bold text-primary"><i class="fa fa-code-branch"></i> Logique Conditionnelle</h6>
              <div class="form-check form-switch mb-2">
                <input class="form-check-input" type="checkbox" v-model="selectedField.conditionalLogic.enabled" :id="'cond_' + selectedField.id">
                <label class="form-check-label" :for="'cond_' + selectedField.id">Activer les conditions</label>
              </div>
              
              <div v-if="selectedField.conditionalLogic.enabled" class="bg-white p-2 border rounded small">
                <div class="mb-2">
                  <select class="form-select form-select-sm d-inline-block w-auto me-1" v-model="selectedField.conditionalLogic.actionType">
                    <option value="show">Afficher</option>
                    <option value="hide">Masquer</option>
                  </select> ce champ si 
                  <select class="form-select form-select-sm d-inline-block w-auto ms-1" v-model="selectedField.conditionalLogic.matchType">
                    <option value="all">toutes</option>
                    <option value="any">au moins une</option>
                  </select> condition(s) :
                </div>
                
                <div v-for="(rule, rIndex) in selectedField.conditionalLogic.rules" :key="rIndex" class="mb-2 border-bottom pb-2">
                  <select class="form-select form-select-sm mb-1" v-model="rule.fieldId">
                     <option value="">-- Choisir un champ --</option>
                     <option v-for="f in allFields" :key="f.id" :value="f.id" :disabled="f.id === selectedField.id">{{ f.label }}</option>
                  </select>
                  <div class="d-flex">
                    <select class="form-select form-select-sm me-1" v-model="rule.operator">
                       <option value="equals">Est</option>
                       <option value="not_equals">N'est pas</option>
                       <option value="contains">Contient</option>
                    </select>
                    <input type="text" class="form-control form-control-sm" v-model="rule.value" placeholder="Valeur">
                    <button class="btn btn-sm btn-outline-danger ms-1" @click="removeRule(selectedField.conditionalLogic, rIndex)"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <button class="btn btn-sm btn-outline-primary w-100 mt-1" @click="addRule(selectedField.conditionalLogic)"><i class="fa fa-plus"></i> Ajouter une règle</button>
              </div>
            </div>

          </div>
          <div v-else class="alert alert-info py-2 small">
            <i class="fa fa-mouse-pointer"></i> Cliquez sur un champ au centre pour modifier ses paramètres.
          </div>
        </div>

        <!-- STEP TAB -->
        <div v-if="activeTab === 'step'">
           <div class="mb-3">
              <label class="form-label font-weight-bold">Titre de l'étape</label>
              <input type="text" class="form-control" v-model="currentStep.title">
           </div>

           <!-- Conditional Logic for Step -->
           <div class="mb-3 border-top pt-3 mt-3">
              <h6 class="font-weight-bold text-primary"><i class="fa fa-code-branch"></i> Logique Conditionnelle (Étape)</h6>
              <div class="form-check form-switch mb-2">
                <input class="form-check-input" type="checkbox" v-model="currentStep.conditionalLogic.enabled" :id="'cond_step_' + currentStep.id">
                <label class="form-check-label" :for="'cond_step_' + currentStep.id">Activer les conditions</label>
              </div>
              
              <div v-if="currentStep.conditionalLogic.enabled" class="bg-white p-2 border rounded small">
                <div class="mb-2">
                  <select class="form-select form-select-sm d-inline-block w-auto me-1" v-model="currentStep.conditionalLogic.actionType">
                    <option value="show">Afficher</option>
                    <option value="hide">Masquer</option>
                  </select> cette étape si 
                  <select class="form-select form-select-sm d-inline-block w-auto ms-1" v-model="currentStep.conditionalLogic.matchType">
                    <option value="all">toutes</option>
                    <option value="any">au moins une</option>
                  </select> condition(s) :
                </div>
                
                <div v-for="(rule, rIndex) in currentStep.conditionalLogic.rules" :key="rIndex" class="mb-2 border-bottom pb-2">
                  <select class="form-select form-select-sm mb-1" v-model="rule.fieldId">
                     <option value="">-- Choisir un champ --</option>
                     <!-- Usually step logic depends on PREVIOUS steps fields. For simplicity we show all fields. -->
                     <option v-for="f in allFields" :key="f.id" :value="f.id">{{ f.label }}</option>
                  </select>
                  <div class="d-flex">
                    <select class="form-select form-select-sm me-1" v-model="rule.operator">
                       <option value="equals">Est</option>
                       <option value="not_equals">N'est pas</option>
                       <option value="contains">Contient</option>
                    </select>
                    <input type="text" class="form-control form-control-sm" v-model="rule.value" placeholder="Valeur">
                    <button class="btn btn-sm btn-outline-danger ms-1" @click="removeRule(currentStep.conditionalLogic, rIndex)"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <button class="btn btn-sm btn-outline-primary w-100 mt-1" @click="addRule(currentStep.conditionalLogic)"><i class="fa fa-plus"></i> Ajouter une règle</button>
              </div>
           </div>
        </div>

        <!-- FORM TAB -->
        <div v-if="activeTab === 'form'">
          <div class="mb-3">
            <label class="form-label font-weight-bold">Message de succès</label>
            <textarea class="form-control" v-model="config.successMessage" rows="3"></textarea>
          </div>
          
          <div class="mb-3">
            <label class="form-label font-weight-bold">Email(s) de notification</label>
            <input type="text" class="form-control" v-model="config.emails" placeholder="contact@example.com">
            <small class="text-muted">Séparés par des virgules</small>
          </div>
          
          <div class="mb-3">
            <label class="form-label font-weight-bold">Texte du bouton "Suivant"</label>
            <input type="text" class="form-control" v-model="config.nextText" placeholder="Suivant">
          </div>

          <div class="mb-3">
            <label class="form-label font-weight-bold">Texte du bouton "Précédent"</label>
            <input type="text" class="form-control" v-model="config.prevText" placeholder="Précédent">
          </div>

          <div class="mb-3">
            <label class="form-label font-weight-bold">Texte du bouton final (Submit)</label>
            <input type="text" class="form-control" v-model="config.submitText" placeholder="Envoyer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  props: {
    initialSchema: {
      type: Object,
      default: null
    },
    initialConfig: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      activeTab: 'step',
      currentStepIndex: 0,
      selectedField: null,
      schema: {
        steps: [
          {
            id: 'step_1',
            title: 'Étape 1',
            fields: [],
            conditionalLogic: { enabled: false, actionType: 'show', matchType: 'all', rules: [] }
          }
        ]
      },
      config: {
        successMessage: 'Votre message a bien été envoyé !',
        emails: '',
        nextText: 'Suivant',
        prevText: 'Précédent',
        submitText: 'Envoyer'
      },
      availableElements: [
        { type: 'text', label: 'Texte court', icon: 'fa fa-font' },
        { type: 'textarea', label: 'Texte long', icon: 'fa fa-align-left' },
        { type: 'email', label: 'Adresse Email', icon: 'fa fa-envelope' },
        { type: 'phone', label: 'Téléphone', icon: 'fa fa-phone' },
        { type: 'number', label: 'Nombre', icon: 'fa fa-hashtag' },
        { type: 'select', label: 'Liste déroulante', icon: 'fa fa-list' },
        { type: 'radio', label: 'Boutons Radio', icon: 'fa fa-dot-circle' },
        { type: 'checkbox', label: 'Cases à cocher', icon: 'fa fa-check-square' },
        { type: 'date', label: 'Date', icon: 'fa fa-calendar-alt' },
        { type: 'time', label: 'Heure', icon: 'fa fa-clock' },
        { type: 'file', label: 'Fichier (Upload)', icon: 'fa fa-file-upload' },
        { type: 'paragraph', label: 'HTML Custom', icon: 'fa fa-code' },
      ]
    };
  },
  computed: {
    currentStep() {
      return this.schema.steps[this.currentStepIndex] || this.schema.steps[0];
    },
    allFields() {
      let fields = [];
      this.schema.steps.forEach(step => {
         fields = fields.concat(step.fields);
      });
      return fields;
    }
  },
  mounted() {
    if (this.initialSchema && this.initialSchema.steps) {
      // Ensure all steps and fields have conditionalLogic object to avoid undefined errors
      this.schema.steps = this.initialSchema.steps.map(step => {
         if (!step.conditionalLogic) step.conditionalLogic = { enabled: false, actionType: 'show', matchType: 'all', rules: [] };
         if (step.fields) {
             step.fields = step.fields.map(f => {
                 if (!f.conditionalLogic) f.conditionalLogic = { enabled: false, actionType: 'show', matchType: 'all', rules: [] };
                 return f;
             });
         }
         return step;
      });
    }
    if (this.initialConfig) {
      this.config = Object.assign({}, this.config, this.initialConfig);
      if (Array.isArray(this.config.emails)) {
         this.config.emails = this.config.emails.join(', ');
      }
    }

    // Bind to the native EasyAdmin form submission
    const eaForm = document.querySelector('.ea-new-form, .ea-edit-form');
    if (eaForm) {
      eaForm.addEventListener('submit', (e) => {
        let configToSave = { ...this.config };
        if (typeof configToSave.emails === 'string') {
           configToSave.emails = configToSave.emails.split(',').map(email => email.trim()).filter(e => e);
        }

        // Inject Schema Data
        let schemaInput = eaForm.querySelector('input[name="schemaData"]');
        if (!schemaInput) {
          schemaInput = document.createElement('input');
          schemaInput.type = 'hidden';
          schemaInput.name = 'schemaData';
          eaForm.appendChild(schemaInput);
        }
        schemaInput.value = JSON.stringify(this.schema);

        // Inject Configuration
        let configInput = eaForm.querySelector('input[name="configuration"]');
        if (!configInput) {
          configInput = document.createElement('input');
          configInput.type = 'hidden';
          configInput.name = 'configuration';
          eaForm.appendChild(configInput);
        }
        configInput.value = JSON.stringify(configToSave);
      });
    }
  },
  methods: {
    generateId() {
      return 'id_' + Math.random().toString(36).substr(2, 9);
    },
    selectStep(index) {
       this.currentStepIndex = index;
       this.selectedField = null;
       this.activeTab = 'step';
    },
    addStep() {
       this.schema.steps.push({
          id: this.generateId(),
          title: 'Nouvelle Étape',
          fields: [],
          conditionalLogic: { enabled: false, actionType: 'show', matchType: 'all', rules: [] }
       });
       this.currentStepIndex = this.schema.steps.length - 1;
       this.activeTab = 'step';
    },
    removeStep(index) {
       if (confirm('Voulez-vous vraiment supprimer cette étape et tous ses champs ?')) {
           this.schema.steps.splice(index, 1);
           if (this.currentStepIndex >= this.schema.steps.length) {
               this.currentStepIndex = this.schema.steps.length - 1;
           }
       }
    },
    cloneElement(element) {
      return {
        id: this.generateId(),
        type: element.type,
        label: element.label,
        placeholder: '',
        required: false,
        width: '12', // default 100% width
        min: '',
        max: '',
        step: '',
        minLength: '',
        maxLength: '',
        minDate: '',
        maxDate: '',
        allowedExtensions: '',
        maxSizeMb: '5',
        conditionalLogic: { enabled: false, actionType: 'show', matchType: 'all', rules: [] },
        content: element.type === 'paragraph' ? '<p>Votre texte ici...</p>' : '',
        options: ['select', 'radio', 'checkbox'].includes(element.type) ? [{label: 'Option 1', value: 'Option 1'}] : []
      };
    },
    selectField(field) {
      this.selectedField = field;
      this.activeTab = 'field';
    },
    removeField(index) {
      this.currentStep.fields.splice(index, 1);
      if (this.selectedField && !this.currentStep.fields.includes(this.selectedField)) {
         this.selectedField = null;
      }
    },

    addRule(conditionalLogicObj) {
       conditionalLogicObj.rules.push({ fieldId: '', operator: 'equals', value: '' });
    },
    removeRule(conditionalLogicObj, index) {
       conditionalLogicObj.rules.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.form-builder-app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.cursor-grab {
  cursor: grab;
}
.cursor-grab:active {
  cursor: grabbing;
}
.cursor-pointer {
  cursor: pointer;
}
.main-canvas {
  background-color: #f4f6f9;
}
.min-vh-50 {
  min-height: 50vh;
}
.z-index-2 {
  z-index: 2;
}
.field-wrapper {
  transition: box-shadow 0.2s, border-color 0.2s;
}
.field-wrapper:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
