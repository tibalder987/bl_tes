"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["form-builder"],{

/***/ "./assets/form-builder/form-builder.js":
/*!*********************************************!*\
  !*** ./assets/form-builder/form-builder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./assets/form-builder/App.vue");




// Mount the Vue app on a dedicated div
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('form-builder-app');
  if (el) {
    // We can pass data initialized from the backend (like existing schema or configuration)
    var initialSchema = el.dataset.schema ? JSON.parse(el.dataset.schema) : null;
    var initialConfig = el.dataset.config ? JSON.parse(el.dataset.config) : null;
    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      render: function render(h) {
        return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"], {
          props: {
            initialSchema: initialSchema,
            initialConfig: initialConfig
          }
        });
      }
    }).$mount('#form-builder-app');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_35__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_35___default())
  },
  props: {
    initialSchema: {
      type: Object,
      "default": null
    },
    initialConfig: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      activeTab: 'step',
      currentStepIndex: 0,
      selectedField: null,
      schema: {
        steps: [{
          id: 'step_1',
          title: 'Étape 1',
          fields: [],
          conditionalLogic: {
            enabled: false,
            actionType: 'show',
            matchType: 'all',
            rules: []
          }
        }]
      },
      config: {
        successMessage: 'Votre message a bien été envoyé !',
        emails: '',
        nextText: 'Suivant',
        prevText: 'Précédent',
        submitText: 'Envoyer'
      },
      availableElements: [{
        type: 'text',
        label: 'Texte court',
        icon: 'fa fa-font'
      }, {
        type: 'textarea',
        label: 'Texte long',
        icon: 'fa fa-align-left'
      }, {
        type: 'email',
        label: 'Adresse Email',
        icon: 'fa fa-envelope'
      }, {
        type: 'phone',
        label: 'Téléphone',
        icon: 'fa fa-phone'
      }, {
        type: 'number',
        label: 'Nombre',
        icon: 'fa fa-hashtag'
      }, {
        type: 'select',
        label: 'Liste déroulante',
        icon: 'fa fa-list'
      }, {
        type: 'radio',
        label: 'Boutons Radio',
        icon: 'fa fa-dot-circle'
      }, {
        type: 'checkbox',
        label: 'Cases à cocher',
        icon: 'fa fa-check-square'
      }, {
        type: 'date',
        label: 'Date',
        icon: 'fa fa-calendar-alt'
      }, {
        type: 'time',
        label: 'Heure',
        icon: 'fa fa-clock'
      }, {
        type: 'file',
        label: 'Fichier (Upload)',
        icon: 'fa fa-file-upload'
      }, {
        type: 'paragraph',
        label: 'HTML Custom',
        icon: 'fa fa-code'
      }]
    };
  },
  computed: {
    currentStep: function currentStep() {
      return this.schema.steps[this.currentStepIndex] || this.schema.steps[0];
    },
    allFields: function allFields() {
      var fields = [];
      this.schema.steps.forEach(function (step) {
        fields = fields.concat(step.fields);
      });
      return fields;
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (this.initialSchema && this.initialSchema.steps) {
      // Ensure all steps and fields have conditionalLogic object to avoid undefined errors
      this.schema.steps = this.initialSchema.steps.map(function (step) {
        if (!step.conditionalLogic) step.conditionalLogic = {
          enabled: false,
          actionType: 'show',
          matchType: 'all',
          rules: []
        };
        if (step.fields) {
          step.fields = step.fields.map(function (f) {
            if (!f.conditionalLogic) f.conditionalLogic = {
              enabled: false,
              actionType: 'show',
              matchType: 'all',
              rules: []
            };
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
    var eaForm = document.querySelector('.ea-new-form, .ea-edit-form');
    if (eaForm) {
      eaForm.addEventListener('submit', function (e) {
        var configToSave = _objectSpread({}, _this.config);
        if (typeof configToSave.emails === 'string') {
          configToSave.emails = configToSave.emails.split(',').map(function (email) {
            return email.trim();
          }).filter(function (e) {
            return e;
          });
        }

        // Inject Schema Data
        var schemaInput = eaForm.querySelector('input[name="schemaData"]');
        if (!schemaInput) {
          schemaInput = document.createElement('input');
          schemaInput.type = 'hidden';
          schemaInput.name = 'schemaData';
          eaForm.appendChild(schemaInput);
        }
        schemaInput.value = JSON.stringify(_this.schema);

        // Inject Configuration
        var configInput = eaForm.querySelector('input[name="configuration"]');
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
    generateId: function generateId() {
      return 'id_' + Math.random().toString(36).substr(2, 9);
    },
    selectStep: function selectStep(index) {
      this.currentStepIndex = index;
      this.selectedField = null;
      this.activeTab = 'step';
    },
    addStep: function addStep() {
      this.schema.steps.push({
        id: this.generateId(),
        title: 'Nouvelle Étape',
        fields: [],
        conditionalLogic: {
          enabled: false,
          actionType: 'show',
          matchType: 'all',
          rules: []
        }
      });
      this.currentStepIndex = this.schema.steps.length - 1;
      this.activeTab = 'step';
    },
    removeStep: function removeStep(index) {
      if (confirm('Voulez-vous vraiment supprimer cette étape et tous ses champs ?')) {
        this.schema.steps.splice(index, 1);
        if (this.currentStepIndex >= this.schema.steps.length) {
          this.currentStepIndex = this.schema.steps.length - 1;
        }
      }
    },
    cloneElement: function cloneElement(element) {
      return {
        id: this.generateId(),
        type: element.type,
        label: element.label,
        placeholder: '',
        required: false,
        width: '12',
        // default 100% width
        min: '',
        max: '',
        step: '',
        minLength: '',
        maxLength: '',
        minDate: '',
        maxDate: '',
        allowedExtensions: '',
        maxSizeMb: '5',
        conditionalLogic: {
          enabled: false,
          actionType: 'show',
          matchType: 'all',
          rules: []
        },
        content: element.type === 'paragraph' ? '<p>Votre texte ici...</p>' : '',
        options: ['select', 'radio', 'checkbox'].includes(element.type) ? [{
          label: 'Option 1',
          value: 'Option 1'
        }] : []
      };
    },
    selectField: function selectField(field) {
      this.selectedField = field;
      this.activeTab = 'field';
    },
    removeField: function removeField(index) {
      this.currentStep.fields.splice(index, 1);
      if (this.selectedField && !this.currentStep.fields.includes(this.selectedField)) {
        this.selectedField = null;
      }
    },
    addRule: function addRule(conditionalLogicObj) {
      conditionalLogicObj.rules.push({
        fieldId: '',
        operator: 'equals',
        value: ''
      });
    },
    removeRule: function removeRule(conditionalLogicObj, index) {
      conditionalLogicObj.rules.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=template&id=550adbf2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=template&id=550adbf2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);









var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid p-0 form-builder-app text-start"
  }, [_c("div", {
    staticClass: "row g-0"
  }, [_c("div", {
    staticClass: "col-md-3 bg-light p-3 border-end"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v("Éléments disponibles")]), _vm._v(" "), _c("draggable", {
    staticClass: "elements-list",
    attrs: {
      list: _vm.availableElements,
      group: {
        name: "fields",
        pull: "clone",
        put: false
      },
      clone: _vm.cloneElement
    }
  }, _vm._l(_vm.availableElements, function (element) {
    return _c("div", {
      key: element.type,
      staticClass: "card mb-2 cursor-grab"
    }, [_c("div", {
      staticClass: "card-body p-2"
    }, [_c("i", {
      staticClass: "me-2 text-primary",
      "class": element.icon
    }), _vm._v(" " + _vm._s(element.label) + "\n          ")])]);
  }), 0), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 p-4 bg-white main-canvas"
  }, [_vm._m(1), _vm._v(" "), _c("ul", {
    staticClass: "nav nav-tabs mb-3"
  }, [_vm._l(_vm.schema.steps, function (step, index) {
    return _c("li", {
      key: step.id,
      staticClass: "nav-item"
    }, [_c("a", {
      staticClass: "nav-link cursor-pointer",
      "class": {
        active: _vm.currentStepIndex === index
      },
      on: {
        click: function click($event) {
          return _vm.selectStep(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(step.title) + "\n            "), _vm.schema.steps.length > 1 ? _c("i", {
      staticClass: "fa fa-times text-danger ms-2 cursor-pointer",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeStep(index);
        }
      }
    }) : _vm._e()])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link cursor-pointer bg-light",
    on: {
      click: _vm.addStep
    }
  }, [_c("i", {
    staticClass: "fa fa-plus text-success"
  }), _vm._v(" Ajouter Étape")])])], 2), _vm._v(" "), _c("draggable", {
    staticClass: "row border p-3 bg-light m-0 rounded",
    attrs: {
      list: _vm.currentStep.fields,
      group: "fields"
    }
  }, [_vm._l(_vm.currentStep.fields, function (field, index) {
    return _c("div", {
      key: field.id,
      "class": "p-2 col-md-" + (field.width || 12),
      on: {
        click: function click($event) {
          return _vm.selectField(field);
        }
      }
    }, [_c("div", {
      staticClass: "field-wrapper p-3 border rounded bg-white position-relative cursor-pointer",
      "class": {
        "border-primary shadow": _vm.selectedField && _vm.selectedField.id === field.id
      }
    }, [_c("div", {
      staticClass: "position-absolute top-0 end-0 p-1 z-index-2"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-outline-danger border-0",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeField(index);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })])]), _vm._v(" "), ["text", "email", "phone"].includes(field.type) ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      attrs: {
        type: field.type === "phone" ? "tel" : field.type,
        placeholder: field.placeholder,
        minlength: field.minLength,
        maxlength: field.maxLength,
        disabled: ""
      }
    })]) : _vm._e(), _vm._v(" "), field.type === "number" ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      attrs: {
        type: "number",
        placeholder: field.placeholder,
        min: field.min,
        max: field.max,
        step: field.step,
        disabled: ""
      }
    })]) : _vm._e(), _vm._v(" "), field.type === "textarea" ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("textarea", {
      staticClass: "form-control",
      attrs: {
        placeholder: field.placeholder,
        minlength: field.minLength,
        maxlength: field.maxLength,
        disabled: ""
      }
    })]) : _vm._e(), _vm._v(" "), ["date", "time"].includes(field.type) ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      attrs: {
        type: field.type,
        min: field.minDate,
        max: field.maxDate,
        disabled: ""
      }
    })]) : _vm._e(), _vm._v(" "), field.type === "file" ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      attrs: {
        type: "file",
        disabled: ""
      }
    })]) : _vm._e(), _vm._v(" "), field.type === "select" ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("select", {
      staticClass: "form-select",
      attrs: {
        disabled: ""
      }
    }, _vm._l(field.options, function (opt) {
      return _c("option", {
        key: opt.value
      }, [_vm._v(_vm._s(opt.label))]);
    }), 0)]) : _vm._e(), _vm._v(" "), field.type === "checkbox" ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm._l(field.options, function (opt) {
      return _c("div", {
        key: opt.value,
        staticClass: "form-check"
      }, [_c("input", {
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          disabled: ""
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "form-check-label"
      }, [_vm._v(_vm._s(opt.label))])]);
    })], 2) : _vm._e(), _vm._v(" "), field.type === "radio" ? _c("div", [_c("label", {
      staticClass: "form-label font-weight-bold"
    }, [_vm._v(_vm._s(field.label) + " "), field.required ? _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm._l(field.options, function (opt) {
      return _c("div", {
        key: opt.value,
        staticClass: "form-check"
      }, [_c("input", {
        staticClass: "form-check-input",
        attrs: {
          type: "radio",
          disabled: ""
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "form-check-label"
      }, [_vm._v(_vm._s(opt.label))])]);
    })], 2) : _vm._e(), _vm._v(" "), field.type === "paragraph" ? _c("div", [_c("div", {
      domProps: {
        innerHTML: _vm._s(field.content)
      }
    })]) : _vm._e(), _vm._v(" "), field.conditionalLogic && field.conditionalLogic.enabled ? _c("div", {
      staticClass: "mt-2 text-end text-warning small"
    }, [_c("i", {
      staticClass: "fa fa-code-branch"
    }), _vm._v(" Logique conditionnelle active\n            ")]) : _vm._e()])]);
  }), _vm._v(" "), _vm.currentStep.fields.length === 0 ? _c("div", {
    staticClass: "col-12 text-center text-muted py-5"
  }, [_vm._v("\n          Étape vide. Déposez des éléments ici.\n        ")]) : _vm._e()], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 bg-light p-3 border-start overflow-auto",
    staticStyle: {
      "max-height": "100vh"
    }
  }, [_c("ul", {
    staticClass: "nav nav-tabs mb-3 nav-fill"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link cursor-pointer p-2",
    "class": {
      active: _vm.activeTab === "field"
    },
    on: {
      click: function click($event) {
        _vm.activeTab = "field";
      }
    }
  }, [_vm._v("Champ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link cursor-pointer p-2",
    "class": {
      active: _vm.activeTab === "step"
    },
    on: {
      click: function click($event) {
        _vm.activeTab = "step";
      }
    }
  }, [_vm._v("Étape")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link cursor-pointer p-2",
    "class": {
      active: _vm.activeTab === "form"
    },
    on: {
      click: function click($event) {
        _vm.activeTab = "form";
      }
    }
  }, [_vm._v("Général")])])]), _vm._v(" "), _vm.activeTab === "field" ? _c("div", [_vm.selectedField ? _c("div", [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Libellé (Label)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.label,
      expression: "selectedField.label"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.selectedField.label
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "label", $event.target.value);
      }
    }
  })]), _vm._v(" "), !["paragraph", "date", "time", "file", "radio", "checkbox", "select"].includes(_vm.selectedField.type) ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Texte indicatif (Placeholder)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.placeholder,
      expression: "selectedField.placeholder"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.selectedField.placeholder
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "placeholder", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.selectedField.type !== "paragraph" ? _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "form-check form-switch border p-2 rounded bg-white"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.required,
      expression: "selectedField.required"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "req_" + _vm.selectedField.id
    },
    domProps: {
      checked: Array.isArray(_vm.selectedField.required) ? _vm._i(_vm.selectedField.required, null) > -1 : _vm.selectedField.required
    },
    on: {
      change: function change($event) {
        var $$a = _vm.selectedField.required,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.selectedField, "required", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.selectedField, "required", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.selectedField, "required", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label font-weight-bold",
    attrs: {
      "for": "req_" + _vm.selectedField.id
    }
  }, [_vm._v("Champ requis")])])]) : _vm._e(), _vm._v(" "), ["text", "textarea", "email"].includes(_vm.selectedField.type) ? _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Long. min")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.minLength,
      expression: "selectedField.minLength"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.selectedField.minLength
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "minLength", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Long. max")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.maxLength,
      expression: "selectedField.maxLength"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.selectedField.maxLength
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "maxLength", $event.target.value);
      }
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.selectedField.type === "number" ? _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Min")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.min,
      expression: "selectedField.min"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.selectedField.min
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "min", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Max")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.max,
      expression: "selectedField.max"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.selectedField.max
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "max", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Pas (Step)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.step,
      expression: "selectedField.step"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.selectedField.step
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "step", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Laissez vide pour aucune restriction.")])]) : _vm._e(), _vm._v(" "), ["date", "time"].includes(_vm.selectedField.type) ? _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Min")]), _vm._v(" "), _vm.selectedField.type === "checkbox" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.minDate,
      expression: "selectedField.minDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.selectedField.minDate) ? _vm._i(_vm.selectedField.minDate, null) > -1 : _vm.selectedField.minDate
    },
    on: {
      change: function change($event) {
        var $$a = _vm.selectedField.minDate,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.selectedField, "minDate", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.selectedField, "minDate", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.selectedField, "minDate", $$c);
        }
      }
    }
  }) : _vm.selectedField.type === "radio" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.minDate,
      expression: "selectedField.minDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "radio"
    },
    domProps: {
      checked: _vm._q(_vm.selectedField.minDate, null)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.selectedField, "minDate", null);
      }
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.minDate,
      expression: "selectedField.minDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: _vm.selectedField.type
    },
    domProps: {
      value: _vm.selectedField.minDate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "minDate", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Max")]), _vm._v(" "), _vm.selectedField.type === "checkbox" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.maxDate,
      expression: "selectedField.maxDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.selectedField.maxDate) ? _vm._i(_vm.selectedField.maxDate, null) > -1 : _vm.selectedField.maxDate
    },
    on: {
      change: function change($event) {
        var $$a = _vm.selectedField.maxDate,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.selectedField, "maxDate", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.selectedField, "maxDate", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.selectedField, "maxDate", $$c);
        }
      }
    }
  }) : _vm.selectedField.type === "radio" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.maxDate,
      expression: "selectedField.maxDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "radio"
    },
    domProps: {
      checked: _vm._q(_vm.selectedField.maxDate, null)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.selectedField, "maxDate", null);
      }
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.maxDate,
      expression: "selectedField.maxDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: _vm.selectedField.type
    },
    domProps: {
      value: _vm.selectedField.maxDate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "maxDate", $event.target.value);
      }
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.selectedField.type === "file" ? _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mb-2"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Extensions autorisées (séparées par des virgules)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.allowedExtensions,
      expression: "selectedField.allowedExtensions"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: ".pdf, .jpg, .json"
    },
    domProps: {
      value: _vm.selectedField.allowedExtensions
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "allowedExtensions", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Taille max (en Mo)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.maxSizeMb,
      expression: "selectedField.maxSizeMb"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "5"
    },
    domProps: {
      value: _vm.selectedField.maxSizeMb
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "maxSizeMb", $event.target.value);
      }
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.selectedField.type === "paragraph" ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Contenu HTML")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.content,
      expression: "selectedField.content"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "6"
    },
    domProps: {
      value: _vm.selectedField.content
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedField, "content", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), ["select", "radio", "checkbox"].includes(_vm.selectedField.type) ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Options du champ")]), _vm._v(" "), _vm._l(_vm.selectedField.options, function (opt, index) {
    return _c("div", {
      key: index,
      staticClass: "d-flex mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: opt.label,
        expression: "opt.label"
      }],
      staticClass: "form-control form-control-sm me-2",
      attrs: {
        type: "text",
        placeholder: "Nom de l'option"
      },
      domProps: {
        value: opt.label
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(opt, "label", $event.target.value);
        }, function ($event) {
          opt.value = opt.label;
        }]
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-outline-danger",
      on: {
        click: function click($event) {
          return _vm.selectedField.options.splice(index, 1);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-primary w-100 mt-1",
    on: {
      click: function click($event) {
        return _vm.selectedField.options.push({
          label: "Nouvelle option",
          value: "Nouvelle option"
        });
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Ajouter une option")])], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Largeur (Colonnes)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.width,
      expression: "selectedField.width"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedField, "width", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "12"
    }
  }, [_vm._v("100% (Pleine largeur)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("50% (Moitié)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("33% (Un tiers)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("25% (Un quart)")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 border-top pt-3 mt-3"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "form-check form-switch mb-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.conditionalLogic.enabled,
      expression: "selectedField.conditionalLogic.enabled"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cond_" + _vm.selectedField.id
    },
    domProps: {
      checked: Array.isArray(_vm.selectedField.conditionalLogic.enabled) ? _vm._i(_vm.selectedField.conditionalLogic.enabled, null) > -1 : _vm.selectedField.conditionalLogic.enabled
    },
    on: {
      change: function change($event) {
        var $$a = _vm.selectedField.conditionalLogic.enabled,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.selectedField.conditionalLogic, "enabled", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.selectedField.conditionalLogic, "enabled", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.selectedField.conditionalLogic, "enabled", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "cond_" + _vm.selectedField.id
    }
  }, [_vm._v("Activer les conditions")])]), _vm._v(" "), _vm.selectedField.conditionalLogic.enabled ? _c("div", {
    staticClass: "bg-white p-2 border rounded small"
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.conditionalLogic.actionType,
      expression: "selectedField.conditionalLogic.actionType"
    }],
    staticClass: "form-select form-select-sm d-inline-block w-auto me-1",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedField.conditionalLogic, "actionType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "show"
    }
  }, [_vm._v("Afficher")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "hide"
    }
  }, [_vm._v("Masquer")])]), _vm._v(" ce champ si \n                "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedField.conditionalLogic.matchType,
      expression: "selectedField.conditionalLogic.matchType"
    }],
    staticClass: "form-select form-select-sm d-inline-block w-auto ms-1",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedField.conditionalLogic, "matchType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v("toutes")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "any"
    }
  }, [_vm._v("au moins une")])]), _vm._v(" condition(s) :\n              ")]), _vm._v(" "), _vm._l(_vm.selectedField.conditionalLogic.rules, function (rule, rIndex) {
    return _c("div", {
      key: rIndex,
      staticClass: "mb-2 border-bottom pb-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rule.fieldId,
        expression: "rule.fieldId"
      }],
      staticClass: "form-select form-select-sm mb-1",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(rule, "fieldId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("-- Choisir un champ --")]), _vm._v(" "), _vm._l(_vm.allFields, function (f) {
      return _c("option", {
        key: f.id,
        attrs: {
          disabled: f.id === _vm.selectedField.id
        },
        domProps: {
          value: f.id
        }
      }, [_vm._v(_vm._s(f.label))]);
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rule.operator,
        expression: "rule.operator"
      }],
      staticClass: "form-select form-select-sm me-1",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(rule, "operator", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "equals"
      }
    }, [_vm._v("Est")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "not_equals"
      }
    }, [_vm._v("N'est pas")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "contains"
      }
    }, [_vm._v("Contient")])]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rule.value,
        expression: "rule.value"
      }],
      staticClass: "form-control form-control-sm",
      attrs: {
        type: "text",
        placeholder: "Valeur"
      },
      domProps: {
        value: rule.value
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(rule, "value", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-outline-danger ms-1",
      on: {
        click: function click($event) {
          return _vm.removeRule(_vm.selectedField.conditionalLogic, rIndex);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-primary w-100 mt-1",
    on: {
      click: function click($event) {
        return _vm.addRule(_vm.selectedField.conditionalLogic);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Ajouter une règle")])], 2) : _vm._e()])]) : _c("div", {
    staticClass: "alert alert-info py-2 small"
  }, [_c("i", {
    staticClass: "fa fa-mouse-pointer"
  }), _vm._v(" Cliquez sur un champ au centre pour modifier ses paramètres.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.activeTab === "step" ? _c("div", [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Titre de l'étape")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentStep.title,
      expression: "currentStep.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.currentStep.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.currentStep, "title", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 border-top pt-3 mt-3"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "form-check form-switch mb-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentStep.conditionalLogic.enabled,
      expression: "currentStep.conditionalLogic.enabled"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cond_step_" + _vm.currentStep.id
    },
    domProps: {
      checked: Array.isArray(_vm.currentStep.conditionalLogic.enabled) ? _vm._i(_vm.currentStep.conditionalLogic.enabled, null) > -1 : _vm.currentStep.conditionalLogic.enabled
    },
    on: {
      change: function change($event) {
        var $$a = _vm.currentStep.conditionalLogic.enabled,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.currentStep.conditionalLogic, "enabled", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.currentStep.conditionalLogic, "enabled", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.currentStep.conditionalLogic, "enabled", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "cond_step_" + _vm.currentStep.id
    }
  }, [_vm._v("Activer les conditions")])]), _vm._v(" "), _vm.currentStep.conditionalLogic.enabled ? _c("div", {
    staticClass: "bg-white p-2 border rounded small"
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentStep.conditionalLogic.actionType,
      expression: "currentStep.conditionalLogic.actionType"
    }],
    staticClass: "form-select form-select-sm d-inline-block w-auto me-1",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.currentStep.conditionalLogic, "actionType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "show"
    }
  }, [_vm._v("Afficher")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "hide"
    }
  }, [_vm._v("Masquer")])]), _vm._v(" cette étape si \n                "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentStep.conditionalLogic.matchType,
      expression: "currentStep.conditionalLogic.matchType"
    }],
    staticClass: "form-select form-select-sm d-inline-block w-auto ms-1",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.currentStep.conditionalLogic, "matchType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v("toutes")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "any"
    }
  }, [_vm._v("au moins une")])]), _vm._v(" condition(s) :\n              ")]), _vm._v(" "), _vm._l(_vm.currentStep.conditionalLogic.rules, function (rule, rIndex) {
    return _c("div", {
      key: rIndex,
      staticClass: "mb-2 border-bottom pb-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rule.fieldId,
        expression: "rule.fieldId"
      }],
      staticClass: "form-select form-select-sm mb-1",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(rule, "fieldId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("-- Choisir un champ --")]), _vm._v(" "), _vm._l(_vm.allFields, function (f) {
      return _c("option", {
        key: f.id,
        domProps: {
          value: f.id
        }
      }, [_vm._v(_vm._s(f.label))]);
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rule.operator,
        expression: "rule.operator"
      }],
      staticClass: "form-select form-select-sm me-1",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(rule, "operator", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "equals"
      }
    }, [_vm._v("Est")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "not_equals"
      }
    }, [_vm._v("N'est pas")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "contains"
      }
    }, [_vm._v("Contient")])]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rule.value,
        expression: "rule.value"
      }],
      staticClass: "form-control form-control-sm",
      attrs: {
        type: "text",
        placeholder: "Valeur"
      },
      domProps: {
        value: rule.value
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(rule, "value", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-outline-danger ms-1",
      on: {
        click: function click($event) {
          return _vm.removeRule(_vm.currentStep.conditionalLogic, rIndex);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-primary w-100 mt-1",
    on: {
      click: function click($event) {
        return _vm.addRule(_vm.currentStep.conditionalLogic);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Ajouter une règle")])], 2) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.activeTab === "form" ? _c("div", [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Message de succès")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.config.successMessage,
      expression: "config.successMessage"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3"
    },
    domProps: {
      value: _vm.config.successMessage
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.config, "successMessage", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Email(s) de notification")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.config.emails,
      expression: "config.emails"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "contact@example.com"
    },
    domProps: {
      value: _vm.config.emails
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.config, "emails", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Séparés par des virgules")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v('Texte du bouton "Suivant"')]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.config.nextText,
      expression: "config.nextText"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Suivant"
    },
    domProps: {
      value: _vm.config.nextText
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.config, "nextText", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v('Texte du bouton "Précédent"')]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.config.prevText,
      expression: "config.prevText"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Précédent"
    },
    domProps: {
      value: _vm.config.prevText
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.config, "prevText", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label font-weight-bold"
  }, [_vm._v("Texte du bouton final (Submit)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.config.submitText,
      expression: "config.submitText"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Envoyer"
    },
    domProps: {
      value: _vm.config.submitText
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.config, "submitText", $event.target.value);
      }
    }
  })])]) : _vm._e()])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-4 text-muted small"
  }, [_c("i", {
    staticClass: "fa fa-info-circle"
  }), _vm._v(" Glissez et déposez ces éléments sur la zone de construction sélectionnée au centre.\n      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v("Zone de construction")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "font-weight-bold text-primary"
  }, [_c("i", {
    staticClass: "fa fa-code-branch"
  }), _vm._v(" Logique Conditionnelle")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "font-weight-bold text-primary"
  }, [_c("i", {
    staticClass: "fa fa-code-branch"
  }), _vm._v(" Logique Conditionnelle (Étape)")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/internals/delete-property-or-throw.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/delete-property-or-throw.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/form-builder/App.vue":
/*!*************************************!*\
  !*** ./assets/form-builder/App.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_550adbf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=550adbf2&scoped=true& */ "./assets/form-builder/App.vue?vue&type=template&id=550adbf2&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/form-builder/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_550adbf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css& */ "./assets/form-builder/App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_550adbf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_550adbf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "550adbf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/form-builder/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/form-builder/App.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./assets/form-builder/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/form-builder/App.vue?vue&type=template&id=550adbf2&scoped=true&":
