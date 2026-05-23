"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["file-selector"],{

/***/ "./assets/file-manager/file-icons.js":
/*!*******************************************!*\
  !*** ./assets/file-manager/file-icons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFileIcon: () => (/* binding */ getFileIcon),
/* harmony export */   getFileIconClass: () => (/* binding */ getFileIconClass)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Utilitaires pour la gestion des icônes de fichiers
 */

/**
 * Retourne la classe d'icône Font Awesome pour un fichier ou dossier
 * @param {Object} item - Fichier ou dossier
 * @returns {string} - Classe Font Awesome
 */
function getFileIcon(item) {
  // Dossier
  if (item.type === 'folder') {
    return 'fa fa-folder';
  }

  // Archives
  if (item.extension === 'zip' || item.extension === 'rar' || item.extension === '7z' || item.extension === 'tar' || item.extension === 'gz') {
    return 'fa fa-file-archive';
  }

  // PDF
  if (item.extension === 'pdf' || item.isPdf) {
    return 'fa fa-file-pdf';
  }

  // Documents Word
  if (item.extension === 'doc' || item.extension === 'docx' || item.extension === 'odt') {
    return 'fa fa-file-word';
  }

  // Feuilles de calcul Excel
  if (item.extension === 'xls' || item.extension === 'xlsx' || item.extension === 'ods') {
    return 'fa fa-file-excel';
  }

  // Présentations PowerPoint
  if (item.extension === 'ppt' || item.extension === 'pptx' || item.extension === 'odp') {
    return 'fa fa-file-powerpoint';
  }

  // Fichiers texte
  if (item.extension === 'txt' || item.isText) {
    return 'fa fa-file-alt';
  }

  // Images
  if (item.isImage || ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].includes(item.extension)) {
    return 'fa fa-image';
  }

  // Vidéos
  if (item.isVideo || ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'].includes(item.extension)) {
    return 'fa fa-video';
  }

  // Audio
  if (['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a'].includes(item.extension)) {
    return 'fa fa-file-audio';
  }

  // Code
  if (['html', 'css', 'js', 'php', 'py', 'java', 'cpp', 'c', 'h', 'json', 'xml', 'yml', 'yaml'].includes(item.extension)) {
    return 'fa fa-file-code';
  }

  // Fichier générique
  return 'fa fa-file';
}

/**
 * Retourne la classe CSS pour colorer l'icône selon le type de fichier
 * @param {Object} item - Fichier ou dossier
 * @returns {string} - Classe CSS
 */
function getFileIconClass(item) {
  // Dossier
  if (item.type === 'folder') {
    return 'file-item__icon--folder';
  }

  // Archives
  if (item.extension === 'zip' || item.extension === 'rar' || item.extension === '7z' || item.extension === 'tar' || item.extension === 'gz') {
    return 'file-item__icon--archive';
  }

  // PDF
  if (item.extension === 'pdf' || item.isPdf) {
    return 'file-item__icon--pdf';
  }

  // Documents Word
  if (item.extension === 'doc' || item.extension === 'docx' || item.extension === 'odt') {
    return 'file-item__icon--word';
  }

  // Feuilles de calcul Excel
  if (item.extension === 'xls' || item.extension === 'xlsx' || item.extension === 'ods') {
    return 'file-item__icon--excel';
  }

  // Présentations PowerPoint
  if (item.extension === 'ppt' || item.extension === 'pptx' || item.extension === 'odp') {
    return 'file-item__icon--powerpoint';
  }

  // Fichiers texte
  if (item.extension === 'txt' || item.isText) {
    return 'file-item__icon--text';
  }

  // Images
  if (item.isImage || ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].includes(item.extension)) {
    return 'file-item__icon--image';
  }

  // Vidéos
  if (item.isVideo || ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'].includes(item.extension)) {
    return 'file-item__icon--video';
  }

  // Audio
  if (['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a'].includes(item.extension)) {
    return 'file-item__icon--audio';
  }

  // Code
  if (['html', 'css', 'js', 'php', 'py', 'java', 'cpp', 'c', 'h', 'json', 'xml', 'yml', 'yaml'].includes(item.extension)) {
    return 'file-item__icon--code';
  }

  // Fichier générique
  return 'file-item__icon--file';
}

/***/ }),

/***/ "./assets/file-selector/file-selector.js":
/*!***********************************************!*\
  !*** ./assets/file-selector/file-selector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _FileSelector_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelector.vue */ "./assets/file-selector/FileSelector.vue");
/* harmony import */ var _file_selector_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-selector.scss */ "./assets/file-selector/file-selector.scss");



