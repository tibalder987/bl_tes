const IMAGE_MAX_SIZE_MB = 60;

/**
 * Modern fluent FormBuilder for creating builder element forms
 * Replaces the old string concatenation approach with a structured API
 */
export default class FormBuilder {
    constructor(builderData = {}) {
        this.builderData = builderData;
        this.fields = [];
        this.currentRow = null;
        this.fieldNames = new Set();
    }

    static get IMAGE_MAX_SIZE_MB() {
        return IMAGE_MAX_SIZE_MB;
    }

    // ==================== LAYOUT MANAGEMENT ====================

    /**
     * Start a new row for manual layout control
     * @returns {FormBuilder}
     */
    row() {
        if (this.currentRow !== null) {
            console.warn('FormBuilder: Nested rows are not supported. Closing previous row.');
            this.endRow();
        }
        this.currentRow = [];
        return this;
    }

    /**
     * End the current row
     * @returns {FormBuilder}
     */
    endRow() {
        if (this.currentRow === null) {
            console.warn('FormBuilder: endRow() called without row()');
            return this;
        }

        if (this.currentRow.length > 0) {
            this.fields.push({
                type: 'row',
                fields: this.currentRow
            });
        }

        this.currentRow = null;
        return this;
    }

    /**
     * Add a fieldset (group of fields with legend)
     * @param {string} legend - Fieldset legend text
     * @param {Function} callback - Function that receives a new FormBuilder instance
     * @returns {FormBuilder}
     */
    fieldset(legend, callback) {
        const nestedBuilder = new FormBuilder(this.builderData);
        callback(nestedBuilder);

        this._addField({
            type: 'fieldset',
            legend,
            fields: nestedBuilder.fields
        });

        return this;
    }

    // ==================== FIELD TYPES ====================

    /**
     * Add a text input field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @param {boolean} [options.required=false] - Is field required
     * @param {number} [options.span=1] - Column span (1 or 2)
     * @param {string} [options.defaultValue=''] - Default value
     * @param {string} [options.placeholder=''] - Placeholder text
     * @param {string} [options.helpText=''] - Help text below field
     * @returns {FormBuilder}
     */
    addText(name, label, options = {}) {
        const {
            required = false,
            span = 1,
            defaultValue = '',
            placeholder = '',
            helpText = ''
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'text',
            name,
            label,
            required,
            span,
            defaultValue,
            placeholder,
            helpText
        });