/*!********************************************************************************!*\
  !*** ./assets/form-builder/App.vue?vue&type=template&id=550adbf2&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_550adbf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_550adbf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_550adbf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=550adbf2&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=template&id=550adbf2&scoped=true&");


/***/ }),

/***/ "./assets/form-builder/App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./assets/form-builder/App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_550adbf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/form-builder/App.vue?vue&type=style&index=0&id=550adbf2&scoped=true&lang=css&");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-7be1ba","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_modules_es_-f8ad3e","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d2a0ee","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-dab795","vendors-node_modules_core-js_internals_correct-is-regexp-logic_js-node_modules_core-js_intern-51ca73","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-088580"], () => (__webpack_exec__("./assets/form-builder/form-builder.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNNOztBQUU1QjtBQUNBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztFQUN0RCxJQUFJRCxFQUFFLEVBQUU7SUFDSjtJQUNBLElBQU1FLGFBQWEsR0FBR0YsRUFBRSxDQUFDRyxPQUFPLENBQUNDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLEVBQUUsQ0FBQ0csT0FBTyxDQUFDQyxNQUFNLENBQUMsR0FBRyxJQUFJO0lBQzlFLElBQU1HLGFBQWEsR0FBR1AsRUFBRSxDQUFDRyxPQUFPLENBQUNLLE1BQU0sR0FBR0gsSUFBSSxDQUFDQyxLQUFLLENBQUNOLEVBQUUsQ0FBQ0csT0FBTyxDQUFDSyxNQUFNLENBQUMsR0FBRyxJQUFJO0lBRTlFLElBQUlaLDJDQUFHLENBQUM7TUFDSmEsTUFBTSxFQUFFLFNBQUFBLE9BQUFDLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNiLGdEQUFHLEVBQUU7VUFDaEJjLEtBQUssRUFBRTtZQUNIVCxhQUFhLEVBQWJBLGFBQWE7WUFDYkssYUFBYSxFQUFiQTtVQUNKO1FBQ0osQ0FBQyxDQUFDO01BQUE7SUFDTixDQUFDLENBQUMsQ0FBQ0ssTUFBTSxDQUFDLG1CQUFtQixDQUFDO0VBQ2xDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbVZGO0FBRUEsaUVBQWU7RUFDZkUsVUFBQTtJQUNBRCxTQUFBLEVBQUFBLHNEQUFBQTtFQUNBO0VBQ0FGLEtBQUE7SUFDQVQsYUFBQTtNQUNBYSxJQUFBLEVBQUFDLE1BQUE7TUFDQTtJQUNBO0lBQ0FULGFBQUE7TUFDQVEsSUFBQSxFQUFBQyxNQUFBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FDLFNBQUE7TUFDQUMsZ0JBQUE7TUFDQUMsYUFBQTtNQUNBaEIsTUFBQTtRQUNBaUIsS0FBQSxHQUNBO1VBQ0FDLEVBQUE7VUFDQUMsS0FBQTtVQUNBQyxNQUFBO1VBQ0FDLGdCQUFBO1lBQUFDLE9BQUE7WUFBQUMsVUFBQTtZQUFBQyxTQUFBO1lBQUFDLEtBQUE7VUFBQTtRQUNBO01BRUE7TUFDQXJCLE1BQUE7UUFDQXNCLGNBQUE7UUFDQUMsTUFBQTtRQUNBQyxRQUFBO1FBQ0FDLFFBQUE7UUFDQUMsVUFBQTtNQUNBO01BQ0FDLGlCQUFBLEdBQ0E7UUFBQXBCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQXRCLElBQUE7UUFBQXFCLEtBQUE7UUFBQUMsSUFBQTtNQUFBO0lBRUE7RUFDQTtF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L2Fzc2V0cy9mb3JtLWJ1aWxkZXIvZm9ybS1idWlsZGVyLmpzIiwid2VicGFjazovLy9hc3NldHMvZm9ybS1idWlsZGVyL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zvcm0tYnVpbGRlci9BcHAudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mb3JtLWJ1aWxkZXIvQXBwLnZ1ZT81YmNjIiwid2VicGFjazovLy8uL2Fzc2V0cy9mb3JtLWJ1aWxkZXIvQXBwLnZ1ZT8wYmJlIiwid2VicGFjazovLy8uL2Fzc2V0cy9mb3JtLWJ1aWxkZXIvQXBwLnZ1ZT8wNzc5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9mb3JtLWJ1aWxkZXIvQXBwLnZ1ZT85MjZmIiwid2VicGFjazovLy8uL2Fzc2V0cy9mb3JtLWJ1aWxkZXIvQXBwLnZ1ZT80YTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xyXG5cclxuLy8gTW91bnQgdGhlIFZ1ZSBhcHAgb24gYSBkZWRpY2F0ZWQgZGl2XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWJ1aWxkZXItYXBwJyk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICAvLyBXZSBjYW4gcGFzcyBkYXRhIGluaXRpYWxpemVkIGZyb20gdGhlIGJhY2tlbmQgKGxpa2UgZXhpc3Rpbmcgc2NoZW1hIG9yIGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFNjaGVtYSA9IGVsLmRhdGFzZXQuc2NoZW1hID8gSlNPTi5wYXJzZShlbC5kYXRhc2V0LnNjaGVtYSkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxDb25maWcgPSBlbC5kYXRhc2V0LmNvbmZpZyA/IEpTT04ucGFyc2UoZWwuZGF0YXNldC5jb25maWcpIDogbnVsbDtcclxuXHJcbiAgICAgICAgbmV3IFZ1ZSh7XHJcbiAgICAgICAgICAgIHJlbmRlcjogaCA9PiBoKEFwcCwge1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2NoZW1hLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxDb25maWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS4kbW91bnQoJyNmb3JtLWJ1aWxkZXItYXBwJyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwLTAgZm9ybS1idWlsZGVyLWFwcCB0ZXh0LXN0YXJ0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxyXG4gICAgICA8IS0tIExlZnQgU2lkZWJhcjogRWxlbWVudHMgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBiZy1saWdodCBwLTMgYm9yZGVyLWVuZFwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cIm1iLTNcIj7DiWzDqW1lbnRzIGRpc3BvbmlibGVzPC9oNT5cclxuICAgICAgICA8ZHJhZ2dhYmxlIGNsYXNzPVwiZWxlbWVudHMtbGlzdFwiIDpsaXN0PVwiYXZhaWxhYmxlRWxlbWVudHNcIiA6Z3JvdXA9XCJ7IG5hbWU6ICdmaWVsZHMnLCBwdWxsOiAnY2xvbmUnLCBwdXQ6IGZhbHNlIH1cIiA6Y2xvbmU9XCJjbG9uZUVsZW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTIgY3Vyc29yLWdyYWJcIiB2LWZvcj1cImVsZW1lbnQgaW4gYXZhaWxhYmxlRWxlbWVudHNcIiA6a2V5PVwiZWxlbWVudC50eXBlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZWxlbWVudC5pY29uXCIgY2xhc3M9XCJtZS0yIHRleHQtcHJpbWFyeVwiPjwvaT4ge3sgZWxlbWVudC5sYWJlbCB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZHJhZ2dhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00IHRleHQtbXV0ZWQgc21hbGxcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIj48L2k+IEdsaXNzZXogZXQgZMOpcG9zZXogY2VzIMOpbMOpbWVudHMgc3VyIGxhIHpvbmUgZGUgY29uc3RydWN0aW9uIHPDqWxlY3Rpb25uw6llIGF1IGNlbnRyZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIE1haW4gQ2FudmFzIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcC00IGJnLXdoaXRlIG1haW4tY2FudmFzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxyXG4gICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTBcIj5ab25lIGRlIGNvbnN0cnVjdGlvbjwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gU3RlcHMgTmF2aWdhdGlvbiAtLT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnMgbWItM1wiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiB2LWZvcj1cIihzdGVwLCBpbmRleCkgaW4gc2NoZW1hLnN0ZXBzXCIgOmtleT1cInN0ZXAuaWRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBjdXJzb3ItcG9pbnRlclwiIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnRTdGVwSW5kZXggPT09IGluZGV4fVwiIEBjbGljaz1cInNlbGVjdFN0ZXAoaW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAge3sgc3RlcC50aXRsZSB9fVxyXG4gICAgICAgICAgICAgIDxpIHYtaWY9XCJzY2hlbWEuc3RlcHMubGVuZ3RoID4gMVwiIGNsYXNzPVwiZmEgZmEtdGltZXMgdGV4dC1kYW5nZXIgbXMtMiBjdXJzb3ItcG9pbnRlclwiIEBjbGljay5zdG9wPVwicmVtb3ZlU3RlcChpbmRleClcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGN1cnNvci1wb2ludGVyIGJnLWxpZ2h0XCIgQGNsaWNrPVwiYWRkU3RlcFwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1cyB0ZXh0LXN1Y2Nlc3NcIj48L2k+IEFqb3V0ZXIgw4l0YXBlPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkcmFnZ2FibGUgY2xhc3M9XCJyb3cgYm9yZGVyIHAtMyBiZy1saWdodCBtLTAgcm91bmRlZFwiIDpsaXN0PVwiY3VycmVudFN0ZXAuZmllbGRzXCIgZ3JvdXA9XCJmaWVsZHNcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZmllbGQsIGluZGV4KSBpbiBjdXJyZW50U3RlcC5maWVsZHNcIiA6a2V5PVwiZmllbGQuaWRcIiBcclxuICAgICAgICAgICAgICAgOmNsYXNzPVwiJ3AtMiBjb2wtbWQtJyArIChmaWVsZC53aWR0aCB8fCAxMilcIiBcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0RmllbGQoZmllbGQpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyIHAtMyBib3JkZXIgcm91bmRlZCBiZy13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiIFxyXG4gICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnYm9yZGVyLXByaW1hcnkgc2hhZG93Jzogc2VsZWN0ZWRGaWVsZCAmJiBzZWxlY3RlZEZpZWxkLmlkID09PSBmaWVsZC5pZH1cIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgZW5kLTAgcC0xIHotaW5kZXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtZGFuZ2VyIGJvcmRlci0wXCIgQGNsaWNrLnN0b3A9XCJyZW1vdmVGaWVsZChpbmRleClcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cIlsndGV4dCcsICdlbWFpbCcsICdwaG9uZSddLmluY2x1ZGVzKGZpZWxkLnR5cGUpXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIj57eyBmaWVsZC5sYWJlbCB9fSA8c3BhbiB2LWlmPVwiZmllbGQucmVxdWlyZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IDp0eXBlPVwiZmllbGQudHlwZSA9PT0gJ3Bob25lJyA/ICd0ZWwnIDogZmllbGQudHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOnBsYWNlaG9sZGVyPVwiZmllbGQucGxhY2Vob2xkZXJcIiA6bWlubGVuZ3RoPVwiZmllbGQubWluTGVuZ3RoXCIgOm1heGxlbmd0aD1cImZpZWxkLm1heExlbmd0aFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWVsZC50eXBlID09PSAnbnVtYmVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+e3sgZmllbGQubGFiZWwgfX0gPHNwYW4gdi1pZj1cImZpZWxkLnJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6cGxhY2Vob2xkZXI9XCJmaWVsZC5wbGFjZWhvbGRlclwiIDptaW49XCJmaWVsZC5taW5cIiA6bWF4PVwiZmllbGQubWF4XCIgOnN0ZXA9XCJmaWVsZC5zdGVwXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+e3sgZmllbGQubGFiZWwgfX0gPHNwYW4gdi1pZj1cImZpZWxkLnJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpwbGFjZWhvbGRlcj1cImZpZWxkLnBsYWNlaG9sZGVyXCIgOm1pbmxlbmd0aD1cImZpZWxkLm1pbkxlbmd0aFwiIDptYXhsZW5ndGg9XCJmaWVsZC5tYXhMZW5ndGhcIiBkaXNhYmxlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJbJ2RhdGUnLCAndGltZSddLmluY2x1ZGVzKGZpZWxkLnR5cGUpXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIj57eyBmaWVsZC5sYWJlbCB9fSA8c3BhbiB2LWlmPVwiZmllbGQucmVxdWlyZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IDp0eXBlPVwiZmllbGQudHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOm1pbj1cImZpZWxkLm1pbkRhdGVcIiA6bWF4PVwiZmllbGQubWF4RGF0ZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpZWxkLnR5cGUgPT09ICdmaWxlJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+e3sgZmllbGQubGFiZWwgfX0gPHNwYW4gdi1pZj1cImZpZWxkLnJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmllbGQudHlwZSA9PT0gJ3NlbGVjdCdcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPnt7IGZpZWxkLmxhYmVsIH19IDxzcGFuIHYtaWY9XCJmaWVsZC5yZXF1aXJlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3RcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdCBpbiBmaWVsZC5vcHRpb25zXCIgOmtleT1cIm9wdC52YWx1ZVwiPnt7IG9wdC5sYWJlbCB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpZWxkLnR5cGUgPT09ICdjaGVja2JveCdcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPnt7IGZpZWxkLmxhYmVsIH19IDxzcGFuIHYtaWY9XCJmaWVsZC5yZXF1aXJlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwib3B0IGluIGZpZWxkLm9wdGlvbnNcIiA6a2V5PVwib3B0LnZhbHVlXCIgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt7IG9wdC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmllbGQudHlwZSA9PT0gJ3JhZGlvJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+e3sgZmllbGQubGFiZWwgfX0gPHNwYW4gdi1pZj1cImZpZWxkLnJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJvcHQgaW4gZmllbGQub3B0aW9uc1wiIDprZXk9XCJvcHQudmFsdWVcIiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3sgb3B0LmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWVsZC50eXBlID09PSAncGFyYWdyYXBoJ1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwiZmllbGQuY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwhLS0gQ29uZGl0aW9uYWwgTG9naWMgSW5kaWNhdG9yIC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpZWxkLmNvbmRpdGlvbmFsTG9naWMgJiYgZmllbGQuY29uZGl0aW9uYWxMb2dpYy5lbmFibGVkXCIgY2xhc3M9XCJtdC0yIHRleHQtZW5kIHRleHQtd2FybmluZyBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2RlLWJyYW5jaFwiPjwvaT4gTG9naXF1ZSBjb25kaXRpb25uZWxsZSBhY3RpdmVcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiY3VycmVudFN0ZXAuZmllbGRzLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiY29sLTEyIHRleHQtY2VudGVyIHRleHQtbXV0ZWQgcHktNVwiPlxyXG4gICAgICAgICAgICDDiXRhcGUgdmlkZS4gRMOpcG9zZXogZGVzIMOpbMOpbWVudHMgaWNpLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kcmFnZ2FibGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBSaWdodCBTaWRlYmFyOiBTZXR0aW5ncyAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGJnLWxpZ2h0IHAtMyBib3JkZXItc3RhcnQgb3ZlcmZsb3ctYXV0b1wiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwdmg7XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIG1iLTMgbmF2LWZpbGxcIj5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgY3Vyc29yLXBvaW50ZXIgcC0yXCIgOmNsYXNzPVwieyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJ2ZpZWxkJyB9XCIgQGNsaWNrPVwiYWN0aXZlVGFiID0gJ2ZpZWxkJ1wiPkNoYW1wPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgY3Vyc29yLXBvaW50ZXIgcC0yXCIgOmNsYXNzPVwieyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJ3N0ZXAnIH1cIiBAY2xpY2s9XCJhY3RpdmVUYWIgPSAnc3RlcCdcIj7DiXRhcGU8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBjdXJzb3ItcG9pbnRlciBwLTJcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnZm9ybScgfVwiIEBjbGljaz1cImFjdGl2ZVRhYiA9ICdmb3JtJ1wiPkfDqW7DqXJhbDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPCEtLSBGSUVMRCBUQUIgLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiYWN0aXZlVGFiID09PSAnZmllbGQnXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZEZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+TGliZWxsw6kgKExhYmVsKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwic2VsZWN0ZWRGaWVsZC5sYWJlbFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFbJ3BhcmFncmFwaCcsICdkYXRlJywgJ3RpbWUnLCAnZmlsZScsICdyYWRpbycsICdjaGVja2JveCcsICdzZWxlY3QnXS5pbmNsdWRlcyhzZWxlY3RlZEZpZWxkLnR5cGUpXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+VGV4dGUgaW5kaWNhdGlmIChQbGFjZWhvbGRlcik8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQucGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiIHYtaWY9XCJzZWxlY3RlZEZpZWxkLnR5cGUgIT09ICdwYXJhZ3JhcGgnXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggYm9yZGVyIHAtMiByb3VuZGVkIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQucmVxdWlyZWRcIiA6aWQ9XCIncmVxXycgKyBzZWxlY3RlZEZpZWxkLmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIiA6Zm9yPVwiJ3JlcV8nICsgc2VsZWN0ZWRGaWVsZC5pZFwiPkNoYW1wIHJlcXVpczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBTcGVjaWZpYyBjb25maWdzIGZvciBUZXh0IHR5cGVzIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiIHYtaWY9XCJbJ3RleHQnLCAndGV4dGFyZWEnLCAnZW1haWwnXS5pbmNsdWRlcyhzZWxlY3RlZEZpZWxkLnR5cGUpXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPkxvbmcuIG1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQubWluTGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Mb25nLiBtYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzZWxlY3RlZEZpZWxkLm1heExlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFNwZWNpZmljIGNvbmZpZ3MgZm9yIE51bWJlciB0eXBlIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiIHYtaWY9XCJzZWxlY3RlZEZpZWxkLnR5cGUgPT09ICdudW1iZXInXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPk1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQubWluXCI+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIj5NYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzZWxlY3RlZEZpZWxkLm1heFwiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+UGFzIChTdGVwKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQuc3RlcFwiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxhaXNzZXogdmlkZSBwb3VyIGF1Y3VuZSByZXN0cmljdGlvbi48L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU3BlY2lmaWMgY29uZmlncyBmb3IgRGF0ZSB0eXBlIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiIHYtaWY9XCJbJ2RhdGUnLCAndGltZSddLmluY2x1ZGVzKHNlbGVjdGVkRmllbGQudHlwZSlcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6dHlwZT1cInNlbGVjdGVkRmllbGQudHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQubWluRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+TWF4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6dHlwZT1cInNlbGVjdGVkRmllbGQudHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQubWF4RGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFNwZWNpZmljIGNvbmZpZ3MgZm9yIEZpbGUgdHlwZSAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIiB2LWlmPVwic2VsZWN0ZWRGaWVsZC50eXBlID09PSAnZmlsZSdcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+RXh0ZW5zaW9ucyBhdXRvcmlzw6llcyAoc8OpcGFyw6llcyBwYXIgZGVzIHZpcmd1bGVzKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiLnBkZiwgLmpwZywgLmpzb25cIiB2LW1vZGVsPVwic2VsZWN0ZWRGaWVsZC5hbGxvd2VkRXh0ZW5zaW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPlRhaWxsZSBtYXggKGVuIE1vKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCI1XCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQubWF4U2l6ZU1iXCI+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCIgdi1pZj1cInNlbGVjdGVkRmllbGQudHlwZSA9PT0gJ3BhcmFncmFwaCdcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Db250ZW51IEhUTUw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzZWxlY3RlZEZpZWxkLmNvbnRlbnRcIiByb3dzPVwiNlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIiB2LWlmPVwiWydzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnXS5pbmNsdWRlcyhzZWxlY3RlZEZpZWxkLnR5cGUpXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+T3B0aW9ucyBkdSBjaGFtcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihvcHQsIGluZGV4KSBpbiBzZWxlY3RlZEZpZWxkLm9wdGlvbnNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImQtZmxleCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG1lLTJcIiB2LW1vZGVsPVwib3B0LmxhYmVsXCIgQGlucHV0PVwib3B0LnZhbHVlID0gb3B0LmxhYmVsXCIgcGxhY2Vob2xkZXI9XCJOb20gZGUgbCdvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1kYW5nZXJcIiBAY2xpY2s9XCJzZWxlY3RlZEZpZWxkLm9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSB3LTEwMCBtdC0xXCIgQGNsaWNrPVwic2VsZWN0ZWRGaWVsZC5vcHRpb25zLnB1c2goe2xhYmVsOiAnTm91dmVsbGUgb3B0aW9uJywgdmFsdWU6ICdOb3V2ZWxsZSBvcHRpb24nfSlcIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXIgdW5lIG9wdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPkxhcmdldXIgKENvbG9ubmVzKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIHYtbW9kZWw9XCJzZWxlY3RlZEZpZWxkLndpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMlwiPjEwMCUgKFBsZWluZSBsYXJnZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjUwJSAoTW9pdGnDqSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj4zMyUgKFVuIHRpZXJzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjI1JSAoVW4gcXVhcnQpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQ29uZGl0aW9uYWwgTG9naWMgZm9yIEZpZWxkIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMyBib3JkZXItdG9wIHB0LTMgbXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS1jb2RlLWJyYW5jaFwiPjwvaT4gTG9naXF1ZSBDb25kaXRpb25uZWxsZTwvaDY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJzZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWMuZW5hYmxlZFwiIDppZD1cIidjb25kXycgKyBzZWxlY3RlZEZpZWxkLmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgOmZvcj1cIidjb25kXycgKyBzZWxlY3RlZEZpZWxkLmlkXCI+QWN0aXZlciBsZXMgY29uZGl0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcIiBjbGFzcz1cImJnLXdoaXRlIHAtMiBib3JkZXIgcm91bmRlZCBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtIGQtaW5saW5lLWJsb2NrIHctYXV0byBtZS0xXCIgdi1tb2RlbD1cInNlbGVjdGVkRmllbGQuY29uZGl0aW9uYWxMb2dpYy5hY3Rpb25UeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNob3dcIj5BZmZpY2hlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWRlXCI+TWFzcXVlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gY2UgY2hhbXAgc2kgXHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbSBkLWlubGluZS1ibG9jayB3LWF1dG8gbXMtMVwiIHYtbW9kZWw9XCJzZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWMubWF0Y2hUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPnRvdXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbnlcIj5hdSBtb2lucyB1bmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IGNvbmRpdGlvbihzKSA6XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihydWxlLCBySW5kZXgpIGluIHNlbGVjdGVkRmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlc1wiIDprZXk9XCJySW5kZXhcIiBjbGFzcz1cIm1iLTIgYm9yZGVyLWJvdHRvbSBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbSBtYi0xXCIgdi1tb2RlbD1cInJ1bGUuZmllbGRJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1biBjaGFtcCAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiZiBpbiBhbGxGaWVsZHNcIiA6a2V5PVwiZi5pZFwiIDp2YWx1ZT1cImYuaWRcIiA6ZGlzYWJsZWQ9XCJmLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXCI+e3sgZi5sYWJlbCB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbSBtZS0xXCIgdi1tb2RlbD1cInJ1bGUub3BlcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXF1YWxzXCI+RXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdF9lcXVhbHNcIj5OJ2VzdCBwYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250aWVudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHYtbW9kZWw9XCJydWxlLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCJWYWxldXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1kYW5nZXIgbXMtMVwiIEBjbGljaz1cInJlbW92ZVJ1bGUoc2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLCBySW5kZXgpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnkgdy0xMDAgbXQtMVwiIEBjbGljaz1cImFkZFJ1bGUoc2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljKVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gQWpvdXRlciB1bmUgcsOoZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvIHB5LTIgc21hbGxcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1tb3VzZS1wb2ludGVyXCI+PC9pPiBDbGlxdWV6IHN1ciB1biBjaGFtcCBhdSBjZW50cmUgcG91ciBtb2RpZmllciBzZXMgcGFyYW3DqHRyZXMuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBTVEVQIFRBQiAtLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJhY3RpdmVUYWIgPT09ICdzdGVwJ1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+VGl0cmUgZGUgbCfDqXRhcGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImN1cnJlbnRTdGVwLnRpdGxlXCI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgIDwhLS0gQ29uZGl0aW9uYWwgTG9naWMgZm9yIFN0ZXAgLS0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTMgYm9yZGVyLXRvcCBwdC0zIG10LTNcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtY29kZS1icmFuY2hcIj48L2k+IExvZ2lxdWUgQ29uZGl0aW9ubmVsbGUgKMOJdGFwZSk8L2g2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYy5lbmFibGVkXCIgOmlkPVwiJ2NvbmRfc3RlcF8nICsgY3VycmVudFN0ZXAuaWRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiA6Zm9yPVwiJ2NvbmRfc3RlcF8nICsgY3VycmVudFN0ZXAuaWRcIj5BY3RpdmVyIGxlcyBjb25kaXRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcIiBjbGFzcz1cImJnLXdoaXRlIHAtMiBib3JkZXIgcm91bmRlZCBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtIGQtaW5saW5lLWJsb2NrIHctYXV0byBtZS0xXCIgdi1tb2RlbD1cImN1cnJlbnRTdGVwLmNvbmRpdGlvbmFsTG9naWMuYWN0aW9uVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG93XCI+QWZmaWNoZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlkZVwiPk1hc3F1ZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IGNldHRlIMOpdGFwZSBzaSBcclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtIGQtaW5saW5lLWJsb2NrIHctYXV0byBtcy0xXCIgdi1tb2RlbD1cImN1cnJlbnRTdGVwLmNvbmRpdGlvbmFsTG9naWMubWF0Y2hUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPnRvdXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbnlcIj5hdSBtb2lucyB1bmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IGNvbmRpdGlvbihzKSA6XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihydWxlLCBySW5kZXgpIGluIGN1cnJlbnRTdGVwLmNvbmRpdGlvbmFsTG9naWMucnVsZXNcIiA6a2V5PVwickluZGV4XCIgY2xhc3M9XCJtYi0yIGJvcmRlci1ib3R0b20gcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc20gbWItMVwiIHYtbW9kZWw9XCJydWxlLmZpZWxkSWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW4gY2hhbXAgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLSBVc3VhbGx5IHN0ZXAgbG9naWMgZGVwZW5kcyBvbiBQUkVWSU9VUyBzdGVwcyBmaWVsZHMuIEZvciBzaW1wbGljaXR5IHdlIHNob3cgYWxsIGZpZWxkcy4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJmIGluIGFsbEZpZWxkc1wiIDprZXk9XCJmLmlkXCIgOnZhbHVlPVwiZi5pZFwiPnt7IGYubGFiZWwgfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc20gbWUtMVwiIHYtbW9kZWw9XCJydWxlLm9wZXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVxdWFsc1wiPkVzdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3RfZXF1YWxzXCI+Tidlc3QgcGFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGllbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiB2LW1vZGVsPVwicnVsZS52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiVmFsZXVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtZGFuZ2VyIG1zLTFcIiBAY2xpY2s9XCJyZW1vdmVSdWxlKGN1cnJlbnRTdGVwLmNvbmRpdGlvbmFsTG9naWMsIHJJbmRleClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSB3LTEwMCBtdC0xXCIgQGNsaWNrPVwiYWRkUnVsZShjdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljKVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gQWpvdXRlciB1bmUgcsOoZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gRk9STSBUQUIgLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiYWN0aXZlVGFiID09PSAnZm9ybSdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPk1lc3NhZ2UgZGUgc3VjY8OoczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJjb25maWcuc3VjY2Vzc01lc3NhZ2VcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+RW1haWwocykgZGUgbm90aWZpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiY29uZmlnLmVtYWlsc1wiIHBsYWNlaG9sZGVyPVwiY29udGFjdEBleGFtcGxlLmNvbVwiPlxyXG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+U8OpcGFyw6lzIHBhciBkZXMgdmlyZ3VsZXM8L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPlRleHRlIGR1IGJvdXRvbiBcIlN1aXZhbnRcIjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImNvbmZpZy5uZXh0VGV4dFwiIHBsYWNlaG9sZGVyPVwiU3VpdmFudFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCI+VGV4dGUgZHUgYm91dG9uIFwiUHLDqWPDqWRlbnRcIjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImNvbmZpZy5wcmV2VGV4dFwiIHBsYWNlaG9sZGVyPVwiUHLDqWPDqWRlbnRcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiPlRleHRlIGR1IGJvdXRvbiBmaW5hbCAoU3VibWl0KTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImNvbmZpZy5zdWJtaXRUZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnZveWVyXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBkcmFnZ2FibGVcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBpbml0aWFsU2NoZW1hOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGluaXRpYWxDb25maWc6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWN0aXZlVGFiOiAnc3RlcCcsXHJcbiAgICAgIGN1cnJlbnRTdGVwSW5kZXg6IDAsXHJcbiAgICAgIHNlbGVjdGVkRmllbGQ6IG51bGwsXHJcbiAgICAgIHNjaGVtYToge1xyXG4gICAgICAgIHN0ZXBzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc3RlcF8xJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfDiXRhcGUgMScsXHJcbiAgICAgICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IHsgZW5hYmxlZDogZmFsc2UsIGFjdGlvblR5cGU6ICdzaG93JywgbWF0Y2hUeXBlOiAnYWxsJywgcnVsZXM6IFtdIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnVm90cmUgbWVzc2FnZSBhIGJpZW4gw6l0w6kgZW52b3nDqSAhJyxcclxuICAgICAgICBlbWFpbHM6ICcnLFxyXG4gICAgICAgIG5leHRUZXh0OiAnU3VpdmFudCcsXHJcbiAgICAgICAgcHJldlRleHQ6ICdQcsOpY8OpZGVudCcsXHJcbiAgICAgICAgc3VibWl0VGV4dDogJ0Vudm95ZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIGF2YWlsYWJsZUVsZW1lbnRzOiBbXHJcbiAgICAgICAgeyB0eXBlOiAndGV4dCcsIGxhYmVsOiAnVGV4dGUgY291cnQnLCBpY29uOiAnZmEgZmEtZm9udCcgfSxcclxuICAgICAgICB7IHR5cGU6ICd0ZXh0YXJlYScsIGxhYmVsOiAnVGV4dGUgbG9uZycsIGljb246ICdmYSBmYS1hbGlnbi1sZWZ0JyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ2VtYWlsJywgbGFiZWw6ICdBZHJlc3NlIEVtYWlsJywgaWNvbjogJ2ZhIGZhLWVudmVsb3BlJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ3Bob25lJywgbGFiZWw6ICdUw6lsw6lwaG9uZScsIGljb246ICdmYSBmYS1waG9uZScgfSxcclxuICAgICAgICB7IHR5cGU6ICdudW1iZXInLCBsYWJlbDogJ05vbWJyZScsIGljb246ICdmYSBmYS1oYXNodGFnJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ3NlbGVjdCcsIGxhYmVsOiAnTGlzdGUgZMOpcm91bGFudGUnLCBpY29uOiAnZmEgZmEtbGlzdCcgfSxcclxuICAgICAgICB7IHR5cGU6ICdyYWRpbycsIGxhYmVsOiAnQm91dG9ucyBSYWRpbycsIGljb246ICdmYSBmYS1kb3QtY2lyY2xlJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ2NoZWNrYm94JywgbGFiZWw6ICdDYXNlcyDDoCBjb2NoZXInLCBpY29uOiAnZmEgZmEtY2hlY2stc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ2RhdGUnLCBsYWJlbDogJ0RhdGUnLCBpY29uOiAnZmEgZmEtY2FsZW5kYXItYWx0JyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ3RpbWUnLCBsYWJlbDogJ0hldXJlJywgaWNvbjogJ2ZhIGZhLWNsb2NrJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ2ZpbGUnLCBsYWJlbDogJ0ZpY2hpZXIgKFVwbG9hZCknLCBpY29uOiAnZmEgZmEtZmlsZS11cGxvYWQnIH0sXHJcbiAgICAgICAgeyB0eXBlOiAncGFyYWdyYXBoJywgbGFiZWw6ICdIVE1MIEN1c3RvbScsIGljb246ICdmYSBmYS1jb2RlJyB9LFxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGN1cnJlbnRTdGVwKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuc3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSB8fCB0aGlzLnNjaGVtYS5zdGVwc1swXTtcclxuICAgIH0sXHJcbiAgICBhbGxGaWVsZHMoKSB7XHJcbiAgICAgIGxldCBmaWVsZHMgPSBbXTtcclxuICAgICAgdGhpcy5zY2hlbWEuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAgZmllbGRzID0gZmllbGRzLmNvbmNhdChzdGVwLmZpZWxkcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmllbGRzO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxTY2hlbWEgJiYgdGhpcy5pbml0aWFsU2NoZW1hLnN0ZXBzKSB7XHJcbiAgICAgIC8vIEVuc3VyZSBhbGwgc3RlcHMgYW5kIGZpZWxkcyBoYXZlIGNvbmRpdGlvbmFsTG9naWMgb2JqZWN0IHRvIGF2b2lkIHVuZGVmaW5lZCBlcnJvcnNcclxuICAgICAgdGhpcy5zY2hlbWEuc3RlcHMgPSB0aGlzLmluaXRpYWxTY2hlbWEuc3RlcHMubWFwKHN0ZXAgPT4ge1xyXG4gICAgICAgICBpZiAoIXN0ZXAuY29uZGl0aW9uYWxMb2dpYykgc3RlcC5jb25kaXRpb25hbExvZ2ljID0geyBlbmFibGVkOiBmYWxzZSwgYWN0aW9uVHlwZTogJ3Nob3cnLCBtYXRjaFR5cGU6ICdhbGwnLCBydWxlczogW10gfTtcclxuICAgICAgICAgaWYgKHN0ZXAuZmllbGRzKSB7XHJcbiAgICAgICAgICAgICBzdGVwLmZpZWxkcyA9IHN0ZXAuZmllbGRzLm1hcChmID0+IHtcclxuICAgICAgICAgICAgICAgICBpZiAoIWYuY29uZGl0aW9uYWxMb2dpYykgZi5jb25kaXRpb25hbExvZ2ljID0geyBlbmFibGVkOiBmYWxzZSwgYWN0aW9uVHlwZTogJ3Nob3cnLCBtYXRjaFR5cGU6ICdhbGwnLCBydWxlczogW10gfTtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gZjtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiBzdGVwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluaXRpYWxDb25maWcpIHtcclxuICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZywgdGhpcy5pbml0aWFsQ29uZmlnKTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5jb25maWcuZW1haWxzKSkge1xyXG4gICAgICAgICB0aGlzLmNvbmZpZy5lbWFpbHMgPSB0aGlzLmNvbmZpZy5lbWFpbHMuam9pbignLCAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJpbmQgdG8gdGhlIG5hdGl2ZSBFYXN5QWRtaW4gZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBjb25zdCBlYUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWEtbmV3LWZvcm0sIC5lYS1lZGl0LWZvcm0nKTtcclxuICAgIGlmIChlYUZvcm0pIHtcclxuICAgICAgZWFGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbmZpZ1RvU2F2ZSA9IHsgLi4udGhpcy5jb25maWcgfTtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ1RvU2F2ZS5lbWFpbHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgY29uZmlnVG9TYXZlLmVtYWlscyA9IGNvbmZpZ1RvU2F2ZS5lbWFpbHMuc3BsaXQoJywnKS5tYXAoZW1haWwgPT4gZW1haWwudHJpbSgpKS5maWx0ZXIoZSA9PiBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluamVjdCBTY2hlbWEgRGF0YVxyXG4gICAgICAgIGxldCBzY2hlbWFJbnB1dCA9IGVhRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2NoZW1hRGF0YVwiXScpO1xyXG4gICAgICAgIGlmICghc2NoZW1hSW5wdXQpIHtcclxuICAgICAgICAgIHNjaGVtYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgIHNjaGVtYUlucHV0LnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICAgIHNjaGVtYUlucHV0Lm5hbWUgPSAnc2NoZW1hRGF0YSc7XHJcbiAgICAgICAgICBlYUZvcm0uYXBwZW5kQ2hpbGQoc2NoZW1hSW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2hlbWFJbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKTtcclxuXHJcbiAgICAgICAgLy8gSW5qZWN0IENvbmZpZ3VyYXRpb25cclxuICAgICAgICBsZXQgY29uZmlnSW5wdXQgPSBlYUZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNvbmZpZ3VyYXRpb25cIl0nKTtcclxuICAgICAgICBpZiAoIWNvbmZpZ0lucHV0KSB7XHJcbiAgICAgICAgICBjb25maWdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICBjb25maWdJbnB1dC50eXBlID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICBjb25maWdJbnB1dC5uYW1lID0gJ2NvbmZpZ3VyYXRpb24nO1xyXG4gICAgICAgICAgZWFGb3JtLmFwcGVuZENoaWxkKGNvbmZpZ0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlnSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShjb25maWdUb1NhdmUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdlbmVyYXRlSWQoKSB7XHJcbiAgICAgIHJldHVybiAnaWRfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4KSB7XHJcbiAgICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSBpbmRleDtcclxuICAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZCA9IG51bGw7XHJcbiAgICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdzdGVwJztcclxuICAgIH0sXHJcbiAgICBhZGRTdGVwKCkge1xyXG4gICAgICAgdGhpcy5zY2hlbWEuc3RlcHMucHVzaCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZUlkKCksXHJcbiAgICAgICAgICB0aXRsZTogJ05vdXZlbGxlIMOJdGFwZScsXHJcbiAgICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogeyBlbmFibGVkOiBmYWxzZSwgYWN0aW9uVHlwZTogJ3Nob3cnLCBtYXRjaFR5cGU6ICdhbGwnLCBydWxlczogW10gfVxyXG4gICAgICAgfSk7XHJcbiAgICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLnNjaGVtYS5zdGVwcy5sZW5ndGggLSAxO1xyXG4gICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnc3RlcCc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlU3RlcChpbmRleCkge1xyXG4gICAgICAgaWYgKGNvbmZpcm0oJ1ZvdWxlei12b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSDDqXRhcGUgZXQgdG91cyBzZXMgY2hhbXBzID8nKSkge1xyXG4gICAgICAgICAgIHRoaXMuc2NoZW1hLnN0ZXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXBJbmRleCA+PSB0aGlzLnNjaGVtYS5zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy5zY2hlbWEuc3RlcHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xvbmVFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZUlkKCksXHJcbiAgICAgICAgdHlwZTogZWxlbWVudC50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgd2lkdGg6ICcxMicsIC8vIGRlZmF1bHQgMTAwJSB3aWR0aFxyXG4gICAgICAgIG1pbjogJycsXHJcbiAgICAgICAgbWF4OiAnJyxcclxuICAgICAgICBzdGVwOiAnJyxcclxuICAgICAgICBtaW5MZW5ndGg6ICcnLFxyXG4gICAgICAgIG1heExlbmd0aDogJycsXHJcbiAgICAgICAgbWluRGF0ZTogJycsXHJcbiAgICAgICAgbWF4RGF0ZTogJycsXHJcbiAgICAgICAgYWxsb3dlZEV4dGVuc2lvbnM6ICcnLFxyXG4gICAgICAgIG1heFNpemVNYjogJzUnLFxyXG4gICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IHsgZW5hYmxlZDogZmFsc2UsIGFjdGlvblR5cGU6ICdzaG93JywgbWF0Y2hUeXBlOiAnYWxsJywgcnVsZXM6IFtdIH0sXHJcbiAgICAgICAgY29udGVudDogZWxlbWVudC50eXBlID09PSAncGFyYWdyYXBoJyA/ICc8cD5Wb3RyZSB0ZXh0ZSBpY2kuLi48L3A+JyA6ICcnLFxyXG4gICAgICAgIG9wdGlvbnM6IFsnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5jbHVkZXMoZWxlbWVudC50eXBlKSA/IFt7bGFiZWw6ICdPcHRpb24gMScsIHZhbHVlOiAnT3B0aW9uIDEnfV0gOiBbXVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNlbGVjdEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdmaWVsZCc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmllbGQoaW5kZXgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RlcC5maWVsZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWVsZCAmJiAhdGhpcy5jdXJyZW50U3RlcC5maWVsZHMuaW5jbHVkZXModGhpcy5zZWxlY3RlZEZpZWxkKSkge1xyXG4gICAgICAgICB0aGlzLnNlbGVjdGVkRmllbGQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFJ1bGUoY29uZGl0aW9uYWxMb2dpY09iaikge1xyXG4gICAgICAgY29uZGl0aW9uYWxMb2dpY09iai5ydWxlcy5wdXNoKHsgZmllbGRJZDogJycsIG9wZXJhdG9yOiAnZXF1YWxzJywgdmFsdWU6ICcnIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVJ1bGUoY29uZGl0aW9uYWxMb2dpY09iaiwgaW5kZXgpIHtcclxuICAgICAgIGNvbmRpdGlvbmFsTG9naWNPYmoucnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmZvcm0tYnVpbGRlci1hcHAge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jdXJzb3ItZ3JhYiB7XHJcbiAgY3Vyc29yOiBncmFiO1xyXG59XHJcbi5jdXJzb3ItZ3JhYjphY3RpdmUge1xyXG4gIGN1cnNvcjogZ3JhYmJpbmc7XHJcbn1cclxuLmN1cnNvci1wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1haW4tY2FudmFzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY5O1xyXG59XHJcbi5taW4tdmgtNTAge1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuLnotaW5kZXgtMiB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uZmllbGQtd3JhcHBlciB7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzLCBib3JkZXItY29sb3IgMC4ycztcclxufVxyXG4uZmllbGQtd3JhcHBlcjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwLTAgZm9ybS1idWlsZGVyLWFwcCB0ZXh0LXN0YXJ0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBnLTBcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBiZy1saWdodCBwLTMgYm9yZGVyLWVuZFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbX3ZtLl92KFwiw4lsw6ltZW50cyBkaXNwb25pYmxlc1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxlbWVudHMtbGlzdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBsaXN0OiBfdm0uYXZhaWxhYmxlRWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICBncm91cDogeyBuYW1lOiBcImZpZWxkc1wiLCBwdWxsOiBcImNsb25lXCIsIHB1dDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgIGNsb25lOiBfdm0uY2xvbmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlRWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBlbGVtZW50LnR5cGUsIHN0YXRpY0NsYXNzOiBcImNhcmQgbWItMiBjdXJzb3ItZ3JhYlwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWUtMiB0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBlbGVtZW50Lmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGVsZW1lbnQubGFiZWwpICsgXCJcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02IHAtNCBiZy13aGl0ZSBtYWluLWNhbnZhc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzIG1iLTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zY2hlbWEuc3RlcHMsIGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IHN0ZXAuaWQsIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudFN0ZXBJbmRleCA9PT0gaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RTdGVwKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHN0ZXAudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjaGVtYS5zdGVwcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhIGZhLXRpbWVzIHRleHQtZGFuZ2VyIG1zLTIgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVTdGVwKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBjdXJzb3ItcG9pbnRlciBiZy1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkU3RlcCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cyB0ZXh0LXN1Y2Nlc3NcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQWpvdXRlciDDiXRhcGVcIiksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgYm9yZGVyIHAtMyBiZy1saWdodCBtLTAgcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxpc3Q6IF92bS5jdXJyZW50U3RlcC5maWVsZHMsIGdyb3VwOiBcImZpZWxkc1wiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmN1cnJlbnRTdGVwLmZpZWxkcywgZnVuY3Rpb24gKGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwLTIgY29sLW1kLVwiICsgKGZpZWxkLndpZHRoIHx8IDEyKSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RGaWVsZChmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZC13cmFwcGVyIHAtMyBib3JkZXIgcm91bmRlZCBiZy13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXByaW1hcnkgc2hhZG93XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQuaWQgPT09IGZpZWxkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBlbmQtMCBwLTEgei1pbmRleC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWRhbmdlciBib3JkZXItMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVGaWVsZChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGV4dFwiLCBcImVtYWlsXCIsIFwicGhvbmVcIl0uaW5jbHVkZXMoZmllbGQudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWVsZC5sYWJlbCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIqXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09PSBcInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IGZpZWxkLm1pbkxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogZmllbGQubWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWVsZC5sYWJlbCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIqXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBmaWVsZC5taW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGZpZWxkLm1heCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZpZWxkLnN0ZXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmllbGQubGFiZWwpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQucmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiKlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiBmaWVsZC5taW5MZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJkYXRlXCIsIFwidGltZVwiXS5pbmNsdWRlcyhmaWVsZC50eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpZWxkLmxhYmVsKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIipcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IGZpZWxkLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGZpZWxkLm1heERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWVsZC5sYWJlbCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIqXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBkaXNhYmxlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpZWxkLmxhYmVsKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIipcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmaWVsZC5vcHRpb25zLCBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBrZXk6IG9wdC52YWx1ZSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mob3B0LmxhYmVsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWVsZC5sYWJlbCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiKlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmllbGQub3B0aW9ucywgZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBvcHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG9wdC5sYWJlbCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT09IFwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmllbGQubGFiZWwpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIipcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZpZWxkLm9wdGlvbnMsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogb3B0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhvcHQubGFiZWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09PSBcInBhcmFncmFwaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoZmllbGQuY29udGVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNvbmRpdGlvbmFsTG9naWMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY29uZGl0aW9uYWxMb2dpYy5lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC0yIHRleHQtZW5kIHRleHQtd2FybmluZyBzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY29kZS1icmFuY2hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBMb2dpcXVlIGNvbmRpdGlvbm5lbGxlIGFjdGl2ZVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRTdGVwLmZpZWxkcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkIHB5LTVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgw4l0YXBlIHZpZGUuIETDqXBvc2V6IGRlcyDDqWzDqW1lbnRzIGljaS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBiZy1saWdodCBwLTMgYm9yZGVyLXN0YXJ0IG92ZXJmbG93LWF1dG9cIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LWhlaWdodFwiOiBcIjEwMHZoXCIgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnMgbWItMyBuYXYtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGN1cnNvci1wb2ludGVyIHAtMlwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmVUYWIgPT09IFwiZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID0gXCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hhbXBcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBjdXJzb3ItcG9pbnRlciBwLTJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlVGFiID09PSBcInN0ZXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID0gXCJzdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLDiXRhcGVcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBjdXJzb3ItcG9pbnRlciBwLTJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlVGFiID09PSBcImZvcm1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID0gXCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHw6luw6lyYWxcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWN0aXZlVGFiID09PSBcImZpZWxkXCJcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGliZWxsw6kgKExhYmVsKVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAhW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFncmFwaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoX3ZtLnNlbGVjdGVkRmllbGQudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUZXh0ZSBpbmRpY2F0aWYgKFBsYWNlaG9sZGVyKVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5wbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQudHlwZSAhPT0gXCJwYXJhZ3JhcGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggYm9yZGVyIHAtMiByb3VuZGVkIGJnLXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZEZpZWxkLnJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJyZXFfXCIgKyBfdm0uc2VsZWN0ZWRGaWVsZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnNlbGVjdGVkRmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5zZWxlY3RlZEZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I6IFwicmVxX1wiICsgX3ZtLnNlbGVjdGVkRmllbGQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNoYW1wIHJlcXVpc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1widGV4dFwiLCBcInRleHRhcmVhXCIsIFwiZW1haWxcIl0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTG9uZy4gbWluXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubWluTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5taW5MZW5ndGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5taW5MZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbkxlbmd0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMb25nLiBtYXhcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5tYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZEZpZWxkLm1heExlbmd0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLm1heExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4TGVuZ3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLnR5cGUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWluXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5taW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5taW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWF4XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5tYXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5tYXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUGFzIChTdGVwKVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLnN0ZXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZEZpZWxkLnN0ZXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5zdGVwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxhaXNzZXogdmlkZSBwb3VyIGF1Y3VuZSByZXN0cmljdGlvbi5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImRhdGVcIiwgXCJ0aW1lXCJdLmluY2x1ZGVzKF92bS5zZWxlY3RlZEZpZWxkLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1pblwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5taW5EYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZC5taW5EYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5zZWxlY3RlZEZpZWxkLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uc2VsZWN0ZWRGaWVsZC5taW5EYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgkJGkgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uc2VsZWN0ZWRGaWVsZC50eXBlID09PSBcInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubWluRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZEZpZWxkLm1pbkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZC5taW5EYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5EYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5taW5EYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogX3ZtLnNlbGVjdGVkRmllbGQudHlwZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubWluRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNYXhcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5tYXhEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkRmllbGQubWF4RGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZC5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQubWF4RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uc2VsZWN0ZWRGaWVsZC5tYXhEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnNlbGVjdGVkRmllbGQubWF4RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heERhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoJCRpICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnNlbGVjdGVkRmllbGQudHlwZSA9PT0gXCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLm1heERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5tYXhEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQubWF4RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4RGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5tYXhEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkRmllbGQubWF4RGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IF92bS5zZWxlY3RlZEZpZWxkLnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLm1heERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQudHlwZSA9PT0gXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkV4dGVuc2lvbnMgYXV0b3Jpc8OpZXMgKHPDqXBhcsOpZXMgcGFyIGRlcyB2aXJndWxlcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLmFsbG93ZWRFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkRmllbGQuYWxsb3dlZEV4dGVuc2lvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIucGRmLCAuanBnLCAuanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLmFsbG93ZWRFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxvd2VkRXh0ZW5zaW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGFpbGxlIG1heCAoZW4gTW8pXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQubWF4U2l6ZU1iLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5tYXhTaXplTWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIHBsYWNlaG9sZGVyOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLm1heFNpemVNYixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4U2l6ZU1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLnR5cGUgPT09IFwicGFyYWdyYXBoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250ZW51IEhUTUxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkRmllbGQuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC5jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VsZWN0ZWRGaWVsZC5jb250ZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWxhYmVsIGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPcHRpb25zIGR1IGNoYW1wXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAob3B0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggbWItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9wdC5sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbWUtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk5vbSBkZSBsJ29wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBvcHQubGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gb3B0LmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RlZEZpZWxkLm9wdGlvbnMuc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5IHctMTAwIG10LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RlZEZpZWxkLm9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOb3V2ZWxsZSBvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5vdXZlbGxlIG9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFqb3V0ZXIgdW5lIG9wdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkxhcmdldXIgKENvbG9ubmVzKVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZEZpZWxkLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRGaWVsZC53aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMDAlIChQbGVpbmUgbGFyZ2V1cilcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNTAlIChNb2l0acOpKVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzMyUgKFVuIHRpZXJzKVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyNSUgKFVuIHF1YXJ0KVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTMgYm9yZGVyLXRvcCBwdC0zIG10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbmRfXCIgKyBfdm0uc2VsZWN0ZWRGaWVsZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5zZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2stbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogXCJjb25kX1wiICsgX3ZtLnNlbGVjdGVkRmllbGQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdGl2ZXIgbGVzIGNvbmRpdGlvbnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkLmNvbmRpdGlvbmFsTG9naWMuZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIHAtMiBib3JkZXIgcm91bmRlZCBzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25kaXRpb25hbExvZ2ljLmFjdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLmFjdGlvblR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbSBkLWlubGluZS1ibG9jayB3LWF1dG8gbWUtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25UeXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwic2hvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFmZmljaGVyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJoaWRlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWFzcXVlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgY2UgY2hhbXAgc2kgXFxuICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZGl0aW9uYWxMb2dpYy5tYXRjaFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLm1hdGNoVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtIGQtaW5saW5lLWJsb2NrIHctYXV0byBtcy0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGNoVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcImFsbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInRvdXRlc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiYW55XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiYXUgbW9pbnMgdW5lXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBjb25kaXRpb24ocykgOlxcbiAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocnVsZSwgckluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItMiBib3JkZXItYm90dG9tIHBiLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlLmZpZWxkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlLmZpZWxkSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbSBtYi0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS0gQ2hvaXNpciB1biBjaGFtcCAtLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hbGxGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhmLmxhYmVsKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGUub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlLm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtIG1lLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImVxdWFsc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFc3RcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJub3RfZXF1YWxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk4nZXN0IHBhc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImNvbnRhaW5zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbnRpZW50XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlLnZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiVmFsZXVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5jb21wb3NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc20gYnRuLW91dGxpbmUtZGFuZ2VyIG1zLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVSdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBySW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhIGZhLXRpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnkgdy0xMDAgbXQtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFJ1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmllbGQuY29uZGl0aW9uYWxMb2dpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFqb3V0ZXIgdW5lIHLDqGdsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtaW5mbyBweS0yIHNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbW91c2UtcG9pbnRlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQ2xpcXVleiBzdXIgdW4gY2hhbXAgYXUgY2VudHJlIHBvdXIgbW9kaWZpZXIgc2VzIHBhcmFtw6h0cmVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFjdGl2ZVRhYiA9PT0gXCJzdGVwXCJcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRpdHJlIGRlIGwnw6l0YXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudFN0ZXAudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudFN0ZXAudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3VycmVudFN0ZXAudGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRTdGVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTMgYm9yZGVyLXRvcCBwdC0zIG10LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbmRfc3RlcF9cIiArIF92bS5jdXJyZW50U3RlcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYy5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiY29uZF9zdGVwX1wiICsgX3ZtLmN1cnJlbnRTdGVwLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdGl2ZXIgbGVzIGNvbmRpdGlvbnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLmVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlIHAtMiBib3JkZXIgcm91bmRlZCBzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRTdGVwLmNvbmRpdGlvbmFsTG9naWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYy5hY3Rpb25UeXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtIGQtaW5saW5lLWJsb2NrIHctYXV0byBtZS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcInNob3dcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFmZmljaGVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJoaWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYXNxdWVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIGNldHRlIMOpdGFwZSBzaSBcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0Y2hUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudFN0ZXAuY29uZGl0aW9uYWxMb2dpYy5tYXRjaFR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc20gZC1pbmxpbmUtYmxvY2sgdy1hdXRvIG1zLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hUeXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJhbGxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcInRvdXRlc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiYW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJhdSBtb2lucyB1bmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgY29uZGl0aW9uKHMpIDpcXG4gICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJ1bGUsIHJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgYm9yZGVyLWJvdHRvbSBwYi0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGUuZmllbGRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlLmZpZWxkSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc20gbWItMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItLSBDaG9pc2lyIHVuIGNoYW1wIC0tXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbGxGaWVsZHMsIGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGYuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGYuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZi5sYWJlbCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcnVsZS5vcGVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJ1bGUub3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbSBtZS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJlcXVhbHNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFc3RcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIm5vdF9lcXVhbHNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOJ2VzdCBwYXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcImNvbnRhaW5zXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGllbnRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcnVsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlLnZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJWYWxldXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBydWxlLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWRhbmdlciBtcy0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlUnVsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnkgdy0xMDAgbXQtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFJ1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50U3RlcC5jb25kaXRpb25hbExvZ2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFqb3V0ZXIgdW5lIHLDqGdsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFjdGl2ZVRhYiA9PT0gXCJmb3JtXCJcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1lc3NhZ2UgZGUgc3VjY8Ooc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmZpZy5zdWNjZXNzTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maWcuc3VjY2Vzc01lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29uZmlnLnN1Y2Nlc3NNZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzTWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW1haWwocykgZGUgbm90aWZpY2F0aW9uXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlnLmVtYWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maWcuZW1haWxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiY29udGFjdEBleGFtcGxlLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb25maWcuZW1haWxzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb25maWcsIFwiZW1haWxzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTw6lwYXLDqXMgcGFyIGRlcyB2aXJndWxlc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdignVGV4dGUgZHUgYm91dG9uIFwiU3VpdmFudFwiJyldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb25maWcubmV4dFRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlnLm5leHRUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlN1aXZhbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29uZmlnLm5leHRUZXh0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb25maWcsIFwibmV4dFRleHRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWwgZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdignVGV4dGUgZHUgYm91dG9uIFwiUHLDqWPDqWRlbnRcIicpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlnLnByZXZUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbmZpZy5wcmV2VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJQcsOpY8OpZGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb25maWcucHJldlRleHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbmZpZywgXCJwcmV2VGV4dFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbCBmb250LXdlaWdodC1ib2xkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGV4dGUgZHUgYm91dG9uIGZpbmFsIChTdWJtaXQpXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlnLnN1Ym1pdFRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlnLnN1Ym1pdFRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW52b3llclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb25maWcuc3VibWl0VGV4dCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3VibWl0VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTQgdGV4dC1tdXRlZCBzbWFsbFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWluZm8tY2lyY2xlXCIgfSksXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiIEdsaXNzZXogZXQgZMOpcG9zZXogY2VzIMOpbMOpbWVudHMgc3VyIGxhIHpvbmUgZGUgY29uc3RydWN0aW9uIHPDqWxlY3Rpb25uw6llIGF1IGNlbnRyZS5cXG4gICAgICBcIlxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiIH0sXG4gICAgICBbX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiWm9uZSBkZSBjb25zdHJ1Y3Rpb25cIildKV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvZGUtYnJhbmNoXCIgfSksXG4gICAgICBfdm0uX3YoXCIgTG9naXF1ZSBDb25kaXRpb25uZWxsZVwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jb2RlLWJyYW5jaFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIExvZ2lxdWUgQ29uZGl0aW9ubmVsbGUgKMOJdGFwZSlcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIFApIHtcbiAgaWYgKCFkZWxldGUgT1tQXSkgdGhyb3cgJFR5cGVFcnJvcignQ2Fubm90IGRlbGV0ZSBwcm9wZXJ0eSAnICsgdHJ5VG9TdHJpbmcoUCkgKyAnIG9mICcgKyB0cnlUb1N0cmluZyhPKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1hc3NpZ24gLS0gc2FmZVxudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHNob3VsZCBoYXZlIGNvcnJlY3Qgb3JkZXIgb2Ygb3BlcmF0aW9ucyAoRWRnZSBidWcpXG4gIGlmIChERVNDUklQVE9SUyAmJiAkYXNzaWduKHsgYjogMSB9LCAkYXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zeW1ib2wgLS0gc2FmZVxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG4gIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xuICAgIHZhciBTID0gSW5kZXhlZE9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KG9iamVjdEtleXMoUyksIGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlLCBTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKClcbiAgICAgIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPT0gbm9uXG4gICAgICB8fCAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUgfSwge1xuICBpc0FycmF5OiBpc0FycmF5XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgRk9SQ0VEID0gRVMzX1NUUklOR1MgfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbih0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpLmY7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgIT09IGRlZmluZVByb3BlcnRpZXMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIEZPUkNFRCA9ICFERVNDUklQVE9SUyB8fCBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0luZGV4ZWRPYmplY3QoaXQpLCBrZXkpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgICB2YXIga2V5cyA9IG93bktleXMoTyk7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGtleSwgZGVzY3JpcHRvcjtcbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBrZXkgPSBrZXlzW2luZGV4KytdKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTBhZGJmMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NTBhZGJmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTUwYWRiZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU1MGFkYmYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU1MGFkYmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU1MGFkYmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1MGFkYmYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1MGFkYmYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvZm9ybS1idWlsZGVyL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUwYWRiZjImc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU1MGFkYmYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sIm5hbWVzIjpbIlZ1ZSIsIkFwcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU2NoZW1hIiwiZGF0YXNldCIsInNjaGVtYSIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxDb25maWciLCJjb25maWciLCJyZW5kZXIiLCJoIiwicHJvcHMiLCIkbW91bnQiLCJkcmFnZ2FibGUiLCJjb21wb25lbnRzIiwidHlwZSIsIk9iamVjdCIsImRhdGEiLCJhY3RpdmVUYWIiLCJjdXJyZW50U3RlcEluZGV4Iiwic2VsZWN0ZWRGaWVsZCIsInN0ZXBzIiwiaWQiLCJ0aXRsZSIsImZpZWxkcyIsImNvbmRpdGlvbmFsTG9naWMiLCJlbmFibGVkIiwiYWN0aW9uVHlwZSIsIm1hdGNoVHlwZSIsInJ1bGVzIiwic3VjY2Vzc01lc3NhZ2UiLCJlbWFpbHMiLCJuZXh0VGV4dCIsInByZXZUZXh0Iiwic3VibWl0VGV4dCIsImF2YWlsYWJsZUVsZW1lbnRzIiwibGFiZWwiLCJpY29uIiwiY29tcHV0ZWQiLCJjdXJyZW50U3RlcCIsImFsbEZpZWxkcyIsImZvckVhY2giLCJzdGVwIiwiY29uY2F0IiwibW91bnRlZCIsIl90aGlzIiwibWFwIiwiZiIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJlYUZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiZSIsImNvbmZpZ1RvU2F2ZSIsIl9vYmplY3RTcHJlYWQiLCJzcGxpdCIsImVtYWlsIiwidHJpbSIsImZpbHRlciIsInNjaGVtYUlucHV0IiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwic3RyaW5naWZ5IiwiY29uZmlnSW5wdXQiLCJtZXRob2RzIiwiZ2VuZXJhdGVJZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInNlbGVjdFN0ZXAiLCJpbmRleCIsImFkZFN0ZXAiLCJwdXNoIiwibGVuZ3RoIiwicmVtb3ZlU3RlcCIsImNvbmZpcm0iLCJzcGxpY2UiLCJjbG9uZUVsZW1lbnQiLCJlbGVtZW50IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIndpZHRoIiwibWluIiwibWF4IiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluRGF0ZSIsIm1heERhdGUiLCJhbGxvd2VkRXh0ZW5zaW9ucyIsIm1heFNpemVNYiIsImNvbnRlbnQiLCJvcHRpb25zIiwiaW5jbHVkZXMiLCJzZWxlY3RGaWVsZCIsImZpZWxkIiwicmVtb3ZlRmllbGQiLCJhZGRSdWxlIiwiY29uZGl0aW9uYWxMb2dpY09iaiIsImZpZWxkSWQiLCJvcGVyYXRvciIsInJlbW92ZVJ1bGUiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsImF0dHJzIiwibGlzdCIsImdyb3VwIiwicHVsbCIsInB1dCIsImNsb25lIiwiX2wiLCJrZXkiLCJfcyIsIl9tIiwiYWN0aXZlIiwib24iLCJjbGljayIsIiRldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIl9lIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwiZGlzYWJsZWQiLCJvcHQiLCJkb21Qcm9wcyIsImlubmVySFRNTCIsInN0YXRpY1N0eWxlIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJleHByZXNzaW9uIiwiaW5wdXQiLCJ0YXJnZXQiLCJjb21wb3NpbmciLCIkc2V0IiwiY2hlY2tlZCIsIl9pIiwiY2hhbmdlIiwiJCRhIiwiJCRlbCIsIiQkYyIsIiQkdiIsIiQkaSIsInNsaWNlIiwiX3EiLCJyb3dzIiwiJCRzZWxlY3RlZFZhbCIsInByb3RvdHlwZSIsImNhbGwiLCJvIiwic2VsZWN0ZWQiLCJ2YWwiLCJfdmFsdWUiLCJtdWx0aXBsZSIsInJ1bGUiLCJySW5kZXgiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sInNvdXJjZVJvb3QiOiIifQ==