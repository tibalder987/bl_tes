(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-admin"],{

/***/ "./assets/back/js/back.js":
/*!********************************!*\
  !*** ./assets/back/js/back.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_back_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/back.scss */ "./assets/back/scss/back.scss");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _builder_components_Builder_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder/components/Builder.vue */ "./assets/back/js/builder/components/Builder.vue");
/* harmony import */ var _builder_BuilderFileManagerIntegration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builder/BuilderFileManagerIntegration */ "./assets/back/js/builder/BuilderFileManagerIntegration.js");
/* harmony import */ var _vendor_easycorp_easyadmin_bundle_assets_js_field_slug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor/easycorp/easyadmin-bundle/assets/js/field-slug */ "./vendor/easycorp/easyadmin-bundle/assets/js/field-slug.js");
/* harmony import */ var _vendor_easycorp_easyadmin_bundle_assets_js_field_slug__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_easycorp_easyadmin_bundle_assets_js_field_slug__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







var $builderRoots = $('.builder-root');
if ($builderRoots.length > 0) {
  $builderRoots.each(function (i, root) {
    new vue__WEBPACK_IMPORTED_MODULE_6__["default"]({
      el: '#' + $(root).attr('id'),
      components: {
        Builder: _builder_components_Builder_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
      }
    });
  });

  // Initialiser l'intégration avec le file-manager
  _builder_BuilderFileManagerIntegration__WEBPACK_IMPORTED_MODULE_4__["default"].init();
}
function refreshSurveyQuestionAnswerBlock(selector) {
  if (selector.val() === "radio") {
    selector.closest(".field-collection-item").find(".form-survey-question-answer-type").removeClass('d-none');
  } else {
    selector.closest(".field-collection-item").find(".form-survey-question-answer-type").addClass('d-none');
  }
}
$(function () {
  $('.action-saveAndReturn, .action-saveAndAddAnother, .action-saveAndReturn, .action-saveAndContinue').on('click', function () {
    var $formId = $('#' + $(this).attr('form'));
    var $allInput = $formId.find('input:invalid');
    $.each($allInput, function (index, value) {
      var $currentElement = $('#' + value.id);
      if ($currentElement.val().length === 0) {
        if ($currentElement.closest('.builder__element').length > 0) {
          $currentElement.closest('.builder__element').addClass('error_required');
        } else {
          $currentElement.addClass('error_required');
        }
      }
    });
  });
  $("#Menu_pageSystem").on('change', function () {
    $("#Menu_page").prop('selectedIndex', 0);
    $("#Menu_externalPath").val("");
  });
  $("#Menu_page").on('change', function () {
    $("#Menu_pageSystem").prop('selectedIndex', 0);
    $("#Menu_externalPath").val("");
  });
  $("#Menu_externalPath").on('keyup', function () {
    $("#Menu_pageSystem").prop('selectedIndex', 0);
    $("#Menu_page").prop('selectedIndex', 0);
  });
  var eaSurveySelector = $('.ea-edit-Survey, .ea-new-Survey');
  eaSurveySelector.delegate(".form-survey-question-type", 'change', function () {
    refreshSurveyQuestionAnswerBlock($(this));
  });
  if (eaSurveySelector.length) {
    $('.form-survey-question-type').each(function () {
      refreshSurveyQuestionAnswerBlock($(this));
    });
  }
  $('.container-survey-questions .field-collection-add-button').on('click', function () {
    refreshSurveyQuestionAnswerBlock(eaSurveySelector.find('.container-survey-questions .field-collection-item').last().find('.form-survey-question-type'));
    eaSurveySelector.find('.container-survey-questions .field-collection-item .form-survey-question-active').prop("checked", true);
  });
});

/***/ }),

/***/ "./assets/back/js/builder/BuilderFileManagerIntegration.js":
/*!*****************************************************************!*\
  !*** ./assets/back/js/builder/BuilderFileManagerIntegration.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuilderFileManagerIntegration)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Intégration du File Manager avec le Builder
 * Permet de sélectionner des images depuis le File Manager et de les copier dans le Builder
 */
var BuilderFileManagerIntegration = /*#__PURE__*/function () {
  function BuilderFileManagerIntegration() {
    _classCallCheck(this, BuilderFileManagerIntegration);
  }
  _createClass(BuilderFileManagerIntegration, null, [{
    key: "init",
    value:
    /**
     * Initialiser les événements
     */
    function init() {
      console.log('BuilderFileManagerIntegration initialized');

      // Gérer les clics sur "Choisir depuis la médiathèque"
      $(document).on('click', '.btn-select-from-filemanager', function (e) {
        e.preventDefault();
        var targetField = $(this).data('target');
        BuilderFileManagerIntegration.openModal(targetField, $(this));
      });

      // Écouter les messages du file-manager (sélection d'un fichier)
      window.addEventListener('message', function (event) {
        if (event.data && event.data.type === 'filemanager-selection') {
          BuilderFileManagerIntegration.handleFileSelection(event.data.file);
        }
      });
    }

    /**
     * Ouvrir la modal avec le file-manager
     */
  }, {
    key: "openModal",
    value: function openModal(targetField, $button) {
      this.currentTargetField = targetField;
      this.currentButton = $button;

      // Créer la modal si elle n'existe pas
      if ($('#filemanager-selector-modal').length === 0) {
        var modal = "\n                <div id=\"filemanager-selector-modal\" class=\"modal fade\" tabindex=\"-1\">\n                    <div class=\"modal-dialog modal-xl\" style=\"max-width: 90%;\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\">\n                                    <i class=\"fa fa-folder-open\"></i> \n                                    S\xE9lectionner une image depuis la m\xE9diath\xE8que\n                                </h5>\n                                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                            </div>\n                            <div class=\"modal-body\" style=\"padding: 0; height: 70vh; overflow: hidden;\">\n                                <iframe id=\"filemanager-selector-iframe\" \n                                        src=\"/".concat(window.BUILDER_LOCALE || 'fr', "/admin/file-selector\" \n                                        style=\"width: 100%; height: 100%; border: none;\">\n                                </iframe>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">\n                                    Annuler\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");
        $('body').append(modal);
      }

      // Afficher la modal
      var modalElement = document.getElementById('filemanager-selector-modal');
      this.modalInstance = new bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: false
      });

      // Écouter la fermeture de la modal pour nettoyer le backdrop
      modalElement.addEventListener('hidden.bs.modal', function () {
        // Supprimer le backdrop s'il existe encore
        var backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
        // Supprimer la classe modal-open du body
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      });
      this.modalInstance.show();
    }

    /**
     * Gérer la sélection d'un fichier depuis le file-manager
     * Appelé directement quand l'utilisateur clique sur "Sélectionner" dans la visionneuse
     */
  }, {
    key: "handleFileSelection",
    value: function () {
      var _handleFileSelection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('File selected:', file);

              // Vérifier que c'est bien une image
              if (!(!file.mimeType || !file.mimeType.startsWith('image/'))) {
                _context.next = 4;
                break;
              }
              alert('Veuillez sélectionner une image (jpg, png)');
              return _context.abrupt("return");
            case 4:
              _context.prev = 4;
              _context.next = 7;
              return this.copyMediaToBuilder(file.id);
            case 7:
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](4);
              console.error('Erreur lors de la copie:', _context.t0);
              alert('Erreur lors de la copie du fichier');
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[4, 9]]);
      }));
      function handleFileSelection(_x) {
        return _handleFileSelection.apply(this, arguments);
      }
      return handleFileSelection;
    }()
    /**
     * Copier le fichier du file-manager vers le builder
     */
  }, {
    key: "copyMediaToBuilder",
    value: function () {
      var _copyMediaToBuilder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fileId) {
        var response, errorData, data, $formGroup, $hiddenInput, $widget;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch('/api/builder/copy-media', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  fileId: fileId
                })
              });
            case 3:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 9;
                break;
              }
              _context2.next = 7;
              return response.json();
            case 7:
              errorData = _context2.sent;
              throw new Error(errorData.error || 'Erreur lors de la copie');
            case 9:
              _context2.next = 11;
              return response.json();
            case 11:
              data = _context2.sent;
              if (!data.success) {
                _context2.next = 36;
                break;
              }
              if (!(!this.currentButton || this.currentButton.length === 0)) {
                _context2.next = 16;
                break;
              }
              console.error('Bouton source introuvable');
              throw new Error('Impossible de trouver le formulaire cible');
            case 16:
              // Trouver le form-group-image parent du bouton
              $formGroup = this.currentButton.closest('.form-group-image');
              if (!($formGroup.length === 0)) {
                _context2.next = 20;
                break;
              }
              console.error('Form-group-image introuvable');
              throw new Error('Impossible de trouver le formulaire cible');
            case 20:
              // Mettre à jour l'input hidden avec l'URL dans ce form-group spécifique
              $hiddenInput = $formGroup.find("input[data-name=\"".concat(this.currentTargetField, "_url\"]"));
              if (!($hiddenInput.length === 0)) {
                _context2.next = 24;
                break;
              }
              console.error('Input hidden introuvable');
              throw new Error('Impossible de trouver le champ cible');
            case 24:
              $hiddenInput.val(data.url);

              // Afficher la prévisualisation dans le widget
              $widget = $formGroup.find('.image-upload-widget');
              $widget.find('.image-upload-empty').hide();
              $widget.find('.image-upload-preview').show();
              $widget.find('.image-upload-preview img').attr('src', data.url);
              $widget.find('.filename-preview').text(data.name || '');

              // Gérer le bouton supprimer
              $widget.find('.file-preview-delete').off('click').on('click', function (e) {
                e.preventDefault();
                $widget.find('.image-upload-preview').hide();
                $widget.find('.image-upload-empty').show();
                // Vider les inputs
                $hiddenInput.val('');
                $formGroup.find('input[type="file"]').val('');
                $widget.find('.filename-preview').text('');
              });

              // Masquer l'input file local si nécessaire
              $formGroup.find('input[type="file"]').val('');

              // Fermer la modal
              if (this.modalInstance) {
                this.modalInstance.hide();
                // Nettoyer le backdrop immédiatement
                setTimeout(function () {
                  var backdrop = document.querySelector('.modal-backdrop');
                  if (backdrop) {
                    backdrop.remove();
                  }
                  document.body.classList.remove('modal-open');
                  document.body.style.overflow = '';
                  document.body.style.paddingRight = '';
                }, 100);
              }

              // Afficher un message de succès
              console.log('Fichier copié avec succès:', data.url);
              _context2.next = 37;
              break;
            case 36:
              throw new Error(data.error || 'Erreur inconnue');
            case 37:
              _context2.next = 43;
              break;
            case 39:
              _context2.prev = 39;
              _context2.t0 = _context2["catch"](0);
              console.error('Erreur:', _context2.t0);
              throw _context2.t0;
            case 43:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 39]]);
      }));
      function copyMediaToBuilder(_x2) {
        return _copyMediaToBuilder.apply(this, arguments);
      }
      return copyMediaToBuilder;
    }()
  }]);
  return BuilderFileManagerIntegration;
}(); // Auto-initialisation
_defineProperty(BuilderFileManagerIntegration, "currentTargetField", null);
_defineProperty(BuilderFileManagerIntegration, "currentButton", null);
_defineProperty(BuilderFileManagerIntegration, "modalInstance", null);

$(document).ready(function () {
  BuilderFileManagerIntegration.init();
});

/***/ }),

/***/ "./assets/back/js/builder/elements/ElementFormMounter.js":
/*!***************************************************************!*\
  !*** ./assets/back/js/builder/elements/ElementFormMounter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementFormMounter)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var select2_dist_css_select2_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! select2/dist/css/select2.css */ "./node_modules/select2/dist/css/select2.css");
/* harmony import */ var _FormBuilder__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./FormBuilder */ "./assets/back/js/builder/elements/FormBuilder.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//import $ from 'jquery';
//import 'bootstrap';



var ElementFormMounter = /*#__PURE__*/function () {
  function ElementFormMounter() {
    _classCallCheck(this, ElementFormMounter);
  }
  _createClass(ElementFormMounter, null, [{
    key: "inputName",
    value: function inputName(basename, elementId, elementPropertyName) {
      var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return basename + '[' + elementId + '][' + elementPropertyName + ']' + (multiple ? '[]' : '');
    }
  }, {
    key: "inputId",
    value: function inputId(elementId, elementPropertyName) {
      return elementId + '-' + elementPropertyName;
    }
  }, {
    key: "confirm",
    value: function confirm(callback) {
      var modal = "\n            <div id=\"modal-delete-element\" class=\"modal fade\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-body\">\n                            <h4>Voulez-vous supprimer cet \xE9l\xE9ment ?</h4>\n                            <p>Cette action est irr\xE9versible.</p>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" data-bs-dismiss=\"modal\" class=\"btn btn-secondary\">\n                                <span class=\"btn-label\">Annuler</span>\n                            </button>\n                            <button type=\"button\" data-bs-dismiss=\"modal\" class=\"btn btn-danger\" id=\"modal-delete-element-button\">\n                                <i class=\"fa fa-trash-o\"></i> <span class=\"btn-label\">Supprimer</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
      if ($('#modal-delete-element').length <= 0) {
        $('body').append($(modal));
      }
      var myModal = new bootstrap.Modal(document.getElementById('modal-delete-element'), {
        backdrop: true,
        keyboard: true
      });
      myModal.show();
      $('#modal-delete-element').off('click', '#modal-delete-element-button').on('click', '#modal-delete-element-button', callback);
    }
  }, {
    key: "validateFormElement",
    value: function validateFormElement(form) {
      var isValid = true;
      $(form).find('[required], [type="url"]').each(function (i, input) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
        }
      });
      $(form).find('input[type="file"]').each(function (i, input) {
        if (!ElementFormMounter._validateFileInput(input)) {
          isValid = false;
        }
      });
      return isValid;
    }
  }, {
    key: "mount",
    value: function mount(basename, element, form) {
      var $form = $(form);
      this._initRepeatables($form, basename, element);
      this._compileNameAndValues(basename, element, $form);
      this._makeCkeditors($form);
      this._makeSelect2($form);
      this._autoValidateFileInputs($form);
    }
  }, {
    key: "_getValueFromPath",
    value: function _getValueFromPath(obj, path) {
      if (!path) return undefined;
      if (obj.hasOwnProperty(path)) {
        return obj[path];
      }
      var keys = path.split(/\]\[|\[|\]/).filter(function (k) {
        return k !== '';
      });
      var current = obj;
      var _iterator = _createForOfIteratorHelper(keys),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          if (current === null || current === undefined) {
            return undefined;
          }
          current = current[key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return current;
    }
  }, {
    key: "_initRepeatables",
    value: function _initRepeatables($form, basename, element) {
      // Auto-expand repeatables if we have data
      $form.find('.form-repeatable').each(function () {
        var $container = $(this);
        var $itemsContainer = $container.find('.form-repeatable-items');
        var $template = $container.find('template.form-repeatable-template');
        if ($template.length > 0) {
          var html = $template.html();
          var match = /data-name="([^"]+)"/.exec(html);
          if (match) {
            var fullName = match[1];
            var parts = fullName.split('][');
            if (parts.length > 0) {
              var repeatableName = parts[0];

              // Look up the array in the element object
              var repeatableData = ElementFormMounter._getValueFromPath(element, repeatableName);
              if (repeatableData) {
                var savedCount = 0;
                if (Array.isArray(repeatableData)) {
                  savedCount = repeatableData.length;
                } else if (_typeof(repeatableData) === 'object') {
                  savedCount = Object.keys(repeatableData).length;
                }
                console.log('InitRepeatable:', fullName, 'Data:', repeatableData, 'SavedCount:', savedCount, 'CurrentCount:', $itemsContainer.children().length);
                var currentCount = $itemsContainer.children().length;
                for (var k = currentCount; k < savedCount; k++) {
                  // Use direct call instead of trigger click to ensure reliability
                  ElementFormMounter._addRepeatableItem($container, element, basename);
                }
              }
            }
          }
        }
      });

      // Handle Add button
      // Bind to the specific container to preserve the 'element' and 'basename' closure scope
      // Using delegating from the container itself handles potential dynamic button replacements if any, 
      // though typically the button is static at the bottom.
      $form.find('.form-repeatable').each(function () {
        var $container = $(this);
        $container.off('click', '.form-repeatable-add').on('click', '.form-repeatable-add', function (e) {
          e.preventDefault();
          // $container is already available in closure, or via $(this).closest
          // Using $(this).closest is safer if we copy/moved code, but we need the 'element' closure.
          if (!ElementFormMounter._addRepeatableItem($container, element, basename)) {
            var max = parseInt($container.data('max'));
            alert("Maximum ".concat(max, " \xE9l\xE9ments autoris\xE9s."));
          }
        });

        // Handle Remove button
        $container.off('click', '.form-repeatable-remove').on('click', '.form-repeatable-remove', function (e) {
          e.preventDefault();
          var min = parseInt($container.data('min'));
          var $itemsContainer = $container.find('.form-repeatable-items');
          if ($itemsContainer.children().length <= min) {
            alert("Minimum ".concat(min, " \xE9l\xE9ments requis."));
            return;
          }
          $(this).closest('.form-repeatable-item').remove();
        });
      });
    }
  }, {
    key: "_addRepeatableItem",
    value: function _addRepeatableItem($container, element, basename) {
      var $itemsContainer = $container.find('.form-repeatable-items');
      var $template = $container.find('template.form-repeatable-template');
      var max = parseInt($container.data('max'));
      var currentCount = $itemsContainer.children().length;
      if (currentCount >= max) {
        // Quiet fail for auto-expand or handle differently?
        // User click should alert, but auto-expand shouldn't loop if max reached?
        return false;
      }
      var maxIndex = -1;
      $itemsContainer.children().each(function () {
        var idx = parseInt($(this).data('index'));
        if (!isNaN(idx) && idx > maxIndex) maxIndex = idx;
      });
      var newIndex = maxIndex + 1;
      var placeholder = $template.data('placeholder');
      var html = $template.html();
      var placeholderMinus1 = placeholder + '_MINUS_1';
      if (html.indexOf(placeholderMinus1) !== -1) {
        html = html.split(placeholderMinus1).join(newIndex);
      }
      if (html.indexOf(placeholder) !== -1) {
        html = html.split(placeholder).join(newIndex + 1);
      }
      var $newItem = $(html);
      $newItem.attr('data-index', newIndex);
      $itemsContainer.append($newItem);
      ElementFormMounter._makeCkeditors($newItem);
      ElementFormMounter._makeSelect2($newItem);
      $newItem.find('[data-name]').each(function () {
        var $input = $(this);
        var name = $input.data('name');
        var isMultiple = $input.prop('multiple');
        $input.attr('name', ElementFormMounter.inputName(basename, element.id, name, isMultiple));
        var cleanPropName = name.replace(/\]\[/g, '-').replace('[', '-').replace(']', '');
        var id = ElementFormMounter.inputId(element.id, cleanPropName);
        $input.attr('id', id);
        $input.closest('.form-group').find('label').attr('for', id);
      });
      return true;
    }
  }, {
    key: "remount",
    value: function remount(form) {
      this._makeCkeditors($(form));
    }
  }, {
    key: "_compileNameAndValues",
    value: function _compileNameAndValues(basename, element, $form) {
      $form.find('[data-name]').not('.form-repeatable').each(function (i, input) {
        var $input = $(input);
        var name = $input.data('name');
        var cleanPropName = name.replace(/\]\[/g, '-').replace('[', '-').replace(']', '');
        var id = ElementFormMounter.inputId(element.id, cleanPropName);
        var isMultiple = $input.prop('multiple');
        $input.attr('name', ElementFormMounter.inputName(basename, element.id, name, isMultiple));
        if (!$input.attr('id')) {
          $input.attr('id', id);
          $input.parent().find('label').attr('for', id);
        }
        if ($input.attr('type') !== 'file') {
          var val = ElementFormMounter._getValueFromPath(element, name);
          if (val !== undefined && val !== null) {
            $input.val(isMultiple && typeof val === 'string' ? val.split(',') : val);
            if ($input.hasClass('article_medias_input')) {
              ElementFormMounter._hydrateInputPreview($input, val);
            }
          }
        } else if ($input.attr('type') === 'file') {
          var urlName = name + '_url';
          var _val = ElementFormMounter._getValueFromPath(element, urlName);
          if (_val) {
            ElementFormMounter._hydrateInputFile($input, _val);
          }
        }
      });
    }
  }, {
    key: "_makeSelect2",
    value: function _makeSelect2($form) {
      $form.find('select.select2').each(function (i, select) {
        var options = {
          theme: 'bootstrap',
          language: 'fr',
          width: '100%',
          minimumResultsForSearch: 10
        };
        if ($(select).hasClass('select2--icons')) {
          var displayIcons = function displayIcons(icon) {
            if (!icon.id) {
              return icon.text;
            }
            return $("\n                        <div class=\"builder__element__form__icon\">\n                            <div class=\"builder__element__form__icon__i\"><i class=\"mt-icon-".concat(icon.text, "\"></i></div> \n                            <div>").concat(icon.text.charAt(0).toUpperCase() + icon.text.slice(1), "</div>\n                        </div>"));
          };
          options.templateSelection = displayIcons;
          options.templateResult = displayIcons;
        }
        $(select).select2(options);
      });
    }
  }, {
    key: "_makeCkeditors",
    value: function _makeCkeditors($form) {
      setTimeout(function () {
        $form.find('trix-editor').each(function (i, input) {
          if (input.editor) {
            input.editor.loadHTML($(input).parent().find('input').val());
          } else {
            console.warn('No editor for trix ' + input);
          }
        });
        $form.find('.element-ckeditor').each(function (i, input) {
          var id = $(input).attr('id');
          if (CKEDITOR.instances[id]) {
            CKEDITOR.instances[id].destroy(false);
            delete CKEDITOR.instances[id];
          }
          var editor = CKEDITOR.replace(id, {
            // colorButton_colors: colors_private.join(',') + ',' + colors_pro.join(','),
            toolbar: [{
              name: 'styles',
              items: ['Bold', 'Italic', 'Strike', 'Link']
            }, {
              name: 'colors',
              items: ['TextColor']
            }, {
              name: 'lists',
              items: ['BulletedList', 'NumberedList', '-', 'Outdent', 'Indent']
            }, {
              name: 'clipboard',
              items: ['Copy', 'Paste', 'PasteFromWord', '-', 'Undo', 'Redo']
            }, {
              name: 'paragraph',
              items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
            }, {
              name: 'insert',
              items: ['HorizontalRule', 'Table', 'Image']
            }, {
              name: 'advanced',
              items: ['Source']
            }],
            language: 'fr',
            height: 100,
            extraPlugins: 'divarea',
            filebrowserBrowseUrl: '/elfinder'
          });
          var toast_id = "toasted" + id;
          var label_input = $('#' + id).parent().find('label').text();
          editor.on('required', function (evt) {
            if ($('#' + evt.editor.name).length > 0) {
              $('body').append('' + '<div class="toast-container position-fixed bottom-0 end-0 p-3">' + '  <div id="' + toast_id + '" class="toast" role="alert" aria-live="assertive" aria-atomic="true">' + '    <div class="toast-header">' + '      <strong class="me-auto">Erreur - Obligatoire</strong>' + '      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>' + '    </div>' + '    <div class="toast-body">' + '      Champ ' + label_input + '    </div>' + '  </div>' + '</div>');
              var toastTrigger = document.getElementById(toast_id);
              var toast = new bootstrap.Toast(toastTrigger);
              toast.show();
              evt.cancel();
              $('#' + id).closest('.builder__element').addClass('error_required');
            }
          });
          editor.on('change', function (evt) {
            if (editor.getData() !== '') {
              $('.action-saveAndReturn, .action-saveAndAddAnother, .action-saveAndReturn, .action-saveAndContinue').removeAttr('disabled');
            }
          });
        });
      }, 500);
    }
  }, {
    key: "_autoValidateFileInputs",
    value: function _autoValidateFileInputs($form) {
      $form.on('change', 'input[type="file"]', function (e) {
        if (ElementFormMounter._validateFileInput(e.currentTarget)) {
          // Preview handled in _validateFileInput now
        }
      });
    }
  }, {
    key: "_validateFileInput",
    value: function _validateFileInput(input) {
      var files = input.files;
      if (!files || !files[0]) {
        return true;
      }
      var file = files[0];
      var fileSizeMB = (file.size / 1024 / 1024).toFixed(4);
      if (fileSizeMB > _FormBuilder__WEBPACK_IMPORTED_MODULE_37__["default"].IMAGE_MAX_SIZE_MB) {
        input.setCustomValidity('Fichier trop gros');
        input.reportValidity();
        return false;
      }

      // Show local preview
      if (file.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var $widget = $(input).closest('.image-upload-widget');
          $widget.find('.image-upload-empty').hide();
          $widget.find('.image-upload-preview').show();
          $widget.find('.image-upload-preview img').attr('src', e.target.result);
          $widget.find('.filename-preview').text(file.name);

          // Bind delete button for local file
          $widget.find('.file-preview-delete').off('click').on('click', function () {
            $(input).val(''); // Clear file input
            $widget.find('.image-upload-preview').hide();
            $widget.find('.image-upload-empty').show();
            $widget.find('.image-upload-preview img').attr('src', '');
            $widget.find('.filename-preview').text('');
          });
        };
        reader.readAsDataURL(file);
      }
      input.setCustomValidity('');
      return true;
    }
  }, {
    key: "_hydrateInputFile",
    value: function _hydrateInputFile($input, value) {
      if (!value) {
        return;
      }
      var $row = $input.closest('.form-group');
      var $widget = $row.find('.image-upload-widget');

      // Hide empty state, show preview
      $widget.find('.image-upload-empty').hide();
      $widget.find('.image-upload-preview').show();
      $widget.find('.image-upload-preview img').attr('src', value);
      $widget.find('.file-preview-delete').off('click').on('click', function (e) {
        e.preventDefault();
        $widget.find('.image-upload-preview').hide();
        $widget.find('.image-upload-empty').show();
        // Clear hidden input (URL) and file input to be safe
        $row.find('input[type="hidden"]').val('');
        $row.find('input[type="file"]').val('');
      });
    }
  }, {
    key: "_hydrateInputPreview",
    value: function _hydrateInputPreview($input, value) {
      if (!value) {
        return;
      }
      var fileExt = value.substr(value.lastIndexOf('.') + 1).toLowerCase();
      ;
      var list_ext = ['jpg', 'png', 'jpeg', 'pdf'];
      if (fileExt === "pdf") {
        value = "/images/icon_pdf.png";
      }
      if (list_ext.indexOf(fileExt) === -1) {
        value = "/images/icon_file.png";
      }
      var $row = $input.closest('.form-group');
      var $widget = $row.find('.image-upload-widget');
      $widget.find('.image-upload-empty').hide();
      $widget.find('.image-upload-preview').show();
      $widget.find('.image-upload-preview img').attr('src', value);

      // Ensure delete works for this type too if needed
      $widget.find('.file-preview-delete').off('click').on('click', function (e) {
        e.preventDefault();
        $widget.find('.image-upload-preview').hide();
        $widget.find('.image-upload-empty').show();
        // Clear hidden input (URL)
        $input.val('');
      });
    }
  }]);
  return ElementFormMounter;
}();


/***/ }),

/***/ "./assets/back/js/builder/elements/FormBuilder.js":
/*!********************************************************!*\
  !*** ./assets/back/js/builder/elements/FormBuilder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormBuilder)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var IMAGE_MAX_SIZE_MB = 60;

/**
 * Modern fluent FormBuilder for creating builder element forms
 * Replaces the old string concatenation approach with a structured API
 */
var FormBuilder = /*#__PURE__*/function () {
  function FormBuilder() {
    var builderData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, FormBuilder);
    this.builderData = builderData;
    this.fields = [];
    this.currentRow = null;
    this.fieldNames = new Set();
  }
  _createClass(FormBuilder, [{
    key: "row",
    value:
    // ==================== LAYOUT MANAGEMENT ====================

    /**
     * Start a new row for manual layout control
     * @returns {FormBuilder}
     */
    function row() {
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
  }, {
    key: "endRow",
    value: function endRow() {
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
  }, {
    key: "fieldset",
    value: function fieldset(legend, callback) {
      var nestedBuilder = new FormBuilder(this.builderData);
      callback(nestedBuilder);
      this._addField({
        type: 'fieldset',
        legend: legend,
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
  }, {
    key: "addText",
    value: function addText(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required = options.required,
        required = _options$required === void 0 ? false : _options$required,
        _options$span = options.span,
        span = _options$span === void 0 ? 1 : _options$span,
        _options$defaultValue = options.defaultValue,
        defaultValue = _options$defaultValue === void 0 ? '' : _options$defaultValue,
        _options$placeholder = options.placeholder,
        placeholder = _options$placeholder === void 0 ? '' : _options$placeholder,
        _options$helpText = options.helpText,
        helpText = _options$helpText === void 0 ? '' : _options$helpText;
      this._validateFieldName(name);
      this._addField({
        type: 'text',
        name: name,
        label: label,
        required: required,
        span: span,
        defaultValue: defaultValue,
        placeholder: placeholder,
        helpText: helpText
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
  }, {
    key: "addNumber",
    value: function addNumber(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required2 = options.required,
        required = _options$required2 === void 0 ? false : _options$required2,
        _options$span2 = options.span,
        span = _options$span2 === void 0 ? 1 : _options$span2,
        _options$defaultValue2 = options.defaultValue,
        defaultValue = _options$defaultValue2 === void 0 ? '' : _options$defaultValue2,
        _options$helpText2 = options.helpText,
        helpText = _options$helpText2 === void 0 ? '' : _options$helpText2;
      this._validateFieldName(name);
      this._addField({
        type: 'number',
        name: name,
        label: label,
        required: required,
        span: span,
        defaultValue: defaultValue,
        helpText: helpText
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
  }, {
    key: "addSelect",
    value: function addSelect(name, label, optionsMap) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var _options$required3 = options.required,
        required = _options$required3 === void 0 ? false : _options$required3,
        _options$span3 = options.span,
        span = _options$span3 === void 0 ? 1 : _options$span3,
        _options$multiple = options.multiple,
        multiple = _options$multiple === void 0 ? false : _options$multiple;
      this._validateFieldName(name);
      this._addField({
        type: 'select',
        name: name,
        label: label,
        required: required,
        span: span,
        optionsMap: optionsMap,
        multiple: multiple
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
  }, {
    key: "addTextarea",
    value: function addTextarea(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required4 = options.required,
        required = _options$required4 === void 0 ? false : _options$required4,
        _options$span4 = options.span,
        span = _options$span4 === void 0 ? 2 : _options$span4,
        _options$defaultValue3 = options.defaultValue,
        defaultValue = _options$defaultValue3 === void 0 ? '' : _options$defaultValue3,
        _options$rows = options.rows,
        rows = _options$rows === void 0 ? 4 : _options$rows;
      this._validateFieldName(name);
      this._addField({
        type: 'textarea',
        name: name,
        label: label,
        required: required,
        span: span,
        defaultValue: defaultValue,
        rows: rows
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
  }, {
    key: "addCKEditor",
    value: function addCKEditor(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required5 = options.required,
        required = _options$required5 === void 0 ? false : _options$required5,
        _options$span5 = options.span,
        span = _options$span5 === void 0 ? 2 : _options$span5;
      this._validateFieldName(name);
      this._addField({
        type: 'ckeditor',
        name: name,
        label: label,
        required: required,
        span: span
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
  }, {
    key: "addImage",
    value: function addImage(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required6 = options.required,
        required = _options$required6 === void 0 ? false : _options$required6,
        _options$span6 = options.span,
        span = _options$span6 === void 0 ? 2 : _options$span6,
        _options$format = options.format,
        format = _options$format === void 0 ? '1920x600' : _options$format,
        _options$acceptedForm = options.acceptedFormats,
        acceptedFormats = _options$acceptedForm === void 0 ? 'image/jpeg,image/png' : _options$acceptedForm,
        _options$useFileManag = options.useFileManager,
        useFileManager = _options$useFileManag === void 0 ? true : _options$useFileManag;
      this._validateFieldName(name);
      this._addField({
        type: 'image',
        name: name,
        label: label,
        required: required,
        span: span,
        format: format,
        acceptedFormats: acceptedFormats,
        useFileManager: useFileManager
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
  }, {
    key: "addUrl",
    value: function addUrl(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required7 = options.required,
        required = _options$required7 === void 0 ? false : _options$required7,
        _options$span7 = options.span,
        span = _options$span7 === void 0 ? 1 : _options$span7,
        _options$showTooltip = options.showTooltip,
        showTooltip = _options$showTooltip === void 0 ? false : _options$showTooltip;
      this._validateFieldName(name);
      this._addField({
        type: 'url',
        name: name,
        label: label,
        required: required,
        span: span,
        showTooltip: showTooltip
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
  }, {
    key: "addIconPicker",
    value: function addIconPicker(name, label) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$required8 = options.required,
        required = _options$required8 === void 0 ? false : _options$required8,
        _options$span8 = options.span,
        span = _options$span8 === void 0 ? 1 : _options$span8;
      this._validateFieldName(name);
      this._addField({
        type: 'icon',
        name: name,
        label: label,
        required: required,
        span: span
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
  }, {
    key: "addTable",
    value: function addTable(rows, cols) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$span9 = options.span,
        span = _options$span9 === void 0 ? 2 : _options$span9;
      this._addField({
        type: 'table',
        rows: rows,
        cols: cols,
        span: span
      });
      return this;
    }

    /**
     * Add help text (not a field, just informational text)
     * @param {string} message - Help message
     * @returns {FormBuilder}
     */
  }, {
    key: "addHelp",
    value: function addHelp(message) {
      this._addField({
        type: 'help',
        message: message
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
  }, {
    key: "addRepeatable",
    value: function addRepeatable(name, config) {
      var label = config.label,
        _config$min = config.min,
        min = _config$min === void 0 ? 1 : _config$min,
        _config$max = config.max,
        max = _config$max === void 0 ? 10 : _config$max,
        _config$initial = config.initial,
        initial = _config$initial === void 0 ? 1 : _config$initial,
        _config$addButtonText = config.addButtonText,
        addButtonText = _config$addButtonText === void 0 ? '+ Ajouter' : _config$addButtonText,
        _config$removeButtonT = config.removeButtonText,
        removeButtonText = _config$removeButtonT === void 0 ? 'Supprimer' : _config$removeButtonT,
        template = config.template;
      this._addField({
        type: 'repeatable',
        name: name,
        label: label,
        min: min,
        max: max,
        initial: initial,
        addButtonText: addButtonText,
        removeButtonText: removeButtonText,
        template: template
      });
      return this;
    }

    // ==================== RENDERING ====================

    /**
     * Render the form to HTML string
     * @returns {string}
     */
  }, {
    key: "render",
    value: function render() {
      var html = '<div class="form-builder-root">\n';
      var _iterator = _createForOfIteratorHelper(this.fields),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          html += this._renderField(field);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      html += '</div>';
      return html;
    }

    /**
     * Render a single field
     * @private
     */
  }, {
    key: "_renderField",
    value: function _renderField(field) {
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
          console.warn("FormBuilder: Unknown field type \"".concat(field.type, "\""));
          return '';
      }
    }
  }, {
    key: "_renderRow",
    value: function _renderRow(field) {
      var html = '<div class="form-builder-row">\n';
      var _iterator2 = _createForOfIteratorHelper(field.fields),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var rowField = _step2.value;
          html += this._renderField(rowField);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderFieldset",
    value: function _renderFieldset(field) {
      var html = "<fieldset>\n<legend>".concat(field.legend, "</legend>\n");
      var _iterator3 = _createForOfIteratorHelper(field.fields),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var nestedField = _step3.value;
          html += this._renderField(nestedField);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      html += '</fieldset>\n';
      return html;
    }
  }, {
    key: "_renderText",
    value: function _renderText(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var placeholder = field.placeholder ? "placeholder=\"".concat(field.placeholder, "\"") : '';
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <input type=\"text\" data-name=\"".concat(field.name, "\" value=\"").concat(field.defaultValue, "\" class=\"form-control\" ").concat(requiredAttr, " ").concat(placeholder, "/>\n");
      if (field.helpText) {
        html += "  <small class=\"form-text text-muted\">".concat(field.helpText, "</small>\n");
      }
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderNumber",
    value: function _renderNumber(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <input type=\"number\" data-name=\"".concat(field.name, "\" value=\"").concat(field.defaultValue, "\" class=\"form-control\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '');\" ").concat(requiredAttr, "/>\n");
      if (field.helpText) {
        html += "  <small class=\"form-text text-muted\">".concat(field.helpText, "</small>\n");
      }
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderSelect",
    value: function _renderSelect(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var multipleAttr = field.multiple ? 'multiple' : '';
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <select data-name=\"".concat(field.name, "\" class=\"select2 form-control\" ").concat(requiredAttr, " ").concat(multipleAttr, ">\n");
      html += this._makeOptionTags(field.optionsMap, field.required);
      html += '  </select>\n';
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderTextarea",
    value: function _renderTextarea(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <textarea data-name=\"".concat(field.name, "\" class=\"form-control\" rows=\"").concat(field.rows, "\" ").concat(requiredAttr, ">").concat(field.defaultValue, "</textarea>\n");
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderCKEditor",
    value: function _renderCKEditor(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <textarea data-name=\"".concat(field.name, "\" class=\"form-control element-ckeditor\" ").concat(requiredAttr, "></textarea>\n");
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderImage",
    value: function _renderImage(field) {
      var requiredLabel = field.required ? ' *' : '';
      var limitSize = FormBuilder.IMAGE_MAX_SIZE_MB;
      var html = "<div class=\"form-group form-group-image\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label class=\"form-control-label mb-2\">".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <input type=\"hidden\" data-name=\"".concat(field.name, "_url\"/>\n");

      // Conteneur principal style "carte"
      html += "  <div class=\"card bg-light border-dashed image-upload-widget\">\n";
      html += "    <div class=\"card-body text-center p-4\">\n";

      // État vide
      html += "      <div class=\"image-upload-empty\">\n";
      html += "        <div class=\"mb-3 text-muted\">\n";
      html += "          <i class=\"fa fa-image fa-3x\"></i>\n";
      html += "        </div>\n";
      html += "        <div class=\"d-flex justify-content-center gap-2 mb-3\">\n";

      // Bouton Upload Local (input wrappé)
      html += "          <label class=\"btn btn-outline-primary position-relative overflow-hidden mb-0\" style=\"cursor: pointer;\">\n";
      html += "            <i class=\"fa fa-upload me-1\"></i> Upload\n";
      html += "            <input type=\"file\" accept=\"".concat(field.acceptedFormats, "\" data-name=\"").concat(field.name, "\" class=\"position-absolute top-0 start-0 opacity-0 w-100 h-100\" style=\"cursor: pointer;\"/>\n");
      html += "          </label>\n";

      // Bouton File Manager
      if (field.useFileManager) {
        html += "          <button type=\"button\" class=\"btn btn-primary btn-select-from-filemanager\" data-target=\"".concat(field.name, "\">\n");
        html += "            <i class=\"fa fa-folder-open me-1\"></i> M\xE9diath\xE8que\n";
        html += "          </button>\n";
      }
      html += "        </div>\n";
      html += "        <small class=\"text-muted d-block\">Formats: ".concat(field.acceptedFormats.split(',').map(function (f) {
        return f.replace('image/', '.');
      }).join(', '), "</small>\n");
      html += "        <small class=\"text-muted d-block\">Max: ".concat(limitSize, "Mo \u2022 Recommand\xE9: ").concat(field.format, "</small>\n");
      html += "      </div>\n"; // Fin empty state

      // État Preview
      html += "      <div class=\"image-upload-preview\" style=\"display: none; position: relative;\">\n";
      html += "        <div class=\"image-preview-container mb-2\" style=\"position: relative; display: inline-block;\">\n";
      html += "          <img src=\"\" class=\"img-fluid rounded border bg-white\" style=\"max-height: 200px; object-fit: contain;\" alt=\"Preview\">\n";
      html += "          <button type=\"button\" class=\"btn btn-danger btn-sm position-absolute top-0 end-0 translate-middle-y file-preview-delete\" style=\"right: -10px; border-radius: 50%; width: 24px; height: 24px; padding: 0; display: flex; align-items: center; justify-content: center;\">\n";
      html += "            <i class=\"fa fa-times\" style=\"font-size: 12px;\"></i>\n";
      html += "          </button>\n";
      html += "        </div>\n";
      html += "        <div><small class=\"text-muted filename-preview\"></small></div>\n";
      html += "      </div>\n"; // Fin preview state

      html += "    </div>\n"; // Fin card-body
      html += "  </div>\n"; // Fin card
      html += "</div>\n";
      return html;
    }
  }, {
    key: "_renderUrl",
    value: function _renderUrl(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <input type=\"text\" data-name=\"".concat(field.name, "\" class=\"form-control\" ").concat(requiredAttr, "/>\n");
      if (field.showTooltip) {
        html += '  <small class="form-text text-muted">URL de la vidéo. Exemple : https://youtu.be/091287</small>\n';
      }
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderIcon",
    value: function _renderIcon(field) {
      var requiredAttr = field.required ? 'required' : '';
      var requiredLabel = field.required ? ' *' : '';
      var icons = this._getIcons();
      var html = "<div class=\"form-group\" data-span=\"".concat(field.span, "\">\n");
      html += "  <label>".concat(field.label).concat(requiredLabel, "</label>\n");
      html += "  <select data-name=\"".concat(field.name, "\" class=\"select2 form-control\" ").concat(requiredAttr, ">\n");
      html += this._makeOptionTags(icons, field.required);
      html += '  </select>\n';
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderTable",
    value: function _renderTable(field) {
      var col = function col(name) {
        return "<td><textarea data-name=\"".concat(name, "\" class=\"form-control\" rows=\"1\"></textarea></td>");
      };
      var line = function line(nbCols, namePrefix, label) {
        var html = "<tr><th>".concat(label, "</th>");
        for (var i = 0; i < nbCols; i++) {
          html += col("".concat(namePrefix, "_").concat(i));
        }
        html += '</tr>';
        return html;
      };
      var html = "<div data-span=\"".concat(field.span, "\">\n");
      html += '  <table class="table table-bordered table-sm">\n';
      html += '    <tbody>\n';
      for (var i = 0; i < field.rows; i++) {
        html += line(field.cols, "table_cell_".concat(i), i + 1);
      }
      html += '    </tbody>\n';
      html += '  </table>\n';
      html += '</div>\n';
      return html;
    }
  }, {
    key: "_renderHelp",
    value: function _renderHelp(field) {
      return "<p><em>".concat(field.message, "</em></p>\n");
    }
  }, {
    key: "_renderRepeatable",
    value: function _renderRepeatable(field) {
      var html = "<div class=\"form-repeatable\" data-name=\"".concat(field.name, "\" data-min=\"").concat(field.min, "\" data-max=\"").concat(field.max, "\">\n");
      html += "  <div class=\"form-repeatable-header\">\n";
      html += "    <strong>".concat(field.label, "</strong>\n");
      html += "  </div>\n";
      html += "  <div class=\"form-repeatable-items\">\n";

      // Render initial items
      for (var i = 1; i <= field.initial; i++) {
        html += "    <fieldset class=\"form-repeatable-item\" data-index=\"".concat(i - 1, "\">\n");
        html += "      <legend>".concat(field.label, " #").concat(i, "</legend>\n");
        var itemBuilder = new FormBuilder(this.builderData);
        field.template(i, itemBuilder);
        var _iterator4 = _createForOfIteratorHelper(itemBuilder.fields),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var itemField = _step4.value;
            html += this._renderField(itemField);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        if (i > field.min) {
          html += "      <button type=\"button\" class=\"btn btn-sm btn-danger form-repeatable-remove\">".concat(field.removeButtonText, "</button>\n");
        }
        html += "    </fieldset>\n";
      }
      html += "  </div>\n";
      html += "  <button type=\"button\" class=\"btn btn-sm btn-primary form-repeatable-add\">".concat(field.addButtonText, "</button>\n");

      // Render template for new items
      var templateBuilder = new FormBuilder(this.builderData);
      // Use a unique placeholder to support nested repeatables
      var placeholder = "__INDEX_".concat(Math.random().toString(36).substr(2, 9), "__");
      field.template(placeholder, templateBuilder);
      html += "  <template class=\"form-repeatable-template\" data-placeholder=\"".concat(placeholder, "\">\n");
      html += "    <fieldset class=\"form-repeatable-item\" data-index=\"".concat(placeholder, "\">\n");
      html += "      <legend>".concat(field.label, " #").concat(placeholder, "</legend>\n");
      var _iterator5 = _createForOfIteratorHelper(templateBuilder.fields),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _itemField = _step5.value;
          html += this._renderField(_itemField);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      html += "      <button type=\"button\" class=\"btn btn-sm btn-danger form-repeatable-remove\">".concat(field.removeButtonText, "</button>\n");
      html += "    </fieldset>\n";
      html += "  </template>\n";
      html += '</div>\n';
      return html;
    }

    // ==================== HELPERS ====================
  }, {
    key: "_addField",
    value: function _addField(field) {
      if (this.currentRow !== null) {
        this.currentRow.push(field);
      } else {
        this.fields.push(field);
      }
    }
  }, {
    key: "_validateFieldName",
    value: function _validateFieldName(name) {
      if (this.fieldNames.has(name)) {
        console.warn("FormBuilder: Duplicate field name \"".concat(name, "\""));
      }
      this.fieldNames.add(name);
    }
  }, {
    key: "_makeOptionTags",
    value: function _makeOptionTags(options, isRequired) {
      var optionTags = isRequired ? '' : '<option value=""></option>';
      for (var optionValue in options) {
        if (typeof options[optionValue] === 'string') {
          optionTags += "<option value=\"".concat(optionValue, "\">").concat(options[optionValue], "</option>");
        } else {
          optionTags += "<optgroup label=\"".concat(optionValue, "\">");
          for (var suboptionValue in options[optionValue]) {
            optionTags += "<option value=\"".concat(suboptionValue, "\">").concat(options[optionValue][suboptionValue], "</option>");
          }
          optionTags += "</optgroup>";
        }
      }
      return optionTags;
    }
  }, {
    key: "_getIcons",
    value: function _getIcons() {
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
  }, {
    key: "debug",
    value: function debug() {
      console.log('FormBuilder structure:', this.fields);
      return this;
    }

    /**
     * Export form structure as JSON
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return JSON.stringify(this.fields, null, 2);
    }
  }], [{
    key: "IMAGE_MAX_SIZE_MB",
    get: function get() {
      return IMAGE_MAX_SIZE_MB;
    }
  }]);
  return FormBuilder;
}();


/***/ }),

/***/ "./assets/back/js/builder/elements/StylesheetElements.js":
/*!***************************************************************!*\
  !*** ./assets/back/js/builder/elements/StylesheetElements.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormBuilder */ "./assets/back/js/builder/elements/FormBuilder.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var builderData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [{
    category: 'Média',
    icon: 'fa-images',
    name: 'Slider',
    template: 'slider',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addRepeatable('slides', {
      label: 'Slide',
      addButtonText: '+ Ajouter un slide',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addNumber("slides][".concat(idx, "][order"), 'Ordre').addImage("slides][".concat(idx, "][imagePath"), 'Image arrière plan (1387px X 440px)', {
          required: i <= 2,
          format: '1387x440'
        }).addText("slides][".concat(idx, "][title"), 'Titre du slider', {
          required: i <= 2,
          span: 2
        }).addText("slides][".concat(idx, "][subTitle"), 'Sous-titre du slider', {
          span: 2
        }).row().addText("slides][".concat(idx, "][buttonTitle"), 'Libellé du bouton').addText("slides][".concat(idx, "][buttonPath"), 'URL de redirection du bouton').endRow();
      }
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-images',
    name: 'Carousel',
    template: 'carousel',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addRepeatable('images', {
      label: 'Image',
      addButtonText: '+ Ajouter une image',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("images][".concat(idx, "][imagePath"), 'Image arrière plan', {
          required: i <= 2,
          acceptedFormats: 'image/jpeg,image/png'
        });
      }
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-heading',
    name: 'Titre (H1 à H6)',
    template: 'title',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('alignment', 'Alignement', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).endRow().row().addSelect('type', 'Type', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', 'Titre', {
      span: 2
    }).row().addSelect('color', 'Couleur', {
      primary: 'Defaut',
      body: 'Noir'
    }, {
      required: true
    }).addSelect('subline', 'Souligné', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).endRow().render()
  }, {
    category: 'Mise en page',
    icon: 'fa-image',
    name: 'Bandeau',
    template: 'bandeau',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('height', 'Hauteur du bandeau', {
      "false": 'normal',
      "true": 'Ecran',
      entete: 'Entête'
    }, {
      required: true
    }).endRow().addImage('imagePath', 'Image', {
      acceptedFormats: 'image/jpeg,image/png'
    }).row().addSelect('alignment', 'Alignement', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).addText('toptitle', 'Titre au dessus').endRow().row().addSelect('type', 'Type', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', 'Titre', {
      span: 2
    }).addCKEditor('description', 'Description').row().addText('buttonTitle', 'Libellé du bouton').addText('buttonPath', 'URL de redirection du bouton').endRow().addSelect('target', 'Ouverture du lien', {
      _blank: 'Nouvelle fenêtre',
      _self: 'Fenêtre actuelle'
    }, {
      required: true,
      span: 2
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-align-left',
    name: 'Texte',
    template: 'text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addCKEditor('text', 'Contenu', {
      required: true
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-align-justify',
    name: 'Texte avec fond',
    template: 'text_fond',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addCKEditor('text', 'Contenu', {
      required: true
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-image',
    name: 'Image',
    template: 'image',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addImage('imagePath1', 'Image', {
      required: true,
      acceptedFormats: 'image/jpeg,image/png'
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-link',
    name: 'Bouton',
    template: 'button',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('alignment', 'Alignement', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).endRow().row().addText('title', 'Titre', {
      required: true
    }).addUrl('url', 'Lien', {
      required: true,
      showTooltip: true
    }).endRow().addSelect('target', 'Ouverture du lien', {
      _blank: 'Nouvelle fenêtre',
      _self: 'Fenêtre actuelle'
    }, {
      required: true,
      span: 2
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-minus',
    name: 'Séparateur',
    template: 'hr',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('style', 'Style', {
      no_line: 'Sans ligne',
      with_line: 'Avec Ligne'
    }, {
      required: true
    }).endRow().addSelect('height', 'Espacement', {
      4: 'Normal',
      5: 'Grand',
      0: 'Petit'
    }, {
      required: true
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-newspaper',
    name: 'Block Titre et texte',
    template: 'block_title_text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('alignment', 'Alignement du titre', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).addSelect('type', 'Type', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', 'Titre', {
      required: true,
      span: 2
    }).addCKEditor('contenu1', 'Contenu', {
      required: true
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-columns',
    name: 'Block Texte 2 colonnes',
    template: 'block_text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).endRow().fieldset('Colonne gauche', function (builder) {
      return builder.addText('title1', 'Titre gauche').addCKEditor('contenu1', 'Contenu gauche');
    }).fieldset('Colonne droite', function (builder) {
      return builder.addText('title2', 'Titre droit').addCKEditor('contenu2', 'Contenu droit');
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-images',
    name: 'Block Image colonnes',
    template: 'block_image_column234',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('alignment', 'Alignement des blocks', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).endRow().addRepeatable('columns', {
      label: 'Colonne',
      addButtonText: '+ Ajouter une colonne',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("columns][".concat(idx, "][imagePath"), "Image ".concat(i, "\xE8re colonne"), {
          required: i <= 2,
          acceptedFormats: 'image/jpeg,image/png'
        }).addText("columns][".concat(idx, "][title"), 'Titre', {
          required: i <= 2,
          span: 2
        }).addText("columns][".concat(idx, "][contenu"), 'Titre du lien', {
          span: 2
        }).addText("columns][".concat(idx, "][buttonPath"), 'Lien de redirection', {
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-icons',
    name: 'Block Picto colonnes',
    template: 'block_picto_column234',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('alignment', 'Alignement des blocks', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).addRepeatable('columns', {
      label: 'Colonne',
      addButtonText: '+ Ajouter une colonne',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addIconPicker("columns][".concat(idx, "][iconPath"), "Picto ".concat(i, "\xE8re colonne"), {
          required: i === 1
        }).addText("columns][".concat(idx, "][title"), "Titre ".concat(i, "\xE8re colonne"), {
          required: i === 1,
          span: 2
        }).addCKEditor("columns][".concat(idx, "][contenu"), "Contenu ".concat(i, "\xE8re colonne"), {
          required: i === 1
        }).addText("columns][".concat(idx, "][buttonPath"), "Lien ".concat(i, "\xE8re colonne"), {
          required: i === 1,
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-photo-video',
    name: 'Block Image-Vidéo 2 colonnes',
    template: 'block_image_video_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('position', 'Affichage', {
      image_video: 'Image à gauche - Vidéo à droite',
      video_image: 'Vidéo à gauche - Image à droite'
    }, {
      required: true
    }).fieldset('Image', function (builder) {
      return builder.addImage('imagePath', 'Image', {
        required: true,
        acceptedFormats: 'image/jpeg,image/png'
      }).addText('titleImage', "Libellé de l'image", {
        required: true,
        span: 2
      }).addCKEditor('contenuImage', "Contenu de l'image", {
        required: true
      });
    }).fieldset('Vidéo', function (builder) {
      return builder.addUrl('videoPath', 'URL de la vidéo', {
        required: true,
        showTooltip: true,
        span: 2
      }).addText('titleVideo', 'Libellé de la vidéo', {
        required: true,
        span: 2
      }).addCKEditor('contenuVideo', 'Contenu de la vidéo', {
        required: true
      });
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-id-card',
    name: 'Block Image-Texte 2 colonnes',
    template: 'block_image_texte_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_text: 'Image à gauche - Texte à droite',
      text_image: 'Texte à gauche - Image à droite'
    }, {
      required: true
    }).endRow().fieldset('Image', function (builder) {
      return builder.addImage('imagePath', 'Image', {
        required: true,
        acceptedFormats: 'image/jpeg,image/png'
      });
    }).fieldset('Texte', function (builder) {
      return builder.addText('toptitle', 'Titre au dessus', {
        span: 2
      }).row().addSelect('typetitle', 'Balise Hn', {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      }, {
        required: true
      }).addSelect('styletitle', 'Style Hn', {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      }, {
        required: true
      }).endRow().row().addText('title', 'Titre').addText('subtitle', 'Sous-titre').endRow().addSelect('subtitle_class', 'Couleur Sous-titre', {
        primary: 'Défaut',
        secondary: 'secondaire'
      }, {
        required: true
      }).addCKEditor('contenu', 'Contenu', {
        required: true
      });
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-video',
    name: 'Block Video-Texte 2 colonnes',
    template: 'block_video_texte_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_text: 'Image à gauche - Texte à droite',
      text_image: 'Texte à gauche - Image à droite'
    }, {
      required: true
    }).endRow().fieldset('Vidéo', function (builder) {
      return builder.addUrl('videoPath', 'URL de la vidéo', {
        required: true,
        showTooltip: true,
        span: 2
      });
    }).fieldset('Texte', function (builder) {
      return builder.addText('toptitle', 'Titre au dessus', {
        span: 2
      }).row().addSelect('typetitle', 'Balise Hn', {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      }, {
        required: true
      }).addSelect('styletitle', 'Style Hn', {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      }, {
        required: true
      }).endRow().row().addText('title', 'Titre').addText('subtitle', 'Sous-titre').endRow().addSelect('subtitle_class', 'Couleur Sous-titre', {
        primary: 'Défaut',
        secondary: 'secondaire'
      }, {
        required: true
      }).addCKEditor('contenu', 'Contenu', {
        required: true
      });
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-chart-bar',
    name: 'Block Chiffres clés-Texte 2 colonnes',
    template: 'block_keydata_texte_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).row().addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_text: 'Chiffre clé à gauche - Texte à droite',
      text_image: 'Texte à gauche - Chiffre clé'
    }, {
      required: true
    }).endRow().fieldset('Texte', function (builder) {
      return builder.addText('toptitle', 'Titre au dessus', {
        span: 2
      }).row().addSelect('typetitle', 'Balise Hn', {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      }, {
        required: true
      }).addSelect('styletitle', 'Style Hn', {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      }, {
        required: true
      }).endRow().row().addText('title', 'Titre', {
        required: true
      }).addText('subtitle', 'Sous-titre').endRow().addSelect('subtitle_class', 'Couleur Sous-titre', {
        primary: 'Défaut',
        secondary: 'secondaire'
      }, {
        required: true
      }).addCKEditor('contenu', 'Contenu', {
        required: true
      });
    }).fieldset('Chiffres clés', function (builder) {
      return builder.addCKEditor('contenu2', 'Contenu', {
        required: true
      });
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-folder',
    name: 'Block Onglet',
    template: 'block_onglet_text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addRepeatable('onglets', {
      label: 'Onglet',
      addButtonText: '+ Ajouter un onglet',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("onglets][".concat(idx, "][libelle"), "Libellé de l'onglet", {
          required: i <= 2,
          span: 2
        }).addCKEditor("onglets][".concat(idx, "][contenu"), 'Contenu');
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-question-circle',
    name: 'Block Onglet FAQ',
    template: 'block_onglet_faq',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addRepeatable('onglets', {
      label: 'Onglet',
      addButtonText: '+ Ajouter un onglet',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("onglets][".concat(idx, "][libelle"), "Libellé de l'onglet", {
          required: i <= 2,
          span: 2
        }).row().addText("onglets][".concat(idx, "][title"), 'Titre du block').addText("onglets][".concat(idx, "][subtitle"), 'Sous-titre du block').endRow().addRepeatable("onglets][".concat(idx, "][faqs"), {
          label: 'FAQ',
          min: 1,
          max: 6,
          initial: 2,
          addButtonText: '+ Ajouter une FAQ',
          removeButtonText: 'Supprimer',
          template: function template(j, subBuilder) {
            var jdx = typeof j === 'string' ? j + '_MINUS_1' : j - 1;
            return subBuilder.addNumber("onglets][".concat(idx, "][faqs][").concat(jdx, "][order"), 'Ordre').addText("onglets][".concat(idx, "][faqs][").concat(jdx, "][question"), "Titre de la question", {
              required: j <= 2 && i <= 2,
              span: 2
            }).addText("onglets][".concat(idx, "][faqs][").concat(jdx, "][answer"), "Réponse", {
              required: j <= 2 && i <= 2,
              span: 2
            });
          }
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-file-download',
    name: 'Block "Documents téléchargeables"',
    template: 'block_documents_telechargeables',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addRepeatable('documents', {
      label: 'Document',
      addButtonText: '+ Ajouter un document',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("documents][".concat(idx, "][imagePath"), 'Document', {
          required: i === 1,
          acceptedFormats: 'image/jpeg,image/png,application/pdf'
        }).addText("documents][".concat(idx, "][title"), 'Titre', {
          required: i === 1,
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-folder-open',
    name: 'Onglet de page',
    template: 'onglet',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addRepeatable('onglets', {
      label: 'Onglet',
      addButtonText: '+ Ajouter un onglet',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("onglets][".concat(idx, "][libelle"), "Onglet ".concat(i, " - Libell\xE9"), {
          span: 2
        }).addSelect("onglets][".concat(idx, "][contenu"), "Onglet ".concat(i, " - Contenu"), builderData.onglets, {
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-table',
    name: 'Tableau',
    template: 'table',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addHelp('Choisir une option d\'entête et remplir autant de lignes / colonnes que nécessaire').row().addSelect('headers', 'Entêtes', {
      first_line: 'Première ligne',
      first_two_lines: 'Première et deuxième lignes'
    }).addSelect('type', 'Type', {
      regular: 'Tableau standard',
      pivot: 'Tableau croisé'
    }).endRow().addTable(20, 5).render()
  }, {
    category: 'Avancé',
    icon: 'fa-table',
    name: 'Block Image-Tableau 2 colonnes',
    template: 'block_image_tableau_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).row().addSelect('colType', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_tableau: 'Image à gauche - Tableau à droite',
      tableau_image: 'Tableau à gauche - Image à droite'
    }, {
      required: true
    }).endRow().fieldset('Image', function (builder) {
      return builder.addImage('imagePath', 'Image', {
        required: true,
        acceptedFormats: 'image/jpeg,image/png'
      }).addText('titleImg', 'Titre de l\'image', {
        span: 2
      });
    }).fieldset('Tableau', function (builder) {
      return builder.addHelp('Choisir une option d\'entête et remplir autant de lignes / colonnes que nécessaire').row().addSelect('headers', 'Entêtes', {
        first_line: 'Première ligne',
        first_two_lines: 'Première et deuxième lignes'
      }).addSelect('type', 'Type', {
        regular: 'Tableau standard',
        pivot: 'Tableau croisé'
      }).endRow().addTable(8, 5);
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-chevron-down',
    name: 'Accordéon',
    template: 'accordion',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addRepeatable('items', {
      label: 'Accordéon',
      addButtonText: '+ Ajouter un item',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("items][".concat(idx, "][title"), 'Titre', {
          span: 2
        }).addImage("items][".concat(idx, "][imagePath"), 'Image', {
          acceptedFormats: 'image/jpeg,image/png'
        }).addCKEditor("items][".concat(idx, "][paragraph"), 'Paragraphe');
      }
    }).render()
  }, {
    category: 'Dynamique',
    icon: 'fa-rss',
    name: 'Block Derniers articles',
    template: 'last_news',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('type', 'Type article', {
      1: 'Actualités',
      3: "Évènement"
    }, {
      required: true
    }).addNumber('limit', "Nombre d'élément(s) maximum").endRow().render()
  }, {
    category: 'Dynamique',
    icon: 'fa-newspaper',
    name: 'Block Actualités',
    template: 'actualites',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).row().addSelect('categoryID', 'Filtre des actualités via une catégorie', builderData.categories).addNumber('limit', "Nombre d'élément(s) maximum").endRow().addText('topTitle', "Titre top", {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', "Titre du bloc", {
      span: 2
    }).addCKEditor('description', "Description du bloc").addText('buttonTitle', "Titre du bouton de redirection", {
      span: 2
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-youtube',
    name: 'Vidéo Youtube',
    template: 'youtube',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addUrl('videoPath', 'URL de la vidéo', {
      required: true,
      showTooltip: true
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-chart-line',
    name: 'Block Chiffres clés',
    template: 'block_key_datas',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addImage('imagePath', 'Image', {
      acceptedFormats: 'image/jpeg,image/png'
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', "Titre du bloc", {
      span: 2
    }).addRepeatable('keys', {
      label: 'Chiffre clé',
      addButtonText: '+ Ajouter un chiffre clé',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("keys][".concat(idx, "][key"), "Chiffre cl\xE9 ".concat(i + 1), {
          required: i < 3,
          span: 2
        }).addText("keys][".concat(idx, "][data"), "Descriptif", {
          required: i < 3,
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-th-large',
    name: 'Block 4 Cards',
    template: 'block_4_cards',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addText('topTitle', "Titre top du bloc", {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', "Titre du bloc", {
      span: 2
    }).row().addText('buttonTitle', "Titre du bouton de redirection").addText('buttonPath', "URL de redirection").endRow().addRepeatable('cards', {
      label: 'Carte',
      addButtonText: '+ Ajouter une carte',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addSelect("cards][".concat(idx, "][alignment"), 'Alignement des éléments', {
          start: 'Gauche',
          center: 'Centre',
          end: 'Droite'
        }, {
          required: true
        }).addIconPicker("cards][".concat(idx, "][imageIco"), 'Icône').addText("cards][".concat(idx, "][title"), "Titre de la carte", {
          required: i === 0,
          span: 2
        }).addText("cards][".concat(idx, "][description"), "Description de la carte", {
          span: 2
        }).row().addText("cards][".concat(idx, "][linkTitle"), "Titre du lien").addText("cards][".concat(idx, "][linkPath"), "URL redirection").endRow();
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-list-ol',
    name: 'Etapes',
    template: 'step',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addText('title', 'Titre', {
      span: 2
    }).addImage('imagePath', 'Image', {
      acceptedFormats: 'image/jpeg,image/png'
    }).addRepeatable('steps', {
      label: 'Etape',
      addButtonText: '+ Ajouter une étape',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("steps][".concat(idx, "][step"), 'Etape n°', {
          span: 2
        }).addText("steps][".concat(idx, "][title"), 'Titre', {
          span: 2
        }).addCKEditor("steps][".concat(idx, "][paragraph"), 'Paragraphe');
      }
    }).render()
  },
  // ==================== NOUVEAUX ÉLÉMENTS ====================
  {
    category: 'Contenu interactif',
    icon: 'fa-rectangle-list',
    name: 'Formulaire Avancé',
    template: 'form_builder',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addText('title', 'Titre au-dessus du formulaire', {
      span: 2
    }).addCKEditor('description', 'Description').addSelect('formId', 'Sélectionnez le formulaire à afficher', builderData.forms || {}, {
      required: true,
      span: 2
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-star',
    name: 'Hero Section',
    template: 'hero_section',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addImage('backgroundImage', 'Image de fond (1920x1080)', {
      required: true,
      format: '1920x1080'
    }).addSelect('overlayOpacity', 'Opacité du filtre', {
      '0': 'Aucun',
      '0.2': 'Léger (20%)',
      '0.5': 'Moyen (50%)',
      '0.8': 'Sombre (80%)'
    }, {
      required: true
    }).addText('title', 'Titre principal', {
      span: 2,
      required: true
    }).addText('subtitle', 'Sous-titre', {
      span: 2
    }).fieldset('Bouton Principal', function (builder) {
      return builder.addText('btn1_text', 'Libellé').addUrl('btn1_url', 'Lien');
    }).fieldset('Bouton Secondaire', function (builder) {
      return builder.addText('btn2_text', 'Libellé').addUrl('btn2_url', 'Lien');
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-table',
    name: 'Tableaux de Prix',
    template: 'pricing_table',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addText('mainTitle', 'Titre de la section', {
      span: 2
    }).addRepeatable('plans', {
      label: 'Offre',
      addButtonText: '+ Ajouter une offre',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("plans][".concat(idx, "][name"), 'Nom de l\'offre (ex: Standard)', {
          required: true
        }).addSelect("plans][".concat(idx, "][highlight"), 'Mettre en avant', {
          "false": 'Non',
          "true": 'Oui'
        }).row().addText("plans][".concat(idx, "][price"), 'Prix').addText("plans][".concat(idx, "][currency"), 'Devise (ex: €)', {
          defaultValue: '€'
        }).endRow().addText("plans][".concat(idx, "][period"), 'Période (ex: /mois)').addTextarea("plans][".concat(idx, "][features"), 'Fonctionnalités (une par ligne)', {
          rows: 5
        }).fieldset('Bouton', function (btnBuilder) {
          return btnBuilder.addText("plans][".concat(idx, "][btn_text"), 'Libellé').addUrl("plans][".concat(idx, "][btn_url"), 'Lien');
        });
      }
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-comments',
    name: 'Témoignages',
    template: 'testimonials',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addText('title', 'Titre de la section', {
      span: 2
    }).addRepeatable('reviews', {
      label: 'Témoignage',
      addButtonText: '+ Ajouter un avis',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("reviews][".concat(idx, "][avatar"), 'Photo (Avatar)', {
          format: '200x200'
        }).row().addText("reviews][".concat(idx, "][name"), 'Nom', {
          required: true
        }).addText("reviews][".concat(idx, "][position"), 'Poste / Entreprise').endRow().addSelect("reviews][".concat(idx, "][stars"), 'Note', {
          5: '⭐⭐⭐⭐⭐',
          4: '⭐⭐⭐⭐',
          3: '⭐⭐⭐',
          2: '⭐⭐',
          1: '⭐'
        }, {
          required: true
        }).addTextarea("reviews][".concat(idx, "][quote"), 'Citation', {
          required: true,
          rows: 3
        });
      }
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-handshake-o',
    name: 'Barre de Logos',
    template: 'logo_bar',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addRepeatable('logos', {
      label: 'Partenaire',
      addButtonText: '+ Ajouter un logo',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("logos][".concat(idx, "][image"), 'Logo', {
          required: true
        }).addUrl("logos][".concat(idx, "][url"), 'Lien (optionnel)');
      }
    }).render()
  }, {
    category: 'Visuel',
    icon: 'fa-th',
    name: 'Galerie Masonry',
    template: 'masonry_gallery',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addRepeatable('images', {
      label: 'Image',
      addButtonText: '+ Ajouter une image',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("images][".concat(idx, "][path"), 'Image', {
          required: true
        }).addText("images][".concat(idx, "][caption"), 'Légende (optionnel)');
      }
    }).render()
  }, {
    category: 'Visuel',
    icon: 'fa-adjust',
    name: 'Comparateur Avant/Après',
    template: 'before_after',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).row().addImage('image_before', 'Image "Avant"', {
      required: true
    }).addImage('image_after', 'Image "Après"', {
      required: true
    }).endRow().row().addText('label_before', 'Label "Avant"', {
      defaultValue: 'Avant'
    }).addText('label_after', 'Label "Après"', {
      defaultValue: 'Après'
    }).endRow().render()
  }, {
    category: 'Corporate',
    icon: 'fa-history',
    name: 'Timeline',
    template: 'timeline',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addSelect('orientation', 'Orientation', {
      vertical: 'Verticale',
      horizontal: 'Horizontale'
    }, {
      required: true
    }).addRepeatable('events', {
      label: 'Événement',
      addButtonText: '+ Ajouter un événement',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText("events][".concat(idx, "][date"), 'Date / Année', {
          required: true
        }).addText("events][".concat(idx, "][title"), 'Titre', {
          required: true
        }).addTextarea("events][".concat(idx, "][description"), 'Description', {
          rows: 3
        }).addIconPicker("events][".concat(idx, "][icon"), 'Icône');
      }
    }).render()
  }, {
    category: 'Corporate',
    icon: 'fa-users',
    name: 'Équipe',
    template: 'team_members',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addText('title', 'Titre de la section', {
      span: 2
    }).addRepeatable('members', {
      label: 'Membre',
      addButtonText: '+ Ajouter un membre',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage("members][".concat(idx, "][photo"), 'Photo', {
          format: '400x400',
          required: true
        }).row().addText("members][".concat(idx, "][name"), 'Nom', {
          required: true
        }).addText("members][".concat(idx, "][position"), 'Poste', {
          required: true
        }).endRow().addTextarea("members][".concat(idx, "][bio"), 'Courte biographie', {
          rows: 2
        }).row().addUrl("members][".concat(idx, "][linkedin"), 'LinkedIn').addUrl("members][".concat(idx, "][twitter"), 'Twitter / X').endRow();
      }
    }).render()
  }, {
    category: 'Corporate',
    icon: 'fa-map-marker',
    name: 'Google Maps Pro',
    template: 'google_maps',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addText('address', 'Adresse complète', {
      span: 2,
      required: true,
      helpText: 'Utilisée pour centrer la carte si lat/lng ne sont pas fournis'
    }).row().addNumber('latitude', 'Latitude', {
      helpText: 'Ex: 48.8566'
    }).addNumber('longitude', 'Longitude', {
      helpText: 'Ex: 2.3522'
    }).endRow().row().addNumber('zoom', 'Niveau de zoom (1-20)', {
      defaultValue: 15,
      min: 1,
      max: 20
    }).addSelect('mapStyle', 'Style de carte', {
      light: 'Clair',
      dark: 'Sombre',
      satellite: 'Satellite'
    }, {
      required: true
    }).endRow().fieldset('Marqueur', function (builder) {
      return builder.addText('markerTitle', 'Titre du marqueur').addTextarea('markerDesc', 'Description (Info-bulle)');
    }).render()
  }, {
    category: 'Corporate',
    icon: 'fa-sort-numeric-asc',
    name: 'Compteurs Animés',
    template: 'animated_counters',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      "false": 'Non',
      "true": 'Oui'
    }, {
      required: true
    }).addImage('backgroundImage', 'Image de fond (optionnel)').addRepeatable('counters', {
      label: 'Compteur',
      addButtonText: '+ Ajouter un compteur',
      removeButtonText: 'Supprimer',
      template: function template(i, builder) {
        var idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.row().addNumber("counters][".concat(idx, "][number"), 'Nombre final', {
          required: true
        }).addText("counters][".concat(idx, "][suffix"), 'Suffixe (ex: %, +)', {
          span: 1
        }).endRow().addText("counters][".concat(idx, "][label"), 'Libellé', {
          required: true
        }).addIconPicker("counters][".concat(idx, "][icon"), 'Icône');
      }
    }).render()
  }];
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _BuilderElement_vue__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./BuilderElement.vue */ "./assets/back/js/builder/components/BuilderElement.vue");
/* harmony import */ var _BuilderSidebar_vue__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./BuilderSidebar.vue */ "./assets/back/js/builder/components/BuilderSidebar.vue");
/* harmony import */ var _RevisionsModal_vue__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./RevisionsModal.vue */ "./assets/back/js/builder/components/RevisionsModal.vue");
/* harmony import */ var _elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../elements/StylesheetElements */ "./assets/back/js/builder/elements/StylesheetElements.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_33___default()),
    BuilderElement: _BuilderElement_vue__WEBPACK_IMPORTED_MODULE_34__["default"],
    BuilderSidebar: _BuilderSidebar_vue__WEBPACK_IMPORTED_MODULE_35__["default"],
    RevisionsModal: _RevisionsModal_vue__WEBPACK_IMPORTED_MODULE_36__["default"]
  },
  props: {
    elements: {
      type: [Array, Object, String],
      "default": function _default() {
        return [];
      }
    },
    basename: {
      type: String,
      required: true
    },
    builderData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    previewUrl: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      currentElements: this.initialize(this.elements),
      formHasChanged: false,
      previewWindow: null,
      previewUpdateTimer: null
    };
  },
  watch: {
    currentElements: {
      handler: function handler() {
        this.schedulePreviewUpdate();
      },
      deep: true
    }
  },
  methods: {
    onChange: function onChange() {
      this.formHasChanged = true;
    },
    removeElementById: function removeElementById(id) {
      this.currentElements = this.currentElements.filter(function (element) {
        return element.id !== id;
      });
      this.formHasChanged = true;
    },
    moveUp: function moveUp(index) {
      if (index > 0) {
        this.swapElements(index, index - 1);
      }
    },
    moveDown: function moveDown(index) {
      if (index < this.currentElements.length - 1) {
        this.swapElements(index, index + 1);
      }
    },
    swapElements: function swapElements(oldPosition, newPosition) {
      var tmpElement = this.currentElements[oldPosition];
      this.$set(this.currentElements, oldPosition, this.currentElements[newPosition]);
      this.$set(this.currentElements, newPosition, tmpElement);
      this.formHasChanged = true;
    },
    hideFormElement: function hideFormElement(id) {
      var element = this.currentElements.find(function (element) {
        return element.id === id;
      });
      if (element) element.formVisible = false;
    },
    showFormElement: function showFormElement(id) {
      var element = this.currentElements.find(function (element) {
        return element.id === id;
      });
      if (element) element.formVisible = true;
    },
    hideElement: function hideElement(id) {
      var element = this.currentElements.find(function (element) {
        return element.id === id;
      });
      if (element) {
        element.visible = false;
        this.formHasChanged = true;
      }
    },
    showElement: function showElement(id) {
      var element = this.currentElements.find(function (element) {
        return element.id === id;
      });
      if (element) {
        element.visible = true;
        this.formHasChanged = true;
      }
    },
    initialize: function initialize(elements) {
      var _this = this;
      if (!elements) {
        return [];
      }
      var currentElements = [];
      Object.entries(elements).forEach(function (element) {
        var _element = _slicedToArray(element, 2),
          key = _element[0],
          value = _element[1];
        var currentElement = _this._createElementFromTemplate(value.template, value);
        if (currentElement) {
          currentElement.formVisible = false;
          currentElements.push(currentElement);
        }
      });
      return currentElements;
    },
    _createElementFromTemplate: function _createElementFromTemplate(template, element) {
      var available = (0,_elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_37__["default"])(this.builderData).find(function (element) {
        return element.template === template;
      });
      if (!available) {
        return null;
      }
      var createdElement = {
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
    duplicateElement: function duplicateElement(id) {
      var index = this.currentElements.findIndex(function (el) {
        return el.id === id;
      });
      if (index === -1) return;
      var original = this.currentElements[index];

      // Deep clone the element to avoid reference issues
      // We need to generate a new ID and potentially handle form content cloning if it's complex
      // For now, simple object copy with new ID

      var newElement = JSON.parse(JSON.stringify(original));
      newElement.id = this._randomString();
      newElement.name = original.name + ' (Copie)';
      newElement.icon = original.icon;
      newElement.formVisible = true; // Open the new element's form

      // Insert after the original
      this.currentElements.splice(index + 1, 0, newElement);
      this.formHasChanged = true;

      // Scroll to new element?
    },
    collapseAll: function collapseAll() {
      this.currentElements.forEach(function (element) {
        element.formVisible = false;
      });
    },
    expandAll: function expandAll() {
      this.currentElements.forEach(function (element) {
        element.formVisible = true;
      });
    },
    clearAll: function clearAll() {
      if (confirm('Êtes-vous sûr de vouloir supprimer tous les éléments ?')) {
        this.currentElements = [];
        this.formHasChanged = true;
      }
    },
    openPreview: function openPreview() {
      var _this2 = this;
      if (!this.previewUrl) {
        alert('L\'URL de prévisualisation n\'est pas configurée.');
        return;
      }
      var windowFeatures = 'width=1200,height=800,menubar=no,toolbar=no,location=no,status=no';
      if (this.previewWindow && !this.previewWindow.closed) {
        this.previewWindow.focus();
      } else {
        this.previewWindow = window.open(this.previewUrl, 'BuilderPreview', windowFeatures);

        // Wait for preview window to be ready
        window.addEventListener('message', function (event) {
          if (event.data.type === 'PREVIEW_READY') {
            _this2.sendPreviewUpdate();
          }
        });
      }
    },
    openRevisions: function openRevisions() {
      if (this.$refs.revisionsModal) {
        this.$refs.revisionsModal.show();
      }
    },
    restoreElements: function restoreElements(elements) {
      var _this3 = this;
      // elements comes directly from the database json via API
      // it needs to be parsed through initialize to convert to valid Vue structure with generated IDs
      // Ensure all elements forms are open by default like normal initial load

      var restoredElements = [];
      if (elements && _typeof(elements) === 'object') {
        restoredElements = this.initialize(elements);
      }

      // Small delay to allow Vue to clear DOM safely before injecting new ones
      this.currentElements = [];
      this.$nextTick(function () {
        _this3.currentElements = restoredElements;
        _this3.formHasChanged = true;
      });
    },
    previewRevision: function previewRevision(elements) {
      if (!this.previewWindow || this.previewWindow.closed) {
        alert('Veuillez d\'abord ouvrir la fenêtre d\'aperçu en direct avec le bouton "Aperçu".');
        return;
      }
      var previewElements = [];
      if (elements && _typeof(elements) === 'object') {
        previewElements = this.initialize(elements);
      }
      var elementsToSend = JSON.parse(JSON.stringify(previewElements));
      this.previewWindow.postMessage({
        type: 'UPDATE_PREVIEW',
        elements: elementsToSend
      }, '*');
    },
    sendPreviewUpdate: function sendPreviewUpdate() {
      var _this4 = this;
      if (this.previewWindow && !this.previewWindow.closed) {
        // Deep clone elements
        var elementsToSend = JSON.parse(JSON.stringify(this.currentElements));

        // Capture current values from the DOM for each element
        // Since ElementFormMounter doesn't sync back to Vue data, we must read from DOM
        elementsToSend.forEach(function (element) {
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

            var prefix = element.id + '-';
            // Use a more specific selector to avoid getting inputs from other elements if IDs overlap (unlikely but safe)
            // But actually we want to find inputs based on the structure ElementFormMounter created.
            // ElementFormMounter uses ID: elementId + '-' + cleanPropName
            var inputs = document.querySelectorAll("[id^=\"".concat(prefix, "\"]"));
            inputs.forEach(function (input) {
              // Skip if input doesn't have a name (shouldn't happen for valid fields)
              if (!input.name) return;

              // Parse name to build nested structure
              // Name format: basename[elementId][prop][subprop]...
              // We want to extract [prop][subprop]...

              // The prefix in name is `${this.basename}[${element.id}]`
              var namePrefix = "".concat(_this4.basename, "[").concat(element.id, "]");
              if (!input.name.startsWith(namePrefix)) return;
              var remaining = input.name.substring(namePrefix.length);
              // remaining is like "[plans][0][name]" or "[title]"

              var path = remaining.split('][').map(function (p) {
                return p.replace(/[\[\]]/g, '');
              });
              var value;
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
                _this4._setNestedValue(element, path, value);
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
    _setNestedValue: function _setNestedValue(obj, path, value) {
      var current = obj;
      for (var i = 0; i < path.length - 1; i++) {
        var key = path[i];

        // If key is empty string? shouldn't happen with split logic above
        // If we need to create array or object?
        // "plans" -> "0" -> "name"
        // obj["plans"] should be array/object.

        if (current[key] === undefined || current[key] === null) {
          // Check if next key is a number to decide if array
          var nextKey = path[i + 1];
          var isInt = /^\d+$/.test(nextKey);
          current[key] = isInt ? [] : {};
        }
        current = current[key];
      }
      var lastKey = path[path.length - 1];
      current[lastKey] = value;
    },
    schedulePreviewUpdate: function schedulePreviewUpdate() {
      var _this5 = this;
      if (this.previewUpdateTimer) {
        clearTimeout(this.previewUpdateTimer);
      }
      this.previewUpdateTimer = setTimeout(function () {
        _this5.sendPreviewUpdate();
      }, 500); // Debounce 500ms
    },
    _randomString: function _randomString() {
      var x = 2147423648;
      var now = +new Date();
      return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ now).toString(36);
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    // Track form changes for unsaved warning
    document.addEventListener('change', function () {
      return _this6.formHasChanged = true;
    });
    document.addEventListener('submit', function () {
      return _this6.formHasChanged = false;
    });

    // Listen for ANY input change in the builder to update preview
    // We use a debounced update, so it's safe to listen to 'input' events
    var updateEvents = ['input', 'change', 'blur', 'keyup'];
    updateEvents.forEach(function (eventType) {
      _this6.$el.addEventListener(eventType, function (e) {
        // Only care if it's an input/select/textarea inside the builder
        if (e.target.matches('input, select, textarea, trix-editor')) {
          _this6.schedulePreviewUpdate();
        }
      }, {
        capture: true
      }); // Use capture to ensure we catch it
    });

    // Also listen for Select2 events using jQuery since they don't bubble as native events
    if (__webpack_provided_window_dot_jQuery) {
      var $el = __webpack_provided_window_dot_jQuery(this.$el);
      $el.on('select2:select select2:unselect', function (e) {
        _this6.schedulePreviewUpdate();
      });
    }
    window.addEventListener('beforeunload', function (event) {
      if (_this6.formHasChanged) {
        event.preventDefault();
        event.returnValue = '';
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/ElementFormMounter */ "./assets/back/js/builder/elements/ElementFormMounter.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['basename', 'element', 'currentElements', 'builderData', 'index'],
  data: function data() {
    return {
      isEditingName: false
    };
  },
  computed: {
    templateInputName: function templateInputName() {
      return _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__["default"].inputName(this.basename, this.element.id, 'template');
    },
    visibleInputName: function visibleInputName() {
      return _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__["default"].inputName(this.basename, this.element.id, 'visible');
    },
    nameInputName: function nameInputName() {
      return _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__["default"].inputName(this.basename, this.element.id, 'name');
    },
    form: function form() {
      return this.element.form;
    },
    formVisible: function formVisible() {
      return this.element.formVisible;
    }
  },
  methods: {
    startEditingName: function startEditingName() {
      var _this = this;
      this.isEditingName = true;
      this.$nextTick(function () {
        if (_this.$refs.nameInput) {
          _this.$refs.nameInput.focus();
        }
      });
    },
    stopEditingName: function stopEditingName() {
      this.isEditingName = false;
      if (!this.element.name || this.element.name.trim() === '') {
        // Revert to default name if empty? Or keep empty? 
        // Let's keep it but maybe we should have a default.
        // For now, let user decide.
      }
    },
    remove: function remove() {
      var _this2 = this;
      _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__["default"].confirm(function () {
        return _this2.$emit('elementRemoved', _this2.element.id);
      });
    },
    duplicate: function duplicate() {
      this.$emit('duplicate', this.element.id);
    },
    toggleForm: function toggleForm() {
      if (this.formVisible) {
        if (_elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__["default"].validateFormElement(this.$refs.elementForm)) {
          this.$emit('elementFormHidden', this.element.id);
        }
      } else {
        this.$emit('elementFormShown', this.element.id);
      }
    },
    toggleVisibility: function toggleVisibility() {
      if (this.element.visible) {
        this.$emit('elementHidden', this.element.id);
      } else {
        this.$emit('elementShown', this.element.id);
      }
    }
  },
  mounted: function mounted() {
    _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_2__["default"].mount(this.basename, this.element, this.$refs.elementForm);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/StylesheetElements */ "./assets/back/js/builder/elements/StylesheetElements.js");
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BuilderSidebar',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_14___default())
  },
  props: ['builderData'],
  data: function data() {
    return {
      availableElements: (0,_elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_15__["default"])(this.builderData),
      searchQuery: '',
      collapsedCategories: {}
    };
  },
  computed: {
    filteredElements: function filteredElements() {
      if (!this.searchQuery) {
        return this.availableElements;
      }
      var query = this.searchQuery.toLowerCase();
      return this.availableElements.filter(function (element) {
        return element.name.toLowerCase().includes(query);
      });
    },
    groupedElements: function groupedElements() {
      var groups = {};
      // Define order of categories if desired, or just let them appear naturally
      var order = ['Mise en page', 'Basique', 'Média', 'Avancé', 'Dynamique', 'Autres'];
      this.filteredElements.forEach(function (element) {
        var category = element.category || 'Autres';
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(element);
      });

      // Sort keys based on order
      var sortedGroups = {};
      Object.keys(groups).sort(function (a, b) {
        return order.indexOf(a) - order.indexOf(b);
      }).forEach(function (key) {
        sortedGroups[key] = groups[key];
      });
      return sortedGroups;
    }
  },
  methods: {
    toggleCategory: function toggleCategory(category) {
      this.$set(this.collapsedCategories, category, !this.collapsedCategories[category]);
    },
    cloneElement: function cloneElement(element) {
      // Return a fresh copy of the element structure for the builder
      return {
        template: element.template,
        name: element.name,
        icon: element.icon,
        // Pass the icon to the builder element
        visible: true,
        form: element.form,
        formVisible: true,
        // Auto-open form on drop
        id: this._randomString()
      };
    },
    _randomString: function _randomString() {
      var x = 2147423648;
      var now = +new Date();
      return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ now).toString(36);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RevisionsModal',
  props: {
    entityClass: {
      type: String,
      required: true
    },
    entityId: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      revisions: [],
      loading: false,
      error: null,
      modalInstance: null
    };
  },
  methods: {
    show: function show() {
      if (!this.modalInstance && window.bootstrap) {
        this.modalInstance = new window.bootstrap.Modal(this.$refs.modal);
      }
      if (this.modalInstance) {
        this.modalInstance.show();
        this.fetchRevisions();
      } else {
        // Fallback if bootstrap is injected globally via jQuery
        if (__webpack_provided_window_dot_jQuery) {
          __webpack_provided_window_dot_jQuery(this.$refs.modal).modal('show');
          this.fetchRevisions();
        }
      }
    },
    hide: function hide() {
      if (this.modalInstance) {
        this.modalInstance.hide();
      } else if (__webpack_provided_window_dot_jQuery) {
        __webpack_provided_window_dot_jQuery(this.$refs.modal).modal('hide');
      }
    },
    fetchRevisions: function fetchRevisions() {
      var _this = this;
      if (!this.entityClass || !this.entityId) {
        this.error = "Identifiants de l'entité manquants.";
        return;
      }
      this.loading = true;
      this.error = null;
      var url = "/admin/api/builder-revisions?entityClass=".concat(encodeURIComponent(this.entityClass), "&entityId=").concat(encodeURIComponent(this.entityId));
      fetch(url).then(function (response) {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des révisions');
        }
        return response.json();
      }).then(function (data) {
        _this.revisions = data;
      })["catch"](function (error) {
        _this.error = error.message;
      })["finally"](function () {
        _this.loading = false;
      });
    },
    formatDate: function formatDate(dateString) {
      var date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    restoreRevision: function restoreRevision(revision) {
      if (confirm('Êtes-vous sûr de vouloir remplacer le contenu actuel par cette ancienne version ? (Les modifications ne seront définitives qu\'après avoir sauvegardé la page)')) {
        this.$emit('restore', revision.elements);
        this.hide();
      }
    },
    previewRevision: function previewRevision(revision) {
      this.$emit('preview', revision.elements);
    }
  },
  mounted: function mounted() {
    // Initialize modal when component is mounted if bootstrap is available
    if (window.bootstrap) {
      this.modalInstance = new window.bootstrap.Modal(this.$refs.modal, {
        backdrop: 'static'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder-wrapper"
  }, [_c("builder-sidebar", {
    attrs: {
      "builder-data": _vm.builderData
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "builder-content"
  }, [_c("div", {
    staticClass: "builder-toolbar"
  }, [_c("div", {
    staticClass: "builder-toolbar__section"
  }, [_c("div", {
    staticClass: "builder-toolbar__group"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      type: "button",
      title: "Réduire tous les éléments"
    },
    on: {
      click: _vm.collapseAll
    }
  }, [_c("i", {
    staticClass: "fa fa-compress"
  })]), _vm._v(" "), _c("div", {
    staticClass: "builder-toolbar__divider"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      type: "button",
      title: "Développer tous les éléments"
    },
    on: {
      click: _vm.expandAll
    }
  }, [_c("i", {
    staticClass: "fa fa-expand"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "builder-toolbar__section"
  }, [_vm.previewUrl ? _c("button", {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      type: "button",
      title: "Ouvrir l'aperçu en direct"
    },
    on: {
      click: _vm.openPreview
    }
  }, [_c("i", {
    staticClass: "fa fa-eye me-1"
  }), _vm._v(" Aperçu\n                ")]) : _vm._e(), _vm._v(" "), _vm.builderData && _vm.builderData.entityClass && _vm.builderData.entityId ? _c("button", {
    staticClass: "btn btn-sm btn-outline-info",
    attrs: {
      type: "button",
      title: "Voir l'historique des révisions"
    },
    on: {
      click: _vm.openRevisions
    }
  }, [_c("i", {
    staticClass: "fa fa-history me-1"
  }), _vm._v(" Historique\n                ")]) : _vm._e(), _vm._v(" "), _vm.currentElements.length > 0 ? _c("button", {
    staticClass: "btn btn-sm btn-outline-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.clearAll
    }
  }, [_c("i", {
    staticClass: "fa fa-trash me-1"
  }), _vm._v(" Tout supprimer\n                ")]) : _vm._e()])]), _vm._v(" "), _c("draggable", {
    staticClass: "builder-canvas",
    attrs: {
      handle: ".builder__element__handle",
      group: "builder",
      "ghost-class": "builder__element--ghost"
    },
    on: {
      change: _vm.onChange
    },
    model: {
      value: _vm.currentElements,
      callback: function callback($$v) {
        _vm.currentElements = $$v;
      },
      expression: "currentElements"
    }
  }, [_vm._l(_vm.currentElements, function (element, index) {
    return _c("builder-element", {
      key: element.id,
      attrs: {
        element: element,
        basename: _vm.basename,
        "builder-data": _vm.builderData,
        "current-elements": _vm.currentElements,
        index: index
      },
      on: {
        elementRemoved: _vm.removeElementById,
        elementFormHidden: _vm.hideFormElement,
        elementFormShown: _vm.showFormElement,
        elementHidden: _vm.hideElement,
        elementShown: _vm.showElement,
        duplicate: _vm.duplicateElement,
        moveUp: function moveUp($event) {
          return _vm.moveUp(index);
        },
        moveDown: function moveDown($event) {
          return _vm.moveDown(index);
        }
      }
    });
  }), _vm._v(" "), _vm.currentElements.length === 0 ? _c("div", {
    staticClass: "builder-canvas__empty",
    attrs: {
      slot: "footer"
    },
    slot: "footer"
  }, [_c("div", {
    staticClass: "text-center text-muted"
  }, [_c("i", {
    staticClass: "fa fa-arrow-left fa-2x mb-3"
  }), _vm._v(" "), _c("p", [_vm._v("Glissez des éléments depuis la barre latérale pour construire votre page.")])])]) : _vm._e()], 2)], 1), _vm._v(" "), _vm.builderData && _vm.builderData.entityClass && _vm.builderData.entityId ? _c("revisions-modal", {
    ref: "revisionsModal",
    attrs: {
      "entity-class": _vm.builderData.entityClass,
      "entity-id": _vm.builderData.entityId
    },
    on: {
      restore: _vm.restoreElements,
      preview: _vm.previewRevision
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder__element",
    "class": {
      "builder__element--hidden": !_vm.element.visible
    }
  }, [_c("div", {
    staticClass: "builder__element__header"
  }, [_c("div", {
    staticClass: "builder__element__header__left"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "builder__element__title"
  }, [_c("span", {
    staticClass: "badge badge-secondary"
  }, [_vm._v(_vm._s(_vm.index + 1))]), _vm._v(" "), _c("i", {
    staticClass: "fa me-2 text-muted",
    "class": _vm.element.icon || "fa-cube",
    staticStyle: {
      "margin-right": "8px"
    }
  }), _vm._v(" "), _vm.isEditingName ? _c("div", {
    staticClass: "builder__element__title-edit"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.name,
      expression: "element.name"
    }],
    ref: "nameInput",
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.element.name
    },
    on: {
      blur: _vm.stopEditingName,
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        return _vm.stopEditingName.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "name", $event.target.value);
      }
    }
  })]) : _c("strong", {
    attrs: {
      title: "Double-cliquer pour renommer"
    },
    on: {
      dblclick: _vm.startEditingName
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.element.name) + "\n                    "), _c("i", {
    staticClass: "fa fa-pencil ms-2 text-muted",
    staticStyle: {
      "font-size": "0.8em",
      opacity: "0.5"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "builder__element__actions"
  }, [_vm.form ? _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      title: _vm.formVisible ? "Réduire" : "Éditer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleForm.apply(null, arguments);
      }
    }
  }, [_c("i", {
    "class": _vm.formVisible ? "fa fa-chevron-down" : "fa fa-chevron-right"
  })]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      title: "Dupliquer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.duplicate.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-copy"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      title: _vm.element.visible ? "Masquer" : "Afficher"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleVisibility.apply(null, arguments);
      }
    }
  }, [_c("i", {
    "class": _vm.element.visible ? "fa fa-eye" : "fa fa-eye-slash"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      title: "Supprimer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.remove.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-trash"
  })])])]), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.templateInputName
    },
    domProps: {
      value: _vm.element.template
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.visibleInputName
    },
    domProps: {
      value: _vm.element.visible ? 1 : 0
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.nameInputName
    },
    domProps: {
      value: _vm.element.name
    }
  }), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide"
    }
  }, [_vm.form ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formVisible,
      expression: "formVisible"
    }],
    staticClass: "builder__element__body"
  }, [_c("div", {
    ref: "elementForm",
    staticClass: "builder__element__form",
    domProps: {
      innerHTML: _vm._s(_vm.form)
    }
  })]) : _vm._e()])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder__element__handle",
    attrs: {
      title: "Déplacer"
    }
  }, [_c("i", {
    staticClass: "fa fa-grip-vertical"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder-sidebar"
  }, [_c("div", {
    staticClass: "builder-sidebar__header"
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Rechercher..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "builder-sidebar__content"
  }, _vm._l(_vm.groupedElements, function (elements, category) {
    return _c("div", {
      key: category,
      staticClass: "builder-sidebar__category mb-3"
    }, [_c("div", {
      staticClass: "builder-sidebar__category-title d-flex justify-content-between align-items-center p-2 bg-light rounded cursor-pointer",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.toggleCategory(category);
        }
      }
    }, [_c("span", {
      staticClass: "fw-bold text-uppercase small text-muted"
    }, [_vm._v(_vm._s(category))]), _vm._v(" "), _c("i", {
      staticClass: "fa fa-xs text-muted",
      "class": _vm.collapsedCategories[category] ? "fa-chevron-right" : "fa-chevron-down"
    })]), _vm._v(" "), _c("draggable", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.collapsedCategories[category],
        expression: "!collapsedCategories[category]"
      }],
      staticClass: "dragArea list-group mt-2",
      attrs: {
        list: elements,
        group: {
          name: "builder",
          pull: "clone",
          put: false
        },
        clone: _vm.cloneElement,
        sort: false
      }
    }, _vm._l(elements, function (element) {
      return _c("div", {
        key: element.template,
        staticClass: "list-group-item builder-sidebar__item"
      }, [_c("div", {
        staticClass: "builder-sidebar__item-icon"
      }, [_c("i", {
        staticClass: "fa",
        "class": element.icon || "fa-cube"
      })]), _vm._v(" "), _c("span", {
        staticClass: "builder-sidebar__item-label"
      }, [_vm._v(_vm._s(element.name))])]);
    }), 0)], 1);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "modal",
    staticClass: "modal fade",
    attrs: {
      id: "revisionsModal",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm.loading ? _c("div", {
    staticClass: "text-center py-5"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin fa-3x text-muted"
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2 text-muted"
  }, [_vm._v("Chargement de l'historique...")])]) : _vm.error ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n                    " + _vm._s(_vm.error) + "\n                ")]) : _vm.revisions.length === 0 ? _c("div", {
    staticClass: "text-center py-5 text-muted"
  }, [_c("i", {
    staticClass: "fa fa-file-alt fa-3x mb-3"
  }), _vm._v(" "), _c("p", [_vm._v("Aucune révision trouvée pour ce contenu.")])]) : _c("div", {
    staticClass: "list-group"
  }, _vm._l(_vm.revisions, function (revision) {
    return _c("div", {
      key: revision.id,
      staticClass: "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    }, [_c("div", [_c("h6", {
      staticClass: "mb-1"
    }, [_c("i", {
      staticClass: "fa fa-calendar-alt text-muted me-2"
    }), _vm._v(" " + _vm._s(_vm.formatDate(revision.createdAt)))]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_c("i", {
      staticClass: "fa fa-user me-1"
    }), _vm._v(" " + _vm._s(revision.author))])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-2"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-outline-secondary",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.previewRevision(revision);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye me-1"
    }), _vm._v(" Prévisualiser\n                            ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-outline-primary",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.restoreRevision(revision);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-undo me-1"
    }), _vm._v(" Restaurer\n                            ")])])]);
  }), 0)]), _vm._v(" "), _vm._m(1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_c("i", {
    staticClass: "fa fa-history me-2"
  }), _vm._v(" Historique des révisions")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./vendor/easycorp/easyadmin-bundle/assets/js/field-slug.js":
/*!******************************************************************!*\
  !*** ./vendor/easycorp/easyadmin-bundle/assets/js/field-slug.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var slugify = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
slugify.extend({
  $: '',
  '%': '',
  '&': '',
  '<': '',
  '>': '',
  '|': '',
  '¢': '',
  '£': '',
  '¤': '',
  '¥': '',
  '₠': '',
  '₢': '',
  '₣': '',
  '₤': '',
  '₥': '',
  '₦': '',
  '₧': '',
  '₨': '',
  '₩': '',
  '₪': '',
  '₫': '',
  '€': '',
  '₭': '',
  '₮': '',
  '₯': '',
  '₰': '',
  '₱': '',
  '₲': '',
  '₳': '',
  '₴': '',
  '₵': '',
  '₸': '',
  '₹': '',
  '₽': '',
  '₿': '',
  '∂': '',
  '∆': '',
  '∑': '',
  '∞': '',
  '♥': '',
  元: '',
  円: '',
  '﷼': ''
});
var Slugger = /*#__PURE__*/function () {
  "use strict";

  function Slugger(field) {
    _classCallCheck(this, Slugger);
    this.field = field;
    this.setTargetElement();
    this.locked = true;
    this.field.setAttribute('readonly', 'readonly');
    if ('' === this.field.value) {
      this.currentSlug = '';
      this.updateValue();
      this.listenTarget();
    } else {
      this.currentSlug = this.field.value;
    }
    this.appendLockButton();
  }
  _createClass(Slugger, [{
    key: "setTargetElement",
    value: function setTargetElement() {
      var fieldNames = JSON.parse(this.field.dataset.target);
      this.targets = [];
      var _iterator = _createForOfIteratorHelper(fieldNames),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          var target = document.getElementById(name);
          if (null === target) {
            throw "Wrong target specified for slug widget (\"".concat(name, "\").");
          }
          this.targets.push(target);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Append a "lock" button to control slug behaviour (auto or manual)
     */
  }, {
    key: "appendLockButton",
    value: function appendLockButton() {
      var _this = this;
      this.lockButton = this.field.parentNode.querySelector('button');
      this.lockButton.addEventListener('click', function () {
        if (_this.locked) {
          var confirmMessage = _this.field.dataset.confirmText || null;
          if (null === confirmMessage) {
            _this.unlock();
          } else {
            var formattedConfirmMessage = decodeURIComponent(JSON.parse("\"".concat(confirmMessage.replace(/\"/g, '\\"'), "\"")));
            if (true === confirm(formattedConfirmMessage)) {
              _this.unlock();
            }
          }
        } else {
          _this.lock();
        }
      });
    }

    /**
     * Unlock the widget input (manual mode)
     */
  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
      this.lockButton.innerHTML = this.lockButton.getAttribute('data-icon-unlocked');
      this.field.removeAttribute('readonly');
    }

    /**
     * Lock the widget input (auto mode)
     */
  }, {
    key: "lock",
    value: function lock() {
      this.locked = true;
      this.lockButton.innerHTML = this.lockButton.getAttribute('data-icon-locked');

      // Locking it back changes the value either to default value, or recomputes it
      if ('' !== this.currentSlug) {
        this.field.value = this.currentSlug;
      } else {
        this.updateValue();
      }
      this.field.setAttribute('readonly', 'readonly');
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.field.value = slugify(this.targets.map(function (target) {
        return target.value;
      }).join('-'), {
        remove: /[^A-Za-z0-9\s-]/g,
        lower: true,
        strict: true
      });
    }

    /**
     * Observe the target field and slug it
     */
  }, {
    key: "listenTarget",
    value: function listenTarget() {
      var _this2 = this;
      var _iterator2 = _createForOfIteratorHelper(this.targets),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var target = _step2.value;
          target.addEventListener('input', function () {
            if ('readonly' === _this2.field.getAttribute('readonly')) {
              _this2.updateValue();
            }
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
  return Slugger;
}();
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-ea-slug-field]').forEach(function (field) {
    new Slugger(field);
  });
});
document.addEventListener('ea.collection.item-added', function (event) {
  event.detail.newElement.querySelectorAll('[data-ea-slug-field]').forEach(function (field) {
    new Slugger(field);
  });
});

/***/ }),

/***/ "./assets/back/scss/back.scss":
/*!************************************!*\
  !*** ./assets/back/scss/back.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue":
/*!*******************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.vue?vue&type=template&id=3f6a6242&scoped=true& */ "./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&");
/* harmony import */ var _Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builder.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&");
/* harmony import */ var _Builder_vue_vue_type_style_index_0_id_3f6a6242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& */ "./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f6a6242",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/Builder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue":
/*!**************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& */ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&");
/* harmony import */ var _BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&");
/* harmony import */ var _BuilderElement_vue_vue_type_style_index_0_id_3bf64eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& */ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3bf64eec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/BuilderElement.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue":
/*!**************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& */ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&");
/* harmony import */ var _BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderSidebar.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _BuilderSidebar_vue_vue_type_style_index_0_id_bd42d62c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& */ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bd42d62c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/BuilderSidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue":
/*!**************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& */ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&");
/* harmony import */ var _RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevisionsModal.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _RevisionsModal_vue_vue_type_style_index_0_id_ea746584_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& */ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ea746584",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/RevisionsModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderElement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevisionsModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=template&id=3f6a6242&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_style_index_0_id_3f6a6242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_style_index_0_id_3bf64eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_style_index_0_id_bd42d62c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_style_index_0_id_ea746584_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-7be1ba","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_modules_es_-f8ad3e","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d2a0ee","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-dab795","vendors-node_modules_core-js_internals_correct-is-regexp-logic_js-node_modules_core-js_intern-51ca73","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-97c0f6","vendors-node_modules_core-js_internals_delete-property-or-throw_js-node_modules_core-js_inter-6a42c7","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-088580","vendors-node_modules_core-js_modules_es_array_sort_js-node_modules_core-js_modules_es_set_js--e8dfb7","vendors-node_modules_core-js_modules_es_array_find-index_js-node_modules_core-js_modules_es_a-74108a","assets_fonts_fontawesome_css_all_min_css"], () => (__webpack_exec__("./assets/back/js/back.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFkbWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ0w7QUFDaUM7QUFDNkI7QUFDcEI7QUFFaEUsSUFBTUcsYUFBYSxHQUFHQyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBRXhDLElBQUlELGFBQWEsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRTtFQUMxQkYsYUFBYSxDQUFDRyxJQUFJLENBQUMsVUFBVUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUU7SUFDbEMsSUFBSVIsMkNBQUcsQ0FBQztNQUFDUyxFQUFFLEVBQUUsR0FBRyxHQUFHTCxDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO01BQUVDLFVBQVUsRUFBRTtRQUFDVixPQUFPLEVBQVBBLHVFQUFPQTtNQUFBO0lBQUMsQ0FBQyxDQUFDO0VBQ2xFLENBQUMsQ0FBQzs7RUFFRjtFQUNBQyw4RUFBNkIsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7QUFDeEM7QUFFQSxTQUFTQyxnQ0FBZ0NBLENBQUNDLFFBQVEsRUFBRTtFQUNoRCxJQUFHQSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO0lBQzNCRCxRQUFRLENBQUNFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztFQUM5RyxDQUFDLE1BQU07SUFDSEosUUFBUSxDQUFDRSxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxRQUFRLENBQUM7RUFDM0c7QUFDSjtBQUdBZixDQUFDLENBQUMsWUFBVztFQUNUQSxDQUFDLENBQUMsa0dBQWtHLENBQUMsQ0FBQ2dCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN6SCxJQUFJQyxPQUFPLEdBQUdqQixDQUFDLENBQUMsR0FBRyxHQUFFQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxJQUFJWSxTQUFTLEdBQUdELE9BQU8sQ0FBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUU3Q2IsQ0FBQyxDQUFDRSxJQUFJLENBQUNnQixTQUFTLEVBQUUsVUFBVUMsS0FBSyxFQUFFQyxLQUFLLEVBQUc7TUFDdkMsSUFBSUMsZUFBZSxHQUFHckIsQ0FBQyxDQUFDLEdBQUcsR0FBQ29CLEtBQUssQ0FBQ0UsRUFBRSxDQUFDO01BQ3JDLElBQUdELGVBQWUsQ0FBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQ1YsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNuQyxJQUFHb0IsZUFBZSxDQUFDVCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ1gsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUN4RG9CLGVBQWUsQ0FBQ1QsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUNHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRSxDQUFDLE1BQ0k7VUFDRE0sZUFBZSxDQUFDTixRQUFRLENBQUMsZ0JBQWdCLENBQUM7UUFDOUM7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUdGZixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ2dCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztJQUMxQ2hCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxlQUFlLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZDdkIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNXLEdBQUcsQ0FBQyxFQUFFLENBQUM7RUFDbkMsQ0FBQyxDQUFDO0VBQ0ZYLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2dCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztJQUNwQ2hCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLGVBQWUsRUFBQyxDQUFDLENBQUM7SUFDN0N2QixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1csR0FBRyxDQUFDLEVBQUUsQ0FBQztFQUNuQyxDQUFDLENBQUM7RUFDRlgsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNnQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDM0NoQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxlQUFlLEVBQUMsQ0FBQyxDQUFDO0lBQzdDdkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLGVBQWUsRUFBQyxDQUFDLENBQUM7RUFDM0MsQ0FBQyxDQUFDO0VBR0YsSUFBSUMsZ0JBQWdCLEdBQUd4QixDQUFDLENBQUMsaUNBQWlDLENBQUM7RUFDM0R3QixnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDLDRCQUE0QixFQUFDLFFBQVEsRUFBRSxZQUFXO0lBQ3hFaEIsZ0NBQWdDLENBQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3QyxDQUFDLENBQUM7RUFDRixJQUFHd0IsZ0JBQWdCLENBQUN2QixNQUFNLEVBQUU7SUFDeEJELENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsWUFBVztNQUM1Q08sZ0NBQWdDLENBQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUM7RUFDTjtFQUNBQSxDQUFDLENBQUMsMERBQTBELENBQUMsQ0FBQ2dCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUNqRlAsZ0NBQWdDLENBQUNlLGdCQUFnQixDQUFDWCxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQ2EsSUFBSSxDQUFDLENBQUMsQ0FBQ2IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdkpXLGdCQUFnQixDQUFDWCxJQUFJLENBQUMsaUZBQWlGLENBQUMsQ0FBQ1UsSUFBSSxDQUFFLFNBQVMsRUFBRSxJQUFLLENBQUM7RUFDcEksQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ3ZFRixxSkFBQUksbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFqQixLQUFBLEtBQUFrQixPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWCxHQUFBLEVBQUFDLEdBQUEsRUFBQWhCLEtBQUEsV0FBQVUsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBaEIsS0FBQSxFQUFBQSxLQUFBLEVBQUEyQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZCxHQUFBLENBQUFDLEdBQUEsV0FBQVUsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFYLEdBQUEsRUFBQUMsR0FBQSxFQUFBaEIsS0FBQSxXQUFBZSxHQUFBLENBQUFDLEdBQUEsSUFBQWhCLEtBQUEsZ0JBQUErQixLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF0QixTQUFBLFlBQUEwQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE1QixNQUFBLENBQUE2QixNQUFBLENBQUFILGNBQUEsQ0FBQXpCLFNBQUEsR0FBQTZCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBckIsY0FBQSxDQUFBd0IsU0FBQSxlQUFBdEMsS0FBQSxFQUFBMEMsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE3QixHQUFBLEVBQUE4QixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFoQyxHQUFBLEVBQUE4QixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF0QixPQUFBLENBQUF1QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTFDLE1BQUEsQ0FBQTJDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBN0MsRUFBQSxJQUFBRyxNQUFBLENBQUFtQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF2QyxTQUFBLEdBQUEwQixTQUFBLENBQUExQixTQUFBLEdBQUFELE1BQUEsQ0FBQTZCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUE5QyxTQUFBLGdDQUFBK0MsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFmLFNBQUEsRUFBQWdELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBN0MsS0FBQSxHQUFBbUUsTUFBQSxDQUFBbkUsS0FBQSxTQUFBQSxLQUFBLGdCQUFBb0UsT0FBQSxDQUFBcEUsS0FBQSxLQUFBWSxNQUFBLENBQUFtQyxJQUFBLENBQUEvQyxLQUFBLGVBQUE4RCxXQUFBLENBQUFFLE9BQUEsQ0FBQWhFLEtBQUEsQ0FBQXFFLE9BQUEsRUFBQUMsSUFBQSxXQUFBdEUsS0FBQSxJQUFBK0QsTUFBQSxTQUFBL0QsS0FBQSxFQUFBZ0UsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBaEUsS0FBQSxFQUFBc0UsSUFBQSxXQUFBQyxTQUFBLElBQUFKLE1BQUEsQ0FBQW5FLEtBQUEsR0FBQXVFLFNBQUEsRUFBQVAsT0FBQSxDQUFBRyxNQUFBLGdCQUFBSyxLQUFBLFdBQUFULE1BQUEsVUFBQVMsS0FBQSxFQUFBUixPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFyQixHQUFBLFNBQUE0QixlQUFBLEVBQUEzRCxjQUFBLG9CQUFBZCxLQUFBLFdBQUFBLE1BQUEyRCxNQUFBLEVBQUFkLEdBQUEsYUFBQTZCLDJCQUFBLGVBQUFaLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFRLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUFoQyxpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQW1DLEtBQUEsc0NBQUFoQixNQUFBLEVBQUFkLEdBQUEsd0JBQUE4QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFoQixNQUFBLFFBQUFkLEdBQUEsU0FBQWdDLFVBQUEsV0FBQXJDLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQXhDLFFBQUEsR0FBQW1DLE9BQUEsQ0FBQW5DLFFBQUEsTUFBQUEsUUFBQSxRQUFBeUUsY0FBQSxHQUFBQyxtQkFBQSxDQUFBMUUsUUFBQSxFQUFBbUMsT0FBQSxPQUFBc0MsY0FBQSxRQUFBQSxjQUFBLEtBQUE5QixnQkFBQSxtQkFBQThCLGNBQUEscUJBQUF0QyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF3QyxJQUFBLEdBQUF4QyxPQUFBLENBQUF5QyxLQUFBLEdBQUF6QyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFnQixLQUFBLFFBQUFBLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMEMsaUJBQUEsQ0FBQTFDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBMkMsTUFBQSxXQUFBM0MsT0FBQSxDQUFBSyxHQUFBLEdBQUE4QixLQUFBLG9CQUFBVCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkIsS0FBQSxHQUFBbkMsT0FBQSxDQUFBNEMsSUFBQSxtQ0FBQWxCLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUFoRCxLQUFBLEVBQUFrRSxNQUFBLENBQUFyQixHQUFBLEVBQUF1QyxJQUFBLEVBQUE1QyxPQUFBLENBQUE0QyxJQUFBLGtCQUFBbEIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNkIsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQWtDLG9CQUFBMUUsUUFBQSxFQUFBbUMsT0FBQSxRQUFBNkMsVUFBQSxHQUFBN0MsT0FBQSxDQUFBbUIsTUFBQSxFQUFBQSxNQUFBLEdBQUF0RCxRQUFBLENBQUFnQixRQUFBLENBQUFnRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTNCLE1BQUEsU0FBQW5CLE9BQUEsQ0FBQW5DLFFBQUEscUJBQUFnRixVQUFBLElBQUFoRixRQUFBLENBQUFnQixRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXlDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQTFFLFFBQUEsRUFBQW1DLE9BQUEsZUFBQUEsT0FBQSxDQUFBbUIsTUFBQSxrQkFBQTBCLFVBQUEsS0FBQTdDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMEMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXJDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF2QixRQUFBLENBQUFnQixNQUFBLEVBQUF0RCxRQUFBLENBQUFnQixRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFOLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxFQUFBTCxPQUFBLENBQUFuQyxRQUFBLFNBQUEyQyxnQkFBQSxNQUFBd0MsSUFBQSxHQUFBdEIsTUFBQSxDQUFBckIsR0FBQSxTQUFBMkMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTVDLE9BQUEsQ0FBQW5DLFFBQUEsQ0FBQW9GLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEYsS0FBQSxFQUFBd0MsT0FBQSxDQUFBa0QsSUFBQSxHQUFBckYsUUFBQSxDQUFBc0YsT0FBQSxlQUFBbkQsT0FBQSxDQUFBbUIsTUFBQSxLQUFBbkIsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUF5QyxTQUFBLEdBQUE5QyxPQUFBLENBQUFuQyxRQUFBLFNBQUEyQyxnQkFBQSxJQUFBd0MsSUFBQSxJQUFBaEQsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEwQyxTQUFBLHNDQUFBL0MsT0FBQSxDQUFBbkMsUUFBQSxTQUFBMkMsZ0JBQUEsY0FBQTRDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTVCLE1BQUEsR0FBQTRCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBcEMsTUFBQSxDQUFBcEIsSUFBQSxvQkFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQWlELEtBQUEsQ0FBQVEsVUFBQSxHQUFBcEMsTUFBQSxhQUFBekIsUUFBQU4sV0FBQSxTQUFBZ0UsVUFBQSxNQUFBSixNQUFBLGFBQUE1RCxXQUFBLENBQUF1QixPQUFBLENBQUFrQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFoRCxPQUFBaUQsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBcEYsY0FBQSxPQUFBcUYsY0FBQSxTQUFBQSxjQUFBLENBQUExRCxJQUFBLENBQUF5RCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQTNILE1BQUEsU0FBQUUsQ0FBQSxPQUFBMkcsSUFBQSxZQUFBQSxLQUFBLGFBQUEzRyxDQUFBLEdBQUF5SCxRQUFBLENBQUEzSCxNQUFBLE9BQUErQixNQUFBLENBQUFtQyxJQUFBLENBQUF5RCxRQUFBLEVBQUF6SCxDQUFBLFVBQUEyRyxJQUFBLENBQUExRixLQUFBLEdBQUF3RyxRQUFBLENBQUF6SCxDQUFBLEdBQUEyRyxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUExRixLQUFBLEdBQUFzRixTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWIsVUFBQSxlQUFBQSxXQUFBLGFBQUE3RSxLQUFBLEVBQUFzRixTQUFBLEVBQUFGLElBQUEsaUJBQUFuQyxpQkFBQSxDQUFBdEMsU0FBQSxHQUFBdUMsMEJBQUEsRUFBQXBDLGNBQUEsQ0FBQTBDLEVBQUEsbUJBQUF4RCxLQUFBLEVBQUFrRCwwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZCxjQUFBLENBQUFvQywwQkFBQSxtQkFBQWxELEtBQUEsRUFBQWlELGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBMEQsV0FBQSxHQUFBakYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBaEIsT0FBQSxDQUFBb0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQTdELGlCQUFBLDZCQUFBNkQsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBeEcsT0FBQSxDQUFBeUcsSUFBQSxhQUFBSixNQUFBLFdBQUFuRyxNQUFBLENBQUF3RyxjQUFBLEdBQUF4RyxNQUFBLENBQUF3RyxjQUFBLENBQUFMLE1BQUEsRUFBQTNELDBCQUFBLEtBQUEyRCxNQUFBLENBQUFNLFNBQUEsR0FBQWpFLDBCQUFBLEVBQUF4QixNQUFBLENBQUFtRixNQUFBLEVBQUFyRixpQkFBQSx5QkFBQXFGLE1BQUEsQ0FBQWxHLFNBQUEsR0FBQUQsTUFBQSxDQUFBNkIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBcUQsTUFBQSxLQUFBckcsT0FBQSxDQUFBNEcsS0FBQSxhQUFBdkUsR0FBQSxhQUFBd0IsT0FBQSxFQUFBeEIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFsRCxTQUFBLEdBQUFlLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQWxELFNBQUEsRUFBQVcsbUJBQUEsaUNBQUFkLE9BQUEsQ0FBQXFELGFBQUEsR0FBQUEsYUFBQSxFQUFBckQsT0FBQSxDQUFBNkcsS0FBQSxhQUFBckYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQXdELE9BQUEsT0FBQUMsSUFBQSxPQUFBMUQsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF0RCxPQUFBLENBQUFvRyxtQkFBQSxDQUFBM0UsT0FBQSxJQUFBc0YsSUFBQSxHQUFBQSxJQUFBLENBQUE3QixJQUFBLEdBQUFwQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBaUIsSUFBQSxHQUFBakIsTUFBQSxDQUFBbkUsS0FBQSxHQUFBdUgsSUFBQSxDQUFBN0IsSUFBQSxXQUFBakMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFoRCxPQUFBLENBQUFnSCxJQUFBLGFBQUFqSSxHQUFBLFFBQUFrSSxNQUFBLEdBQUEvRyxNQUFBLENBQUFuQixHQUFBLEdBQUFpSSxJQUFBLGdCQUFBeEcsR0FBQSxJQUFBeUcsTUFBQSxFQUFBRCxJQUFBLENBQUFwQixJQUFBLENBQUFwRixHQUFBLFVBQUF3RyxJQUFBLENBQUFFLE9BQUEsYUFBQWhDLEtBQUEsV0FBQThCLElBQUEsQ0FBQTNJLE1BQUEsU0FBQW1DLEdBQUEsR0FBQXdHLElBQUEsQ0FBQUcsR0FBQSxRQUFBM0csR0FBQSxJQUFBeUcsTUFBQSxTQUFBL0IsSUFBQSxDQUFBMUYsS0FBQSxHQUFBZ0IsR0FBQSxFQUFBMEUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQWxGLE9BQUEsQ0FBQStDLE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUE5QixTQUFBLEtBQUFvRyxXQUFBLEVBQUF0RSxPQUFBLEVBQUE4RCxLQUFBLFdBQUFBLE1BQUFxQixhQUFBLGFBQUFDLElBQUEsV0FBQW5DLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBL0UsUUFBQSxjQUFBc0QsTUFBQSxnQkFBQWQsR0FBQSxHQUFBeUMsU0FBQSxPQUFBYSxVQUFBLENBQUF6QyxPQUFBLENBQUEyQyxhQUFBLElBQUF1QixhQUFBLFdBQUFaLElBQUEsa0JBQUFBLElBQUEsQ0FBQWMsTUFBQSxPQUFBbEgsTUFBQSxDQUFBbUMsSUFBQSxPQUFBaUUsSUFBQSxNQUFBTixLQUFBLEVBQUFNLElBQUEsQ0FBQWUsS0FBQSxjQUFBZixJQUFBLElBQUExQixTQUFBLE1BQUEwQyxJQUFBLFdBQUFBLEtBQUEsU0FBQTVDLElBQUEsV0FBQTZDLFVBQUEsUUFBQTlCLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTJCLFVBQUEsQ0FBQW5GLElBQUEsUUFBQW1GLFVBQUEsQ0FBQXBGLEdBQUEsY0FBQXFGLElBQUEsS0FBQWhELGlCQUFBLFdBQUFBLGtCQUFBaUQsU0FBQSxhQUFBL0MsSUFBQSxRQUFBK0MsU0FBQSxNQUFBM0YsT0FBQSxrQkFBQTRGLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBcEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBc0YsU0FBQSxFQUFBM0YsT0FBQSxDQUFBa0QsSUFBQSxHQUFBMkMsR0FBQSxFQUFBQyxNQUFBLEtBQUE5RixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXlDLFNBQUEsS0FBQWdELE1BQUEsYUFBQXZKLENBQUEsUUFBQW9ILFVBQUEsQ0FBQXRILE1BQUEsTUFBQUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUErRyxLQUFBLFFBQUFLLFVBQUEsQ0FBQXBILENBQUEsR0FBQW1GLE1BQUEsR0FBQTRCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUFxQyxNQUFBLGFBQUF0QyxLQUFBLENBQUFDLE1BQUEsU0FBQThCLElBQUEsUUFBQVUsUUFBQSxHQUFBM0gsTUFBQSxDQUFBbUMsSUFBQSxDQUFBK0MsS0FBQSxlQUFBMEMsVUFBQSxHQUFBNUgsTUFBQSxDQUFBbUMsSUFBQSxDQUFBK0MsS0FBQSxxQkFBQXlDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUEvQixLQUFBLENBQUFFLFFBQUEsU0FBQW9DLE1BQUEsQ0FBQXRDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQTZCLElBQUEsR0FBQS9CLEtBQUEsQ0FBQUcsVUFBQSxTQUFBbUMsTUFBQSxDQUFBdEMsS0FBQSxDQUFBRyxVQUFBLGNBQUFzQyxRQUFBLGFBQUFWLElBQUEsR0FBQS9CLEtBQUEsQ0FBQUUsUUFBQSxTQUFBb0MsTUFBQSxDQUFBdEMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBd0MsVUFBQSxZQUFBNUQsS0FBQSxxREFBQWlELElBQUEsR0FBQS9CLEtBQUEsQ0FBQUcsVUFBQSxTQUFBbUMsTUFBQSxDQUFBdEMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXJDLElBQUEsRUFBQUQsR0FBQSxhQUFBOUQsQ0FBQSxRQUFBb0gsVUFBQSxDQUFBdEgsTUFBQSxNQUFBRSxDQUFBLFNBQUFBLENBQUEsUUFBQStHLEtBQUEsUUFBQUssVUFBQSxDQUFBcEgsQ0FBQSxPQUFBK0csS0FBQSxDQUFBQyxNQUFBLFNBQUE4QixJQUFBLElBQUFqSCxNQUFBLENBQUFtQyxJQUFBLENBQUErQyxLQUFBLHdCQUFBK0IsSUFBQSxHQUFBL0IsS0FBQSxDQUFBRyxVQUFBLFFBQUF3QyxZQUFBLEdBQUEzQyxLQUFBLGFBQUEyQyxZQUFBLGlCQUFBM0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBMkYsWUFBQSxDQUFBMUMsTUFBQSxJQUFBbEQsR0FBQSxJQUFBQSxHQUFBLElBQUE0RixZQUFBLENBQUF4QyxVQUFBLEtBQUF3QyxZQUFBLGNBQUF2RSxNQUFBLEdBQUF1RSxZQUFBLEdBQUFBLFlBQUEsQ0FBQW5DLFVBQUEsY0FBQXBDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUE0RixZQUFBLFNBQUE5RSxNQUFBLGdCQUFBK0IsSUFBQSxHQUFBK0MsWUFBQSxDQUFBeEMsVUFBQSxFQUFBakQsZ0JBQUEsU0FBQTBGLFFBQUEsQ0FBQXhFLE1BQUEsTUFBQXdFLFFBQUEsV0FBQUEsU0FBQXhFLE1BQUEsRUFBQWdDLFFBQUEsb0JBQUFoQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTRDLElBQUEsR0FBQXhCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFvRixJQUFBLFFBQUFyRixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUErQixJQUFBLHlCQUFBeEIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBb0QsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQWxELGdCQUFBLEtBQUEyRixNQUFBLFdBQUFBLE9BQUExQyxVQUFBLGFBQUFsSCxDQUFBLFFBQUFvSCxVQUFBLENBQUF0SCxNQUFBLE1BQUFFLENBQUEsU0FBQUEsQ0FBQSxRQUFBK0csS0FBQSxRQUFBSyxVQUFBLENBQUFwSCxDQUFBLE9BQUErRyxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBeUMsUUFBQSxDQUFBNUMsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQTlDLGdCQUFBLHlCQUFBNEYsT0FBQTdDLE1BQUEsYUFBQWhILENBQUEsUUFBQW9ILFVBQUEsQ0FBQXRILE1BQUEsTUFBQUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUErRyxLQUFBLFFBQUFLLFVBQUEsQ0FBQXBILENBQUEsT0FBQStHLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE3QixNQUFBLEdBQUE0QixLQUFBLENBQUFRLFVBQUEsa0JBQUFwQyxNQUFBLENBQUFwQixJQUFBLFFBQUErRixNQUFBLEdBQUEzRSxNQUFBLENBQUFyQixHQUFBLEVBQUF3RCxhQUFBLENBQUFQLEtBQUEsWUFBQStDLE1BQUEsZ0JBQUFqRSxLQUFBLDhCQUFBa0UsYUFBQSxXQUFBQSxjQUFBdEMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUF0RixRQUFBLEtBQUFnQixRQUFBLEVBQUFrQyxNQUFBLENBQUFpRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFoQyxNQUFBLFVBQUFkLEdBQUEsR0FBQXlDLFNBQUEsR0FBQXRDLGdCQUFBLE9BQUF4QyxPQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBdUksbUJBQUFDLEdBQUEsRUFBQWhGLE9BQUEsRUFBQUMsTUFBQSxFQUFBZ0YsS0FBQSxFQUFBQyxNQUFBLEVBQUFsSSxHQUFBLEVBQUE2QixHQUFBLGNBQUEyQyxJQUFBLEdBQUF3RCxHQUFBLENBQUFoSSxHQUFBLEVBQUE2QixHQUFBLE9BQUE3QyxLQUFBLEdBQUF3RixJQUFBLENBQUF4RixLQUFBLFdBQUF3RSxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWdCLElBQUEsQ0FBQUosSUFBQSxJQUFBcEIsT0FBQSxDQUFBaEUsS0FBQSxZQUFBc0gsT0FBQSxDQUFBdEQsT0FBQSxDQUFBaEUsS0FBQSxFQUFBc0UsSUFBQSxDQUFBMkUsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUF2RyxFQUFBLDZCQUFBVixJQUFBLFNBQUFrSCxJQUFBLEdBQUFDLFNBQUEsYUFBQS9CLE9BQUEsV0FBQXRELE9BQUEsRUFBQUMsTUFBQSxRQUFBK0UsR0FBQSxHQUFBcEcsRUFBQSxDQUFBMEcsS0FBQSxDQUFBcEgsSUFBQSxFQUFBa0gsSUFBQSxZQUFBSCxNQUFBakosS0FBQSxJQUFBK0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBaEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFnRixLQUFBLEVBQUFDLE1BQUEsVUFBQWxKLEtBQUEsY0FBQWtKLE9BQUFwSCxHQUFBLElBQUFpSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFoRixPQUFBLEVBQUFDLE1BQUEsRUFBQWdGLEtBQUEsRUFBQUMsTUFBQSxXQUFBcEgsR0FBQSxLQUFBbUgsS0FBQSxDQUFBM0QsU0FBQTtBQUFBLFNBQUFpRSxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBbEUsU0FBQTtBQUFBLFNBQUFtRSxrQkFBQUMsTUFBQSxFQUFBQyxLQUFBLGFBQUE3SyxDQUFBLE1BQUFBLENBQUEsR0FBQTZLLEtBQUEsQ0FBQS9LLE1BQUEsRUFBQUUsQ0FBQSxVQUFBOEssVUFBQSxHQUFBRCxLQUFBLENBQUE3SyxDQUFBLEdBQUE4SyxVQUFBLENBQUFsSSxVQUFBLEdBQUFrSSxVQUFBLENBQUFsSSxVQUFBLFdBQUFrSSxVQUFBLENBQUFqSSxZQUFBLHdCQUFBaUksVUFBQSxFQUFBQSxVQUFBLENBQUFoSSxRQUFBLFNBQUFuQixNQUFBLENBQUFJLGNBQUEsQ0FBQTZJLE1BQUEsRUFBQUcsY0FBQSxDQUFBRCxVQUFBLENBQUE3SSxHQUFBLEdBQUE2SSxVQUFBO0FBQUEsU0FBQUUsYUFBQU4sV0FBQSxFQUFBTyxVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBTixpQkFBQSxDQUFBRCxXQUFBLENBQUE5SSxTQUFBLEVBQUFxSixVQUFBLE9BQUFDLFdBQUEsRUFBQVAsaUJBQUEsQ0FBQUQsV0FBQSxFQUFBUSxXQUFBLEdBQUF2SixNQUFBLENBQUFJLGNBQUEsQ0FBQTJJLFdBQUEsaUJBQUE1SCxRQUFBLG1CQUFBNEgsV0FBQTtBQUFBLFNBQUFTLGdCQUFBbkosR0FBQSxFQUFBQyxHQUFBLEVBQUFoQixLQUFBLElBQUFnQixHQUFBLEdBQUE4SSxjQUFBLENBQUE5SSxHQUFBLE9BQUFBLEdBQUEsSUFBQUQsR0FBQSxJQUFBTCxNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFoQixLQUFBLEVBQUFBLEtBQUEsRUFBQTJCLFVBQUEsUUFBQUMsWUFBQSxRQUFBQyxRQUFBLG9CQUFBZCxHQUFBLENBQUFDLEdBQUEsSUFBQWhCLEtBQUEsV0FBQWUsR0FBQTtBQUFBLFNBQUErSSxlQUFBakgsR0FBQSxRQUFBN0IsR0FBQSxHQUFBbUosWUFBQSxDQUFBdEgsR0FBQSxvQkFBQXVCLE9BQUEsQ0FBQXBELEdBQUEsaUJBQUFBLEdBQUEsR0FBQW9KLE1BQUEsQ0FBQXBKLEdBQUE7QUFBQSxTQUFBbUosYUFBQUUsS0FBQSxFQUFBQyxJQUFBLFFBQUFsRyxPQUFBLENBQUFpRyxLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBbEosTUFBQSxDQUFBcUosV0FBQSxPQUFBRCxJQUFBLEtBQUFqRixTQUFBLFFBQUFtRixHQUFBLEdBQUFGLElBQUEsQ0FBQXhILElBQUEsQ0FBQXNILEtBQUEsRUFBQUMsSUFBQSxvQkFBQWxHLE9BQUEsQ0FBQXFHLEdBQUEsdUJBQUFBLEdBQUEsWUFBQWxGLFNBQUEsNERBQUErRSxJQUFBLGdCQUFBRixNQUFBLEdBQUFNLE1BQUEsRUFBQUwsS0FBQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsSUFLcUIzTCw2QkFBNkI7RUFBQSxTQUFBQSw4QkFBQTtJQUFBNkssZUFBQSxPQUFBN0ssNkJBQUE7RUFBQTtFQUFBcUwsWUFBQSxDQUFBckwsNkJBQUE7SUFBQXNDLEdBQUE7SUFBQWhCLEtBQUE7SUFLOUM7QUFDSjtBQUNBO0lBQ0ksU0FBQVosS0FBQSxFQUFjO01BQ1Z1TCxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQzs7TUFFeEQ7TUFDQWhNLENBQUMsQ0FBQ2lNLFFBQVEsQ0FBQyxDQUFDakwsRUFBRSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxVQUFVa0wsQ0FBQyxFQUFFO1FBQ2pFQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCLElBQU1DLFdBQVcsR0FBR3BNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FNLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUN2TSw2QkFBNkIsQ0FBQ3dNLFNBQVMsQ0FBQ0YsV0FBVyxFQUFFcE0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ2pFLENBQUMsQ0FBQzs7TUFFRjtNQUNBdU0sTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO1FBQzFDLElBQUlBLEtBQUssQ0FBQ0osSUFBSSxJQUFJSSxLQUFLLENBQUNKLElBQUksQ0FBQ25JLElBQUksS0FBSyx1QkFBdUIsRUFBRTtVQUMzRHBFLDZCQUE2QixDQUFDNE0sbUJBQW1CLENBQUNELEtBQUssQ0FBQ0osSUFBSSxDQUFDTSxJQUFJLENBQUM7UUFDdEU7TUFDSixDQUFDLENBQUM7SUFDTjs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBdkssR0FBQTtJQUFBaEIsS0FBQSxFQUdBLFNBQUFrTCxVQUFpQkYsV0FBVyxFQUFFUSxPQUFPLEVBQUU7TUFDbkMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR1QsV0FBVztNQUNyQyxJQUFJLENBQUNVLGFBQWEsR0FBR0YsT0FBTzs7TUFFNUI7TUFDQSxJQUFJNU0sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDL0MsSUFBTThNLEtBQUssdzhCQUFBQyxNQUFBLENBYXlCVCxNQUFNLENBQUNVLGNBQWMsSUFBSSxJQUFJLGdsQkFZaEU7UUFDRGpOLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tOLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO01BQzNCOztNQUVBO01BQ0EsSUFBTUksWUFBWSxHQUFHbEIsUUFBUSxDQUFDbUIsY0FBYyxDQUFDLDRCQUE0QixDQUFDO01BQzFFLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDSixZQUFZLEVBQUU7UUFDbkRLLFFBQVEsRUFBRSxRQUFRO1FBQ2xCQyxRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUM7O01BRUY7TUFDQU4sWUFBWSxDQUFDWCxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxZQUFNO1FBQ25EO1FBQ0EsSUFBTWdCLFFBQVEsR0FBR3ZCLFFBQVEsQ0FBQ3lCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRCxJQUFJRixRQUFRLEVBQUU7VUFDVkEsUUFBUSxDQUFDRyxNQUFNLENBQUMsQ0FBQztRQUNyQjtRQUNBO1FBQ0ExQixRQUFRLENBQUMyQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM1QzFCLFFBQVEsQ0FBQzJCLElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLEdBQUcsRUFBRTtRQUNqQzlCLFFBQVEsQ0FBQzJCLElBQUksQ0FBQ0UsS0FBSyxDQUFDRSxZQUFZLEdBQUcsRUFBRTtNQUN6QyxDQUFDLENBQUM7TUFFRixJQUFJLENBQUNYLGFBQWEsQ0FBQ1ksSUFBSSxDQUFDLENBQUM7SUFDN0I7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBN0wsR0FBQTtJQUFBaEIsS0FBQTtNQUFBLElBQUE4TSxvQkFBQSxHQUFBM0QsaUJBQUEsZUFBQTVJLG1CQUFBLEdBQUEwRyxJQUFBLENBSUEsU0FBQThGLFFBQWlDeEIsSUFBSTtRQUFBLE9BQUFoTCxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBaUwsU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFwRixJQUFBLEdBQUFvRixRQUFBLENBQUF2SCxJQUFBO1lBQUE7Y0FDakNpRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVcsSUFBSSxDQUFDOztjQUVuQztjQUFBLE1BQ0ksQ0FBQ0EsSUFBSSxDQUFDMkIsUUFBUSxJQUFJLENBQUMzQixJQUFJLENBQUMyQixRQUFRLENBQUNDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQUFGLFFBQUEsQ0FBQXZILElBQUE7Z0JBQUE7Y0FBQTtjQUNyRDBILEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztjQUFDLE9BQUFILFFBQUEsQ0FBQTlILE1BQUE7WUFBQTtjQUFBOEgsUUFBQSxDQUFBcEYsSUFBQTtjQUFBb0YsUUFBQSxDQUFBdkgsSUFBQTtjQUFBLE9BTTlDLElBQUksQ0FBQzJILGtCQUFrQixDQUFDOUIsSUFBSSxDQUFDckwsRUFBRSxDQUFDO1lBQUE7Y0FBQStNLFFBQUEsQ0FBQXZILElBQUE7Y0FBQTtZQUFBO2NBQUF1SCxRQUFBLENBQUFwRixJQUFBO2NBQUFvRixRQUFBLENBQUFLLEVBQUEsR0FBQUwsUUFBQTtjQUV0Q3RDLE9BQU8sQ0FBQ25HLEtBQUssQ0FBQywwQkFBMEIsRUFBQXlJLFFBQUEsQ0FBQUssRUFBTyxDQUFDO2NBQ2hERixLQUFLLENBQUMsb0NBQW9DLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQUgsUUFBQSxDQUFBakYsSUFBQTtVQUFBO1FBQUEsR0FBQStFLE9BQUE7TUFBQSxDQUVuRDtNQUFBLFNBQUF6QixvQkFBQWlDLEVBQUE7UUFBQSxPQUFBVCxvQkFBQSxDQUFBeEQsS0FBQSxPQUFBRCxTQUFBO01BQUE7TUFBQSxPQUFBaUMsbUJBQUE7SUFBQTtJQUVEO0FBQ0o7QUFDQTtFQUZJO0lBQUF0SyxHQUFBO0lBQUFoQixLQUFBO01BQUEsSUFBQXdOLG1CQUFBLEdBQUFyRSxpQkFBQSxlQUFBNUksbUJBQUEsR0FBQTBHLElBQUEsQ0FHQSxTQUFBd0csU0FBZ0NDLE1BQU07UUFBQSxJQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQTNDLElBQUEsRUFBQTRDLFVBQUEsRUFBQUMsWUFBQSxFQUFBQyxPQUFBO1FBQUEsT0FBQXhOLG1CQUFBLEdBQUF3QixJQUFBLFVBQUFpTSxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQXBHLElBQUEsR0FBQW9HLFNBQUEsQ0FBQXZJLElBQUE7WUFBQTtjQUFBdUksU0FBQSxDQUFBcEcsSUFBQTtjQUFBb0csU0FBQSxDQUFBdkksSUFBQTtjQUFBLE9BRVB3SSxLQUFLLENBQUMseUJBQXlCLEVBQUU7Z0JBQ3BEdkssTUFBTSxFQUFFLE1BQU07Z0JBQ2R3SyxPQUFPLEVBQUU7a0JBQ0wsY0FBYyxFQUFFO2dCQUNwQixDQUFDO2dCQUNEM0IsSUFBSSxFQUFFNEIsSUFBSSxDQUFDQyxTQUFTLENBQUM7a0JBQUVYLE1BQU0sRUFBRUE7Z0JBQU8sQ0FBQztjQUMzQyxDQUFDLENBQUM7WUFBQTtjQU5JQyxRQUFRLEdBQUFNLFNBQUEsQ0FBQWpKLElBQUE7Y0FBQSxJQVFUMkksUUFBUSxDQUFDVyxFQUFFO2dCQUFBTCxTQUFBLENBQUF2SSxJQUFBO2dCQUFBO2NBQUE7Y0FBQXVJLFNBQUEsQ0FBQXZJLElBQUE7Y0FBQSxPQUNZaUksUUFBUSxDQUFDWSxJQUFJLENBQUMsQ0FBQztZQUFBO2NBQWpDWCxTQUFTLEdBQUFLLFNBQUEsQ0FBQWpKLElBQUE7Y0FBQSxNQUNULElBQUlKLEtBQUssQ0FBQ2dKLFNBQVMsQ0FBQ3BKLEtBQUssSUFBSSx5QkFBeUIsQ0FBQztZQUFBO2NBQUF5SixTQUFBLENBQUF2SSxJQUFBO2NBQUEsT0FHOUNpSSxRQUFRLENBQUNZLElBQUksQ0FBQyxDQUFDO1lBQUE7Y0FBNUJ0RCxJQUFJLEdBQUFnRCxTQUFBLENBQUFqSixJQUFBO2NBQUEsS0FFTmlHLElBQUksQ0FBQ3VELE9BQU87Z0JBQUFQLFNBQUEsQ0FBQXZJLElBQUE7Z0JBQUE7Y0FBQTtjQUFBLE1BRVIsQ0FBQyxJQUFJLENBQUNnRyxhQUFhLElBQUksSUFBSSxDQUFDQSxhQUFhLENBQUM3TSxNQUFNLEtBQUssQ0FBQztnQkFBQW9QLFNBQUEsQ0FBQXZJLElBQUE7Z0JBQUE7Y0FBQTtjQUN0RGlGLE9BQU8sQ0FBQ25HLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztjQUFDLE1BQ3JDLElBQUlJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQztZQUFBO2NBR2hFO2NBQ01pSixVQUFVLEdBQUcsSUFBSSxDQUFDbkMsYUFBYSxDQUFDbE0sT0FBTyxDQUFDLG1CQUFtQixDQUFDO2NBQUEsTUFDOURxTyxVQUFVLENBQUNoUCxNQUFNLEtBQUssQ0FBQztnQkFBQW9QLFNBQUEsQ0FBQXZJLElBQUE7Z0JBQUE7Y0FBQTtjQUN2QmlGLE9BQU8sQ0FBQ25HLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztjQUFDLE1BQ3hDLElBQUlJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQztZQUFBO2NBR2hFO2NBQ01rSixZQUFZLEdBQUdELFVBQVUsQ0FBQ3BPLElBQUksc0JBQUFtTSxNQUFBLENBQXFCLElBQUksQ0FBQ0gsa0JBQWtCLFlBQVEsQ0FBQztjQUFBLE1BQ3JGcUMsWUFBWSxDQUFDalAsTUFBTSxLQUFLLENBQUM7Z0JBQUFvUCxTQUFBLENBQUF2SSxJQUFBO2dCQUFBO2NBQUE7Y0FDekJpRixPQUFPLENBQUNuRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7Y0FBQyxNQUNwQyxJQUFJSSxLQUFLLENBQUMsc0NBQXNDLENBQUM7WUFBQTtjQUUzRGtKLFlBQVksQ0FBQ3ZPLEdBQUcsQ0FBQzBMLElBQUksQ0FBQ3dELEdBQUcsQ0FBQzs7Y0FFMUI7Y0FDTVYsT0FBTyxHQUFHRixVQUFVLENBQUNwTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDdkRzTyxPQUFPLENBQUN0TyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ2lQLElBQUksQ0FBQyxDQUFDO2NBQzFDWCxPQUFPLENBQUN0TyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ29OLElBQUksQ0FBQyxDQUFDO2NBQzVDa0IsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUNQLElBQUksQ0FBQyxLQUFLLEVBQUUrTCxJQUFJLENBQUN3RCxHQUFHLENBQUM7Y0FDL0RWLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDa1AsSUFBSSxDQUFDMUQsSUFBSSxDQUFDakUsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Y0FFdkQ7Y0FDQStHLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDbVAsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDaFAsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVa0wsQ0FBQyxFQUFFO2dCQUN2RUEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztnQkFDbEJnRCxPQUFPLENBQUN0TyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ2lQLElBQUksQ0FBQyxDQUFDO2dCQUM1Q1gsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNvTixJQUFJLENBQUMsQ0FBQztnQkFDMUM7Z0JBQ0FpQixZQUFZLENBQUN2TyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNwQnNPLFVBQVUsQ0FBQ3BPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDRixHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUM3Q3dPLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDa1AsSUFBSSxDQUFDLEVBQUUsQ0FBQztjQUM5QyxDQUFDLENBQUM7O2NBRUY7Y0FDQWQsVUFBVSxDQUFDcE8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUNGLEdBQUcsQ0FBQyxFQUFFLENBQUM7O2NBRTdDO2NBQ0EsSUFBSSxJQUFJLENBQUMwTSxhQUFhLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQ0EsYUFBYSxDQUFDeUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCO2dCQUNBRyxVQUFVLENBQUMsWUFBTTtrQkFDYixJQUFNekMsUUFBUSxHQUFHdkIsUUFBUSxDQUFDeUIsYUFBYSxDQUFDLGlCQUFpQixDQUFDO2tCQUMxRCxJQUFJRixRQUFRLEVBQUU7b0JBQ1ZBLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUM7a0JBQ3JCO2tCQUNBMUIsUUFBUSxDQUFDMkIsSUFBSSxDQUFDQyxTQUFTLENBQUNGLE1BQU0sQ0FBQyxZQUFZLENBQUM7a0JBQzVDMUIsUUFBUSxDQUFDMkIsSUFBSSxDQUFDRSxLQUFLLENBQUNDLFFBQVEsR0FBRyxFQUFFO2tCQUNqQzlCLFFBQVEsQ0FBQzJCLElBQUksQ0FBQ0UsS0FBSyxDQUFDRSxZQUFZLEdBQUcsRUFBRTtnQkFDekMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztjQUNYOztjQUVBO2NBQ0FqQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRUssSUFBSSxDQUFDd0QsR0FBRyxDQUFDO2NBQUNSLFNBQUEsQ0FBQXZJLElBQUE7Y0FBQTtZQUFBO2NBQUEsTUFFOUMsSUFBSWQsS0FBSyxDQUFDcUcsSUFBSSxDQUFDekcsS0FBSyxJQUFJLGlCQUFpQixDQUFDO1lBQUE7Y0FBQXlKLFNBQUEsQ0FBQXZJLElBQUE7Y0FBQTtZQUFBO2NBQUF1SSxTQUFBLENBQUFwRyxJQUFBO2NBQUFvRyxTQUFBLENBQUFYLEVBQUEsR0FBQVcsU0FBQTtjQUdwRHRELE9BQU8sQ0FBQ25HLEtBQUssQ0FBQyxTQUFTLEVBQUF5SixTQUFBLENBQUFYLEVBQU8sQ0FBQztjQUFDLE1BQUFXLFNBQUEsQ0FBQVgsRUFBQTtZQUFBO1lBQUE7Y0FBQSxPQUFBVyxTQUFBLENBQUFqRyxJQUFBO1VBQUE7UUFBQSxHQUFBeUYsUUFBQTtNQUFBLENBR3ZDO01BQUEsU0FBQUosbUJBQUF5QixHQUFBO1FBQUEsT0FBQXRCLG1CQUFBLENBQUFsRSxLQUFBLE9BQUFELFNBQUE7TUFBQTtNQUFBLE9BQUFnRSxrQkFBQTtJQUFBO0VBQUE7RUFBQSxPQUFBM08sNkJBQUE7QUFBQSxLQUdMO0FBQUF3TCxlQUFBLENBdk1xQnhMLDZCQUE2Qix3QkFDbEIsSUFBSTtBQUFBd0wsZUFBQSxDQURmeEwsNkJBQTZCLG1CQUV2QixJQUFJO0FBQUF3TCxlQUFBLENBRlZ4TCw2QkFBNkIsbUJBR3ZCLElBQUk7QUFIbUI7QUF3TWxERSxDQUFDLENBQUNpTSxRQUFRLENBQUMsQ0FBQ21FLEtBQUssQ0FBQyxZQUFNO0VBQ3BCdFEsNkJBQTZCLENBQUNVLElBQUksQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUY7QUFDQTtBQUNpQjtBQUNxQjtBQUNFO0FBQUEsSUFFbkI4UCxrQkFBa0I7RUFBQSxTQUFBQSxtQkFBQTtJQUFBM0YsZUFBQSxPQUFBMkYsa0JBQUE7RUFBQTtFQUFBbkYsWUFBQSxDQUFBbUYsa0JBQUE7SUFBQWxPLEdBQUE7SUFBQWhCLEtBQUEsRUFDbkMsU0FBQW1QLFVBQWlCQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsbUJBQW1CLEVBQW9CO01BQUEsSUFBbEJDLFFBQVEsR0FBQWxHLFNBQUEsQ0FBQXhLLE1BQUEsUUFBQXdLLFNBQUEsUUFBQS9ELFNBQUEsR0FBQStELFNBQUEsTUFBRyxLQUFLO01BQ3ZFLE9BQU8rRixRQUFRLEdBQUcsR0FBRyxHQUFHQyxTQUFTLEdBQUcsSUFBSSxHQUFHQyxtQkFBbUIsR0FBRyxHQUFHLElBQUlDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pHO0VBQUM7SUFBQXZPLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBd1AsUUFBZUgsU0FBUyxFQUFFQyxtQkFBbUIsRUFBRTtNQUMzQyxPQUFPRCxTQUFTLEdBQUcsR0FBRyxHQUFHQyxtQkFBbUI7SUFDaEQ7RUFBQztJQUFBdE8sR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUF5UCxRQUFlQyxRQUFRLEVBQUU7TUFDckIsSUFBTS9ELEtBQUssd2pDQW1CVjtNQUVELElBQUkvTSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN4Q0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDa04sTUFBTSxDQUFDbE4sQ0FBQyxDQUFDK00sS0FBSyxDQUFDLENBQUM7TUFDOUI7TUFFQSxJQUFJZ0UsT0FBTyxHQUFHLElBQUl6RCxTQUFTLENBQUNDLEtBQUssQ0FBQ3RCLFFBQVEsQ0FBQ21CLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1FBQUVJLFFBQVEsRUFBRSxJQUFJO1FBQUVDLFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQztNQUV0SHNELE9BQU8sQ0FBQzlDLElBQUksQ0FBQyxDQUFDO01BQ2RqTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ2dRLEdBQUcsQ0FBQyxPQUFPLEVBQUUsOEJBQThCLENBQUMsQ0FDbEVoUCxFQUFFLENBQUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFOFAsUUFBUSxDQUFDO0lBQzlEO0VBQUM7SUFBQTFPLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBNFAsb0JBQTJCQyxJQUFJLEVBQUU7TUFDN0IsSUFBSUMsT0FBTyxHQUFHLElBQUk7TUFFbEJsUixDQUFDLENBQUNpUixJQUFJLENBQUMsQ0FBQ3BRLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDWCxJQUFJLENBQUMsVUFBVUMsQ0FBQyxFQUFFc0wsS0FBSyxFQUFFO1FBQzlELElBQUksQ0FBQ0EsS0FBSyxDQUFDMEYsYUFBYSxDQUFDLENBQUMsRUFBRTtVQUN4QjFGLEtBQUssQ0FBQzJGLGNBQWMsQ0FBQyxDQUFDO1VBQ3RCRixPQUFPLEdBQUcsS0FBSztRQUNuQjtNQUNKLENBQUMsQ0FBQztNQUVGbFIsQ0FBQyxDQUFDaVIsSUFBSSxDQUFDLENBQUNwUSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1gsSUFBSSxDQUFDLFVBQVVDLENBQUMsRUFBRXNMLEtBQUssRUFBRTtRQUN4RCxJQUFJLENBQUM2RSxrQkFBa0IsQ0FBQ2Usa0JBQWtCLENBQUM1RixLQUFLLENBQUMsRUFBRTtVQUMvQ3lGLE9BQU8sR0FBRyxLQUFLO1FBQ25CO01BQ0osQ0FBQyxDQUFDO01BRUYsT0FBT0EsT0FBTztJQUNsQjtFQUFDO0lBQUE5TyxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQWtRLE1BQWFkLFFBQVEsRUFBRWUsT0FBTyxFQUFFTixJQUFJLEVBQUU7TUFDbEMsSUFBSU8sS0FBSyxHQUFHeFIsQ0FBQyxDQUFDaVIsSUFBSSxDQUFDO01BRW5CLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUNELEtBQUssRUFBRWhCLFFBQVEsRUFBRWUsT0FBTyxDQUFDO01BQy9DLElBQUksQ0FBQ0cscUJBQXFCLENBQUNsQixRQUFRLEVBQUVlLE9BQU8sRUFBRUMsS0FBSyxDQUFDO01BQ3BELElBQUksQ0FBQ0csY0FBYyxDQUFDSCxLQUFLLENBQUM7TUFDMUIsSUFBSSxDQUFDSSxZQUFZLENBQUNKLEtBQUssQ0FBQztNQUN4QixJQUFJLENBQUNLLHVCQUF1QixDQUFDTCxLQUFLLENBQUM7SUFDdkM7RUFBQztJQUFBcFAsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUEwUSxrQkFBeUIzUCxHQUFHLEVBQUU0UCxJQUFJLEVBQUU7TUFDaEMsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBT3JMLFNBQVM7TUFFM0IsSUFBSXZFLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDOFAsSUFBSSxDQUFDLEVBQUU7UUFDMUIsT0FBTzVQLEdBQUcsQ0FBQzRQLElBQUksQ0FBQztNQUNwQjtNQUVBLElBQU1uSixJQUFJLEdBQUdtSixJQUFJLENBQUNDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFVBQUFDLENBQUM7UUFBQSxPQUFJQSxDQUFDLEtBQUssRUFBRTtNQUFBLEVBQUM7TUFFM0QsSUFBSUMsT0FBTyxHQUFHaFEsR0FBRztNQUFDLElBQUFpUSxTQUFBLEdBQUFDLDBCQUFBLENBQ0Z6SixJQUFJO1FBQUEwSixLQUFBO01BQUE7UUFBcEIsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFoTSxJQUFBLEdBQXNCO1VBQUEsSUFBYnBFLEdBQUcsR0FBQWtRLEtBQUEsQ0FBQWxSLEtBQUE7VUFDUixJQUFJK1EsT0FBTyxLQUFLLElBQUksSUFBSUEsT0FBTyxLQUFLekwsU0FBUyxFQUFFO1lBQzNDLE9BQU9BLFNBQVM7VUFDcEI7VUFDQXlMLE9BQU8sR0FBR0EsT0FBTyxDQUFDL1AsR0FBRyxDQUFDO1FBQzFCO01BQUMsU0FBQWMsR0FBQTtRQUFBa1AsU0FBQSxDQUFBbEcsQ0FBQSxDQUFBaEosR0FBQTtNQUFBO1FBQUFrUCxTQUFBLENBQUFLLENBQUE7TUFBQTtNQUVELE9BQU9OLE9BQU87SUFDbEI7RUFBQztJQUFBL1AsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUFxUSxpQkFBd0JELEtBQUssRUFBRWhCLFFBQVEsRUFBRWUsT0FBTyxFQUFFO01BQzlDO01BQ0FDLEtBQUssQ0FBQzNRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDWCxJQUFJLENBQUMsWUFBWTtRQUM1QyxJQUFNd1MsVUFBVSxHQUFHMVMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFNMlMsZUFBZSxHQUFHRCxVQUFVLENBQUM3UixJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBTStSLFNBQVMsR0FBR0YsVUFBVSxDQUFDN1IsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO1FBRXRFLElBQUkrUixTQUFTLENBQUMzUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RCLElBQU00UyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7VUFDN0IsSUFBTUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQztVQUM5QyxJQUFJQyxLQUFLLEVBQUU7WUFDUCxJQUFNRSxRQUFRLEdBQUdGLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBTUcsS0FBSyxHQUFHRCxRQUFRLENBQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xDLElBQUlpQixLQUFLLENBQUNoVCxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQ2xCLElBQU1pVCxjQUFjLEdBQUdELEtBQUssQ0FBQyxDQUFDLENBQUM7O2NBRS9CO2NBQ0EsSUFBTUUsY0FBYyxHQUFHN0Msa0JBQWtCLENBQUN3QixpQkFBaUIsQ0FBQ1AsT0FBTyxFQUFFMkIsY0FBYyxDQUFDO2NBRXBGLElBQUlDLGNBQWMsRUFBRTtnQkFDaEIsSUFBSUMsVUFBVSxHQUFHLENBQUM7Z0JBQ2xCLElBQUlDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxjQUFjLENBQUMsRUFBRTtrQkFDL0JDLFVBQVUsR0FBR0QsY0FBYyxDQUFDbFQsTUFBTTtnQkFDdEMsQ0FBQyxNQUFNLElBQUl1RixPQUFBLENBQU8yTixjQUFjLE1BQUssUUFBUSxFQUFFO2tCQUMzQ0MsVUFBVSxHQUFHdFIsTUFBTSxDQUFDOEcsSUFBSSxDQUFDdUssY0FBYyxDQUFDLENBQUNsVCxNQUFNO2dCQUNuRDtnQkFDQThMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFZ0gsUUFBUSxFQUFFLE9BQU8sRUFBRUcsY0FBYyxFQUFFLGFBQWEsRUFBRUMsVUFBVSxFQUFFLGVBQWUsRUFBRVQsZUFBZSxDQUFDWSxRQUFRLENBQUMsQ0FBQyxDQUFDdFQsTUFBTSxDQUFDO2dCQUVoSixJQUFNdVQsWUFBWSxHQUFHYixlQUFlLENBQUNZLFFBQVEsQ0FBQyxDQUFDLENBQUN0VCxNQUFNO2dCQUN0RCxLQUFLLElBQUlpUyxDQUFDLEdBQUdzQixZQUFZLEVBQUV0QixDQUFDLEdBQUdrQixVQUFVLEVBQUVsQixDQUFDLEVBQUUsRUFBRTtrQkFDNUM7a0JBQ0E1QixrQkFBa0IsQ0FBQ21ELGtCQUFrQixDQUFDZixVQUFVLEVBQUVuQixPQUFPLEVBQUVmLFFBQVEsQ0FBQztnQkFDeEU7Y0FDSjtZQUNKO1VBQ0o7UUFDSjtNQUNKLENBQUMsQ0FBQzs7TUFFRjtNQUNBO01BQ0E7TUFDQTtNQUNBZ0IsS0FBSyxDQUFDM1EsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUNYLElBQUksQ0FBQyxZQUFZO1FBQzVDLElBQU13UyxVQUFVLEdBQUcxUyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFCMFMsVUFBVSxDQUFDMUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDaFAsRUFBRSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFVa0wsQ0FBQyxFQUFFO1VBQzdGQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1VBQ2xCO1VBQ0E7VUFDQSxJQUFJLENBQUNtRSxrQkFBa0IsQ0FBQ21ELGtCQUFrQixDQUFDZixVQUFVLEVBQUVuQixPQUFPLEVBQUVmLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZFLElBQU1rRCxHQUFHLEdBQUdDLFFBQVEsQ0FBQ2pCLFVBQVUsQ0FBQ3JHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1Q21DLEtBQUssWUFBQXhCLE1BQUEsQ0FBWTBHLEdBQUcsa0NBQXNCLENBQUM7VUFDL0M7UUFDSixDQUFDLENBQUM7O1FBRUY7UUFDQWhCLFVBQVUsQ0FBQzFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQ2hQLEVBQUUsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVWtMLENBQUMsRUFBRTtVQUNuR0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUNsQixJQUFNeUgsR0FBRyxHQUFHRCxRQUFRLENBQUNqQixVQUFVLENBQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDNUMsSUFBTXNHLGVBQWUsR0FBR0QsVUFBVSxDQUFDN1IsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1VBRWpFLElBQUk4UixlQUFlLENBQUNZLFFBQVEsQ0FBQyxDQUFDLENBQUN0VCxNQUFNLElBQUkyVCxHQUFHLEVBQUU7WUFDMUNwRixLQUFLLFlBQUF4QixNQUFBLENBQVk0RyxHQUFHLDRCQUFtQixDQUFDO1lBQ3hDO1VBQ0o7VUFFQTVULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1ksT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMrTSxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUF2TCxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQXFTLG1CQUEwQmYsVUFBVSxFQUFFbkIsT0FBTyxFQUFFZixRQUFRLEVBQUU7TUFDckQsSUFBTW1DLGVBQWUsR0FBR0QsVUFBVSxDQUFDN1IsSUFBSSxDQUFDLHdCQUF3QixDQUFDO01BQ2pFLElBQU0rUixTQUFTLEdBQUdGLFVBQVUsQ0FBQzdSLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztNQUN0RSxJQUFNNlMsR0FBRyxHQUFHQyxRQUFRLENBQUNqQixVQUFVLENBQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDNUMsSUFBTW1ILFlBQVksR0FBR2IsZUFBZSxDQUFDWSxRQUFRLENBQUMsQ0FBQyxDQUFDdFQsTUFBTTtNQUV0RCxJQUFJdVQsWUFBWSxJQUFJRSxHQUFHLEVBQUU7UUFDckI7UUFDQTtRQUNBLE9BQU8sS0FBSztNQUNoQjtNQUVBLElBQUlHLFFBQVEsR0FBRyxDQUFDLENBQUM7TUFDakJsQixlQUFlLENBQUNZLFFBQVEsQ0FBQyxDQUFDLENBQUNyVCxJQUFJLENBQUMsWUFBWTtRQUN4QyxJQUFNNFQsR0FBRyxHQUFHSCxRQUFRLENBQUMzVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxTSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDdkUsS0FBSyxDQUFDZ00sR0FBRyxDQUFDLElBQUlBLEdBQUcsR0FBR0QsUUFBUSxFQUFFQSxRQUFRLEdBQUdDLEdBQUc7TUFDckQsQ0FBQyxDQUFDO01BQ0YsSUFBTUMsUUFBUSxHQUFHRixRQUFRLEdBQUcsQ0FBQztNQUU3QixJQUFNRyxXQUFXLEdBQUdwQixTQUFTLENBQUN2RyxJQUFJLENBQUMsYUFBYSxDQUFDO01BQ2pELElBQUl3RyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFFM0IsSUFBTW9CLGlCQUFpQixHQUFHRCxXQUFXLEdBQUcsVUFBVTtNQUNsRCxJQUFJbkIsSUFBSSxDQUFDcUIsT0FBTyxDQUFDRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3hDcEIsSUFBSSxHQUFHQSxJQUFJLENBQUNiLEtBQUssQ0FBQ2lDLGlCQUFpQixDQUFDLENBQUNFLElBQUksQ0FBQ0osUUFBUSxDQUFDO01BQ3ZEO01BQ0EsSUFBSWxCLElBQUksQ0FBQ3FCLE9BQU8sQ0FBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDbENuQixJQUFJLEdBQUdBLElBQUksQ0FBQ2IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDLENBQUNHLElBQUksQ0FBQ0osUUFBUSxHQUFHLENBQUMsQ0FBQztNQUNyRDtNQUVBLElBQU1LLFFBQVEsR0FBR3BVLENBQUMsQ0FBQzZTLElBQUksQ0FBQztNQUN4QnVCLFFBQVEsQ0FBQzlULElBQUksQ0FBQyxZQUFZLEVBQUV5VCxRQUFRLENBQUM7TUFDckNwQixlQUFlLENBQUN6RixNQUFNLENBQUNrSCxRQUFRLENBQUM7TUFFaEM5RCxrQkFBa0IsQ0FBQ3FCLGNBQWMsQ0FBQ3lDLFFBQVEsQ0FBQztNQUMzQzlELGtCQUFrQixDQUFDc0IsWUFBWSxDQUFDd0MsUUFBUSxDQUFDO01BRXpDQSxRQUFRLENBQUN2VCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNYLElBQUksQ0FBQyxZQUFZO1FBQzFDLElBQU1tVSxNQUFNLEdBQUdyVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQU1vSSxJQUFJLEdBQUdpTSxNQUFNLENBQUNoSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQU1pSSxVQUFVLEdBQUdELE1BQU0sQ0FBQzlTLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFMUM4UyxNQUFNLENBQUMvVCxJQUFJLENBQUMsTUFBTSxFQUFFZ1Esa0JBQWtCLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxFQUFFZSxPQUFPLENBQUNqUSxFQUFFLEVBQUU4RyxJQUFJLEVBQUVrTSxVQUFVLENBQUMsQ0FBQztRQUV6RixJQUFNQyxhQUFhLEdBQUduTSxJQUFJLENBQUNvTSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRixJQUFNbFQsRUFBRSxHQUFHZ1Asa0JBQWtCLENBQUNNLE9BQU8sQ0FBQ1csT0FBTyxDQUFDalEsRUFBRSxFQUFFaVQsYUFBYSxDQUFDO1FBRWhFRixNQUFNLENBQUMvVCxJQUFJLENBQUMsSUFBSSxFQUFFZ0IsRUFBRSxDQUFDO1FBQ3JCK1MsTUFBTSxDQUFDelQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNQLElBQUksQ0FBQyxLQUFLLEVBQUVnQixFQUFFLENBQUM7TUFDL0QsQ0FBQyxDQUFDO01BRUYsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBYyxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQXFULFFBQWV4RCxJQUFJLEVBQUU7TUFDakIsSUFBSSxDQUFDVSxjQUFjLENBQUMzUixDQUFDLENBQUNpUixJQUFJLENBQUMsQ0FBQztJQUNoQztFQUFDO0lBQUE3TyxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQXNRLHNCQUE2QmxCLFFBQVEsRUFBRWUsT0FBTyxFQUFFQyxLQUFLLEVBQUU7TUFDbkRBLEtBQUssQ0FBQzNRLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzZULEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDeFUsSUFBSSxDQUFDLFVBQVVDLENBQUMsRUFBRXNMLEtBQUssRUFBRTtRQUN2RSxJQUFJNEksTUFBTSxHQUFHclUsQ0FBQyxDQUFDeUwsS0FBSyxDQUFDO1FBQ3JCLElBQU1yRCxJQUFJLEdBQUdpTSxNQUFNLENBQUNoSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWhDLElBQU1rSSxhQUFhLEdBQUduTSxJQUFJLENBQUNvTSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRixJQUFNbFQsRUFBRSxHQUFHZ1Asa0JBQWtCLENBQUNNLE9BQU8sQ0FBQ1csT0FBTyxDQUFDalEsRUFBRSxFQUFFaVQsYUFBYSxDQUFDO1FBRWhFLElBQU1ELFVBQVUsR0FBR0QsTUFBTSxDQUFDOVMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMxQzhTLE1BQU0sQ0FBQy9ULElBQUksQ0FBQyxNQUFNLEVBQUVnUSxrQkFBa0IsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLEVBQUVlLE9BQU8sQ0FBQ2pRLEVBQUUsRUFBRThHLElBQUksRUFBRWtNLFVBQVUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQ0QsTUFBTSxDQUFDL1QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1VBQ3BCK1QsTUFBTSxDQUFDL1QsSUFBSSxDQUFDLElBQUksRUFBRWdCLEVBQUUsQ0FBQztVQUNyQitTLE1BQU0sQ0FBQ00sTUFBTSxDQUFDLENBQUMsQ0FBQzlULElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRWdCLEVBQUUsQ0FBQztRQUNqRDtRQUVBLElBQUkrUyxNQUFNLENBQUMvVCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO1VBQ2hDLElBQU1LLEdBQUcsR0FBRzJQLGtCQUFrQixDQUFDd0IsaUJBQWlCLENBQUNQLE9BQU8sRUFBRW5KLElBQUksQ0FBQztVQUUvRCxJQUFJekgsR0FBRyxLQUFLK0YsU0FBUyxJQUFJL0YsR0FBRyxLQUFLLElBQUksRUFBRTtZQUNuQzBULE1BQU0sQ0FBQzFULEdBQUcsQ0FBQzJULFVBQVUsSUFBSSxPQUFPM1QsR0FBRyxLQUFLLFFBQVEsR0FBR0EsR0FBRyxDQUFDcVIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHclIsR0FBRyxDQUFDO1lBQ3hFLElBQUkwVCxNQUFNLENBQUNPLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2NBQ3pDdEUsa0JBQWtCLENBQUN1RSxvQkFBb0IsQ0FBQ1IsTUFBTSxFQUFFMVQsR0FBRyxDQUFDO1lBQ3hEO1VBQ0o7UUFDSixDQUFDLE1BQU0sSUFBSTBULE1BQU0sQ0FBQy9ULElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLEVBQUU7VUFDdkMsSUFBTXdVLE9BQU8sR0FBRzFNLElBQUksR0FBRyxNQUFNO1VBQzdCLElBQU16SCxJQUFHLEdBQUcyUCxrQkFBa0IsQ0FBQ3dCLGlCQUFpQixDQUFDUCxPQUFPLEVBQUV1RCxPQUFPLENBQUM7VUFDbEUsSUFBSW5VLElBQUcsRUFBRTtZQUNMMlAsa0JBQWtCLENBQUN5RSxpQkFBaUIsQ0FBQ1YsTUFBTSxFQUFFMVQsSUFBRyxDQUFDO1VBQ3JEO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUF5QixHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQXdRLGFBQW9CSixLQUFLLEVBQUU7TUFDdkJBLEtBQUssQ0FBQzNRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDWCxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFNlUsTUFBTSxFQUFLO1FBQzdDLElBQUlDLE9BQU8sR0FBRztVQUFFQyxLQUFLLEVBQUUsV0FBVztVQUFFQyxRQUFRLEVBQUUsSUFBSTtVQUFFQyxLQUFLLEVBQUUsTUFBTTtVQUFFQyx1QkFBdUIsRUFBRTtRQUFHLENBQUM7UUFFaEcsSUFBSXJWLENBQUMsQ0FBQ2dWLE1BQU0sQ0FBQyxDQUFDSixRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUN0QyxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBYUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQ0EsSUFBSSxDQUFDalUsRUFBRSxFQUFFO2NBQ1YsT0FBT2lVLElBQUksQ0FBQ3hGLElBQUk7WUFDcEI7WUFFQSxPQUFPL1AsQ0FBQywwS0FBQWdOLE1BQUEsQ0FFaUV1SSxJQUFJLENBQUN4RixJQUFJLHVEQUFBL0MsTUFBQSxDQUNuRXVJLElBQUksQ0FBQ3hGLElBQUksQ0FBQzdHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3NNLFdBQVcsQ0FBQyxDQUFDLEdBQUdELElBQUksQ0FBQ3hGLElBQUksQ0FBQzVHLEtBQUssQ0FBQyxDQUFDLENBQUMsMkNBQzFELENBQUM7VUFDaEIsQ0FBQztVQUVEOEwsT0FBTyxDQUFDUSxpQkFBaUIsR0FBR0gsWUFBWTtVQUN4Q0wsT0FBTyxDQUFDUyxjQUFjLEdBQUdKLFlBQVk7UUFDekM7UUFFQXRWLENBQUMsQ0FBQ2dWLE1BQU0sQ0FBQyxDQUFDVyxPQUFPLENBQUNWLE9BQU8sQ0FBQztNQUM5QixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE3UyxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQXVRLGVBQXNCSCxLQUFLLEVBQUU7TUFDekJ2QixVQUFVLENBQUMsWUFBWTtRQUNuQnVCLEtBQUssQ0FBQzNRLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ1gsSUFBSSxDQUFDLFVBQVVDLENBQUMsRUFBRXNMLEtBQUssRUFBRTtVQUMvQyxJQUFJQSxLQUFLLENBQUNtSyxNQUFNLEVBQUU7WUFDZG5LLEtBQUssQ0FBQ21LLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDN1YsQ0FBQyxDQUFDeUwsS0FBSyxDQUFDLENBQUNrSixNQUFNLENBQUMsQ0FBQyxDQUFDOVQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQ2hFLENBQUMsTUFBTTtZQUNIb0wsT0FBTyxDQUFDK0osSUFBSSxDQUFDLHFCQUFxQixHQUFHckssS0FBSyxDQUFDO1VBQy9DO1FBQ0osQ0FBQyxDQUFDO1FBRUYrRixLQUFLLENBQUMzUSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ1gsSUFBSSxDQUFDLFVBQVVDLENBQUMsRUFBRXNMLEtBQUssRUFBRTtVQUNyRCxJQUFNbkssRUFBRSxHQUFHdEIsQ0FBQyxDQUFDeUwsS0FBSyxDQUFDLENBQUNuTCxJQUFJLENBQUMsSUFBSSxDQUFDO1VBRTlCLElBQUl5VixRQUFRLENBQUNDLFNBQVMsQ0FBQzFVLEVBQUUsQ0FBQyxFQUFFO1lBQ3hCeVUsUUFBUSxDQUFDQyxTQUFTLENBQUMxVSxFQUFFLENBQUMsQ0FBQzJVLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckMsT0FBT0YsUUFBUSxDQUFDQyxTQUFTLENBQUMxVSxFQUFFLENBQUM7VUFDakM7VUFFQSxJQUFJc1UsTUFBTSxHQUFHRyxRQUFRLENBQUN2QixPQUFPLENBQUNsVCxFQUFFLEVBQUU7WUFDOUI7WUFDQTRVLE9BQU8sRUFBRSxDQUNMO2NBQUU5TixJQUFJLEVBQUUsUUFBUTtjQUFFK04sS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTTtZQUFFLENBQUMsRUFDL0Q7Y0FBRS9OLElBQUksRUFBRSxRQUFRO2NBQUUrTixLQUFLLEVBQUUsQ0FBQyxXQUFXO1lBQUUsQ0FBQyxFQUN4QztjQUFFL04sSUFBSSxFQUFFLE9BQU87Y0FBRStOLEtBQUssRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRO1lBQUUsQ0FBQyxFQUNwRjtjQUFFL04sSUFBSSxFQUFFLFdBQVc7Y0FBRStOLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUFFLENBQUMsRUFDckY7Y0FBRS9OLElBQUksRUFBRSxXQUFXO2NBQUUrTixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjO1lBQUUsQ0FBQyxFQUM5RjtjQUFFL04sSUFBSSxFQUFFLFFBQVE7Y0FBRStOLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxPQUFPO1lBQUUsQ0FBQyxFQUMvRDtjQUFFL04sSUFBSSxFQUFFLFVBQVU7Y0FBRStOLEtBQUssRUFBRSxDQUFDLFFBQVE7WUFBRSxDQUFDLENBQzFDO1lBQ0RoQixRQUFRLEVBQUUsSUFBSTtZQUNkaUIsTUFBTSxFQUFFLEdBQUc7WUFDWEMsWUFBWSxFQUFFLFNBQVM7WUFDdkJDLG9CQUFvQixFQUFFO1VBQzFCLENBQUMsQ0FBQztVQUVGLElBQUlDLFFBQVEsR0FBRyxTQUFTLEdBQUdqVixFQUFFO1VBQzdCLElBQUlrVixXQUFXLEdBQUd4VyxDQUFDLENBQUMsR0FBRyxHQUFHc0IsRUFBRSxDQUFDLENBQUNxVCxNQUFNLENBQUMsQ0FBQyxDQUFDOVQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDa1AsSUFBSSxDQUFDLENBQUM7VUFFM0Q2RixNQUFNLENBQUM1VSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVV5VixHQUFHLEVBQUU7WUFDakMsSUFBSXpXLENBQUMsQ0FBQyxHQUFHLEdBQUd5VyxHQUFHLENBQUNiLE1BQU0sQ0FBQ3hOLElBQUksQ0FBQyxDQUFDbkksTUFBTSxHQUFHLENBQUMsRUFBRTtjQUNyQ0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDa04sTUFBTSxDQUFDLEVBQUUsR0FDZixpRUFBaUUsR0FDakUsYUFBYSxHQUFHcUosUUFBUSxHQUFHLHdFQUF3RSxHQUNuRyxnQ0FBZ0MsR0FDaEMsNkRBQTZELEdBQzdELG9HQUFvRyxHQUNwRyxZQUFZLEdBQ1osOEJBQThCLEdBQzlCLGNBQWMsR0FBR0MsV0FBVyxHQUM1QixZQUFZLEdBQ1osVUFBVSxHQUNWLFFBQVEsQ0FBQztjQUViLElBQU1FLFlBQVksR0FBR3pLLFFBQVEsQ0FBQ21CLGNBQWMsQ0FBQ21KLFFBQVEsQ0FBQztjQUN0RCxJQUFNSSxLQUFLLEdBQUcsSUFBSXJKLFNBQVMsQ0FBQ3NKLEtBQUssQ0FBQ0YsWUFBWSxDQUFDO2NBQy9DQyxLQUFLLENBQUMxSSxJQUFJLENBQUMsQ0FBQztjQUNad0ksR0FBRyxDQUFDSSxNQUFNLENBQUMsQ0FBQztjQUNaN1csQ0FBQyxDQUFDLEdBQUcsR0FBR3NCLEVBQUUsQ0FBQyxDQUFDVixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0csUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBRXZFO1VBQ0osQ0FBQyxDQUFDO1VBRUY2VSxNQUFNLENBQUM1VSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVV5VixHQUFHLEVBQUU7WUFDL0IsSUFBSWIsTUFBTSxDQUFDa0IsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Y0FDekI5VyxDQUFDLENBQUMsa0dBQWtHLENBQUMsQ0FBQytXLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDaEk7VUFDSixDQUFDLENBQUM7UUFFTixDQUFDLENBQUM7TUFFTixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1g7RUFBQztJQUFBM1UsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUF5USx3QkFBK0JMLEtBQUssRUFBRTtNQUNsQ0EsS0FBSyxDQUFDeFEsRUFBRSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxVQUFVa0wsQ0FBQyxFQUFFO1FBQ2xELElBQUlvRSxrQkFBa0IsQ0FBQ2Usa0JBQWtCLENBQUNuRixDQUFDLENBQUM4SyxhQUFhLENBQUMsRUFBRTtVQUN4RDtRQUFBO01BRVIsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBNVUsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUFpUSxtQkFBMEI1RixLQUFLLEVBQUU7TUFDN0IsSUFBTXdMLEtBQUssR0FBR3hMLEtBQUssQ0FBQ3dMLEtBQUs7TUFFekIsSUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sSUFBSTtNQUNmO01BRUEsSUFBTXRLLElBQUksR0FBR3NLLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDckIsSUFBTUMsVUFBVSxHQUFHLENBQUV2SyxJQUFJLENBQUN3SyxJQUFJLEdBQUcsSUFBSSxHQUFJLElBQUksRUFBRUMsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUV6RCxJQUFJRixVQUFVLEdBQUc3RyxxREFBVyxDQUFDZ0gsaUJBQWlCLEVBQUU7UUFDNUM1TCxLQUFLLENBQUM2TCxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1QzdMLEtBQUssQ0FBQzJGLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sS0FBSztNQUNoQjs7TUFFQTtNQUNBLElBQUl6RSxJQUFJLENBQUN6SSxJQUFJLENBQUNxSyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDaEMsSUFBTWdKLE1BQU0sR0FBRyxJQUFJQyxVQUFVLENBQUMsQ0FBQztRQUMvQkQsTUFBTSxDQUFDRSxNQUFNLEdBQUcsVUFBVXZMLENBQUMsRUFBRTtVQUN6QixJQUFNaUQsT0FBTyxHQUFHblAsQ0FBQyxDQUFDeUwsS0FBSyxDQUFDLENBQUM3SyxPQUFPLENBQUMsc0JBQXNCLENBQUM7VUFDeER1TyxPQUFPLENBQUN0TyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ2lQLElBQUksQ0FBQyxDQUFDO1VBQzFDWCxPQUFPLENBQUN0TyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ29OLElBQUksQ0FBQyxDQUFDO1VBQzVDa0IsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUNQLElBQUksQ0FBQyxLQUFLLEVBQUU0TCxDQUFDLENBQUNuQixNQUFNLENBQUN4RixNQUFNLENBQUM7VUFDdEU0SixPQUFPLENBQUN0TyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2tQLElBQUksQ0FBQ3BELElBQUksQ0FBQ3ZFLElBQUksQ0FBQzs7VUFFakQ7VUFDQStHLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDbVAsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDaFAsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1lBQ3RFaEIsQ0FBQyxDQUFDeUwsS0FBSyxDQUFDLENBQUM5SyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQndPLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDaVAsSUFBSSxDQUFDLENBQUM7WUFDNUNYLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb04sSUFBSSxDQUFDLENBQUM7WUFDMUNrQixPQUFPLENBQUN0TyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDekQ2TyxPQUFPLENBQUN0TyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2tQLElBQUksQ0FBQyxFQUFFLENBQUM7VUFDOUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUNEd0gsTUFBTSxDQUFDRyxhQUFhLENBQUMvSyxJQUFJLENBQUM7TUFDOUI7TUFFQWxCLEtBQUssQ0FBQzZMLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztNQUUzQixPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUFsVixHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQTJULGtCQUF5QlYsTUFBTSxFQUFFalQsS0FBSyxFQUFFO01BQ3BDLElBQUksQ0FBQ0EsS0FBSyxFQUFFO1FBQ1I7TUFDSjtNQUVBLElBQUl1VyxJQUFJLEdBQUd0RCxNQUFNLENBQUN6VCxPQUFPLENBQUMsYUFBYSxDQUFDO01BQ3hDLElBQUl1TyxPQUFPLEdBQUd3SSxJQUFJLENBQUM5VyxJQUFJLENBQUMsc0JBQXNCLENBQUM7O01BRS9DO01BQ0FzTyxPQUFPLENBQUN0TyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ2lQLElBQUksQ0FBQyxDQUFDO01BQzFDWCxPQUFPLENBQUN0TyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ29OLElBQUksQ0FBQyxDQUFDO01BQzVDa0IsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUNQLElBQUksQ0FBQyxLQUFLLEVBQUVjLEtBQUssQ0FBQztNQUU1RCtOLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDbVAsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDaFAsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVa0wsQ0FBQyxFQUFFO1FBQ3ZFQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCZ0QsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNpUCxJQUFJLENBQUMsQ0FBQztRQUM1Q1gsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNvTixJQUFJLENBQUMsQ0FBQztRQUMxQztRQUNBMEosSUFBSSxDQUFDOVcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUNGLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekNnWCxJQUFJLENBQUM5VyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0YsR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUMzQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUF5QixHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQXlULHFCQUE0QlIsTUFBTSxFQUFFalQsS0FBSyxFQUFFO01BQ3ZDLElBQUksQ0FBQ0EsS0FBSyxFQUFFO1FBQ1I7TUFDSjtNQUNBLElBQUl3VyxPQUFPLEdBQUd4VyxLQUFLLENBQUN5VyxNQUFNLENBQUN6VyxLQUFLLENBQUMwVyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQUM7TUFDckUsSUFBSUMsUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO01BQzVDLElBQUlKLE9BQU8sS0FBSyxLQUFLLEVBQUU7UUFDbkJ4VyxLQUFLLEdBQUcsc0JBQXNCO01BQ2xDO01BQ0EsSUFBSTRXLFFBQVEsQ0FBQzlELE9BQU8sQ0FBQzBELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2xDeFcsS0FBSyxHQUFHLHVCQUF1QjtNQUNuQztNQUVBLElBQUl1VyxJQUFJLEdBQUd0RCxNQUFNLENBQUN6VCxPQUFPLENBQUMsYUFBYSxDQUFDO01BQ3hDLElBQUl1TyxPQUFPLEdBQUd3SSxJQUFJLENBQUM5VyxJQUFJLENBQUMsc0JBQXNCLENBQUM7TUFFL0NzTyxPQUFPLENBQUN0TyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ2lQLElBQUksQ0FBQyxDQUFDO01BQzFDWCxPQUFPLENBQUN0TyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ29OLElBQUksQ0FBQyxDQUFDO01BQzVDa0IsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUNQLElBQUksQ0FBQyxLQUFLLEVBQUVjLEtBQUssQ0FBQzs7TUFFNUQ7TUFDQStOLE9BQU8sQ0FBQ3RPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDbVAsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDaFAsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVa0wsQ0FBQyxFQUFFO1FBQ3ZFQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCZ0QsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNpUCxJQUFJLENBQUMsQ0FBQztRQUM1Q1gsT0FBTyxDQUFDdE8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNvTixJQUFJLENBQUMsQ0FBQztRQUMxQztRQUNBb0csTUFBTSxDQUFDMVQsR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQTJQLGtCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Y0wsSUFBTStHLGlCQUFpQixHQUFHLEVBQUU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBSEEsSUFJcUJoSCxXQUFXO0VBQzVCLFNBQUFBLFlBQUEsRUFBOEI7SUFBQSxJQUFsQjRILFdBQVcsR0FBQXhOLFNBQUEsQ0FBQXhLLE1BQUEsUUFBQXdLLFNBQUEsUUFBQS9ELFNBQUEsR0FBQStELFNBQUEsTUFBRyxDQUFDLENBQUM7SUFBQUUsZUFBQSxPQUFBMEYsV0FBQTtJQUN4QixJQUFJLENBQUM0SCxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJO0lBQ3RCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0VBQy9CO0VBQUNsTixZQUFBLENBQUFrRixXQUFBO0lBQUFqTyxHQUFBO0lBQUFoQixLQUFBO0lBTUQ7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7SUFDSSxTQUFBa1gsSUFBQSxFQUFNO01BQ0YsSUFBSSxJQUFJLENBQUNILFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDMUJwTSxPQUFPLENBQUMrSixJQUFJLENBQUMsbUVBQW1FLENBQUM7UUFDakYsSUFBSSxDQUFDeUMsTUFBTSxDQUFDLENBQUM7TUFDakI7TUFDQSxJQUFJLENBQUNKLFVBQVUsR0FBRyxFQUFFO01BQ3BCLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0VBSEk7SUFBQS9WLEdBQUE7SUFBQWhCLEtBQUEsRUFJQSxTQUFBbVgsT0FBQSxFQUFTO01BQ0wsSUFBSSxJQUFJLENBQUNKLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDMUJwTSxPQUFPLENBQUMrSixJQUFJLENBQUMsNENBQTRDLENBQUM7UUFDMUQsT0FBTyxJQUFJO01BQ2Y7TUFFQSxJQUFJLElBQUksQ0FBQ3FDLFVBQVUsQ0FBQ2xZLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDNUIsSUFBSSxDQUFDaVksTUFBTSxDQUFDMVEsSUFBSSxDQUFDO1VBQ2J0RCxJQUFJLEVBQUUsS0FBSztVQUNYZ1UsTUFBTSxFQUFFLElBQUksQ0FBQ0M7UUFDakIsQ0FBQyxDQUFDO01BQ047TUFFQSxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO01BQ3RCLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJO0lBQUEvVixHQUFBO0lBQUFoQixLQUFBLEVBTUEsU0FBQW9YLFNBQVNDLE1BQU0sRUFBRTNILFFBQVEsRUFBRTtNQUN2QixJQUFNNEgsYUFBYSxHQUFHLElBQUlySSxXQUFXLENBQUMsSUFBSSxDQUFDNEgsV0FBVyxDQUFDO01BQ3ZEbkgsUUFBUSxDQUFDNEgsYUFBYSxDQUFDO01BRXZCLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsVUFBVTtRQUNoQnVVLE1BQU0sRUFBTkEsTUFBTTtRQUNOUCxNQUFNLEVBQUVRLGFBQWEsQ0FBQ1I7TUFDMUIsQ0FBQyxDQUFDO01BRUYsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBWEk7SUFBQTlWLEdBQUE7SUFBQWhCLEtBQUEsRUFZQSxTQUFBd1gsUUFBUXhRLElBQUksRUFBRXlRLEtBQUssRUFBZ0I7TUFBQSxJQUFkNUQsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUM3QixJQUFBcU8saUJBQUEsR0FNSTdELE9BQU8sQ0FMUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBRCxpQkFBQSxjQUFHLEtBQUssR0FBQUEsaUJBQUE7UUFBQUUsYUFBQSxHQUtoQi9ELE9BQU8sQ0FKUGdFLElBQUk7UUFBSkEsSUFBSSxHQUFBRCxhQUFBLGNBQUcsQ0FBQyxHQUFBQSxhQUFBO1FBQUFFLHFCQUFBLEdBSVJqRSxPQUFPLENBSFBrRSxZQUFZO1FBQVpBLFlBQVksR0FBQUQscUJBQUEsY0FBRyxFQUFFLEdBQUFBLHFCQUFBO1FBQUFFLG9CQUFBLEdBR2pCbkUsT0FBTyxDQUZQakIsV0FBVztRQUFYQSxXQUFXLEdBQUFvRixvQkFBQSxjQUFHLEVBQUUsR0FBQUEsb0JBQUE7UUFBQUMsaUJBQUEsR0FFaEJwRSxPQUFPLENBRFBxRSxRQUFRO1FBQVJBLFFBQVEsR0FBQUQsaUJBQUEsY0FBRyxFQUFFLEdBQUFBLGlCQUFBO01BR2pCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUNuUixJQUFJLENBQUM7TUFFN0IsSUFBSSxDQUFDdVEsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsTUFBTTtRQUNaa0UsSUFBSSxFQUFKQSxJQUFJO1FBQ0p5USxLQUFLLEVBQUxBLEtBQUs7UUFDTEUsUUFBUSxFQUFSQSxRQUFRO1FBQ1JFLElBQUksRUFBSkEsSUFBSTtRQUNKRSxZQUFZLEVBQVpBLFlBQVk7UUFDWm5GLFdBQVcsRUFBWEEsV0FBVztRQUNYc0YsUUFBUSxFQUFSQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQWxYLEdBQUE7SUFBQWhCLEtBQUEsRUFPQSxTQUFBb1ksVUFBVXBSLElBQUksRUFBRXlRLEtBQUssRUFBZ0I7TUFBQSxJQUFkNUQsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUMvQixJQUFBZ1Asa0JBQUEsR0FLSXhFLE9BQU8sQ0FKUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBVSxrQkFBQSxjQUFHLEtBQUssR0FBQUEsa0JBQUE7UUFBQUMsY0FBQSxHQUloQnpFLE9BQU8sQ0FIUGdFLElBQUk7UUFBSkEsSUFBSSxHQUFBUyxjQUFBLGNBQUcsQ0FBQyxHQUFBQSxjQUFBO1FBQUFDLHNCQUFBLEdBR1IxRSxPQUFPLENBRlBrRSxZQUFZO1FBQVpBLFlBQVksR0FBQVEsc0JBQUEsY0FBRyxFQUFFLEdBQUFBLHNCQUFBO1FBQUFDLGtCQUFBLEdBRWpCM0UsT0FBTyxDQURQcUUsUUFBUTtRQUFSQSxRQUFRLEdBQUFNLGtCQUFBLGNBQUcsRUFBRSxHQUFBQSxrQkFBQTtNQUdqQixJQUFJLENBQUNMLGtCQUFrQixDQUFDblIsSUFBSSxDQUFDO01BRTdCLElBQUksQ0FBQ3VRLFNBQVMsQ0FBQztRQUNYelUsSUFBSSxFQUFFLFFBQVE7UUFDZGtFLElBQUksRUFBSkEsSUFBSTtRQUNKeVEsS0FBSyxFQUFMQSxLQUFLO1FBQ0xFLFFBQVEsRUFBUkEsUUFBUTtRQUNSRSxJQUFJLEVBQUpBLElBQUk7UUFDSkUsWUFBWSxFQUFaQSxZQUFZO1FBQ1pHLFFBQVEsRUFBUkE7TUFDSixDQUFDLENBQUM7TUFFRixPQUFPLElBQUk7SUFDZjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEk7SUFBQWxYLEdBQUE7SUFBQWhCLEtBQUEsRUFRQSxTQUFBeVksVUFBVXpSLElBQUksRUFBRXlRLEtBQUssRUFBRWlCLFVBQVUsRUFBZ0I7TUFBQSxJQUFkN0UsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUMzQyxJQUFBc1Asa0JBQUEsR0FJSTlFLE9BQU8sQ0FIUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBZ0Isa0JBQUEsY0FBRyxLQUFLLEdBQUFBLGtCQUFBO1FBQUFDLGNBQUEsR0FHaEIvRSxPQUFPLENBRlBnRSxJQUFJO1FBQUpBLElBQUksR0FBQWUsY0FBQSxjQUFHLENBQUMsR0FBQUEsY0FBQTtRQUFBQyxpQkFBQSxHQUVSaEYsT0FBTyxDQURQdEUsUUFBUTtRQUFSQSxRQUFRLEdBQUFzSixpQkFBQSxjQUFHLEtBQUssR0FBQUEsaUJBQUE7TUFHcEIsSUFBSSxDQUFDVixrQkFBa0IsQ0FBQ25SLElBQUksQ0FBQztNQUU3QixJQUFJLENBQUN1USxTQUFTLENBQUM7UUFDWHpVLElBQUksRUFBRSxRQUFRO1FBQ2RrRSxJQUFJLEVBQUpBLElBQUk7UUFDSnlRLEtBQUssRUFBTEEsS0FBSztRQUNMRSxRQUFRLEVBQVJBLFFBQVE7UUFDUkUsSUFBSSxFQUFKQSxJQUFJO1FBQ0phLFVBQVUsRUFBVkEsVUFBVTtRQUNWbkosUUFBUSxFQUFSQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQXZPLEdBQUE7SUFBQWhCLEtBQUEsRUFPQSxTQUFBOFksWUFBWTlSLElBQUksRUFBRXlRLEtBQUssRUFBZ0I7TUFBQSxJQUFkNUQsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNqQyxJQUFBMFAsa0JBQUEsR0FLSWxGLE9BQU8sQ0FKUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBb0Isa0JBQUEsY0FBRyxLQUFLLEdBQUFBLGtCQUFBO1FBQUFDLGNBQUEsR0FJaEJuRixPQUFPLENBSFBnRSxJQUFJO1FBQUpBLElBQUksR0FBQW1CLGNBQUEsY0FBRyxDQUFDLEdBQUFBLGNBQUE7UUFBQUMsc0JBQUEsR0FHUnBGLE9BQU8sQ0FGUGtFLFlBQVk7UUFBWkEsWUFBWSxHQUFBa0Isc0JBQUEsY0FBRyxFQUFFLEdBQUFBLHNCQUFBO1FBQUFDLGFBQUEsR0FFakJyRixPQUFPLENBRFBzRixJQUFJO1FBQUpBLElBQUksR0FBQUQsYUFBQSxjQUFHLENBQUMsR0FBQUEsYUFBQTtNQUdaLElBQUksQ0FBQ2Ysa0JBQWtCLENBQUNuUixJQUFJLENBQUM7TUFFN0IsSUFBSSxDQUFDdVEsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsVUFBVTtRQUNoQmtFLElBQUksRUFBSkEsSUFBSTtRQUNKeVEsS0FBSyxFQUFMQSxLQUFLO1FBQ0xFLFFBQVEsRUFBUkEsUUFBUTtRQUNSRSxJQUFJLEVBQUpBLElBQUk7UUFDSkUsWUFBWSxFQUFaQSxZQUFZO1FBQ1pvQixJQUFJLEVBQUpBO01BQ0osQ0FBQyxDQUFDO01BRUYsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFOSTtJQUFBblksR0FBQTtJQUFBaEIsS0FBQSxFQU9BLFNBQUFvWixZQUFZcFMsSUFBSSxFQUFFeVEsS0FBSyxFQUFnQjtNQUFBLElBQWQ1RCxPQUFPLEdBQUF4SyxTQUFBLENBQUF4SyxNQUFBLFFBQUF3SyxTQUFBLFFBQUEvRCxTQUFBLEdBQUErRCxTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2pDLElBQUFnUSxrQkFBQSxHQUdJeEYsT0FBTyxDQUZQOEQsUUFBUTtRQUFSQSxRQUFRLEdBQUEwQixrQkFBQSxjQUFHLEtBQUssR0FBQUEsa0JBQUE7UUFBQUMsY0FBQSxHQUVoQnpGLE9BQU8sQ0FEUGdFLElBQUk7UUFBSkEsSUFBSSxHQUFBeUIsY0FBQSxjQUFHLENBQUMsR0FBQUEsY0FBQTtNQUdaLElBQUksQ0FBQ25CLGtCQUFrQixDQUFDblIsSUFBSSxDQUFDO01BRTdCLElBQUksQ0FBQ3VRLFNBQVMsQ0FBQztRQUNYelUsSUFBSSxFQUFFLFVBQVU7UUFDaEJrRSxJQUFJLEVBQUpBLElBQUk7UUFDSnlRLEtBQUssRUFBTEEsS0FBSztRQUNMRSxRQUFRLEVBQVJBLFFBQVE7UUFDUkUsSUFBSSxFQUFKQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQTdXLEdBQUE7SUFBQWhCLEtBQUEsRUFPQSxTQUFBdVosU0FBU3ZTLElBQUksRUFBRXlRLEtBQUssRUFBZ0I7TUFBQSxJQUFkNUQsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUM5QixJQUFBbVEsa0JBQUEsR0FNSTNGLE9BQU8sQ0FMUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBNkIsa0JBQUEsY0FBRyxLQUFLLEdBQUFBLGtCQUFBO1FBQUFDLGNBQUEsR0FLaEI1RixPQUFPLENBSlBnRSxJQUFJO1FBQUpBLElBQUksR0FBQTRCLGNBQUEsY0FBRyxDQUFDLEdBQUFBLGNBQUE7UUFBQUMsZUFBQSxHQUlSN0YsT0FBTyxDQUhQOEYsTUFBTTtRQUFOQSxNQUFNLEdBQUFELGVBQUEsY0FBRyxVQUFVLEdBQUFBLGVBQUE7UUFBQUUscUJBQUEsR0FHbkIvRixPQUFPLENBRlBnRyxlQUFlO1FBQWZBLGVBQWUsR0FBQUQscUJBQUEsY0FBRyxzQkFBc0IsR0FBQUEscUJBQUE7UUFBQUUscUJBQUEsR0FFeENqRyxPQUFPLENBRFBrRyxjQUFjO1FBQWRBLGNBQWMsR0FBQUQscUJBQUEsY0FBRyxJQUFJLEdBQUFBLHFCQUFBO01BR3pCLElBQUksQ0FBQzNCLGtCQUFrQixDQUFDblIsSUFBSSxDQUFDO01BRTdCLElBQUksQ0FBQ3VRLFNBQVMsQ0FBQztRQUNYelUsSUFBSSxFQUFFLE9BQU87UUFDYmtFLElBQUksRUFBSkEsSUFBSTtRQUNKeVEsS0FBSyxFQUFMQSxLQUFLO1FBQ0xFLFFBQVEsRUFBUkEsUUFBUTtRQUNSRSxJQUFJLEVBQUpBLElBQUk7UUFDSjhCLE1BQU0sRUFBTkEsTUFBTTtRQUNORSxlQUFlLEVBQWZBLGVBQWU7UUFDZkUsY0FBYyxFQUFkQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQS9ZLEdBQUE7SUFBQWhCLEtBQUEsRUFPQSxTQUFBZ2EsT0FBT2hULElBQUksRUFBRXlRLEtBQUssRUFBZ0I7TUFBQSxJQUFkNUQsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUM1QixJQUFBNFEsa0JBQUEsR0FJSXBHLE9BQU8sQ0FIUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBc0Msa0JBQUEsY0FBRyxLQUFLLEdBQUFBLGtCQUFBO1FBQUFDLGNBQUEsR0FHaEJyRyxPQUFPLENBRlBnRSxJQUFJO1FBQUpBLElBQUksR0FBQXFDLGNBQUEsY0FBRyxDQUFDLEdBQUFBLGNBQUE7UUFBQUMsb0JBQUEsR0FFUnRHLE9BQU8sQ0FEUHVHLFdBQVc7UUFBWEEsV0FBVyxHQUFBRCxvQkFBQSxjQUFHLEtBQUssR0FBQUEsb0JBQUE7TUFHdkIsSUFBSSxDQUFDaEMsa0JBQWtCLENBQUNuUixJQUFJLENBQUM7TUFFN0IsSUFBSSxDQUFDdVEsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsS0FBSztRQUNYa0UsSUFBSSxFQUFKQSxJQUFJO1FBQ0p5USxLQUFLLEVBQUxBLEtBQUs7UUFDTEUsUUFBUSxFQUFSQSxRQUFRO1FBQ1JFLElBQUksRUFBSkEsSUFBSTtRQUNKdUMsV0FBVyxFQUFYQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQXBaLEdBQUE7SUFBQWhCLEtBQUEsRUFPQSxTQUFBcWEsY0FBY3JULElBQUksRUFBRXlRLEtBQUssRUFBZ0I7TUFBQSxJQUFkNUQsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNuQyxJQUFBaVIsa0JBQUEsR0FHSXpHLE9BQU8sQ0FGUDhELFFBQVE7UUFBUkEsUUFBUSxHQUFBMkMsa0JBQUEsY0FBRyxLQUFLLEdBQUFBLGtCQUFBO1FBQUFDLGNBQUEsR0FFaEIxRyxPQUFPLENBRFBnRSxJQUFJO1FBQUpBLElBQUksR0FBQTBDLGNBQUEsY0FBRyxDQUFDLEdBQUFBLGNBQUE7TUFHWixJQUFJLENBQUNwQyxrQkFBa0IsQ0FBQ25SLElBQUksQ0FBQztNQUU3QixJQUFJLENBQUN1USxTQUFTLENBQUM7UUFDWHpVLElBQUksRUFBRSxNQUFNO1FBQ1prRSxJQUFJLEVBQUpBLElBQUk7UUFDSnlRLEtBQUssRUFBTEEsS0FBSztRQUNMRSxRQUFRLEVBQVJBLFFBQVE7UUFDUkUsSUFBSSxFQUFKQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQTdXLEdBQUE7SUFBQWhCLEtBQUEsRUFPQSxTQUFBd2EsU0FBU3JCLElBQUksRUFBRXNCLElBQUksRUFBZ0I7TUFBQSxJQUFkNUcsT0FBTyxHQUFBeEssU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUM3QixJQUFBcVIsY0FBQSxHQUFxQjdHLE9BQU8sQ0FBcEJnRSxJQUFJO1FBQUpBLElBQUksR0FBQTZDLGNBQUEsY0FBRyxDQUFDLEdBQUFBLGNBQUE7TUFFaEIsSUFBSSxDQUFDbkQsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsT0FBTztRQUNicVcsSUFBSSxFQUFKQSxJQUFJO1FBQ0pzQixJQUFJLEVBQUpBLElBQUk7UUFDSjVDLElBQUksRUFBSkE7TUFDSixDQUFDLENBQUM7TUFFRixPQUFPLElBQUk7SUFDZjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQTdXLEdBQUE7SUFBQWhCLEtBQUEsRUFLQSxTQUFBMmEsUUFBUUMsT0FBTyxFQUFFO01BQ2IsSUFBSSxDQUFDckQsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsTUFBTTtRQUNaOFgsT0FBTyxFQUFQQTtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU8sSUFBSTtJQUNmOztJQUVBOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBWkk7SUFBQTVaLEdBQUE7SUFBQWhCLEtBQUEsRUFhQSxTQUFBNmEsY0FBYzdULElBQUksRUFBRThULE1BQU0sRUFBRTtNQUN4QixJQUNJckQsS0FBSyxHQU9McUQsTUFBTSxDQVBOckQsS0FBSztRQUFBc0QsV0FBQSxHQU9MRCxNQUFNLENBTk50SSxHQUFHO1FBQUhBLEdBQUcsR0FBQXVJLFdBQUEsY0FBRyxDQUFDLEdBQUFBLFdBQUE7UUFBQUMsV0FBQSxHQU1QRixNQUFNLENBTE54SSxHQUFHO1FBQUhBLEdBQUcsR0FBQTBJLFdBQUEsY0FBRyxFQUFFLEdBQUFBLFdBQUE7UUFBQUMsZUFBQSxHQUtSSCxNQUFNLENBSk5JLE9BQU87UUFBUEEsT0FBTyxHQUFBRCxlQUFBLGNBQUcsQ0FBQyxHQUFBQSxlQUFBO1FBQUFFLHFCQUFBLEdBSVhMLE1BQU0sQ0FITk0sYUFBYTtRQUFiQSxhQUFhLEdBQUFELHFCQUFBLGNBQUcsV0FBVyxHQUFBQSxxQkFBQTtRQUFBRSxxQkFBQSxHQUczQlAsTUFBTSxDQUZOUSxnQkFBZ0I7UUFBaEJBLGdCQUFnQixHQUFBRCxxQkFBQSxjQUFHLFdBQVcsR0FBQUEscUJBQUE7UUFDOUJFLFFBQVEsR0FDUlQsTUFBTSxDQUROUyxRQUFRO01BR1osSUFBSSxDQUFDaEUsU0FBUyxDQUFDO1FBQ1h6VSxJQUFJLEVBQUUsWUFBWTtRQUNsQmtFLElBQUksRUFBSkEsSUFBSTtRQUNKeVEsS0FBSyxFQUFMQSxLQUFLO1FBQ0xqRixHQUFHLEVBQUhBLEdBQUc7UUFDSEYsR0FBRyxFQUFIQSxHQUFHO1FBQ0g0SSxPQUFPLEVBQVBBLE9BQU87UUFDUEUsYUFBYSxFQUFiQSxhQUFhO1FBQ2JFLGdCQUFnQixFQUFoQkEsZ0JBQWdCO1FBQ2hCQyxRQUFRLEVBQVJBO01BQ0osQ0FBQyxDQUFDO01BRUYsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBdmEsR0FBQTtJQUFBaEIsS0FBQSxFQUlBLFNBQUF3YixPQUFBLEVBQVM7TUFDTCxJQUFJL0osSUFBSSxHQUFHLG1DQUFtQztNQUFDLElBQUFULFNBQUEsR0FBQUMsMEJBQUEsQ0FFM0IsSUFBSSxDQUFDNkYsTUFBTTtRQUFBNUYsS0FBQTtNQUFBO1FBQS9CLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBaE0sSUFBQSxHQUFpQztVQUFBLElBQXRCcVcsS0FBSyxHQUFBdkssS0FBQSxDQUFBbFIsS0FBQTtVQUNaeVIsSUFBSSxJQUFJLElBQUksQ0FBQ2lLLFlBQVksQ0FBQ0QsS0FBSyxDQUFDO1FBQ3BDO01BQUMsU0FBQTNaLEdBQUE7UUFBQWtQLFNBQUEsQ0FBQWxHLENBQUEsQ0FBQWhKLEdBQUE7TUFBQTtRQUFBa1AsU0FBQSxDQUFBSyxDQUFBO01BQUE7TUFFREksSUFBSSxJQUFJLFFBQVE7TUFDaEIsT0FBT0EsSUFBSTtJQUNmOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0VBSEk7SUFBQXpRLEdBQUE7SUFBQWhCLEtBQUEsRUFJQSxTQUFBMGIsYUFBYUQsS0FBSyxFQUFFO01BQ2hCLFFBQVFBLEtBQUssQ0FBQzNZLElBQUk7UUFDZCxLQUFLLEtBQUs7VUFDTixPQUFPLElBQUksQ0FBQzZZLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDO1FBQ2pDLEtBQUssVUFBVTtVQUNYLE9BQU8sSUFBSSxDQUFDRyxlQUFlLENBQUNILEtBQUssQ0FBQztRQUN0QyxLQUFLLE1BQU07VUFDUCxPQUFPLElBQUksQ0FBQ0ksV0FBVyxDQUFDSixLQUFLLENBQUM7UUFDbEMsS0FBSyxRQUFRO1VBQ1QsT0FBTyxJQUFJLENBQUNLLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDO1FBQ3BDLEtBQUssUUFBUTtVQUNULE9BQU8sSUFBSSxDQUFDTSxhQUFhLENBQUNOLEtBQUssQ0FBQztRQUNwQyxLQUFLLFVBQVU7VUFDWCxPQUFPLElBQUksQ0FBQ08sZUFBZSxDQUFDUCxLQUFLLENBQUM7UUFDdEMsS0FBSyxVQUFVO1VBQ1gsT0FBTyxJQUFJLENBQUNRLGVBQWUsQ0FBQ1IsS0FBSyxDQUFDO1FBQ3RDLEtBQUssT0FBTztVQUNSLE9BQU8sSUFBSSxDQUFDUyxZQUFZLENBQUNULEtBQUssQ0FBQztRQUNuQyxLQUFLLEtBQUs7VUFDTixPQUFPLElBQUksQ0FBQ1UsVUFBVSxDQUFDVixLQUFLLENBQUM7UUFDakMsS0FBSyxNQUFNO1VBQ1AsT0FBTyxJQUFJLENBQUNXLFdBQVcsQ0FBQ1gsS0FBSyxDQUFDO1FBQ2xDLEtBQUssT0FBTztVQUNSLE9BQU8sSUFBSSxDQUFDWSxZQUFZLENBQUNaLEtBQUssQ0FBQztRQUNuQyxLQUFLLE1BQU07VUFDUCxPQUFPLElBQUksQ0FBQ2EsV0FBVyxDQUFDYixLQUFLLENBQUM7UUFDbEMsS0FBSyxZQUFZO1VBQ2IsT0FBTyxJQUFJLENBQUNjLGlCQUFpQixDQUFDZCxLQUFLLENBQUM7UUFDeEM7VUFDSTlRLE9BQU8sQ0FBQytKLElBQUksc0NBQUE5SSxNQUFBLENBQXFDNlAsS0FBSyxDQUFDM1ksSUFBSSxPQUFHLENBQUM7VUFDL0QsT0FBTyxFQUFFO01BQ2pCO0lBQ0o7RUFBQztJQUFBOUIsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUEyYixXQUFXRixLQUFLLEVBQUU7TUFDZCxJQUFJaEssSUFBSSxHQUFHLGtDQUFrQztNQUFDLElBQUErSyxVQUFBLEdBQUF2TCwwQkFBQSxDQUN2QndLLEtBQUssQ0FBQzNFLE1BQU07UUFBQTJGLE1BQUE7TUFBQTtRQUFuQyxLQUFBRCxVQUFBLENBQUFyTCxDQUFBLE1BQUFzTCxNQUFBLEdBQUFELFVBQUEsQ0FBQXBMLENBQUEsSUFBQWhNLElBQUEsR0FBcUM7VUFBQSxJQUExQnNYLFFBQVEsR0FBQUQsTUFBQSxDQUFBemMsS0FBQTtVQUNmeVIsSUFBSSxJQUFJLElBQUksQ0FBQ2lLLFlBQVksQ0FBQ2dCLFFBQVEsQ0FBQztRQUN2QztNQUFDLFNBQUE1YSxHQUFBO1FBQUEwYSxVQUFBLENBQUExUixDQUFBLENBQUFoSixHQUFBO01BQUE7UUFBQTBhLFVBQUEsQ0FBQW5MLENBQUE7TUFBQTtNQUNESSxJQUFJLElBQUksVUFBVTtNQUNsQixPQUFPQSxJQUFJO0lBQ2Y7RUFBQztJQUFBelEsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUE0YixnQkFBZ0JILEtBQUssRUFBRTtNQUNuQixJQUFJaEssSUFBSSwwQkFBQTdGLE1BQUEsQ0FBMEI2UCxLQUFLLENBQUNwRSxNQUFNLGdCQUFhO01BQUMsSUFBQXNGLFVBQUEsR0FBQTFMLDBCQUFBLENBQ2xDd0ssS0FBSyxDQUFDM0UsTUFBTTtRQUFBOEYsTUFBQTtNQUFBO1FBQXRDLEtBQUFELFVBQUEsQ0FBQXhMLENBQUEsTUFBQXlMLE1BQUEsR0FBQUQsVUFBQSxDQUFBdkwsQ0FBQSxJQUFBaE0sSUFBQSxHQUF3QztVQUFBLElBQTdCeVgsV0FBVyxHQUFBRCxNQUFBLENBQUE1YyxLQUFBO1VBQ2xCeVIsSUFBSSxJQUFJLElBQUksQ0FBQ2lLLFlBQVksQ0FBQ21CLFdBQVcsQ0FBQztRQUMxQztNQUFDLFNBQUEvYSxHQUFBO1FBQUE2YSxVQUFBLENBQUE3UixDQUFBLENBQUFoSixHQUFBO01BQUE7UUFBQTZhLFVBQUEsQ0FBQXRMLENBQUE7TUFBQTtNQUNESSxJQUFJLElBQUksZUFBZTtNQUN2QixPQUFPQSxJQUFJO0lBQ2Y7RUFBQztJQUFBelEsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUE2YixZQUFZSixLQUFLLEVBQUU7TUFDZixJQUFNcUIsWUFBWSxHQUFHckIsS0FBSyxDQUFDOUQsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO01BQ3JELElBQU1vRixhQUFhLEdBQUd0QixLQUFLLENBQUM5RCxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7TUFDaEQsSUFBTS9FLFdBQVcsR0FBRzZJLEtBQUssQ0FBQzdJLFdBQVcsb0JBQUFoSCxNQUFBLENBQW1CNlAsS0FBSyxDQUFDN0ksV0FBVyxVQUFNLEVBQUU7TUFFakYsSUFBSW5CLElBQUksNENBQUE3RixNQUFBLENBQXlDNlAsS0FBSyxDQUFDNUQsSUFBSSxVQUFNO01BQ2pFcEcsSUFBSSxnQkFBQTdGLE1BQUEsQ0FBZ0I2UCxLQUFLLENBQUNoRSxLQUFLLEVBQUE3TCxNQUFBLENBQUdtUixhQUFhLGVBQVk7TUFDM0R0TCxJQUFJLDBDQUFBN0YsTUFBQSxDQUF1QzZQLEtBQUssQ0FBQ3pVLElBQUksaUJBQUE0RSxNQUFBLENBQVk2UCxLQUFLLENBQUMxRCxZQUFZLGdDQUFBbk0sTUFBQSxDQUEwQmtSLFlBQVksT0FBQWxSLE1BQUEsQ0FBSWdILFdBQVcsU0FBTTtNQUU5SSxJQUFJNkksS0FBSyxDQUFDdkQsUUFBUSxFQUFFO1FBQ2hCekcsSUFBSSwrQ0FBQTdGLE1BQUEsQ0FBNkM2UCxLQUFLLENBQUN2RCxRQUFRLGVBQVk7TUFDL0U7TUFFQXpHLElBQUksSUFBSSxVQUFVO01BQ2xCLE9BQU9BLElBQUk7SUFDZjtFQUFDO0lBQUF6USxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQThiLGNBQWNMLEtBQUssRUFBRTtNQUNqQixJQUFNcUIsWUFBWSxHQUFHckIsS0FBSyxDQUFDOUQsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO01BQ3JELElBQU1vRixhQUFhLEdBQUd0QixLQUFLLENBQUM5RCxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7TUFFaEQsSUFBSWxHLElBQUksNENBQUE3RixNQUFBLENBQXlDNlAsS0FBSyxDQUFDNUQsSUFBSSxVQUFNO01BQ2pFcEcsSUFBSSxnQkFBQTdGLE1BQUEsQ0FBZ0I2UCxLQUFLLENBQUNoRSxLQUFLLEVBQUE3TCxNQUFBLENBQUdtUixhQUFhLGVBQVk7TUFDM0R0TCxJQUFJLDRDQUFBN0YsTUFBQSxDQUF5QzZQLEtBQUssQ0FBQ3pVLElBQUksaUJBQUE0RSxNQUFBLENBQVk2UCxLQUFLLENBQUMxRCxZQUFZLDZGQUFBbk0sTUFBQSxDQUFxRmtSLFlBQVksU0FBTTtNQUU1TCxJQUFJckIsS0FBSyxDQUFDdkQsUUFBUSxFQUFFO1FBQ2hCekcsSUFBSSwrQ0FBQTdGLE1BQUEsQ0FBNkM2UCxLQUFLLENBQUN2RCxRQUFRLGVBQVk7TUFDL0U7TUFFQXpHLElBQUksSUFBSSxVQUFVO01BQ2xCLE9BQU9BLElBQUk7SUFDZjtFQUFDO0lBQUF6USxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQStiLGNBQWNOLEtBQUssRUFBRTtNQUNqQixJQUFNcUIsWUFBWSxHQUFHckIsS0FBSyxDQUFDOUQsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO01BQ3JELElBQU1vRixhQUFhLEdBQUd0QixLQUFLLENBQUM5RCxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7TUFDaEQsSUFBTXFGLFlBQVksR0FBR3ZCLEtBQUssQ0FBQ2xNLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRTtNQUVyRCxJQUFJa0MsSUFBSSw0Q0FBQTdGLE1BQUEsQ0FBeUM2UCxLQUFLLENBQUM1RCxJQUFJLFVBQU07TUFDakVwRyxJQUFJLGdCQUFBN0YsTUFBQSxDQUFnQjZQLEtBQUssQ0FBQ2hFLEtBQUssRUFBQTdMLE1BQUEsQ0FBR21SLGFBQWEsZUFBWTtNQUMzRHRMLElBQUksNkJBQUE3RixNQUFBLENBQTRCNlAsS0FBSyxDQUFDelUsSUFBSSx3Q0FBQTRFLE1BQUEsQ0FBa0NrUixZQUFZLE9BQUFsUixNQUFBLENBQUlvUixZQUFZLFFBQUs7TUFDN0d2TCxJQUFJLElBQUksSUFBSSxDQUFDd0wsZUFBZSxDQUFDeEIsS0FBSyxDQUFDL0MsVUFBVSxFQUFFK0MsS0FBSyxDQUFDOUQsUUFBUSxDQUFDO01BQzlEbEcsSUFBSSxJQUFJLGVBQWU7TUFDdkJBLElBQUksSUFBSSxVQUFVO01BQ2xCLE9BQU9BLElBQUk7SUFDZjtFQUFDO0lBQUF6USxHQUFBO0lBQUFoQixLQUFBLEVBRUQsU0FBQWdjLGdCQUFnQlAsS0FBSyxFQUFFO01BQ25CLElBQU1xQixZQUFZLEdBQUdyQixLQUFLLENBQUM5RCxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUU7TUFDckQsSUFBTW9GLGFBQWEsR0FBR3RCLEtBQUssQ0FBQzlELFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRTtNQUVoRCxJQUFJbEcsSUFBSSw0Q0FBQTdGLE1BQUEsQ0FBeUM2UCxLQUFLLENBQUM1RCxJQUFJLFVBQU07TUFDakVwRyxJQUFJLGdCQUFBN0YsTUFBQSxDQUFnQjZQLEtBQUssQ0FBQ2hFLEtBQUssRUFBQTdMLE1BQUEsQ0FBR21SLGFBQWEsZUFBWTtNQUMzRHRMLElBQUksK0JBQUE3RixNQUFBLENBQThCNlAsS0FBSyxDQUFDelUsSUFBSSx1Q0FBQTRFLE1BQUEsQ0FBZ0M2UCxLQUFLLENBQUN0QyxJQUFJLFNBQUF2TixNQUFBLENBQUtrUixZQUFZLE9BQUFsUixNQUFBLENBQUk2UCxLQUFLLENBQUMxRCxZQUFZLGtCQUFlO01BQzVJdEcsSUFBSSxJQUFJLFVBQVU7TUFDbEIsT0FBT0EsSUFBSTtJQUNmO0VBQUM7SUFBQXpRLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBaWMsZ0JBQWdCUixLQUFLLEVBQUU7TUFDbkIsSUFBTXFCLFlBQVksR0FBR3JCLEtBQUssQ0FBQzlELFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRTtNQUNyRCxJQUFNb0YsYUFBYSxHQUFHdEIsS0FBSyxDQUFDOUQsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFO01BRWhELElBQUlsRyxJQUFJLDRDQUFBN0YsTUFBQSxDQUF5QzZQLEtBQUssQ0FBQzVELElBQUksVUFBTTtNQUNqRXBHLElBQUksZ0JBQUE3RixNQUFBLENBQWdCNlAsS0FBSyxDQUFDaEUsS0FBSyxFQUFBN0wsTUFBQSxDQUFHbVIsYUFBYSxlQUFZO01BQzNEdEwsSUFBSSwrQkFBQTdGLE1BQUEsQ0FBOEI2UCxLQUFLLENBQUN6VSxJQUFJLGlEQUFBNEUsTUFBQSxDQUEyQ2tSLFlBQVksbUJBQWdCO01BQ25IckwsSUFBSSxJQUFJLFVBQVU7TUFDbEIsT0FBT0EsSUFBSTtJQUNmO0VBQUM7SUFBQXpRLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBa2MsYUFBYVQsS0FBSyxFQUFFO01BQ2hCLElBQU1zQixhQUFhLEdBQUd0QixLQUFLLENBQUM5RCxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7TUFDaEQsSUFBTXVGLFNBQVMsR0FBR2pPLFdBQVcsQ0FBQ2dILGlCQUFpQjtNQUUvQyxJQUFJeEUsSUFBSSw2REFBQTdGLE1BQUEsQ0FBMEQ2UCxLQUFLLENBQUM1RCxJQUFJLFVBQU07TUFDbEZwRyxJQUFJLGtEQUFBN0YsTUFBQSxDQUFnRDZQLEtBQUssQ0FBQ2hFLEtBQUssRUFBQTdMLE1BQUEsQ0FBR21SLGFBQWEsZUFBWTtNQUMzRnRMLElBQUksNENBQUE3RixNQUFBLENBQXlDNlAsS0FBSyxDQUFDelUsSUFBSSxlQUFXOztNQUVsRTtNQUNBeUssSUFBSSx5RUFBdUU7TUFDM0VBLElBQUkscURBQW1EOztNQUV2RDtNQUNBQSxJQUFJLGdEQUE4QztNQUNsREEsSUFBSSwrQ0FBNkM7TUFDakRBLElBQUkscURBQW1EO01BQ3ZEQSxJQUFJLHNCQUFzQjtNQUUxQkEsSUFBSSx3RUFBc0U7O01BRTFFO01BQ0FBLElBQUksNkhBQXlIO01BQzdIQSxJQUFJLDhEQUE0RDtNQUNoRUEsSUFBSSxpREFBQTdGLE1BQUEsQ0FBOEM2UCxLQUFLLENBQUM1QixlQUFlLHFCQUFBak8sTUFBQSxDQUFnQjZQLEtBQUssQ0FBQ3pVLElBQUksc0dBQThGO01BQy9MeUssSUFBSSwwQkFBMEI7O01BRTlCO01BQ0EsSUFBSWdLLEtBQUssQ0FBQzFCLGNBQWMsRUFBRTtRQUN0QnRJLElBQUksNkdBQUE3RixNQUFBLENBQXdHNlAsS0FBSyxDQUFDelUsSUFBSSxVQUFNO1FBQzVIeUssSUFBSSw4RUFBc0U7UUFDMUVBLElBQUksMkJBQTJCO01BQ25DO01BRUFBLElBQUksc0JBQXNCO01BRTFCQSxJQUFJLDREQUFBN0YsTUFBQSxDQUEwRDZQLEtBQUssQ0FBQzVCLGVBQWUsQ0FBQ2pKLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3VNLEdBQUcsQ0FBQyxVQUFBOUwsQ0FBQztRQUFBLE9BQUlBLENBQUMsQ0FBQytCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO01BQUEsRUFBQyxDQUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQVk7TUFDeEp0QixJQUFJLHdEQUFBN0YsTUFBQSxDQUFzRHNSLFNBQVMsK0JBQUF0UixNQUFBLENBQW9CNlAsS0FBSyxDQUFDOUIsTUFBTSxlQUFZO01BQy9HbEksSUFBSSxvQkFBb0IsQ0FBQyxDQUFDOztNQUUxQjtNQUNBQSxJQUFJLCtGQUEyRjtNQUMvRkEsSUFBSSxpSEFBNkc7TUFDakhBLElBQUksOElBQXNJO01BQzFJQSxJQUFJLCtSQUF5UjtNQUM3UkEsSUFBSSw0RUFBd0U7TUFDNUVBLElBQUksMkJBQTJCO01BQy9CQSxJQUFJLHNCQUFzQjtNQUMxQkEsSUFBSSxnRkFBOEU7TUFDbEZBLElBQUksb0JBQW9CLENBQUMsQ0FBQzs7TUFFMUJBLElBQUksa0JBQWtCLENBQUMsQ0FBQztNQUN4QkEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO01BQ3RCQSxJQUFJLGNBQWM7TUFFbEIsT0FBT0EsSUFBSTtJQUNmO0VBQUM7SUFBQXpRLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBbWMsV0FBV1YsS0FBSyxFQUFFO01BQ2QsSUFBTXFCLFlBQVksR0FBR3JCLEtBQUssQ0FBQzlELFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRTtNQUNyRCxJQUFNb0YsYUFBYSxHQUFHdEIsS0FBSyxDQUFDOUQsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFO01BRWhELElBQUlsRyxJQUFJLDRDQUFBN0YsTUFBQSxDQUF5QzZQLEtBQUssQ0FBQzVELElBQUksVUFBTTtNQUNqRXBHLElBQUksZ0JBQUE3RixNQUFBLENBQWdCNlAsS0FBSyxDQUFDaEUsS0FBSyxFQUFBN0wsTUFBQSxDQUFHbVIsYUFBYSxlQUFZO01BQzNEdEwsSUFBSSwwQ0FBQTdGLE1BQUEsQ0FBdUM2UCxLQUFLLENBQUN6VSxJQUFJLGdDQUFBNEUsTUFBQSxDQUEwQmtSLFlBQVksU0FBTTtNQUVqRyxJQUFJckIsS0FBSyxDQUFDckIsV0FBVyxFQUFFO1FBQ25CM0ksSUFBSSxJQUFJLG9HQUFvRztNQUNoSDtNQUVBQSxJQUFJLElBQUksVUFBVTtNQUNsQixPQUFPQSxJQUFJO0lBQ2Y7RUFBQztJQUFBelEsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUFvYyxZQUFZWCxLQUFLLEVBQUU7TUFDZixJQUFNcUIsWUFBWSxHQUFHckIsS0FBSyxDQUFDOUQsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO01BQ3JELElBQU1vRixhQUFhLEdBQUd0QixLQUFLLENBQUM5RCxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7TUFDaEQsSUFBTXlGLEtBQUssR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO01BRTlCLElBQUk1TCxJQUFJLDRDQUFBN0YsTUFBQSxDQUF5QzZQLEtBQUssQ0FBQzVELElBQUksVUFBTTtNQUNqRXBHLElBQUksZ0JBQUE3RixNQUFBLENBQWdCNlAsS0FBSyxDQUFDaEUsS0FBSyxFQUFBN0wsTUFBQSxDQUFHbVIsYUFBYSxlQUFZO01BQzNEdEwsSUFBSSw2QkFBQTdGLE1BQUEsQ0FBNEI2UCxLQUFLLENBQUN6VSxJQUFJLHdDQUFBNEUsTUFBQSxDQUFrQ2tSLFlBQVksUUFBSztNQUM3RnJMLElBQUksSUFBSSxJQUFJLENBQUN3TCxlQUFlLENBQUNHLEtBQUssRUFBRTNCLEtBQUssQ0FBQzlELFFBQVEsQ0FBQztNQUNuRGxHLElBQUksSUFBSSxlQUFlO01BQ3ZCQSxJQUFJLElBQUksVUFBVTtNQUNsQixPQUFPQSxJQUFJO0lBQ2Y7RUFBQztJQUFBelEsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUFxYyxhQUFhWixLQUFLLEVBQUU7TUFDaEIsSUFBTTZCLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFJdFcsSUFBSSxFQUFLO1FBQ2xCLG9DQUFBNEUsTUFBQSxDQUFtQzVFLElBQUk7TUFDM0MsQ0FBQztNQUVELElBQU11VyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBSUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVoRyxLQUFLLEVBQUs7UUFDeEMsSUFBSWhHLElBQUksY0FBQTdGLE1BQUEsQ0FBYzZMLEtBQUssVUFBTztRQUNsQyxLQUFLLElBQUkxWSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd5ZSxNQUFNLEVBQUV6ZSxDQUFDLEVBQUUsRUFBRTtVQUM3QjBTLElBQUksSUFBSTZMLEdBQUcsSUFBQTFSLE1BQUEsQ0FBSTZSLFVBQVUsT0FBQTdSLE1BQUEsQ0FBSTdNLENBQUMsQ0FBRSxDQUFDO1FBQ3JDO1FBQ0EwUyxJQUFJLElBQUksT0FBTztRQUNmLE9BQU9BLElBQUk7TUFDZixDQUFDO01BRUQsSUFBSUEsSUFBSSx1QkFBQTdGLE1BQUEsQ0FBc0I2UCxLQUFLLENBQUM1RCxJQUFJLFVBQU07TUFDOUNwRyxJQUFJLElBQUksbURBQW1EO01BQzNEQSxJQUFJLElBQUksZUFBZTtNQUV2QixLQUFLLElBQUkxUyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcwYyxLQUFLLENBQUN0QyxJQUFJLEVBQUVwYSxDQUFDLEVBQUUsRUFBRTtRQUNqQzBTLElBQUksSUFBSThMLElBQUksQ0FBQzlCLEtBQUssQ0FBQ2hCLElBQUksZ0JBQUE3TyxNQUFBLENBQWdCN00sQ0FBQyxHQUFJQSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ3REO01BRUEwUyxJQUFJLElBQUksZ0JBQWdCO01BQ3hCQSxJQUFJLElBQUksY0FBYztNQUN0QkEsSUFBSSxJQUFJLFVBQVU7TUFDbEIsT0FBT0EsSUFBSTtJQUNmO0VBQUM7SUFBQXpRLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBc2MsWUFBWWIsS0FBSyxFQUFFO01BQ2YsaUJBQUE3UCxNQUFBLENBQWlCNlAsS0FBSyxDQUFDYixPQUFPO0lBQ2xDO0VBQUM7SUFBQTVaLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBdWMsa0JBQWtCZCxLQUFLLEVBQUU7TUFDckIsSUFBSWhLLElBQUksaURBQUE3RixNQUFBLENBQThDNlAsS0FBSyxDQUFDelUsSUFBSSxvQkFBQTRFLE1BQUEsQ0FBZTZQLEtBQUssQ0FBQ2pKLEdBQUcsb0JBQUE1RyxNQUFBLENBQWU2UCxLQUFLLENBQUNuSixHQUFHLFVBQU07TUFDdEhiLElBQUksZ0RBQThDO01BQ2xEQSxJQUFJLG1CQUFBN0YsTUFBQSxDQUFtQjZQLEtBQUssQ0FBQ2hFLEtBQUssZ0JBQWE7TUFDL0NoRyxJQUFJLGdCQUFnQjtNQUNwQkEsSUFBSSwrQ0FBNkM7O01BRWpEO01BQ0EsS0FBSyxJQUFJMVMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJMGMsS0FBSyxDQUFDUCxPQUFPLEVBQUVuYyxDQUFDLEVBQUUsRUFBRTtRQUNyQzBTLElBQUksaUVBQUE3RixNQUFBLENBQThEN00sQ0FBQyxHQUFHLENBQUMsVUFBTTtRQUM3RTBTLElBQUkscUJBQUE3RixNQUFBLENBQXFCNlAsS0FBSyxDQUFDaEUsS0FBSyxRQUFBN0wsTUFBQSxDQUFLN00sQ0FBQyxnQkFBYTtRQUV2RCxJQUFNMmUsV0FBVyxHQUFHLElBQUl6TyxXQUFXLENBQUMsSUFBSSxDQUFDNEgsV0FBVyxDQUFDO1FBQ3JENEUsS0FBSyxDQUFDRixRQUFRLENBQUN4YyxDQUFDLEVBQUUyZSxXQUFXLENBQUM7UUFBQyxJQUFBQyxVQUFBLEdBQUExTSwwQkFBQSxDQUVQeU0sV0FBVyxDQUFDNUcsTUFBTTtVQUFBOEcsTUFBQTtRQUFBO1VBQTFDLEtBQUFELFVBQUEsQ0FBQXhNLENBQUEsTUFBQXlNLE1BQUEsR0FBQUQsVUFBQSxDQUFBdk0sQ0FBQSxJQUFBaE0sSUFBQSxHQUE0QztZQUFBLElBQWpDeVksU0FBUyxHQUFBRCxNQUFBLENBQUE1ZCxLQUFBO1lBQ2hCeVIsSUFBSSxJQUFJLElBQUksQ0FBQ2lLLFlBQVksQ0FBQ21DLFNBQVMsQ0FBQztVQUN4QztRQUFDLFNBQUEvYixHQUFBO1VBQUE2YixVQUFBLENBQUE3UyxDQUFBLENBQUFoSixHQUFBO1FBQUE7VUFBQTZiLFVBQUEsQ0FBQXRNLENBQUE7UUFBQTtRQUVELElBQUl0UyxDQUFDLEdBQUcwYyxLQUFLLENBQUNqSixHQUFHLEVBQUU7VUFDZmYsSUFBSSw0RkFBQTdGLE1BQUEsQ0FBd0Y2UCxLQUFLLENBQUNILGdCQUFnQixnQkFBYTtRQUNuSTtRQUVBN0osSUFBSSx1QkFBdUI7TUFDL0I7TUFFQUEsSUFBSSxnQkFBZ0I7TUFDcEJBLElBQUksc0ZBQUE3RixNQUFBLENBQWtGNlAsS0FBSyxDQUFDTCxhQUFhLGdCQUFhOztNQUV0SDtNQUNBLElBQU0wQyxlQUFlLEdBQUcsSUFBSTdPLFdBQVcsQ0FBQyxJQUFJLENBQUM0SCxXQUFXLENBQUM7TUFDekQ7TUFDQSxJQUFNakUsV0FBVyxjQUFBaEgsTUFBQSxDQUFjbVMsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUN4SCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFJO01BRTFFZ0YsS0FBSyxDQUFDRixRQUFRLENBQUMzSSxXQUFXLEVBQUVrTCxlQUFlLENBQUM7TUFFNUNyTSxJQUFJLHlFQUFBN0YsTUFBQSxDQUFzRWdILFdBQVcsVUFBTTtNQUMzRm5CLElBQUksaUVBQUE3RixNQUFBLENBQThEZ0gsV0FBVyxVQUFNO01BQ25GbkIsSUFBSSxxQkFBQTdGLE1BQUEsQ0FBcUI2UCxLQUFLLENBQUNoRSxLQUFLLFFBQUE3TCxNQUFBLENBQUtnSCxXQUFXLGdCQUFhO01BQUMsSUFBQXNMLFVBQUEsR0FBQWpOLDBCQUFBLENBQzFDNk0sZUFBZSxDQUFDaEgsTUFBTTtRQUFBcUgsTUFBQTtNQUFBO1FBQTlDLEtBQUFELFVBQUEsQ0FBQS9NLENBQUEsTUFBQWdOLE1BQUEsR0FBQUQsVUFBQSxDQUFBOU0sQ0FBQSxJQUFBaE0sSUFBQSxHQUFnRDtVQUFBLElBQXJDeVksVUFBUyxHQUFBTSxNQUFBLENBQUFuZSxLQUFBO1VBQ2hCeVIsSUFBSSxJQUFJLElBQUksQ0FBQ2lLLFlBQVksQ0FBQ21DLFVBQVMsQ0FBQztRQUN4QztNQUFDLFNBQUEvYixHQUFBO1FBQUFvYyxVQUFBLENBQUFwVCxDQUFBLENBQUFoSixHQUFBO01BQUE7UUFBQW9jLFVBQUEsQ0FBQTdNLENBQUE7TUFBQTtNQUNESSxJQUFJLDRGQUFBN0YsTUFBQSxDQUF3RjZQLEtBQUssQ0FBQ0gsZ0JBQWdCLGdCQUFhO01BQy9IN0osSUFBSSx1QkFBdUI7TUFDM0JBLElBQUkscUJBQXFCO01BRXpCQSxJQUFJLElBQUksVUFBVTtNQUVsQixPQUFPQSxJQUFJO0lBQ2Y7O0lBRUE7RUFBQTtJQUFBelEsR0FBQTtJQUFBaEIsS0FBQSxFQUVBLFNBQUF1WCxVQUFVa0UsS0FBSyxFQUFFO01BQ2IsSUFBSSxJQUFJLENBQUMxRSxVQUFVLEtBQUssSUFBSSxFQUFFO1FBQzFCLElBQUksQ0FBQ0EsVUFBVSxDQUFDM1EsSUFBSSxDQUFDcVYsS0FBSyxDQUFDO01BQy9CLENBQUMsTUFBTTtRQUNILElBQUksQ0FBQzNFLE1BQU0sQ0FBQzFRLElBQUksQ0FBQ3FWLEtBQUssQ0FBQztNQUMzQjtJQUNKO0VBQUM7SUFBQXphLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBbVksbUJBQW1CblIsSUFBSSxFQUFFO01BQ3JCLElBQUksSUFBSSxDQUFDZ1EsVUFBVSxDQUFDb0gsR0FBRyxDQUFDcFgsSUFBSSxDQUFDLEVBQUU7UUFDM0IyRCxPQUFPLENBQUMrSixJQUFJLHdDQUFBOUksTUFBQSxDQUF1QzVFLElBQUksT0FBRyxDQUFDO01BQy9EO01BQ0EsSUFBSSxDQUFDZ1EsVUFBVSxDQUFDcUgsR0FBRyxDQUFDclgsSUFBSSxDQUFDO0lBQzdCO0VBQUM7SUFBQWhHLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBaWQsZ0JBQWdCcEosT0FBTyxFQUFFeUssVUFBVSxFQUFFO01BQ2pDLElBQUlDLFVBQVUsR0FBR0QsVUFBVSxHQUFHLEVBQUUsR0FBRyw0QkFBNEI7TUFFL0QsS0FBSyxJQUFJRSxXQUFXLElBQUkzSyxPQUFPLEVBQUU7UUFDN0IsSUFBSSxPQUFPQSxPQUFPLENBQUMySyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7VUFDMUNELFVBQVUsdUJBQUEzUyxNQUFBLENBQXNCNFMsV0FBVyxTQUFBNVMsTUFBQSxDQUFLaUksT0FBTyxDQUFDMkssV0FBVyxDQUFDLGNBQVc7UUFDbkYsQ0FBQyxNQUFNO1VBQ0hELFVBQVUseUJBQUEzUyxNQUFBLENBQXdCNFMsV0FBVyxRQUFJO1VBQ2pELEtBQUssSUFBSUMsY0FBYyxJQUFJNUssT0FBTyxDQUFDMkssV0FBVyxDQUFDLEVBQUU7WUFDN0NELFVBQVUsdUJBQUEzUyxNQUFBLENBQXNCNlMsY0FBYyxTQUFBN1MsTUFBQSxDQUFLaUksT0FBTyxDQUFDMkssV0FBVyxDQUFDLENBQUNDLGNBQWMsQ0FBQyxjQUFXO1VBQ3RHO1VBQ0FGLFVBQVUsaUJBQWlCO1FBQy9CO01BQ0o7TUFFQSxPQUFPQSxVQUFVO0lBQ3JCO0VBQUM7SUFBQXZkLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBcWQsVUFBQSxFQUFZO01BQ1IsT0FBTztRQUNILGtCQUFrQixFQUFFLGFBQWE7UUFDakMsa0JBQWtCLEVBQUUsYUFBYTtRQUNqQyxVQUFVLEVBQUUsS0FBSztRQUNqQixjQUFjLEVBQUUsU0FBUztRQUN6QixjQUFjLEVBQUUsU0FBUztRQUN6QixnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGlCQUFpQixFQUFFLFlBQVk7UUFDL0IsWUFBWSxFQUFFLE9BQU87UUFDckIsY0FBYyxFQUFFLFNBQVM7UUFDekIsY0FBYyxFQUFFLFNBQVM7UUFDekIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsb0JBQW9CLEVBQUUsZUFBZTtRQUNyQyw2QkFBNkIsRUFBRSx3QkFBd0I7UUFDdkQsc0JBQXNCLEVBQUUsaUJBQWlCO1FBQ3pDLHFCQUFxQixFQUFFLGdCQUFnQjtRQUN2QyxjQUFjLEVBQUUsU0FBUztRQUN6QixnQkFBZ0IsRUFBRSx1QkFBdUI7UUFDekMsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixrQkFBa0IsRUFBRSxhQUFhO1FBQ2pDLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSxVQUFVO1FBQzNCLGVBQWUsRUFBRSxVQUFVO1FBQzNCLG1CQUFtQixFQUFFLGNBQWM7UUFDbkMsZ0JBQWdCLEVBQUUsV0FBVztRQUM3QixxQkFBcUIsRUFBRSxrQkFBa0I7UUFDekMsbUJBQW1CLEVBQUUsaUJBQWlCO1FBQ3RDLG9CQUFvQixFQUFFLGtCQUFrQjtRQUN4QyxrQkFBa0IsRUFBRSxhQUFhO1FBQ2pDLGFBQWEsRUFBRTtNQUNuQixDQUFDO0lBQ0w7O0lBRUE7O0lBRUE7QUFDSjtBQUNBO0VBRkk7SUFBQXJjLEdBQUE7SUFBQWhCLEtBQUEsRUFHQSxTQUFBMGUsTUFBQSxFQUFRO01BQ0ovVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUNrTSxNQUFNLENBQUM7TUFDbEQsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7QUFDSjtBQUNBO0VBRkk7SUFBQTlWLEdBQUE7SUFBQWhCLEtBQUEsRUFHQSxTQUFBMmUsT0FBQSxFQUFTO01BQ0wsT0FBT3ZRLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ3lJLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9DO0VBQUM7SUFBQTlWLEdBQUE7SUFBQTRkLEdBQUEsRUF2d0JELFNBQUFBLElBQUEsRUFBK0I7TUFDM0IsT0FBTzNJLGlCQUFpQjtJQUM1QjtFQUFDO0VBQUEsT0FBQWhILFdBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm1DO0FBRXhDLDZCQUFlLHNDQUE0QjtFQUFBLElBQWxCNEgsV0FBVyxHQUFBeE4sU0FBQSxDQUFBeEssTUFBQSxRQUFBd0ssU0FBQSxRQUFBL0QsU0FBQSxHQUFBK0QsU0FBQSxNQUFHLENBQUMsQ0FBQztFQUVyQyxPQUFPLENBQ0g7SUFDSXdWLFFBQVEsRUFBRSxPQUFPO0lBQ2pCMUssSUFBSSxFQUFFLFdBQVc7SUFDakJuTixJQUFJLEVBQUUsUUFBUTtJQUNkdVUsUUFBUSxFQUFFLFFBQVE7SUFDbEIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRmtELGFBQWEsQ0FBQyxRQUFRLEVBQUU7TUFDckJwRCxLQUFLLEVBQUUsT0FBTztNQUNkMkQsYUFBYSxFQUFFLG9CQUFvQjtNQUNuQ0UsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUN4YyxDQUFDLEVBQUUrZixPQUFPLEVBQUs7UUFDdEIsSUFBTXBNLEdBQUcsR0FBRyxPQUFPM1QsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxHQUFHLFVBQVUsR0FBR0EsQ0FBQyxHQUFHLENBQUM7UUFDMUQsT0FBTytmLE9BQU8sQ0FDVDFHLFNBQVMsWUFBQXhNLE1BQUEsQ0FBWThHLEdBQUcsY0FBVyxPQUFPLENBQUMsQ0FDM0M2RyxRQUFRLFlBQUEzTixNQUFBLENBQVk4RyxHQUFHLGtCQUFlLHFDQUFxQyxFQUFFO1VBQzFFaUYsUUFBUSxFQUFFNVksQ0FBQyxJQUFJLENBQUM7VUFDaEI0YSxNQUFNLEVBQUU7UUFDWixDQUFDLENBQUMsQ0FDRG5DLE9BQU8sWUFBQTVMLE1BQUEsQ0FBWThHLEdBQUcsY0FBVyxpQkFBaUIsRUFBRTtVQUFFaUYsUUFBUSxFQUFFNVksQ0FBQyxJQUFJLENBQUM7VUFBRThZLElBQUksRUFBRTtRQUFFLENBQUMsQ0FBQyxDQUNsRkwsT0FBTyxZQUFBNUwsTUFBQSxDQUFZOEcsR0FBRyxpQkFBYyxzQkFBc0IsRUFBRTtVQUFFbUYsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3hFWCxHQUFHLENBQUMsQ0FBQyxDQUNMTSxPQUFPLFlBQUE1TCxNQUFBLENBQVk4RyxHQUFHLG9CQUFpQixtQkFBbUIsQ0FBQyxDQUMzRDhFLE9BQU8sWUFBQTVMLE1BQUEsQ0FBWThHLEdBQUcsbUJBQWdCLDhCQUE4QixDQUFDLENBQ3JFeUUsTUFBTSxDQUFDLENBQUM7TUFDakI7SUFDSixDQUFDLENBQUMsQ0FDRHFFLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxPQUFPO0lBQ2pCMUssSUFBSSxFQUFFLFdBQVc7SUFDakJuTixJQUFJLEVBQUUsVUFBVTtJQUNoQnVVLFFBQVEsRUFBRSxVQUFVO0lBQ3BCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZrRCxhQUFhLENBQUMsUUFBUSxFQUFFO01BQ3JCcEQsS0FBSyxFQUFFLE9BQU87TUFDZDJELGFBQWEsRUFBRSxxQkFBcUI7TUFDcENFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1R2RixRQUFRLFlBQUEzTixNQUFBLENBQVk4RyxHQUFHLGtCQUFlLG9CQUFvQixFQUFFO1VBQ3pEaUYsUUFBUSxFQUFFNVksQ0FBQyxJQUFJLENBQUM7VUFDaEI4YSxlQUFlLEVBQUU7UUFDckIsQ0FBQyxDQUFDO01BQ1Y7SUFDSixDQUFDLENBQUMsQ0FDRDJCLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxTQUFTO0lBQ25CMUssSUFBSSxFQUFFLFlBQVk7SUFDbEJuTixJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCdVUsUUFBUSxFQUFFLE9BQU87SUFDakIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QkssR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRmMsU0FBUyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUU7TUFBRXNHLEtBQUssRUFBRSxRQUFRO01BQUVDLE1BQU0sRUFBRSxRQUFRO01BQUVDLEdBQUcsRUFBRTtJQUFTLENBQUMsRUFBRTtNQUFFdEgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzlHUixNQUFNLENBQUMsQ0FBQyxDQUNSRCxHQUFHLENBQUMsQ0FBQyxDQUNMdUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7TUFBRXlHLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRTtJQUFLLENBQUMsRUFBRTtNQUFFNUgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzdHYyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRTtNQUFFeUcsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFO0lBQUssQ0FBQyxFQUFFO01BQUU1SCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDdkhSLE1BQU0sQ0FBQyxDQUFDLENBQ1JLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUN0Q1gsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO01BQUUrRyxPQUFPLEVBQUUsUUFBUTtNQUFFaFQsSUFBSSxFQUFFO0lBQU8sQ0FBQyxFQUFFO01BQUVtTCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDdEZjLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDbkZSLE1BQU0sQ0FBQyxDQUFDLENBQ1JxRSxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsY0FBYztJQUN4QjFLLElBQUksRUFBRSxVQUFVO0lBQ2hCbk4sSUFBSSxFQUFFLFNBQVM7SUFDZnVVLFFBQVEsRUFBRSxTQUFTO0lBQ25CMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JLLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZjLFNBQVMsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7TUFBRSxTQUFPLFFBQVE7TUFBRSxRQUFNLE9BQU87TUFBRWdILE1BQU0sRUFBRTtJQUFTLENBQUMsRUFBRTtNQUFFOUgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ25IUixNQUFNLENBQUMsQ0FBQyxDQUNSb0MsUUFBUSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUU7TUFBRU0sZUFBZSxFQUFFO0lBQXVCLENBQUMsQ0FBQyxDQUMzRTNDLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRTtNQUFFc0csS0FBSyxFQUFFLFFBQVE7TUFBRUMsTUFBTSxFQUFFLFFBQVE7TUFBRUMsR0FBRyxFQUFFO0lBQVMsQ0FBQyxFQUFFO01BQUV0SCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDOUdILE9BQU8sQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FDdENMLE1BQU0sQ0FBQyxDQUFDLENBQ1JELEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtNQUFFeUcsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFO0lBQUssQ0FBQyxFQUFFO01BQUU1SCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDN0djLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFO01BQUV5RyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUU7SUFBSyxDQUFDLEVBQUU7TUFBRTVILFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUN2SFIsTUFBTSxDQUFDLENBQUMsQ0FDUkssT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7TUFBRUssSUFBSSxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQ3RDdUIsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FDekNsQyxHQUFHLENBQUMsQ0FBQyxDQUNMTSxPQUFPLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQzNDQSxPQUFPLENBQUMsWUFBWSxFQUFFLDhCQUE4QixDQUFDLENBQ3JETCxNQUFNLENBQUMsQ0FBQyxDQUNSc0IsU0FBUyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtNQUFFaUgsTUFBTSxFQUFFLGtCQUFrQjtNQUFFQyxLQUFLLEVBQUU7SUFBbUIsQ0FBQyxFQUFFO01BQUVoSSxRQUFRLEVBQUUsSUFBSTtNQUFFRSxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDaEkyRCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsU0FBUztJQUNuQjFLLElBQUksRUFBRSxlQUFlO0lBQ3JCbk4sSUFBSSxFQUFFLE9BQU87SUFDYnVVLFFBQVEsRUFBRSxNQUFNO0lBQ2hCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0Z5QixXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRTtNQUFFekIsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ2xENkQsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFNBQVM7SUFDbkIxSyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCbk4sSUFBSSxFQUFFLGlCQUFpQjtJQUN2QnVVLFFBQVEsRUFBRSxXQUFXO0lBQ3JCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0Z5QixXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRTtNQUFFekIsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ2xENkQsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFNBQVM7SUFDbkIxSyxJQUFJLEVBQUUsVUFBVTtJQUNoQm5OLElBQUksRUFBRSxPQUFPO0lBQ2J1VSxRQUFRLEVBQUUsT0FBTztJQUNqQjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCNEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtNQUFFLFNBQU8sS0FBSztNQUFFLFFBQU07SUFBTSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzNGNEIsUUFBUSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUU7TUFBRTVCLFFBQVEsRUFBRSxJQUFJO01BQUVrQyxlQUFlLEVBQUU7SUFBdUIsQ0FBQyxDQUFDLENBQzVGMkIsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFNBQVM7SUFDbkIxSyxJQUFJLEVBQUUsU0FBUztJQUNmbk4sSUFBSSxFQUFFLFFBQVE7SUFDZHVVLFFBQVEsRUFBRSxRQUFRO0lBQ2xCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JLLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZjLFNBQVMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFO01BQUVzRyxLQUFLLEVBQUUsUUFBUTtNQUFFQyxNQUFNLEVBQUUsUUFBUTtNQUFFQyxHQUFHLEVBQUU7SUFBUyxDQUFDLEVBQUU7TUFBRXRILFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUM5R1IsTUFBTSxDQUFDLENBQUMsQ0FDUkQsR0FBRyxDQUFDLENBQUMsQ0FDTE0sT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7TUFBRUcsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzdDcUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7TUFBRXJDLFFBQVEsRUFBRSxJQUFJO01BQUV5QyxXQUFXLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDNURqRCxNQUFNLENBQUMsQ0FBQyxDQUNSc0IsU0FBUyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtNQUFFaUgsTUFBTSxFQUFFLGtCQUFrQjtNQUFFQyxLQUFLLEVBQUU7SUFBbUIsQ0FBQyxFQUFFO01BQUVoSSxRQUFRLEVBQUUsSUFBSTtNQUFFRSxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDaEkyRCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsY0FBYztJQUN4QjFLLElBQUksRUFBRSxVQUFVO0lBQ2hCbk4sSUFBSSxFQUFFLFlBQVk7SUFDbEJ1VSxRQUFRLEVBQUUsSUFBSTtJQUNkMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JLLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZjLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO01BQUVtSCxPQUFPLEVBQUUsWUFBWTtNQUFFQyxTQUFTLEVBQUU7SUFBYSxDQUFDLEVBQUU7TUFBRWxJLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUNuR1IsTUFBTSxDQUFDLENBQUMsQ0FDUnNCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFO01BQUUsQ0FBQyxFQUFFLFFBQVE7TUFBRSxDQUFDLEVBQUUsT0FBTztNQUFFLENBQUMsRUFBRTtJQUFRLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDOUY2RCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsU0FBUztJQUNuQjFLLElBQUksRUFBRSxjQUFjO0lBQ3BCbk4sSUFBSSxFQUFFLHNCQUFzQjtJQUM1QnVVLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QkssR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUU7TUFBRXNHLEtBQUssRUFBRSxRQUFRO01BQUVDLE1BQU0sRUFBRSxRQUFRO01BQUVDLEdBQUcsRUFBRTtJQUFTLENBQUMsRUFBRTtNQUFFdEgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ3ZIYyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtNQUFFeUcsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFO0lBQUssQ0FBQyxFQUFFO01BQUU1SCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDN0dSLE1BQU0sQ0FBQyxDQUFDLENBQ1JLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO01BQUVHLFFBQVEsRUFBRSxJQUFJO01BQUVFLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUN0RHVCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFO01BQUV6QixRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDdEQ2RCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsY0FBYztJQUN4QjFLLElBQUksRUFBRSxZQUFZO0lBQ2xCbk4sSUFBSSxFQUFFLHdCQUF3QjtJQUM5QnVVLFFBQVEsRUFBRSxZQUFZO0lBQ3RCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JLLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZjLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO01BQUUsRUFBRSxFQUFFLFdBQVc7TUFBRSxFQUFFLEVBQUUsV0FBVztNQUFFLEVBQUUsRUFBRTtJQUFZLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDcEdSLE1BQU0sQ0FBQyxDQUFDLENBQ1JDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDekN0SCxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUNqQzRCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7SUFBQSxDQUM5QyxDQUFDLENBQ0FoQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsVUFBQTBILE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQ3pDdEgsT0FBTyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDaEM0QixXQUFXLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztJQUFBLENBQzdDLENBQUMsQ0FDQW9DLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxjQUFjO0lBQ3hCMUssSUFBSSxFQUFFLFdBQVc7SUFDakJuTixJQUFJLEVBQUUsc0JBQXNCO0lBQzVCdVUsUUFBUSxFQUFFLHVCQUF1QjtJQUNqQzFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCSyxHQUFHLENBQUMsQ0FBQyxDQUNMdUIsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtNQUFFLFNBQU8sS0FBSztNQUFFLFFBQU07SUFBTSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzNGYyxTQUFTLENBQUMsV0FBVyxFQUFFLHVCQUF1QixFQUFFO01BQUVzRyxLQUFLLEVBQUUsUUFBUTtNQUFFQyxNQUFNLEVBQUUsUUFBUTtNQUFFQyxHQUFHLEVBQUU7SUFBUyxDQUFDLEVBQUU7TUFBRXRILFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUN6SFIsTUFBTSxDQUFDLENBQUMsQ0FDUjBELGFBQWEsQ0FBQyxTQUFTLEVBQUU7TUFDdEJwRCxLQUFLLEVBQUUsU0FBUztNQUNoQjJELGFBQWEsRUFBRSx1QkFBdUI7TUFDdENFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1R2RixRQUFRLGFBQUEzTixNQUFBLENBQWE4RyxHQUFHLDJCQUFBOUcsTUFBQSxDQUF3QjdNLENBQUMscUJBQWU7VUFDN0Q0WSxRQUFRLEVBQUU1WSxDQUFDLElBQUksQ0FBQztVQUNoQjhhLGVBQWUsRUFBRTtRQUNyQixDQUFDLENBQUMsQ0FDRHJDLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsY0FBVyxPQUFPLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTVZLENBQUMsSUFBSSxDQUFDO1VBQUU4WSxJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDekVMLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsZ0JBQWEsZUFBZSxFQUFFO1VBQUVtRixJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDakVMLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsbUJBQWdCLHFCQUFxQixFQUFFO1VBQUVtRixJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUM7TUFDbkY7SUFDSixDQUFDLENBQUMsQ0FDRDJELE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxjQUFjO0lBQ3hCMUssSUFBSSxFQUFFLFVBQVU7SUFDaEJuTixJQUFJLEVBQUUsc0JBQXNCO0lBQzVCdVUsUUFBUSxFQUFFLHVCQUF1QjtJQUNqQzFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCNEIsU0FBUyxDQUFDLFdBQVcsRUFBRSx1QkFBdUIsRUFBRTtNQUFFc0csS0FBSyxFQUFFLFFBQVE7TUFBRUMsTUFBTSxFQUFFLFFBQVE7TUFBRUMsR0FBRyxFQUFFO0lBQVMsQ0FBQyxFQUFFO01BQUV0SCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDekhrRCxhQUFhLENBQUMsU0FBUyxFQUFFO01BQ3RCcEQsS0FBSyxFQUFFLFNBQVM7TUFDaEIyRCxhQUFhLEVBQUUsdUJBQXVCO01BQ3RDRSxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3hjLENBQUMsRUFBRStmLE9BQU8sRUFBSztRQUN0QixJQUFNcE0sR0FBRyxHQUFHLE9BQU8zVCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMxRCxPQUFPK2YsT0FBTyxDQUNUekUsYUFBYSxhQUFBek8sTUFBQSxDQUFhOEcsR0FBRywwQkFBQTlHLE1BQUEsQ0FBdUI3TSxDQUFDLHFCQUFlO1VBQUU0WSxRQUFRLEVBQUU1WSxDQUFDLEtBQUs7UUFBRSxDQUFDLENBQUMsQ0FDMUZ5WSxPQUFPLGFBQUE1TCxNQUFBLENBQWE4RyxHQUFHLHVCQUFBOUcsTUFBQSxDQUFvQjdNLENBQUMscUJBQWU7VUFBRTRZLFFBQVEsRUFBRTVZLENBQUMsS0FBSyxDQUFDO1VBQUU4WSxJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDMUZ1QixXQUFXLGFBQUF4TixNQUFBLENBQWE4RyxHQUFHLDJCQUFBOUcsTUFBQSxDQUF3QjdNLENBQUMscUJBQWU7VUFBRTRZLFFBQVEsRUFBRTVZLENBQUMsS0FBSztRQUFFLENBQUMsQ0FBQyxDQUN6RnlZLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsMkJBQUE5RyxNQUFBLENBQXdCN00sQ0FBQyxxQkFBZTtVQUFFNFksUUFBUSxFQUFFNVksQ0FBQyxLQUFLLENBQUM7VUFBRThZLElBQUksRUFBRTtRQUFFLENBQUMsQ0FBQztNQUN2RztJQUNKLENBQUMsQ0FBQyxDQUNEMkQsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLE9BQU87SUFDakIxSyxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCbk4sSUFBSSxFQUFFLDhCQUE4QjtJQUNwQ3VVLFFBQVEsRUFBRSwyQkFBMkI7SUFDckMxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFO01BQUVxSCxXQUFXLEVBQUUsaUNBQWlDO01BQUVDLFdBQVcsRUFBRTtJQUFrQyxDQUFDLEVBQUU7TUFBRXBJLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMxSlAsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDaEN2RixRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRTtRQUFFNUIsUUFBUSxFQUFFLElBQUk7UUFBRWtDLGVBQWUsRUFBRTtNQUF1QixDQUFDLENBQUMsQ0FDM0ZyQyxPQUFPLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFO1FBQUVHLFFBQVEsRUFBRSxJQUFJO1FBQUVFLElBQUksRUFBRTtNQUFFLENBQUMsQ0FBQyxDQUN4RXVCLFdBQVcsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLEVBQUU7UUFBRXpCLFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQztJQUFBLENBQzFFLENBQUMsQ0FDQVAsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDaEM5RSxNQUFNLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFO1FBQUVyQyxRQUFRLEVBQUUsSUFBSTtRQUFFeUMsV0FBVyxFQUFFLElBQUk7UUFBRXZDLElBQUksRUFBRTtNQUFFLENBQUMsQ0FBQyxDQUN0RkwsT0FBTyxDQUFDLFlBQVksRUFBRSxxQkFBcUIsRUFBRTtRQUFFRyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxJQUFJLEVBQUU7TUFBRSxDQUFDLENBQUMsQ0FDekV1QixXQUFXLENBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFFO1FBQUV6QixRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUM7SUFBQSxDQUMzRSxDQUFDLENBQ0E2RCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsY0FBYztJQUN4QjFLLElBQUksRUFBRSxZQUFZO0lBQ2xCbk4sSUFBSSxFQUFFLDhCQUE4QjtJQUNwQ3VVLFFBQVEsRUFBRSwyQkFBMkI7SUFDckMxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QkssR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO01BQUUsRUFBRSxFQUFFLFdBQVc7TUFBRSxFQUFFLEVBQUUsV0FBVztNQUFFLEVBQUUsRUFBRTtJQUFZLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDcEdjLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFO01BQUV1SCxVQUFVLEVBQUUsaUNBQWlDO01BQUVDLFVBQVUsRUFBRTtJQUFrQyxDQUFDLEVBQUU7TUFBRXRJLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUN4SlIsTUFBTSxDQUFDLENBQUMsQ0FDUkMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDaEN2RixRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRTtRQUFFNUIsUUFBUSxFQUFFLElBQUk7UUFBRWtDLGVBQWUsRUFBRTtNQUF1QixDQUFDLENBQUM7SUFBQSxDQUNoRyxDQUFDLENBQ0F6QyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQUEwSCxPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUNoQ3RILE9BQU8sQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUU7UUFBRUssSUFBSSxFQUFFO01BQUUsQ0FBQyxDQUFDLENBQ25EWCxHQUFHLENBQUMsQ0FBQyxDQUNMdUIsU0FBUyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUU7UUFBRXlHLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRTtNQUFLLENBQUMsRUFBRTtRQUFFNUgsUUFBUSxFQUFFO01BQUssQ0FBQyxDQUFDLENBQ3ZIYyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRTtRQUFFeUcsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFO01BQUssQ0FBQyxFQUFFO1FBQUU1SCxRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUMsQ0FDdkhSLE1BQU0sQ0FBQyxDQUFDLENBQ1JELEdBQUcsQ0FBQyxDQUFDLENBQ0xNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQ3pCQSxPQUFPLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUNqQ0wsTUFBTSxDQUFDLENBQUMsQ0FDUnNCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRTtRQUFFK0csT0FBTyxFQUFFLFFBQVE7UUFBRVUsU0FBUyxFQUFFO01BQWEsQ0FBQyxFQUFFO1FBQUV2SSxRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUMsQ0FDckh5QixXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtRQUFFekIsUUFBUSxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQUEsQ0FDMUQsQ0FBQyxDQUNBNkQsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLE9BQU87SUFDakIxSyxJQUFJLEVBQUUsVUFBVTtJQUNoQm5OLElBQUksRUFBRSw4QkFBOEI7SUFDcEN1VSxRQUFRLEVBQUUsMkJBQTJCO0lBQ3JDMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JLLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtNQUFFLEVBQUUsRUFBRSxXQUFXO01BQUUsRUFBRSxFQUFFLFdBQVc7TUFBRSxFQUFFLEVBQUU7SUFBWSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ3BHYyxTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRTtNQUFFdUgsVUFBVSxFQUFFLGlDQUFpQztNQUFFQyxVQUFVLEVBQUU7SUFBa0MsQ0FBQyxFQUFFO01BQUV0SSxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDeEpSLE1BQU0sQ0FBQyxDQUFDLENBQ1JDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBQTBILE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQ2hDOUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRTtRQUFFckMsUUFBUSxFQUFFLElBQUk7UUFBRXlDLFdBQVcsRUFBRSxJQUFJO1FBQUV2QyxJQUFJLEVBQUU7TUFBRSxDQUFDLENBQUM7SUFBQSxDQUMzRixDQUFDLENBQ0FULFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBQTBILE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQ2hDdEgsT0FBTyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRTtRQUFFSyxJQUFJLEVBQUU7TUFBRSxDQUFDLENBQUMsQ0FDbkRYLEdBQUcsQ0FBQyxDQUFDLENBQ0x1QixTQUFTLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRTtRQUFFeUcsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRUMsRUFBRSxFQUFFO01BQUssQ0FBQyxFQUFFO1FBQUU1SCxRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUMsQ0FDdkhjLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFO1FBQUV5RyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUU7TUFBSyxDQUFDLEVBQUU7UUFBRTVILFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQyxDQUN2SFIsTUFBTSxDQUFDLENBQUMsQ0FDUkQsR0FBRyxDQUFDLENBQUMsQ0FDTE0sT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FDekJBLE9BQU8sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQ2pDTCxNQUFNLENBQUMsQ0FBQyxDQUNSc0IsU0FBUyxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFO1FBQUUrRyxPQUFPLEVBQUUsUUFBUTtRQUFFVSxTQUFTLEVBQUU7TUFBYSxDQUFDLEVBQUU7UUFBRXZJLFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQyxDQUNySHlCLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO1FBQUV6QixRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUM7SUFBQSxDQUMxRCxDQUFDLENBQ0E2RCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsUUFBUTtJQUNsQjFLLElBQUksRUFBRSxjQUFjO0lBQ3BCbk4sSUFBSSxFQUFFLHNDQUFzQztJQUM1Q3VVLFFBQVEsRUFBRSw2QkFBNkI7SUFDdkMxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRlQsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO01BQUUsRUFBRSxFQUFFLFdBQVc7TUFBRSxFQUFFLEVBQUUsV0FBVztNQUFFLEVBQUUsRUFBRTtJQUFZLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDcEdjLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFO01BQUV1SCxVQUFVLEVBQUUsdUNBQXVDO01BQUVDLFVBQVUsRUFBRTtJQUErQixDQUFDLEVBQUU7TUFBRXRJLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzSlIsTUFBTSxDQUFDLENBQUMsQ0FDUkMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDaEN0SCxPQUFPLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFO1FBQUVLLElBQUksRUFBRTtNQUFFLENBQUMsQ0FBQyxDQUNuRFgsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFO1FBQUV5RyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUUsSUFBSTtRQUFFQyxFQUFFLEVBQUU7TUFBSyxDQUFDLEVBQUU7UUFBRTVILFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQyxDQUN2SGMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7UUFBRXlHLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRSxJQUFJO1FBQUVDLEVBQUUsRUFBRTtNQUFLLENBQUMsRUFBRTtRQUFFNUgsUUFBUSxFQUFFO01BQUssQ0FBQyxDQUFDLENBQ3ZIUixNQUFNLENBQUMsQ0FBQyxDQUNSRCxHQUFHLENBQUMsQ0FBQyxDQUNMTSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtRQUFFRyxRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUMsQ0FDN0NILE9BQU8sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQ2pDTCxNQUFNLENBQUMsQ0FBQyxDQUNSc0IsU0FBUyxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFO1FBQUUrRyxPQUFPLEVBQUUsUUFBUTtRQUFFVSxTQUFTLEVBQUU7TUFBYSxDQUFDLEVBQUU7UUFBRXZJLFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQyxDQUNySHlCLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO1FBQUV6QixRQUFRLEVBQUU7TUFBSyxDQUFDLENBQUM7SUFBQSxDQUMxRCxDQUFDLENBQ0FQLFFBQVEsQ0FBQyxlQUFlLEVBQUUsVUFBQTBILE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQ3hDMUYsV0FBVyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUU7UUFBRXpCLFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQztJQUFBLENBQzNELENBQUMsQ0FDQTZELE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxRQUFRO0lBQ2xCMUssSUFBSSxFQUFFLFdBQVc7SUFDakJuTixJQUFJLEVBQUUsY0FBYztJQUNwQnVVLFFBQVEsRUFBRSxtQkFBbUI7SUFDN0IxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRmtELGFBQWEsQ0FBQyxTQUFTLEVBQUU7TUFDdEJwRCxLQUFLLEVBQUUsUUFBUTtNQUNmMkQsYUFBYSxFQUFFLHFCQUFxQjtNQUNwQ0UsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUN4YyxDQUFDLEVBQUUrZixPQUFPLEVBQUs7UUFDdEIsSUFBTXBNLEdBQUcsR0FBRyxPQUFPM1QsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxHQUFHLFVBQVUsR0FBR0EsQ0FBQyxHQUFHLENBQUM7UUFDMUQsT0FBTytmLE9BQU8sQ0FDVHRILE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsZ0JBQWEscUJBQXFCLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTVZLENBQUMsSUFBSSxDQUFDO1VBQUU4WSxJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDekZ1QixXQUFXLGFBQUF4TixNQUFBLENBQWE4RyxHQUFHLGdCQUFhLFNBQVMsQ0FBQztNQUMzRDtJQUNKLENBQUMsQ0FBQyxDQUNEOEksTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFFBQVE7SUFDbEIxSyxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCbk4sSUFBSSxFQUFFLGtCQUFrQjtJQUN4QnVVLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QmdFLGFBQWEsQ0FBQyxTQUFTLEVBQUU7TUFDdEJwRCxLQUFLLEVBQUUsUUFBUTtNQUNmMkQsYUFBYSxFQUFFLHFCQUFxQjtNQUNwQ0UsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUN4YyxDQUFDLEVBQUUrZixPQUFPLEVBQUs7UUFDdEIsSUFBTXBNLEdBQUcsR0FBRyxPQUFPM1QsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxHQUFHLFVBQVUsR0FBR0EsQ0FBQyxHQUFHLENBQUM7UUFDMUQsT0FBTytmLE9BQU8sQ0FDVHRILE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsZ0JBQWEscUJBQXFCLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTVZLENBQUMsSUFBSSxDQUFDO1VBQUU4WSxJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDekZYLEdBQUcsQ0FBQyxDQUFDLENBQ0xNLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsY0FBVyxnQkFBZ0IsQ0FBQyxDQUNuRDhFLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsaUJBQWMscUJBQXFCLENBQUMsQ0FDM0R5RSxNQUFNLENBQUMsQ0FBQyxDQUNSMEQsYUFBYSxhQUFBalAsTUFBQSxDQUFhOEcsR0FBRyxhQUFVO1VBQ3BDK0UsS0FBSyxFQUFFLEtBQUs7VUFDWmpGLEdBQUcsRUFBRSxDQUFDO1VBQ05GLEdBQUcsRUFBRSxDQUFDO1VBQ040SSxPQUFPLEVBQUUsQ0FBQztVQUNWRSxhQUFhLEVBQUUsbUJBQW1CO1VBQ2xDRSxnQkFBZ0IsRUFBRSxXQUFXO1VBQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQzRFLENBQUMsRUFBRUMsVUFBVSxFQUFLO1lBQ3pCLElBQU1DLEdBQUcsR0FBRyxPQUFPRixDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztZQUMxRCxPQUFPQyxVQUFVLENBQ1poSSxTQUFTLGFBQUF4TSxNQUFBLENBQWE4RyxHQUFHLGNBQUE5RyxNQUFBLENBQVd5VSxHQUFHLGNBQVcsT0FBTyxDQUFDLENBQzFEN0ksT0FBTyxhQUFBNUwsTUFBQSxDQUFhOEcsR0FBRyxjQUFBOUcsTUFBQSxDQUFXeVUsR0FBRyxpQkFBYyxzQkFBc0IsRUFBRTtjQUFFMUksUUFBUSxFQUFFd0ksQ0FBQyxJQUFJLENBQUMsSUFBSXBoQixDQUFDLElBQUksQ0FBQztjQUFFOFksSUFBSSxFQUFFO1lBQUUsQ0FBQyxDQUFDLENBQ25ITCxPQUFPLGFBQUE1TCxNQUFBLENBQWE4RyxHQUFHLGNBQUE5RyxNQUFBLENBQVd5VSxHQUFHLGVBQVksU0FBUyxFQUFFO2NBQUUxSSxRQUFRLEVBQUV3SSxDQUFDLElBQUksQ0FBQyxJQUFJcGhCLENBQUMsSUFBSSxDQUFDO2NBQUU4WSxJQUFJLEVBQUU7WUFBRSxDQUFDLENBQUM7VUFDN0c7UUFDSixDQUFDLENBQUM7TUFDVjtJQUNKLENBQUMsQ0FBQyxDQUNEMkQsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFFBQVE7SUFDbEIxSyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCbk4sSUFBSSxFQUFFLG1DQUFtQztJQUN6Q3VVLFFBQVEsRUFBRSxpQ0FBaUM7SUFDM0MxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QmdFLGFBQWEsQ0FBQyxXQUFXLEVBQUU7TUFDeEJwRCxLQUFLLEVBQUUsVUFBVTtNQUNqQjJELGFBQWEsRUFBRSx1QkFBdUI7TUFDdENFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1R2RixRQUFRLGVBQUEzTixNQUFBLENBQWU4RyxHQUFHLGtCQUFlLFVBQVUsRUFBRTtVQUFFaUYsUUFBUSxFQUFFNVksQ0FBQyxLQUFLLENBQUM7VUFBRThhLGVBQWUsRUFBRTtRQUF1QyxDQUFDLENBQUMsQ0FDcElyQyxPQUFPLGVBQUE1TCxNQUFBLENBQWU4RyxHQUFHLGNBQVcsT0FBTyxFQUFFO1VBQUVpRixRQUFRLEVBQUU1WSxDQUFDLEtBQUssQ0FBQztVQUFFOFksSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDO01BQ3JGO0lBQ0osQ0FBQyxDQUFDLENBQ0QyRCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsUUFBUTtJQUNsQjFLLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJuTixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCdVUsUUFBUSxFQUFFLFFBQVE7SUFDbEIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QmdFLGFBQWEsQ0FBQyxTQUFTLEVBQUU7TUFDdEJwRCxLQUFLLEVBQUUsUUFBUTtNQUNmMkQsYUFBYSxFQUFFLHFCQUFxQjtNQUNwQ0UsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUN4YyxDQUFDLEVBQUUrZixPQUFPLEVBQUs7UUFDdEIsSUFBTXBNLEdBQUcsR0FBRyxPQUFPM1QsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxHQUFHLFVBQVUsR0FBR0EsQ0FBQyxHQUFHLENBQUM7UUFDMUQsT0FBTytmLE9BQU8sQ0FDVHRILE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsMEJBQUE5RyxNQUFBLENBQXVCN00sQ0FBQyxvQkFBYztVQUFFOFksSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3pFWSxTQUFTLGFBQUE3TSxNQUFBLENBQWE4RyxHQUFHLDBCQUFBOUcsTUFBQSxDQUF1QjdNLENBQUMsaUJBQWM4WCxXQUFXLENBQUN5SixPQUFPLEVBQUU7VUFBRXpJLElBQUksRUFBRTtRQUFFLENBQUMsQ0FBQztNQUN6RztJQUNKLENBQUMsQ0FBQyxDQUNEMkQsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFFBQVE7SUFDbEIxSyxJQUFJLEVBQUUsVUFBVTtJQUNoQm5OLElBQUksRUFBRSxTQUFTO0lBQ2Z1VSxRQUFRLEVBQUUsT0FBTztJQUNqQjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCOEQsT0FBTyxDQUFDLG9GQUFvRixDQUFDLENBQzdGekQsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO01BQUU4SCxVQUFVLEVBQUUsZ0JBQWdCO01BQUVDLGVBQWUsRUFBRTtJQUE4QixDQUFDLENBQUMsQ0FDakgvSCxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtNQUFFZ0ksT0FBTyxFQUFFLGtCQUFrQjtNQUFFQyxLQUFLLEVBQUU7SUFBaUIsQ0FBQyxDQUFDLENBQ25GdkosTUFBTSxDQUFDLENBQUMsQ0FDUnFELFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ2ZnQixNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsUUFBUTtJQUNsQjFLLElBQUksRUFBRSxVQUFVO0lBQ2hCbk4sSUFBSSxFQUFFLGdDQUFnQztJQUN0Q3VVLFFBQVEsRUFBRSw2QkFBNkI7SUFDdkMxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRlQsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFO01BQUUsRUFBRSxFQUFFLFdBQVc7TUFBRSxFQUFFLEVBQUUsV0FBVztNQUFFLEVBQUUsRUFBRTtJQUFZLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDdkdjLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFO01BQUVrSSxhQUFhLEVBQUUsbUNBQW1DO01BQUVDLGFBQWEsRUFBRTtJQUFvQyxDQUFDLEVBQUU7TUFBRWpKLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUNsS1IsTUFBTSxDQUFDLENBQUMsQ0FDUkMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDaEN2RixRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRTtRQUFFNUIsUUFBUSxFQUFFLElBQUk7UUFBRWtDLGVBQWUsRUFBRTtNQUF1QixDQUFDLENBQUMsQ0FDM0ZyQyxPQUFPLENBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFFO1FBQUVLLElBQUksRUFBRTtNQUFFLENBQUMsQ0FBQztJQUFBLENBQzFELENBQUMsQ0FDQVQsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDbENuRSxPQUFPLENBQUMsb0ZBQW9GLENBQUMsQ0FDN0Z6RCxHQUFHLENBQUMsQ0FBQyxDQUNMdUIsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7UUFBRThILFVBQVUsRUFBRSxnQkFBZ0I7UUFBRUMsZUFBZSxFQUFFO01BQThCLENBQUMsQ0FBQyxDQUNqSC9ILFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBQUVnSSxPQUFPLEVBQUUsa0JBQWtCO1FBQUVDLEtBQUssRUFBRTtNQUFpQixDQUFDLENBQUMsQ0FDbkZ2SixNQUFNLENBQUMsQ0FBQyxDQUNScUQsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFBQSxDQUNuQixDQUFDLENBQ0FnQixNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsUUFBUTtJQUNsQjFLLElBQUksRUFBRSxpQkFBaUI7SUFDdkJuTixJQUFJLEVBQUUsV0FBVztJQUNqQnVVLFFBQVEsRUFBRSxXQUFXO0lBQ3JCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JnRSxhQUFhLENBQUMsT0FBTyxFQUFFO01BQ3BCcEQsS0FBSyxFQUFFLFdBQVc7TUFDbEIyRCxhQUFhLEVBQUUsbUJBQW1CO01BQ2xDRSxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3hjLENBQUMsRUFBRStmLE9BQU8sRUFBSztRQUN0QixJQUFNcE0sR0FBRyxHQUFHLE9BQU8zVCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMxRCxPQUFPK2YsT0FBTyxDQUNUdEgsT0FBTyxXQUFBNUwsTUFBQSxDQUFXOEcsR0FBRyxjQUFXLE9BQU8sRUFBRTtVQUFFbUYsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3JEMEIsUUFBUSxXQUFBM04sTUFBQSxDQUFXOEcsR0FBRyxrQkFBZSxPQUFPLEVBQUU7VUFBRW1ILGVBQWUsRUFBRTtRQUF1QixDQUFDLENBQUMsQ0FDMUZULFdBQVcsV0FBQXhOLE1BQUEsQ0FBVzhHLEdBQUcsa0JBQWUsWUFBWSxDQUFDO01BQzlEO0lBQ0osQ0FBQyxDQUFDLENBQ0Q4SSxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsV0FBVztJQUNyQjFLLElBQUksRUFBRSxRQUFRO0lBQ2RuTixJQUFJLEVBQUUseUJBQXlCO0lBQy9CdVUsUUFBUSxFQUFFLFdBQVc7SUFDckIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QkssR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFO01BQUUsQ0FBQyxFQUFFLFlBQVk7TUFBRSxDQUFDLEVBQUU7SUFBWSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzFGUyxTQUFTLENBQUMsT0FBTyxFQUFFLDZCQUE2QixDQUFDLENBQ2pEakIsTUFBTSxDQUFDLENBQUMsQ0FDUnFFLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxXQUFXO0lBQ3JCMUssSUFBSSxFQUFFLGNBQWM7SUFDcEJuTixJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCdVUsUUFBUSxFQUFFLFlBQVk7SUFDdEIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QkssR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxZQUFZLEVBQUUseUNBQXlDLEVBQUU1QixXQUFXLENBQUNnSyxVQUFVLENBQUMsQ0FDMUZ6SSxTQUFTLENBQUMsT0FBTyxFQUFFLDZCQUE2QixDQUFDLENBQ2pEakIsTUFBTSxDQUFDLENBQUMsQ0FDUkssT0FBTyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUU7TUFBRUssSUFBSSxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQzdDWCxHQUFHLENBQUMsQ0FBQyxDQUNMdUIsU0FBUyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUU7TUFBRXlHLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRTtJQUFLLENBQUMsRUFBRTtNQUFFNUgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ3ZIYyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRTtNQUFFeUcsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFLElBQUk7TUFBRUMsRUFBRSxFQUFFO0lBQUssQ0FBQyxFQUFFO01BQUU1SCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDdkhSLE1BQU0sQ0FBQyxDQUFDLENBQ1JLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUM5Q3VCLFdBQVcsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FDakQ1QixPQUFPLENBQUMsYUFBYSxFQUFFLGdDQUFnQyxFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUNyRTJELE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxPQUFPO0lBQ2pCMUssSUFBSSxFQUFFLFlBQVk7SUFDbEJuTixJQUFJLEVBQUUsZUFBZTtJQUNyQnVVLFFBQVEsRUFBRSxTQUFTO0lBQ25CMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0JtRCxNQUFNLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFO01BQUVyQyxRQUFRLEVBQUUsSUFBSTtNQUFFeUMsV0FBVyxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzdFb0IsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFFBQVE7SUFDbEIxSyxJQUFJLEVBQUUsZUFBZTtJQUNyQm5OLElBQUksRUFBRSxxQkFBcUI7SUFDM0J1VSxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0IwQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRTtNQUFFTSxlQUFlLEVBQUU7SUFBdUIsQ0FBQyxDQUFDLENBQzNFM0MsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFO01BQUV5RyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUU7SUFBSyxDQUFDLEVBQUU7TUFBRTVILFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUN2SGMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7TUFBRXlHLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRTtJQUFLLENBQUMsRUFBRTtNQUFFNUgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ3ZIUixNQUFNLENBQUMsQ0FBQyxDQUNSSyxPQUFPLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRTtNQUFFSyxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDOUNnRCxhQUFhLENBQUMsTUFBTSxFQUFFO01BQ25CcEQsS0FBSyxFQUFFLGFBQWE7TUFDcEIyRCxhQUFhLEVBQUUsMEJBQTBCO01BQ3pDRSxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3hjLENBQUMsRUFBRStmLE9BQU8sRUFBSztRQUN0QixJQUFNcE0sR0FBRyxHQUFHLE9BQU8zVCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMxRCxPQUFPK2YsT0FBTyxDQUNUdEgsT0FBTyxVQUFBNUwsTUFBQSxDQUFVOEcsR0FBRyw4QkFBQTlHLE1BQUEsQ0FBd0I3TSxDQUFDLEdBQUcsQ0FBQyxHQUFJO1VBQUU0WSxRQUFRLEVBQUU1WSxDQUFDLEdBQUcsQ0FBQztVQUFFOFksSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ2xGTCxPQUFPLFVBQUE1TCxNQUFBLENBQVU4RyxHQUFHLGFBQVUsWUFBWSxFQUFFO1VBQUVpRixRQUFRLEVBQUU1WSxDQUFDLEdBQUcsQ0FBQztVQUFFOFksSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDO01BQ2xGO0lBQ0osQ0FBQyxDQUFDLENBQ0QyRCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsUUFBUTtJQUNsQjFLLElBQUksRUFBRSxhQUFhO0lBQ25Cbk4sSUFBSSxFQUFFLGVBQWU7SUFDckJ1VSxRQUFRLEVBQUUsZUFBZTtJQUN6QjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCVyxPQUFPLENBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUNyRFgsR0FBRyxDQUFDLENBQUMsQ0FDTHVCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFO01BQUV5RyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUUsSUFBSTtNQUFFQyxFQUFFLEVBQUU7SUFBSyxDQUFDLEVBQUU7TUFBRTVILFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUN2SGMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7TUFBRXlHLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRSxJQUFJO01BQUVDLEVBQUUsRUFBRTtJQUFLLENBQUMsRUFBRTtNQUFFNUgsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ3ZIUixNQUFNLENBQUMsQ0FBQyxDQUNSSyxPQUFPLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRTtNQUFFSyxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDOUNYLEdBQUcsQ0FBQyxDQUFDLENBQ0xNLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZ0NBQWdDLENBQUMsQ0FDeERBLE9BQU8sQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FDM0NMLE1BQU0sQ0FBQyxDQUFDLENBQ1IwRCxhQUFhLENBQUMsT0FBTyxFQUFFO01BQ3BCcEQsS0FBSyxFQUFFLE9BQU87TUFDZDJELGFBQWEsRUFBRSxxQkFBcUI7TUFDcENFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1RyRyxTQUFTLFdBQUE3TSxNQUFBLENBQVc4RyxHQUFHLGtCQUFlLHlCQUF5QixFQUFFO1VBQUVxTSxLQUFLLEVBQUUsUUFBUTtVQUFFQyxNQUFNLEVBQUUsUUFBUTtVQUFFQyxHQUFHLEVBQUU7UUFBUyxDQUFDLEVBQUU7VUFBRXRILFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUMxSTBDLGFBQWEsV0FBQXpPLE1BQUEsQ0FBVzhHLEdBQUcsaUJBQWMsT0FBTyxDQUFDLENBQ2pEOEUsT0FBTyxXQUFBNUwsTUFBQSxDQUFXOEcsR0FBRyxjQUFXLG1CQUFtQixFQUFFO1VBQUVpRixRQUFRLEVBQUU1WSxDQUFDLEtBQUssQ0FBQztVQUFFOFksSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3BGTCxPQUFPLFdBQUE1TCxNQUFBLENBQVc4RyxHQUFHLG9CQUFpQix5QkFBeUIsRUFBRTtVQUFFbUYsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQzdFWCxHQUFHLENBQUMsQ0FBQyxDQUNMTSxPQUFPLFdBQUE1TCxNQUFBLENBQVc4RyxHQUFHLGtCQUFlLGVBQWUsQ0FBQyxDQUNwRDhFLE9BQU8sV0FBQTVMLE1BQUEsQ0FBVzhHLEdBQUcsaUJBQWMsaUJBQWlCLENBQUMsQ0FDckR5RSxNQUFNLENBQUMsQ0FBQztNQUNqQjtJQUNKLENBQUMsQ0FBQyxDQUNEcUUsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFFBQVE7SUFDbEIxSyxJQUFJLEVBQUUsWUFBWTtJQUNsQm5OLElBQUksRUFBRSxRQUFRO0lBQ2R1VSxRQUFRLEVBQUUsTUFBTTtJQUNoQjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCVyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtNQUFFSyxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDdEMwQixRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRTtNQUFFTSxlQUFlLEVBQUU7SUFBdUIsQ0FBQyxDQUFDLENBQzNFZ0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtNQUNwQnBELEtBQUssRUFBRSxPQUFPO01BQ2QyRCxhQUFhLEVBQUUscUJBQXFCO01BQ3BDRSxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3hjLENBQUMsRUFBRStmLE9BQU8sRUFBSztRQUN0QixJQUFNcE0sR0FBRyxHQUFHLE9BQU8zVCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMxRCxPQUFPK2YsT0FBTyxDQUNUdEgsT0FBTyxXQUFBNUwsTUFBQSxDQUFXOEcsR0FBRyxhQUFVLFVBQVUsRUFBRTtVQUFFbUYsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3ZETCxPQUFPLFdBQUE1TCxNQUFBLENBQVc4RyxHQUFHLGNBQVcsT0FBTyxFQUFFO1VBQUVtRixJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDckR1QixXQUFXLFdBQUF4TixNQUFBLENBQVc4RyxHQUFHLGtCQUFlLFlBQVksQ0FBQztNQUM5RDtJQUNKLENBQUMsQ0FBQyxDQUNEOEksTUFBTSxDQUFDO0VBQ2hCLENBQUM7RUFDRDtFQUNBO0lBQ0lxRCxRQUFRLEVBQUUsb0JBQW9CO0lBQzlCMUssSUFBSSxFQUFFLG1CQUFtQjtJQUN6Qm5OLElBQUksRUFBRSxtQkFBbUI7SUFDekJ1VSxRQUFRLEVBQUUsY0FBYztJQUN4QjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCNEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtNQUFFLFNBQU8sS0FBSztNQUFFLFFBQU07SUFBTSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzNGSCxPQUFPLENBQUMsT0FBTyxFQUFFLCtCQUErQixFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUM5RHVCLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQ3pDWCxTQUFTLENBQUMsUUFBUSxFQUFFLHVDQUF1QyxFQUFFNUIsV0FBVyxDQUFDaUssS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO01BQUVuSixRQUFRLEVBQUUsSUFBSTtNQUFFRSxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDbEgyRCxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsV0FBVztJQUNyQjFLLElBQUksRUFBRSxTQUFTO0lBQ2ZuTixJQUFJLEVBQUUsY0FBYztJQUNwQnVVLFFBQVEsRUFBRSxjQUFjO0lBQ3hCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0Y0QixRQUFRLENBQUMsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUU7TUFBRTVCLFFBQVEsRUFBRSxJQUFJO01BQUVnQyxNQUFNLEVBQUU7SUFBWSxDQUFDLENBQUMsQ0FDakdsQixTQUFTLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUU7TUFBRSxHQUFHLEVBQUUsT0FBTztNQUFFLEtBQUssRUFBRSxhQUFhO01BQUUsS0FBSyxFQUFFLGFBQWE7TUFBRSxLQUFLLEVBQUU7SUFBZSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQ3pKSCxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFO01BQUVLLElBQUksRUFBRSxDQUFDO01BQUVGLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUNoRUgsT0FBTyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUU7TUFBRUssSUFBSSxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQzlDVCxRQUFRLENBQUMsa0JBQWtCLEVBQUUsVUFBQTBILE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQzNDdEgsT0FBTyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FDL0J3QyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztJQUFBLENBQy9CLENBQUMsQ0FDQTVDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDNUN0SCxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUMvQndDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO0lBQUEsQ0FDL0IsQ0FBQyxDQUNBd0IsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFdBQVc7SUFDckIxSyxJQUFJLEVBQUUsVUFBVTtJQUNoQm5OLElBQUksRUFBRSxrQkFBa0I7SUFDeEJ1VSxRQUFRLEVBQUUsZUFBZTtJQUN6QjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCNEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtNQUFFLFNBQU8sS0FBSztNQUFFLFFBQU07SUFBTSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzNGSCxPQUFPLENBQUMsV0FBVyxFQUFFLHFCQUFxQixFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUN4RGdELGFBQWEsQ0FBQyxPQUFPLEVBQUU7TUFDcEJwRCxLQUFLLEVBQUUsT0FBTztNQUNkMkQsYUFBYSxFQUFFLHFCQUFxQjtNQUNwQ0UsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUN4YyxDQUFDLEVBQUUrZixPQUFPLEVBQUs7UUFDdEIsSUFBTXBNLEdBQUcsR0FBRyxPQUFPM1QsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxHQUFHLFVBQVUsR0FBR0EsQ0FBQyxHQUFHLENBQUM7UUFDMUQsT0FBTytmLE9BQU8sQ0FDVHRILE9BQU8sV0FBQTVMLE1BQUEsQ0FBVzhHLEdBQUcsYUFBVSxnQ0FBZ0MsRUFBRTtVQUFFaUYsUUFBUSxFQUFFO1FBQUssQ0FBQyxDQUFDLENBQ3BGYyxTQUFTLFdBQUE3TSxNQUFBLENBQVc4RyxHQUFHLGtCQUFlLGlCQUFpQixFQUFFO1VBQUUsU0FBTyxLQUFLO1VBQUUsUUFBTTtRQUFNLENBQUMsQ0FBQyxDQUN2RndFLEdBQUcsQ0FBQyxDQUFDLENBQ0xNLE9BQU8sV0FBQTVMLE1BQUEsQ0FBVzhHLEdBQUcsY0FBVyxNQUFNLENBQUMsQ0FDdkM4RSxPQUFPLFdBQUE1TCxNQUFBLENBQVc4RyxHQUFHLGlCQUFjLGdCQUFnQixFQUFFO1VBQUVxRixZQUFZLEVBQUU7UUFBSSxDQUFDLENBQUMsQ0FDM0VaLE1BQU0sQ0FBQyxDQUFDLENBQ1JLLE9BQU8sV0FBQTVMLE1BQUEsQ0FBVzhHLEdBQUcsZUFBWSxxQkFBcUIsQ0FBQyxDQUN2RG9HLFdBQVcsV0FBQWxOLE1BQUEsQ0FBVzhHLEdBQUcsaUJBQWMsaUNBQWlDLEVBQUU7VUFBRXlHLElBQUksRUFBRTtRQUFFLENBQUMsQ0FBQyxDQUN0Ri9CLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBQTJKLFVBQVU7VUFBQSxPQUFJQSxVQUFVLENBQ3ZDdkosT0FBTyxXQUFBNUwsTUFBQSxDQUFXOEcsR0FBRyxpQkFBYyxTQUFTLENBQUMsQ0FDN0NzSCxNQUFNLFdBQUFwTyxNQUFBLENBQVc4RyxHQUFHLGdCQUFhLE1BQU0sQ0FBQztRQUFBLENBQzdDLENBQUM7TUFDVDtJQUNKLENBQUMsQ0FBQyxDQUNEOEksTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFdBQVc7SUFDckIxSyxJQUFJLEVBQUUsYUFBYTtJQUNuQm5OLElBQUksRUFBRSxhQUFhO0lBQ25CdVUsUUFBUSxFQUFFLGNBQWM7SUFDeEIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRkgsT0FBTyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRTtNQUFFSyxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDcERnRCxhQUFhLENBQUMsU0FBUyxFQUFFO01BQ3RCcEQsS0FBSyxFQUFFLFlBQVk7TUFDbkIyRCxhQUFhLEVBQUUsbUJBQW1CO01BQ2xDRSxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3hjLENBQUMsRUFBRStmLE9BQU8sRUFBSztRQUN0QixJQUFNcE0sR0FBRyxHQUFHLE9BQU8zVCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMxRCxPQUFPK2YsT0FBTyxDQUNUdkYsUUFBUSxhQUFBM04sTUFBQSxDQUFhOEcsR0FBRyxlQUFZLGdCQUFnQixFQUFFO1VBQUVpSCxNQUFNLEVBQUU7UUFBVSxDQUFDLENBQUMsQ0FDNUV6QyxHQUFHLENBQUMsQ0FBQyxDQUNMTSxPQUFPLGFBQUE1TCxNQUFBLENBQWE4RyxHQUFHLGFBQVUsS0FBSyxFQUFFO1VBQUVpRixRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUMsQ0FDM0RILE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsaUJBQWMsb0JBQW9CLENBQUMsQ0FDMUR5RSxNQUFNLENBQUMsQ0FBQyxDQUNSc0IsU0FBUyxhQUFBN00sTUFBQSxDQUFhOEcsR0FBRyxjQUFXLE1BQU0sRUFBRTtVQUFFLENBQUMsRUFBRSxPQUFPO1VBQUUsQ0FBQyxFQUFFLE1BQU07VUFBRSxDQUFDLEVBQUUsS0FBSztVQUFFLENBQUMsRUFBRSxJQUFJO1VBQUUsQ0FBQyxFQUFFO1FBQUksQ0FBQyxFQUFFO1VBQUVpRixRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUMsQ0FDckhtQixXQUFXLGFBQUFsTixNQUFBLENBQWE4RyxHQUFHLGNBQVcsVUFBVSxFQUFFO1VBQUVpRixRQUFRLEVBQUUsSUFBSTtVQUFFd0IsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDO01BQ3ZGO0lBQ0osQ0FBQyxDQUFDLENBQ0RxQyxNQUFNLENBQUM7RUFDaEIsQ0FBQyxFQUNEO0lBQ0lxRCxRQUFRLEVBQUUsV0FBVztJQUNyQjFLLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJuTixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCdVUsUUFBUSxFQUFFLFVBQVU7SUFDcEIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRmtELGFBQWEsQ0FBQyxPQUFPLEVBQUU7TUFDcEJwRCxLQUFLLEVBQUUsWUFBWTtNQUNuQjJELGFBQWEsRUFBRSxtQkFBbUI7TUFDbENFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1R2RixRQUFRLFdBQUEzTixNQUFBLENBQVc4RyxHQUFHLGNBQVcsTUFBTSxFQUFFO1VBQUVpRixRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUMsQ0FDNURxQyxNQUFNLFdBQUFwTyxNQUFBLENBQVc4RyxHQUFHLFlBQVMsa0JBQWtCLENBQUM7TUFDekQ7SUFDSixDQUFDLENBQUMsQ0FDRDhJLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxRQUFRO0lBQ2xCMUssSUFBSSxFQUFFLE9BQU87SUFDYm5OLElBQUksRUFBRSxpQkFBaUI7SUFDdkJ1VSxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZrRCxhQUFhLENBQUMsUUFBUSxFQUFFO01BQ3JCcEQsS0FBSyxFQUFFLE9BQU87TUFDZDJELGFBQWEsRUFBRSxxQkFBcUI7TUFDcENFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1R2RixRQUFRLFlBQUEzTixNQUFBLENBQVk4RyxHQUFHLGFBQVUsT0FBTyxFQUFFO1VBQUVpRixRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUMsQ0FDN0RILE9BQU8sWUFBQTVMLE1BQUEsQ0FBWThHLEdBQUcsZ0JBQWEscUJBQXFCLENBQUM7TUFDbEU7SUFDSixDQUFDLENBQUMsQ0FDRDhJLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxRQUFRO0lBQ2xCMUssSUFBSSxFQUFFLFdBQVc7SUFDakJuTixJQUFJLEVBQUUseUJBQXlCO0lBQy9CdVUsUUFBUSxFQUFFLGNBQWM7SUFDeEIxTCxJQUFJLEVBQUUsSUFBSVosb0RBQVcsQ0FBQzRILFdBQVcsQ0FBQyxDQUM3QjRCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7TUFBRSxTQUFPLEtBQUs7TUFBRSxRQUFNO0lBQU0sQ0FBQyxFQUFFO01BQUVkLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUMzRlQsR0FBRyxDQUFDLENBQUMsQ0FDTHFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFO01BQUU1QixRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDN0Q0QixRQUFRLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRTtNQUFFNUIsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzVEUixNQUFNLENBQUMsQ0FBQyxDQUNSRCxHQUFHLENBQUMsQ0FBQyxDQUNMTSxPQUFPLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRTtNQUFFTyxZQUFZLEVBQUU7SUFBUSxDQUFDLENBQUMsQ0FDbkVQLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFO01BQUVPLFlBQVksRUFBRTtJQUFRLENBQUMsQ0FBQyxDQUNsRVosTUFBTSxDQUFDLENBQUMsQ0FDUnFFLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxXQUFXO0lBQ3JCMUssSUFBSSxFQUFFLFlBQVk7SUFDbEJuTixJQUFJLEVBQUUsVUFBVTtJQUNoQnVVLFFBQVEsRUFBRSxVQUFVO0lBQ3BCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0ZjLFNBQVMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFO01BQUV1SSxRQUFRLEVBQUUsV0FBVztNQUFFQyxVQUFVLEVBQUU7SUFBYyxDQUFDLEVBQUU7TUFBRXRKLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUNqSGtELGFBQWEsQ0FBQyxRQUFRLEVBQUU7TUFDckJwRCxLQUFLLEVBQUUsV0FBVztNQUNsQjJELGFBQWEsRUFBRSx3QkFBd0I7TUFDdkNFLGdCQUFnQixFQUFFLFdBQVc7TUFDN0JDLFFBQVEsRUFBRSxTQUFBQSxTQUFDeGMsQ0FBQyxFQUFFK2YsT0FBTyxFQUFLO1FBQ3RCLElBQU1wTSxHQUFHLEdBQUcsT0FBTzNULENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBRyxVQUFVLEdBQUdBLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8rZixPQUFPLENBQ1R0SCxPQUFPLFlBQUE1TCxNQUFBLENBQVk4RyxHQUFHLGFBQVUsY0FBYyxFQUFFO1VBQUVpRixRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUMsQ0FDbkVILE9BQU8sWUFBQTVMLE1BQUEsQ0FBWThHLEdBQUcsY0FBVyxPQUFPLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUM3RG1CLFdBQVcsWUFBQWxOLE1BQUEsQ0FBWThHLEdBQUcsb0JBQWlCLGFBQWEsRUFBRTtVQUFFeUcsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3RFa0IsYUFBYSxZQUFBek8sTUFBQSxDQUFZOEcsR0FBRyxhQUFVLE9BQU8sQ0FBQztNQUN2RDtJQUNKLENBQUMsQ0FBQyxDQUNEOEksTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFdBQVc7SUFDckIxSyxJQUFJLEVBQUUsVUFBVTtJQUNoQm5OLElBQUksRUFBRSxRQUFRO0lBQ2R1VSxRQUFRLEVBQUUsY0FBYztJQUN4QjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCNEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtNQUFFLFNBQU8sS0FBSztNQUFFLFFBQU07SUFBTSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzNGSCxPQUFPLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFO01BQUVLLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUNwRGdELGFBQWEsQ0FBQyxTQUFTLEVBQUU7TUFDdEJwRCxLQUFLLEVBQUUsUUFBUTtNQUNmMkQsYUFBYSxFQUFFLHFCQUFxQjtNQUNwQ0UsZ0JBQWdCLEVBQUUsV0FBVztNQUM3QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUN4YyxDQUFDLEVBQUUrZixPQUFPLEVBQUs7UUFDdEIsSUFBTXBNLEdBQUcsR0FBRyxPQUFPM1QsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxHQUFHLFVBQVUsR0FBR0EsQ0FBQyxHQUFHLENBQUM7UUFDMUQsT0FBTytmLE9BQU8sQ0FDVHZGLFFBQVEsYUFBQTNOLE1BQUEsQ0FBYThHLEdBQUcsY0FBVyxPQUFPLEVBQUU7VUFBRWlILE1BQU0sRUFBRSxTQUFTO1VBQUVoQyxRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUMsQ0FDbEZULEdBQUcsQ0FBQyxDQUFDLENBQ0xNLE9BQU8sYUFBQTVMLE1BQUEsQ0FBYThHLEdBQUcsYUFBVSxLQUFLLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUMzREgsT0FBTyxhQUFBNUwsTUFBQSxDQUFhOEcsR0FBRyxpQkFBYyxPQUFPLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUNqRVIsTUFBTSxDQUFDLENBQUMsQ0FDUjJCLFdBQVcsYUFBQWxOLE1BQUEsQ0FBYThHLEdBQUcsWUFBUyxtQkFBbUIsRUFBRTtVQUFFeUcsSUFBSSxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQ3JFakMsR0FBRyxDQUFDLENBQUMsQ0FDTDhDLE1BQU0sYUFBQXBPLE1BQUEsQ0FBYThHLEdBQUcsaUJBQWMsVUFBVSxDQUFDLENBQy9Dc0gsTUFBTSxhQUFBcE8sTUFBQSxDQUFhOEcsR0FBRyxnQkFBYSxhQUFhLENBQUMsQ0FDakR5RSxNQUFNLENBQUMsQ0FBQztNQUNqQjtJQUNKLENBQUMsQ0FBQyxDQUNEcUUsTUFBTSxDQUFDO0VBQ2hCLENBQUMsRUFDRDtJQUNJcUQsUUFBUSxFQUFFLFdBQVc7SUFDckIxSyxJQUFJLEVBQUUsZUFBZTtJQUNyQm5OLElBQUksRUFBRSxpQkFBaUI7SUFDdkJ1VSxRQUFRLEVBQUUsYUFBYTtJQUN2QjFMLElBQUksRUFBRSxJQUFJWixvREFBVyxDQUFDNEgsV0FBVyxDQUFDLENBQzdCNEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtNQUFFLFNBQU8sS0FBSztNQUFFLFFBQU07SUFBTSxDQUFDLEVBQUU7TUFBRWQsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQzNGSCxPQUFPLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFO01BQUVLLElBQUksRUFBRSxDQUFDO01BQUVGLFFBQVEsRUFBRSxJQUFJO01BQUVPLFFBQVEsRUFBRTtJQUFnRSxDQUFDLENBQUMsQ0FDOUloQixHQUFHLENBQUMsQ0FBQyxDQUNMa0IsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUU7TUFBRUYsUUFBUSxFQUFFO0lBQWMsQ0FBQyxDQUFDLENBQzlERSxTQUFTLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRTtNQUFFRixRQUFRLEVBQUU7SUFBYSxDQUFDLENBQUMsQ0FDL0RmLE1BQU0sQ0FBQyxDQUFDLENBQ1JELEdBQUcsQ0FBQyxDQUFDLENBQ0xrQixTQUFTLENBQUMsTUFBTSxFQUFFLHVCQUF1QixFQUFFO01BQUVMLFlBQVksRUFBRSxFQUFFO01BQUV2RixHQUFHLEVBQUUsQ0FBQztNQUFFRixHQUFHLEVBQUU7SUFBRyxDQUFDLENBQUMsQ0FDakZtRyxTQUFTLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFO01BQUV5SSxLQUFLLEVBQUUsT0FBTztNQUFFQyxJQUFJLEVBQUUsUUFBUTtNQUFFQyxTQUFTLEVBQUU7SUFBWSxDQUFDLEVBQUU7TUFBRXpKLFFBQVEsRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUN2SFIsTUFBTSxDQUFDLENBQUMsQ0FDUkMsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFBMEgsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FDbkN0SCxPQUFPLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQzNDc0IsV0FBVyxDQUFDLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztJQUFBLENBQzFELENBQUMsQ0FDQTBDLE1BQU0sQ0FBQztFQUNoQixDQUFDLEVBQ0Q7SUFDSXFELFFBQVEsRUFBRSxXQUFXO0lBQ3JCMUssSUFBSSxFQUFFLHFCQUFxQjtJQUMzQm5OLElBQUksRUFBRSxrQkFBa0I7SUFDeEJ1VSxRQUFRLEVBQUUsbUJBQW1CO0lBQzdCMUwsSUFBSSxFQUFFLElBQUlaLG9EQUFXLENBQUM0SCxXQUFXLENBQUMsQ0FDN0I0QixTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFO01BQUUsU0FBTyxLQUFLO01BQUUsUUFBTTtJQUFNLENBQUMsRUFBRTtNQUFFZCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FDM0Y0QixRQUFRLENBQUMsaUJBQWlCLEVBQUUsMkJBQTJCLENBQUMsQ0FDeERzQixhQUFhLENBQUMsVUFBVSxFQUFFO01BQ3ZCcEQsS0FBSyxFQUFFLFVBQVU7TUFDakIyRCxhQUFhLEVBQUUsdUJBQXVCO01BQ3RDRSxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3hjLENBQUMsRUFBRStmLE9BQU8sRUFBSztRQUN0QixJQUFNcE0sR0FBRyxHQUFHLE9BQU8zVCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsVUFBVSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMxRCxPQUFPK2YsT0FBTyxDQUNUNUgsR0FBRyxDQUFDLENBQUMsQ0FDTGtCLFNBQVMsY0FBQXhNLE1BQUEsQ0FBYzhHLEdBQUcsZUFBWSxjQUFjLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUN6RUgsT0FBTyxjQUFBNUwsTUFBQSxDQUFjOEcsR0FBRyxlQUFZLG9CQUFvQixFQUFFO1VBQUVtRixJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FDdEVWLE1BQU0sQ0FBQyxDQUFDLENBQ1JLLE9BQU8sY0FBQTVMLE1BQUEsQ0FBYzhHLEdBQUcsY0FBVyxTQUFTLEVBQUU7VUFBRWlGLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUNqRTBDLGFBQWEsY0FBQXpPLE1BQUEsQ0FBYzhHLEdBQUcsYUFBVSxPQUFPLENBQUM7TUFDekQ7SUFDSixDQUFDLENBQUMsQ0FDRDhJLE1BQU0sQ0FBQztFQUNoQixDQUFDLENBQ0o7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1eEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtFQUNBcmMsVUFBQTtJQUNBa2lCLFNBQUEsRUFBQUEsc0RBQUE7SUFDQUMsY0FBQSxFQUFBQSw0REFBQTtJQUNBQyxjQUFBLEVBQUFBLDREQUFBO0lBQ0FDLGNBQUEsRUFBQUEsNERBQUFBO0VBQ0E7RUFDQTVYLEtBQUE7SUFDQThYLFFBQUE7TUFDQTVlLElBQUEsR0FBQW1QLEtBQUEsRUFBQXZSLE1BQUEsRUFBQTBKLE1BQUE7TUFDQSxvQkFBQXVYLFNBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQXZTLFFBQUE7TUFDQXRNLElBQUEsRUFBQXNILE1BQUE7TUFDQXVOLFFBQUE7SUFDQTtJQUNBZCxXQUFBO01BQ0EvVCxJQUFBLEVBQUFwQyxNQUFBO01BQ0Esb0JBQUFpaEIsU0FBQTtRQUFBO01BQUE7SUFDQTtJQUNBQyxVQUFBO01BQ0E5ZSxJQUFBLEVBQUFzSCxNQUFBO01BQ0E7SUFDQTtFQUNBO0VBQ0FhLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0E0VyxlQUFBLE9BQUFDLFVBQUEsTUFBQUosUUFBQTtNQUNBSyxjQUFBO01BQ0FDLGFBQUE7TUFDQUMsa0JBQUE7SUFDQTtFQUNBO0VBQ0FDLEtBQUE7SUFDQUwsZUFBQTtNQUNBTSxPQUFBLFdBQUFBLFFBQUE7UUFDQSxLQUFBQyxxQkFBQTtNQUNBO01BQ0FDLElBQUE7SUFDQTtFQUNBO0VBQ0FDLE9BQUE7SUFDQUMsUUFBQSxXQUFBQSxTQUFBO01BQ0EsS0FBQVIsY0FBQTtJQUNBO0lBQ0FTLGlCQUFBLFdBQUFBLGtCQUFBdGlCLEVBQUE7TUFDQSxLQUFBMmhCLGVBQUEsUUFBQUEsZUFBQSxDQUFBaFIsTUFBQSxXQUFBVixPQUFBO1FBQUEsT0FBQUEsT0FBQSxDQUFBalEsRUFBQSxLQUFBQSxFQUFBO01BQUE7TUFDQSxLQUFBNmhCLGNBQUE7SUFDQTtJQUNBVSxNQUFBLFdBQUFBLE9BQUExaUIsS0FBQTtNQUNBLElBQUFBLEtBQUE7UUFDQSxLQUFBMmlCLFlBQUEsQ0FBQTNpQixLQUFBLEVBQUFBLEtBQUE7TUFDQTtJQUNBO0lBQ0E0aUIsUUFBQSxXQUFBQSxTQUFBNWlCLEtBQUE7TUFDQSxJQUFBQSxLQUFBLFFBQUE4aEIsZUFBQSxDQUFBaGpCLE1BQUE7UUFDQSxLQUFBNmpCLFlBQUEsQ0FBQTNpQixLQUFBLEVBQUFBLEtBQUE7TUFDQTtJQUNBO0lBQ0EyaUIsWUFBQSxXQUFBQSxhQUFBRSxXQUFBLEVBQUFDLFdBQUE7TUFDQSxJQUFBQyxVQUFBLFFBQUFqQixlQUFBLENBQUFlLFdBQUE7TUFDQSxLQUFBRyxJQUFBLE1BQUFsQixlQUFBLEVBQUFlLFdBQUEsT0FBQWYsZUFBQSxDQUFBZ0IsV0FBQTtNQUNBLEtBQUFFLElBQUEsTUFBQWxCLGVBQUEsRUFBQWdCLFdBQUEsRUFBQUMsVUFBQTtNQUNBLEtBQUFmLGNBQUE7SUFDQTtJQUNBaUIsZUFBQSxXQUFBQSxnQkFBQTlpQixFQUFBO01BQ0EsSUFBQWlRLE9BQUEsUUFBQTBSLGVBQUEsQ0FBQXBpQixJQUFBLFdBQUEwUSxPQUFBO1FBQUEsT0FBQUEsT0FBQSxDQUFBalEsRUFBQSxLQUFBQSxFQUFBO01BQUE7TUFDQSxJQUFBaVEsT0FBQSxFQUFBQSxPQUFBLENBQUE4UyxXQUFBO0lBQ0E7SUFDQUMsZUFBQSxXQUFBQSxnQkFBQWhqQixFQUFBO01BQ0EsSUFBQWlRLE9BQUEsUUFBQTBSLGVBQUEsQ0FBQXBpQixJQUFBLFdBQUEwUSxPQUFBO1FBQUEsT0FBQUEsT0FBQSxDQUFBalEsRUFBQSxLQUFBQSxFQUFBO01BQUE7TUFDQSxJQUFBaVEsT0FBQSxFQUFBQSxPQUFBLENBQUE4UyxXQUFBO0lBQ0E7SUFDQUUsV0FBQSxXQUFBQSxZQUFBampCLEVBQUE7TUFDQSxJQUFBaVEsT0FBQSxRQUFBMFIsZUFBQSxDQUFBcGlCLElBQUEsV0FBQTBRLE9BQUE7UUFBQSxPQUFBQSxPQUFBLENBQUFqUSxFQUFBLEtBQUFBLEVBQUE7TUFBQTtNQUNBLElBQUFpUSxPQUFBO1FBQ0FBLE9BQUEsQ0FBQWlULE9BQUE7UUFDQSxLQUFBckIsY0FBQTtNQUNBO0lBQ0E7SUFDQXNCLFdBQUEsV0FBQUEsWUFBQW5qQixFQUFBO01BQ0EsSUFBQWlRLE9BQUEsUUFBQTBSLGVBQUEsQ0FBQXBpQixJQUFBLFdBQUEwUSxPQUFBO1FBQUEsT0FBQUEsT0FBQSxDQUFBalEsRUFBQSxLQUFBQSxFQUFBO01BQUE7TUFDQSxJQUFBaVEsT0FBQTtRQUNBQSxPQUFBLENBQUFpVCxPQUFBO1FBQ0EsS0FBQXJCLGNBQUE7TUFDQTtJQUNBO0lBQ0FELFVBQUEsV0FBQUEsV0FBQUosUUFBQTtNQUFBLElBQUE0QixLQUFBO01BQ0EsS0FBQTVCLFFBQUE7UUFDQTtNQUNBO01BQ0EsSUFBQUcsZUFBQTtNQUVBbmhCLE1BQUEsQ0FBQTZpQixPQUFBLENBQUE3QixRQUFBLEVBQUFoZSxPQUFBLFdBQUF5TSxPQUFBO1FBQ0EsSUFBQXFULFFBQUEsR0FBQUMsY0FBQSxDQUFBdFQsT0FBQTtVQUFBblAsR0FBQSxHQUFBd2lCLFFBQUE7VUFBQXhqQixLQUFBLEdBQUF3akIsUUFBQTtRQUNBLElBQUFFLGNBQUEsR0FBQUosS0FBQSxDQUFBSywwQkFBQSxDQUFBM2pCLEtBQUEsQ0FBQXViLFFBQUEsRUFBQXZiLEtBQUE7UUFDQSxJQUFBMGpCLGNBQUE7VUFDQUEsY0FBQSxDQUFBVCxXQUFBO1VBQ0FwQixlQUFBLENBQUF6YixJQUFBLENBQUFzZCxjQUFBO1FBQ0E7TUFDQTtNQUVBLE9BQUE3QixlQUFBO0lBQ0E7SUFDQThCLDBCQUFBLFdBQUFBLDJCQUFBcEksUUFBQSxFQUFBcEwsT0FBQTtNQUNBLElBQUF5VCxTQUFBLEdBQUFuQyx5RUFBQSxNQUFBNUssV0FBQSxFQUNBcFgsSUFBQSxXQUFBMFEsT0FBQTtRQUFBLE9BQUFBLE9BQUEsQ0FBQW9MLFFBQUEsS0FBQUEsUUFBQTtNQUFBO01BRUEsS0FBQXFJLFNBQUE7UUFDQTtNQUNBO01BRUEsSUFBQUMsY0FBQTtRQUNBM2pCLEVBQUEsT0FBQTRqQixhQUFBO1FBQ0F2SSxRQUFBLEVBQUFBLFFBQUE7UUFDQXZVLElBQUEsRUFBQTRjLFNBQUEsQ0FBQTVjLElBQUE7UUFDQW1OLElBQUEsRUFBQXlQLFNBQUEsQ0FBQXpQLElBQUE7UUFDQWlQLE9BQUEsRUFBQWpULE9BQUEsR0FBQUEsT0FBQSxDQUFBaVQsT0FBQTtRQUNBdlQsSUFBQSxFQUFBK1QsU0FBQSxDQUFBL1QsSUFBQTtRQUNBb1QsV0FBQTtNQUNBO01BRUEsSUFBQTlTLE9BQUE7UUFDQTtRQUNBLE9BQUF6UCxNQUFBLENBQUFxakIsTUFBQSxLQUFBRixjQUFBLEVBQUExVCxPQUFBO01BQ0E7TUFFQSxPQUFBMFQsY0FBQTtJQUNBO0lBQ0FHLGdCQUFBLFdBQUFBLGlCQUFBOWpCLEVBQUE7TUFDQSxJQUFBSCxLQUFBLFFBQUE4aEIsZUFBQSxDQUFBb0MsU0FBQSxXQUFBaGxCLEVBQUE7UUFBQSxPQUFBQSxFQUFBLENBQUFpQixFQUFBLEtBQUFBLEVBQUE7TUFBQTtNQUNBLElBQUFILEtBQUE7TUFFQSxJQUFBbWtCLFFBQUEsUUFBQXJDLGVBQUEsQ0FBQTloQixLQUFBOztNQUVBO01BQ0E7TUFDQTs7TUFFQSxJQUFBb2tCLFVBQUEsR0FBQS9WLElBQUEsQ0FBQWdXLEtBQUEsQ0FBQWhXLElBQUEsQ0FBQUMsU0FBQSxDQUFBNlYsUUFBQTtNQUNBQyxVQUFBLENBQUFqa0IsRUFBQSxRQUFBNGpCLGFBQUE7TUFDQUssVUFBQSxDQUFBbmQsSUFBQSxHQUFBa2QsUUFBQSxDQUFBbGQsSUFBQTtNQUNBbWQsVUFBQSxDQUFBaFEsSUFBQSxHQUFBK1AsUUFBQSxDQUFBL1AsSUFBQTtNQUNBZ1EsVUFBQSxDQUFBbEIsV0FBQTs7TUFFQTtNQUNBLEtBQUFwQixlQUFBLENBQUF3QyxNQUFBLENBQUF0a0IsS0FBQSxTQUFBb2tCLFVBQUE7TUFDQSxLQUFBcEMsY0FBQTs7TUFFQTtJQUNBO0lBQ0F1QyxXQUFBLFdBQUFBLFlBQUE7TUFDQSxLQUFBekMsZUFBQSxDQUFBbmUsT0FBQSxXQUFBeU0sT0FBQTtRQUNBQSxPQUFBLENBQUE4UyxXQUFBO01BQ0E7SUFDQTtJQUNBc0IsU0FBQSxXQUFBQSxVQUFBO01BQ0EsS0FBQTFDLGVBQUEsQ0FBQW5lLE9BQUEsV0FBQXlNLE9BQUE7UUFDQUEsT0FBQSxDQUFBOFMsV0FBQTtNQUNBO0lBQ0E7SUFDQXVCLFFBQUEsV0FBQUEsU0FBQTtNQUNBLElBQUEvVSxPQUFBO1FBQ0EsS0FBQW9TLGVBQUE7UUFDQSxLQUFBRSxjQUFBO01BQ0E7SUFDQTtJQUNBMEMsV0FBQSxXQUFBQSxZQUFBO01BQUEsSUFBQUMsTUFBQTtNQUNBLFVBQUE5QyxVQUFBO1FBQ0F4VSxLQUFBO1FBQ0E7TUFDQTtNQUVBLElBQUF1WCxjQUFBO01BRUEsU0FBQTNDLGFBQUEsVUFBQUEsYUFBQSxDQUFBNEMsTUFBQTtRQUNBLEtBQUE1QyxhQUFBLENBQUE2QyxLQUFBO01BQ0E7UUFDQSxLQUFBN0MsYUFBQSxHQUFBN1csTUFBQSxDQUFBMlosSUFBQSxNQUFBbEQsVUFBQSxvQkFBQStDLGNBQUE7O1FBRUE7UUFDQXhaLE1BQUEsQ0FBQUMsZ0JBQUEsc0JBQUFDLEtBQUE7VUFDQSxJQUFBQSxLQUFBLENBQUFKLElBQUEsQ0FBQW5JLElBQUE7WUFDQTRoQixNQUFBLENBQUFLLGlCQUFBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUMsYUFBQSxXQUFBQSxjQUFBO01BQ0EsU0FBQUMsS0FBQSxDQUFBQyxjQUFBO1FBQ0EsS0FBQUQsS0FBQSxDQUFBQyxjQUFBLENBQUFyWSxJQUFBO01BQ0E7SUFDQTtJQUNBc1ksZUFBQSxXQUFBQSxnQkFBQXpELFFBQUE7TUFBQSxJQUFBMEQsTUFBQTtNQUNBO01BQ0E7TUFDQTs7TUFFQSxJQUFBQyxnQkFBQTtNQUNBLElBQUEzRCxRQUFBLElBQUF0ZCxPQUFBLENBQUFzZCxRQUFBO1FBQ0EyRCxnQkFBQSxRQUFBdkQsVUFBQSxDQUFBSixRQUFBO01BQ0E7O01BRUE7TUFDQSxLQUFBRyxlQUFBO01BQ0EsS0FBQXlELFNBQUE7UUFDQUYsTUFBQSxDQUFBdkQsZUFBQSxHQUFBd0QsZ0JBQUE7UUFDQUQsTUFBQSxDQUFBckQsY0FBQTtNQUNBO0lBQ0E7SUFDQXdELGVBQUEsV0FBQUEsZ0JBQUE3RCxRQUFBO01BQ0EsVUFBQU0sYUFBQSxTQUFBQSxhQUFBLENBQUE0QyxNQUFBO1FBQ0F4WCxLQUFBO1FBQ0E7TUFDQTtNQUVBLElBQUFvWSxlQUFBO01BQ0EsSUFBQTlELFFBQUEsSUFBQXRkLE9BQUEsQ0FBQXNkLFFBQUE7UUFDQThELGVBQUEsUUFBQTFELFVBQUEsQ0FBQUosUUFBQTtNQUNBO01BRUEsSUFBQStELGNBQUEsR0FBQXJYLElBQUEsQ0FBQWdXLEtBQUEsQ0FBQWhXLElBQUEsQ0FBQUMsU0FBQSxDQUFBbVgsZUFBQTtNQUVBLEtBQUF4RCxhQUFBLENBQUEwRCxXQUFBO1FBQ0E1aUIsSUFBQTtRQUNBNGUsUUFBQSxFQUFBK0Q7TUFDQTtJQUNBO0lBQ0FWLGlCQUFBLFdBQUFBLGtCQUFBO01BQUEsSUFBQVksTUFBQTtNQUNBLFNBQUEzRCxhQUFBLFVBQUFBLGFBQUEsQ0FBQTRDLE1BQUE7UUFDQTtRQUNBLElBQUFhLGNBQUEsR0FBQXJYLElBQUEsQ0FBQWdXLEtBQUEsQ0FBQWhXLElBQUEsQ0FBQUMsU0FBQSxNQUFBd1QsZUFBQTs7UUFFQTtRQUNBO1FBQ0E0RCxjQUFBLENBQUEvaEIsT0FBQSxXQUFBeU0sT0FBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBLElBQUFBLE9BQUEsQ0FBQU4sSUFBQTtZQUNBO1lBQ0E7WUFDQTs7WUFFQTtZQUNBOztZQUVBLElBQUErVixNQUFBLEdBQUF6VixPQUFBLENBQUFqUSxFQUFBO1lBQ0E7WUFDQTtZQUNBO1lBQ0EsSUFBQTJsQixNQUFBLEdBQUFoYixRQUFBLENBQUFpYixnQkFBQSxXQUFBbGEsTUFBQSxDQUFBZ2EsTUFBQTtZQUVBQyxNQUFBLENBQUFuaUIsT0FBQSxXQUFBMkcsS0FBQTtjQUNBO2NBQ0EsS0FBQUEsS0FBQSxDQUFBckQsSUFBQTs7Y0FFQTtjQUNBO2NBQ0E7O2NBRUE7Y0FDQSxJQUFBeVcsVUFBQSxNQUFBN1IsTUFBQSxDQUFBK1osTUFBQSxDQUFBdlcsUUFBQSxPQUFBeEQsTUFBQSxDQUFBdUUsT0FBQSxDQUFBalEsRUFBQTtjQUNBLEtBQUFtSyxLQUFBLENBQUFyRCxJQUFBLENBQUFtRyxVQUFBLENBQUFzUSxVQUFBO2NBRUEsSUFBQXNJLFNBQUEsR0FBQTFiLEtBQUEsQ0FBQXJELElBQUEsQ0FBQWdmLFNBQUEsQ0FBQXZJLFVBQUEsQ0FBQTVlLE1BQUE7Y0FDQTs7Y0FFQSxJQUFBOFIsSUFBQSxHQUFBb1YsU0FBQSxDQUFBblYsS0FBQSxPQUFBdU0sR0FBQSxXQUFBOEksQ0FBQTtnQkFBQSxPQUFBQSxDQUFBLENBQUE3UyxPQUFBO2NBQUE7Y0FFQSxJQUFBcFQsS0FBQTtjQUNBLElBQUFxSyxLQUFBLENBQUF2SCxJQUFBLG1CQUFBdUgsS0FBQSxDQUFBdkgsSUFBQTtnQkFDQSxJQUFBdUgsS0FBQSxDQUFBNmIsT0FBQTtrQkFDQWxtQixLQUFBLEdBQUFxSyxLQUFBLENBQUFySyxLQUFBO2dCQUNBLFdBQUFxSyxLQUFBLENBQUF2SCxJQUFBLG9CQUFBcU4sT0FBQSxDQUFBUSxJQUFBO2tCQUNBO2dCQUFBLENBQ0E7a0JBQ0E7Z0JBQ0E7Y0FDQTtnQkFDQTNRLEtBQUEsR0FBQXFLLEtBQUEsQ0FBQXJLLEtBQUE7Y0FDQTs7Y0FFQTtjQUNBLElBQUFxSyxLQUFBLENBQUE4YixPQUFBO2dCQUNBbm1CLEtBQUEsR0FBQXFLLEtBQUEsQ0FBQXJLLEtBQUE7Y0FDQTtjQUVBLElBQUFBLEtBQUEsS0FBQXNGLFNBQUE7Z0JBQ0FxZ0IsTUFBQSxDQUFBUyxlQUFBLENBQUFqVyxPQUFBLEVBQUFRLElBQUEsRUFBQTNRLEtBQUE7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtRQUVBLEtBQUFnaUIsYUFBQSxDQUFBMEQsV0FBQTtVQUNBNWlCLElBQUE7VUFDQTRlLFFBQUEsRUFBQStEO1FBQ0E7TUFDQTtJQUNBO0lBQ0FXLGVBQUEsV0FBQUEsZ0JBQUFybEIsR0FBQSxFQUFBNFAsSUFBQSxFQUFBM1EsS0FBQTtNQUNBLElBQUErUSxPQUFBLEdBQUFoUSxHQUFBO01BQ0EsU0FBQWhDLENBQUEsTUFBQUEsQ0FBQSxHQUFBNFIsSUFBQSxDQUFBOVIsTUFBQSxNQUFBRSxDQUFBO1FBQ0EsSUFBQWlDLEdBQUEsR0FBQTJQLElBQUEsQ0FBQTVSLENBQUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUEsSUFBQWdTLE9BQUEsQ0FBQS9QLEdBQUEsTUFBQXNFLFNBQUEsSUFBQXlMLE9BQUEsQ0FBQS9QLEdBQUE7VUFDQTtVQUNBLElBQUFxbEIsT0FBQSxHQUFBMVYsSUFBQSxDQUFBNVIsQ0FBQTtVQUNBLElBQUF1bkIsS0FBQSxXQUFBQyxJQUFBLENBQUFGLE9BQUE7VUFDQXRWLE9BQUEsQ0FBQS9QLEdBQUEsSUFBQXNsQixLQUFBO1FBQ0E7UUFFQXZWLE9BQUEsR0FBQUEsT0FBQSxDQUFBL1AsR0FBQTtNQUNBO01BQ0EsSUFBQXdsQixPQUFBLEdBQUE3VixJQUFBLENBQUFBLElBQUEsQ0FBQTlSLE1BQUE7TUFDQWtTLE9BQUEsQ0FBQXlWLE9BQUEsSUFBQXhtQixLQUFBO0lBQ0E7SUFDQW9pQixxQkFBQSxXQUFBQSxzQkFBQTtNQUFBLElBQUFxRSxNQUFBO01BQ0EsU0FBQXhFLGtCQUFBO1FBQ0F5RSxZQUFBLE1BQUF6RSxrQkFBQTtNQUNBO01BRUEsS0FBQUEsa0JBQUEsR0FBQXBULFVBQUE7UUFDQTRYLE1BQUEsQ0FBQTFCLGlCQUFBO01BQ0E7SUFDQTtJQUNBakIsYUFBQSxXQUFBQSxjQUFBO01BQ0EsSUFBQTZDLENBQUE7TUFDQSxJQUFBQyxHQUFBLFFBQUFDLElBQUE7TUFFQSxPQUFBOUksSUFBQSxDQUFBK0ksS0FBQSxDQUFBL0ksSUFBQSxDQUFBQyxNQUFBLEtBQUEySSxDQUFBLEVBQUExSSxRQUFBLE9BQ0FGLElBQUEsQ0FBQWdKLEdBQUEsQ0FBQWhKLElBQUEsQ0FBQStJLEtBQUEsQ0FBQS9JLElBQUEsQ0FBQUMsTUFBQSxLQUFBMkksQ0FBQSxJQUFBQyxHQUFBLEVBQUEzSSxRQUFBO0lBQ0E7RUFDQTtFQUNBK0ksT0FBQSxXQUFBQSxRQUFBO0lBQUEsSUFBQUMsTUFBQTtJQUNBO0lBQ0FwYyxRQUFBLENBQUFPLGdCQUFBO01BQUEsT0FBQTZiLE1BQUEsQ0FBQWxGLGNBQUE7SUFBQTtJQUNBbFgsUUFBQSxDQUFBTyxnQkFBQTtNQUFBLE9BQUE2YixNQUFBLENBQUFsRixjQUFBO0lBQUE7O0lBRUE7SUFDQTtJQUNBLElBQUFtRixZQUFBO0lBRUFBLFlBQUEsQ0FBQXhqQixPQUFBLFdBQUF5akIsU0FBQTtNQUNBRixNQUFBLENBQUFHLEdBQUEsQ0FBQWhjLGdCQUFBLENBQUErYixTQUFBLFlBQUFyYyxDQUFBO1FBQ0E7UUFDQSxJQUFBQSxDQUFBLENBQUFuQixNQUFBLENBQUEwZCxPQUFBO1VBQ0FKLE1BQUEsQ0FBQTdFLHFCQUFBO1FBQ0E7TUFDQTtRQUFBa0YsT0FBQTtNQUFBO0lBQ0E7O0lBRUE7SUFDQSxJQUFBbmMsb0NBQUE7TUFDQSxJQUFBaWMsR0FBQSxHQUFBamMsb0NBQUEsTUFBQWljLEdBQUE7TUFDQUEsR0FBQSxDQUFBeG5CLEVBQUEsOENBQUFrTCxDQUFBO1FBQ0FtYyxNQUFBLENBQUE3RSxxQkFBQTtNQUNBO0lBQ0E7SUFFQWpYLE1BQUEsQ0FBQUMsZ0JBQUEsMkJBQUFDLEtBQUE7TUFDQSxJQUFBNGIsTUFBQSxDQUFBbEYsY0FBQTtRQUNBMVcsS0FBQSxDQUFBTixjQUFBO1FBQ0FNLEtBQUEsQ0FBQW1jLFdBQUE7TUFDQTtJQUNBO0VBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9aQTtBQUVBO0VBQ0E1ZCxLQUFBO0VBQ0FxQixJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBd2MsYUFBQTtJQUNBO0VBQ0E7RUFDQUMsUUFBQTtJQUNBQyxpQkFBQSxXQUFBQSxrQkFBQTtNQUNBLE9BQUF6WSxvRUFBQSxDQUFBQyxTQUFBLE1BQUFDLFFBQUEsT0FBQWUsT0FBQSxDQUFBalEsRUFBQTtJQUNBO0lBQ0EwbkIsZ0JBQUEsV0FBQUEsaUJBQUE7TUFDQSxPQUFBMVksb0VBQUEsQ0FBQUMsU0FBQSxNQUFBQyxRQUFBLE9BQUFlLE9BQUEsQ0FBQWpRLEVBQUE7SUFDQTtJQUNBMm5CLGFBQUEsV0FBQUEsY0FBQTtNQUNBLE9BQUEzWSxvRUFBQSxDQUFBQyxTQUFBLE1BQUFDLFFBQUEsT0FBQWUsT0FBQSxDQUFBalEsRUFBQTtJQUNBO0lBQ0EyUCxJQUFBLFdBQUFBLEtBQUE7TUFDQSxZQUFBTSxPQUFBLENBQUFOLElBQUE7SUFDQTtJQUNBb1QsV0FBQSxXQUFBQSxZQUFBO01BQ0EsWUFBQTlTLE9BQUEsQ0FBQThTLFdBQUE7SUFDQTtFQUNBO0VBQ0FYLE9BQUE7SUFDQXdGLGdCQUFBLFdBQUFBLGlCQUFBO01BQUEsSUFBQXhFLEtBQUE7TUFDQSxLQUFBbUUsYUFBQTtNQUNBLEtBQUFuQyxTQUFBO1FBQ0EsSUFBQWhDLEtBQUEsQ0FBQTJCLEtBQUEsQ0FBQThDLFNBQUE7VUFDQXpFLEtBQUEsQ0FBQTJCLEtBQUEsQ0FBQThDLFNBQUEsQ0FBQWxELEtBQUE7UUFDQTtNQUNBO0lBQ0E7SUFDQW1ELGVBQUEsV0FBQUEsZ0JBQUE7TUFDQSxLQUFBUCxhQUFBO01BQ0EsVUFBQXRYLE9BQUEsQ0FBQW5KLElBQUEsU0FBQW1KLE9BQUEsQ0FBQW5KLElBQUEsQ0FBQWloQixJQUFBO1FBQ0E7UUFDQTtRQUNBO01BQUE7SUFFQTtJQUNBMWIsTUFBQSxXQUFBQSxPQUFBO01BQUEsSUFBQW1ZLE1BQUE7TUFDQXhWLG9FQUFBLENBQUFPLE9BQUE7UUFBQSxPQUFBaVYsTUFBQSxDQUFBd0QsS0FBQSxtQkFBQXhELE1BQUEsQ0FBQXZVLE9BQUEsQ0FBQWpRLEVBQUE7TUFBQTtJQUNBO0lBQ0Fpb0IsU0FBQSxXQUFBQSxVQUFBO01BQ0EsS0FBQUQsS0FBQSxtQkFBQS9YLE9BQUEsQ0FBQWpRLEVBQUE7SUFDQTtJQUNBa29CLFVBQUEsV0FBQUEsV0FBQTtNQUNBLFNBQUFuRixXQUFBO1FBQ0EsSUFBQS9ULG9FQUFBLENBQUFVLG1CQUFBLE1BQUFxVixLQUFBLENBQUFvRCxXQUFBO1VBQ0EsS0FBQUgsS0FBQSwyQkFBQS9YLE9BQUEsQ0FBQWpRLEVBQUE7UUFDQTtNQUNBO1FBQ0EsS0FBQWdvQixLQUFBLDBCQUFBL1gsT0FBQSxDQUFBalEsRUFBQTtNQUNBO0lBQ0E7SUFDQW9vQixnQkFBQSxXQUFBQSxpQkFBQTtNQUNBLFNBQUFuWSxPQUFBLENBQUFpVCxPQUFBO1FBQ0EsS0FBQThFLEtBQUEsdUJBQUEvWCxPQUFBLENBQUFqUSxFQUFBO01BQ0E7UUFDQSxLQUFBZ29CLEtBQUEsc0JBQUEvWCxPQUFBLENBQUFqUSxFQUFBO01BQ0E7SUFDQTtFQUNBO0VBQ0E4bUIsT0FBQSxXQUFBQSxRQUFBO0lBQ0E5WCxvRUFBQSxDQUFBZ0IsS0FBQSxDQUNBLEtBQUFkLFFBQUEsRUFDQSxLQUFBZSxPQUFBLEVBQ0EsS0FBQThVLEtBQUEsQ0FBQW9ELFdBQ0E7RUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUVBO0VBQ0FyaEIsSUFBQTtFQUNBN0gsVUFBQTtJQUNBa2lCLFNBQUEsRUFBQUEsc0RBQUFBO0VBQ0E7RUFDQXpYLEtBQUE7RUFDQXFCLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0F3VyxpQkFBQSxFQUFBQSx5RUFBQSxNQUFBNUssV0FBQTtNQUNBMFIsV0FBQTtNQUNBQyxtQkFBQTtJQUNBO0VBQ0E7RUFDQWQsUUFBQTtJQUNBZSxnQkFBQSxXQUFBQSxpQkFBQTtNQUNBLFVBQUFGLFdBQUE7UUFDQSxZQUFBOUcsaUJBQUE7TUFDQTtNQUNBLElBQUFpSCxLQUFBLFFBQUFILFdBQUEsQ0FBQTVSLFdBQUE7TUFDQSxZQUFBOEssaUJBQUEsQ0FBQTVRLE1BQUEsV0FBQVYsT0FBQTtRQUFBLE9BQ0FBLE9BQUEsQ0FBQW5KLElBQUEsQ0FBQTJQLFdBQUEsR0FBQWdTLFFBQUEsQ0FBQUQsS0FBQTtNQUFBLENBQ0E7SUFDQTtJQUNBRSxlQUFBLFdBQUFBLGdCQUFBO01BQ0EsSUFBQUMsTUFBQTtNQUNBO01BQ0EsSUFBQUMsS0FBQTtNQUVBLEtBQUFMLGdCQUFBLENBQUEva0IsT0FBQSxXQUFBeU0sT0FBQTtRQUNBLElBQUEwTyxRQUFBLEdBQUExTyxPQUFBLENBQUEwTyxRQUFBO1FBQ0EsS0FBQWdLLE1BQUEsQ0FBQWhLLFFBQUE7VUFDQWdLLE1BQUEsQ0FBQWhLLFFBQUE7UUFDQTtRQUNBZ0ssTUFBQSxDQUFBaEssUUFBQSxFQUFBelksSUFBQSxDQUFBK0osT0FBQTtNQUNBOztNQUVBO01BQ0EsSUFBQTRZLFlBQUE7TUFDQXJvQixNQUFBLENBQUE4RyxJQUFBLENBQUFxaEIsTUFBQSxFQUFBRyxJQUFBLFdBQUFDLENBQUEsRUFBQUMsQ0FBQTtRQUNBLE9BQUFKLEtBQUEsQ0FBQWhXLE9BQUEsQ0FBQW1XLENBQUEsSUFBQUgsS0FBQSxDQUFBaFcsT0FBQSxDQUFBb1csQ0FBQTtNQUNBLEdBQUF4bEIsT0FBQSxXQUFBMUMsR0FBQTtRQUNBK25CLFlBQUEsQ0FBQS9uQixHQUFBLElBQUE2bkIsTUFBQSxDQUFBN25CLEdBQUE7TUFDQTtNQUVBLE9BQUErbkIsWUFBQTtJQUNBO0VBQ0E7RUFDQXpHLE9BQUE7SUFDQTZHLGNBQUEsV0FBQUEsZUFBQXRLLFFBQUE7TUFDQSxLQUFBa0UsSUFBQSxNQUFBeUYsbUJBQUEsRUFBQTNKLFFBQUEsUUFBQTJKLG1CQUFBLENBQUEzSixRQUFBO0lBQ0E7SUFDQXVLLFlBQUEsV0FBQUEsYUFBQWpaLE9BQUE7TUFDQTtNQUNBO1FBQ0FvTCxRQUFBLEVBQUFwTCxPQUFBLENBQUFvTCxRQUFBO1FBQ0F2VSxJQUFBLEVBQUFtSixPQUFBLENBQUFuSixJQUFBO1FBQ0FtTixJQUFBLEVBQUFoRSxPQUFBLENBQUFnRSxJQUFBO1FBQUE7UUFDQWlQLE9BQUE7UUFDQXZULElBQUEsRUFBQU0sT0FBQSxDQUFBTixJQUFBO1FBQ0FvVCxXQUFBO1FBQUE7UUFDQS9pQixFQUFBLE9BQUE0akIsYUFBQTtNQUNBO0lBQ0E7SUFDQUEsYUFBQSxXQUFBQSxjQUFBO01BQ0EsSUFBQTZDLENBQUE7TUFDQSxJQUFBQyxHQUFBLFFBQUFDLElBQUE7TUFDQSxPQUFBOUksSUFBQSxDQUFBK0ksS0FBQSxDQUFBL0ksSUFBQSxDQUFBQyxNQUFBLEtBQUEySSxDQUFBLEVBQUExSSxRQUFBLE9BQ0FGLElBQUEsQ0FBQWdKLEdBQUEsQ0FBQWhKLElBQUEsQ0FBQStJLEtBQUEsQ0FBQS9JLElBQUEsQ0FBQUMsTUFBQSxLQUFBMkksQ0FBQSxJQUFBQyxHQUFBLEVBQUEzSSxRQUFBO0lBQ0E7RUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBLGlFQUFlO0VBQ2ZqWCxJQUFBO0VBQ0E0QyxLQUFBO0lBQ0F5ZixXQUFBO01BQ0F2bUIsSUFBQSxFQUFBc0gsTUFBQTtNQUNBdU4sUUFBQTtJQUNBO0lBQ0EyUixRQUFBO01BQ0F4bUIsSUFBQSxHQUFBc0gsTUFBQSxFQUFBTSxNQUFBO01BQ0FpTixRQUFBO0lBQ0E7RUFDQTtFQUNBMU0sSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQXNlLFNBQUE7TUFDQUMsT0FBQTtNQUNBaGxCLEtBQUE7TUFDQXlILGFBQUE7SUFDQTtFQUNBO0VBQ0FxVyxPQUFBO0lBQ0F6VixJQUFBLFdBQUFBLEtBQUE7TUFDQSxVQUFBWixhQUFBLElBQUFkLE1BQUEsQ0FBQWUsU0FBQTtRQUNBLEtBQUFELGFBQUEsT0FBQWQsTUFBQSxDQUFBZSxTQUFBLENBQUFDLEtBQUEsTUFBQThZLEtBQUEsQ0FBQXRaLEtBQUE7TUFDQTtNQUNBLFNBQUFNLGFBQUE7UUFDQSxLQUFBQSxhQUFBLENBQUFZLElBQUE7UUFDQSxLQUFBNGMsY0FBQTtNQUNBO1FBQ0E7UUFDQSxJQUFBdGUsb0NBQUE7VUFDQUEsb0NBQUEsTUFBQThaLEtBQUEsQ0FBQXRaLEtBQUEsRUFBQUEsS0FBQTtVQUNBLEtBQUE4ZCxjQUFBO1FBQ0E7TUFDQTtJQUNBO0lBQ0EvYSxJQUFBLFdBQUFBLEtBQUE7TUFDQSxTQUFBekMsYUFBQTtRQUNBLEtBQUFBLGFBQUEsQ0FBQXlDLElBQUE7TUFDQSxXQUFBdkQsb0NBQUE7UUFDQUEsb0NBQUEsTUFBQThaLEtBQUEsQ0FBQXRaLEtBQUEsRUFBQUEsS0FBQTtNQUNBO0lBQ0E7SUFDQThkLGNBQUEsV0FBQUEsZUFBQTtNQUFBLElBQUFuRyxLQUFBO01BQ0EsVUFBQStGLFdBQUEsVUFBQUMsUUFBQTtRQUNBLEtBQUE5a0IsS0FBQTtRQUNBO01BQ0E7TUFFQSxLQUFBZ2xCLE9BQUE7TUFDQSxLQUFBaGxCLEtBQUE7TUFFQSxJQUFBaUssR0FBQSwrQ0FBQTdDLE1BQUEsQ0FBQThkLGtCQUFBLE1BQUFMLFdBQUEsaUJBQUF6ZCxNQUFBLENBQUE4ZCxrQkFBQSxNQUFBSixRQUFBO01BRUFwYixLQUFBLENBQUFPLEdBQUEsRUFDQW5LLElBQUEsV0FBQXFKLFFBQUE7UUFDQSxLQUFBQSxRQUFBLENBQUFXLEVBQUE7VUFDQSxVQUFBMUosS0FBQTtRQUNBO1FBQ0EsT0FBQStJLFFBQUEsQ0FBQVksSUFBQTtNQUNBLEdBQ0FqSyxJQUFBLFdBQUEyRyxJQUFBO1FBQ0FxWSxLQUFBLENBQUFpRyxTQUFBLEdBQUF0ZSxJQUFBO01BQ0EsV0FDQSxXQUFBekcsS0FBQTtRQUNBOGUsS0FBQSxDQUFBOWUsS0FBQSxHQUFBQSxLQUFBLENBQUFvVyxPQUFBO01BQ0EsYUFDQTtRQUNBMEksS0FBQSxDQUFBa0csT0FBQTtNQUNBO0lBQ0E7SUFDQUcsVUFBQSxXQUFBQSxXQUFBQyxVQUFBO01BQ0EsSUFBQUMsSUFBQSxPQUFBaEQsSUFBQSxDQUFBK0MsVUFBQTtNQUNBLE9BQUFDLElBQUEsQ0FBQUMsa0JBQUE7UUFDQUMsSUFBQTtRQUFBQyxLQUFBO1FBQUFDLEdBQUE7UUFDQUMsSUFBQTtRQUFBQyxNQUFBO1FBQUFDLE1BQUE7TUFDQTtJQUNBO0lBQ0FDLGVBQUEsV0FBQUEsZ0JBQUFDLFFBQUE7TUFDQSxJQUFBN2EsT0FBQTtRQUNBLEtBQUF5WSxLQUFBLFlBQUFvQyxRQUFBLENBQUE1SSxRQUFBO1FBQ0EsS0FBQWhULElBQUE7TUFDQTtJQUNBO0lBQ0E2VyxlQUFBLFdBQUFBLGdCQUFBK0UsUUFBQTtNQUNBLEtBQUFwQyxLQUFBLFlBQUFvQyxRQUFBLENBQUE1SSxRQUFBO0lBQ0E7RUFDQTtFQUNBc0YsT0FBQSxXQUFBQSxRQUFBO0lBQ0E7SUFDQSxJQUFBN2IsTUFBQSxDQUFBZSxTQUFBO01BQ0EsS0FBQUQsYUFBQSxPQUFBZCxNQUFBLENBQUFlLFNBQUEsQ0FBQUMsS0FBQSxNQUFBOFksS0FBQSxDQUFBdFosS0FBQTtRQUNBUyxRQUFBO01BQ0E7SUFDQTtFQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25KRCxJQUFJb1AsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJK08sR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUM1SyxLQUFLLENBQUM2SyxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FDUCxLQUFLLEVBQ0w7SUFBRUMsV0FBVyxFQUFFO0VBQWtCLENBQUMsRUFDbEMsQ0FDRUQsRUFBRSxDQUFDLGlCQUFpQixFQUFFO0lBQUVFLEtBQUssRUFBRTtNQUFFLGNBQWMsRUFBRUgsR0FBRyxDQUFDMVQ7SUFBWTtFQUFFLENBQUMsQ0FBQyxFQUNyRTBULEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVDLFdBQVcsRUFBRTtFQUFrQixDQUFDLEVBQ2xDLENBQ0VELEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQWtCLENBQUMsRUFBRSxDQUM1Q0QsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBMkIsQ0FBQyxFQUFFLENBQ3JERCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUF5QixDQUFDLEVBQUUsQ0FDbkRELEVBQUUsQ0FDQSxRQUFRLEVBQ1I7SUFDRUMsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQ0MsS0FBSyxFQUFFO01BQ0w1bkIsSUFBSSxFQUFFLFFBQVE7TUFDZDhuQixLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RockIsRUFBRSxFQUFFO01BQUVpckIsS0FBSyxFQUFFTixHQUFHLENBQUNqRztJQUFZO0VBQy9CLENBQUMsRUFDRCxDQUFDa0csRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBaUIsQ0FBQyxDQUFDLENBQzdDLENBQUMsRUFDREYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQTJCLENBQUMsQ0FBQyxFQUN0REYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxRQUFRLEVBQ1I7SUFDRUMsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQ0MsS0FBSyxFQUFFO01BQ0w1bkIsSUFBSSxFQUFFLFFBQVE7TUFDZDhuQixLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RockIsRUFBRSxFQUFFO01BQUVpckIsS0FBSyxFQUFFTixHQUFHLENBQUNoRztJQUFVO0VBQzdCLENBQUMsRUFDRCxDQUFDaUcsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBZSxDQUFDLENBQUMsQ0FDM0MsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLEVBQ0ZGLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUEyQixDQUFDLEVBQUUsQ0FDckRGLEdBQUcsQ0FBQzNJLFVBQVUsR0FDVjRJLEVBQUUsQ0FDQSxRQUFRLEVBQ1I7SUFDRUMsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQ0MsS0FBSyxFQUFFO01BQ0w1bkIsSUFBSSxFQUFFLFFBQVE7TUFDZDhuQixLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RockIsRUFBRSxFQUFFO01BQUVpckIsS0FBSyxFQUFFTixHQUFHLENBQUM5RjtJQUFZO0VBQy9CLENBQUMsRUFDRCxDQUNFK0YsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBaUIsQ0FBQyxDQUFDLEVBQzFDRixHQUFHLENBQUNJLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUV2QyxDQUFDLEdBQ0RKLEdBQUcsQ0FBQ08sRUFBRSxDQUFDLENBQUMsRUFDWlAsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQzFULFdBQVcsSUFDZjBULEdBQUcsQ0FBQzFULFdBQVcsQ0FBQ3dTLFdBQVcsSUFDM0JrQixHQUFHLENBQUMxVCxXQUFXLENBQUN5UyxRQUFRLEdBQ3BCa0IsRUFBRSxDQUNBLFFBQVEsRUFDUjtJQUNFQyxXQUFXLEVBQUUsNkJBQTZCO0lBQzFDQyxLQUFLLEVBQUU7TUFDTDVuQixJQUFJLEVBQUUsUUFBUTtNQUNkOG5CLEtBQUssRUFBRTtJQUNULENBQUM7SUFDRGhyQixFQUFFLEVBQUU7TUFBRWlyQixLQUFLLEVBQUVOLEdBQUcsQ0FBQ3ZGO0lBQWM7RUFDakMsQ0FBQyxFQUNELENBQ0V3RixFQUFFLENBQUMsR0FBRyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUFxQixDQUFDLENBQUMsRUFDOUNGLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLCtCQUErQixDQUFDLENBRTNDLENBQUMsR0FDREosR0FBRyxDQUFDTyxFQUFFLENBQUMsQ0FBQyxFQUNaUCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDMUksZUFBZSxDQUFDaGpCLE1BQU0sR0FBRyxDQUFDLEdBQzFCMnJCLEVBQUUsQ0FDQSxRQUFRLEVBQ1I7SUFDRUMsV0FBVyxFQUFFLCtCQUErQjtJQUM1Q0MsS0FBSyxFQUFFO01BQUU1bkIsSUFBSSxFQUFFO0lBQVMsQ0FBQztJQUN6QmxELEVBQUUsRUFBRTtNQUFFaXJCLEtBQUssRUFBRU4sR0FBRyxDQUFDL0Y7SUFBUztFQUM1QixDQUFDLEVBQ0QsQ0FDRWdHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQW1CLENBQUMsQ0FBQyxFQUM1Q0YsR0FBRyxDQUFDSSxFQUFFLENBQUMsbUNBQW1DLENBQUMsQ0FFL0MsQ0FBQyxHQUNESixHQUFHLENBQUNPLEVBQUUsQ0FBQyxDQUFDLENBQ2IsQ0FBQyxDQUNILENBQUMsRUFDRlAsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxXQUFXLEVBQ1g7SUFDRUMsV0FBVyxFQUFFLGdCQUFnQjtJQUM3QkMsS0FBSyxFQUFFO01BQ0x0aUIsTUFBTSxFQUFFLDJCQUEyQjtNQUNuQzJpQixLQUFLLEVBQUUsU0FBUztNQUNoQixhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNEbnJCLEVBQUUsRUFBRTtNQUFFb3JCLE1BQU0sRUFBRVQsR0FBRyxDQUFDaEk7SUFBUyxDQUFDO0lBQzVCMEksS0FBSyxFQUFFO01BQ0xqckIsS0FBSyxFQUFFdXFCLEdBQUcsQ0FBQzFJLGVBQWU7TUFDMUJuUyxRQUFRLEVBQUUsU0FBQUEsU0FBVXdiLEdBQUcsRUFBRTtRQUN2QlgsR0FBRyxDQUFDMUksZUFBZSxHQUFHcUosR0FBRztNQUMzQixDQUFDO01BQ0RDLFVBQVUsRUFBRTtJQUNkO0VBQ0YsQ0FBQyxFQUNELENBQ0VaLEdBQUcsQ0FBQ2EsRUFBRSxDQUFDYixHQUFHLENBQUMxSSxlQUFlLEVBQUUsVUFBVTFSLE9BQU8sRUFBRXBRLEtBQUssRUFBRTtJQUNwRCxPQUFPeXFCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtNQUMzQnhwQixHQUFHLEVBQUVtUCxPQUFPLENBQUNqUSxFQUFFO01BQ2Z3cUIsS0FBSyxFQUFFO1FBQ0x2YSxPQUFPLEVBQUVBLE9BQU87UUFDaEJmLFFBQVEsRUFBRW1iLEdBQUcsQ0FBQ25iLFFBQVE7UUFDdEIsY0FBYyxFQUFFbWIsR0FBRyxDQUFDMVQsV0FBVztRQUMvQixrQkFBa0IsRUFBRTBULEdBQUcsQ0FBQzFJLGVBQWU7UUFDdkM5aEIsS0FBSyxFQUFFQTtNQUNULENBQUM7TUFDREgsRUFBRSxFQUFFO1FBQ0Z5ckIsY0FBYyxFQUFFZCxHQUFHLENBQUMvSCxpQkFBaUI7UUFDckM4SSxpQkFBaUIsRUFBRWYsR0FBRyxDQUFDdkgsZUFBZTtRQUN0Q3VJLGdCQUFnQixFQUFFaEIsR0FBRyxDQUFDckgsZUFBZTtRQUNyQ3NJLGFBQWEsRUFBRWpCLEdBQUcsQ0FBQ3BILFdBQVc7UUFDOUJzSSxZQUFZLEVBQUVsQixHQUFHLENBQUNsSCxXQUFXO1FBQzdCOEUsU0FBUyxFQUFFb0MsR0FBRyxDQUFDdkcsZ0JBQWdCO1FBQy9CdkIsTUFBTSxFQUFFLFNBQUFBLE9BQVVpSixNQUFNLEVBQUU7VUFDeEIsT0FBT25CLEdBQUcsQ0FBQzlILE1BQU0sQ0FBQzFpQixLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNENGlCLFFBQVEsRUFBRSxTQUFBQSxTQUFVK0ksTUFBTSxFQUFFO1VBQzFCLE9BQU9uQixHQUFHLENBQUM1SCxRQUFRLENBQUM1aUIsS0FBSyxDQUFDO1FBQzVCO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsRUFDRndxQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDMUksZUFBZSxDQUFDaGpCLE1BQU0sS0FBSyxDQUFDLEdBQzVCMnJCLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFDRUMsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQ0MsS0FBSyxFQUFFO01BQUVpQixJQUFJLEVBQUU7SUFBUyxDQUFDO0lBQ3pCQSxJQUFJLEVBQUU7RUFDUixDQUFDLEVBQ0QsQ0FDRW5CLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQXlCLENBQUMsRUFBRSxDQUNuREQsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBOEIsQ0FBQyxDQUFDLEVBQ3ZERixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUNORCxHQUFHLENBQUNJLEVBQUUsQ0FDSiwyRUFDRixDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsQ0FFTixDQUFDLEdBQ0RKLEdBQUcsQ0FBQ08sRUFBRSxDQUFDLENBQUMsQ0FDYixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RQLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSixHQUFHLENBQUMxVCxXQUFXLElBQUkwVCxHQUFHLENBQUMxVCxXQUFXLENBQUN3UyxXQUFXLElBQUlrQixHQUFHLENBQUMxVCxXQUFXLENBQUN5UyxRQUFRLEdBQ3RFa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFO0lBQ3BCb0IsR0FBRyxFQUFFLGdCQUFnQjtJQUNyQmxCLEtBQUssRUFBRTtNQUNMLGNBQWMsRUFBRUgsR0FBRyxDQUFDMVQsV0FBVyxDQUFDd1MsV0FBVztNQUMzQyxXQUFXLEVBQUVrQixHQUFHLENBQUMxVCxXQUFXLENBQUN5UztJQUMvQixDQUFDO0lBQ0QxcEIsRUFBRSxFQUFFO01BQUVpc0IsT0FBTyxFQUFFdEIsR0FBRyxDQUFDcEYsZUFBZTtNQUFFMkcsT0FBTyxFQUFFdkIsR0FBRyxDQUFDaEY7SUFBZ0I7RUFDbkUsQ0FBQyxDQUFDLEdBQ0ZnRixHQUFHLENBQUNPLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUM7QUFDSCxDQUFDO0FBQ0QsSUFBSWlCLGVBQWUsR0FBRyxFQUFFO0FBQ3hCdlEsTUFBTSxDQUFDd1EsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0wzQixJQUFJeFEsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJK08sR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUM1SyxLQUFLLENBQUM2SyxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FDUCxLQUFLLEVBQ0w7SUFDRUMsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixTQUFPO01BQUUsMEJBQTBCLEVBQUUsQ0FBQ0YsR0FBRyxDQUFDcGEsT0FBTyxDQUFDaVQ7SUFBUTtFQUM1RCxDQUFDLEVBQ0QsQ0FDRW9ILEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQTJCLENBQUMsRUFBRSxDQUNyREQsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBaUMsQ0FBQyxFQUFFLENBQzNERixHQUFHLENBQUMwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ1QxQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBMEIsQ0FBQyxFQUFFLENBQ3BERCxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUF3QixDQUFDLEVBQUUsQ0FDbkRGLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDSixHQUFHLENBQUMyQixFQUFFLENBQUMzQixHQUFHLENBQUN4cUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzlCLENBQUMsRUFDRndxQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUNOQyxXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFNBQU9GLEdBQUcsQ0FBQ3BhLE9BQU8sQ0FBQ2dFLElBQUksSUFBSSxTQUFTO0lBQ3BDZ1ksV0FBVyxFQUFFO01BQUUsY0FBYyxFQUFFO0lBQU07RUFDdkMsQ0FBQyxDQUFDLEVBQ0Y1QixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDOUMsYUFBYSxHQUNiK0MsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBK0IsQ0FBQyxFQUFFLENBQ3pERCxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ1Y0QixVQUFVLEVBQUUsQ0FDVjtNQUNFcGxCLElBQUksRUFBRSxPQUFPO01BQ2JxbEIsT0FBTyxFQUFFLFNBQVM7TUFDbEJyc0IsS0FBSyxFQUFFdXFCLEdBQUcsQ0FBQ3BhLE9BQU8sQ0FBQ25KLElBQUk7TUFDdkJta0IsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUNGO0lBQ0RTLEdBQUcsRUFBRSxXQUFXO0lBQ2hCbkIsV0FBVyxFQUFFLDhCQUE4QjtJQUMzQ0MsS0FBSyxFQUFFO01BQUU1bkIsSUFBSSxFQUFFO0lBQU8sQ0FBQztJQUN2QndwQixRQUFRLEVBQUU7TUFBRXRzQixLQUFLLEVBQUV1cUIsR0FBRyxDQUFDcGEsT0FBTyxDQUFDbko7SUFBSyxDQUFDO0lBQ3JDcEgsRUFBRSxFQUFFO01BQ0Yyc0IsSUFBSSxFQUFFaEMsR0FBRyxDQUFDdkMsZUFBZTtNQUN6QndFLE9BQU8sRUFBRSxTQUFBQSxRQUFVZCxNQUFNLEVBQUU7UUFDekIsSUFDRSxDQUFDQSxNQUFNLENBQUM1b0IsSUFBSSxDQUFDZ1EsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUMzQnlYLEdBQUcsQ0FBQ2tDLEVBQUUsQ0FDSmYsTUFBTSxDQUFDZ0IsT0FBTyxFQUNkLE9BQU8sRUFDUCxFQUFFLEVBQ0ZoQixNQUFNLENBQUMxcUIsR0FBRyxFQUNWLE9BQ0YsQ0FBQyxFQUVELE9BQU8sSUFBSTtRQUNiMHFCLE1BQU0sQ0FBQzNnQixjQUFjLENBQUMsQ0FBQztRQUN2QixPQUFPd2YsR0FBRyxDQUFDdkMsZUFBZSxDQUFDMWUsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUyxDQUFDO01BQ25ELENBQUM7TUFDRGdCLEtBQUssRUFBRSxTQUFBQSxNQUFVcWhCLE1BQU0sRUFBRTtRQUN2QixJQUFJQSxNQUFNLENBQUMvaEIsTUFBTSxDQUFDZ2pCLFNBQVMsRUFBRTtRQUM3QnBDLEdBQUcsQ0FBQ3hILElBQUksQ0FBQ3dILEdBQUcsQ0FBQ3BhLE9BQU8sRUFBRSxNQUFNLEVBQUV1YixNQUFNLENBQUMvaEIsTUFBTSxDQUFDM0osS0FBSyxDQUFDO01BQ3BEO0lBQ0Y7RUFDRixDQUFDLENBQUMsQ0FDSCxDQUFDLEdBQ0Z3cUIsRUFBRSxDQUNBLFFBQVEsRUFDUjtJQUNFRSxLQUFLLEVBQUU7TUFBRUUsS0FBSyxFQUFFO0lBQStCLENBQUM7SUFDaERockIsRUFBRSxFQUFFO01BQUVndEIsUUFBUSxFQUFFckMsR0FBRyxDQUFDekM7SUFBaUI7RUFDdkMsQ0FBQyxFQUNELENBQ0V5QyxHQUFHLENBQUNJLEVBQUUsQ0FDSix3QkFBd0IsR0FDdEJKLEdBQUcsQ0FBQzJCLEVBQUUsQ0FBQzNCLEdBQUcsQ0FBQ3BhLE9BQU8sQ0FBQ25KLElBQUksQ0FBQyxHQUN4Qix3QkFDSixDQUFDLEVBQ0R3akIsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUNOQyxXQUFXLEVBQUUsOEJBQThCO0lBQzNDMEIsV0FBVyxFQUFFO01BQUUsV0FBVyxFQUFFLE9BQU87TUFBRVUsT0FBTyxFQUFFO0lBQU07RUFDdEQsQ0FBQyxDQUFDLENBRU4sQ0FBQyxDQUNOLENBQUMsQ0FDSCxDQUFDLEVBQ0Z0QyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBNEIsQ0FBQyxFQUFFLENBQ3RERixHQUFHLENBQUMxYSxJQUFJLEdBQ0oyYSxFQUFFLENBQ0EsUUFBUSxFQUNSO0lBQ0VDLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkNDLEtBQUssRUFBRTtNQUFFRSxLQUFLLEVBQUVMLEdBQUcsQ0FBQ3RILFdBQVcsR0FBRyxTQUFTLEdBQUc7SUFBUyxDQUFDO0lBQ3hEcmpCLEVBQUUsRUFBRTtNQUNGaXJCLEtBQUssRUFBRSxTQUFBQSxNQUFVYSxNQUFNLEVBQUU7UUFDdkJBLE1BQU0sQ0FBQzNnQixjQUFjLENBQUMsQ0FBQztRQUN2QixPQUFPd2YsR0FBRyxDQUFDbkMsVUFBVSxDQUFDOWUsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUyxDQUFDO01BQzlDO0lBQ0Y7RUFDRixDQUFDLEVBQ0QsQ0FDRW1oQixFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ04sU0FBT0QsR0FBRyxDQUFDdEgsV0FBVyxHQUNsQixvQkFBb0IsR0FDcEI7RUFDTixDQUFDLENBQUMsQ0FFTixDQUFDLEdBQ0RzSCxHQUFHLENBQUNPLEVBQUUsQ0FBQyxDQUFDLEVBQ1pQLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsUUFBUSxFQUNSO0lBQ0VDLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkNDLEtBQUssRUFBRTtNQUFFRSxLQUFLLEVBQUU7SUFBWSxDQUFDO0lBQzdCaHJCLEVBQUUsRUFBRTtNQUNGaXJCLEtBQUssRUFBRSxTQUFBQSxNQUFVYSxNQUFNLEVBQUU7UUFDdkJBLE1BQU0sQ0FBQzNnQixjQUFjLENBQUMsQ0FBQztRQUN2QixPQUFPd2YsR0FBRyxDQUFDcEMsU0FBUyxDQUFDN2UsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUyxDQUFDO01BQzdDO0lBQ0Y7RUFDRixDQUFDLEVBQ0QsQ0FBQ21oQixFQUFFLENBQUMsR0FBRyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUFhLENBQUMsQ0FBQyxDQUN6QyxDQUFDLEVBQ0RGLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsUUFBUSxFQUNSO0lBQ0VDLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkNDLEtBQUssRUFBRTtNQUFFRSxLQUFLLEVBQUVMLEdBQUcsQ0FBQ3BhLE9BQU8sQ0FBQ2lULE9BQU8sR0FBRyxTQUFTLEdBQUc7SUFBVyxDQUFDO0lBQzlEeGpCLEVBQUUsRUFBRTtNQUNGaXJCLEtBQUssRUFBRSxTQUFBQSxNQUFVYSxNQUFNLEVBQUU7UUFDdkJBLE1BQU0sQ0FBQzNnQixjQUFjLENBQUMsQ0FBQztRQUN2QixPQUFPd2YsR0FBRyxDQUFDakMsZ0JBQWdCLENBQUNoZixLQUFLLENBQUMsSUFBSSxFQUFFRCxTQUFTLENBQUM7TUFDcEQ7SUFDRjtFQUNGLENBQUMsRUFDRCxDQUNFbWhCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDTixTQUFPRCxHQUFHLENBQUNwYSxPQUFPLENBQUNpVCxPQUFPLEdBQUcsV0FBVyxHQUFHO0VBQzdDLENBQUMsQ0FBQyxDQUVOLENBQUMsRUFDRG1ILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsUUFBUSxFQUNSO0lBQ0VDLFdBQVcsRUFBRSx1QkFBdUI7SUFDcENDLEtBQUssRUFBRTtNQUFFRSxLQUFLLEVBQUU7SUFBWSxDQUFDO0lBQzdCaHJCLEVBQUUsRUFBRTtNQUNGaXJCLEtBQUssRUFBRSxTQUFBQSxNQUFVYSxNQUFNLEVBQUU7UUFDdkJBLE1BQU0sQ0FBQzNnQixjQUFjLENBQUMsQ0FBQztRQUN2QixPQUFPd2YsR0FBRyxDQUFDaGUsTUFBTSxDQUFDakQsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUyxDQUFDO01BQzFDO0lBQ0Y7RUFDRixDQUFDLEVBQ0QsQ0FBQ21oQixFQUFFLENBQUMsR0FBRyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUFjLENBQUMsQ0FBQyxDQUMxQyxDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsRUFDRkYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDVkUsS0FBSyxFQUFFO01BQUU1bkIsSUFBSSxFQUFFLFFBQVE7TUFBRWtFLElBQUksRUFBRXVqQixHQUFHLENBQUM1QztJQUFrQixDQUFDO0lBQ3REMkUsUUFBUSxFQUFFO01BQUV0c0IsS0FBSyxFQUFFdXFCLEdBQUcsQ0FBQ3BhLE9BQU8sQ0FBQ29MO0lBQVM7RUFDMUMsQ0FBQyxDQUFDLEVBQ0ZnUCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNWRSxLQUFLLEVBQUU7TUFBRTVuQixJQUFJLEVBQUUsUUFBUTtNQUFFa0UsSUFBSSxFQUFFdWpCLEdBQUcsQ0FBQzNDO0lBQWlCLENBQUM7SUFDckQwRSxRQUFRLEVBQUU7TUFBRXRzQixLQUFLLEVBQUV1cUIsR0FBRyxDQUFDcGEsT0FBTyxDQUFDaVQsT0FBTyxHQUFHLENBQUMsR0FBRztJQUFFO0VBQ2pELENBQUMsQ0FBQyxFQUNGbUgsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDVkUsS0FBSyxFQUFFO01BQUU1bkIsSUFBSSxFQUFFLFFBQVE7TUFBRWtFLElBQUksRUFBRXVqQixHQUFHLENBQUMxQztJQUFjLENBQUM7SUFDbER5RSxRQUFRLEVBQUU7TUFBRXRzQixLQUFLLEVBQUV1cUIsR0FBRyxDQUFDcGEsT0FBTyxDQUFDbko7SUFBSztFQUN0QyxDQUFDLENBQUMsRUFDRnVqQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLFlBQVksRUFBRTtJQUFFRSxLQUFLLEVBQUU7TUFBRTFqQixJQUFJLEVBQUU7SUFBUTtFQUFFLENBQUMsRUFBRSxDQUM3Q3VqQixHQUFHLENBQUMxYSxJQUFJLEdBQ0oyYSxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQ0U0QixVQUFVLEVBQUUsQ0FDVjtNQUNFcGxCLElBQUksRUFBRSxNQUFNO01BQ1pxbEIsT0FBTyxFQUFFLFFBQVE7TUFDakJyc0IsS0FBSyxFQUFFdXFCLEdBQUcsQ0FBQ3RILFdBQVc7TUFDdEJrSSxVQUFVLEVBQUU7SUFDZCxDQUFDLENBQ0Y7SUFDRFYsV0FBVyxFQUFFO0VBQ2YsQ0FBQyxFQUNELENBQ0VELEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFDUm9CLEdBQUcsRUFBRSxhQUFhO0lBQ2xCbkIsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQzZCLFFBQVEsRUFBRTtNQUFFUSxTQUFTLEVBQUV2QyxHQUFHLENBQUMyQixFQUFFLENBQUMzQixHQUFHLENBQUMxYSxJQUFJO0lBQUU7RUFDMUMsQ0FBQyxDQUFDLENBRU4sQ0FBQyxHQUNEMGEsR0FBRyxDQUFDTyxFQUFFLENBQUMsQ0FBQyxDQUNiLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQztBQUNILENBQUM7QUFDRCxJQUFJaUIsZUFBZSxHQUFHLENBQ3BCLFlBQVk7RUFDVixJQUFJeEIsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUM1SyxLQUFLLENBQUM2SyxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FDUCxLQUFLLEVBQ0w7SUFBRUMsV0FBVyxFQUFFLDBCQUEwQjtJQUFFQyxLQUFLLEVBQUU7TUFBRUUsS0FBSyxFQUFFO0lBQVc7RUFBRSxDQUFDLEVBQ3pFLENBQUNKLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQXNCLENBQUMsQ0FBQyxDQUNsRCxDQUFDO0FBQ0gsQ0FBQyxDQUNGO0FBQ0RqUCxNQUFNLENBQUN3USxhQUFhLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TjNCLElBQUl4USxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUkrTyxHQUFHLEdBQUcsSUFBSTtJQUNaQyxFQUFFLEdBQUdELEdBQUcsQ0FBQzVLLEtBQUssQ0FBQzZLLEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBa0IsQ0FBQyxFQUFFLENBQ25ERCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUEwQixDQUFDLEVBQUUsQ0FDcERELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FDUkEsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNWNEIsVUFBVSxFQUFFLENBQ1Y7TUFDRXBsQixJQUFJLEVBQUUsT0FBTztNQUNicWxCLE9BQU8sRUFBRSxTQUFTO01BQ2xCcnNCLEtBQUssRUFBRXVxQixHQUFHLENBQUNoQyxXQUFXO01BQ3RCNEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUNGO0lBQ0RWLFdBQVcsRUFBRSw4QkFBOEI7SUFDM0NDLEtBQUssRUFBRTtNQUFFNW5CLElBQUksRUFBRSxNQUFNO01BQUU4UCxXQUFXLEVBQUU7SUFBZ0IsQ0FBQztJQUNyRDBaLFFBQVEsRUFBRTtNQUFFdHNCLEtBQUssRUFBRXVxQixHQUFHLENBQUNoQztJQUFZLENBQUM7SUFDcEMzb0IsRUFBRSxFQUFFO01BQ0Z5SyxLQUFLLEVBQUUsU0FBQUEsTUFBVXFoQixNQUFNLEVBQUU7UUFDdkIsSUFBSUEsTUFBTSxDQUFDL2hCLE1BQU0sQ0FBQ2dqQixTQUFTLEVBQUU7UUFDN0JwQyxHQUFHLENBQUNoQyxXQUFXLEdBQUdtRCxNQUFNLENBQUMvaEIsTUFBTSxDQUFDM0osS0FBSztNQUN2QztJQUNGO0VBQ0YsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUNILENBQUMsRUFDRnVxQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFQyxXQUFXLEVBQUU7RUFBMkIsQ0FBQyxFQUMzQ0YsR0FBRyxDQUFDYSxFQUFFLENBQUNiLEdBQUcsQ0FBQzNCLGVBQWUsRUFBRSxVQUFVbEgsUUFBUSxFQUFFN0MsUUFBUSxFQUFFO0lBQ3hELE9BQU8yTCxFQUFFLENBQ1AsS0FBSyxFQUNMO01BQUV4cEIsR0FBRyxFQUFFNmQsUUFBUTtNQUFFNEwsV0FBVyxFQUFFO0lBQWlDLENBQUMsRUFDaEUsQ0FDRUQsRUFBRSxDQUNBLEtBQUssRUFDTDtNQUNFQyxXQUFXLEVBQ1QsdUhBQXVIO01BQ3pIMEIsV0FBVyxFQUFFO1FBQUVZLE1BQU0sRUFBRTtNQUFVLENBQUM7TUFDbENudEIsRUFBRSxFQUFFO1FBQ0ZpckIsS0FBSyxFQUFFLFNBQUFBLE1BQVVhLE1BQU0sRUFBRTtVQUN2QixPQUFPbkIsR0FBRyxDQUFDcEIsY0FBYyxDQUFDdEssUUFBUSxDQUFDO1FBQ3JDO01BQ0Y7SUFDRixDQUFDLEVBQ0QsQ0FDRTJMLEVBQUUsQ0FDQSxNQUFNLEVBQ047TUFBRUMsV0FBVyxFQUFFO0lBQTBDLENBQUMsRUFDMUQsQ0FBQ0YsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQzJCLEVBQUUsQ0FBQ3JOLFFBQVEsQ0FBQyxDQUFDLENBQzNCLENBQUMsRUFDRDBMLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsR0FBRyxFQUFFO01BQ05DLFdBQVcsRUFBRSxxQkFBcUI7TUFDbEMsU0FBT0YsR0FBRyxDQUFDL0IsbUJBQW1CLENBQUMzSixRQUFRLENBQUMsR0FDcEMsa0JBQWtCLEdBQ2xCO0lBQ04sQ0FBQyxDQUFDLENBRU4sQ0FBQyxFQUNEMEwsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxXQUFXLEVBQ1g7TUFDRTRCLFVBQVUsRUFBRSxDQUNWO1FBQ0VwbEIsSUFBSSxFQUFFLE1BQU07UUFDWnFsQixPQUFPLEVBQUUsUUFBUTtRQUNqQnJzQixLQUFLLEVBQUUsQ0FBQ3VxQixHQUFHLENBQUMvQixtQkFBbUIsQ0FBQzNKLFFBQVEsQ0FBQztRQUN6Q3NNLFVBQVUsRUFBRTtNQUNkLENBQUMsQ0FDRjtNQUNEVixXQUFXLEVBQUUsMEJBQTBCO01BQ3ZDQyxLQUFLLEVBQUU7UUFDTHNDLElBQUksRUFBRXRMLFFBQVE7UUFDZHFKLEtBQUssRUFBRTtVQUFFL2pCLElBQUksRUFBRSxTQUFTO1VBQUVpbUIsSUFBSSxFQUFFLE9BQU87VUFBRUMsR0FBRyxFQUFFO1FBQU0sQ0FBQztRQUNyREMsS0FBSyxFQUFFNUMsR0FBRyxDQUFDbkIsWUFBWTtRQUN2QkosSUFBSSxFQUFFO01BQ1I7SUFDRixDQUFDLEVBQ0R1QixHQUFHLENBQUNhLEVBQUUsQ0FBQzFKLFFBQVEsRUFBRSxVQUFVdlIsT0FBTyxFQUFFO01BQ2xDLE9BQU9xYSxFQUFFLENBQ1AsS0FBSyxFQUNMO1FBQ0V4cEIsR0FBRyxFQUFFbVAsT0FBTyxDQUFDb0wsUUFBUTtRQUNyQmtQLFdBQVcsRUFBRTtNQUNmLENBQUMsRUFDRCxDQUNFRCxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQUVDLFdBQVcsRUFBRTtNQUE2QixDQUFDLEVBQUUsQ0FDdkRELEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDTkMsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBT3RhLE9BQU8sQ0FBQ2dFLElBQUksSUFBSTtNQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDLEVBQ0ZvVyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUFFQyxXQUFXLEVBQUU7TUFBOEIsQ0FBQyxFQUFFLENBQ3pERixHQUFHLENBQUNJLEVBQUUsQ0FBQ0osR0FBRyxDQUFDMkIsRUFBRSxDQUFDL2IsT0FBTyxDQUFDbkosSUFBSSxDQUFDLENBQUMsQ0FDN0IsQ0FBQyxDQUVOLENBQUM7SUFDSCxDQUFDLENBQUMsRUFDRixDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQztFQUNILENBQUMsQ0FBQyxFQUNGLENBQ0YsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsSUFBSStrQixlQUFlLEdBQUcsRUFBRTtBQUN4QnZRLE1BQU0sQ0FBQ3dRLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25IM0IsSUFBSXhRLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSStPLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDNUssS0FBSyxDQUFDNkssRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQ1AsS0FBSyxFQUNMO0lBQ0VvQixHQUFHLEVBQUUsT0FBTztJQUNabkIsV0FBVyxFQUFFLFlBQVk7SUFDekJDLEtBQUssRUFBRTtNQUNMeHFCLEVBQUUsRUFBRSxnQkFBZ0I7TUFDcEJrdEIsUUFBUSxFQUFFLElBQUk7TUFDZEMsSUFBSSxFQUFFLFFBQVE7TUFDZCxhQUFhLEVBQUU7SUFDakI7RUFDRixDQUFDLEVBQ0QsQ0FDRTdDLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUMsV0FBVyxFQUFFLHVCQUF1QjtJQUFFQyxLQUFLLEVBQUU7TUFBRTJDLElBQUksRUFBRTtJQUFXO0VBQUUsQ0FBQyxFQUNyRSxDQUNFN0MsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBZ0IsQ0FBQyxFQUFFLENBQzFDRixHQUFHLENBQUMwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ1QxQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBYSxDQUFDLEVBQUUsQ0FDdkNGLEdBQUcsQ0FBQ2YsT0FBTyxHQUNQZ0IsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBbUIsQ0FBQyxFQUFFLENBQzdDRCxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ05DLFdBQVcsRUFBRTtFQUNmLENBQUMsQ0FBQyxFQUNGRixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBa0IsQ0FBQyxFQUFFLENBQzFDRixHQUFHLENBQUNJLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxDQUN4QyxDQUFDLENBQ0gsQ0FBQyxHQUNGSixHQUFHLENBQUMvbEIsS0FBSyxHQUNUZ21CLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQXFCLENBQUMsRUFBRSxDQUMvQ0YsR0FBRyxDQUFDSSxFQUFFLENBQ0osd0JBQXdCLEdBQ3RCSixHQUFHLENBQUMyQixFQUFFLENBQUMzQixHQUFHLENBQUMvbEIsS0FBSyxDQUFDLEdBQ2pCLG9CQUNKLENBQUMsQ0FDRixDQUFDLEdBQ0YrbEIsR0FBRyxDQUFDaEIsU0FBUyxDQUFDMXFCLE1BQU0sS0FBSyxDQUFDLEdBQzFCMnJCLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQThCLENBQUMsRUFBRSxDQUN4REQsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBNEIsQ0FBQyxDQUFDLEVBQ3JERixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUNORCxHQUFHLENBQUNJLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUNuRCxDQUFDLENBQ0gsQ0FBQyxHQUNGSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVDLFdBQVcsRUFBRTtFQUFhLENBQUMsRUFDN0JGLEdBQUcsQ0FBQ2EsRUFBRSxDQUFDYixHQUFHLENBQUNoQixTQUFTLEVBQUUsVUFBVWUsUUFBUSxFQUFFO0lBQ3hDLE9BQU9FLEVBQUUsQ0FDUCxLQUFLLEVBQ0w7TUFDRXhwQixHQUFHLEVBQUVzcEIsUUFBUSxDQUFDcHFCLEVBQUU7TUFDaEJ1cUIsV0FBVyxFQUNUO0lBQ0osQ0FBQyxFQUNELENBQ0VELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FDUkEsRUFBRSxDQUFDLElBQUksRUFBRTtNQUFFQyxXQUFXLEVBQUU7SUFBTyxDQUFDLEVBQUUsQ0FDaENELEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFDTkMsV0FBVyxFQUNUO0lBQ0osQ0FBQyxDQUFDLEVBQ0ZGLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLEdBQUcsR0FBR0osR0FBRyxDQUFDMkIsRUFBRSxDQUFDM0IsR0FBRyxDQUFDWixVQUFVLENBQUNXLFFBQVEsQ0FBQ2dELFNBQVMsQ0FBQyxDQUNqRCxDQUFDLENBQ0YsQ0FBQyxFQUNGL0MsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBRUMsV0FBVyxFQUFFO0lBQWEsQ0FBQyxFQUFFLENBQ3pDRCxFQUFFLENBQUMsR0FBRyxFQUFFO01BQUVDLFdBQVcsRUFBRTtJQUFrQixDQUFDLENBQUMsRUFDM0NGLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsR0FBR0osR0FBRyxDQUFDMkIsRUFBRSxDQUFDNUIsUUFBUSxDQUFDaUQsTUFBTSxDQUFDLENBQUMsQ0FDdEMsQ0FBQyxDQUNILENBQUMsRUFDRmhELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO01BQUVDLFdBQVcsRUFBRTtJQUFlLENBQUMsRUFBRSxDQUN6Q0QsRUFBRSxDQUNBLFFBQVEsRUFDUjtNQUNFQyxXQUFXLEVBQUUsa0NBQWtDO01BQy9DQyxLQUFLLEVBQUU7UUFBRTVuQixJQUFJLEVBQUU7TUFBUyxDQUFDO01BQ3pCbEQsRUFBRSxFQUFFO1FBQ0ZpckIsS0FBSyxFQUFFLFNBQUFBLE1BQVVhLE1BQU0sRUFBRTtVQUN2QkEsTUFBTSxDQUFDM2dCLGNBQWMsQ0FBQyxDQUFDO1VBQ3ZCLE9BQU93ZixHQUFHLENBQUNoRixlQUFlLENBQUMrRSxRQUFRLENBQUM7UUFDdEM7TUFDRjtJQUNGLENBQUMsRUFDRCxDQUNFRSxFQUFFLENBQUMsR0FBRyxFQUFFO01BQUVDLFdBQVcsRUFBRTtJQUFpQixDQUFDLENBQUMsRUFDMUNGLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLDhDQUNGLENBQUMsQ0FFTCxDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsUUFBUSxFQUNSO01BQ0VDLFdBQVcsRUFBRSxnQ0FBZ0M7TUFDN0NDLEtBQUssRUFBRTtRQUFFNW5CLElBQUksRUFBRTtNQUFTLENBQUM7TUFDekJsRCxFQUFFLEVBQUU7UUFDRmlyQixLQUFLLEVBQUUsU0FBQUEsTUFBVWEsTUFBTSxFQUFFO1VBQ3ZCQSxNQUFNLENBQUMzZ0IsY0FBYyxDQUFDLENBQUM7VUFDdkIsT0FBT3dmLEdBQUcsQ0FBQ0YsZUFBZSxDQUFDQyxRQUFRLENBQUM7UUFDdEM7TUFDRjtJQUNGLENBQUMsRUFDRCxDQUNFRSxFQUFFLENBQUMsR0FBRyxFQUFFO01BQUVDLFdBQVcsRUFBRTtJQUFrQixDQUFDLENBQUMsRUFDM0NGLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLDBDQUNGLENBQUMsQ0FFTCxDQUFDLENBQ0YsQ0FBQyxDQUVOLENBQUM7RUFDSCxDQUFDLENBQUMsRUFDRixDQUNGLENBQUMsQ0FDTixDQUFDLEVBQ0ZKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSixHQUFHLENBQUMwQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1YsQ0FBQyxDQUVOLENBQUMsQ0FFTCxDQUFDO0FBQ0gsQ0FBQztBQUNELElBQUlGLGVBQWUsR0FBRyxDQUNwQixZQUFZO0VBQ1YsSUFBSXhCLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDNUssS0FBSyxDQUFDNkssRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUFlLENBQUMsRUFBRSxDQUNoREQsRUFBRSxDQUFDLElBQUksRUFBRTtJQUFFQyxXQUFXLEVBQUU7RUFBYyxDQUFDLEVBQUUsQ0FDdkNELEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQXFCLENBQUMsQ0FBQyxFQUM5Q0YsR0FBRyxDQUFDSSxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FDcEMsQ0FBQyxFQUNGSixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNYQyxXQUFXLEVBQUUsV0FBVztJQUN4QkMsS0FBSyxFQUFFO01BQ0w1bkIsSUFBSSxFQUFFLFFBQVE7TUFDZCxpQkFBaUIsRUFBRSxPQUFPO01BQzFCLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDLEVBQ0QsWUFBWTtFQUNWLElBQUl5bkIsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUM1SyxLQUFLLENBQUM2SyxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsV0FBVyxFQUFFO0VBQWUsQ0FBQyxFQUFFLENBQ2hERCxFQUFFLENBQ0EsUUFBUSxFQUNSO0lBQ0VDLFdBQVcsRUFBRSxtQkFBbUI7SUFDaENDLEtBQUssRUFBRTtNQUFFNW5CLElBQUksRUFBRSxRQUFRO01BQUUsaUJBQWlCLEVBQUU7SUFBUTtFQUN0RCxDQUFDLEVBQ0QsQ0FBQ3luQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FDbkIsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQ0Y7QUFDRG5QLE1BQU0sQ0FBQ3dRLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SzNCLElBQU13QixPQUFPLEdBQUdDLG1CQUFPLENBQUMsa0RBQVMsQ0FBQztBQUNsQ0QsT0FBTyxDQUFDRSxNQUFNLENBQUM7RUFDWDl1QixDQUFDLEVBQUUsRUFBRTtFQUNMLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQK3VCLENBQUMsRUFBRSxFQUFFO0VBQ0xDLENBQUMsRUFBRSxFQUFFO0VBQ0wsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxDQUFDO0FBQUMsSUFFR0MsT0FBTztFQUFBOztFQUNULFNBQUFBLFFBQVlwUyxLQUFLLEVBQUU7SUFBQWxTLGVBQUEsT0FBQXNrQixPQUFBO0lBQ2YsSUFBSSxDQUFDcFMsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ3FTLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUN0UyxLQUFLLENBQUN1UyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUUvQyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUN2UyxLQUFLLENBQUN6YixLQUFLLEVBQUU7TUFDekIsSUFBSSxDQUFDaXVCLFdBQVcsR0FBRyxFQUFFO01BQ3JCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbEIsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNGLFdBQVcsR0FBRyxJQUFJLENBQUN4UyxLQUFLLENBQUN6YixLQUFLO0lBQ3ZDO0lBRUEsSUFBSSxDQUFDb3VCLGdCQUFnQixDQUFDLENBQUM7RUFDM0I7RUFBQ3JrQixZQUFBLENBQUE4akIsT0FBQTtJQUFBN3NCLEdBQUE7SUFBQWhCLEtBQUEsRUFFRCxTQUFBOHRCLGlCQUFBLEVBQW1CO01BQ2YsSUFBTTlXLFVBQVUsR0FBRzVJLElBQUksQ0FBQ2dXLEtBQUssQ0FBQyxJQUFJLENBQUMzSSxLQUFLLENBQUM0UyxPQUFPLENBQUMxa0IsTUFBTSxDQUFDO01BQ3hELElBQUksQ0FBQzJrQixPQUFPLEdBQUcsRUFBRTtNQUFDLElBQUF0ZCxTQUFBLEdBQUFDLDBCQUFBLENBRUMrRixVQUFVO1FBQUE5RixLQUFBO01BQUE7UUFBN0IsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFoTSxJQUFBLEdBQStCO1VBQUEsSUFBcEI0QixJQUFJLEdBQUFrSyxLQUFBLENBQUFsUixLQUFBO1VBQ1gsSUFBTTJKLE1BQU0sR0FBR2tCLFFBQVEsQ0FBQ21CLGNBQWMsQ0FBQ2hGLElBQUksQ0FBQztVQUU1QyxJQUFJLElBQUksS0FBSzJDLE1BQU0sRUFBRTtZQUNqQixtREFBQWlDLE1BQUEsQ0FBa0Q1RSxJQUFJO1VBQzFEO1VBRUEsSUFBSSxDQUFDc25CLE9BQU8sQ0FBQ2xvQixJQUFJLENBQUN1RCxNQUFNLENBQUM7UUFDN0I7TUFBQyxTQUFBN0gsR0FBQTtRQUFBa1AsU0FBQSxDQUFBbEcsQ0FBQSxDQUFBaEosR0FBQTtNQUFBO1FBQUFrUCxTQUFBLENBQUFLLENBQUE7TUFBQTtJQUNMOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFyUSxHQUFBO0lBQUFoQixLQUFBLEVBR0EsU0FBQW91QixpQkFBQSxFQUFtQjtNQUFBLElBQUE5SyxLQUFBO01BQ2YsSUFBSSxDQUFDaUwsVUFBVSxHQUFHLElBQUksQ0FBQzlTLEtBQUssQ0FBQytTLFVBQVUsQ0FBQ2xpQixhQUFhLENBQUMsUUFBUSxDQUFDO01BQy9ELElBQUksQ0FBQ2lpQixVQUFVLENBQUNuakIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDNUMsSUFBSWtZLEtBQUksQ0FBQ3lLLE1BQU0sRUFBRTtVQUNiLElBQU1VLGNBQWMsR0FBR25MLEtBQUksQ0FBQzdILEtBQUssQ0FBQzRTLE9BQU8sQ0FBQ0ssV0FBVyxJQUFJLElBQUk7VUFDN0QsSUFBSSxJQUFJLEtBQUtELGNBQWMsRUFBRTtZQUN6Qm5MLEtBQUksQ0FBQ3FMLE1BQU0sQ0FBQyxDQUFDO1VBQ2pCLENBQUMsTUFBTTtZQUNILElBQU1DLHVCQUF1QixHQUFHQyxrQkFBa0IsQ0FDOUN6Z0IsSUFBSSxDQUFDZ1csS0FBSyxNQUFBeFksTUFBQSxDQUFLNmlCLGNBQWMsQ0FBQ3JiLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQUcsQ0FDMUQsQ0FBQztZQUNELElBQUksSUFBSSxLQUFLM0QsT0FBTyxDQUFDbWYsdUJBQXVCLENBQUMsRUFBRTtjQUMzQ3RMLEtBQUksQ0FBQ3FMLE1BQU0sQ0FBQyxDQUFDO1lBQ2pCO1VBQ0o7UUFDSixDQUFDLE1BQU07VUFDSHJMLEtBQUksQ0FBQ3dMLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDSixDQUFDLENBQUM7SUFDTjs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBOXRCLEdBQUE7SUFBQWhCLEtBQUEsRUFHQSxTQUFBMnVCLE9BQUEsRUFBUztNQUNMLElBQUksQ0FBQ1osTUFBTSxHQUFHLEtBQUs7TUFDbkIsSUFBSSxDQUFDUSxVQUFVLENBQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDeUIsVUFBVSxDQUFDUSxZQUFZLENBQUMsb0JBQW9CLENBQUM7TUFDOUUsSUFBSSxDQUFDdFQsS0FBSyxDQUFDdVQsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUMxQzs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBaHVCLEdBQUE7SUFBQWhCLEtBQUEsRUFHQSxTQUFBOHVCLEtBQUEsRUFBTztNQUNILElBQUksQ0FBQ2YsTUFBTSxHQUFHLElBQUk7TUFDbEIsSUFBSSxDQUFDUSxVQUFVLENBQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDeUIsVUFBVSxDQUFDUSxZQUFZLENBQUMsa0JBQWtCLENBQUM7O01BRTVFO01BQ0EsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDZCxXQUFXLEVBQUU7UUFDekIsSUFBSSxDQUFDeFMsS0FBSyxDQUFDemIsS0FBSyxHQUFHLElBQUksQ0FBQ2l1QixXQUFXO01BQ3ZDLENBQUMsTUFBTTtRQUNILElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDdEI7TUFFQSxJQUFJLENBQUN6UyxLQUFLLENBQUN1UyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUNuRDtFQUFDO0lBQUFodEIsR0FBQTtJQUFBaEIsS0FBQSxFQUVELFNBQUFrdUIsWUFBQSxFQUFjO01BQ1YsSUFBSSxDQUFDelMsS0FBSyxDQUFDemIsS0FBSyxHQUFHd3RCLE9BQU8sQ0FBQyxJQUFJLENBQUNjLE9BQU8sQ0FBQ25SLEdBQUcsQ0FBQyxVQUFDeFQsTUFBTTtRQUFBLE9BQUtBLE1BQU0sQ0FBQzNKLEtBQUs7TUFBQSxFQUFDLENBQUMrUyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDN0V4RyxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCMGlCLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE1BQU0sRUFBRTtNQUNaLENBQUMsQ0FBQztJQUNOOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFsdUIsR0FBQTtJQUFBaEIsS0FBQSxFQUdBLFNBQUFtdUIsYUFBQSxFQUFlO01BQUEsSUFBQXpKLE1BQUE7TUFBQSxJQUFBbEksVUFBQSxHQUFBdkwsMEJBQUEsQ0FDVSxJQUFJLENBQUNxZCxPQUFPO1FBQUE3UixNQUFBO01BQUE7UUFBakMsS0FBQUQsVUFBQSxDQUFBckwsQ0FBQSxNQUFBc0wsTUFBQSxHQUFBRCxVQUFBLENBQUFwTCxDQUFBLElBQUFoTSxJQUFBLEdBQW1DO1VBQUEsSUFBeEJ1RSxNQUFNLEdBQUE4UyxNQUFBLENBQUF6YyxLQUFBO1VBQ2IySixNQUFNLENBQUN5QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtZQUNuQyxJQUFJLFVBQVUsS0FBS3NaLE1BQUksQ0FBQ2pKLEtBQUssQ0FBQ3NULFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtjQUNwRHJLLE1BQUksQ0FBQ3dKLFdBQVcsQ0FBQyxDQUFDO1lBQ3RCO1VBQ0osQ0FBQyxDQUFDO1FBQ047TUFBQyxTQUFBcHNCLEdBQUE7UUFBQTBhLFVBQUEsQ0FBQTFSLENBQUEsQ0FBQWhKLEdBQUE7TUFBQTtRQUFBMGEsVUFBQSxDQUFBbkwsQ0FBQTtNQUFBO0lBQ0w7RUFBQztFQUFBLE9BQUF3YyxPQUFBO0FBQUE7QUFHTGhqQixRQUFRLENBQUNPLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaERQLFFBQVEsQ0FBQ2liLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUNwaUIsT0FBTyxDQUFDLFVBQUMrWCxLQUFLLEVBQUs7SUFDakUsSUFBSW9TLE9BQU8sQ0FBQ3BTLEtBQUssQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRjVRLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsMEJBQTBCLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQzdEQSxLQUFLLENBQUM4akIsTUFBTSxDQUFDaEwsVUFBVSxDQUFDMkIsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3BpQixPQUFPLENBQUMsVUFBQytYLEtBQUssRUFBSztJQUNoRixJQUFJb1MsT0FBTyxDQUFDcFMsS0FBSyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEtGOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtHO0FBQ3ZDO0FBQ0w7QUFDdEQsQ0FBNEY7OztBQUc1RjtBQUNtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDMEY7QUFDdkM7QUFDTDtBQUM3RCxDQUFtRzs7O0FBR25HO0FBQ21HO0FBQ25HLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkMwRjtBQUN2QztBQUNMO0FBQzdELENBQW1HOzs7QUFHbkc7QUFDbUc7QUFDbkcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBGO0FBQ3ZDO0FBQ0w7QUFDN0QsQ0FBa0c7OztBQUdsRztBQUNtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDa00sQ0FBQyxpRUFBZSxrTUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWIsQ0FBQyxpRUFBZSx5TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXBCLENBQUMsaUVBQWUseU1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FwQixDQUFDLGlFQUFlLHlNQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9iYWNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9lbGVtZW50cy9FbGVtZW50Rm9ybU1vdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9lbGVtZW50cy9Gb3JtQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2VsZW1lbnRzL1N0eWxlc2hlZXRFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlckVsZW1lbnQudnVlIiwid2VicGFjazovLy9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlIiwid2VicGFjazovLy9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlckVsZW1lbnQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZWFzeWNvcnAvZWFzeWFkbWluLWJ1bmRsZS9hc3NldHMvanMvZmllbGQtc2x1Zy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9zY3NzL2JhY2suc2Nzcz83YjA1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZT9hNzNkIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWU/MTNiZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlP2FjOGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZT9iOWUxIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZT8yMWU5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWU/NTA5MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlPzQxNWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZT83NThkIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZT80ZTBiIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWU/ZDEzZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlPzQ4Y2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZT9jYmZhIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZT8wZThjIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWU/NTBlNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlP2I2ZWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZT85NzA2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZT84YWQ2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWU/ODQ3MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlPzFiMTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZT84OWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9iYWNrLnNjc3MnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlci52dWUnO1xuaW1wb3J0IEJ1aWxkZXJGaWxlTWFuYWdlckludGVncmF0aW9uIGZyb20gJy4vYnVpbGRlci9CdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbic7XG5pbXBvcnQgJy92ZW5kb3IvZWFzeWNvcnAvZWFzeWFkbWluLWJ1bmRsZS9hc3NldHMvanMvZmllbGQtc2x1Zyc7XG5cbmNvbnN0ICRidWlsZGVyUm9vdHMgPSAkKCcuYnVpbGRlci1yb290Jyk7XG5cbmlmICgkYnVpbGRlclJvb3RzLmxlbmd0aCA+IDApIHtcbiAgICAkYnVpbGRlclJvb3RzLmVhY2goZnVuY3Rpb24gKGksIHJvb3QpIHtcbiAgICAgICAgbmV3IFZ1ZSh7ZWw6ICcjJyArICQocm9vdCkuYXR0cignaWQnKSwgY29tcG9uZW50czoge0J1aWxkZXJ9fSk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gSW5pdGlhbGlzZXIgbCdpbnTDqWdyYXRpb24gYXZlYyBsZSBmaWxlLW1hbmFnZXJcbiAgICBCdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbi5pbml0KCk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hTdXJ2ZXlRdWVzdGlvbkFuc3dlckJsb2NrKHNlbGVjdG9yKSB7XG4gICAgaWYoc2VsZWN0b3IudmFsKCkgPT09IFwicmFkaW9cIikge1xuICAgICAgICBzZWxlY3Rvci5jbG9zZXN0KFwiLmZpZWxkLWNvbGxlY3Rpb24taXRlbVwiKS5maW5kKFwiLmZvcm0tc3VydmV5LXF1ZXN0aW9uLWFuc3dlci10eXBlXCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rvci5jbG9zZXN0KFwiLmZpZWxkLWNvbGxlY3Rpb24taXRlbVwiKS5maW5kKFwiLmZvcm0tc3VydmV5LXF1ZXN0aW9uLWFuc3dlci10eXBlXCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG59XG5cblxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcuYWN0aW9uLXNhdmVBbmRSZXR1cm4sIC5hY3Rpb24tc2F2ZUFuZEFkZEFub3RoZXIsIC5hY3Rpb24tc2F2ZUFuZFJldHVybiwgLmFjdGlvbi1zYXZlQW5kQ29udGludWUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0ICRmb3JtSWQgPSAkKCcjJysgJCh0aGlzKS5hdHRyKCdmb3JtJykpO1xuICAgICAgICBsZXQgJGFsbElucHV0ID0gJGZvcm1JZC5maW5kKCdpbnB1dDppbnZhbGlkJyk7XG5cbiAgICAgICAgJC5lYWNoKCRhbGxJbnB1dCwgZnVuY3Rpb24oIGluZGV4LCB2YWx1ZSApIHtcbiAgICAgICAgICAgIGxldCAkY3VycmVudEVsZW1lbnQgPSAkKCcjJyt2YWx1ZS5pZCk7XG4gICAgICAgICAgICBpZigkY3VycmVudEVsZW1lbnQudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYoJGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5idWlsZGVyX19lbGVtZW50JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmJ1aWxkZXJfX2VsZW1lbnQnKS5hZGRDbGFzcygnZXJyb3JfcmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnZXJyb3JfcmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAkKFwiI01lbnVfcGFnZVN5c3RlbVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjTWVudV9wYWdlXCIpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLDApO1xuICAgICAgICAkKFwiI01lbnVfZXh0ZXJuYWxQYXRoXCIpLnZhbChcIlwiKTtcbiAgICB9KTtcbiAgICAkKFwiI01lbnVfcGFnZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjTWVudV9wYWdlU3lzdGVtXCIpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLDApO1xuICAgICAgICAkKFwiI01lbnVfZXh0ZXJuYWxQYXRoXCIpLnZhbChcIlwiKTtcbiAgICB9KTtcbiAgICAkKFwiI01lbnVfZXh0ZXJuYWxQYXRoXCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiI01lbnVfcGFnZVN5c3RlbVwiKS5wcm9wKCdzZWxlY3RlZEluZGV4JywwKTtcbiAgICAgICAgJChcIiNNZW51X3BhZ2VcIikucHJvcCgnc2VsZWN0ZWRJbmRleCcsMCk7XG4gICAgfSk7XG5cblxuICAgIGxldCBlYVN1cnZleVNlbGVjdG9yID0gJCgnLmVhLWVkaXQtU3VydmV5LCAuZWEtbmV3LVN1cnZleScpO1xuICAgIGVhU3VydmV5U2VsZWN0b3IuZGVsZWdhdGUoXCIuZm9ybS1zdXJ2ZXktcXVlc3Rpb24tdHlwZVwiLCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVmcmVzaFN1cnZleVF1ZXN0aW9uQW5zd2VyQmxvY2soJCh0aGlzKSk7XG4gICAgfSk7XG4gICAgaWYoZWFTdXJ2ZXlTZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgICAgJCgnLmZvcm0tc3VydmV5LXF1ZXN0aW9uLXR5cGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVmcmVzaFN1cnZleVF1ZXN0aW9uQW5zd2VyQmxvY2soJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAkKCcuY29udGFpbmVyLXN1cnZleS1xdWVzdGlvbnMgLmZpZWxkLWNvbGxlY3Rpb24tYWRkLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZWZyZXNoU3VydmV5UXVlc3Rpb25BbnN3ZXJCbG9jayhlYVN1cnZleVNlbGVjdG9yLmZpbmQoJy5jb250YWluZXItc3VydmV5LXF1ZXN0aW9ucyAuZmllbGQtY29sbGVjdGlvbi1pdGVtJykubGFzdCgpLmZpbmQoJy5mb3JtLXN1cnZleS1xdWVzdGlvbi10eXBlJykpO1xuICAgICAgICBlYVN1cnZleVNlbGVjdG9yLmZpbmQoJy5jb250YWluZXItc3VydmV5LXF1ZXN0aW9ucyAuZmllbGQtY29sbGVjdGlvbi1pdGVtIC5mb3JtLXN1cnZleS1xdWVzdGlvbi1hY3RpdmUnKS5wcm9wKCBcImNoZWNrZWRcIiwgdHJ1ZSApO1xuICAgIH0pXG59KTtcbiIsIi8qKlxyXG4gKiBJbnTDqWdyYXRpb24gZHUgRmlsZSBNYW5hZ2VyIGF2ZWMgbGUgQnVpbGRlclxyXG4gKiBQZXJtZXQgZGUgc8OpbGVjdGlvbm5lciBkZXMgaW1hZ2VzIGRlcHVpcyBsZSBGaWxlIE1hbmFnZXIgZXQgZGUgbGVzIGNvcGllciBkYW5zIGxlIEJ1aWxkZXJcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbiB7XHJcbiAgICBzdGF0aWMgY3VycmVudFRhcmdldEZpZWxkID0gbnVsbDtcclxuICAgIHN0YXRpYyBjdXJyZW50QnV0dG9uID0gbnVsbDtcclxuICAgIHN0YXRpYyBtb2RhbEluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2VyIGxlcyDDqXbDqW5lbWVudHNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0J1aWxkZXJGaWxlTWFuYWdlckludGVncmF0aW9uIGluaXRpYWxpemVkJyk7XHJcblxyXG4gICAgICAgIC8vIEfDqXJlciBsZXMgY2xpY3Mgc3VyIFwiQ2hvaXNpciBkZXB1aXMgbGEgbcOpZGlhdGjDqHF1ZVwiXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tc2VsZWN0LWZyb20tZmlsZW1hbmFnZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEZpZWxkID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24ub3Blbk1vZGFsKHRhcmdldEZpZWxkLCAkKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gw4ljb3V0ZXIgbGVzIG1lc3NhZ2VzIGR1IGZpbGUtbWFuYWdlciAoc8OpbGVjdGlvbiBkJ3VuIGZpY2hpZXIpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnZmlsZW1hbmFnZXItc2VsZWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24uaGFuZGxlRmlsZVNlbGVjdGlvbihldmVudC5kYXRhLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXZyaXIgbGEgbW9kYWwgYXZlYyBsZSBmaWxlLW1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG9wZW5Nb2RhbCh0YXJnZXRGaWVsZCwgJGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldEZpZWxkID0gdGFyZ2V0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QnV0dG9uID0gJGJ1dHRvbjtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIGxhIG1vZGFsIHNpIGVsbGUgbidleGlzdGUgcGFzXHJcbiAgICAgICAgaWYgKCQoJyNmaWxlbWFuYWdlci1zZWxlY3Rvci1tb2RhbCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWxlbWFuYWdlci1zZWxlY3Rvci1tb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXhsXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDkwJTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZvbGRlci1vcGVuXCI+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5lciB1bmUgaW1hZ2UgZGVwdWlzIGxhIG3DqWRpYXRow6hxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIiBzdHlsZT1cInBhZGRpbmc6IDA7IGhlaWdodDogNzB2aDsgb3ZlcmZsb3c6IGhpZGRlbjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIGlkPVwiZmlsZW1hbmFnZXItc2VsZWN0b3ItaWZyYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvJHt3aW5kb3cuQlVJTERFUl9MT0NBTEUgfHwgJ2ZyJ30vYWRtaW4vZmlsZS1zZWxlY3RvclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBib3JkZXI6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5udWxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQobW9kYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGEgbW9kYWxcclxuICAgICAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZW1hbmFnZXItc2VsZWN0b3ItbW9kYWwnKTtcclxuICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2UgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKG1vZGFsRWxlbWVudCwge1xyXG4gICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDDiWNvdXRlciBsYSBmZXJtZXR1cmUgZGUgbGEgbW9kYWwgcG91ciBuZXR0b3llciBsZSBiYWNrZHJvcFxyXG4gICAgICAgIG1vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFN1cHByaW1lciBsZSBiYWNrZHJvcCBzJ2lsIGV4aXN0ZSBlbmNvcmVcclxuICAgICAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2Ryb3AnKTtcclxuICAgICAgICAgICAgaWYgKGJhY2tkcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTdXBwcmltZXIgbGEgY2xhc3NlIG1vZGFsLW9wZW4gZHUgYm9keVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2Uuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR8OpcmVyIGxhIHPDqWxlY3Rpb24gZCd1biBmaWNoaWVyIGRlcHVpcyBsZSBmaWxlLW1hbmFnZXJcclxuICAgICAqIEFwcGVsw6kgZGlyZWN0ZW1lbnQgcXVhbmQgbCd1dGlsaXNhdGV1ciBjbGlxdWUgc3VyIFwiU8OpbGVjdGlvbm5lclwiIGRhbnMgbGEgdmlzaW9ubmV1c2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGhhbmRsZUZpbGVTZWxlY3Rpb24oZmlsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlIHNlbGVjdGVkOicsIGZpbGUpO1xyXG5cclxuICAgICAgICAvLyBWw6lyaWZpZXIgcXVlIGMnZXN0IGJpZW4gdW5lIGltYWdlXHJcbiAgICAgICAgaWYgKCFmaWxlLm1pbWVUeXBlIHx8ICFmaWxlLm1pbWVUeXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWZXVpbGxleiBzw6lsZWN0aW9ubmVyIHVuZSBpbWFnZSAoanBnLCBwbmcpJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvcGllciBkaXJlY3RlbWVudCBsZSBmaWNoaWVyXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb3B5TWVkaWFUb0J1aWxkZXIoZmlsZS5pZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29waWU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydCgnRXJyZXVyIGxvcnMgZGUgbGEgY29waWUgZHUgZmljaGllcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvcGllciBsZSBmaWNoaWVyIGR1IGZpbGUtbWFuYWdlciB2ZXJzIGxlIGJ1aWxkZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGNvcHlNZWRpYVRvQnVpbGRlcihmaWxlSWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2J1aWxkZXIvY29weS1tZWRpYScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbGVJZDogZmlsZUlkIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyZXVyIGxvcnMgZGUgbGEgY29waWUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRyb3V2ZXIgbGUgZm9ybXVsYWlyZSBwYXJlbnQgc3DDqWNpZmlxdWUgdmlhIGxlIGJvdXRvbiBxdWkgYSBvdXZlcnQgbGEgbW9kYWxcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50QnV0dG9uIHx8IHRoaXMuY3VycmVudEJ1dHRvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdCb3V0b24gc291cmNlIGludHJvdXZhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbGUgZm9ybXVsYWlyZSBjaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRyb3V2ZXIgbGUgZm9ybS1ncm91cC1pbWFnZSBwYXJlbnQgZHUgYm91dG9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZm9ybUdyb3VwID0gdGhpcy5jdXJyZW50QnV0dG9uLmNsb3Nlc3QoJy5mb3JtLWdyb3VwLWltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGZvcm1Hcm91cC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtLWdyb3VwLWltYWdlIGludHJvdXZhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbGUgZm9ybXVsYWlyZSBjaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnaW5wdXQgaGlkZGVuIGF2ZWMgbCdVUkwgZGFucyBjZSBmb3JtLWdyb3VwIHNww6ljaWZpcXVlXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaGlkZGVuSW5wdXQgPSAkZm9ybUdyb3VwLmZpbmQoYGlucHV0W2RhdGEtbmFtZT1cIiR7dGhpcy5jdXJyZW50VGFyZ2V0RmllbGR9X3VybFwiXWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCBoaWRkZW4gaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcG9zc2libGUgZGUgdHJvdXZlciBsZSBjaGFtcCBjaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGhpZGRlbklucHV0LnZhbChkYXRhLnVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgbGEgcHLDqXZpc3VhbGlzYXRpb24gZGFucyBsZSB3aWRnZXRcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR3aWRnZXQgPSAkZm9ybUdyb3VwLmZpbmQoJy5pbWFnZS11cGxvYWQtd2lkZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtZW1wdHknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1wcmV2aWV3IGltZycpLmF0dHIoJ3NyYycsIGRhdGEudXJsKTtcclxuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGVuYW1lLXByZXZpZXcnKS50ZXh0KGRhdGEubmFtZSB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR8OpcmVyIGxlIGJvdXRvbiBzdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGUtcHJldmlldy1kZWxldGUnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLWVtcHR5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZpZGVyIGxlcyBpbnB1dHNcclxuICAgICAgICAgICAgICAgICAgICAkaGlkZGVuSW5wdXQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybUdyb3VwLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5maWxlbmFtZS1wcmV2aWV3JykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNYXNxdWVyIGwnaW5wdXQgZmlsZSBsb2NhbCBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgICAgICAgICAgJGZvcm1Hcm91cC5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRmVybWVyIGxhIG1vZGFsXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RhbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEluc3RhbmNlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOZXR0b3llciBsZSBiYWNrZHJvcCBpbW3DqWRpYXRlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2Ryb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciB1biBtZXNzYWdlIGRlIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWNoaWVyIGNvcGnDqSBhdmVjIHN1Y2PDqHM6JywgZGF0YS51cmwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IgfHwgJ0VycmV1ciBpbmNvbm51ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBdXRvLWluaXRpYWxpc2F0aW9uXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIEJ1aWxkZXJGaWxlTWFuYWdlckludGVncmF0aW9uLmluaXQoKTtcclxufSk7XHJcblxyXG4iLCIvL2ltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vL2ltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnc2VsZWN0Mic7XG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5jc3MnO1xuaW1wb3J0IEZvcm1CdWlsZGVyIGZyb20gJy4vRm9ybUJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50Rm9ybU1vdW50ZXIge1xuICAgIHN0YXRpYyBpbnB1dE5hbWUoYmFzZW5hbWUsIGVsZW1lbnRJZCwgZWxlbWVudFByb3BlcnR5TmFtZSwgbXVsdGlwbGUgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYmFzZW5hbWUgKyAnWycgKyBlbGVtZW50SWQgKyAnXVsnICsgZWxlbWVudFByb3BlcnR5TmFtZSArICddJyArIChtdWx0aXBsZSA/ICdbXScgOiAnJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlucHV0SWQoZWxlbWVudElkLCBlbGVtZW50UHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50SWQgKyAnLScgKyBlbGVtZW50UHJvcGVydHlOYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25maXJtKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsLWRlbGV0ZS1lbGVtZW50XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Vm91bGV6LXZvdXMgc3VwcHJpbWVyIGNldCDDqWzDqW1lbnQgPzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2V0dGUgYWN0aW9uIGVzdCBpcnLDqXZlcnNpYmxlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1sYWJlbFwiPkFubnVsZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgaWQ9XCJtb2RhbC1kZWxldGUtZWxlbWVudC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCI+PC9pPiA8c3BhbiBjbGFzcz1cImJ0bi1sYWJlbFwiPlN1cHByaW1lcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGlmICgkKCcjbW9kYWwtZGVsZXRlLWVsZW1lbnQnKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkKG1vZGFsKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWRlbGV0ZS1lbGVtZW50JyksIHsgYmFja2Ryb3A6IHRydWUsIGtleWJvYXJkOiB0cnVlIH0pO1xuXG4gICAgICAgIG15TW9kYWwuc2hvdygpO1xuICAgICAgICAkKCcjbW9kYWwtZGVsZXRlLWVsZW1lbnQnKS5vZmYoJ2NsaWNrJywgJyNtb2RhbC1kZWxldGUtZWxlbWVudC1idXR0b24nKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICcjbW9kYWwtZGVsZXRlLWVsZW1lbnQtYnV0dG9uJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyB2YWxpZGF0ZUZvcm1FbGVtZW50KGZvcm0pIHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgICQoZm9ybSkuZmluZCgnW3JlcXVpcmVkXSwgW3R5cGU9XCJ1cmxcIl0nKS5lYWNoKGZ1bmN0aW9uIChpLCBpbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24gKGksIGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIUVsZW1lbnRGb3JtTW91bnRlci5fdmFsaWRhdGVGaWxlSW5wdXQoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbW91bnQoYmFzZW5hbWUsIGVsZW1lbnQsIGZvcm0pIHtcbiAgICAgICAgbGV0ICRmb3JtID0gJChmb3JtKTtcblxuICAgICAgICB0aGlzLl9pbml0UmVwZWF0YWJsZXMoJGZvcm0sIGJhc2VuYW1lLCBlbGVtZW50KTtcbiAgICAgICAgdGhpcy5fY29tcGlsZU5hbWVBbmRWYWx1ZXMoYmFzZW5hbWUsIGVsZW1lbnQsICRmb3JtKTtcbiAgICAgICAgdGhpcy5fbWFrZUNrZWRpdG9ycygkZm9ybSk7XG4gICAgICAgIHRoaXMuX21ha2VTZWxlY3QyKCRmb3JtKTtcbiAgICAgICAgdGhpcy5fYXV0b1ZhbGlkYXRlRmlsZUlucHV0cygkZm9ybSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9nZXRWYWx1ZUZyb21QYXRoKG9iaiwgcGF0aCkge1xuICAgICAgICBpZiAoIXBhdGgpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtwYXRoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KC9cXF1cXFt8XFxbfFxcXS8pLmZpbHRlcihrID0+IGsgIT09ICcnKTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IG9iajtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9pbml0UmVwZWF0YWJsZXMoJGZvcm0sIGJhc2VuYW1lLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIEF1dG8tZXhwYW5kIHJlcGVhdGFibGVzIGlmIHdlIGhhdmUgZGF0YVxuICAgICAgICAkZm9ybS5maW5kKCcuZm9ybS1yZXBlYXRhYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtc0NvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLmZvcm0tcmVwZWF0YWJsZS1pdGVtcycpO1xuICAgICAgICAgICAgY29uc3QgJHRlbXBsYXRlID0gJGNvbnRhaW5lci5maW5kKCd0ZW1wbGF0ZS5mb3JtLXJlcGVhdGFibGUtdGVtcGxhdGUnKTtcblxuICAgICAgICAgICAgaWYgKCR0ZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9ICR0ZW1wbGF0ZS5odG1sKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvZGF0YS1uYW1lPVwiKFteXCJdKylcIi8uZXhlYyhodG1sKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBmdWxsTmFtZS5zcGxpdCgnXVsnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGVhdGFibGVOYW1lID0gcGFydHNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb2sgdXAgdGhlIGFycmF5IGluIHRoZSBlbGVtZW50IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwZWF0YWJsZURhdGEgPSBFbGVtZW50Rm9ybU1vdW50ZXIuX2dldFZhbHVlRnJvbVBhdGgoZWxlbWVudCwgcmVwZWF0YWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwZWF0YWJsZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2F2ZWRDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVwZWF0YWJsZURhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkQ291bnQgPSByZXBlYXRhYmxlRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVwZWF0YWJsZURhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkQ291bnQgPSBPYmplY3Qua2V5cyhyZXBlYXRhYmxlRGF0YSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5pdFJlcGVhdGFibGU6JywgZnVsbE5hbWUsICdEYXRhOicsIHJlcGVhdGFibGVEYXRhLCAnU2F2ZWRDb3VudDonLCBzYXZlZENvdW50LCAnQ3VycmVudENvdW50OicsICRpdGVtc0NvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q291bnQgPSAkaXRlbXNDb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGN1cnJlbnRDb3VudDsgayA8IHNhdmVkQ291bnQ7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgZGlyZWN0IGNhbGwgaW5zdGVhZCBvZiB0cmlnZ2VyIGNsaWNrIHRvIGVuc3VyZSByZWxpYWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50Rm9ybU1vdW50ZXIuX2FkZFJlcGVhdGFibGVJdGVtKCRjb250YWluZXIsIGVsZW1lbnQsIGJhc2VuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBBZGQgYnV0dG9uXG4gICAgICAgIC8vIEJpbmQgdG8gdGhlIHNwZWNpZmljIGNvbnRhaW5lciB0byBwcmVzZXJ2ZSB0aGUgJ2VsZW1lbnQnIGFuZCAnYmFzZW5hbWUnIGNsb3N1cmUgc2NvcGVcbiAgICAgICAgLy8gVXNpbmcgZGVsZWdhdGluZyBmcm9tIHRoZSBjb250YWluZXIgaXRzZWxmIGhhbmRsZXMgcG90ZW50aWFsIGR5bmFtaWMgYnV0dG9uIHJlcGxhY2VtZW50cyBpZiBhbnksIFxuICAgICAgICAvLyB0aG91Z2ggdHlwaWNhbGx5IHRoZSBidXR0b24gaXMgc3RhdGljIGF0IHRoZSBib3R0b20uXG4gICAgICAgICRmb3JtLmZpbmQoJy5mb3JtLXJlcGVhdGFibGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJGNvbnRhaW5lci5vZmYoJ2NsaWNrJywgJy5mb3JtLXJlcGVhdGFibGUtYWRkJykub24oJ2NsaWNrJywgJy5mb3JtLXJlcGVhdGFibGUtYWRkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gJGNvbnRhaW5lciBpcyBhbHJlYWR5IGF2YWlsYWJsZSBpbiBjbG9zdXJlLCBvciB2aWEgJCh0aGlzKS5jbG9zZXN0XG4gICAgICAgICAgICAgICAgLy8gVXNpbmcgJCh0aGlzKS5jbG9zZXN0IGlzIHNhZmVyIGlmIHdlIGNvcHkvbW92ZWQgY29kZSwgYnV0IHdlIG5lZWQgdGhlICdlbGVtZW50JyBjbG9zdXJlLlxuICAgICAgICAgICAgICAgIGlmICghRWxlbWVudEZvcm1Nb3VudGVyLl9hZGRSZXBlYXRhYmxlSXRlbSgkY29udGFpbmVyLCBlbGVtZW50LCBiYXNlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnQoJGNvbnRhaW5lci5kYXRhKCdtYXgnKSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBNYXhpbXVtICR7bWF4fSDDqWzDqW1lbnRzIGF1dG9yaXPDqXMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBSZW1vdmUgYnV0dG9uXG4gICAgICAgICAgICAkY29udGFpbmVyLm9mZignY2xpY2snLCAnLmZvcm0tcmVwZWF0YWJsZS1yZW1vdmUnKS5vbignY2xpY2snLCAnLmZvcm0tcmVwZWF0YWJsZS1yZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludCgkY29udGFpbmVyLmRhdGEoJ21pbicpKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaXRlbXNDb250YWluZXIgPSAkY29udGFpbmVyLmZpbmQoJy5mb3JtLXJlcGVhdGFibGUtaXRlbXMnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkaXRlbXNDb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGggPD0gbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBNaW5pbXVtICR7bWlufSDDqWzDqW1lbnRzIHJlcXVpcy5gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvcm0tcmVwZWF0YWJsZS1pdGVtJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9hZGRSZXBlYXRhYmxlSXRlbSgkY29udGFpbmVyLCBlbGVtZW50LCBiYXNlbmFtZSkge1xuICAgICAgICBjb25zdCAkaXRlbXNDb250YWluZXIgPSAkY29udGFpbmVyLmZpbmQoJy5mb3JtLXJlcGVhdGFibGUtaXRlbXMnKTtcbiAgICAgICAgY29uc3QgJHRlbXBsYXRlID0gJGNvbnRhaW5lci5maW5kKCd0ZW1wbGF0ZS5mb3JtLXJlcGVhdGFibGUtdGVtcGxhdGUnKTtcbiAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnQoJGNvbnRhaW5lci5kYXRhKCdtYXgnKSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9ICRpdGVtc0NvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICBpZiAoY3VycmVudENvdW50ID49IG1heCkge1xuICAgICAgICAgICAgLy8gUXVpZXQgZmFpbCBmb3IgYXV0by1leHBhbmQgb3IgaGFuZGxlIGRpZmZlcmVudGx5P1xuICAgICAgICAgICAgLy8gVXNlciBjbGljayBzaG91bGQgYWxlcnQsIGJ1dCBhdXRvLWV4cGFuZCBzaG91bGRuJ3QgbG9vcCBpZiBtYXggcmVhY2hlZD9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXhJbmRleCA9IC0xO1xuICAgICAgICAkaXRlbXNDb250YWluZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnaW5kZXgnKSk7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKGlkeCkgJiYgaWR4ID4gbWF4SW5kZXgpIG1heEluZGV4ID0gaWR4O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBtYXhJbmRleCArIDE7XG5cbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSAkdGVtcGxhdGUuZGF0YSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgbGV0IGh0bWwgPSAkdGVtcGxhdGUuaHRtbCgpO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyTWludXMxID0gcGxhY2Vob2xkZXIgKyAnX01JTlVTXzEnO1xuICAgICAgICBpZiAoaHRtbC5pbmRleE9mKHBsYWNlaG9sZGVyTWludXMxKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnNwbGl0KHBsYWNlaG9sZGVyTWludXMxKS5qb2luKG5ld0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaHRtbC5pbmRleE9mKHBsYWNlaG9sZGVyKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnNwbGl0KHBsYWNlaG9sZGVyKS5qb2luKG5ld0luZGV4ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICQoaHRtbCk7XG4gICAgICAgICRuZXdJdGVtLmF0dHIoJ2RhdGEtaW5kZXgnLCBuZXdJbmRleCk7XG4gICAgICAgICRpdGVtc0NvbnRhaW5lci5hcHBlbmQoJG5ld0l0ZW0pO1xuXG4gICAgICAgIEVsZW1lbnRGb3JtTW91bnRlci5fbWFrZUNrZWRpdG9ycygkbmV3SXRlbSk7XG4gICAgICAgIEVsZW1lbnRGb3JtTW91bnRlci5fbWFrZVNlbGVjdDIoJG5ld0l0ZW0pO1xuXG4gICAgICAgICRuZXdJdGVtLmZpbmQoJ1tkYXRhLW5hbWVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9ICRpbnB1dC5kYXRhKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBpc011bHRpcGxlID0gJGlucHV0LnByb3AoJ211bHRpcGxlJyk7XG5cbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCduYW1lJywgRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0TmFtZShiYXNlbmFtZSwgZWxlbWVudC5pZCwgbmFtZSwgaXNNdWx0aXBsZSkpO1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhblByb3BOYW1lID0gbmFtZS5yZXBsYWNlKC9cXF1cXFsvZywgJy0nKS5yZXBsYWNlKCdbJywgJy0nKS5yZXBsYWNlKCddJywgJycpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBFbGVtZW50Rm9ybU1vdW50ZXIuaW5wdXRJZChlbGVtZW50LmlkLCBjbGVhblByb3BOYW1lKTtcblxuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2lkJywgaWQpO1xuICAgICAgICAgICAgJGlucHV0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuZmluZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBpZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdW50KGZvcm0pIHtcbiAgICAgICAgdGhpcy5fbWFrZUNrZWRpdG9ycygkKGZvcm0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NvbXBpbGVOYW1lQW5kVmFsdWVzKGJhc2VuYW1lLCBlbGVtZW50LCAkZm9ybSkge1xuICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS1uYW1lXScpLm5vdCgnLmZvcm0tcmVwZWF0YWJsZScpLmVhY2goZnVuY3Rpb24gKGksIGlucHV0KSB7XG4gICAgICAgICAgICBsZXQgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gJGlucHV0LmRhdGEoJ25hbWUnKTtcblxuICAgICAgICAgICAgY29uc3QgY2xlYW5Qcm9wTmFtZSA9IG5hbWUucmVwbGFjZSgvXFxdXFxbL2csICctJykucmVwbGFjZSgnWycsICctJykucmVwbGFjZSgnXScsICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0SWQoZWxlbWVudC5pZCwgY2xlYW5Qcm9wTmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAkaW5wdXQucHJvcCgnbXVsdGlwbGUnKTtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCduYW1lJywgRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0TmFtZShiYXNlbmFtZSwgZWxlbWVudC5pZCwgbmFtZSwgaXNNdWx0aXBsZSkpO1xuICAgICAgICAgICAgaWYgKCEkaW5wdXQuYXR0cignaWQnKSkge1xuICAgICAgICAgICAgICAgICRpbnB1dC5hdHRyKCdpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQucGFyZW50KCkuZmluZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBpZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpICE9PSAnZmlsZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBFbGVtZW50Rm9ybU1vdW50ZXIuX2dldFZhbHVlRnJvbVBhdGgoZWxlbWVudCwgbmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwoaXNNdWx0aXBsZSAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHZhbC5zcGxpdCgnLCcpIDogdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRpbnB1dC5oYXNDbGFzcygnYXJ0aWNsZV9tZWRpYXNfaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudEZvcm1Nb3VudGVyLl9oeWRyYXRlSW5wdXRQcmV2aWV3KCRpbnB1dCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsTmFtZSA9IG5hbWUgKyAnX3VybCc7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gRWxlbWVudEZvcm1Nb3VudGVyLl9nZXRWYWx1ZUZyb21QYXRoKGVsZW1lbnQsIHVybE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudEZvcm1Nb3VudGVyLl9oeWRyYXRlSW5wdXRGaWxlKCRpbnB1dCwgdmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBfbWFrZVNlbGVjdDIoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnc2VsZWN0LnNlbGVjdDInKS5lYWNoKChpLCBzZWxlY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0geyB0aGVtZTogJ2Jvb3RzdHJhcCcsIGxhbmd1YWdlOiAnZnInLCB3aWR0aDogJzEwMCUnLCBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogMTAgfTtcblxuICAgICAgICAgICAgaWYgKCQoc2VsZWN0KS5oYXNDbGFzcygnc2VsZWN0Mi0taWNvbnMnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlJY29ucyA9IGZ1bmN0aW9uIChpY29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWNvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGljb24udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50X19mb3JtX19pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRfX2Zvcm1fX2ljb25fX2lcIj48aSBjbGFzcz1cIm10LWljb24tJHtpY29uLnRleHR9XCI+PC9pPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7aWNvbi50ZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaWNvbi50ZXh0LnNsaWNlKDEpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMudGVtcGxhdGVTZWxlY3Rpb24gPSBkaXNwbGF5SWNvbnM7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy50ZW1wbGF0ZVJlc3VsdCA9IGRpc3BsYXlJY29ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChzZWxlY3QpLnNlbGVjdDIob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBfbWFrZUNrZWRpdG9ycygkZm9ybSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ3RyaXgtZWRpdG9yJykuZWFjaChmdW5jdGlvbiAoaSwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZWRpdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmVkaXRvci5sb2FkSFRNTCgkKGlucHV0KS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIGVkaXRvciBmb3IgdHJpeCAnICsgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkZm9ybS5maW5kKCcuZWxlbWVudC1ja2VkaXRvcicpLmVhY2goZnVuY3Rpb24gKGksIGlucHV0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSAkKGlucHV0KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKENLRURJVE9SLmluc3RhbmNlc1tpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW2lkXS5kZXN0cm95KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIENLRURJVE9SLmluc3RhbmNlc1tpZF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGVkaXRvciA9IENLRURJVE9SLnJlcGxhY2UoaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3JCdXR0b25fY29sb3JzOiBjb2xvcnNfcHJpdmF0ZS5qb2luKCcsJykgKyAnLCcgKyBjb2xvcnNfcHJvLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnc3R5bGVzJywgaXRlbXM6IFsnQm9sZCcsICdJdGFsaWMnLCAnU3RyaWtlJywgJ0xpbmsnXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnY29sb3JzJywgaXRlbXM6IFsnVGV4dENvbG9yJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ2xpc3RzJywgaXRlbXM6IFsnQnVsbGV0ZWRMaXN0JywgJ051bWJlcmVkTGlzdCcsICctJywgJ091dGRlbnQnLCAnSW5kZW50J10gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGl0ZW1zOiBbJ0NvcHknLCAnUGFzdGUnLCAnUGFzdGVGcm9tV29yZCcsICctJywgJ1VuZG8nLCAnUmVkbyddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdwYXJhZ3JhcGgnLCBpdGVtczogWydKdXN0aWZ5TGVmdCcsICdKdXN0aWZ5Q2VudGVyJywgJ0p1c3RpZnlSaWdodCcsICdKdXN0aWZ5QmxvY2snXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgaXRlbXM6IFsnSG9yaXpvbnRhbFJ1bGUnLCAnVGFibGUnLCAnSW1hZ2UnXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYWR2YW5jZWQnLCBpdGVtczogWydTb3VyY2UnXSB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnZnInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFQbHVnaW5zOiAnZGl2YXJlYScsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVicm93c2VyQnJvd3NlVXJsOiAnL2VsZmluZGVyJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRvYXN0X2lkID0gXCJ0b2FzdGVkXCIgKyBpZDtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxfaW5wdXQgPSAkKCcjJyArIGlkKS5wYXJlbnQoKS5maW5kKCdsYWJlbCcpLnRleHQoKTtcblxuICAgICAgICAgICAgICAgIGVkaXRvci5vbigncmVxdWlyZWQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGV2dC5lZGl0b3IubmFtZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b2FzdC1jb250YWluZXIgcG9zaXRpb24tZml4ZWQgYm90dG9tLTAgZW5kLTAgcC0zXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgPGRpdiBpZD1cIicgKyB0b2FzdF9pZCArICdcIiBjbGFzcz1cInRvYXN0XCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICAgIDxzdHJvbmcgY2xhc3M9XCJtZS1hdXRvXCI+RXJyZXVyIC0gT2JsaWdhdG9pcmU8L3N0cm9uZz4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICBDaGFtcCAnICsgbGFiZWxfaW5wdXQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2FzdFRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2FzdF9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBib290c3RyYXAuVG9hc3QodG9hc3RUcmlnZ2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Quc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICBldnQuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGlkKS5jbG9zZXN0KCcuYnVpbGRlcl9fZWxlbWVudCcpLmFkZENsYXNzKCdlcnJvcl9yZXF1aXJlZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVkaXRvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWRpdG9yLmdldERhdGEoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hY3Rpb24tc2F2ZUFuZFJldHVybiwgLmFjdGlvbi1zYXZlQW5kQWRkQW5vdGhlciwgLmFjdGlvbi1zYXZlQW5kUmV0dXJuLCAuYWN0aW9uLXNhdmVBbmRDb250aW51ZScpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2F1dG9WYWxpZGF0ZUZpbGVJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0ub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPVwiZmlsZVwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoRWxlbWVudEZvcm1Nb3VudGVyLl92YWxpZGF0ZUZpbGVJbnB1dChlLmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmlldyBoYW5kbGVkIGluIF92YWxpZGF0ZUZpbGVJbnB1dCBub3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF92YWxpZGF0ZUZpbGVJbnB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGlucHV0LmZpbGVzO1xuXG4gICAgICAgIGlmICghZmlsZXMgfHwgIWZpbGVzWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgY29uc3QgZmlsZVNpemVNQiA9ICgoZmlsZS5zaXplIC8gMTAyNCkgLyAxMDI0KS50b0ZpeGVkKDQpO1xuXG4gICAgICAgIGlmIChmaWxlU2l6ZU1CID4gRm9ybUJ1aWxkZXIuSU1BR0VfTUFYX1NJWkVfTUIpIHtcbiAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdGaWNoaWVyIHRyb3AgZ3JvcycpO1xuICAgICAgICAgICAgaW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBsb2NhbCBwcmV2aWV3XG4gICAgICAgIGlmIChmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkd2lkZ2V0ID0gJChpbnB1dCkuY2xvc2VzdCgnLmltYWdlLXVwbG9hZC13aWRnZXQnKTtcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtZW1wdHknKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5maWxlbmFtZS1wcmV2aWV3JykudGV4dChmaWxlLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gQmluZCBkZWxldGUgYnV0dG9uIGZvciBsb2NhbCBmaWxlXG4gICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuZmlsZS1wcmV2aWV3LWRlbGV0ZScpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoaW5wdXQpLnZhbCgnJyk7IC8vIENsZWFyIGZpbGUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1lbXB0eScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5maWxlbmFtZS1wcmV2aWV3JykudGV4dCgnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2h5ZHJhdGVJbnB1dEZpbGUoJGlucHV0LCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgJHJvdyA9ICRpbnB1dC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpO1xuICAgICAgICBsZXQgJHdpZGdldCA9ICRyb3cuZmluZCgnLmltYWdlLXVwbG9hZC13aWRnZXQnKTtcblxuICAgICAgICAvLyBIaWRlIGVtcHR5IHN0YXRlLCBzaG93IHByZXZpZXdcbiAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLWVtcHR5JykuaGlkZSgpO1xuICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLnNob3coKTtcbiAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgdmFsdWUpO1xuXG4gICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGUtcHJldmlldy1kZWxldGUnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1wcmV2aWV3JykuaGlkZSgpO1xuICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICAgICAgLy8gQ2xlYXIgaGlkZGVuIGlucHV0IChVUkwpIGFuZCBmaWxlIGlucHV0IHRvIGJlIHNhZmVcbiAgICAgICAgICAgICRyb3cuZmluZCgnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpLnZhbCgnJyk7XG4gICAgICAgICAgICAkcm93LmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykudmFsKCcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9oeWRyYXRlSW5wdXRQcmV2aWV3KCRpbnB1dCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWxlRXh0ID0gdmFsdWUuc3Vic3RyKHZhbHVlLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpOztcbiAgICAgICAgbGV0IGxpc3RfZXh0ID0gWydqcGcnLCAncG5nJywgJ2pwZWcnLCAncGRmJ107XG4gICAgICAgIGlmIChmaWxlRXh0ID09PSBcInBkZlwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFwiL2ltYWdlcy9pY29uX3BkZi5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdF9leHQuaW5kZXhPZihmaWxlRXh0KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gXCIvaW1hZ2VzL2ljb25fZmlsZS5wbmdcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCAkcm93ID0gJGlucHV0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJyk7XG4gICAgICAgIGxldCAkd2lkZ2V0ID0gJHJvdy5maW5kKCcuaW1hZ2UtdXBsb2FkLXdpZGdldCcpO1xuXG4gICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1lbXB0eScpLmhpZGUoKTtcbiAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcnKS5zaG93KCk7XG4gICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1wcmV2aWV3IGltZycpLmF0dHIoJ3NyYycsIHZhbHVlKTtcblxuICAgICAgICAvLyBFbnN1cmUgZGVsZXRlIHdvcmtzIGZvciB0aGlzIHR5cGUgdG9vIGlmIG5lZWRlZFxuICAgICAgICAkd2lkZ2V0LmZpbmQoJy5maWxlLXByZXZpZXctZGVsZXRlJykub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLmhpZGUoKTtcbiAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1lbXB0eScpLnNob3coKTtcbiAgICAgICAgICAgIC8vIENsZWFyIGhpZGRlbiBpbnB1dCAoVVJMKVxuICAgICAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IElNQUdFX01BWF9TSVpFX01CID0gNjA7XHJcblxyXG4vKipcclxuICogTW9kZXJuIGZsdWVudCBGb3JtQnVpbGRlciBmb3IgY3JlYXRpbmcgYnVpbGRlciBlbGVtZW50IGZvcm1zXHJcbiAqIFJlcGxhY2VzIHRoZSBvbGQgc3RyaW5nIGNvbmNhdGVuYXRpb24gYXBwcm9hY2ggd2l0aCBhIHN0cnVjdHVyZWQgQVBJXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQnVpbGRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihidWlsZGVyRGF0YSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5idWlsZGVyRGF0YSA9IGJ1aWxkZXJEYXRhO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um93ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpZWxkTmFtZXMgPSBuZXcgU2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJTUFHRV9NQVhfU0laRV9NQigpIHtcclxuICAgICAgICByZXR1cm4gSU1BR0VfTUFYX1NJWkVfTUI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gTEFZT1VUIE1BTkFHRU1FTlQgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGEgbmV3IHJvdyBmb3IgbWFudWFsIGxheW91dCBjb250cm9sXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIHJvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Um93ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRm9ybUJ1aWxkZXI6IE5lc3RlZCByb3dzIGFyZSBub3Qgc3VwcG9ydGVkLiBDbG9zaW5nIHByZXZpb3VzIHJvdy4nKTtcclxuICAgICAgICAgICAgdGhpcy5lbmRSb3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um93ID0gW107XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmQgdGhlIGN1cnJlbnQgcm93XHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGVuZFJvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Um93ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRm9ybUJ1aWxkZXI6IGVuZFJvdygpIGNhbGxlZCB3aXRob3V0IHJvdygpJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFJvdy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY3VycmVudFJvd1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdyA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBmaWVsZHNldCAoZ3JvdXAgb2YgZmllbGRzIHdpdGggbGVnZW5kKVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxlZ2VuZCAtIEZpZWxkc2V0IGxlZ2VuZCB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBuZXcgRm9ybUJ1aWxkZXIgaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgZmllbGRzZXQobGVnZW5kLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IG5lc3RlZEJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIodGhpcy5idWlsZGVyRGF0YSk7XHJcbiAgICAgICAgY2FsbGJhY2sobmVzdGVkQnVpbGRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpZWxkc2V0JyxcclxuICAgICAgICAgICAgbGVnZW5kLFxyXG4gICAgICAgICAgICBmaWVsZHM6IG5lc3RlZEJ1aWxkZXIuZmllbGRzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEZJRUxEIFRZUEVTID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSB0ZXh0IGlucHV0IGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVxdWlyZWQ9ZmFsc2VdIC0gSXMgZmllbGQgcmVxdWlyZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zcGFuPTFdIC0gQ29sdW1uIHNwYW4gKDEgb3IgMilcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kZWZhdWx0VmFsdWU9JyddIC0gRGVmYXVsdCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyPScnXSAtIFBsYWNlaG9sZGVyIHRleHRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5oZWxwVGV4dD0nJ10gLSBIZWxwIHRleHQgYmVsb3cgZmllbGRcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkVGV4dChuYW1lLCBsYWJlbCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGFuID0gMSxcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gJycsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJycsXHJcbiAgICAgICAgICAgIGhlbHBUZXh0ID0gJydcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZE5hbWUobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIGhlbHBUZXh0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbnVtYmVyIGlucHV0IGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkTnVtYmVyKG5hbWUsIGxhYmVsLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHNwYW4gPSAxLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyxcclxuICAgICAgICAgICAgaGVscFRleHQgPSAnJ1xyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgIGhlbHBUZXh0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgc2VsZWN0IGRyb3Bkb3duIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc01hcCAtIE9wdGlvbnMgYXMge3ZhbHVlOiBsYWJlbH0gcGFpcnNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gRmllbGQgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBhZGRTZWxlY3QobmFtZSwgbGFiZWwsIG9wdGlvbnNNYXAsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgc3BhbiA9IDEsXHJcbiAgICAgICAgICAgIG11bHRpcGxlID0gZmFsc2VcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZE5hbWUobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgb3B0aW9uc01hcCxcclxuICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSB0ZXh0YXJlYSBmaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaWVsZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBGaWVsZCBsYWJlbFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBGaWVsZCBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZFRleHRhcmVhKG5hbWUsIGxhYmVsLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHNwYW4gPSAyLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyxcclxuICAgICAgICAgICAgcm93cyA9IDRcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZE5hbWUobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHRhcmVhJyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgIHJvd3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBDS0VkaXRvciByaWNoIHRleHQgZmllbGRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gRmllbGQgbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gRmllbGQgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBhZGRDS0VkaXRvcihuYW1lLCBsYWJlbCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGFuID0gMlxyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnY2tlZGl0b3InLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYW4gaW1hZ2UgdXBsb2FkIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkSW1hZ2UobmFtZSwgbGFiZWwsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgc3BhbiA9IDIsXHJcbiAgICAgICAgICAgIGZvcm1hdCA9ICcxOTIweDYwMCcsXHJcbiAgICAgICAgICAgIGFjY2VwdGVkRm9ybWF0cyA9ICdpbWFnZS9qcGVnLGltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHVzZUZpbGVNYW5hZ2VyID0gdHJ1ZVxyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIGZvcm1hdCxcclxuICAgICAgICAgICAgYWNjZXB0ZWRGb3JtYXRzLFxyXG4gICAgICAgICAgICB1c2VGaWxlTWFuYWdlclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIFVSTCBpbnB1dCBmaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaWVsZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBGaWVsZCBsYWJlbFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBGaWVsZCBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZFVybChuYW1lLCBsYWJlbCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGFuID0gMSxcclxuICAgICAgICAgICAgc2hvd1Rvb2x0aXAgPSBmYWxzZVxyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAndXJsJyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICBzaG93VG9vbHRpcFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhbiBpY29uIHBpY2tlciBmaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaWVsZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBGaWVsZCBsYWJlbFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBGaWVsZCBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZEljb25QaWNrZXIobmFtZSwgbGFiZWwsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgc3BhbiA9IDFcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZE5hbWUobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ2ljb24nLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSB0YWJsZSBmaWVsZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHMgLSBOdW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBGaWVsZCBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZFRhYmxlKHJvd3MsIGNvbHMsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3BhbiA9IDIgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgICAgICAgICAgcm93cyxcclxuICAgICAgICAgICAgY29scyxcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBoZWxwIHRleHQgKG5vdCBhIGZpZWxkLCBqdXN0IGluZm9ybWF0aW9uYWwgdGV4dClcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gSGVscCBtZXNzYWdlXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZEhlbHAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX2FkZEZpZWxkKHtcclxuICAgICAgICAgICAgdHlwZTogJ2hlbHAnLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IERZTkFNSUMgUkVQRUFUQUJMRSBGSUVMRFMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHJlcGVhdGFibGUgZmllbGQgZ3JvdXAgKHJlcGxhY2VzIG9sZCBmaWVsZHNldHMpXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEJhc2UgbmFtZSBmb3IgdGhlIHJlcGVhdGFibGUgZ3JvdXBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmxhYmVsIC0gTGFiZWwgZm9yIHRoZSBncm91cFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWluPTFdIC0gTWluaW11bSBudW1iZXIgb2YgaXRlbXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heD0xMF0gLSBNYXhpbXVtIG51bWJlciBvZiBpdGVtc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcuaW5pdGlhbD0xXSAtIEluaXRpYWwgbnVtYmVyIG9mIGl0ZW1zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5hZGRCdXR0b25UZXh0PScrIEFqb3V0ZXInXSAtIEFkZCBidXR0b24gdGV4dFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWcucmVtb3ZlQnV0dG9uVGV4dD0nU3VwcHJpbWVyJ10gLSBSZW1vdmUgYnV0dG9uIHRleHRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy50ZW1wbGF0ZSAtIFRlbXBsYXRlIGZ1bmN0aW9uIChpbmRleCwgYnVpbGRlcikgPT4gYnVpbGRlclxyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBhZGRSZXBlYXRhYmxlKG5hbWUsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG1pbiA9IDEsXHJcbiAgICAgICAgICAgIG1heCA9IDEwLFxyXG4gICAgICAgICAgICBpbml0aWFsID0gMSxcclxuICAgICAgICAgICAgYWRkQnV0dG9uVGV4dCA9ICcrIEFqb3V0ZXInLFxyXG4gICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0ID0gJ1N1cHByaW1lcicsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlXHJcbiAgICAgICAgfSA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAncmVwZWF0YWJsZScsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBtaW4sXHJcbiAgICAgICAgICAgIG1heCxcclxuICAgICAgICAgICAgaW5pdGlhbCxcclxuICAgICAgICAgICAgYWRkQnV0dG9uVGV4dCxcclxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dCxcclxuICAgICAgICAgICAgdGVtcGxhdGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gUkVOREVSSU5HID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIGZvcm0gdG8gSFRNTCBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1idWlsZGVyLXJvb3RcIj5cXG4nO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy5fcmVuZGVyRmllbGQoZmllbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciBhIHNpbmdsZSBmaWVsZFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlbmRlckZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Jvdyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyUm93KGZpZWxkKTtcclxuICAgICAgICAgICAgY2FzZSAnZmllbGRzZXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZpZWxkc2V0KGZpZWxkKTtcclxuICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGV4dChmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyTnVtYmVyKGZpZWxkKTtcclxuICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJTZWxlY3QoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGV4dGFyZWEoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICdja2VkaXRvcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQ0tFZGl0b3IoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySW1hZ2UoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICd1cmwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclVybChmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ljb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckljb24oZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICd0YWJsZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGFibGUoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICdoZWxwJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJIZWxwKGZpZWxkKTtcclxuICAgICAgICAgICAgY2FzZSAncmVwZWF0YWJsZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyUmVwZWF0YWJsZShmaWVsZCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEZvcm1CdWlsZGVyOiBVbmtub3duIGZpZWxkIHR5cGUgXCIke2ZpZWxkLnR5cGV9XCJgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclJvdyhmaWVsZCkge1xyXG4gICAgICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJmb3JtLWJ1aWxkZXItcm93XCI+XFxuJztcclxuICAgICAgICBmb3IgKGNvbnN0IHJvd0ZpZWxkIG9mIGZpZWxkLmZpZWxkcykge1xyXG4gICAgICAgICAgICBodG1sICs9IHRoaXMuX3JlbmRlckZpZWxkKHJvd0ZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyRmllbGRzZXQoZmllbGQpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8ZmllbGRzZXQ+XFxuPGxlZ2VuZD4ke2ZpZWxkLmxlZ2VuZH08L2xlZ2VuZD5cXG5gO1xyXG4gICAgICAgIGZvciAoY29uc3QgbmVzdGVkRmllbGQgb2YgZmllbGQuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy5fcmVuZGVyRmllbGQobmVzdGVkRmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sICs9ICc8L2ZpZWxkc2V0Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclRleHQoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHIgPSBmaWVsZC5yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnJztcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmaWVsZC5wbGFjZWhvbGRlciA/IGBwbGFjZWhvbGRlcj1cIiR7ZmllbGQucGxhY2Vob2xkZXJ9XCJgIDogJyc7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWw+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfVwiIHZhbHVlPVwiJHtmaWVsZC5kZWZhdWx0VmFsdWV9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAke3JlcXVpcmVkQXR0cn0gJHtwbGFjZWhvbGRlcn0vPlxcbmA7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5oZWxwVGV4dCkge1xyXG4gICAgICAgICAgICBodG1sICs9IGAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+JHtmaWVsZC5oZWxwVGV4dH08L3NtYWxsPlxcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJOdW1iZXIoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHIgPSBmaWVsZC5yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnJztcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWw+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgdmFsdWU9XCIke2ZpZWxkLmRlZmF1bHRWYWx1ZX1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG9uaW5wdXQ9XCJ0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKTtcIiAke3JlcXVpcmVkQXR0cn0vPlxcbmA7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5oZWxwVGV4dCkge1xyXG4gICAgICAgICAgICBodG1sICs9IGAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+JHtmaWVsZC5oZWxwVGV4dH08L3NtYWxsPlxcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJTZWxlY3QoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHIgPSBmaWVsZC5yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnJztcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGVBdHRyID0gZmllbGQubXVsdGlwbGUgPyAnbXVsdGlwbGUnIDogJyc7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWw+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPHNlbGVjdCBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgY2xhc3M9XCJzZWxlY3QyIGZvcm0tY29udHJvbFwiICR7cmVxdWlyZWRBdHRyfSAke211bHRpcGxlQXR0cn0+XFxuYDtcclxuICAgICAgICBodG1sICs9IHRoaXMuX21ha2VPcHRpb25UYWdzKGZpZWxkLm9wdGlvbnNNYXAsIGZpZWxkLnJlcXVpcmVkKTtcclxuICAgICAgICBodG1sICs9ICcgIDwvc2VsZWN0Plxcbic7XHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyVGV4dGFyZWEoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHIgPSBmaWVsZC5yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnJztcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWw+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPHRleHRhcmVhIGRhdGEtbmFtZT1cIiR7ZmllbGQubmFtZX1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIke2ZpZWxkLnJvd3N9XCIgJHtyZXF1aXJlZEF0dHJ9PiR7ZmllbGQuZGVmYXVsdFZhbHVlfTwvdGV4dGFyZWE+XFxuYDtcclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJDS0VkaXRvcihmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbD4ke2ZpZWxkLmxhYmVsfSR7cmVxdWlyZWRMYWJlbH08L2xhYmVsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8dGV4dGFyZWEgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGVsZW1lbnQtY2tlZGl0b3JcIiAke3JlcXVpcmVkQXR0cn0+PC90ZXh0YXJlYT5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckltYWdlKGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRMYWJlbCA9IGZpZWxkLnJlcXVpcmVkID8gJyAqJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IGxpbWl0U2l6ZSA9IEZvcm1CdWlsZGVyLklNQUdFX01BWF9TSVpFX01CO1xyXG5cclxuICAgICAgICBsZXQgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLWltYWdlXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNvbnRyb2wtbGFiZWwgbWItMlwiPiR7ZmllbGQubGFiZWx9JHtyZXF1aXJlZExhYmVsfTwvbGFiZWw+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfV91cmxcIi8+XFxuYDtcclxuXHJcbiAgICAgICAgLy8gQ29udGVuZXVyIHByaW5jaXBhbCBzdHlsZSBcImNhcnRlXCJcclxuICAgICAgICBodG1sICs9IGAgIDxkaXYgY2xhc3M9XCJjYXJkIGJnLWxpZ2h0IGJvcmRlci1kYXNoZWQgaW1hZ2UtdXBsb2FkLXdpZGdldFwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXIgcC00XCI+XFxuYDtcclxuXHJcbiAgICAgICAgLy8gw4l0YXQgdmlkZVxyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS11cGxvYWQtZW1wdHlcIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTMgdGV4dC1tdXRlZFwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaW1hZ2UgZmEtM3hcIj48L2k+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgIDwvZGl2PlxcbmA7XHJcblxyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdhcC0yIG1iLTNcIj5cXG5gO1xyXG5cclxuICAgICAgICAvLyBCb3V0b24gVXBsb2FkIExvY2FsIChpbnB1dCB3cmFwcMOpKVxyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gbWItMFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11cGxvYWQgbWUtMVwiPjwvaT4gVXBsb2FkXFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIke2ZpZWxkLmFjY2VwdGVkRm9ybWF0c31cIiBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC0wIG9wYWNpdHktMCB3LTEwMCBoLTEwMFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiLz5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgICA8L2xhYmVsPlxcbmA7XHJcblxyXG4gICAgICAgIC8vIEJvdXRvbiBGaWxlIE1hbmFnZXJcclxuICAgICAgICBpZiAoZmllbGQudXNlRmlsZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zZWxlY3QtZnJvbS1maWxlbWFuYWdlclwiIGRhdGEtdGFyZ2V0PVwiJHtmaWVsZC5uYW1lfVwiPlxcbmA7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLW9wZW4gbWUtMVwiPjwvaT4gTcOpZGlhdGjDqHF1ZVxcbmA7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgICAgICAgICA8L2J1dHRvbj5cXG5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICA8L2Rpdj5cXG5gO1xyXG5cclxuICAgICAgICBodG1sICs9IGAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgZC1ibG9ja1wiPkZvcm1hdHM6ICR7ZmllbGQuYWNjZXB0ZWRGb3JtYXRzLnNwbGl0KCcsJykubWFwKGYgPT4gZi5yZXBsYWNlKCdpbWFnZS8nLCAnLicpKS5qb2luKCcsICcpfTwvc21hbGw+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgZC1ibG9ja1wiPk1heDogJHtsaW1pdFNpemV9TW8g4oCiIFJlY29tbWFuZMOpOiAke2ZpZWxkLmZvcm1hdH08L3NtYWxsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgPC9kaXY+XFxuYDsgLy8gRmluIGVtcHR5IHN0YXRlXHJcblxyXG4gICAgICAgIC8vIMOJdGF0IFByZXZpZXdcclxuICAgICAgICBodG1sICs9IGAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtdXBsb2FkLXByZXZpZXdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXByZXZpZXctY29udGFpbmVyIG1iLTJcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3M9XCJpbWctZmx1aWQgcm91bmRlZCBib3JkZXIgYmctd2hpdGVcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDIwMHB4OyBvYmplY3QtZml0OiBjb250YWluO1wiIGFsdD1cIlByZXZpZXdcIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBlbmQtMCB0cmFuc2xhdGUtbWlkZGxlLXkgZmlsZS1wcmV2aWV3LWRlbGV0ZVwiIHN0eWxlPVwicmlnaHQ6IC0xMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IHBhZGRpbmc6IDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4O1wiPjwvaT5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgICA8L2J1dHRvbj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPC9kaXY+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgIDxkaXY+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBmaWxlbmFtZS1wcmV2aWV3XCI+PC9zbWFsbD48L2Rpdj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgIDwvZGl2PlxcbmA7IC8vIEZpbiBwcmV2aWV3IHN0YXRlXHJcblxyXG4gICAgICAgIGh0bWwgKz0gYCAgICA8L2Rpdj5cXG5gOyAvLyBGaW4gY2FyZC1ib2R5XHJcbiAgICAgICAgaHRtbCArPSBgICA8L2Rpdj5cXG5gOyAvLyBGaW4gY2FyZFxyXG4gICAgICAgIGh0bWwgKz0gYDwvZGl2PlxcbmA7XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJVcmwoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHIgPSBmaWVsZC5yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnJztcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWw+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgJHtyZXF1aXJlZEF0dHJ9Lz5cXG5gO1xyXG5cclxuICAgICAgICBpZiAoZmllbGQuc2hvd1Rvb2x0aXApIHtcclxuICAgICAgICAgICAgaHRtbCArPSAnICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlVSTCBkZSBsYSB2aWTDqW8uIEV4ZW1wbGUgOiBodHRwczovL3lvdXR1LmJlLzA5MTI4Nzwvc21hbGw+XFxuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckljb24oZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHIgPSBmaWVsZC5yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnJztcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB0aGlzLl9nZXRJY29ucygpO1xyXG5cclxuICAgICAgICBsZXQgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIGRhdGEtc3Bhbj1cIiR7ZmllbGQuc3Bhbn1cIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGxhYmVsPiR7ZmllbGQubGFiZWx9JHtyZXF1aXJlZExhYmVsfTwvbGFiZWw+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxzZWxlY3QgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfVwiIGNsYXNzPVwic2VsZWN0MiBmb3JtLWNvbnRyb2xcIiAke3JlcXVpcmVkQXR0cn0+XFxuYDtcclxuICAgICAgICBodG1sICs9IHRoaXMuX21ha2VPcHRpb25UYWdzKGljb25zLCBmaWVsZC5yZXF1aXJlZCk7XHJcbiAgICAgICAgaHRtbCArPSAnICA8L3NlbGVjdD5cXG4nO1xyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclRhYmxlKGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8dGQ+PHRleHRhcmVhIGRhdGEtbmFtZT1cIiR7bmFtZX1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIxXCI+PC90ZXh0YXJlYT48L3RkPmA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZSA9IChuYkNvbHMsIG5hbWVQcmVmaXgsIGxhYmVsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBodG1sID0gYDx0cj48dGg+JHtsYWJlbH08L3RoPmA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJDb2xzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gY29sKGAke25hbWVQcmVmaXh9XyR7aX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sICs9ICc8L3RyPic7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSAnICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zbVwiPlxcbic7XHJcbiAgICAgICAgaHRtbCArPSAnICAgIDx0Ym9keT5cXG4nO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBodG1sICs9IGxpbmUoZmllbGQuY29scywgYHRhYmxlX2NlbGxfJHtpfWAsIGkgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwgKz0gJyAgICA8L3Rib2R5Plxcbic7XHJcbiAgICAgICAgaHRtbCArPSAnICA8L3RhYmxlPlxcbic7XHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVySGVscChmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBgPHA+PGVtPiR7ZmllbGQubWVzc2FnZX08L2VtPjwvcD5cXG5gO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJSZXBlYXRhYmxlKGZpZWxkKSB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tcmVwZWF0YWJsZVwiIGRhdGEtbmFtZT1cIiR7ZmllbGQubmFtZX1cIiBkYXRhLW1pbj1cIiR7ZmllbGQubWlufVwiIGRhdGEtbWF4PVwiJHtmaWVsZC5tYXh9XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxkaXYgY2xhc3M9XCJmb3JtLXJlcGVhdGFibGUtaGVhZGVyXCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgPHN0cm9uZz4ke2ZpZWxkLmxhYmVsfTwvc3Ryb25nPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8L2Rpdj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGRpdiBjbGFzcz1cImZvcm0tcmVwZWF0YWJsZS1pdGVtc1wiPlxcbmA7XHJcblxyXG4gICAgICAgIC8vIFJlbmRlciBpbml0aWFsIGl0ZW1zXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZmllbGQuaW5pdGlhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgICA8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLXJlcGVhdGFibGUtaXRlbVwiIGRhdGEtaW5kZXg9XCIke2kgLSAxfVwiPlxcbmA7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgICAgIDxsZWdlbmQ+JHtmaWVsZC5sYWJlbH0gIyR7aX08L2xlZ2VuZD5cXG5gO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIodGhpcy5idWlsZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIGZpZWxkLnRlbXBsYXRlKGksIGl0ZW1CdWlsZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbUZpZWxkIG9mIGl0ZW1CdWlsZGVyLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSB0aGlzLl9yZW5kZXJGaWVsZChpdGVtRmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA+IGZpZWxkLm1pbikge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXIgZm9ybS1yZXBlYXRhYmxlLXJlbW92ZVwiPiR7ZmllbGQucmVtb3ZlQnV0dG9uVGV4dH08L2J1dHRvbj5cXG5gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IGAgICAgPC9maWVsZHNldD5cXG5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbCArPSBgICA8L2Rpdj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IGZvcm0tcmVwZWF0YWJsZS1hZGRcIj4ke2ZpZWxkLmFkZEJ1dHRvblRleHR9PC9idXR0b24+XFxuYDtcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIHRlbXBsYXRlIGZvciBuZXcgaXRlbXNcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIodGhpcy5idWlsZGVyRGF0YSk7XHJcbiAgICAgICAgLy8gVXNlIGEgdW5pcXVlIHBsYWNlaG9sZGVyIHRvIHN1cHBvcnQgbmVzdGVkIHJlcGVhdGFibGVzXHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBgX19JTkRFWF8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1fX2A7XHJcblxyXG4gICAgICAgIGZpZWxkLnRlbXBsYXRlKHBsYWNlaG9sZGVyLCB0ZW1wbGF0ZUJ1aWxkZXIpO1xyXG5cclxuICAgICAgICBodG1sICs9IGAgIDx0ZW1wbGF0ZSBjbGFzcz1cImZvcm0tcmVwZWF0YWJsZS10ZW1wbGF0ZVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3BsYWNlaG9sZGVyfVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tcmVwZWF0YWJsZS1pdGVtXCIgZGF0YS1pbmRleD1cIiR7cGxhY2Vob2xkZXJ9XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICA8bGVnZW5kPiR7ZmllbGQubGFiZWx9ICMke3BsYWNlaG9sZGVyfTwvbGVnZW5kPlxcbmA7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtRmllbGQgb2YgdGVtcGxhdGVCdWlsZGVyLmZpZWxkcykge1xyXG4gICAgICAgICAgICBodG1sICs9IHRoaXMuX3JlbmRlckZpZWxkKGl0ZW1GaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyIGZvcm0tcmVwZWF0YWJsZS1yZW1vdmVcIj4ke2ZpZWxkLnJlbW92ZUJ1dHRvblRleHR9PC9idXR0b24+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgPC9maWVsZHNldD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPC90ZW1wbGF0ZT5cXG5gO1xyXG5cclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBIRUxQRVJTID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgX2FkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFJvdyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSb3cucHVzaChmaWVsZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGROYW1lcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBGb3JtQnVpbGRlcjogRHVwbGljYXRlIGZpZWxkIG5hbWUgXCIke25hbWV9XCJgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWVsZE5hbWVzLmFkZChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWFrZU9wdGlvblRhZ3Mob3B0aW9ucywgaXNSZXF1aXJlZCkge1xyXG4gICAgICAgIGxldCBvcHRpb25UYWdzID0gaXNSZXF1aXJlZCA/ICcnIDogJzxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj4nO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBvcHRpb25WYWx1ZSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tvcHRpb25WYWx1ZV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UYWdzICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtvcHRpb25WYWx1ZX1cIj4ke29wdGlvbnNbb3B0aW9uVmFsdWVdfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UYWdzICs9IGA8b3B0Z3JvdXAgbGFiZWw9XCIke29wdGlvblZhbHVlfVwiPmA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdWJvcHRpb25WYWx1ZSBpbiBvcHRpb25zW29wdGlvblZhbHVlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRhZ3MgKz0gYDxvcHRpb24gdmFsdWU9XCIke3N1Ym9wdGlvblZhbHVlfVwiPiR7b3B0aW9uc1tvcHRpb25WYWx1ZV1bc3Vib3B0aW9uVmFsdWVdfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UYWdzICs9IGA8L29wdGdyb3VwPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25UYWdzO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJY29ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcImljb24tYXBwbGljYXRpb25cIjogXCJBcHBsaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBcImljb24tbWFya2V0cGxhY2VcIjogXCJNYXJrZXRwbGFjZVwiLFxyXG4gICAgICAgICAgICBcImljb24tcGF5XCI6IFwiUGF5XCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1hY2hldGVyXCI6IFwiQWNoZXRlclwiLFxyXG4gICAgICAgICAgICBcImljb24tZW52b3llclwiOiBcIkVudm95ZXJcIixcclxuICAgICAgICAgICAgXCJpY29uLWRlZG91YW5lclwiOiBcIkTDqWRvdWFuZXJcIixcclxuICAgICAgICAgICAgXCJpY29uLW91dnJpclwiOiBcIk91dnJpclwiLFxyXG4gICAgICAgICAgICBcImljb24tYWZmcmFuY2hpclwiOiBcIkFmZnJhbmNoaXJcIixcclxuICAgICAgICAgICAgXCJpY29uLWF2aW9uXCI6IFwiQXZpb25cIixcclxuICAgICAgICAgICAgXCJpY29uLWF2aXMtcmFcIjogXCJBdmlzIFJBXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1hdmlzLXJiXCI6IFwiQXZpcyBSQlwiLFxyXG4gICAgICAgICAgICBcImljb24tYmF0ZWF1XCI6IFwiQmF0ZWF1XCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1ib2l0ZS1wb3N0YWxlXCI6IFwiQm9pdGUgcG9zdGFsZVwiLFxyXG4gICAgICAgICAgICBcImljb24tYnVsbGV0aW4tZGVtYXRlcmlhbGlzZVwiOiBcIkJ1bGxldGluIGTDqW1hdMOpcmlhbGlzw6lcIixcclxuICAgICAgICAgICAgXCJpY29uLWJ1cmVhdS1kZS1wb3N0ZVwiOiBcIkJ1cmVhdSBkZSBwb3N0ZVwiLFxyXG4gICAgICAgICAgICBcImljb24tY2FydGUtYmFuY2FpcmVcIjogXCJDYXJ0ZSBiYW5jYWlyZVwiLFxyXG4gICAgICAgICAgICBcImljb24tY2hlcXVlc1wiOiBcIkNow6hxdWVzXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1jb2xsZWN0ZXJcIjogXCJDb2xsZWN0ZXIgbGUgY291cnJpZXJcIixcclxuICAgICAgICAgICAgXCJpY29uLWRpc3RyaWJ1ZXJcIjogXCJEaXN0cmlidWVyXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1lbnZveWVyLWxyZVwiOiBcIkVudm95ZXIgTFJFXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1lc3BlY2VzXCI6IFwiRXNww6hjZXNcIixcclxuICAgICAgICAgICAgXCJpY29uLWZhY3RldXJcIjogXCJmYWN0ZXVyXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1mYWN0dXJlXCI6IFwiRmFjdHVyZVwiLFxyXG4gICAgICAgICAgICBcImljb24taWxlXCI6IFwiw69sZVwiLFxyXG4gICAgICAgICAgICBcImljb24taW1wcmltZXJcIjogXCJJbXByaW1lclwiLFxyXG4gICAgICAgICAgICBcImljb24taW50ZXJuZXRcIjogXCJJbnRlcm5ldFwiLFxyXG4gICAgICAgICAgICBcImljb24tanVzdGlmaWNhdGlmXCI6IFwiSnVzdGlmaWNhdGlmXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1saXZyYWlzb25cIjogXCJMaXZyYWlzb25cIixcclxuICAgICAgICAgICAgXCJpY29uLXBpZWNlLWlkZW50aXRlXCI6IFwiUGnDqGNlIGQnaWRlbnRpdMOpXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1wb3N0ZXItY29saXNcIjogXCJQb3N0ZXIgbGUgY29saXNcIixcclxuICAgICAgICAgICAgXCJpY29uLXBvc3Rlci1sZXR0cmVcIjogXCJQb3N0ZXIgbGEgbGV0dHJlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1wcmVsZXZlbWVudFwiOiBcIlByw6lsw6h2ZW1lbnRcIixcclxuICAgICAgICAgICAgXCJpY29uLXRpbWJyZVwiOiBcIlRpbWJyZXNcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gREVCVUcgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlYnVnOiBsb2cgdGhlIGN1cnJlbnQgZm9ybSBzdHJ1Y3R1cmVcclxuICAgICAqL1xyXG4gICAgZGVidWcoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm1CdWlsZGVyIHN0cnVjdHVyZTonLCB0aGlzLmZpZWxkcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnQgZm9ybSBzdHJ1Y3R1cmUgYXMgSlNPTlxyXG4gICAgICovXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZmllbGRzLCBudWxsLCAyKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgRm9ybUJ1aWxkZXIgZnJvbSAnLi9Gb3JtQnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChidWlsZGVyRGF0YSA9IHt9KSB7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ03DqWRpYScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaW1hZ2VzJyxcbiAgICAgICAgICAgIG5hbWU6ICdTbGlkZXInLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdzbGlkZXInLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ3NsaWRlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTbGlkZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gc2xpZGUnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKGBzbGlkZXNdWyR7aWR4fV1bb3JkZXJgLCAnT3JkcmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgc2xpZGVzXVske2lkeH1dW2ltYWdlUGF0aGAsICdJbWFnZSBhcnJpw6hyZSBwbGFuICgxMzg3cHggWCA0NDBweCknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpIDw9IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJzEzODd4NDQwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHNsaWRlc11bJHtpZHh9XVt0aXRsZWAsICdUaXRyZSBkdSBzbGlkZXInLCB7IHJlcXVpcmVkOiBpIDw9IDIsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgc2xpZGVzXVske2lkeH1dW3N1YlRpdGxlYCwgJ1NvdXMtdGl0cmUgZHUgc2xpZGVyJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHNsaWRlc11bJHtpZHh9XVtidXR0b25UaXRsZWAsICdMaWJlbGzDqSBkdSBib3V0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBzbGlkZXNdWyR7aWR4fV1bYnV0dG9uUGF0aGAsICdVUkwgZGUgcmVkaXJlY3Rpb24gZHUgYm91dG9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ03DqWRpYScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaW1hZ2VzJyxcbiAgICAgICAgICAgIG5hbWU6ICdDYXJvdXNlbCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Nhcm91c2VsJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdpbWFnZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuZSBpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgaW1hZ2VzXVske2lkeH1dW2ltYWdlUGF0aGAsICdJbWFnZSBhcnJpw6hyZSBwbGFuJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaSA8PSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQmFzaXF1ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnVGl0cmUgKEgxIMOgIEg2KScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RpdGxlJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2FsaWdubWVudCcsICdBbGlnbmVtZW50JywgeyBzdGFydDogJ0dhdWNoZScsIGNlbnRlcjogJ0NlbnRyZScsIGVuZDogJ0Ryb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGV0aXRsZScsICdTdHlsZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnY29sb3InLCAnQ291bGV1cicsIHsgcHJpbWFyeTogJ0RlZmF1dCcsIGJvZHk6ICdOb2lyJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3VibGluZScsICdTb3VsaWduw6knLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01pc2UgZW4gcGFnZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaW1hZ2UnLFxuICAgICAgICAgICAgbmFtZTogJ0JhbmRlYXUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdiYW5kZWF1JyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2hlaWdodCcsICdIYXV0ZXVyIGR1IGJhbmRlYXUnLCB7IGZhbHNlOiAnbm9ybWFsJywgdHJ1ZTogJ0VjcmFuJywgZW50ZXRlOiAnRW50w6p0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnaW1hZ2VQYXRoJywgJ0ltYWdlJywgeyBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdhbGlnbm1lbnQnLCAnQWxpZ25lbWVudCcsIHsgc3RhcnQ6ICdHYXVjaGUnLCBjZW50ZXI6ICdDZW50cmUnLCBlbmQ6ICdEcm9pdGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndG9wdGl0bGUnLCAnVGl0cmUgYXUgZGVzc3VzJylcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBlJywgJ1R5cGUnLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N0eWxldGl0bGUnLCAnU3R5bGUgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZScsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdidXR0b25UaXRsZScsICdMaWJlbGzDqSBkdSBib3V0b24nKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdidXR0b25QYXRoJywgJ1VSTCBkZSByZWRpcmVjdGlvbiBkdSBib3V0b24nKVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3RhcmdldCcsICdPdXZlcnR1cmUgZHUgbGllbicsIHsgX2JsYW5rOiAnTm91dmVsbGUgZmVuw6p0cmUnLCBfc2VsZjogJ0ZlbsOqdHJlIGFjdHVlbGxlJyB9LCB7IHJlcXVpcmVkOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQmFzaXF1ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtYWxpZ24tbGVmdCcsXG4gICAgICAgICAgICBuYW1lOiAnVGV4dGUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcigndGV4dCcsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0Jhc2lxdWUnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWFsaWduLWp1c3RpZnknLFxuICAgICAgICAgICAgbmFtZTogJ1RleHRlIGF2ZWMgZm9uZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RleHRfZm9uZCcsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoJ3RleHQnLCAnQ29udGVudScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYXNpcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1pbWFnZScsXG4gICAgICAgICAgICBuYW1lOiAnSW1hZ2UnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdpbWFnZScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlUGF0aDEnLCAnSW1hZ2UnLCB7IHJlcXVpcmVkOiB0cnVlLCBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYXNpcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1saW5rJyxcbiAgICAgICAgICAgIG5hbWU6ICdCb3V0b24nLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdidXR0b24nLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnYWxpZ25tZW50JywgJ0FsaWduZW1lbnQnLCB7IHN0YXJ0OiAnR2F1Y2hlJywgY2VudGVyOiAnQ2VudHJlJywgZW5kOiAnRHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRVcmwoJ3VybCcsICdMaWVuJywgeyByZXF1aXJlZDogdHJ1ZSwgc2hvd1Rvb2x0aXA6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0YXJnZXQnLCAnT3V2ZXJ0dXJlIGR1IGxpZW4nLCB7IF9ibGFuazogJ05vdXZlbGxlIGZlbsOqdHJlJywgX3NlbGY6ICdGZW7DqnRyZSBhY3R1ZWxsZScgfSwgeyByZXF1aXJlZDogdHJ1ZSwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01pc2UgZW4gcGFnZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtbWludXMnLFxuICAgICAgICAgICAgbmFtZTogJ1PDqXBhcmF0ZXVyJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnaHInLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGUnLCAnU3R5bGUnLCB7IG5vX2xpbmU6ICdTYW5zIGxpZ25lJywgd2l0aF9saW5lOiAnQXZlYyBMaWduZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2hlaWdodCcsICdFc3BhY2VtZW50JywgeyA0OiAnTm9ybWFsJywgNTogJ0dyYW5kJywgMDogJ1BldGl0JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQmFzaXF1ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtbmV3c3BhcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBUaXRyZSBldCB0ZXh0ZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX3RpdGxlX3RleHQnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2FsaWdubWVudCcsICdBbGlnbmVtZW50IGR1IHRpdHJlJywgeyBzdGFydDogJ0dhdWNoZScsIGNlbnRlcjogJ0NlbnRyZScsIGVuZDogJ0Ryb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlJywgeyByZXF1aXJlZDogdHJ1ZSwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudTEnLCAnQ29udGVudScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNaXNlIGVuIHBhZ2UnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWNvbHVtbnMnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIFRleHRlIDIgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja190ZXh0JyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgMTM6ICcxLzMgLSAyLzMnLCAxMjogJzEvMiAtIDEvMicsIDIzOiAnMi8zIC0gMS8zJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdDb2xvbm5lIGdhdWNoZScsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUxJywgJ1RpdHJlIGdhdWNoZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudTEnLCAnQ29udGVudSBnYXVjaGUnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0NvbG9ubmUgZHJvaXRlJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZTInLCAnVGl0cmUgZHJvaXQnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoJ2NvbnRlbnUyJywgJ0NvbnRlbnUgZHJvaXQnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNaXNlIGVuIHBhZ2UnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWltYWdlcycsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgSW1hZ2UgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19pbWFnZV9jb2x1bW4yMzQnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnYWxpZ25tZW50JywgJ0FsaWduZW1lbnQgZGVzIGJsb2NrcycsIHsgc3RhcnQ6ICdHYXVjaGUnLCBjZW50ZXI6ICdDZW50cmUnLCBlbmQ6ICdEcm9pdGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnY29sdW1ucycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb2xvbm5lJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1bmUgY29sb25uZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgY29sdW1uc11bJHtpZHh9XVtpbWFnZVBhdGhgLCBgSW1hZ2UgJHtpfcOocmUgY29sb25uZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGkgPD0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWRGb3JtYXRzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgY29sdW1uc11bJHtpZHh9XVt0aXRsZWAsICdUaXRyZScsIHsgcmVxdWlyZWQ6IGkgPD0gMiwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb2x1bW5zXVske2lkeH1dW2NvbnRlbnVgLCAnVGl0cmUgZHUgbGllbicsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb2x1bW5zXVske2lkeH1dW2J1dHRvblBhdGhgLCAnTGllbiBkZSByZWRpcmVjdGlvbicsIHsgc3BhbjogMiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTWlzZSBlbiBwYWdlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1pY29ucycsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgUGljdG8gY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19waWN0b19jb2x1bW4yMzQnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2FsaWdubWVudCcsICdBbGlnbmVtZW50IGRlcyBibG9ja3MnLCB7IHN0YXJ0OiAnR2F1Y2hlJywgY2VudGVyOiAnQ2VudHJlJywgZW5kOiAnRHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ2NvbHVtbnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29sb25uZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW5lIGNvbG9ubmUnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkSWNvblBpY2tlcihgY29sdW1uc11bJHtpZHh9XVtpY29uUGF0aGAsIGBQaWN0byAke2l9w6hyZSBjb2xvbm5lYCwgeyByZXF1aXJlZDogaSA9PT0gMSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb2x1bW5zXVske2lkeH1dW3RpdGxlYCwgYFRpdHJlICR7aX3DqHJlIGNvbG9ubmVgLCB7IHJlcXVpcmVkOiBpID09PSAxLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKGBjb2x1bW5zXVske2lkeH1dW2NvbnRlbnVgLCBgQ29udGVudSAke2l9w6hyZSBjb2xvbm5lYCwgeyByZXF1aXJlZDogaSA9PT0gMSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb2x1bW5zXVske2lkeH1dW2J1dHRvblBhdGhgLCBgTGllbiAke2l9w6hyZSBjb2xvbm5lYCwgeyByZXF1aXJlZDogaSA9PT0gMSwgc3BhbjogMiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTcOpZGlhJyxcbiAgICAgICAgICAgIGljb246ICdmYS1waG90by12aWRlbycsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgSW1hZ2UtVmlkw6lvIDIgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19pbWFnZV92aWRlb19jb2x1bW4yJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdwb3NpdGlvbicsICdBZmZpY2hhZ2UnLCB7IGltYWdlX3ZpZGVvOiAnSW1hZ2Ugw6AgZ2F1Y2hlIC0gVmlkw6lvIMOgIGRyb2l0ZScsIHZpZGVvX2ltYWdlOiAnVmlkw6lvIMOgIGdhdWNoZSAtIEltYWdlIMOgIGRyb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnSW1hZ2UnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKCdpbWFnZVBhdGgnLCAnSW1hZ2UnLCB7IHJlcXVpcmVkOiB0cnVlLCBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlSW1hZ2UnLCBcIkxpYmVsbMOpIGRlIGwnaW1hZ2VcIiwgeyByZXF1aXJlZDogdHJ1ZSwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoJ2NvbnRlbnVJbWFnZScsIFwiQ29udGVudSBkZSBsJ2ltYWdlXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdWaWTDqW8nLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFVybCgndmlkZW9QYXRoJywgJ1VSTCBkZSBsYSB2aWTDqW8nLCB7IHJlcXVpcmVkOiB0cnVlLCBzaG93VG9vbHRpcDogdHJ1ZSwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGVWaWRlbycsICdMaWJlbGzDqSBkZSBsYSB2aWTDqW8nLCB7IHJlcXVpcmVkOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudVZpZGVvJywgJ0NvbnRlbnUgZGUgbGEgdmlkw6lvJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNaXNlIGVuIHBhZ2UnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWlkLWNhcmQnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIEltYWdlLVRleHRlIDIgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19pbWFnZV90ZXh0ZV9jb2x1bW4yJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBlJywgJ1R5cGUnLCB7IDEzOiAnMS8zIC0gMi8zJywgMTI6ICcxLzIgLSAxLzInLCAyMzogJzIvMyAtIDEvMycgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3Bvc2l0aW9uJywgJ0FmZmljaGFnZScsIHsgaW1hZ2VfdGV4dDogJ0ltYWdlIMOgIGdhdWNoZSAtIFRleHRlIMOgIGRyb2l0ZScsIHRleHRfaW1hZ2U6ICdUZXh0ZSDDoCBnYXVjaGUgLSBJbWFnZSDDoCBkcm9pdGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0ltYWdlJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnaW1hZ2VQYXRoJywgJ0ltYWdlJywgeyByZXF1aXJlZDogdHJ1ZSwgYWNjZXB0ZWRGb3JtYXRzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcnIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnVGV4dGUnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RvcHRpdGxlJywgJ1RpdHJlIGF1IGRlc3N1cycsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZXRpdGxlJywgJ0JhbGlzZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N0eWxldGl0bGUnLCAnU3R5bGUgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdzdWJ0aXRsZScsICdTb3VzLXRpdHJlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N1YnRpdGxlX2NsYXNzJywgJ0NvdWxldXIgU291cy10aXRyZScsIHsgcHJpbWFyeTogJ0TDqWZhdXQnLCBzZWNvbmRhcnk6ICdzZWNvbmRhaXJlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudScsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNw6lkaWEnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXZpZGVvJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBWaWRlby1UZXh0ZSAyIGNvbG9ubmVzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmxvY2tfdmlkZW9fdGV4dGVfY29sdW1uMicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZScsICdUeXBlJywgeyAxMzogJzEvMyAtIDIvMycsIDEyOiAnMS8yIC0gMS8yJywgMjM6ICcyLzMgLSAxLzMnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdwb3NpdGlvbicsICdBZmZpY2hhZ2UnLCB7IGltYWdlX3RleHQ6ICdJbWFnZSDDoCBnYXVjaGUgLSBUZXh0ZSDDoCBkcm9pdGUnLCB0ZXh0X2ltYWdlOiAnVGV4dGUgw6AgZ2F1Y2hlIC0gSW1hZ2Ugw6AgZHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdWaWTDqW8nLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFVybCgndmlkZW9QYXRoJywgJ1VSTCBkZSBsYSB2aWTDqW8nLCB7IHJlcXVpcmVkOiB0cnVlLCBzaG93VG9vbHRpcDogdHJ1ZSwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ1RleHRlJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0b3B0aXRsZScsICdUaXRyZSBhdSBkZXNzdXMnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGV0aXRsZScsICdCYWxpc2UgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdHlsZXRpdGxlJywgJ1N0eWxlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgnc3VidGl0bGUnLCAnU291cy10aXRyZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdWJ0aXRsZV9jbGFzcycsICdDb3VsZXVyIFNvdXMtdGl0cmUnLCB7IHByaW1hcnk6ICdEw6lmYXV0Jywgc2Vjb25kYXJ5OiAnc2Vjb25kYWlyZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoJ2NvbnRlbnUnLCAnQ29udGVudScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtY2hhcnQtYmFyJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBDaGlmZnJlcyBjbMOpcy1UZXh0ZSAyIGNvbG9ubmVzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmxvY2tfa2V5ZGF0YV90ZXh0ZV9jb2x1bW4yJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgMTM6ICcxLzMgLSAyLzMnLCAxMjogJzEvMiAtIDEvMicsIDIzOiAnMi8zIC0gMS8zJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgncG9zaXRpb24nLCAnQWZmaWNoYWdlJywgeyBpbWFnZV90ZXh0OiAnQ2hpZmZyZSBjbMOpIMOgIGdhdWNoZSAtIFRleHRlIMOgIGRyb2l0ZScsIHRleHRfaW1hZ2U6ICdUZXh0ZSDDoCBnYXVjaGUgLSBDaGlmZnJlIGNsw6knIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ1RleHRlJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0b3B0aXRsZScsICdUaXRyZSBhdSBkZXNzdXMnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGV0aXRsZScsICdCYWxpc2UgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdHlsZXRpdGxlJywgJ1N0eWxlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdzdWJ0aXRsZScsICdTb3VzLXRpdHJlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N1YnRpdGxlX2NsYXNzJywgJ0NvdWxldXIgU291cy10aXRyZScsIHsgcHJpbWFyeTogJ0TDqWZhdXQnLCBzZWNvbmRhcnk6ICdzZWNvbmRhaXJlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudScsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0NoaWZmcmVzIGNsw6lzJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudTInLCAnQ29udGVudScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtZm9sZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBPbmdsZXQnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19vbmdsZXRfdGV4dCcsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnb25nbGV0cycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPbmdsZXQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuIG9uZ2xldCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBvbmdsZXRzXVske2lkeH1dW2xpYmVsbGVgLCBcIkxpYmVsbMOpIGRlIGwnb25nbGV0XCIsIHsgcmVxdWlyZWQ6IGkgPD0gMiwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcihgb25nbGV0c11bJHtpZHh9XVtjb250ZW51YCwgJ0NvbnRlbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtcXVlc3Rpb24tY2lyY2xlJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBPbmdsZXQgRkFRJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmxvY2tfb25nbGV0X2ZhcScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ29uZ2xldHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT25nbGV0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBvbmdsZXQnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgb25nbGV0c11bJHtpZHh9XVtsaWJlbGxlYCwgXCJMaWJlbGzDqSBkZSBsJ29uZ2xldFwiLCB7IHJlcXVpcmVkOiBpIDw9IDIsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgb25nbGV0c11bJHtpZHh9XVt0aXRsZWAsICdUaXRyZSBkdSBibG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYG9uZ2xldHNdWyR7aWR4fV1bc3VidGl0bGVgLCAnU291cy10aXRyZSBkdSBibG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoYG9uZ2xldHNdWyR7aWR4fV1bZmFxc2AsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGQVEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1bmUgRkFRJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaiwgc3ViQnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgamR4ID0gdHlwZW9mIGogPT09ICdzdHJpbmcnID8gaiArICdfTUlOVVNfMScgOiBqIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJCdWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZE51bWJlcihgb25nbGV0c11bJHtpZHh9XVtmYXFzXVske2pkeH1dW29yZGVyYCwgJ09yZHJlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgb25nbGV0c11bJHtpZHh9XVtmYXFzXVske2pkeH1dW3F1ZXN0aW9uYCwgXCJUaXRyZSBkZSBsYSBxdWVzdGlvblwiLCB7IHJlcXVpcmVkOiBqIDw9IDIgJiYgaSA8PSAyLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYG9uZ2xldHNdWyR7aWR4fV1bZmFxc11bJHtqZHh9XVthbnN3ZXJgLCBcIlLDqXBvbnNlXCIsIHsgcmVxdWlyZWQ6IGogPD0gMiAmJiBpIDw9IDIsIHNwYW46IDIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtZmlsZS1kb3dubG9hZCcsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgXCJEb2N1bWVudHMgdMOpbMOpY2hhcmdlYWJsZXNcIicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX2RvY3VtZW50c190ZWxlY2hhcmdlYWJsZXMnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdkb2N1bWVudHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRG9jdW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuIGRvY3VtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBkb2N1bWVudHNdWyR7aWR4fV1baW1hZ2VQYXRoYCwgJ0RvY3VtZW50JywgeyByZXF1aXJlZDogaSA9PT0gMSwgYWNjZXB0ZWRGb3JtYXRzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcsYXBwbGljYXRpb24vcGRmJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBkb2N1bWVudHNdWyR7aWR4fV1bdGl0bGVgLCAnVGl0cmUnLCB7IHJlcXVpcmVkOiBpID09PSAxLCBzcGFuOiAyIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1mb2xkZXItb3BlbicsXG4gICAgICAgICAgICBuYW1lOiAnT25nbGV0IGRlIHBhZ2UnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdvbmdsZXQnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdvbmdsZXRzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ09uZ2xldCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gb25nbGV0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYG9uZ2xldHNdWyR7aWR4fV1bbGliZWxsZWAsIGBPbmdsZXQgJHtpfSAtIExpYmVsbMOpYCwgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdChgb25nbGV0c11bJHtpZHh9XVtjb250ZW51YCwgYE9uZ2xldCAke2l9IC0gQ29udGVudWAsIGJ1aWxkZXJEYXRhLm9uZ2xldHMsIHsgc3BhbjogMiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtdGFibGUnLFxuICAgICAgICAgICAgbmFtZTogJ1RhYmxlYXUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0YWJsZScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZEhlbHAoJ0Nob2lzaXIgdW5lIG9wdGlvbiBkXFwnZW50w6p0ZSBldCByZW1wbGlyIGF1dGFudCBkZSBsaWduZXMgLyBjb2xvbm5lcyBxdWUgbsOpY2Vzc2FpcmUnKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2hlYWRlcnMnLCAnRW50w6p0ZXMnLCB7IGZpcnN0X2xpbmU6ICdQcmVtacOocmUgbGlnbmUnLCBmaXJzdF90d29fbGluZXM6ICdQcmVtacOocmUgZXQgZGV1eGnDqG1lIGxpZ25lcycgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBlJywgJ1R5cGUnLCB7IHJlZ3VsYXI6ICdUYWJsZWF1IHN0YW5kYXJkJywgcGl2b3Q6ICdUYWJsZWF1IGNyb2lzw6knIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRhYmxlKDIwLCA1KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0F2YW5jw6knLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXRhYmxlJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBJbWFnZS1UYWJsZWF1IDIgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19pbWFnZV90YWJsZWF1X2NvbHVtbjInLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnY29sVHlwZScsICdUeXBlJywgeyAxMzogJzEvMyAtIDIvMycsIDEyOiAnMS8yIC0gMS8yJywgMjM6ICcyLzMgLSAxLzMnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdwb3NpdGlvbicsICdBZmZpY2hhZ2UnLCB7IGltYWdlX3RhYmxlYXU6ICdJbWFnZSDDoCBnYXVjaGUgLSBUYWJsZWF1IMOgIGRyb2l0ZScsIHRhYmxlYXVfaW1hZ2U6ICdUYWJsZWF1IMOgIGdhdWNoZSAtIEltYWdlIMOgIGRyb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnSW1hZ2UnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKCdpbWFnZVBhdGgnLCAnSW1hZ2UnLCB7IHJlcXVpcmVkOiB0cnVlLCBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlSW1nJywgJ1RpdHJlIGRlIGxcXCdpbWFnZScsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ1RhYmxlYXUnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEhlbHAoJ0Nob2lzaXIgdW5lIG9wdGlvbiBkXFwnZW50w6p0ZSBldCByZW1wbGlyIGF1dGFudCBkZSBsaWduZXMgLyBjb2xvbm5lcyBxdWUgbsOpY2Vzc2FpcmUnKVxuICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnaGVhZGVycycsICdFbnTDqnRlcycsIHsgZmlyc3RfbGluZTogJ1ByZW1pw6hyZSBsaWduZScsIGZpcnN0X3R3b19saW5lczogJ1ByZW1pw6hyZSBldCBkZXV4acOobWUgbGlnbmVzJyB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBlJywgJ1R5cGUnLCB7IHJlZ3VsYXI6ICdUYWJsZWF1IHN0YW5kYXJkJywgcGl2b3Q6ICdUYWJsZWF1IGNyb2lzw6knIH0pXG4gICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGFibGUoOCwgNSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtY2hldnJvbi1kb3duJyxcbiAgICAgICAgICAgIG5hbWU6ICdBY2NvcmTDqW9uJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3JkaW9uJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnaXRlbXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWNjb3Jkw6lvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBpdGVtc11bJHtpZHh9XVt0aXRsZWAsICdUaXRyZScsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgaXRlbXNdWyR7aWR4fV1baW1hZ2VQYXRoYCwgJ0ltYWdlJywgeyBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoYGl0ZW1zXVske2lkeH1dW3BhcmFncmFwaGAsICdQYXJhZ3JhcGhlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0R5bmFtaXF1ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtcnNzJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBEZXJuaWVycyBhcnRpY2xlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2xhc3RfbmV3cycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZScsICdUeXBlIGFydGljbGUnLCB7IDE6ICdBY3R1YWxpdMOpcycsIDM6IFwiw4l2w6huZW1lbnRcIiB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZE51bWJlcignbGltaXQnLCBcIk5vbWJyZSBkJ8OpbMOpbWVudChzKSBtYXhpbXVtXCIpXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnRHluYW1pcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1uZXdzcGFwZXInLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIEFjdHVhbGl0w6lzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWN0dWFsaXRlcycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnY2F0ZWdvcnlJRCcsICdGaWx0cmUgZGVzIGFjdHVhbGl0w6lzIHZpYSB1bmUgY2F0w6lnb3JpZScsIGJ1aWxkZXJEYXRhLmNhdGVnb3JpZXMpXG4gICAgICAgICAgICAgICAgLmFkZE51bWJlcignbGltaXQnLCBcIk5vbWJyZSBkJ8OpbMOpbWVudChzKSBtYXhpbXVtXCIpXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RvcFRpdGxlJywgXCJUaXRyZSB0b3BcIiwgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZXRpdGxlJywgJ0JhbGlzZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGV0aXRsZScsICdTdHlsZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgXCJUaXRyZSBkdSBibG9jXCIsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignZGVzY3JpcHRpb24nLCBcIkRlc2NyaXB0aW9uIGR1IGJsb2NcIilcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgnYnV0dG9uVGl0bGUnLCBcIlRpdHJlIGR1IGJvdXRvbiBkZSByZWRpcmVjdGlvblwiLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNw6lkaWEnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXlvdXR1YmUnLFxuICAgICAgICAgICAgbmFtZTogJ1ZpZMOpbyBZb3V0dWJlJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAneW91dHViZScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFVybCgndmlkZW9QYXRoJywgJ1VSTCBkZSBsYSB2aWTDqW8nLCB7IHJlcXVpcmVkOiB0cnVlLCBzaG93VG9vbHRpcDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0F2YW5jw6knLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWNoYXJ0LWxpbmUnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIENoaWZmcmVzIGNsw6lzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmxvY2tfa2V5X2RhdGFzJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlUGF0aCcsICdJbWFnZScsIHsgYWNjZXB0ZWRGb3JtYXRzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcnIH0pXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZXRpdGxlJywgJ0JhbGlzZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGV0aXRsZScsICdTdHlsZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgXCJUaXRyZSBkdSBibG9jXCIsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdrZXlzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NoaWZmcmUgY2zDqScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gY2hpZmZyZSBjbMOpJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGtleXNdWyR7aWR4fV1ba2V5YCwgYENoaWZmcmUgY2zDqSAke2kgKyAxfWAsIHsgcmVxdWlyZWQ6IGkgPCAzLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGtleXNdWyR7aWR4fV1bZGF0YWAsIFwiRGVzY3JpcHRpZlwiLCB7IHJlcXVpcmVkOiBpIDwgMywgc3BhbjogMiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtdGgtbGFyZ2UnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIDQgQ2FyZHMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja180X2NhcmRzJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndG9wVGl0bGUnLCBcIlRpdHJlIHRvcCBkdSBibG9jXCIsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGV0aXRsZScsICdCYWxpc2UgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N0eWxldGl0bGUnLCAnU3R5bGUgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsIFwiVGl0cmUgZHUgYmxvY1wiLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgnYnV0dG9uVGl0bGUnLCBcIlRpdHJlIGR1IGJvdXRvbiBkZSByZWRpcmVjdGlvblwiKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdidXR0b25QYXRoJywgXCJVUkwgZGUgcmVkaXJlY3Rpb25cIilcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnY2FyZHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2FydGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuZSBjYXJ0ZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoYGNhcmRzXVske2lkeH1dW2FsaWdubWVudGAsICdBbGlnbmVtZW50IGRlcyDDqWzDqW1lbnRzJywgeyBzdGFydDogJ0dhdWNoZScsIGNlbnRlcjogJ0NlbnRyZScsIGVuZDogJ0Ryb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJY29uUGlja2VyKGBjYXJkc11bJHtpZHh9XVtpbWFnZUljb2AsICdJY8O0bmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjYXJkc11bJHtpZHh9XVt0aXRsZWAsIFwiVGl0cmUgZGUgbGEgY2FydGVcIiwgeyByZXF1aXJlZDogaSA9PT0gMCwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjYXJkc11bJHtpZHh9XVtkZXNjcmlwdGlvbmAsIFwiRGVzY3JpcHRpb24gZGUgbGEgY2FydGVcIiwgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNhcmRzXVske2lkeH1dW2xpbmtUaXRsZWAsIFwiVGl0cmUgZHUgbGllblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjYXJkc11bJHtpZHh9XVtsaW5rUGF0aGAsIFwiVVJMIHJlZGlyZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1saXN0LW9sJyxcbiAgICAgICAgICAgIG5hbWU6ICdFdGFwZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdzdGVwJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlUGF0aCcsICdJbWFnZScsIHsgYWNjZXB0ZWRGb3JtYXRzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcnIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ3N0ZXBzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0V0YXBlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1bmUgw6l0YXBlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHN0ZXBzXVske2lkeH1dW3N0ZXBgLCAnRXRhcGUgbsKwJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHN0ZXBzXVske2lkeH1dW3RpdGxlYCwgJ1RpdHJlJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKGBzdGVwc11bJHtpZHh9XVtwYXJhZ3JhcGhgLCAnUGFyYWdyYXBoZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT0gTk9VVkVBVVggw4lMw4lNRU5UUyA9PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0NvbnRlbnUgaW50ZXJhY3RpZicsXG4gICAgICAgICAgICBpY29uOiAnZmEtcmVjdGFuZ2xlLWxpc3QnLFxuICAgICAgICAgICAgbmFtZTogJ0Zvcm11bGFpcmUgQXZhbmPDqScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Zvcm1fYnVpbGRlcicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUgYXUtZGVzc3VzIGR1IGZvcm11bGFpcmUnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoJ2Rlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmb3JtSWQnLCAnU8OpbGVjdGlvbm5leiBsZSBmb3JtdWxhaXJlIMOgIGFmZmljaGVyJywgYnVpbGRlckRhdGEuZm9ybXMgfHwge30sIHsgcmVxdWlyZWQ6IHRydWUsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNYXJrZXRpbmcnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXN0YXInLFxuICAgICAgICAgICAgbmFtZTogJ0hlcm8gU2VjdGlvbicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2hlcm9fc2VjdGlvbicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2JhY2tncm91bmRJbWFnZScsICdJbWFnZSBkZSBmb25kICgxOTIweDEwODApJywgeyByZXF1aXJlZDogdHJ1ZSwgZm9ybWF0OiAnMTkyMHgxMDgwJyB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ292ZXJsYXlPcGFjaXR5JywgJ09wYWNpdMOpIGR1IGZpbHRyZScsIHsgJzAnOiAnQXVjdW4nLCAnMC4yJzogJ0zDqWdlciAoMjAlKScsICcwLjUnOiAnTW95ZW4gKDUwJSknLCAnMC44JzogJ1NvbWJyZSAoODAlKScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZSBwcmluY2lwYWwnLCB7IHNwYW46IDIsIHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3N1YnRpdGxlJywgJ1NvdXMtdGl0cmUnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0JvdXRvbiBQcmluY2lwYWwnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ2J0bjFfdGV4dCcsICdMaWJlbGzDqScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRVcmwoJ2J0bjFfdXJsJywgJ0xpZW4nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0JvdXRvbiBTZWNvbmRhaXJlJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdidG4yX3RleHQnLCAnTGliZWxsw6knKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVXJsKCdidG4yX3VybCcsICdMaWVuJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTWFya2V0aW5nJyxcbiAgICAgICAgICAgIGljb246ICdmYS10YWJsZScsXG4gICAgICAgICAgICBuYW1lOiAnVGFibGVhdXggZGUgUHJpeCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3ByaWNpbmdfdGFibGUnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ21haW5UaXRsZScsICdUaXRyZSBkZSBsYSBzZWN0aW9uJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ3BsYW5zJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ09mZnJlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1bmUgb2ZmcmUnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcGxhbnNdWyR7aWR4fV1bbmFtZWAsICdOb20gZGUgbFxcJ29mZnJlIChleDogU3RhbmRhcmQpJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoYHBsYW5zXVske2lkeH1dW2hpZ2hsaWdodGAsICdNZXR0cmUgZW4gYXZhbnQnLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcGxhbnNdWyR7aWR4fV1bcHJpY2VgLCAnUHJpeCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHBsYW5zXVske2lkeH1dW2N1cnJlbmN5YCwgJ0RldmlzZSAoZXg6IOKCrCknLCB7IGRlZmF1bHRWYWx1ZTogJ+KCrCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcGxhbnNdWyR7aWR4fV1bcGVyaW9kYCwgJ1DDqXJpb2RlIChleDogL21vaXMpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dGFyZWEoYHBsYW5zXVske2lkeH1dW2ZlYXR1cmVzYCwgJ0ZvbmN0aW9ubmFsaXTDqXMgKHVuZSBwYXIgbGlnbmUpJywgeyByb3dzOiA1IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdCb3V0b24nLCBidG5CdWlsZGVyID0+IGJ0bkJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHBsYW5zXVske2lkeH1dW2J0bl90ZXh0YCwgJ0xpYmVsbMOpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFVybChgcGxhbnNdWyR7aWR4fV1bYnRuX3VybGAsICdMaWVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNYXJrZXRpbmcnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWNvbW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdUw6ltb2lnbmFnZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZXN0aW1vbmlhbHMnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlIGRlIGxhIHNlY3Rpb24nLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgncmV2aWV3cycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUw6ltb2lnbmFnZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gYXZpcycsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgcmV2aWV3c11bJHtpZHh9XVthdmF0YXJgLCAnUGhvdG8gKEF2YXRhciknLCB7IGZvcm1hdDogJzIwMHgyMDAnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHJldmlld3NdWyR7aWR4fV1bbmFtZWAsICdOb20nLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHJldmlld3NdWyR7aWR4fV1bcG9zaXRpb25gLCAnUG9zdGUgLyBFbnRyZXByaXNlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KGByZXZpZXdzXVske2lkeH1dW3N0YXJzYCwgJ05vdGUnLCB7IDU6ICfirZDirZDirZDirZDirZAnLCA0OiAn4q2Q4q2Q4q2Q4q2QJywgMzogJ+KtkOKtkOKtkCcsIDI6ICfirZDirZAnLCAxOiAn4q2QJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHRhcmVhKGByZXZpZXdzXVske2lkeH1dW3F1b3RlYCwgJ0NpdGF0aW9uJywgeyByZXF1aXJlZDogdHJ1ZSwgcm93czogMyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTWFya2V0aW5nJyxcbiAgICAgICAgICAgIGljb246ICdmYS1oYW5kc2hha2UtbycsXG4gICAgICAgICAgICBuYW1lOiAnQmFycmUgZGUgTG9nb3MnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdsb2dvX2JhcicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnbG9nb3MnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGFydGVuYWlyZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gbG9nbycsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgbG9nb3NdWyR7aWR4fV1baW1hZ2VgLCAnTG9nbycsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVXJsKGBsb2dvc11bJHtpZHh9XVt1cmxgLCAnTGllbiAob3B0aW9ubmVsKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdWaXN1ZWwnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXRoJyxcbiAgICAgICAgICAgIG5hbWU6ICdHYWxlcmllIE1hc29ucnknLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdtYXNvbnJ5X2dhbGxlcnknLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ2ltYWdlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW5lIGltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBpbWFnZXNdWyR7aWR4fV1bcGF0aGAsICdJbWFnZScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgaW1hZ2VzXVske2lkeH1dW2NhcHRpb25gLCAnTMOpZ2VuZGUgKG9wdGlvbm5lbCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnVmlzdWVsJyxcbiAgICAgICAgICAgIGljb246ICdmYS1hZGp1c3QnLFxuICAgICAgICAgICAgbmFtZTogJ0NvbXBhcmF0ZXVyIEF2YW50L0FwcsOocycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2JlZm9yZV9hZnRlcicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlX2JlZm9yZScsICdJbWFnZSBcIkF2YW50XCInLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZEltYWdlKCdpbWFnZV9hZnRlcicsICdJbWFnZSBcIkFwcsOoc1wiJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdsYWJlbF9iZWZvcmUnLCAnTGFiZWwgXCJBdmFudFwiJywgeyBkZWZhdWx0VmFsdWU6ICdBdmFudCcgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgnbGFiZWxfYWZ0ZXInLCAnTGFiZWwgXCJBcHLDqHNcIicsIHsgZGVmYXVsdFZhbHVlOiAnQXByw6hzJyB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0NvcnBvcmF0ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaGlzdG9yeScsXG4gICAgICAgICAgICBuYW1lOiAnVGltZWxpbmUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0aW1lbGluZScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdvcmllbnRhdGlvbicsICdPcmllbnRhdGlvbicsIHsgdmVydGljYWw6ICdWZXJ0aWNhbGUnLCBob3Jpem9udGFsOiAnSG9yaXpvbnRhbGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnZXZlbnRzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ8OJdsOpbmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biDDqXbDqW5lbWVudCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBldmVudHNdWyR7aWR4fV1bZGF0ZWAsICdEYXRlIC8gQW5uw6llJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBldmVudHNdWyR7aWR4fV1bdGl0bGVgLCAnVGl0cmUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHRhcmVhKGBldmVudHNdWyR7aWR4fV1bZGVzY3JpcHRpb25gLCAnRGVzY3JpcHRpb24nLCB7IHJvd3M6IDMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkSWNvblBpY2tlcihgZXZlbnRzXVske2lkeH1dW2ljb25gLCAnSWPDtG5lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0NvcnBvcmF0ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtdXNlcnMnLFxuICAgICAgICAgICAgbmFtZTogJ8OJcXVpcGUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZWFtX21lbWJlcnMnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlIGRlIGxhIHNlY3Rpb24nLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnbWVtYmVycycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZW1icmUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuIG1lbWJyZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJbWFnZShgbWVtYmVyc11bJHtpZHh9XVtwaG90b2AsICdQaG90bycsIHsgZm9ybWF0OiAnNDAweDQwMCcsIHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYG1lbWJlcnNdWyR7aWR4fV1bbmFtZWAsICdOb20nLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYG1lbWJlcnNdWyR7aWR4fV1bcG9zaXRpb25gLCAnUG9zdGUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHRhcmVhKGBtZW1iZXJzXVske2lkeH1dW2Jpb2AsICdDb3VydGUgYmlvZ3JhcGhpZScsIHsgcm93czogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRVcmwoYG1lbWJlcnNdWyR7aWR4fV1bbGlua2VkaW5gLCAnTGlua2VkSW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRVcmwoYG1lbWJlcnNdWyR7aWR4fV1bdHdpdHRlcmAsICdUd2l0dGVyIC8gWCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdDb3Jwb3JhdGUnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLW1hcC1tYXJrZXInLFxuICAgICAgICAgICAgbmFtZTogJ0dvb2dsZSBNYXBzIFBybycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2dvb2dsZV9tYXBzJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdhZGRyZXNzJywgJ0FkcmVzc2UgY29tcGzDqHRlJywgeyBzcGFuOiAyLCByZXF1aXJlZDogdHJ1ZSwgaGVscFRleHQ6ICdVdGlsaXPDqWUgcG91ciBjZW50cmVyIGxhIGNhcnRlIHNpIGxhdC9sbmcgbmUgc29udCBwYXMgZm91cm5pcycgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKCdsYXRpdHVkZScsICdMYXRpdHVkZScsIHsgaGVscFRleHQ6ICdFeDogNDguODU2NicgfSlcbiAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKCdsb25naXR1ZGUnLCAnTG9uZ2l0dWRlJywgeyBoZWxwVGV4dDogJ0V4OiAyLjM1MjInIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZE51bWJlcignem9vbScsICdOaXZlYXUgZGUgem9vbSAoMS0yMCknLCB7IGRlZmF1bHRWYWx1ZTogMTUsIG1pbjogMSwgbWF4OiAyMCB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ21hcFN0eWxlJywgJ1N0eWxlIGRlIGNhcnRlJywgeyBsaWdodDogJ0NsYWlyJywgZGFyazogJ1NvbWJyZScsIHNhdGVsbGl0ZTogJ1NhdGVsbGl0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnTWFycXVldXInLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ21hcmtlclRpdGxlJywgJ1RpdHJlIGR1IG1hcnF1ZXVyJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHRhcmVhKCdtYXJrZXJEZXNjJywgJ0Rlc2NyaXB0aW9uIChJbmZvLWJ1bGxlKScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0NvcnBvcmF0ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtc29ydC1udW1lcmljLWFzYycsXG4gICAgICAgICAgICBuYW1lOiAnQ29tcHRldXJzIEFuaW3DqXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdhbmltYXRlZF9jb3VudGVycycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2JhY2tncm91bmRJbWFnZScsICdJbWFnZSBkZSBmb25kIChvcHRpb25uZWwpJylcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnY291bnRlcnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29tcHRldXInLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuIGNvbXB0ZXVyJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZE51bWJlcihgY291bnRlcnNdWyR7aWR4fV1bbnVtYmVyYCwgJ05vbWJyZSBmaW5hbCcsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgY291bnRlcnNdWyR7aWR4fV1bc3VmZml4YCwgJ1N1ZmZpeGUgKGV4OiAlLCArKScsIHsgc3BhbjogMSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb3VudGVyc11bJHtpZHh9XVtsYWJlbGAsICdMaWJlbGzDqScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkSWNvblBpY2tlcihgY291bnRlcnNdWyR7aWR4fV1baWNvbmAsICdJY8O0bmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH1cbiAgICBdO1xufVxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1aWxkZXItc2lkZWJhciA6YnVpbGRlci1kYXRhPVwiYnVpbGRlckRhdGFcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlci10b29sYmFyX19zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXRvb2xiYXJfX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCIgQGNsaWNrPVwiY29sbGFwc2VBbGxcIiB0aXRsZT1cIlLDqWR1aXJlIHRvdXMgbGVzIMOpbMOpbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvbXByZXNzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlci10b29sYmFyX19kaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIiBAY2xpY2s9XCJleHBhbmRBbGxcIiB0aXRsZT1cIkTDqXZlbG9wcGVyIHRvdXMgbGVzIMOpbMOpbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV4cGFuZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItdG9vbGJhcl9fc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJvcGVuUHJldmlld1wiIHRpdGxlPVwiT3V2cmlyIGwnYXBlcsOndSBlbiBkaXJlY3RcIiB2LWlmPVwicHJldmlld1VybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1leWUgbWUtMVwiPjwvaT4gQXBlcsOndVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1pbmZvXCIgQGNsaWNrPVwib3BlblJldmlzaW9uc1wiIHYtaWY9XCJidWlsZGVyRGF0YSAmJiBidWlsZGVyRGF0YS5lbnRpdHlDbGFzcyAmJiBidWlsZGVyRGF0YS5lbnRpdHlJZFwiIHRpdGxlPVwiVm9pciBsJ2hpc3RvcmlxdWUgZGVzIHLDqXZpc2lvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaGlzdG9yeSBtZS0xXCI+PC9pPiBIaXN0b3JpcXVlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWRhbmdlclwiIEBjbGljaz1cImNsZWFyQWxsXCIgdi1pZj1cImN1cnJlbnRFbGVtZW50cy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoIG1lLTFcIj48L2k+IFRvdXQgc3VwcHJpbWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudEVsZW1lbnRzXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1aWxkZXItY2FudmFzXCJcbiAgICAgICAgICAgICAgICBoYW5kbGU9XCIuYnVpbGRlcl9fZWxlbWVudF9faGFuZGxlXCJcbiAgICAgICAgICAgICAgICBncm91cD1cImJ1aWxkZXJcIlxuICAgICAgICAgICAgICAgIGdob3N0LWNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudC0tZ2hvc3RcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1aWxkZXItZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihlbGVtZW50LCBpbmRleCkgaW4gY3VycmVudEVsZW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImVsZW1lbnQuaWRcIlxuICAgICAgICAgICAgICAgICAgICA6ZWxlbWVudD1cImVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICA6YmFzZW5hbWU9XCJiYXNlbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDpidWlsZGVyLWRhdGE9XCJidWlsZGVyRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgIDpjdXJyZW50LWVsZW1lbnRzPVwiY3VycmVudEVsZW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgOmluZGV4PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBAZWxlbWVudFJlbW92ZWQ9XCJyZW1vdmVFbGVtZW50QnlJZFwiXG4gICAgICAgICAgICAgICAgICAgIEBlbGVtZW50Rm9ybUhpZGRlbj1cImhpZGVGb3JtRWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIEBlbGVtZW50Rm9ybVNob3duPVwic2hvd0Zvcm1FbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgQGVsZW1lbnRIaWRkZW49XCJoaWRlRWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIEBlbGVtZW50U2hvd249XCJzaG93RWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIEBkdXBsaWNhdGU9XCJkdXBsaWNhdGVFbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgQG1vdmVVcD1cIm1vdmVVcChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICBAbW92ZURvd249XCJtb3ZlRG93bihpbmRleClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCIgdi1pZj1cImN1cnJlbnRFbGVtZW50cy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImJ1aWxkZXItY2FudmFzX19lbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1sZWZ0IGZhLTJ4IG1iLTNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HbGlzc2V6IGRlcyDDqWzDqW1lbnRzIGRlcHVpcyBsYSBiYXJyZSBsYXTDqXJhbGUgcG91ciBjb25zdHJ1aXJlIHZvdHJlIHBhZ2UuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZHJhZ2dhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cmV2aXNpb25zLW1vZGFsIFxuICAgICAgICAgICAgdi1pZj1cImJ1aWxkZXJEYXRhICYmIGJ1aWxkZXJEYXRhLmVudGl0eUNsYXNzICYmIGJ1aWxkZXJEYXRhLmVudGl0eUlkXCJcbiAgICAgICAgICAgIHJlZj1cInJldmlzaW9uc01vZGFsXCIgXG4gICAgICAgICAgICA6ZW50aXR5LWNsYXNzPVwiYnVpbGRlckRhdGEuZW50aXR5Q2xhc3NcIiBcbiAgICAgICAgICAgIDplbnRpdHktaWQ9XCJidWlsZGVyRGF0YS5lbnRpdHlJZFwiIFxuICAgICAgICAgICAgQHJlc3RvcmU9XCJyZXN0b3JlRWxlbWVudHNcIiBcbiAgICAgICAgICAgIEBwcmV2aWV3PVwicHJldmlld1JldmlzaW9uXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGRyYWdnYWJsZSBmcm9tICd2dWVkcmFnZ2FibGUnO1xuICAgIGltcG9ydCBCdWlsZGVyRWxlbWVudCBmcm9tICcuL0J1aWxkZXJFbGVtZW50LnZ1ZSc7XG4gICAgaW1wb3J0IEJ1aWxkZXJTaWRlYmFyIGZyb20gJy4vQnVpbGRlclNpZGViYXIudnVlJztcbiAgICBpbXBvcnQgUmV2aXNpb25zTW9kYWwgZnJvbSAnLi9SZXZpc2lvbnNNb2RhbC52dWUnO1xuICAgIGltcG9ydCBhdmFpbGFibGVFbGVtZW50cyBmcm9tICcuLi9lbGVtZW50cy9TdHlsZXNoZWV0RWxlbWVudHMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBkcmFnZ2FibGUsXG4gICAgICAgICAgICBCdWlsZGVyRWxlbWVudCxcbiAgICAgICAgICAgIEJ1aWxkZXJTaWRlYmFyLFxuICAgICAgICAgICAgUmV2aXNpb25zTW9kYWxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogW0FycmF5LCBPYmplY3QsIFN0cmluZ10sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXNlbmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1aWxkZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2aWV3VXJsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50czogdGhpcy5pbml0aWFsaXplKHRoaXMuZWxlbWVudHMpLFxuICAgICAgICAgICAgICAgIGZvcm1IYXNDaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcmV2aWV3V2luZG93OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZpZXdVcGRhdGVUaW1lcjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVByZXZpZXdVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudEJ5SWQoaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50cyA9IHRoaXMuY3VycmVudEVsZW1lbnRzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgIT09IGlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1IYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3ZlVXAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcEVsZW1lbnRzKGluZGV4LCBpbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3ZlRG93bihpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMuY3VycmVudEVsZW1lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2FwRWxlbWVudHMoaW5kZXgsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN3YXBFbGVtZW50cyhvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wRWxlbWVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRzW29sZFBvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jdXJyZW50RWxlbWVudHMsIG9sZFBvc2l0aW9uLCB0aGlzLmN1cnJlbnRFbGVtZW50c1tuZXdQb3NpdGlvbl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmN1cnJlbnRFbGVtZW50cywgbmV3UG9zaXRpb24sIHRtcEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGVGb3JtRWxlbWVudChpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50cy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gaWQpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSBlbGVtZW50LmZvcm1WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0Zvcm1FbGVtZW50KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuZm9ybVZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGVFbGVtZW50KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RWxlbWVudChpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50cy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gaWQpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0aWFsaXplKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLl9jcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlKHZhbHVlLnRlbXBsYXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuZm9ybVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50cy5wdXNoKGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGUgPSBhdmFpbGFibGVFbGVtZW50cyh0aGlzLmJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgICAuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGVtcGxhdGUgPT09IHRlbXBsYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmICghYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVkRWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuX3JhbmRvbVN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGF2YWlsYWJsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBhdmFpbGFibGUuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZWxlbWVudCA/IGVsZW1lbnQudmlzaWJsZSA9PT0gJzEnIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybTogYXZhaWxhYmxlLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIGZvcm1WaXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmVzZXJ2ZSBleGlzdGluZyBwcm9wZXJ0aWVzIChpZCwgbmFtZSwgZXRjLikgYnV0IGVuc3VyZSBmb3JtIHN0cnVjdHVyZSBpcyB1cCB0byBkYXRlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVkRWxlbWVudCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXBsaWNhdGVFbGVtZW50KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmN1cnJlbnRFbGVtZW50cy5maW5kSW5kZXgoZWwgPT4gZWwuaWQgPT09IGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbCA9IHRoaXMuY3VycmVudEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBEZWVwIGNsb25lIHRoZSBlbGVtZW50IHRvIGF2b2lkIHJlZmVyZW5jZSBpc3N1ZXNcbiAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGdlbmVyYXRlIGEgbmV3IElEIGFuZCBwb3RlbnRpYWxseSBoYW5kbGUgZm9ybSBjb250ZW50IGNsb25pbmcgaWYgaXQncyBjb21wbGV4XG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgc2ltcGxlIG9iamVjdCBjb3B5IHdpdGggbmV3IElEXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsKSk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5pZCA9IHRoaXMuX3JhbmRvbVN0cmluZygpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQubmFtZSA9IG9yaWdpbmFsLm5hbWUgKyAnIChDb3BpZSknO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaWNvbiA9IG9yaWdpbmFsLmljb247XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5mb3JtVmlzaWJsZSA9IHRydWU7IC8vIE9wZW4gdGhlIG5ldyBlbGVtZW50J3MgZm9ybVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBhZnRlciB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50cy5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1IYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gbmV3IGVsZW1lbnQ/XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGFwc2VBbGwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb3JtVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvcm1WaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSgnw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIHRvdXMgbGVzIMOpbMOpbWVudHMgPycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuUHJldmlldygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJldmlld1VybCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnTFxcJ1VSTCBkZSBwcsOpdmlzdWFsaXNhdGlvbiBuXFwnZXN0IHBhcyBjb25maWd1csOpZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3dGZWF0dXJlcyA9ICd3aWR0aD0xMjAwLGhlaWdodD04MDAsbWVudWJhcj1ubyx0b29sYmFyPW5vLGxvY2F0aW9uPW5vLHN0YXR1cz1ubyc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld1dpbmRvdyAmJiAhdGhpcy5wcmV2aWV3V2luZG93LmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdXaW5kb3cgPSB3aW5kb3cub3Blbih0aGlzLnByZXZpZXdVcmwsICdCdWlsZGVyUHJldmlldycsIHdpbmRvd0ZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHByZXZpZXcgd2luZG93IHRvIGJlIHJlYWR5XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnUFJFVklFV19SRUFEWScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRQcmV2aWV3VXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuUmV2aXNpb25zKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLnJldmlzaW9uc01vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucmV2aXNpb25zTW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0b3JlRWxlbWVudHMoZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50cyBjb21lcyBkaXJlY3RseSBmcm9tIHRoZSBkYXRhYmFzZSBqc29uIHZpYSBBUElcbiAgICAgICAgICAgICAgICAvLyBpdCBuZWVkcyB0byBiZSBwYXJzZWQgdGhyb3VnaCBpbml0aWFsaXplIHRvIGNvbnZlcnQgdG8gdmFsaWQgVnVlIHN0cnVjdHVyZSB3aXRoIGdlbmVyYXRlZCBJRHNcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgYWxsIGVsZW1lbnRzIGZvcm1zIGFyZSBvcGVuIGJ5IGRlZmF1bHQgbGlrZSBub3JtYWwgaW5pdGlhbCBsb2FkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHJlc3RvcmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50cyAmJiB0eXBlb2YgZWxlbWVudHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RvcmVkRWxlbWVudHMgPSB0aGlzLmluaXRpYWxpemUoZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtYWxsIGRlbGF5IHRvIGFsbG93IFZ1ZSB0byBjbGVhciBET00gc2FmZWx5IGJlZm9yZSBpbmplY3RpbmcgbmV3IG9uZXNcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWxlbWVudHMgPSByZXN0b3JlZEVsZW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1IYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2aWV3UmV2aXNpb24oZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJldmlld1dpbmRvdyB8fCB0aGlzLnByZXZpZXdXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdWZXVpbGxleiBkXFwnYWJvcmQgb3V2cmlyIGxhIGZlbsOqdHJlIGRcXCdhcGVyw6d1IGVuIGRpcmVjdCBhdmVjIGxlIGJvdXRvbiBcIkFwZXLDp3VcIi4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcHJldmlld0VsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudHMgJiYgdHlwZW9mIGVsZW1lbnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3RWxlbWVudHMgPSB0aGlzLmluaXRpYWxpemUoZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzVG9TZW5kID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcmV2aWV3RWxlbWVudHMpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1dpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfUFJFVklFVycsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1RvU2VuZFxuICAgICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZFByZXZpZXdVcGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld1dpbmRvdyAmJiAhdGhpcy5wcmV2aWV3V2luZG93LmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEZWVwIGNsb25lIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzVG9TZW5kID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRFbGVtZW50cykpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSBjdXJyZW50IHZhbHVlcyBmcm9tIHRoZSBET00gZm9yIGVhY2ggZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBFbGVtZW50Rm9ybU1vdW50ZXIgZG9lc24ndCBzeW5jIGJhY2sgdG8gVnVlIGRhdGEsIHdlIG11c3QgcmVhZCBmcm9tIERPTVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1RvU2VuZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgZm9ybSBjb250YWluZXIgZm9yIHRoaXMgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHVzZSB0aGUgZWxlbWVudCBJRCB0byBmaW5kIGlucHV0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRzIGhhdmUgbmFtZXMgbGlrZSBiYXNlbmFtZVtpZF1bcHJvcGVydHldXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPciB3ZSBjYW4gc2VhcmNoIGJ5IGRhdGEtbmFtZSBhdHRyaWJ1dGUgd2l0aGluIHRoZSBidWlsZGVyIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBmaW5kIHRoZSBET00gZWxlbWVudCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgYnVpbGRlciBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBkb24ndCBoYXZlIGRpcmVjdCByZWZzIHRvIERPTSBlbGVtZW50cyBlYXNpbHkgbWFwcGVkIGhlcmUgd2l0aG91dCBpdGVyYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiBzZWFyY2ggYnkgdGhlIGhpZGRlbiBpbnB1dHMgdGhhdCBFbGVtZW50Rm9ybU1vdW50ZXIgY3JlYXRlcy91cGRhdGVzP1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0dWFsbHkgRWxlbWVudEZvcm1Nb3VudGVyIHVwZGF0ZXMgaW5wdXRzIGluc2lkZSB0aGUgLmJ1aWxkZXJfX2VsZW1lbnRfX2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3MgdHJ5IHRvIGZpbmQgaW5wdXRzIGJ5IGRhdGEtbmFtZSBpbiB0aGUgZG9jdW1lbnQgdGhhdCBiZWxvbmcgdG8gdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgaW5wdXRzIGFyZSBpbnNpZGUgYSBkaXYgd2l0aCByZWY9XCJlbGVtZW50Rm9ybVwiIGluIEJ1aWxkZXJFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgd2UgYXJlIGluIEJ1aWxkZXIudnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiBxdWVyeSBzZWxlY3RvciB1c2luZyB0aGUgZWxlbWVudCBJRCBpZiB3ZSBoYWQgcHV0IGl0IG9uIHRoZSBET01cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkZXJFbGVtZW50IHB1dHMgSUQgb24gaW5wdXRzOiBlbGVtZW50SWQgKyAnLScgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBmb3JtIHN0cmluZyB0byBmaW5kIHdoYXQgcHJvcGVydGllcyB3ZSBleHBlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgYml0IGhhY2t5IGJ1dCB3ZSBrbm93IHdoYXQgcHJvcGVydGllcyB0byBsb29rIGZvciBmcm9tIHRoZSBmb3JtIEhUTUwgc3RyaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vLCB0aGF0J3MgaGFyZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCZXR0ZXI6IExvb2sgZm9yIGFsbCBpbnB1dHMgdGhhdCBzdGFydCB3aXRoIHRoZSBlbGVtZW50IElEIGluIHRoZWlyIElEIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVsZW1lbnRGb3JtTW91bnRlci5pbnB1dElkKGVsZW1lbnQuaWQsIHByb3BlcnR5TmFtZSkgLT4gZWxlbWVudElkICsgJy0nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZWxlbWVudC5pZCArICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYSBtb3JlIHNwZWNpZmljIHNlbGVjdG9yIHRvIGF2b2lkIGdldHRpbmcgaW5wdXRzIGZyb20gb3RoZXIgZWxlbWVudHMgaWYgSURzIG92ZXJsYXAgKHVubGlrZWx5IGJ1dCBzYWZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBhY3R1YWxseSB3ZSB3YW50IHRvIGZpbmQgaW5wdXRzIGJhc2VkIG9uIHRoZSBzdHJ1Y3R1cmUgRWxlbWVudEZvcm1Nb3VudGVyIGNyZWF0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxlbWVudEZvcm1Nb3VudGVyIHVzZXMgSUQ6IGVsZW1lbnRJZCArICctJyArIGNsZWFuUHJvcE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbaWRePVwiJHtwcmVmaXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIGlmIGlucHV0IGRvZXNuJ3QgaGF2ZSBhIG5hbWUgKHNob3VsZG4ndCBoYXBwZW4gZm9yIHZhbGlkIGZpZWxkcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5uYW1lKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgbmFtZSB0byBidWlsZCBuZXN0ZWQgc3RydWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5hbWUgZm9ybWF0OiBiYXNlbmFtZVtlbGVtZW50SWRdW3Byb3BdW3N1YnByb3BdLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gZXh0cmFjdCBbcHJvcF1bc3VicHJvcF0uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBwcmVmaXggaW4gbmFtZSBpcyBgJHt0aGlzLmJhc2VuYW1lfVske2VsZW1lbnQuaWR9XWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZVByZWZpeCA9IGAke3RoaXMuYmFzZW5hbWV9WyR7ZWxlbWVudC5pZH1dYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5uYW1lLnN0YXJ0c1dpdGgobmFtZVByZWZpeCkpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmcgPSBpbnB1dC5uYW1lLnN1YnN0cmluZyhuYW1lUHJlZml4Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbWFpbmluZyBpcyBsaWtlIFwiW3BsYW5zXVswXVtuYW1lXVwiIG9yIFwiW3RpdGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gcmVtYWluaW5nLnNwbGl0KCddWycpLm1hcChwID0+IHAucmVwbGFjZSgvW1xcW1xcXV0vZywgJycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnICYmICFlbGVtZW50W3BhdGhbMF1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIFNraXAgdW5jaGVja2VkIHJhZGlvIG9yIHVuY2hlY2tlZCBib3ggaWYgd2UgZG9uJ3QgaGFuZGxlIGZhbHNlIGV4cGxpY2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgVHJpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1RSSVgtRURJVE9SJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0TmVzdGVkVmFsdWUoZWxlbWVudCwgcGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfUFJFVklFVycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogZWxlbWVudHNUb1NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3NldE5lc3RlZFZhbHVlKG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IG9iajtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhdGhbaV07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBrZXkgaXMgZW1wdHkgc3RyaW5nPyBzaG91bGRuJ3QgaGFwcGVuIHdpdGggc3BsaXQgbG9naWMgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBjcmVhdGUgYXJyYXkgb3Igb2JqZWN0P1xuICAgICAgICAgICAgICAgICAgICAvLyBcInBsYW5zXCIgLT4gXCIwXCIgLT4gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gb2JqW1wicGxhbnNcIl0gc2hvdWxkIGJlIGFycmF5L29iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50W2tleV0gPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50W2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIG5leHQga2V5IGlzIGEgbnVtYmVyIHRvIGRlY2lkZSBpZiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEtleSA9IHBhdGhbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJbnQgPSAvXlxcZCskLy50ZXN0KG5leHRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtrZXldID0gaXNJbnQgPyBbXSA6IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0S2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRbbGFzdEtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlZHVsZVByZXZpZXdVcGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld1VwZGF0ZVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnByZXZpZXdVcGRhdGVUaW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1VwZGF0ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFByZXZpZXdVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApOyAvLyBEZWJvdW5jZSA1MDBtc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9yYW5kb21TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSAyMTQ3NDIzNjQ4O1xuICAgICAgICAgICAgICAgIGxldCBub3cgPSArbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KS50b1N0cmluZygzNikgK1xuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KSBeIG5vdykudG9TdHJpbmcoMzYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgLy8gVHJhY2sgZm9ybSBjaGFuZ2VzIGZvciB1bnNhdmVkIHdhcm5pbmdcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHRoaXMuZm9ybUhhc0NoYW5nZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgQU5ZIGlucHV0IGNoYW5nZSBpbiB0aGUgYnVpbGRlciB0byB1cGRhdGUgcHJldmlld1xuICAgICAgICAgICAgLy8gV2UgdXNlIGEgZGVib3VuY2VkIHVwZGF0ZSwgc28gaXQncyBzYWZlIHRvIGxpc3RlbiB0byAnaW5wdXQnIGV2ZW50c1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlRXZlbnRzID0gWydpbnB1dCcsICdjaGFuZ2UnLCAnYmx1cicsICdrZXl1cCddO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVFdmVudHMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGNhcmUgaWYgaXQncyBhbiBpbnB1dC9zZWxlY3QvdGV4dGFyZWEgaW5zaWRlIHRoZSBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgdHJpeC1lZGl0b3InKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVByZXZpZXdVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHsgY2FwdHVyZTogdHJ1ZSB9KTsgLy8gVXNlIGNhcHR1cmUgdG8gZW5zdXJlIHdlIGNhdGNoIGl0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWxzbyBsaXN0ZW4gZm9yIFNlbGVjdDIgZXZlbnRzIHVzaW5nIGpRdWVyeSBzaW5jZSB0aGV5IGRvbid0IGJ1YmJsZSBhcyBuYXRpdmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9IHdpbmRvdy5qUXVlcnkodGhpcy4kZWwpO1xuICAgICAgICAgICAgICAgICRlbC5vbignc2VsZWN0MjpzZWxlY3Qgc2VsZWN0Mjp1bnNlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVQcmV2aWV3VXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtSGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmJ1aWxkZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNmY4O1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xufVxuXG4uYnVpbGRlci1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDsgLyogUHJldmVudCBmbGV4IG92ZXJmbG93ICovXG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ1aWxkZXItdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmYWZiZmMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU0ZTg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4wNCk7XG4gICAgXG4gICAgJl9fc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMS4yNXJlbTtcbiAgICB9XG4gICAgXG4gICAgJl9fZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDAuMzc1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmOGZhO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU0ZTg7XG4gICAgICAgIFxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICM1ODYwNjk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjYyNXJlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmX19kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgI2QxZDVkYSAyMCUsICNkMWQ1ZGEgODAlLCB0cmFuc3BhcmVudCk7XG4gICAgfVxuICAgIFxuICAgICZfX2luZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjhmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNGU4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogIzZhNzM3ZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC42ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM2NmQ2O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGV4dC1tdXRlZCB7XG4gICAgICAgICAgICBjb2xvcjogIzU4NjA2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1vdXRsaW5lLWRhbmdlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Q3M2E0OTtcbiAgICAgICAgY29sb3I6ICNkNzNhNDk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuODc1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDczYTQ5O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNkNzNhNDk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgyMTUsIDU4LCA3MywgMC4yKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuODc1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ1aWxkZXItY2FudmFzIHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgXG4gICAgJl9fZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNjYmQ1ZTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBjb2xvcjogIzcxODA5NjtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50XCIgOmNsYXNzPVwieydidWlsZGVyX19lbGVtZW50LS1oaWRkZW4nOiAhZWxlbWVudC52aXNpYmxlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9faGVhZGVyX19sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRfX2hhbmRsZVwiIHRpdGxlPVwiRMOpcGxhY2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZ3JpcC12ZXJ0aWNhbFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcIj57eyBpbmRleCArIDEgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgbWUtMiB0ZXh0LW11dGVkXCIgOmNsYXNzPVwiZWxlbWVudC5pY29uIHx8ICdmYS1jdWJlJ1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA4cHg7XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXNFZGl0aW5nTmFtZVwiIGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9fdGl0bGUtZWRpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVsZW1lbnQubmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwic3RvcEVkaXRpbmdOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZW50ZXIucHJldmVudD1cInN0b3BFZGl0aW5nTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwibmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWVsc2UgQGRibGNsaWNrPVwic3RhcnRFZGl0aW5nTmFtZVwiIHRpdGxlPVwiRG91YmxlLWNsaXF1ZXIgcG91ciByZW5vbW1lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZWxlbWVudC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbCBtcy0yIHRleHQtbXV0ZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC44ZW07IG9wYWNpdHk6IDAuNTtcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50X19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiZm9ybVwiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlRm9ybVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIiA6dGl0bGU9XCJmb3JtVmlzaWJsZSA/ICdSw6lkdWlyZScgOiAnw4lkaXRlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZm9ybVZpc2libGUgPyAnZmEgZmEtY2hldnJvbi1kb3duJyA6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0J1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJkdXBsaWNhdGVcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCIgdGl0bGU9XCJEdXBsaXF1ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb3B5XCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVWaXNpYmlsaXR5XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiIDp0aXRsZT1cImVsZW1lbnQudmlzaWJsZSA/ICdNYXNxdWVyJyA6ICdBZmZpY2hlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZWxlbWVudC52aXNpYmxlID8gJ2ZhIGZhLWV5ZScgOiAnZmEgZmEtZXllLXNsYXNoJ1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwicmVtb3ZlXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJ0ZW1wbGF0ZUlucHV0TmFtZVwiIDp2YWx1ZT1cImVsZW1lbnQudGVtcGxhdGVcIi8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJ2aXNpYmxlSW5wdXROYW1lXCIgOnZhbHVlPVwiZWxlbWVudC52aXNpYmxlID8gMSA6IDBcIi8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJuYW1lSW5wdXROYW1lXCIgOnZhbHVlPVwiZWxlbWVudC5uYW1lXCIvPlxuXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRfX2JvZHlcIiB2LWlmPVwiZm9ybVwiIHYtc2hvdz1cImZvcm1WaXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRfX2Zvcm1cIiB2LWh0bWw9XCJmb3JtXCIgcmVmPVwiZWxlbWVudEZvcm1cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBFbGVtZW50Rm9ybU1vdW50ZXIgZnJvbSAnLi4vZWxlbWVudHMvRWxlbWVudEZvcm1Nb3VudGVyJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsnYmFzZW5hbWUnLCAnZWxlbWVudCcsICdjdXJyZW50RWxlbWVudHMnLCAnYnVpbGRlckRhdGEnLCAnaW5kZXgnXSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nTmFtZTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUlucHV0TmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0TmFtZSh0aGlzLmJhc2VuYW1lLCB0aGlzLmVsZW1lbnQuaWQsICd0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpc2libGVJbnB1dE5hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVsZW1lbnRGb3JtTW91bnRlci5pbnB1dE5hbWUodGhpcy5iYXNlbmFtZSwgdGhpcy5lbGVtZW50LmlkLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWVJbnB1dE5hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVsZW1lbnRGb3JtTW91bnRlci5pbnB1dE5hbWUodGhpcy5iYXNlbmFtZSwgdGhpcy5lbGVtZW50LmlkLCAnbmFtZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm0oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5mb3JtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1WaXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZm9ybVZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN0YXJ0RWRpdGluZ05hbWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLm5hbWVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5uYW1lSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3BFZGl0aW5nTmFtZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRWRpdGluZ05hbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5uYW1lIHx8IHRoaXMuZWxlbWVudC5uYW1lLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV2ZXJ0IHRvIGRlZmF1bHQgbmFtZSBpZiBlbXB0eT8gT3Iga2VlcCBlbXB0eT8gXG4gICAgICAgICAgICAgICAgICAgIC8vIExldCdzIGtlZXAgaXQgYnV0IG1heWJlIHdlIHNob3VsZCBoYXZlIGEgZGVmYXVsdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgbGV0IHVzZXIgZGVjaWRlLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgRWxlbWVudEZvcm1Nb3VudGVyLmNvbmZpcm0oKCkgPT4gdGhpcy4kZW1pdCgnZWxlbWVudFJlbW92ZWQnLCB0aGlzLmVsZW1lbnQuaWQpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXBsaWNhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHVwbGljYXRlJywgdGhpcy5lbGVtZW50LmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1WaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChFbGVtZW50Rm9ybU1vdW50ZXIudmFsaWRhdGVGb3JtRWxlbWVudCh0aGlzLiRyZWZzLmVsZW1lbnRGb3JtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZWxlbWVudEZvcm1IaWRkZW4nLCB0aGlzLmVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZWxlbWVudEZvcm1TaG93bicsIHRoaXMuZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VsZW1lbnRIaWRkZW4nLCB0aGlzLmVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VsZW1lbnRTaG93bicsIHRoaXMuZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgRWxlbWVudEZvcm1Nb3VudGVyLm1vdW50KFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZW5hbWUsXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZWxlbWVudEZvcm1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIC5idWlsZGVyX19lbGVtZW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTdlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWhpZGRlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYnVpbGRlcl9fZWxlbWVudF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi0tZ2hvc3Qge1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VkZjJmNztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjYTBhZWMwO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuXG4gICAgICAgICAgICAmX19sZWZ0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19oYW5kbGUge1xuICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICAgICAgY29sb3I6ICNhMGFlYzA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRhNTU2ODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMmQzNzQ4O1xuXG4gICAgICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRmMmY3O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE1NTY4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4zNWVtIDAuNjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2FjdGlvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMC41cmVtO1xuXG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2JvZHkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlM2U3ZWU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICZfX2Zvcm0ge1xuICAgICAgICAgICAgLyogU3R5bGVzIGFyZSBub3cgaGFuZGxlZCBnbG9iYWxseSBpbiBidWlsZGVyLnNjc3MgZm9yIGJldHRlciBjb250cm9sICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyogVHJhbnNpdGlvbnMgKi9cbiAgICAuc2xpZGUtZW50ZXItYWN0aXZlLCAuc2xpZGUtbGVhdmUtYWN0aXZlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwMHB4OyAvKiBBcmJpdHJhcnkgbGFyZ2UgaGVpZ2h0ICovXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5zbGlkZS1lbnRlciwgLnNsaWRlLWxlYXZlLXRvIHtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cImJ1aWxkZXItc2lkZWJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXNpZGViYXJfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlci4uLlwiIHYtbW9kZWw9XCJzZWFyY2hRdWVyeVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlci1zaWRlYmFyX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZWxlbWVudHMsIGNhdGVnb3J5KSBpbiBncm91cGVkRWxlbWVudHNcIiA6a2V5PVwiY2F0ZWdvcnlcIiBjbGFzcz1cImJ1aWxkZXItc2lkZWJhcl9fY2F0ZWdvcnkgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItc2lkZWJhcl9fY2F0ZWdvcnktdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBwLTIgYmctbGlnaHQgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cInRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5KVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZCB0ZXh0LXVwcGVyY2FzZSBzbWFsbCB0ZXh0LW11dGVkXCI+e3sgY2F0ZWdvcnkgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS14cyB0ZXh0LW11dGVkXCIgOmNsYXNzPVwiY29sbGFwc2VkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPyAnZmEtY2hldnJvbi1yaWdodCcgOiAnZmEtY2hldnJvbi1kb3duJ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiIWNvbGxhcHNlZENhdGVnb3JpZXNbY2F0ZWdvcnldXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyYWdBcmVhIGxpc3QtZ3JvdXAgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxpc3Q9XCJlbGVtZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmdyb3VwPVwieyBuYW1lOiAnYnVpbGRlcicsIHB1bGw6ICdjbG9uZScsIHB1dDogZmFsc2UgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsb25lPVwiY2xvbmVFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA6c29ydD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJ1aWxkZXItc2lkZWJhcl9faXRlbVwiIHYtZm9yPVwiZWxlbWVudCBpbiBlbGVtZW50c1wiIDprZXk9XCJlbGVtZW50LnRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXNpZGViYXJfX2l0ZW0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYVwiIDpjbGFzcz1cImVsZW1lbnQuaWNvbiB8fCAnZmEtY3ViZSdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1aWxkZXItc2lkZWJhcl9faXRlbS1sYWJlbFwiPnt7IGVsZW1lbnQubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJztcclxuICAgIGltcG9ydCBhdmFpbGFibGVFbGVtZW50cyBmcm9tICcuLi9lbGVtZW50cy9TdHlsZXNoZWV0RWxlbWVudHMnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAnQnVpbGRlclNpZGViYXInLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydidWlsZGVyRGF0YSddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVFbGVtZW50czogYXZhaWxhYmxlRWxlbWVudHModGhpcy5idWlsZGVyRGF0YSksXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeTogJycsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWRDYXRlZ29yaWVzOiB7fVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgZmlsdGVyZWRFbGVtZW50cygpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hRdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdmFpbGFibGVFbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyb3VwZWRFbGVtZW50cygpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIG9yZGVyIG9mIGNhdGVnb3JpZXMgaWYgZGVzaXJlZCwgb3IganVzdCBsZXQgdGhlbSBhcHBlYXIgbmF0dXJhbGx5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlciA9IFsnTWlzZSBlbiBwYWdlJywgJ0Jhc2lxdWUnLCAnTcOpZGlhJywgJ0F2YW5jw6knLCAnRHluYW1pcXVlJywgJ0F1dHJlcyddO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGVsZW1lbnQuY2F0ZWdvcnkgfHwgJ0F1dHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cHNbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tjYXRlZ29yeV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2NhdGVnb3J5XS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFNvcnQga2V5cyBiYXNlZCBvbiBvcmRlclxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkR3JvdXBzID0ge307XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXIuaW5kZXhPZihhKSAtIG9yZGVyLmluZGV4T2YoYik7XHJcbiAgICAgICAgICAgICAgICB9KS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkR3JvdXBzW2tleV0gPSBncm91cHNba2V5XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkR3JvdXBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jb2xsYXBzZWRDYXRlZ29yaWVzLCBjYXRlZ29yeSwgIXRoaXMuY29sbGFwc2VkQ2F0ZWdvcmllc1tjYXRlZ29yeV0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9uZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGEgZnJlc2ggY29weSBvZiB0aGUgZWxlbWVudCBzdHJ1Y3R1cmUgZm9yIHRoZSBidWlsZGVyXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LnRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVsZW1lbnQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBlbGVtZW50Lmljb24sIC8vIFBhc3MgdGhlIGljb24gdG8gdGhlIGJ1aWxkZXIgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybTogZWxlbWVudC5mb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1WaXNpYmxlOiB0cnVlLCAvLyBBdXRvLW9wZW4gZm9ybSBvbiBkcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuX3JhbmRvbVN0cmluZygpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBfcmFuZG9tU3RyaW5nKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSAyMTQ3NDIzNjQ4O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpLnRvU3RyaW5nKDM2KSArXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeCkgXiBub3cpLnRvU3RyaW5nKDM2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uYnVpbGRlci1zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlN2VlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7IC8qIEFkanVzdCBiYXNlZCBvbiBoZWFkZXIgaGVpZ2h0ICovXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA4MHB4OyAvKiBBZGp1c3QgYmFzZWQgb24gaGVhZGVyIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyAvKiBDb250YWluZXIgaGlkZGVuLCBjb250ZW50IHNjcm9sbHMgKi9cclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2U3ZWU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGM1MzY3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAvKiBDdXN0b20gc2Nyb2xsYmFyICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NiZDVlMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhMGFlYzA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTdlZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNGM1MzY3O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzRjNTM2NztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJyZXZpc2lvbnNNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcmVmPVwibW9kYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj48aSBjbGFzcz1cImZhIGZhLWhpc3RvcnkgbWUtMlwiPjwvaT4gSGlzdG9yaXF1ZSBkZXMgcsOpdmlzaW9uczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIiBjbGFzcz1cInRleHQtY2VudGVyIHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggdGV4dC1tdXRlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0yIHRleHQtbXV0ZWRcIj5DaGFyZ2VtZW50IGRlIGwnaGlzdG9yaXF1ZS4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJlcnJvclwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwicmV2aXNpb25zLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktNSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZS1hbHQgZmEtM3ggbWItM1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXVjdW5lIHLDqXZpc2lvbiB0cm91dsOpZSBwb3VyIGNlIGNvbnRlbnUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInJldmlzaW9uIGluIHJldmlzaW9uc1wiIDprZXk9XCJyZXZpc2lvbi5pZFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0xXCI+PGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhci1hbHQgdGV4dC1tdXRlZCBtZS0yXCI+PC9pPiB7eyBmb3JtYXREYXRlKHJldmlzaW9uLmNyZWF0ZWRBdCkgfX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhIGZhLXVzZXIgbWUtMVwiPjwvaT4ge3sgcmV2aXNpb24uYXV0aG9yIH19PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBAY2xpY2sucHJldmVudD1cInByZXZpZXdSZXZpc2lvbihyZXZpc2lvbilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1leWUgbWUtMVwiPjwvaT4gUHLDqXZpc3VhbGlzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwicmVzdG9yZVJldmlzaW9uKHJldmlzaW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVuZG8gbWUtMVwiPjwvaT4gUmVzdGF1cmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdSZXZpc2lvbnNNb2RhbCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGVudGl0eUNsYXNzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudGl0eUlkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmV2aXNpb25zOiBbXSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICBtb2RhbEluc3RhbmNlOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzaG93KCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubW9kYWxJbnN0YW5jZSAmJiB3aW5kb3cuYm9vdHN0cmFwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2UgPSBuZXcgd2luZG93LmJvb3RzdHJhcC5Nb2RhbCh0aGlzLiRyZWZzLm1vZGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2Uuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFJldmlzaW9ucygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIGlmIGJvb3RzdHJhcCBpcyBpbmplY3RlZCBnbG9iYWxseSB2aWEgalF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgaWYod2luZG93LmpRdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5qUXVlcnkodGhpcy4kcmVmcy5tb2RhbCkubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUmV2aXNpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2UuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5qUXVlcnkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5qUXVlcnkodGhpcy4kcmVmcy5tb2RhbCkubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmV0Y2hSZXZpc2lvbnMoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbnRpdHlDbGFzcyB8fCAhdGhpcy5lbnRpdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IFwiSWRlbnRpZmlhbnRzIGRlIGwnZW50aXTDqSBtYW5xdWFudHMuXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYC9hZG1pbi9hcGkvYnVpbGRlci1yZXZpc2lvbnM/ZW50aXR5Q2xhc3M9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5lbnRpdHlDbGFzcyl9JmVudGl0eUlkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZW50aXR5SWQpfWA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHLDqXZpc2lvbnMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmlzaW9ucyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0Jywgc2Vjb25kOiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXN0b3JlUmV2aXNpb24ocmV2aXNpb24pIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ8OKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHJlbXBsYWNlciBsZSBjb250ZW51IGFjdHVlbCBwYXIgY2V0dGUgYW5jaWVubmUgdmVyc2lvbiA/IChMZXMgbW9kaWZpY2F0aW9ucyBuZSBzZXJvbnQgZMOpZmluaXRpdmVzIHF1XFwnYXByw6hzIGF2b2lyIHNhdXZlZ2FyZMOpIGxhIHBhZ2UpJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Jlc3RvcmUnLCByZXZpc2lvbi5lbGVtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlld1JldmlzaW9uKHJldmlzaW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXcnLCByZXZpc2lvbi5lbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBtb2RhbCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkIGlmIGJvb3RzdHJhcCBpcyBhdmFpbGFibGVcclxuICAgICAgICBpZiAod2luZG93LmJvb3RzdHJhcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2UgPSBuZXcgd2luZG93LmJvb3RzdHJhcC5Nb2RhbCh0aGlzLiRyZWZzLm1vZGFsLCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2U7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci13cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImJ1aWxkZXItc2lkZWJhclwiLCB7IGF0dHJzOiB7IFwiYnVpbGRlci1kYXRhXCI6IF92bS5idWlsZGVyRGF0YSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItY29udGVudFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItdG9vbGJhclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci10b29sYmFyX19zZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItdG9vbGJhcl9fZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUsOpZHVpcmUgdG91cyBsZXMgw6lsw6ltZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvbGxhcHNlQWxsIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvbXByZXNzXCIgfSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci10b29sYmFyX19kaXZpZGVyXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEw6l2ZWxvcHBlciB0b3VzIGxlcyDDqWzDqW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZXhwYW5kQWxsIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWV4cGFuZFwiIH0pXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXRvb2xiYXJfX3NlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5wcmV2aWV3VXJsXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk91dnJpciBsJ2FwZXLDp3UgZW4gZGlyZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5QcmV2aWV3IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1leWUgbWUtMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBcGVyw6d1XFxuICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5idWlsZGVyRGF0YSAmJlxuICAgICAgICAgICAgICBfdm0uYnVpbGRlckRhdGEuZW50aXR5Q2xhc3MgJiZcbiAgICAgICAgICAgICAgX3ZtLmJ1aWxkZXJEYXRhLmVudGl0eUlkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLW91dGxpbmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVm9pciBsJ2hpc3RvcmlxdWUgZGVzIHLDqXZpc2lvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlblJldmlzaW9ucyB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaGlzdG9yeSBtZS0xXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEhpc3RvcmlxdWVcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRFbGVtZW50cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLW91dGxpbmUtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xlYXJBbGwgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoIG1lLTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgVG91dCBzdXBwcmltZXJcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidWlsZGVyLWNhbnZhc1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhhbmRsZTogXCIuYnVpbGRlcl9fZWxlbWVudF9faGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgZ3JvdXA6IFwiYnVpbGRlclwiLFxuICAgICAgICAgICAgICAgIFwiZ2hvc3QtY2xhc3NcIjogXCJidWlsZGVyX19lbGVtZW50LS1naG9zdFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkNoYW5nZSB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudEVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uY3VycmVudEVsZW1lbnRzID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRFbGVtZW50c1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jdXJyZW50RWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImJ1aWxkZXItZWxlbWVudFwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBiYXNlbmFtZTogX3ZtLmJhc2VuYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImJ1aWxkZXItZGF0YVwiOiBfdm0uYnVpbGRlckRhdGEsXG4gICAgICAgICAgICAgICAgICAgIFwiY3VycmVudC1lbGVtZW50c1wiOiBfdm0uY3VycmVudEVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJlbW92ZWQ6IF92bS5yZW1vdmVFbGVtZW50QnlJZCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZvcm1IaWRkZW46IF92bS5oaWRlRm9ybUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRGb3JtU2hvd246IF92bS5zaG93Rm9ybUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRIaWRkZW46IF92bS5oaWRlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFNob3duOiBfdm0uc2hvd0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZTogX3ZtLmR1cGxpY2F0ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVVcDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW92ZVVwKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlRG93bjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW92ZURvd24oaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY3VycmVudEVsZW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidWlsZGVyLWNhbnZhc19fZW1wdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWFycm93LWxlZnQgZmEtMnggbWItM1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdsaXNzZXogZGVzIMOpbMOpbWVudHMgZGVwdWlzIGxhIGJhcnJlIGxhdMOpcmFsZSBwb3VyIGNvbnN0cnVpcmUgdm90cmUgcGFnZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5idWlsZGVyRGF0YSAmJiBfdm0uYnVpbGRlckRhdGEuZW50aXR5Q2xhc3MgJiYgX3ZtLmJ1aWxkZXJEYXRhLmVudGl0eUlkXG4gICAgICAgID8gX2MoXCJyZXZpc2lvbnMtbW9kYWxcIiwge1xuICAgICAgICAgICAgcmVmOiBcInJldmlzaW9uc01vZGFsXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImVudGl0eS1jbGFzc1wiOiBfdm0uYnVpbGRlckRhdGEuZW50aXR5Q2xhc3MsXG4gICAgICAgICAgICAgIFwiZW50aXR5LWlkXCI6IF92bS5idWlsZGVyRGF0YS5lbnRpdHlJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyByZXN0b3JlOiBfdm0ucmVzdG9yZUVsZW1lbnRzLCBwcmV2aWV3OiBfdm0ucHJldmlld1JldmlzaW9uIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRcIixcbiAgICAgIGNsYXNzOiB7IFwiYnVpbGRlcl9fZWxlbWVudC0taGlkZGVuXCI6ICFfdm0uZWxlbWVudC52aXNpYmxlIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRfX2hlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyX19lbGVtZW50X19oZWFkZXJfX2xlZnRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyX19lbGVtZW50X190aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5kZXggKyAxKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBtZS0yIHRleHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5lbGVtZW50Lmljb24gfHwgXCJmYS1jdWJlXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiOHB4XCIgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5pc0VkaXRpbmdOYW1lXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyX19lbGVtZW50X190aXRsZS1lZGl0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbGVtZW50Lm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICByZWY6IFwibmFtZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbGVtZW50Lm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBibHVyOiBfdm0uc3RvcEVkaXRpbmdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9wRWRpdGluZ05hbWUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWxlbWVudCwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICBcInN0cm9uZ1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJEb3VibGUtY2xpcXVlciBwb3VyIHJlbm9tbWVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgZGJsY2xpY2s6IF92bS5zdGFydEVkaXRpbmdOYW1lIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZWxlbWVudC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wZW5jaWwgbXMtMiB0ZXh0LW11dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIwLjhlbVwiLCBvcGFjaXR5OiBcIjAuNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRfX2FjdGlvbnNcIiB9LCBbXG4gICAgICAgICAgX3ZtLmZvcm1cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5mb3JtVmlzaWJsZSA/IFwiUsOpZHVpcmVcIiA6IFwiw4lkaXRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVGb3JtLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmZvcm1WaXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImZhIGZhLWNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImZhIGZhLWNoZXZyb24tcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiRHVwbGlxdWVyXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZHVwbGljYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jb3B5XCIgfSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5lbGVtZW50LnZpc2libGUgPyBcIk1hc3F1ZXJcIiA6IFwiQWZmaWNoZXJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaXNpYmlsaXR5LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmVsZW1lbnQudmlzaWJsZSA/IFwiZmEgZmEtZXllXCIgOiBcImZhIGZhLWV5ZS1zbGFzaFwiLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiU3VwcHJpbWVyXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaFwiIH0pXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IF92bS50ZW1wbGF0ZUlucHV0TmFtZSB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVsZW1lbnQudGVtcGxhdGUgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBfdm0udmlzaWJsZUlucHV0TmFtZSB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVsZW1lbnQudmlzaWJsZSA/IDEgOiAwIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWVJbnB1dE5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbGVtZW50Lm5hbWUgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGVcIiB9IH0sIFtcbiAgICAgICAgX3ZtLmZvcm1cbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtVmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmlzaWJsZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRfX2JvZHlcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJlbGVtZW50Rm9ybVwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnVpbGRlcl9fZWxlbWVudF9fZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZvcm0pIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlcl9fZWxlbWVudF9faGFuZGxlXCIsIGF0dHJzOiB7IHRpdGxlOiBcIkTDqXBsYWNlclwiIH0gfSxcbiAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1ncmlwLXZlcnRpY2FsXCIgfSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXNpZGViYXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXNpZGViYXJfX2hlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaFF1ZXJ5LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFF1ZXJ5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJSZWNoZXJjaGVyLi4uXCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaFF1ZXJ5IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgIF92bS5zZWFyY2hRdWVyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci1zaWRlYmFyX19jb250ZW50XCIgfSxcbiAgICAgIF92bS5fbChfdm0uZ3JvdXBlZEVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudHMsIGNhdGVnb3J5KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsga2V5OiBjYXRlZ29yeSwgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci1zaWRlYmFyX19jYXRlZ29yeSBtYi0zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJidWlsZGVyLXNpZGViYXJfX2NhdGVnb3J5LXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcC0yIGJnLWxpZ2h0IHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmdy1ib2xkIHRleHQtdXBwZXJjYXNlIHNtYWxsIHRleHQtbXV0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXhzIHRleHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY29sbGFwc2VkQ2F0ZWdvcmllc1tjYXRlZ29yeV1cbiAgICAgICAgICAgICAgICAgICAgPyBcImZhLWNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiZmEtY2hldnJvbi1kb3duXCIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5jb2xsYXBzZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhY29sbGFwc2VkQ2F0ZWdvcmllc1tjYXRlZ29yeV1cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcmFnQXJlYSBsaXN0LWdyb3VwIG10LTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbGlzdDogZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICBncm91cDogeyBuYW1lOiBcImJ1aWxkZXJcIiwgcHVsbDogXCJjbG9uZVwiLCBwdXQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICBjbG9uZTogX3ZtLmNsb25lRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIHNvcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF92bS5fbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGVsZW1lbnQudGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBidWlsZGVyLXNpZGViYXJfX2l0ZW1cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci1zaWRlYmFyX19pdGVtLWljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZWxlbWVudC5pY29uIHx8IFwiZmEtY3ViZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci1zaWRlYmFyX19pdGVtLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZWxlbWVudC5uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgcmVmOiBcIm1vZGFsXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogXCJyZXZpc2lvbnNNb2RhbFwiLFxuICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiLCBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcHktNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggdGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMiB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNoYXJnZW1lbnQgZGUgbCdoaXN0b3JpcXVlLi4uXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uZXJyb3JcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3IpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLnJldmlzaW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcHktNSB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1maWxlLWFsdCBmYS0zeCBtYi0zXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXVjdW5lIHLDqXZpc2lvbiB0cm91dsOpZSBwb3VyIGNlIGNvbnRlbnUuXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yZXZpc2lvbnMsIGZ1bmN0aW9uIChyZXZpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcmV2aXNpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYSBmYS1jYWxlbmRhci1hbHQgdGV4dC1tdXRlZCBtZS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLmZvcm1hdERhdGUocmV2aXNpb24uY3JlYXRlZEF0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXIgbWUtMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHJldmlzaW9uLmF1dGhvcikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZ2FwLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByZXZpZXdSZXZpc2lvbihyZXZpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXllIG1lLTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFByw6l2aXN1YWxpc2VyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzdG9yZVJldmlzaW9uKHJldmlzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS11bmRvIG1lLTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFJlc3RhdXJlclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaGlzdG9yeSBtZS0yXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBIaXN0b3JpcXVlIGRlcyByw6l2aXNpb25zXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tY2xvc2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS1icy1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJGZXJtZXJcIildXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImNvbnN0IHNsdWdpZnkgPSByZXF1aXJlKCdzbHVnaWZ5Jyk7XG5zbHVnaWZ5LmV4dGVuZCh7XG4gICAgJDogJycsXG4gICAgJyUnOiAnJyxcbiAgICAnJic6ICcnLFxuICAgICc8JzogJycsXG4gICAgJz4nOiAnJyxcbiAgICAnfCc6ICcnLFxuICAgICfCoic6ICcnLFxuICAgICfCoyc6ICcnLFxuICAgICfCpCc6ICcnLFxuICAgICfCpSc6ICcnLFxuICAgICfigqAnOiAnJyxcbiAgICAn4oKiJzogJycsXG4gICAgJ+KCoyc6ICcnLFxuICAgICfigqQnOiAnJyxcbiAgICAn4oKlJzogJycsXG4gICAgJ+KCpic6ICcnLFxuICAgICfigqcnOiAnJyxcbiAgICAn4oKoJzogJycsXG4gICAgJ+KCqSc6ICcnLFxuICAgICfigqonOiAnJyxcbiAgICAn4oKrJzogJycsXG4gICAgJ+KCrCc6ICcnLFxuICAgICfigq0nOiAnJyxcbiAgICAn4oKuJzogJycsXG4gICAgJ+KCryc6ICcnLFxuICAgICfigrAnOiAnJyxcbiAgICAn4oKxJzogJycsXG4gICAgJ+KCsic6ICcnLFxuICAgICfigrMnOiAnJyxcbiAgICAn4oK0JzogJycsXG4gICAgJ+KCtSc6ICcnLFxuICAgICfigrgnOiAnJyxcbiAgICAn4oK5JzogJycsXG4gICAgJ+KCvSc6ICcnLFxuICAgICfigr8nOiAnJyxcbiAgICAn4oiCJzogJycsXG4gICAgJ+KIhic6ICcnLFxuICAgICfiiJEnOiAnJyxcbiAgICAn4oieJzogJycsXG4gICAgJ+KZpSc6ICcnLFxuICAgIOWFgzogJycsXG4gICAg5YaGOiAnJyxcbiAgICAn77e8JzogJycsXG59KTtcblxuY2xhc3MgU2x1Z2dlciB7XG4gICAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLnNldFRhcmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpZWxkLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoJycgPT09IHRoaXMuZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsdWcgPSAnJztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVGFyZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbHVnID0gdGhpcy5maWVsZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwZW5kTG9ja0J1dHRvbigpO1xuICAgIH1cblxuICAgIHNldFRhcmdldEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBKU09OLnBhcnNlKHRoaXMuZmllbGQuZGF0YXNldC50YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZmllbGROYW1lcykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChudWxsID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgV3JvbmcgdGFyZ2V0IHNwZWNpZmllZCBmb3Igc2x1ZyB3aWRnZXQgKFwiJHtuYW1lfVwiKS5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGEgXCJsb2NrXCIgYnV0dG9uIHRvIGNvbnRyb2wgc2x1ZyBiZWhhdmlvdXIgKGF1dG8gb3IgbWFudWFsKVxuICAgICAqL1xuICAgIGFwcGVuZExvY2tCdXR0b24oKSB7XG4gICAgICAgIHRoaXMubG9ja0J1dHRvbiA9IHRoaXMuZmllbGQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5sb2NrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybU1lc3NhZ2UgPSB0aGlzLmZpZWxkLmRhdGFzZXQuY29uZmlybVRleHQgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gY29uZmlybU1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmxvY2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRDb25maXJtTWVzc2FnZSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoYFwiJHtjb25maXJtTWVzc2FnZS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKX1cImApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnVlID09PSBjb25maXJtKGZvcm1hdHRlZENvbmZpcm1NZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVubG9jayB0aGUgd2lkZ2V0IGlucHV0IChtYW51YWwgbW9kZSlcbiAgICAgKi9cbiAgICB1bmxvY2soKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9ja0J1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmxvY2tCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWljb24tdW5sb2NrZWQnKTtcbiAgICAgICAgdGhpcy5maWVsZC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jayB0aGUgd2lkZ2V0IGlucHV0IChhdXRvIG1vZGUpXG4gICAgICovXG4gICAgbG9jaygpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvY2tCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5sb2NrQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uLWxvY2tlZCcpO1xuXG4gICAgICAgIC8vIExvY2tpbmcgaXQgYmFjayBjaGFuZ2VzIHRoZSB2YWx1ZSBlaXRoZXIgdG8gZGVmYXVsdCB2YWx1ZSwgb3IgcmVjb21wdXRlcyBpdFxuICAgICAgICBpZiAoJycgIT09IHRoaXMuY3VycmVudFNsdWcpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSB0aGlzLmN1cnJlbnRTbHVnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSBzbHVnaWZ5KHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4gdGFyZ2V0LnZhbHVlKS5qb2luKCctJyksIHtcbiAgICAgICAgICAgIHJlbW92ZTogL1teQS1aYS16MC05XFxzLV0vZyxcbiAgICAgICAgICAgIGxvd2VyOiB0cnVlLFxuICAgICAgICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIHRoZSB0YXJnZXQgZmllbGQgYW5kIHNsdWcgaXRcbiAgICAgKi9cbiAgICBsaXN0ZW5UYXJnZXQoKSB7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRoaXMudGFyZ2V0cykge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgncmVhZG9ubHknID09PSB0aGlzLmZpZWxkLmdldEF0dHJpYnV0ZSgncmVhZG9ubHknKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWEtc2x1Zy1maWVsZF0nKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBuZXcgU2x1Z2dlcihmaWVsZCk7XG4gICAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZWEuY29sbGVjdGlvbi5pdGVtLWFkZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuZGV0YWlsLm5ld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWEtc2x1Zy1maWVsZF0nKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBuZXcgU2x1Z2dlcihmaWVsZCk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQnVpbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Y2YTYyNDImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1aWxkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0J1aWxkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Y2YTYyNDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZjZhNjI0MlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2Y2YTYyNDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2Y2YTYyNDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2Y2YTYyNDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1aWxkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmNmE2MjQyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNmNmE2MjQyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0J1aWxkZXJFbGVtZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYmY2NGVlYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1aWxkZXJFbGVtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYmY2NGVlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNiZjY0ZWVjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2FwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYmY2NGVlYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYmY2NGVlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYmY2NGVlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVpbGRlckVsZW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiZjY0ZWVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiZjY0ZWVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlckVsZW1lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmQ0MmQ2MmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmQ0MmQ2MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiZDQyZDYyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmQ0MmQ2MmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmQ0MmQ2MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmQ0MmQ2MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1aWxkZXJTaWRlYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZDQyZDYyYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiZDQyZDYyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJTaWRlYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmV2aXNpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhNzQ2NTg0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmV2aXNpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhNzQ2NTg0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlYTc0NjU4NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWE3NDY1ODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWE3NDY1ODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWE3NDY1ODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTc0NjU4NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYTc0NjU4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL1JldmlzaW9uc01vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXJFbGVtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXJFbGVtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmV2aXNpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmV2aXNpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjZhNjI0MiZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlckVsZW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiZjY0ZWVjJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmQ0MmQ2MmMmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTc0NjU4NCZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjZhNjI0MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXJFbGVtZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNiZjY0ZWVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmQ0MmQ2MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhNzQ2NTg0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sIm5hbWVzIjpbIlZ1ZSIsIkJ1aWxkZXIiLCJCdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbiIsIiRidWlsZGVyUm9vdHMiLCIkIiwibGVuZ3RoIiwiZWFjaCIsImkiLCJyb290IiwiZWwiLCJhdHRyIiwiY29tcG9uZW50cyIsImluaXQiLCJyZWZyZXNoU3VydmV5UXVlc3Rpb25BbnN3ZXJCbG9jayIsInNlbGVjdG9yIiwidmFsIiwiY2xvc2VzdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib24iLCIkZm9ybUlkIiwiJGFsbElucHV0IiwiaW5kZXgiLCJ2YWx1ZSIsIiRjdXJyZW50RWxlbWVudCIsImlkIiwicHJvcCIsImVhU3VydmV5U2VsZWN0b3IiLCJkZWxlZ2F0ZSIsImxhc3QiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZGVmaW5lUHJvcGVydHkiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRGaWVsZCIsImRhdGEiLCJvcGVuTW9kYWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJoYW5kbGVGaWxlU2VsZWN0aW9uIiwiZmlsZSIsIiRidXR0b24iLCJjdXJyZW50VGFyZ2V0RmllbGQiLCJjdXJyZW50QnV0dG9uIiwibW9kYWwiLCJjb25jYXQiLCJCVUlMREVSX0xPQ0FMRSIsImFwcGVuZCIsIm1vZGFsRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kYWxJbnN0YW5jZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiYmFja2Ryb3AiLCJrZXlib2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJib2R5IiwiY2xhc3NMaXN0Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNob3ciLCJfaGFuZGxlRmlsZVNlbGVjdGlvbiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibWltZVR5cGUiLCJzdGFydHNXaXRoIiwiYWxlcnQiLCJjb3B5TWVkaWFUb0J1aWxkZXIiLCJ0MCIsIl94IiwiX2NvcHlNZWRpYVRvQnVpbGRlciIsIl9jYWxsZWUyIiwiZmlsZUlkIiwicmVzcG9uc2UiLCJlcnJvckRhdGEiLCIkZm9ybUdyb3VwIiwiJGhpZGRlbklucHV0IiwiJHdpZGdldCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImpzb24iLCJzdWNjZXNzIiwidXJsIiwiaGlkZSIsInRleHQiLCJvZmYiLCJzZXRUaW1lb3V0IiwiX3gyIiwiZGVmYXVsdCIsInJlYWR5IiwiRm9ybUJ1aWxkZXIiLCJFbGVtZW50Rm9ybU1vdW50ZXIiLCJpbnB1dE5hbWUiLCJiYXNlbmFtZSIsImVsZW1lbnRJZCIsImVsZW1lbnRQcm9wZXJ0eU5hbWUiLCJtdWx0aXBsZSIsImlucHV0SWQiLCJjb25maXJtIiwiY2FsbGJhY2siLCJteU1vZGFsIiwidmFsaWRhdGVGb3JtRWxlbWVudCIsImZvcm0iLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX3ZhbGlkYXRlRmlsZUlucHV0IiwibW91bnQiLCJlbGVtZW50IiwiJGZvcm0iLCJfaW5pdFJlcGVhdGFibGVzIiwiX2NvbXBpbGVOYW1lQW5kVmFsdWVzIiwiX21ha2VDa2VkaXRvcnMiLCJfbWFrZVNlbGVjdDIiLCJfYXV0b1ZhbGlkYXRlRmlsZUlucHV0cyIsIl9nZXRWYWx1ZUZyb21QYXRoIiwicGF0aCIsInNwbGl0IiwiZmlsdGVyIiwiayIsImN1cnJlbnQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJmIiwiJGNvbnRhaW5lciIsIiRpdGVtc0NvbnRhaW5lciIsIiR0ZW1wbGF0ZSIsImh0bWwiLCJtYXRjaCIsImV4ZWMiLCJmdWxsTmFtZSIsInBhcnRzIiwicmVwZWF0YWJsZU5hbWUiLCJyZXBlYXRhYmxlRGF0YSIsInNhdmVkQ291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZHJlbiIsImN1cnJlbnRDb3VudCIsIl9hZGRSZXBlYXRhYmxlSXRlbSIsIm1heCIsInBhcnNlSW50IiwibWluIiwibWF4SW5kZXgiLCJpZHgiLCJuZXdJbmRleCIsInBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXJNaW51czEiLCJpbmRleE9mIiwiam9pbiIsIiRuZXdJdGVtIiwiJGlucHV0IiwiaXNNdWx0aXBsZSIsImNsZWFuUHJvcE5hbWUiLCJyZXBsYWNlIiwicmVtb3VudCIsIm5vdCIsInBhcmVudCIsImhhc0NsYXNzIiwiX2h5ZHJhdGVJbnB1dFByZXZpZXciLCJ1cmxOYW1lIiwiX2h5ZHJhdGVJbnB1dEZpbGUiLCJzZWxlY3QiLCJvcHRpb25zIiwidGhlbWUiLCJsYW5ndWFnZSIsIndpZHRoIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJkaXNwbGF5SWNvbnMiLCJpY29uIiwidG9VcHBlckNhc2UiLCJ0ZW1wbGF0ZVNlbGVjdGlvbiIsInRlbXBsYXRlUmVzdWx0Iiwic2VsZWN0MiIsImVkaXRvciIsImxvYWRIVE1MIiwid2FybiIsIkNLRURJVE9SIiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsInRvb2xiYXIiLCJpdGVtcyIsImhlaWdodCIsImV4dHJhUGx1Z2lucyIsImZpbGVicm93c2VyQnJvd3NlVXJsIiwidG9hc3RfaWQiLCJsYWJlbF9pbnB1dCIsImV2dCIsInRvYXN0VHJpZ2dlciIsInRvYXN0IiwiVG9hc3QiLCJjYW5jZWwiLCJnZXREYXRhIiwicmVtb3ZlQXR0ciIsImN1cnJlbnRUYXJnZXQiLCJmaWxlcyIsImZpbGVTaXplTUIiLCJzaXplIiwidG9GaXhlZCIsIklNQUdFX01BWF9TSVpFX01CIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVhZEFzRGF0YVVSTCIsIiRyb3ciLCJmaWxlRXh0Iiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImxpc3RfZXh0IiwiYnVpbGRlckRhdGEiLCJmaWVsZHMiLCJjdXJyZW50Um93IiwiZmllbGROYW1lcyIsIlNldCIsInJvdyIsImVuZFJvdyIsImZpZWxkc2V0IiwibGVnZW5kIiwibmVzdGVkQnVpbGRlciIsIl9hZGRGaWVsZCIsImFkZFRleHQiLCJsYWJlbCIsIl9vcHRpb25zJHJlcXVpcmVkIiwicmVxdWlyZWQiLCJfb3B0aW9ucyRzcGFuIiwic3BhbiIsIl9vcHRpb25zJGRlZmF1bHRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsIl9vcHRpb25zJHBsYWNlaG9sZGVyIiwiX29wdGlvbnMkaGVscFRleHQiLCJoZWxwVGV4dCIsIl92YWxpZGF0ZUZpZWxkTmFtZSIsImFkZE51bWJlciIsIl9vcHRpb25zJHJlcXVpcmVkMiIsIl9vcHRpb25zJHNwYW4yIiwiX29wdGlvbnMkZGVmYXVsdFZhbHVlMiIsIl9vcHRpb25zJGhlbHBUZXh0MiIsImFkZFNlbGVjdCIsIm9wdGlvbnNNYXAiLCJfb3B0aW9ucyRyZXF1aXJlZDMiLCJfb3B0aW9ucyRzcGFuMyIsIl9vcHRpb25zJG11bHRpcGxlIiwiYWRkVGV4dGFyZWEiLCJfb3B0aW9ucyRyZXF1aXJlZDQiLCJfb3B0aW9ucyRzcGFuNCIsIl9vcHRpb25zJGRlZmF1bHRWYWx1ZTMiLCJfb3B0aW9ucyRyb3dzIiwicm93cyIsImFkZENLRWRpdG9yIiwiX29wdGlvbnMkcmVxdWlyZWQ1IiwiX29wdGlvbnMkc3BhbjUiLCJhZGRJbWFnZSIsIl9vcHRpb25zJHJlcXVpcmVkNiIsIl9vcHRpb25zJHNwYW42IiwiX29wdGlvbnMkZm9ybWF0IiwiZm9ybWF0IiwiX29wdGlvbnMkYWNjZXB0ZWRGb3JtIiwiYWNjZXB0ZWRGb3JtYXRzIiwiX29wdGlvbnMkdXNlRmlsZU1hbmFnIiwidXNlRmlsZU1hbmFnZXIiLCJhZGRVcmwiLCJfb3B0aW9ucyRyZXF1aXJlZDciLCJfb3B0aW9ucyRzcGFuNyIsIl9vcHRpb25zJHNob3dUb29sdGlwIiwic2hvd1Rvb2x0aXAiLCJhZGRJY29uUGlja2VyIiwiX29wdGlvbnMkcmVxdWlyZWQ4IiwiX29wdGlvbnMkc3BhbjgiLCJhZGRUYWJsZSIsImNvbHMiLCJfb3B0aW9ucyRzcGFuOSIsImFkZEhlbHAiLCJtZXNzYWdlIiwiYWRkUmVwZWF0YWJsZSIsImNvbmZpZyIsIl9jb25maWckbWluIiwiX2NvbmZpZyRtYXgiLCJfY29uZmlnJGluaXRpYWwiLCJpbml0aWFsIiwiX2NvbmZpZyRhZGRCdXR0b25UZXh0IiwiYWRkQnV0dG9uVGV4dCIsIl9jb25maWckcmVtb3ZlQnV0dG9uVCIsInJlbW92ZUJ1dHRvblRleHQiLCJ0ZW1wbGF0ZSIsInJlbmRlciIsImZpZWxkIiwiX3JlbmRlckZpZWxkIiwiX3JlbmRlclJvdyIsIl9yZW5kZXJGaWVsZHNldCIsIl9yZW5kZXJUZXh0IiwiX3JlbmRlck51bWJlciIsIl9yZW5kZXJTZWxlY3QiLCJfcmVuZGVyVGV4dGFyZWEiLCJfcmVuZGVyQ0tFZGl0b3IiLCJfcmVuZGVySW1hZ2UiLCJfcmVuZGVyVXJsIiwiX3JlbmRlckljb24iLCJfcmVuZGVyVGFibGUiLCJfcmVuZGVySGVscCIsIl9yZW5kZXJSZXBlYXRhYmxlIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInJvd0ZpZWxkIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIm5lc3RlZEZpZWxkIiwicmVxdWlyZWRBdHRyIiwicmVxdWlyZWRMYWJlbCIsIm11bHRpcGxlQXR0ciIsIl9tYWtlT3B0aW9uVGFncyIsImxpbWl0U2l6ZSIsIm1hcCIsImljb25zIiwiX2dldEljb25zIiwiY29sIiwibGluZSIsIm5iQ29scyIsIm5hbWVQcmVmaXgiLCJpdGVtQnVpbGRlciIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJpdGVtRmllbGQiLCJ0ZW1wbGF0ZUJ1aWxkZXIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwiaGFzIiwiYWRkIiwiaXNSZXF1aXJlZCIsIm9wdGlvblRhZ3MiLCJvcHRpb25WYWx1ZSIsInN1Ym9wdGlvblZhbHVlIiwiZGVidWciLCJ0b0pTT04iLCJnZXQiLCJjYXRlZ29yeSIsImJ1aWxkZXIiLCJzdGFydCIsImNlbnRlciIsImVuZCIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInByaW1hcnkiLCJlbnRldGUiLCJfYmxhbmsiLCJfc2VsZiIsIm5vX2xpbmUiLCJ3aXRoX2xpbmUiLCJpbWFnZV92aWRlbyIsInZpZGVvX2ltYWdlIiwiaW1hZ2VfdGV4dCIsInRleHRfaW1hZ2UiLCJzZWNvbmRhcnkiLCJqIiwic3ViQnVpbGRlciIsImpkeCIsIm9uZ2xldHMiLCJmaXJzdF9saW5lIiwiZmlyc3RfdHdvX2xpbmVzIiwicmVndWxhciIsInBpdm90IiwiaW1hZ2VfdGFibGVhdSIsInRhYmxlYXVfaW1hZ2UiLCJjYXRlZ29yaWVzIiwiZm9ybXMiLCJidG5CdWlsZGVyIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibGlnaHQiLCJkYXJrIiwic2F0ZWxsaXRlIiwiZHJhZ2dhYmxlIiwiQnVpbGRlckVsZW1lbnQiLCJCdWlsZGVyU2lkZWJhciIsIlJldmlzaW9uc01vZGFsIiwiYXZhaWxhYmxlRWxlbWVudHMiLCJlbGVtZW50cyIsIl9kZWZhdWx0IiwicHJldmlld1VybCIsImN1cnJlbnRFbGVtZW50cyIsImluaXRpYWxpemUiLCJmb3JtSGFzQ2hhbmdlZCIsInByZXZpZXdXaW5kb3ciLCJwcmV2aWV3VXBkYXRlVGltZXIiLCJ3YXRjaCIsImhhbmRsZXIiLCJzY2hlZHVsZVByZXZpZXdVcGRhdGUiLCJkZWVwIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwicmVtb3ZlRWxlbWVudEJ5SWQiLCJtb3ZlVXAiLCJzd2FwRWxlbWVudHMiLCJtb3ZlRG93biIsIm9sZFBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJ0bXBFbGVtZW50IiwiJHNldCIsImhpZGVGb3JtRWxlbWVudCIsImZvcm1WaXNpYmxlIiwic2hvd0Zvcm1FbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJ2aXNpYmxlIiwic2hvd0VsZW1lbnQiLCJfdGhpcyIsImVudHJpZXMiLCJfZWxlbWVudCIsIl9zbGljZWRUb0FycmF5IiwiY3VycmVudEVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZSIsImF2YWlsYWJsZSIsImNyZWF0ZWRFbGVtZW50IiwiX3JhbmRvbVN0cmluZyIsImFzc2lnbiIsImR1cGxpY2F0ZUVsZW1lbnQiLCJmaW5kSW5kZXgiLCJvcmlnaW5hbCIsIm5ld0VsZW1lbnQiLCJwYXJzZSIsInNwbGljZSIsImNvbGxhcHNlQWxsIiwiZXhwYW5kQWxsIiwiY2xlYXJBbGwiLCJvcGVuUHJldmlldyIsIl90aGlzMiIsIndpbmRvd0ZlYXR1cmVzIiwiY2xvc2VkIiwiZm9jdXMiLCJvcGVuIiwic2VuZFByZXZpZXdVcGRhdGUiLCJvcGVuUmV2aXNpb25zIiwiJHJlZnMiLCJyZXZpc2lvbnNNb2RhbCIsInJlc3RvcmVFbGVtZW50cyIsIl90aGlzMyIsInJlc3RvcmVkRWxlbWVudHMiLCIkbmV4dFRpY2siLCJwcmV2aWV3UmV2aXNpb24iLCJwcmV2aWV3RWxlbWVudHMiLCJlbGVtZW50c1RvU2VuZCIsInBvc3RNZXNzYWdlIiwiX3RoaXM0IiwicHJlZml4IiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbWFpbmluZyIsInN1YnN0cmluZyIsInAiLCJjaGVja2VkIiwidGFnTmFtZSIsIl9zZXROZXN0ZWRWYWx1ZSIsIm5leHRLZXkiLCJpc0ludCIsInRlc3QiLCJsYXN0S2V5IiwiX3RoaXM1IiwiY2xlYXJUaW1lb3V0IiwieCIsIm5vdyIsIkRhdGUiLCJmbG9vciIsImFicyIsIm1vdW50ZWQiLCJfdGhpczYiLCJ1cGRhdGVFdmVudHMiLCJldmVudFR5cGUiLCIkZWwiLCJtYXRjaGVzIiwiY2FwdHVyZSIsImpRdWVyeSIsInJldHVyblZhbHVlIiwiaXNFZGl0aW5nTmFtZSIsImNvbXB1dGVkIiwidGVtcGxhdGVJbnB1dE5hbWUiLCJ2aXNpYmxlSW5wdXROYW1lIiwibmFtZUlucHV0TmFtZSIsInN0YXJ0RWRpdGluZ05hbWUiLCJuYW1lSW5wdXQiLCJzdG9wRWRpdGluZ05hbWUiLCJ0cmltIiwiJGVtaXQiLCJkdXBsaWNhdGUiLCJ0b2dnbGVGb3JtIiwiZWxlbWVudEZvcm0iLCJ0b2dnbGVWaXNpYmlsaXR5Iiwic2VhcmNoUXVlcnkiLCJjb2xsYXBzZWRDYXRlZ29yaWVzIiwiZmlsdGVyZWRFbGVtZW50cyIsInF1ZXJ5IiwiaW5jbHVkZXMiLCJncm91cGVkRWxlbWVudHMiLCJncm91cHMiLCJvcmRlciIsInNvcnRlZEdyb3VwcyIsInNvcnQiLCJhIiwiYiIsInRvZ2dsZUNhdGVnb3J5IiwiY2xvbmVFbGVtZW50IiwiZW50aXR5Q2xhc3MiLCJlbnRpdHlJZCIsInJldmlzaW9ucyIsImxvYWRpbmciLCJmZXRjaFJldmlzaW9ucyIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJyZXN0b3JlUmV2aXNpb24iLCJyZXZpc2lvbiIsIl92bSIsIl9jIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl92IiwidGl0bGUiLCJjbGljayIsIl9lIiwiZ3JvdXAiLCJjaGFuZ2UiLCJtb2RlbCIsIiQkdiIsImV4cHJlc3Npb24iLCJfbCIsImVsZW1lbnRSZW1vdmVkIiwiZWxlbWVudEZvcm1IaWRkZW4iLCJlbGVtZW50Rm9ybVNob3duIiwiZWxlbWVudEhpZGRlbiIsImVsZW1lbnRTaG93biIsIiRldmVudCIsInNsb3QiLCJyZWYiLCJyZXN0b3JlIiwicHJldmlldyIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJfbSIsIl9zIiwic3RhdGljU3R5bGUiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImRvbVByb3BzIiwiYmx1ciIsImtleWRvd24iLCJfayIsImtleUNvZGUiLCJjb21wb3NpbmciLCJkYmxjbGljayIsIm9wYWNpdHkiLCJpbm5lckhUTUwiLCJjdXJzb3IiLCJsaXN0IiwicHVsbCIsInB1dCIsImNsb25lIiwidGFiaW5kZXgiLCJyb2xlIiwiY3JlYXRlZEF0IiwiYXV0aG9yIiwic2x1Z2lmeSIsInJlcXVpcmUiLCJleHRlbmQiLCLlhYMiLCLlhoYiLCJTbHVnZ2VyIiwic2V0VGFyZ2V0RWxlbWVudCIsImxvY2tlZCIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRTbHVnIiwidXBkYXRlVmFsdWUiLCJsaXN0ZW5UYXJnZXQiLCJhcHBlbmRMb2NrQnV0dG9uIiwiZGF0YXNldCIsInRhcmdldHMiLCJsb2NrQnV0dG9uIiwicGFyZW50Tm9kZSIsImNvbmZpcm1NZXNzYWdlIiwiY29uZmlybVRleHQiLCJ1bmxvY2siLCJmb3JtYXR0ZWRDb25maXJtTWVzc2FnZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImxvY2siLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb3dlciIsInN0cmljdCIsImRldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=