document.addEventListener('DOMContentLoaded', function () {
  var appElement = document.getElementById('file-selector-app');
  if (!appElement) return;

  // Get CSRF token
  var csrfToken = window.FILE_SELECTOR_CSRF_TOKEN || (appElement === null || appElement === void 0 ? void 0 : appElement.getAttribute('data-csrf-token')) || '';
  if (!csrfToken) {
    console.error('CSRF token not found for file selector!');
  }
  var app = new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
    el: '#file-selector-app',
    components: {
      FileSelector: _FileSelector_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    data: function data() {
      return {
        csrfToken: csrfToken
      };
    },
    template: '<FileSelector :csrf-token="csrfToken" />'
  });
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _file_manager_file_icons_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../file-manager/file-icons.js */ "./assets/file-manager/file-icons.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FileSelector',
  props: {
    csrfToken: {
      type: String,
      required: true
    },
    acceptedTypes: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentFolder: null,
      folders: [],
      files: [],
      breadcrumb: [],
      searchQuery: '',
      selectedFile: null,
      loading: false
    };
  },
  computed: {
    // Plus besoin de computed properties, la recherche se fait côté API
  },
  mounted: function mounted() {
    this.loadRoot();
  },
  methods: {
    getFileIcon: _file_manager_file_icons_js__WEBPACK_IMPORTED_MODULE_33__.getFileIcon,
    getFileIconClass: function getFileIconClass(item) {
      // Mapper les classes du file-manager vers les classes du file-selector
      var baseClass = (0,_file_manager_file_icons_js__WEBPACK_IMPORTED_MODULE_33__.getFileIconClass)(item);
      return baseClass.replace('file-item__icon--', 'file-selector__icon--');
    },
    loadRoot: function loadRoot() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.currentFolder = null;
              _this.breadcrumb = [];
              _context.next = 4;
              return _this.loadFolder(null);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadFolder: function loadFolder(folderId) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, response, data, filesToShow;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _this2.selectedFile = null;
              _context2.prev = 2;
              // Utiliser la route /api/files avec le paramètre folderId
              url = folderId ? "/api/files?folderId=".concat(folderId) : '/api/files';
              _context2.next = 6;
              return fetch(url, {
                headers: {
                  'X-CSRF-Token': _this2.csrfToken
                }
              });
            case 6:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 9;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 9:
              _context2.next = 11;
              return response.json();
            case 11:
              data = _context2.sent;
              _this2.folders = data.folders || [];

              // Filtrer les fichiers selon les types acceptés
              filesToShow = data.files || [];
              if (_this2.acceptedTypes && _this2.acceptedTypes.length > 0) {
                filesToShow = filesToShow.filter(function (file) {
                  if (!file.mimeType) return false;
                  return _this2.acceptedTypes.some(function (acceptedType) {
                    if (acceptedType.endsWith('/*')) {
                      // Wildcard match (ex: image/*)
                      var baseType = acceptedType.slice(0, -2);
                      return file.mimeType.startsWith(baseType + '/');
                    }
                    return file.mimeType === acceptedType;
                  });
                });
              } else {
                // Par défaut, ne garder que les images si aucun type accepté n'est spécifié
                filesToShow = filesToShow.filter(function (f) {
                  return f.mimeType && f.mimeType.startsWith('image/');
                });
              }
              _this2.files = filesToShow;
              _this2.currentFolder = data.currentFolder || null;
              _this2.breadcrumb = data.breadcrumb || [];
              _context2.next = 24;
              break;
            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](2);
              console.error('Erreur de chargement:', _context2.t0);
              alert('Erreur lors du chargement des fichiers');
            case 24:
              _context2.prev = 24;
              _this2.loading = false;
              return _context2.finish(24);
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 20, 24, 27]]);
      }))();
    },
    navigateToFolder: function navigateToFolder(folderId) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.loadFolder(folderId);
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    goBack: function goBack() {
      if (this.currentFolder && this.currentFolder.parentFolderId !== null && this.currentFolder.parentFolderId !== undefined) {
        // Aller au dossier parent
        this.navigateToFolder(this.currentFolder.parentFolderId);
      } else {
        // Retour à la racine
        this.loadRoot();
      }
    },
    getFilePreviewUrl: function getFilePreviewUrl(fileId) {
      return "/api/files/".concat(fileId, "/preview");
    },
    handleImageError: function handleImageError(event) {
      // Si l'image ne charge pas, afficher une icône par défaut
      event.target.style.display = 'none';
      var parent = event.target.parentElement;
      if (parent && !parent.querySelector('.file-selector__error-icon')) {
        var icon = document.createElement('i');
        icon.className = 'fa fa-image file-selector__error-icon';
        parent.appendChild(icon);
      }
    },
    selectFile: function selectFile(file) {
      this.selectedFile = file;
    },
    handleContentClick: function handleContentClick(event) {
      // Si on clique sur le contenu (pas sur un item), désélectionner
      var target = event.target;
      var currentTarget = event.currentTarget;

      // Si on clique directement sur le conteneur content
      if (target === currentTarget) {
        this.selectedFile = null;
        return;
      }

      // Si on clique sur l'élément empty
      if (target.closest('.file-selector__empty')) {
        this.selectedFile = null;
        return;
      }

      // Si on clique sur la grille mais pas sur un item (espace entre les items)
      var clickedItem = target.closest('.file-selector__item');
      if (!clickedItem) {
        // On a cliqué sur la grille mais pas sur un item
        var grid = target.closest('.file-selector__grid');
        if (grid) {
          this.selectedFile = null;
        }
      }
    },
    confirmSelection: function confirmSelection(file) {
      if (!file.mimeType || !file.mimeType.startsWith('image/')) {
        alert('Veuillez sélectionner une image');
        return;
      }

      // Envoyer au parent
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'filemanager-selection',
          file: {
            id: file.id,
            name: file.name,
            path: file.path,
            mimeType: file.mimeType,
            size: file.size
          }
        }, '*');
      }
    },
    handleSearch: function handleSearch() {
      if (this.searchQuery) {
        this.performSearch(this.searchQuery);
      } else {
        // Si la recherche est vide, recharger le dossier actuel
        if (this.currentFolder) {
          this.loadFolder(this.currentFolder.id);
        } else {
          this.loadRoot();
        }
      }
    },
    performSearch: function performSearch(query) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this4$currentFolder, folderId, params, response, data, filesToShow;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.loading = true;
              _this4.selectedFile = null;
              _context4.prev = 2;
              // Inclure le dossier courant dans la recherche si on est dans un dossier
              folderId = ((_this4$currentFolder = _this4.currentFolder) === null || _this4$currentFolder === void 0 ? void 0 : _this4$currentFolder.id) || null;
              params = new URLSearchParams({
                q: query
              });
              if (folderId) {
                params.append('folderId', folderId);
              }
              _context4.next = 8;
              return fetch("/api/files/search?".concat(params.toString()), {
                headers: {
                  'X-CSRF-Token': _this4.csrfToken
                }
              });
            case 8:
              response = _context4.sent;
              if (response.ok) {
                _context4.next = 11;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 11:
              _context4.next = 13;
              return response.json();
            case 13:
              data = _context4.sent;
              // Filtrer les fichiers selon les types acceptés
              filesToShow = data.files || [];
              if (_this4.acceptedTypes && _this4.acceptedTypes.length > 0) {
                filesToShow = filesToShow.filter(function (file) {
                  if (!file.mimeType) return false;
                  return _this4.acceptedTypes.some(function (acceptedType) {
                    if (acceptedType.endsWith('/*')) {
                      // Wildcard match (ex: image/*)
                      var baseType = acceptedType.slice(0, -2);
                      return file.mimeType.startsWith(baseType + '/');
                    }
                    return file.mimeType === acceptedType;
                  });
                });
              } else {
                // Par défaut, ne garder que les images si aucun type accepté n'est spécifié
                filesToShow = filesToShow.filter(function (f) {
                  return f.mimeType && f.mimeType.startsWith('image/');
                });
              }
              _this4.folders = data.folders || [];
              _this4.files = filesToShow;
              _this4.currentFolder = null;
              _this4.breadcrumb = [];
              _context4.next = 26;
              break;
            case 22:
              _context4.prev = 22;
              _context4.t0 = _context4["catch"](2);
              console.error('Erreur de recherche:', _context4.t0);
              alert('Erreur lors de la recherche');
            case 26:
              _context4.prev = 26;
              _this4.loading = false;
              return _context4.finish(26);
            case 29:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[2, 22, 26, 29]]);
      }))();
    },
    formatSize: function formatSize(bytes) {
      if (!bytes) return '0 B';
      var k = 1024;
      var sizes = ['B', 'KB', 'MB', 'GB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "file-selector"
  }, [_c("div", {
    staticClass: "file-selector__toolbar"
  }, [_vm.currentFolder ? _c("button", {
    staticClass: "file-selector__btn",
    on: {
      click: _vm.goBack
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Retour\n        ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "file-selector__breadcrumb"
  }, [_c("span", {
    staticClass: "file-selector__breadcrumb-item",
    on: {
      click: _vm.loadRoot
    }
  }, [_c("i", {
    staticClass: "fa fa-home"
  }), _vm._v(" Accueil\n            ")]), _vm._v(" "), _vm._l(_vm.breadcrumb, function (folder, index) {
    return [_c("i", {
      staticClass: "fa fa-chevron-right"
    }), _vm._v(" "), _c("span", {
      staticClass: "file-selector__breadcrumb-item",
      on: {
        click: function click($event) {
          return _vm.navigateToFolder(folder.id);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(folder.name) + "\n                ")])];
  })], 2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "file-selector__search",
    attrs: {
      type: "text",
      placeholder: "Rechercher..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }, _vm.handleSearch]
    }
  })]), _vm._v(" "), !_vm.loading ? _c("div", {
    staticClass: "file-selector__main"
  }, [_c("div", {
    staticClass: "file-selector__content",
    on: {
      click: _vm.handleContentClick
    }
  }, [_vm.folders.length === 0 && _vm.files.length === 0 ? _c("div", {
    staticClass: "file-selector__empty"
  }, [_c("i", {
    staticClass: "fa fa-folder-open fa-3x"
  }), _vm._v(" "), _c("p", [_vm._v("Aucun fichier trouvé")])]) : _c("div", {
    staticClass: "file-selector__grid"
  }, [_vm._l(_vm.folders, function (folder) {
    return _c("div", {
      key: "folder-" + folder.id,
      staticClass: "file-selector__item file-selector__item--folder",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.navigateToFolder(folder.id);
        }
      }
    }, [_c("div", {
      staticClass: "file-selector__icon",
      "class": _vm.getFileIconClass(_objectSpread(_objectSpread({}, folder), {}, {
        type: "folder"
      }))
    }, [_c("i", {
      "class": _vm.getFileIcon(_objectSpread(_objectSpread({}, folder), {}, {
        type: "folder"
      }))
    })]), _vm._v(" "), _c("div", {
      staticClass: "file-selector__name"
    }, [_vm._v(_vm._s(folder.name))])]);
  }), _vm._v(" "), _vm._l(_vm.files, function (file) {
    return _c("div", {
      key: "file-" + file.id,
      staticClass: "file-selector__item file-selector__item--file",
      "class": {
        "file-selector__item--selected": _vm.selectedFile && _vm.selectedFile.id === file.id
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.selectFile(file);
        },
        dblclick: function dblclick($event) {
          $event.stopPropagation();
          return _vm.confirmSelection(file);
        }
      }
    }, [_c("div", {
      staticClass: "file-selector__icon",
      "class": _vm.getFileIconClass(_objectSpread(_objectSpread({}, file), {}, {
        type: "file"
      }))
    }, [_c("i", {
      "class": _vm.getFileIcon(_objectSpread(_objectSpread({}, file), {}, {
        type: "file"
      }))
    })]), _vm._v(" "), _c("div", {
      staticClass: "file-selector__name"
    }, [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c("div", {
      staticClass: "file-selector__size"
    }, [_vm._v(_vm._s(_vm.formatSize(file.size)))])]);
  })], 2)]), _vm._v(" "), _vm.selectedFile ? _c("div", {
    staticClass: "file-selector__preview"
  }, [_c("div", {
    staticClass: "file-selector__preview-header"
  }, [_c("h4", [_vm._v(_vm._s(_vm.selectedFile.name))]), _vm._v(" "), _c("button", {
    staticClass: "file-selector__preview-close",
    attrs: {
      title: "Fermer"
    },
    on: {
      click: function click($event) {
        _vm.selectedFile = null;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-selector__preview-content"
  }, [_vm.selectedFile.isImage ? _c("div", {
    staticClass: "file-selector__preview-image"
  }, [_c("img", {
    attrs: {
      src: _vm.getFilePreviewUrl(_vm.selectedFile.id),
      alt: _vm.selectedFile.name
    }
  })]) : _c("div", {
    staticClass: "file-selector__preview-info"
  }, [_c("div", {
    staticClass: "file-selector__preview-icon"
  }, [_c("i", {
    "class": [_vm.getFileIcon(_objectSpread(_objectSpread({}, _vm.selectedFile), {}, {
      type: "file"
    })), _vm.getFileIconClass(_objectSpread(_objectSpread({}, _vm.selectedFile), {}, {
      type: "file"
    }))]
  })]), _vm._v(" "), _c("p", {
    staticClass: "file-selector__preview-message"
  }, [_vm._v("Aperçu non disponible")])])]), _vm._v(" "), _c("div", {
    staticClass: "file-selector__preview-footer"
  }, [_c("div", {
    staticClass: "file-selector__preview-meta"
  }, [_c("div", [_c("strong", [_vm._v("Taille:")]), _vm._v(" " + _vm._s(_vm.formatSize(_vm.selectedFile.size)))]), _vm._v(" "), _vm.selectedFile.mimeType ? _c("div", [_c("strong", [_vm._v("Type:")]), _vm._v(" " + _vm._s(_vm.selectedFile.mimeType))]) : _vm._e()]), _vm._v(" "), _c("button", {
    staticClass: "file-selector__preview-btn",
    on: {
      click: function click($event) {
        return _vm.confirmSelection(_vm.selectedFile);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-check"
  }), _vm._v(" Sélectionner\n                ")])])]) : _vm._e()]) : _c("div", {
    staticClass: "file-selector__loading"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin fa-2x"
  }), _vm._v(" "), _c("p", [_vm._v("Chargement...")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./assets/file-selector/file-selector.scss":
/*!*************************************************!*\
  !*** ./assets/file-selector/file-selector.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/file-selector/FileSelector.vue":
/*!***********************************************!*\
  !*** ./assets/file-selector/FileSelector.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& */ "./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&");
/* harmony import */ var _FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSelector.vue?vue&type=script&lang=js& */ "./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileSelector_vue_vue_type_style_index_0_id_0027dfa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& */ "./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0027dfa8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-selector/FileSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./assets/file-selector/FileSelector.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&");


/***/ }),

/***/ "./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_style_index_0_id_0027dfa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-7be1ba","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d2a0ee","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-dab795","vendors-node_modules_core-js_internals_correct-is-regexp-logic_js-node_modules_core-js_intern-51ca73","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-97c0f6","vendors-node_modules_core-js_modules_es_array_some_js-node_modules_core-js_modules_es_object_-ef25d7","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_modules_es_-d9423f"], () => (__webpack_exec__("./assets/file-selector/file-selector.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUU3QyxDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsR0FDRk4sR0FBRyxDQUFDTyxFQUFFLENBQUMsQ0FBQyxDQUNiLENBQUMsR0FDRk4sRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBeUIsQ0FBQyxFQUFFLENBQ25ERixFQUFFLENBQUMsR0FBRyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUE4QixDQUFDLENBQUMsRUFDdkRILEdBQUcsQ0FBQ00sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYTCxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUNELEdBQUcsQ0FBQ00sRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FDbkMsQ0FBQyxDQUNQLENBQUM7QUFDSixDQUFDO0FBQ0QsSUFBSXFCLGVBQWUsR0FBRyxFQUFFO0FBQ3hCNUIsTUFBTSxDQUFDNkIsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7OztBQ3pUM0I7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVHO0FBQ3ZDO0FBQ0w7QUFDM0QsQ0FBaUc7OztBQUdqRztBQUMwRjtBQUMxRixnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxTCxDQUFDLGlFQUFlLHVNQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2ZpbGUtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtc2VsZWN0b3IvZmlsZS1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtc2VsZWN0b3IvRmlsZVNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1zZWxlY3Rvci9GaWxlU2VsZWN0b3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLXNlbGVjdG9yL2ZpbGUtc2VsZWN0b3Iuc2Nzcz8wOThmIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLXNlbGVjdG9yL0ZpbGVTZWxlY3Rvci52dWU/MDBmNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1zZWxlY3Rvci9GaWxlU2VsZWN0b3IudnVlP2U4ODQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtc2VsZWN0b3IvRmlsZVNlbGVjdG9yLnZ1ZT8wNTJkIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLXNlbGVjdG9yL0ZpbGVTZWxlY3Rvci52dWU/NjIzNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1zZWxlY3Rvci9GaWxlU2VsZWN0b3IudnVlP2ZmZDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFV0aWxpdGFpcmVzIHBvdXIgbGEgZ2VzdGlvbiBkZXMgaWPDtG5lcyBkZSBmaWNoaWVyc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsYSBjbGFzc2UgZCdpY8O0bmUgRm9udCBBd2Vzb21lIHBvdXIgdW4gZmljaGllciBvdSBkb3NzaWVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gRmljaGllciBvdSBkb3NzaWVyXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ2xhc3NlIEZvbnQgQXdlc29tZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVJY29uKGl0ZW0pIHtcclxuICAgIC8vIERvc3NpZXJcclxuICAgIGlmIChpdGVtLnR5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1mb2xkZXInO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFyY2hpdmVzXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd6aXAnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAncmFyJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJzd6JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3RhcicgfHwgaXRlbS5leHRlbnNpb24gPT09ICdneicpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtYXJjaGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUERGXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICdwZGYnIHx8IGl0ZW0uaXNQZGYpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtcGRmJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEb2N1bWVudHMgV29yZFxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAnZG9jJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ2RvY3gnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnb2R0Jykge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtZmlsZS13b3JkJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGZXVpbGxlcyBkZSBjYWxjdWwgRXhjZWxcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3hscycgfHwgaXRlbS5leHRlbnNpb24gPT09ICd4bHN4JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ29kcycpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtZXhjZWwnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByw6lzZW50YXRpb25zIFBvd2VyUG9pbnRcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3BwdCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdwcHR4JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ29kcCcpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtcG93ZXJwb2ludCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmljaGllcnMgdGV4dGVcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3R4dCcgfHwgaXRlbS5pc1RleHQpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtYWx0JztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbWFnZXNcclxuICAgIGlmIChpdGVtLmlzSW1hZ2UgfHwgWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCcsICdzdmcnLCAnd2VicCddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtaW1hZ2UnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZpZMOpb3NcclxuICAgIGlmIChpdGVtLmlzVmlkZW8gfHwgWydtcDQnLCAnYXZpJywgJ21vdicsICd3bXYnLCAnZmx2JywgJ21rdicsICd3ZWJtJ10uaW5jbHVkZXMoaXRlbS5leHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS12aWRlbyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXVkaW9cclxuICAgIGlmIChbJ21wMycsICd3YXYnLCAnb2dnJywgJ2ZsYWMnLCAnYWFjJywgJ200YSddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtZmlsZS1hdWRpbyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29kZVxyXG4gICAgaWYgKFsnaHRtbCcsICdjc3MnLCAnanMnLCAncGhwJywgJ3B5JywgJ2phdmEnLCAnY3BwJywgJ2MnLCAnaCcsICdqc29uJywgJ3htbCcsICd5bWwnLCAneWFtbCddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtZmlsZS1jb2RlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWNoaWVyIGfDqW7DqXJpcXVlXHJcbiAgICByZXR1cm4gJ2ZhIGZhLWZpbGUnO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGEgY2xhc3NlIENTUyBwb3VyIGNvbG9yZXIgbCdpY8O0bmUgc2Vsb24gbGUgdHlwZSBkZSBmaWNoaWVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gRmljaGllciBvdSBkb3NzaWVyXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ2xhc3NlIENTU1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVJY29uQ2xhc3MoaXRlbSkge1xyXG4gICAgLy8gRG9zc2llclxyXG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2ZvbGRlcicpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tZm9sZGVyJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcmNoaXZlc1xyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAnemlwJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3JhcicgfHwgaXRlbS5leHRlbnNpb24gPT09ICc3eicgfHwgaXRlbS5leHRlbnNpb24gPT09ICd0YXInIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnZ3onKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWFyY2hpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBERlxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAncGRmJyB8fCBpdGVtLmlzUGRmKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLXBkZic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9jdW1lbnRzIFdvcmRcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ2RvYycgfHwgaXRlbS5leHRlbnNpb24gPT09ICdkb2N4JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ29kdCcpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0td29yZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV1aWxsZXMgZGUgY2FsY3VsIEV4Y2VsXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd4bHMnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAneGxzeCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHMnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWV4Y2VsJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcsOpc2VudGF0aW9ucyBQb3dlclBvaW50XHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICdwcHQnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAncHB0eCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHAnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLXBvd2VycG9pbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpY2hpZXJzIHRleHRlXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd0eHQnIHx8IGl0ZW0uaXNUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLXRleHQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEltYWdlc1xyXG4gICAgaWYgKGl0ZW0uaXNJbWFnZSB8fCBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnLCAnYm1wJywgJ3N2ZycsICd3ZWJwJ10uaW5jbHVkZXMoaXRlbS5leHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWltYWdlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBWaWTDqW9zXHJcbiAgICBpZiAoaXRlbS5pc1ZpZGVvIHx8IFsnbXA0JywgJ2F2aScsICdtb3YnLCAnd212JywgJ2ZsdicsICdta3YnLCAnd2VibSddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS12aWRlbyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXVkaW9cclxuICAgIGlmIChbJ21wMycsICd3YXYnLCAnb2dnJywgJ2ZsYWMnLCAnYWFjJywgJ200YSddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1hdWRpbyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29kZVxyXG4gICAgaWYgKFsnaHRtbCcsICdjc3MnLCAnanMnLCAncGhwJywgJ3B5JywgJ2phdmEnLCAnY3BwJywgJ2MnLCAnaCcsICdqc29uJywgJ3htbCcsICd5bWwnLCAneWFtbCddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1jb2RlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWNoaWVyIGfDqW7DqXJpcXVlXHJcbiAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tZmlsZSc7XHJcbn1cclxuXHJcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IEZpbGVTZWxlY3RvciBmcm9tICcuL0ZpbGVTZWxlY3Rvci52dWUnO1xyXG5pbXBvcnQgJy4vZmlsZS1zZWxlY3Rvci5zY3NzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtc2VsZWN0b3ItYXBwJyk7XHJcbiAgICBcclxuICAgIGlmICghYXBwRWxlbWVudCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAvLyBHZXQgQ1NSRiB0b2tlblxyXG4gICAgY29uc3QgY3NyZlRva2VuID0gd2luZG93LkZJTEVfU0VMRUNUT1JfQ1NSRl9UT0tFTiB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgIGFwcEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXRva2VuJykgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAnJztcclxuXHJcbiAgICBpZiAoIWNzcmZUb2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NTUkYgdG9rZW4gbm90IGZvdW5kIGZvciBmaWxlIHNlbGVjdG9yIScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgICAgIGVsOiAnI2ZpbGUtc2VsZWN0b3ItYXBwJyxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIEZpbGVTZWxlY3RvclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNzcmZUb2tlbjogY3NyZlRva2VuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxGaWxlU2VsZWN0b3IgOmNzcmYtdG9rZW49XCJjc3JmVG9rZW5cIiAvPidcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3Rvb2xiYXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJjdXJyZW50Rm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cImdvQmFja1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBSZXRvdXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwibG9hZFJvb3RcIiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2JyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaG9tZVwiPjwvaT4gQWNjdWVpbFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZvbGRlciwgaW5kZXgpIGluIGJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJuYXZpZ2F0ZVRvRm9sZGVyKGZvbGRlci5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2JyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBmb2xkZXIubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlci4uLlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBAaW5wdXQ9XCJoYW5kbGVTZWFyY2hcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fbWFpblwiIHYtaWY9XCIhbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fY29udGVudFwiIFxyXG4gICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUNvbnRlbnRDbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZm9sZGVycy5sZW5ndGggPT09IDAgJiYgZmlsZXMubGVuZ3RoID09PSAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2VtcHR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mb2xkZXItb3BlbiBmYS0zeFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BdWN1biBmaWNoaWVyIHRyb3V2w6k8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEb3NzaWVycyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImZvbGRlciBpbiBmb2xkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIidmb2xkZXItJyArIGZvbGRlci5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9faXRlbSBmaWxlLXNlbGVjdG9yX19pdGVtLS1mb2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cIm5hdmlnYXRlVG9Gb2xkZXIoZm9sZGVyLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9faWNvblwiIDpjbGFzcz1cImdldEZpbGVJY29uQ2xhc3MoeyAuLi5mb2xkZXIsIHR5cGU6ICdmb2xkZXInIH0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJnZXRGaWxlSWNvbih7IC4uLmZvbGRlciwgdHlwZTogJ2ZvbGRlcicgfSlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fbmFtZVwiPnt7IGZvbGRlci5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBGaWNoaWVycyAoaW1hZ2VzIHVuaXF1ZW1lbnQpIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCInZmlsZS0nICsgZmlsZS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9faXRlbSBmaWxlLXNlbGVjdG9yX19pdGVtLS1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydmaWxlLXNlbGVjdG9yX19pdGVtLS1zZWxlY3RlZCc6IHNlbGVjdGVkRmlsZSAmJiBzZWxlY3RlZEZpbGUuaWQgPT09IGZpbGUuaWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJzZWxlY3RGaWxlKGZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGRibGNsaWNrLnN0b3A9XCJjb25maXJtU2VsZWN0aW9uKGZpbGUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19pY29uXCIgOmNsYXNzPVwiZ2V0RmlsZUljb25DbGFzcyh7IC4uLmZpbGUsIHR5cGU6ICdmaWxlJyB9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZ2V0RmlsZUljb24oeyAuLi5maWxlLCB0eXBlOiAnZmlsZScgfSlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fbmFtZVwiPnt7IGZpbGUubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fc2l6ZVwiPnt7IGZvcm1hdFNpemUoZmlsZS5zaXplKSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBWaXNpb25uZXVzZSDDoCBkcm9pdGUgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkRmlsZVwiIGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7IHNlbGVjdGVkRmlsZS5uYW1lIH19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNlbGVjdGVkRmlsZSA9IG51bGxcIiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctY2xvc2VcIiB0aXRsZT1cIkZlcm1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRGaWxlLmlzSW1hZ2VcIiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0RmlsZVByZXZpZXdVcmwoc2VsZWN0ZWRGaWxlLmlkKVwiIDphbHQ9XCJzZWxlY3RlZEZpbGUubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cIltnZXRGaWxlSWNvbih7IC4uLnNlbGVjdGVkRmlsZSwgdHlwZTogJ2ZpbGUnIH0pLCBnZXRGaWxlSWNvbkNsYXNzKHsgLi4uc2VsZWN0ZWRGaWxlLCB0eXBlOiAnZmlsZScgfSldXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LW1lc3NhZ2VcIj5BcGVyw6d1IG5vbiBkaXNwb25pYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHN0cm9uZz5UYWlsbGU6PC9zdHJvbmc+IHt7IGZvcm1hdFNpemUoc2VsZWN0ZWRGaWxlLnNpemUpIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkRmlsZS5taW1lVHlwZVwiPjxzdHJvbmc+VHlwZTo8L3N0cm9uZz4ge3sgc2VsZWN0ZWRGaWxlLm1pbWVUeXBlIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjb25maXJtU2VsZWN0aW9uKHNlbGVjdGVkRmlsZSlcIiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+IFPDqWxlY3Rpb25uZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2xvYWRpbmdcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtMnhcIj48L2k+XHJcbiAgICAgICAgICAgIDxwPkNoYXJnZW1lbnQuLi48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGdldEZpbGVJY29uLCBnZXRGaWxlSWNvbkNsYXNzIH0gZnJvbSAnLi4vZmlsZS1tYW5hZ2VyL2ZpbGUtaWNvbnMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0ZpbGVTZWxlY3RvcicsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGNzcmZUb2tlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWNjZXB0ZWRUeXBlczoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gW10sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRGb2xkZXI6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbGRlcnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWI6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hRdWVyeTogJycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsZTogbnVsbCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIC8vIFBsdXMgYmVzb2luIGRlIGNvbXB1dGVkIHByb3BlcnRpZXMsIGxhIHJlY2hlcmNoZSBzZSBmYWl0IGPDtHTDqSBBUElcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFJvb3QoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0RmlsZUljb24sXHJcbiAgICAgICAgZ2V0RmlsZUljb25DbGFzcyhpdGVtKSB7XHJcbiAgICAgICAgICAgIC8vIE1hcHBlciBsZXMgY2xhc3NlcyBkdSBmaWxlLW1hbmFnZXIgdmVycyBsZXMgY2xhc3NlcyBkdSBmaWxlLXNlbGVjdG9yXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VDbGFzcyA9IGdldEZpbGVJY29uQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlQ2xhc3MucmVwbGFjZSgnZmlsZS1pdGVtX19pY29uLS0nLCAnZmlsZS1zZWxlY3Rvcl9faWNvbi0tJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBsb2FkUm9vdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9sZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5icmVhZGNydW1iID0gW107XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEZvbGRlcihudWxsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRGb2xkZXIoZm9sZGVySWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIFV0aWxpc2VyIGxhIHJvdXRlIC9hcGkvZmlsZXMgYXZlYyBsZSBwYXJhbcOodHJlIGZvbGRlcklkXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBmb2xkZXJJZCBcclxuICAgICAgICAgICAgICAgICAgICA/IGAvYXBpL2ZpbGVzP2ZvbGRlcklkPSR7Zm9sZGVySWR9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJy9hcGkvZmlsZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVG9rZW4nOiB0aGlzLmNzcmZUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9sZGVycyA9IGRhdGEuZm9sZGVycyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRmlsdHJlciBsZXMgZmljaGllcnMgc2Vsb24gbGVzIHR5cGVzIGFjY2VwdMOpc1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVzVG9TaG93ID0gZGF0YS5maWxlcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkVHlwZXMgJiYgdGhpcy5hY2NlcHRlZFR5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlc1RvU2hvdyA9IGZpbGVzVG9TaG93LmZpbHRlcihmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlLm1pbWVUeXBlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY2VwdGVkVHlwZXMuc29tZShhY2NlcHRlZFR5cGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2VwdGVkVHlwZS5lbmRzV2l0aCgnLyonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpbGRjYXJkIG1hdGNoIChleDogaW1hZ2UvKilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGFjY2VwdGVkVHlwZS5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUubWltZVR5cGUuc3RhcnRzV2l0aChiYXNlVHlwZSArICcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5taW1lVHlwZSA9PT0gYWNjZXB0ZWRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyIGTDqWZhdXQsIG5lIGdhcmRlciBxdWUgbGVzIGltYWdlcyBzaSBhdWN1biB0eXBlIGFjY2VwdMOpIG4nZXN0IHNww6ljaWZpw6lcclxuICAgICAgICAgICAgICAgICAgICBmaWxlc1RvU2hvdyA9IGZpbGVzVG9TaG93LmZpbHRlcihmID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLm1pbWVUeXBlICYmIGYubWltZVR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXNUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb2xkZXIgPSBkYXRhLmN1cnJlbnRGb2xkZXIgfHwgbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IGRhdGEuYnJlYWRjcnVtYiB8fCBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGRlIGNoYXJnZW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIGZpY2hpZXJzJyk7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgbmF2aWdhdGVUb0ZvbGRlcihmb2xkZXJJZCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRGb2xkZXIoZm9sZGVySWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ29CYWNrKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9sZGVyICYmIHRoaXMuY3VycmVudEZvbGRlci5wYXJlbnRGb2xkZXJJZCAhPT0gbnVsbCAmJiB0aGlzLmN1cnJlbnRGb2xkZXIucGFyZW50Rm9sZGVySWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWxsZXIgYXUgZG9zc2llciBwYXJlbnRcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb0ZvbGRlcih0aGlzLmN1cnJlbnRGb2xkZXIucGFyZW50Rm9sZGVySWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0b3VyIMOgIGxhIHJhY2luZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUm9vdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnZXRGaWxlUHJldmlld1VybChmaWxlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAvYXBpL2ZpbGVzLyR7ZmlsZUlkfS9wcmV2aWV3YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUltYWdlRXJyb3IoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gU2kgbCdpbWFnZSBuZSBjaGFyZ2UgcGFzLCBhZmZpY2hlciB1bmUgaWPDtG5lIHBhciBkw6lmYXV0XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiAhcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxlLXNlbGVjdG9yX19lcnJvci1pY29uJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYSBmYS1pbWFnZSBmaWxlLXNlbGVjdG9yX19lcnJvci1pY29uJztcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VsZWN0RmlsZShmaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUNvbnRlbnRDbGljayhldmVudCkge1xyXG4gICAgICAgICAgICAvLyBTaSBvbiBjbGlxdWUgc3VyIGxlIGNvbnRlbnUgKHBhcyBzdXIgdW4gaXRlbSksIGTDqXPDqWxlY3Rpb25uZXJcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNpIG9uIGNsaXF1ZSBkaXJlY3RlbWVudCBzdXIgbGUgY29udGVuZXVyIGNvbnRlbnRcclxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTaSBvbiBjbGlxdWUgc3VyIGwnw6lsw6ltZW50IGVtcHR5XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmZpbGUtc2VsZWN0b3JfX2VtcHR5JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2kgb24gY2xpcXVlIHN1ciBsYSBncmlsbGUgbWFpcyBwYXMgc3VyIHVuIGl0ZW0gKGVzcGFjZSBlbnRyZSBsZXMgaXRlbXMpXHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5maWxlLXNlbGVjdG9yX19pdGVtJyk7XHJcbiAgICAgICAgICAgIGlmICghY2xpY2tlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIC8vIE9uIGEgY2xpcXXDqSBzdXIgbGEgZ3JpbGxlIG1haXMgcGFzIHN1ciB1biBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gdGFyZ2V0LmNsb3Nlc3QoJy5maWxlLXNlbGVjdG9yX19ncmlkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uZmlybVNlbGVjdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZS5taW1lVHlwZSB8fCAhZmlsZS5taW1lVHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW5lIGltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEVudm95ZXIgYXUgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50ICYmIHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGVtYW5hZ2VyLXNlbGVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBmaWxlLm1pbWVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAnKicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVTZWFyY2goKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2godGhpcy5zZWFyY2hRdWVyeSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaSBsYSByZWNoZXJjaGUgZXN0IHZpZGUsIHJlY2hhcmdlciBsZSBkb3NzaWVyIGFjdHVlbFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEZvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcih0aGlzLmN1cnJlbnRGb2xkZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSb290KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIHBlcmZvcm1TZWFyY2gocXVlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEluY2x1cmUgbGUgZG9zc2llciBjb3VyYW50IGRhbnMgbGEgcmVjaGVyY2hlIHNpIG9uIGVzdCBkYW5zIHVuIGRvc3NpZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gdGhpcy5jdXJyZW50Rm9sZGVyPy5pZCB8fCBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcTogcXVlcnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmb2xkZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2ZvbGRlcklkJywgZm9sZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzL3NlYXJjaD8ke3BhcmFtcy50b1N0cmluZygpfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVG9rZW4nOiB0aGlzLmNzcmZUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZpbHRyZXIgbGVzIGZpY2hpZXJzIHNlbG9uIGxlcyB0eXBlcyBhY2NlcHTDqXNcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlc1RvU2hvdyA9IGRhdGEuZmlsZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZFR5cGVzICYmIHRoaXMuYWNjZXB0ZWRUeXBlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXNUb1Nob3cgPSBmaWxlc1RvU2hvdy5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsZS5taW1lVHlwZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NlcHRlZFR5cGVzLnNvbWUoYWNjZXB0ZWRUeXBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NlcHRlZFR5cGUuZW5kc1dpdGgoJy8qJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaWxkY2FyZCBtYXRjaCAoZXg6IGltYWdlLyopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZVR5cGUgPSBhY2NlcHRlZFR5cGUuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLm1pbWVUeXBlLnN0YXJ0c1dpdGgoYmFzZVR5cGUgKyAnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUubWltZVR5cGUgPT09IGFjY2VwdGVkVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBhciBkw6lmYXV0LCBuZSBnYXJkZXIgcXVlIGxlcyBpbWFnZXMgc2kgYXVjdW4gdHlwZSBhY2NlcHTDqSBuJ2VzdCBzcMOpY2lmacOpXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXNUb1Nob3cgPSBmaWxlc1RvU2hvdy5maWx0ZXIoZiA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5taW1lVHlwZSAmJiBmLm1pbWVUeXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkZXJzID0gZGF0YS5mb2xkZXJzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9sZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgZGUgcmVjaGVyY2hlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJldXIgbG9ycyBkZSBsYSByZWNoZXJjaGUnKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmb3JtYXRTaXplKGJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGlmICghYnl0ZXMpIHJldHVybiAnMCBCJztcclxuICAgICAgICAgICAgY29uc3QgayA9IDEwMjQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJ107XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSAqIDEwMCkgLyAxMDAgKyAnICcgKyBzaXplc1tpXTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5maWxlLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIFxyXG4gICAgJl9fdG9vbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX2J0biB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMjA0MztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDFhMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX2JyZWFkY3J1bWIge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjBmZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAyMDQzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mYS1jaGV2cm9uLXJpZ2h0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAyMDQzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19lbXB0eSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19sb2FkaW5nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDIwNDM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAyMDQzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThmMGZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1maWxlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19pY29uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0eWxlcyBwb3VyIGxlcyBkaWZmw6lyZW50cyB0eXBlcyBkZSBmaWNoaWVycyAoY29wacOpcyBkdSBmaWxlLW1hbmFnZXIpXHJcbiAgICAgICAgJi0tZm9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmYmJjMDQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJiYzA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLWFyY2hpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzhiNDUxMztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4YjQ1MTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi0tcGRmIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkMzJmMmY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDMyZjJmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLXdvcmQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzJiNTc5YTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyYjU3OWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi0tZXhjZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFkNmY0MjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZDZmNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi0tcG93ZXJwb2ludCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDA0NDIzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2QwNDQyMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS10ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLWltYWdlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0Mjg1ZjQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI4NWY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLXZpZGVvIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5YzI3YjA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWMyN2IwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLWF1ZGlvIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZjk4MDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLWNvZGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi0tZmlsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMTI0O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19zaXplIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXctaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWU1ZTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmJmYztcclxuICAgICAgICBcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIwMjEyNDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LWNsb3NlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMDIxMjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1pbmZvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXctaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXctbWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWU1ZTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1tZXRhIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICBjb2xvcjogIzIwMjEyNDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAyMDQzO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDFhMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX190b29sYmFyXCIgfSwgW1xuICAgICAgX3ZtLmN1cnJlbnRGb2xkZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX2J0blwiLCBvbjogeyBjbGljazogX3ZtLmdvQmFjayB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWFycm93LWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFJldG91clxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19icmVhZGNydW1iXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX2JyZWFkY3J1bWItaXRlbVwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmxvYWRSb290IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1ob21lXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBBY2N1ZWlsXFxuICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmJyZWFkY3J1bWIsIGZ1bmN0aW9uIChmb2xkZXIsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX2JyZWFkY3J1bWItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlVG9Gb2xkZXIoZm9sZGVyLmlkKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZm9sZGVyLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoUXVlcnksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFF1ZXJ5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fc2VhcmNoXCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJSZWNoZXJjaGVyLi4uXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hRdWVyeSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgIF92bS5zZWFyY2hRdWVyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uaGFuZGxlU2VhcmNoLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgICFfdm0ubG9hZGluZ1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX21haW5cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19jb250ZW50XCIsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ29udGVudENsaWNrIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uZm9sZGVycy5sZW5ndGggPT09IDAgJiYgX3ZtLmZpbGVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19lbXB0eVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZm9sZGVyLW9wZW4gZmEtM3hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBdWN1biBmaWNoaWVyIHRyb3V2w6lcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19ncmlkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZm9sZGVycywgZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImZvbGRlci1cIiArIGZvbGRlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZS1zZWxlY3Rvcl9faXRlbSBmaWxlLXNlbGVjdG9yX19pdGVtLS1mb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2aWdhdGVUb0ZvbGRlcihmb2xkZXIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX2ljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRGaWxlSWNvbkNsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0RmlsZUljb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZm9sZGVyLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJmaWxlLVwiICsgZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZS1zZWxlY3Rvcl9faXRlbSBmaWxlLXNlbGVjdG9yX19pdGVtLS1maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZS1zZWxlY3Rvcl9faXRlbS0tc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWxlLmlkID09PSBmaWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdEZpbGUoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb25maXJtU2VsZWN0aW9uKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX2ljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRGaWxlSWNvbkNsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRGaWxlSWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX25hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19zaXplXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0U2l6ZShmaWxlLnNpemUpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnNlbGVjdGVkRmlsZVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnNlbGVjdGVkRmlsZS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJGZXJtZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWxlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpbGUuaXNJbWFnZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1pbWFnZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0RmlsZVByZXZpZXdVcmwoX3ZtLnNlbGVjdGVkRmlsZS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5zZWxlY3RlZEZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1pY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRGaWxlSWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5fdm0uc2VsZWN0ZWRGaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEZpbGVJY29uQ2xhc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnNlbGVjdGVkRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctbWVzc2FnZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFwZXLDp3Ugbm9uIGRpc3BvbmlibGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctbWV0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJUYWlsbGU6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLmZvcm1hdFNpemUoX3ZtLnNlbGVjdGVkRmlsZS5zaXplKSlcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmlsZS5taW1lVHlwZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiVHlwZTpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5zZWxlY3RlZEZpbGUubWltZVR5cGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb25maXJtU2VsZWN0aW9uKF92bS5zZWxlY3RlZEZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jaGVja1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBTw6lsZWN0aW9ubmVyXFxuICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pXG4gICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fbG9hZGluZ1wiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtMnhcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQ2hhcmdlbWVudC4uLlwiKV0pLFxuICAgICAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAyN2RmYTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZVNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZVNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GaWxlU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDAyN2RmYTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMDI3ZGZhOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDAyN2RmYTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDAyN2RmYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDAyN2RmYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAyN2RmYTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDAyN2RmYTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLXNlbGVjdG9yL0ZpbGVTZWxlY3Rvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAyN2RmYTgmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMDI3ZGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiXSwibmFtZXMiOlsiZ2V0RmlsZUljb24iLCJpdGVtIiwidHlwZSIsImV4dGVuc2lvbiIsImlzUGRmIiwiaXNUZXh0IiwiaXNJbWFnZSIsImluY2x1ZGVzIiwiaXNWaWRlbyIsImdldEZpbGVJY29uQ2xhc3MiLCJWdWUiLCJGaWxlU2VsZWN0b3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3JmVG9rZW4iLCJ3aW5kb3ciLCJGSUxFX1NFTEVDVE9SX0NTUkZfVE9LRU4iLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwiZXJyb3IiLCJhcHAiLCJlbCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGVtcGxhdGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJwcm9wcyIsIlN0cmluZyIsInJlcXVpcmVkIiwiYWNjZXB0ZWRUeXBlcyIsIkFycmF5IiwiX2RlZmF1bHQiLCJjdXJyZW50Rm9sZGVyIiwiZm9sZGVycyIsImZpbGVzIiwiYnJlYWRjcnVtYiIsInNlYXJjaFF1ZXJ5Iiwic2VsZWN0ZWRGaWxlIiwibG9hZGluZyIsImNvbXB1dGVkIiwibW91bnRlZCIsImxvYWRSb290IiwibWV0aG9kcyIsImJhc2VDbGFzcyIsInJlcGxhY2UiLCJfdGhpcyIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibG9hZEZvbGRlciIsImZvbGRlcklkIiwiX3RoaXMyIiwiX2NhbGxlZTIiLCJ1cmwiLCJyZXNwb25zZSIsImZpbGVzVG9TaG93IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY29uY2F0IiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmlsdGVyIiwiZmlsZSIsIm1pbWVUeXBlIiwic29tZSIsImFjY2VwdGVkVHlwZSIsImVuZHNXaXRoIiwiYmFzZVR5cGUiLCJzdGFydHNXaXRoIiwiZiIsInQwIiwiYWxlcnQiLCJuYXZpZ2F0ZVRvRm9sZGVyIiwiX3RoaXMzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJnb0JhY2siLCJwYXJlbnRGb2xkZXJJZCIsImdldEZpbGVQcmV2aWV3VXJsIiwiZmlsZUlkIiwiaGFuZGxlSW1hZ2VFcnJvciIsImV2ZW50IiwidGFyZ2V0Iiwic3R5bGUiLCJkaXNwbGF5IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic2VsZWN0RmlsZSIsImhhbmRsZUNvbnRlbnRDbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiY2xpY2tlZEl0ZW0iLCJncmlkIiwiY29uZmlybVNlbGVjdGlvbiIsInBvc3RNZXNzYWdlIiwiaWQiLCJwYXRoIiwic2l6ZSIsImhhbmRsZVNlYXJjaCIsInBlcmZvcm1TZWFyY2giLCJxdWVyeSIsIl90aGlzNCIsIl9jYWxsZWU0IiwiX3RoaXM0JGN1cnJlbnRGb2xkZXIiLCJwYXJhbXMiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJVUkxTZWFyY2hQYXJhbXMiLCJxIiwiYXBwZW5kIiwidG9TdHJpbmciLCJmb3JtYXRTaXplIiwiYnl0ZXMiLCJrIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJyb3VuZCIsInBvdyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIm9uIiwiY2xpY2siLCJfdiIsIl9lIiwiX2wiLCJmb2xkZXIiLCJpbmRleCIsIiRldmVudCIsIl9zIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJleHByZXNzaW9uIiwiYXR0cnMiLCJwbGFjZWhvbGRlciIsImRvbVByb3BzIiwiaW5wdXQiLCJjb21wb3NpbmciLCJzdG9wUHJvcGFnYXRpb24iLCJfb2JqZWN0U3ByZWFkIiwiZGJsY2xpY2siLCJ0aXRsZSIsInNyYyIsImFsdCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9