        return this;
    }

    /**
     * Add a number input field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addNumber(name, label, options = {}) {
        const {
            required = false,
            span = 1,
            defaultValue = '',
            helpText = ''
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'number',
            name,
            label,
            required,
            span,
            defaultValue,
            helpText
        });

        return this;
    }

    /**
     * Add a select dropdown field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} optionsMap - Options as {value: label} pairs
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addSelect(name, label, optionsMap, options = {}) {
        const {
            required = false,
            span = 1,
            multiple = false
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'select',
            name,
            label,
            required,
            span,
            optionsMap,
            multiple
        });

        return this;
    }

    /**
     * Add a textarea field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addTextarea(name, label, options = {}) {
        const {
            required = false,
            span = 2,
            defaultValue = '',
            rows = 4
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'textarea',
            name,
            label,
            required,
            span,
            defaultValue,
            rows
        });

        return this;
    }

    /**
     * Add a CKEditor rich text field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addCKEditor(name, label, options = {}) {
        const {
            required = false,
            span = 2
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'ckeditor',
            name,
            label,
            required,
            span
        });

        return this;
    }

    /**
     * Add an image upload field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addImage(name, label, options = {}) {
        const {
            required = false,
            span = 2,
            format = '1920x600',
            acceptedFormats = 'image/jpeg,image/png',
            useFileManager = true
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'image',
            name,
            label,
            required,
            span,
            format,
            acceptedFormats,
            useFileManager
        });

        return this;
    }

    /**
     * Add a URL input field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addUrl(name, label, options = {}) {
        const {
            required = false,
            span = 1,
            showTooltip = false
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'url',
            name,
            label,
            required,
            span,
            showTooltip
        });

        return this;
    }

    /**
     * Add an icon picker field
     * @param {string} name - Field name
     * @param {string} label - Field label
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addIconPicker(name, label, options = {}) {
        const {
            required = false,
            span = 1
        } = options;

        this._validateFieldName(name);

        this._addField({
            type: 'icon',
            name,
            label,
            required,
            span
        });

        return this;
    }

    /**
     * Add a table field
     * @param {number} rows - Number of rows
     * @param {number} cols - Number of columns
     * @param {Object} options - Field options
     * @returns {FormBuilder}
     */
    addTable(rows, cols, options = {}) {
        const { span = 2 } = options;

        this._addField({
            type: 'table',
            rows,
            cols,
            span
        });

        return this;
    }

    /**
     * Add help text (not a field, just informational text)
     * @param {string} message - Help message
     * @returns {FormBuilder}
     */
    addHelp(message) {
        this._addField({
            type: 'help',
            message
        });

        return this;
    }

    // ==================== DYNAMIC REPEATABLE FIELDS ====================

    /**
     * Add a repeatable field group (replaces old fieldsets)
     * @param {string} name - Base name for the repeatable group
     * @param {Object} config - Configuration
     * @param {string} config.label - Label for the group
     * @param {number} [config.min=1] - Minimum number of items
     * @param {number} [config.max=10] - Maximum number of items
     * @param {number} [config.initial=1] - Initial number of items
     * @param {string} [config.addButtonText='+ Ajouter'] - Add button text
     * @param {string} [config.removeButtonText='Supprimer'] - Remove button text
     * @param {Function} config.template - Template function (index, builder) => builder
     * @returns {FormBuilder}
     */
    addRepeatable(name, config) {
        const {
            label,
            min = 1,
            max = 10,
            initial = 1,
            addButtonText = '+ Ajouter',
            removeButtonText = 'Supprimer',
            template
        } = config;

        this._addField({
            type: 'repeatable',
            name,
            label,
            min,
            max,
            initial,
            addButtonText,
            removeButtonText,
            template
        });

        return this;
    }

    // ==================== RENDERING ====================

    /**
     * Render the form to HTML string
     * @returns {string}
     */
    render() {
        let html = '<div class="form-builder-root">\n';

        for (const field of this.fields) {
            html += this._renderField(field);
        }

        html += '</div>';
        return html;
    }

    /**
     * Render a single field
     * @private
     */
    _renderField(field) {
        switch (field.type) {
            case 'row':
                return this._renderRow(field);
            case 'fieldset':
                return this._renderFieldset(field);
            case 'text':
                return this._renderText(field);
            case 'number':
                return this._renderNumber(field);
            case 'select':
                return this._renderSelect(field);
            case 'textarea':
                return this._renderTextarea(field);
            case 'ckeditor':
                return this._renderCKEditor(field);
            case 'image':
                return this._renderImage(field);
            case 'url':
                return this._renderUrl(field);
            case 'icon':
                return this._renderIcon(field);
            case 'table':
                return this._renderTable(field);
            case 'help':
                return this._renderHelp(field);
            case 'repeatable':
                return this._renderRepeatable(field);
            default:
                console.warn(`FormBuilder: Unknown field type "${field.type}"`);
                return '';
        }
    }

    _renderRow(field) {
        let html = '<div class="form-builder-row">\n';
        for (const rowField of field.fields) {
            html += this._renderField(rowField);
        }
        html += '</div>\n';
        return html;
    }

    _renderFieldset(field) {
        let html = `<fieldset>\n<legend>${field.legend}</legend>\n`;
        for (const nestedField of field.fields) {
            html += this._renderField(nestedField);
        }
        html += '</fieldset>\n';
        return html;
    }

    _renderText(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';
        const placeholder = field.placeholder ? `placeholder="${field.placeholder}"` : '';

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <input type="text" data-name="${field.name}" value="${field.defaultValue}" class="form-control" ${requiredAttr} ${placeholder}/>\n`;

        if (field.helpText) {
            html += `  <small class="form-text text-muted">${field.helpText}</small>\n`;
        }

        html += '</div>\n';
        return html;
    }

    _renderNumber(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <input type="number" data-name="${field.name}" value="${field.defaultValue}" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" ${requiredAttr}/>\n`;

        if (field.helpText) {
            html += `  <small class="form-text text-muted">${field.helpText}</small>\n`;
        }

        html += '</div>\n';
        return html;
    }

    _renderSelect(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';
        const multipleAttr = field.multiple ? 'multiple' : '';

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <select data-name="${field.name}" class="select2 form-control" ${requiredAttr} ${multipleAttr}>\n`;
        html += this._makeOptionTags(field.optionsMap, field.required);
        html += '  </select>\n';
        html += '</div>\n';
        return html;
    }

    _renderTextarea(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <textarea data-name="${field.name}" class="form-control" rows="${field.rows}" ${requiredAttr}>${field.defaultValue}</textarea>\n`;
        html += '</div>\n';
        return html;
    }

    _renderCKEditor(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <textarea data-name="${field.name}" class="form-control element-ckeditor" ${requiredAttr}></textarea>\n`;
        html += '</div>\n';
        return html;
    }

    _renderImage(field) {
        const requiredLabel = field.required ? ' *' : '';
        const limitSize = FormBuilder.IMAGE_MAX_SIZE_MB;

        let html = `<div class="form-group form-group-image" data-span="${field.span}">\n`;
        html += `  <label class="form-control-label mb-2">${field.label}${requiredLabel}</label>\n`;
        html += `  <input type="hidden" data-name="${field.name}_url"/>\n`;

        // Conteneur principal style "carte"
        html += `  <div class="card bg-light border-dashed image-upload-widget">\n`;
        html += `    <div class="card-body text-center p-4">\n`;

        // État vide
        html += `      <div class="image-upload-empty">\n`;
        html += `        <div class="mb-3 text-muted">\n`;
        html += `          <i class="fa fa-image fa-3x"></i>\n`;
        html += `        </div>\n`;

        html += `        <div class="d-flex justify-content-center gap-2 mb-3">\n`;

        // Bouton Upload Local (input wrappé)
        html += `          <label class="btn btn-outline-primary position-relative overflow-hidden mb-0" style="cursor: pointer;">\n`;
        html += `            <i class="fa fa-upload me-1"></i> Upload\n`;
        html += `            <input type="file" accept="${field.acceptedFormats}" data-name="${field.name}" class="position-absolute top-0 start-0 opacity-0 w-100 h-100" style="cursor: pointer;"/>\n`;
        html += `          </label>\n`;

        // Bouton File Manager
        if (field.useFileManager) {
            html += `          <button type="button" class="btn btn-primary btn-select-from-filemanager" data-target="${field.name}">\n`;
            html += `            <i class="fa fa-folder-open me-1"></i> Médiathèque\n`;
            html += `          </button>\n`;
        }

        html += `        </div>\n`;

        html += `        <small class="text-muted d-block">Formats: ${field.acceptedFormats.split(',').map(f => f.replace('image/', '.')).join(', ')}</small>\n`;
        html += `        <small class="text-muted d-block">Max: ${limitSize}Mo • Recommandé: ${field.format}</small>\n`;
        html += `      </div>\n`; // Fin empty state

        // État Preview
        html += `      <div class="image-upload-preview" style="display: none; position: relative;">\n`;
        html += `        <div class="image-preview-container mb-2" style="position: relative; display: inline-block;">\n`;
        html += `          <img src="" class="img-fluid rounded border bg-white" style="max-height: 200px; object-fit: contain;" alt="Preview">\n`;
        html += `          <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 translate-middle-y file-preview-delete" style="right: -10px; border-radius: 50%; width: 24px; height: 24px; padding: 0; display: flex; align-items: center; justify-content: center;">\n`;
        html += `            <i class="fa fa-times" style="font-size: 12px;"></i>\n`;
        html += `          </button>\n`;
        html += `        </div>\n`;
        html += `        <div><small class="text-muted filename-preview"></small></div>\n`;
        html += `      </div>\n`; // Fin preview state

        html += `    </div>\n`; // Fin card-body
        html += `  </div>\n`; // Fin card
        html += `</div>\n`;

        return html;
    }

    _renderUrl(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <input type="text" data-name="${field.name}" class="form-control" ${requiredAttr}/>\n`;

        if (field.showTooltip) {
            html += '  <small class="form-text text-muted">URL de la vidéo. Exemple : https://youtu.be/091287</small>\n';
        }

        html += '</div>\n';
        return html;
    }

    _renderIcon(field) {
        const requiredAttr = field.required ? 'required' : '';
        const requiredLabel = field.required ? ' *' : '';
        const icons = this._getIcons();

        let html = `<div class="form-group" data-span="${field.span}">\n`;
        html += `  <label>${field.label}${requiredLabel}</label>\n`;
        html += `  <select data-name="${field.name}" class="select2 form-control" ${requiredAttr}>\n`;
        html += this._makeOptionTags(icons, field.required);
        html += '  </select>\n';
        html += '</div>\n';
        return html;
    }

    _renderTable(field) {
        const col = (name) => {
            return `<td><textarea data-name="${name}" class="form-control" rows="1"></textarea></td>`;
        };

        const line = (nbCols, namePrefix, label) => {
            let html = `<tr><th>${label}</th>`;
            for (let i = 0; i < nbCols; i++) {
                html += col(`${namePrefix}_${i}`);
            }
            html += '</tr>';
            return html;
        };

        let html = `<div data-span="${field.span}">\n`;
        html += '  <table class="table table-bordered table-sm">\n';
        html += '    <tbody>\n';

        for (let i = 0; i < field.rows; i++) {
            html += line(field.cols, `table_cell_${i}`, i + 1);
        }

        html += '    </tbody>\n';
        html += '  </table>\n';
        html += '</div>\n';
        return html;
    }

    _renderHelp(field) {
        return `<p><em>${field.message}</em></p>\n`;
    }

    _renderRepeatable(field) {
        let html = `<div class="form-repeatable" data-name="${field.name}" data-min="${field.min}" data-max="${field.max}">\n`;
        html += `  <div class="form-repeatable-header">\n`;
        html += `    <strong>${field.label}</strong>\n`;
        html += `  </div>\n`;
        html += `  <div class="form-repeatable-items">\n`;

        // Render initial items
        for (let i = 1; i <= field.initial; i++) {
            html += `    <fieldset class="form-repeatable-item" data-index="${i - 1}">\n`;
            html += `      <legend>${field.label} #${i}</legend>\n`;

            const itemBuilder = new FormBuilder(this.builderData);
            field.template(i, itemBuilder);

            for (const itemField of itemBuilder.fields) {
                html += this._renderField(itemField);
            }

            if (i > field.min) {
                html += `      <button type="button" class="btn btn-sm btn-danger form-repeatable-remove">${field.removeButtonText}</button>\n`;
            }

            html += `    </fieldset>\n`;
        }

        html += `  </div>\n`;
        html += `  <button type="button" class="btn btn-sm btn-primary form-repeatable-add">${field.addButtonText}</button>\n`;

        // Render template for new items
        const templateBuilder = new FormBuilder(this.builderData);
        // Use a unique placeholder to support nested repeatables
        const placeholder = `__INDEX_${Math.random().toString(36).substr(2, 9)}__`;

        field.template(placeholder, templateBuilder);

        html += `  <template class="form-repeatable-template" data-placeholder="${placeholder}">\n`;
        html += `    <fieldset class="form-repeatable-item" data-index="${placeholder}">\n`;
        html += `      <legend>${field.label} #${placeholder}</legend>\n`;
        for (const itemField of templateBuilder.fields) {
            html += this._renderField(itemField);
        }
        html += `      <button type="button" class="btn btn-sm btn-danger form-repeatable-remove">${field.removeButtonText}</button>\n`;
        html += `    </fieldset>\n`;
        html += `  </template>\n`;

        html += '</div>\n';

        return html;
    }

    // ==================== HELPERS ====================

    _addField(field) {
        if (this.currentRow !== null) {
            this.currentRow.push(field);
        } else {
            this.fields.push(field);
        }
    }

    _validateFieldName(name) {
        if (this.fieldNames.has(name)) {
            console.warn(`FormBuilder: Duplicate field name "${name}"`);
        }
        this.fieldNames.add(name);
    }

    _makeOptionTags(options, isRequired) {
        let optionTags = isRequired ? '' : '<option value=""></option>';

        for (let optionValue in options) {
            if (typeof options[optionValue] === 'string') {
                optionTags += `<option value="${optionValue}">${options[optionValue]}</option>`;
            } else {
                optionTags += `<optgroup label="${optionValue}">`;
                for (let suboptionValue in options[optionValue]) {
                    optionTags += `<option value="${suboptionValue}">${options[optionValue][suboptionValue]}</option>`;
                }
                optionTags += `</optgroup>`;
            }
        }

        return optionTags;
    }

    _getIcons() {
        return {
            "icon-application": "Application",
            "icon-marketplace": "Marketplace",
            "icon-pay": "Pay",
            "icon-acheter": "Acheter",
            "icon-envoyer": "Envoyer",
            "icon-dedouaner": "Dédouaner",
            "icon-ouvrir": "Ouvrir",
            "icon-affranchir": "Affranchir",
            "icon-avion": "Avion",
            "icon-avis-ra": "Avis RA",
            "icon-avis-rb": "Avis RB",
            "icon-bateau": "Bateau",
            "icon-boite-postale": "Boite postale",
            "icon-bulletin-dematerialise": "Bulletin dématérialisé",
            "icon-bureau-de-poste": "Bureau de poste",
            "icon-carte-bancaire": "Carte bancaire",
            "icon-cheques": "Chèques",
            "icon-collecter": "Collecter le courrier",
            "icon-distribuer": "Distribuer",
            "icon-envoyer-lre": "Envoyer LRE",
            "icon-especes": "Espèces",
            "icon-facteur": "facteur",
            "icon-facture": "Facture",
            "icon-ile": "ïle",
            "icon-imprimer": "Imprimer",
            "icon-internet": "Internet",
            "icon-justificatif": "Justificatif",
            "icon-livraison": "Livraison",
            "icon-piece-identite": "Pièce d'identité",
            "icon-poster-colis": "Poster le colis",
            "icon-poster-lettre": "Poster la lettre",
            "icon-prelevement": "Prélèvement",
            "icon-timbre": "Timbres"
        };
    }

    // ==================== DEBUG ====================

    /**
     * Debug: log the current form structure
     */
    debug() {
        console.log('FormBuilder structure:', this.fields);
        return this;
    }

    /**
     * Export form structure as JSON
     */
    toJSON() {
        return JSON.stringify(this.fields, null, 2);
    }
}
