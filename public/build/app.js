(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main */ "./assets/main.js");
/* harmony import */ var _js_reservation_hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/reservation-hero */ "./assets/js/reservation-hero.js");
/* harmony import */ var _js_newsletter_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/newsletter-modal */ "./assets/js/newsletter-modal.js");
/* harmony import */ var _js_newsletter_modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_newsletter_modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./builder */ "./assets/builder.js");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_builder__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_deco_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/deco.png */ "./assets/images/deco.png");









/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

// any JS you import will output into a single JS file (app.js in this case)







// any CSS you import will output into a single css file (app.css in this case)
// AOS : styles dans assets/styles/app.scss (entrée default), pas ici — sinon app.css n’est pas lié dans base.html.twig.

var pageLoadStart = Date.now();

/** Largeur max. (px) : même ordre de grandeur que les breakpoints SCSS du site. */
var MOBILE_AOS_MAX_WIDTH = 991;
function isMobileAosViewport() {
  return window.matchMedia("(max-width: ".concat(MOBILE_AOS_MAX_WIDTH, "px)")).matches;
}

/**
 * Sur mobile, les data-aos-delay (200–600 ms) allongent trop la séquence.
 * On les réduit avant AOS.init pour garder un léger décalage sans empiler les attentes.
 */
function scaleDownAosDelaysForMobile() {
  if (!isMobileAosViewport()) {
    return;
  }
  document.querySelectorAll('[data-aos-delay]').forEach(function (el) {
    var raw = el.getAttribute('data-aos-delay');
    if (raw === null || raw === '') {
      return;
    }
    var v = parseInt(raw, 10);
    if (!Number.isFinite(v) || v <= 0) {
      return;
    }
    var scaled = Math.min(90, Math.round(v * 0.22));
    el.setAttribute('data-aos-delay', String(Math.max(0, scaled)));
  });
}
$(window).on('load', function () {
  var body = document.body;
  var mainLoader = document.querySelector('.main-loader');
  var minimumLoaderDuration = 500;
  var hideMainLoader = function hideMainLoader() {
    if (!mainLoader) {
      body.classList.remove('is-loading');
      return;
    }
    mainLoader.classList.add('is-hiding');
    var isCleanedUp = false;
    var cleanup = function cleanup() {
      if (isCleanedUp) {
        return;
      }
      isCleanedUp = true;
      body.classList.remove('is-loading');
      mainLoader.remove();
      scaleDownAosDelaysForMobile();
      var mobile = isMobileAosViewport();
      aos__WEBPACK_IMPORTED_MODULE_14___default().init({
        once: true,
        easing: 'ease-out',
        // Mobile : déclenchement plus tôt (offset plus bas), animation plus courte.
        duration: mobile ? 500 : 1000,
        offset: mobile ? 24 : 120,
        throttleDelay: mobile ? 40 : 99
      });
    };
    mainLoader.addEventListener('transitionend', cleanup, {
      once: true
    });
    window.setTimeout(cleanup, 900);
  };
  var elapsed = Date.now() - pageLoadStart;
  var remaining = Math.max(0, minimumLoaderDuration - elapsed);
  window.setTimeout(hideMainLoader, remaining);
  $(".copy-to-clipboard").on('click', function () {
    var textToCopy = $(this).attr('data-link');
    var tempTextarea = $('<textarea>');
    $('body').append(tempTextarea);
    tempTextarea.val(textToCopy).select();
    document.execCommand('copy');
    tempTextarea.remove();
  });
  var reservationModule = document.querySelector('.reservation-module');
  if (!reservationModule) {
    return;
  }
  var bookFab = document.querySelector('.book-fab');
  var moduleHeight = 145;
  var initialTop = window.innerHeight - moduleHeight;
  var updateReservationState = function updateReservationState() {
    var isPast = window.scrollY >= initialTop;
    reservationModule.classList.toggle('is-sticky', isPast);
    if (bookFab) bookFab.classList.toggle('is-visible', isPast);
  };
  updateReservationState();
  window.addEventListener('scroll', updateReservationState, {
    passive: true
  });
  window.addEventListener('resize', function () {
    initialTop = window.innerHeight - moduleHeight;
    updateReservationState();
  });
});

/***/ }),

/***/ "./assets/builder.js":
/*!***************************!*\
  !*** ./assets/builder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function ($) {
  $('.data_bg').each(function () {
    var bgUrl = $(this).data('bg');
    $(this).css('background', 'url(' + bgUrl + ') no-repeat center center/cover');
  });
});

/***/ }),

/***/ "./assets/have-animation.js":
/*!**********************************!*\
  !*** ./assets/have-animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHaveAnimation: () => (/* binding */ initHaveAnimation)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Ajoute la classe is-animated aux éléments .have-animation lorsqu'ils entrent dans la zone visible.
 * La classe n'est jamais retirée une fois ajoutée.
 *
 * Offset (marge intérieure du bas du viewport, en px) :
 * - attribut data-animation-offset sur l'élément
 * - sinon variable CSS héritée --have-animation-offset (ex. sur body.homepage)
 * - sinon 0
 */
function initHaveAnimation() {
  var nodes = document.querySelectorAll('.have-animation');
  if (!nodes.length) {
    return;
  }
  if (typeof IntersectionObserver === 'undefined') {
    nodes.forEach(function (el) {
      return el.classList.add('is-animated');
    });
    return;
  }
  var parseOffsetPx = function parseOffsetPx(el) {
    var dataAttr = el.getAttribute('data-animation-offset');
    if (dataAttr !== null && dataAttr !== '') {
      var parsed = parseInt(dataAttr, 10);
      if (Number.isFinite(parsed)) {
        return Math.max(0, parsed);
      }
    }
    var raw = getComputedStyle(el).getPropertyValue('--have-animation-offset').trim();
    var n = parseFloat(raw);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  };
  nodes.forEach(function (el) {
    if (el.classList.contains('is-animated')) {
      return;
    }
    var offsetPx = parseOffsetPx(el);
    var rootMargin = "0px 0px -".concat(offsetPx, "px 0px");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: rootMargin,
      threshold: 0
    });
    observer.observe(el);
  });
}

/***/ }),

/***/ "./assets/js/newsletter-modal.js":
/*!***************************************!*\
  !*** ./assets/js/newsletter-modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! selectize/dist/js/standalone/selectize.min.js */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
// Styles Selectize : importés dans app.scss (entrée « default »), sinon ils ne sont pas chargés (seul default l’est dans base.html.twig).

var countries = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
var enLocale = __webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json");
var frLocale = __webpack_require__(/*! i18n-iso-countries/langs/fr.json */ "./node_modules/i18n-iso-countries/langs/fr.json");
countries.registerLocale(enLocale);
countries.registerLocale(frLocale);
var SELECTORS = {
  modal: '[data-newsletter-modal]',
  trigger: '[data-newsletter-trigger]',
  close: '[data-newsletter-close]',
  form: '[data-newsletter-form]',
  feedback: '[data-newsletter-feedback]',
  captcha: '[data-newsletter-captcha]',
  countrySelect: '[data-newsletter-country]'
};
var OPEN_CLASS = 'is-open';
var BODY_OPEN_CLASS = 'has-newsletter-open';
var SUCCESS_FORM_CLASS = 'is-success-state';

/**
 * Liste unique de tous les pays / territoires ISO, tri alphabétique selon la langue d’affichage.
 *
 * @param {string} pageLocale
 * @returns {{ options: Array<Record<string, unknown>>, codes: Set<string>, flatForNative: Array<{ value: string, text: string }> }}
 */
function buildCountrySelectData(pageLocale) {
  var lang = pageLocale === 'en' ? 'en' : 'fr';
  var official = countries.getNames(lang, {
    select: 'official'
  });
  var opts = Object.keys(official).map(function (code) {
    return {
      value: code,
      text: official[code]
    };
  });
  opts.sort(function (a, b) {
    return a.text.localeCompare(b.text, lang, {
      sensitivity: 'base'
    });
  });
  opts.forEach(function (o, i) {
    o.$order = i;
  });
  var codes = new Set(opts.map(function (o) {
    return o.value;
  }));
  var flatForNative = opts.map(function (_ref) {
    var value = _ref.value,
      text = _ref.text;
    return {
      value: value,
      text: text
    };
  });
  return {
    options: opts,
    codes: codes,
    flatForNative: flatForNative
  };
}

/**
 * @param {HTMLFormElement} form
 * @param {Set<string>} codes
 */
function resolveInitialCountryCode(form, codes) {
  var _Array$from$;
  // 1) Suggestion Symfony (CF-IPCountry, défaut PF, …) — prioritaire : sinon une locale navigateur « en-US »
  //    faisait choisir US avant même de lire data-suggested-country (= PF hors CDN).
  var server = (form.dataset.suggestedCountry || '').trim().toUpperCase();
  if (server && codes.has(server)) {
    return server;
  }

  // 2) Secours : région navigateur (en-US → US, …), sauf fr-FR (« France » ne doit pas passer avant le défaut métier sans serveur)
  try {
    var list = typeof navigator !== 'undefined' ? navigator.languages || [navigator.language] : [];
    var _iterator = _createForOfIteratorHelper(list),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var raw = _step.value;
        var m = /^[a-z]{2}-([A-Z]{2})$/.exec(String(raw).replace('_', '-'));
        if (!m || !codes.has(m[1])) {
          continue;
        }
        if (m[1] === 'FR') {
          continue;
        }
        return m[1];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } catch (e) {
    // ignore
  }

  // 3) Polynésie française par défaut
  if (codes.has('PF')) {
    return 'PF';
  }
  if (codes.has('FR')) {
    return 'FR';
  }
  return (_Array$from$ = Array.from(codes)[0]) !== null && _Array$from$ !== void 0 ? _Array$from$ : 'PF';
}

/**
 * @param {HTMLSelectElement} selectEl
 * @param {Array<{ value: string, text: string }>} flatOptions
 * @param {string} initial
 */
function populateNativeCountrySelect(selectEl, flatOptions, initial) {
  selectEl.innerHTML = '';
  var _iterator2 = _createForOfIteratorHelper(flatOptions),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var o = _step2.value;
      var opt = document.createElement('option');
      opt.value = o.value;
      opt.textContent = o.text;
      if (o.value === initial) {
        opt.selected = true;
      }
      selectEl.appendChild(opt);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

/**
 * @param {HTMLFormElement} form
 */
function initCountrySelectize(form) {
  var selectEl = form.querySelector(SELECTORS.countrySelect);
  if (!selectEl || !(selectEl instanceof HTMLSelectElement)) {
    return;
  }
  var pageLocale = form.dataset.pageLocale || 'fr';
  var placeholder = form.dataset.countryPlaceholder || '';
  var built;
  try {
    built = buildCountrySelectData(pageLocale);
  } catch (e) {
    console.error('[newsletter] Liste pays (i18n-iso-countries)', e);
    return;
  }
  var _built = built,
    options = _built.options,
    codes = _built.codes,
    flatForNative = _built.flatForNative;
  var initial = resolveInitialCountryCode(form, codes);
  if (typeof $ === 'undefined' || !$.fn.selectize) {
    populateNativeCountrySelect(selectEl, flatForNative, initial);
    return;
  }
  var $select = $(selectEl);
  if ($select[0].selectize) {
    $select[0].selectize.destroy();
  }
  try {
    $select.selectize({
      options: options,
      items: [initial],
      valueField: 'value',
      labelField: 'text',
      searchField: ['text'],
      placeholder: placeholder,
      maxItems: 1,
      create: false,
      allowEmptyOption: false,
      sortField: [{
        field: '$order',
        direction: 'asc'
      }],
      dropdownParent: 'body',
      copyClassesToDropdown: false,
      wrapperClass: 'selectize-control newsletter-country-selectize',
      dropdownClass: 'selectize-dropdown newsletter-country-dropdown'
    });
  } catch (err) {
    console.error('[newsletter] Selectize', err);
    populateNativeCountrySelect(selectEl, flatForNative, initial);
    return;
  }
  var inst = $select[0].selectize;
  form._newsletterCountrySelectize = inst;
}

/**
 * @param {HTMLFormElement} form
 */
function refreshCountryFieldAfterReset(form) {
  if (form._newsletterCountrySelectize) {
    try {
      form._newsletterCountrySelectize.destroy();
    } catch (e) {
      // ignore
    }
    form._newsletterCountrySelectize = null;
  }
  initCountrySelectize(form);
}
function openModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add(OPEN_CLASS);
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add(BODY_OPEN_CLASS);
  var main = modal.querySelector('[data-newsletter-main]');
  var firstField = main && main.querySelector('input:not([type="hidden"]), select, textarea');
  if (firstField) {
    window.requestAnimationFrame(function () {
      return firstField.focus();
    });
  }
}
function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove(OPEN_CLASS);
  modal.setAttribute('aria-hidden', 'true');
  modal.hidden = true;
  document.body.classList.remove(BODY_OPEN_CLASS);
  var feedback = modal.querySelector(SELECTORS.feedback);
  if (feedback) {
    feedback.textContent = '';
    feedback.classList.remove('is-success', 'is-error');
  }
  var form = modal.querySelector(SELECTORS.form);
  if (form) {
    form.classList.remove(SUCCESS_FORM_CLASS);
    form.reset();
    refreshCountryFieldAfterReset(form);
  }
}
function handleSubmit(_x, _x2) {
  return _handleSubmit.apply(this, arguments);
}
function _handleSubmit() {
  _handleSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event, modal) {
    var form, feedback, submitButton, formData, email, firstName, lastName, country, locale, genericErrorMessage, incompleteMessage, recaptchaEnabled, recaptchaSiteKey, captchaInput, captchaToken, response, payload;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          form = event.currentTarget;
          feedback = modal.querySelector(SELECTORS.feedback);
          submitButton = form.querySelector('button[type="submit"]');
          formData = new FormData(form);
          email = (formData.get('email') || '').toString().trim();
          firstName = (formData.get('firstName') || '').toString().trim();
          lastName = (formData.get('lastName') || '').toString().trim();
          country = (formData.get('country') || '').toString().trim();
          locale = (form.dataset.pageLocale || document.documentElement.getAttribute('lang') || document.documentElement.dataset.locale || '').trim();
          genericErrorMessage = form.dataset.genericError || 'Une erreur s\'est produite, veuillez réessayer plus tard.';
          incompleteMessage = form.dataset.incompleteError || 'Veuillez remplir tous les champs correctement.';
          recaptchaEnabled = form.dataset.recaptchaEnabled === '1';
          recaptchaSiteKey = form.dataset.recaptchaSiteKey || '';
          captchaInput = form.querySelector(SELECTORS.captcha);
          if (feedback) {
            feedback.textContent = '';
            feedback.classList.remove('is-success', 'is-error');
          }
          form.classList.remove(SUCCESS_FORM_CLASS);
          if (submitButton) {
            submitButton.disabled = true;
          }
          if (!(!email || !firstName || !lastName || !country)) {
            _context.next = 22;
            break;
          }
          if (feedback) {
            feedback.textContent = incompleteMessage;
            feedback.classList.add('is-error');
          }
          if (submitButton) {
            submitButton.disabled = false;
          }
          return _context.abrupt("return");
        case 22:
          captchaToken = '';
          if (!recaptchaEnabled) {
            _context.next = 31;
            break;
          }
          if (!(!window.grecaptcha || typeof window.grecaptcha.execute !== 'function' || recaptchaSiteKey === '')) {
            _context.next = 28;
            break;
          }
          if (feedback) {
            feedback.textContent = genericErrorMessage;
            feedback.classList.add('is-error');
          }
          if (submitButton) {
            submitButton.disabled = false;
          }
          return _context.abrupt("return");
        case 28:
          _context.next = 30;
          return new Promise(function (resolve, reject) {
            window.grecaptcha.ready(function () {
              window.grecaptcha.execute(recaptchaSiteKey, {
                action: 'newsletter_subscribe'
              }).then(resolve)["catch"](reject);
            });
          });
        case 30:
          captchaToken = _context.sent;
        case 31:
          if (captchaInput) {
            captchaInput.value = captchaToken;
          }
          _context.prev = 32;
          _context.next = 35;
          return fetch(form.action, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
              email: email,
              firstName: firstName,
              lastName: lastName,
              country: country,
              locale: locale,
              captcha: captchaToken
            })
          });
        case 35:
          response = _context.sent;
          payload = {};
          _context.prev = 37;
          _context.next = 40;
          return response.json();
        case 40:
          payload = _context.sent;
          _context.next = 46;
          break;
        case 43:
          _context.prev = 43;
          _context.t0 = _context["catch"](37);
          payload = {};
        case 46:
          if (!(!response.ok || payload.success === false)) {
            _context.next = 49;
            break;
          }
          if (feedback) {
            feedback.textContent = payload.message || genericErrorMessage;
            feedback.classList.add('is-error');
          }
          return _context.abrupt("return");
        case 49:
          if (feedback) {
            feedback.textContent = payload.message || 'Thanks — you are on the list.';
            feedback.classList.add('is-success');
          }
          form.classList.add(SUCCESS_FORM_CLASS);
          form.reset();
          refreshCountryFieldAfterReset(form);
          _context.next = 59;
          break;
        case 55:
          _context.prev = 55;
          _context.t1 = _context["catch"](32);
          console.error('[newsletter] Erreur réseau ou inattendue lors de la soumission', _context.t1);
          if (feedback) {
            feedback.textContent = genericErrorMessage;
            feedback.classList.add('is-error');
          }
        case 59:
          _context.prev = 59;
          if (submitButton) {
            submitButton.disabled = false;
          }
          return _context.finish(59);
        case 62:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[32, 55, 59, 62], [37, 43]]);
  }));
  return _handleSubmit.apply(this, arguments);
}
function init() {
  var modal = document.querySelector(SELECTORS.modal);
  if (!modal) return;
  var form = modal.querySelector(SELECTORS.form);
  if (form) {
    try {
      initCountrySelectize(form);
    } catch (err) {
      console.error('[newsletter] Initialisation du sélecteur pays impossible (dépendances manquantes ? yarn install)', err);
    }
    form.addEventListener('submit', function (event) {
      return handleSubmit(event, modal);
    });
  }
  document.addEventListener('click', function (event) {
    var trigger = event.target.closest(SELECTORS.trigger);
    if (trigger) {
      event.preventDefault();
      openModal(modal);
      return;
    }
    if (event.target.closest(SELECTORS.close) && modal.contains(event.target)) {
      event.preventDefault();
      closeModal(modal);
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains(OPEN_CLASS)) {
      closeModal(modal);
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/***/ }),

/***/ "./assets/js/reservation-hero.js":
/*!***************************************!*\
  !*** ./assets/js/reservation-hero.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flatpickr/dist/l10n/fr.js */ "./node_modules/flatpickr/dist/l10n/fr.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flatpickr/dist/l10n/default.js */ "./node_modules/flatpickr/dist/l10n/default.js");
/* harmony import */ var flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_12__);














/**
 * Flatpickr parcourt document.styleSheets et lit sheet.cssRules ; sur une feuille cross-origin
 * (ex. Google Fonts), l’accès lève SecurityError avant même le try/catch interne.
 * Une feuille <style> locale en tête du <head> garantit que la première feuille est lisible.
 */
function prependLocalStylesheetHook() {
  if (document.getElementById('flatpickr-local-stylesheet-hook')) {
    return;
  }
  var el = document.createElement('style');
  el.id = 'flatpickr-local-stylesheet-hook';
  el.appendChild(document.createTextNode('/* flatpickr: feuille locale pour accès cssRules */'));
  document.head.insertBefore(el, document.head.firstChild);
}
function debounce(fn, ms) {
  var t;
  return function () {
    clearTimeout(t);
    var args = arguments;
    t = setTimeout(function () {
      fn.apply(null, args);
    }, ms);
  };
}
function parseIntStrict(v, fallback) {
  var n = parseInt(String(v), 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Locale ISO 2 lettres depuis le HTML (Symfony : lang + data-locale sur <html> ou <body>). */
function getSiteLocale() {
  var el = document.documentElement;
  var raw = el.getAttribute('data-locale') || el.getAttribute('lang') || document.body && document.body.getAttribute('data-locale') || 'fr';
  return String(raw).toLowerCase().split('-')[0];
}
function getFlatpickrLocale() {
  var loc = getSiteLocale();
  if (loc === 'fr') {
    return flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_11__.French;
  }
  return (flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_12___default());
}

/** @typedef {{ adults_one: string, adults: string, kid_one: string, kids: string, sep: string }} GuestsSummaryI18n */

/** Remplace le marqueur __COUNT__ (issu des fichiers de traduction Symfony). */
function applyCountTemplate(template, count) {
  return String(template).split('__COUNT__').join(String(count));
}

/**
 * @param {number} adults
 * @param {number} kids
 * @param {GuestsSummaryI18n | null} i18n
 */
function formatGuestSummary(adults, kids, i18n) {
  var t = i18n || /** @type {GuestsSummaryI18n} */{
    adults_one: '1 adult',
    adults: '__COUNT__ adults',
    kid_one: '1 kid',
    kids: '__COUNT__ kids',
    sep: ' · '
  };
  var aLabel = adults === 1 ? t.adults_one : applyCountTemplate(t.adults, adults);
  if (kids === 0) {
    return aLabel;
  }
  var kLabel = kids === 1 ? t.kid_one : applyCountTemplate(t.kids, kids);
  return aLabel + t.sep + kLabel;
}
function initReservationHero() {
  var form = document.getElementById('hero-reservation-form');
  var datesBlock = document.querySelector('[data-reservation-dates]');
  var calendarMount = document.getElementById('reservation-calendar-mount');
  var anchorEl = document.getElementById('reservation-flatpickr-anchor');
  var checkinHidden = document.getElementById('reservation-checkin');
  var checkoutHidden = document.getElementById('reservation-checkout');
  var checkinDisplay = document.getElementById('reservation-checkin-display');
  var checkoutDisplay = document.getElementById('reservation-checkout-display');
  var guestsMount = document.getElementById('reservation-guests-popover-mount');
  var guestsTrigger = document.querySelector('.reservation-module__item[data-reservation-field="guests"]');
  var guestsSummary = document.getElementById('reservation-guests-summary');
  var adultsHidden = document.getElementById('reservation-adults');
  var kidsHidden = document.getElementById('reservation-kids');
  var guestsDone = document.getElementById('reservation-guests-done');
  if (!form || !datesBlock || !calendarMount || !anchorEl || !checkinHidden || !checkoutHidden || !checkinDisplay || !checkoutDisplay) {
    return;
  }

  /** @type {GuestsSummaryI18n | null} */
  var guestsSummaryI18n = null;
  var i18nRaw = form.getAttribute('data-guests-summary-i18n');
  if (i18nRaw) {
    try {
      guestsSummaryI18n = JSON.parse(i18nRaw);
    } catch (_e) {
      guestsSummaryI18n = null;
    }
  }
  prependLocalStylesheetHook();
  var fp = null;
  function lockYearInputs(instance) {
    if (!instance || !instance.calendarContainer) {
      return;
    }
    instance.calendarContainer.querySelectorAll('input.cur-year').forEach(function (el) {
      el.disabled = true;
      el.setAttribute('readonly', 'readonly');
      el.setAttribute('aria-readonly', 'true');
      el.setAttribute('tabindex', '-1');
    });
  }
  var calendarHook = function calendarHook(_selectedDates, _dateStr, instance) {
    if (instance && instance.calendarContainer) {
      instance.calendarContainer.classList.add('reservation-flatpickr-calendar');
    }
    lockYearInputs(instance);
  };
  function showMonthsCount() {
    return window.innerWidth < 640 ? 1 : 2;
  }
  function syncFromSelection(selectedDates, instance) {
    var fmtYmd = 'Y-m-d';
    var fmtUi = 'j M Y';
    if (selectedDates.length >= 1) {
      checkinHidden.value = instance.formatDate(selectedDates[0], fmtYmd);
      checkinDisplay.value = instance.formatDate(selectedDates[0], fmtUi);
    } else {
      checkinHidden.value = '';
      checkinDisplay.value = '';
    }
    if (selectedDates.length >= 2) {
      checkoutHidden.value = instance.formatDate(selectedDates[1], fmtYmd);
      checkoutDisplay.value = instance.formatDate(selectedDates[1], fmtUi);
    } else {
      checkoutHidden.value = '';
      checkoutDisplay.value = '';
    }
  }
  function createFlatpickr() {
    if (fp) {
      return fp;
    }
    fp = (0,flatpickr__WEBPACK_IMPORTED_MODULE_10__["default"])(anchorEl, {
      mode: 'range',
      // true déclenche focusAndClose() → focus sur l’input caché → zoom iOS (WebKit) au 2ᵉ jour.
      closeOnSelect: false,
      // inline : open() est noop, mais évite tout listener focus/clic inutile sur l’ancre.
      clickOpens: false,
      showMonths: showMonthsCount(),
      dateFormat: 'Y-m-d',
      allowInput: false,
      inline: true,
      appendTo: calendarMount,
      disableMobile: true,
      minDate: 'today',
      locale: Object.assign({}, getFlatpickrLocale(), {
        firstDayOfWeek: 1
      }),
      monthSelectorType: 'static',
      onReady: calendarHook,
      onMonthChange: function onMonthChange(_selectedDates, _dateStr, instance) {
        lockYearInputs(instance);
      },
      onChange: function onChange(selectedDates, _dateStr, instance) {
        syncFromSelection(selectedDates, instance);
        if (selectedDates.length >= 2 && calendarOpen) {
          requestAnimationFrame(function () {
            closeCalendar();
          });
        }
      },
      onClose: function onClose(selectedDates, _dateStr, instance) {
        syncFromSelection(selectedDates, instance);
      }
    });
    if (checkinHidden.value && checkoutHidden.value) {
      fp.setDate([checkinHidden.value, checkoutHidden.value], false);
      syncFromSelection(fp.selectedDates, fp);
    }
    requestAnimationFrame(function () {
      if (fp) {
        fp.redraw();
        lockYearInputs(fp);
      }
    });
    return fp;
  }
  var calendarOpen = false;
  var guestsOpen = false;
  var suppressNextDocClick = false;
  function isStickyModule() {
    var module = document.querySelector('.reservation-module');
    return !!(module && module.classList.contains('is-sticky'));
  }
  function setCalendarMountPlacementClass() {
    calendarMount.classList.toggle('reservation-module__calendar-mount--sticky', isStickyModule());
  }
  function setGuestsMountPlacementClass() {
    if (guestsMount) {
      guestsMount.classList.toggle('reservation-module__guests-popover-mount--sticky', isStickyModule());
    }
  }

  /** Aligne le bord droit du popover sur le champ Guests (montage = enfant du module, comme le calendrier). */
  function syncGuestsPopoverPosition() {
    if (!guestsMount || !guestsTrigger) {
      return;
    }
    var module = document.querySelector('.reservation-module');
    if (!module) {
      return;
    }
    if (window.innerWidth <= 500) {
      guestsMount.style.right = '';
      guestsMount.style.left = '';
      return;
    }
    var m = module.getBoundingClientRect();
    var t = guestsTrigger.getBoundingClientRect();
    guestsMount.style.left = 'auto';
    guestsMount.style.right = Math.max(0, m.right - t.right) + 'px';
  }
  function clearGuestsPopoverPosition() {
    if (guestsMount) {
      guestsMount.style.right = '';
      guestsMount.style.left = '';
    }
  }
  window.addEventListener('resize', debounce(function () {
    if (fp) {
      fp.set('showMonths', showMonthsCount());
      fp.redraw();
      lockYearInputs(fp);
    }
    if (guestsOpen) {
      setGuestsMountPlacementClass();
      syncGuestsPopoverPosition();
    }
  }, 200));
  window.addEventListener('scroll', debounce(function () {
    if (!guestsOpen) {
      return;
    }
    setGuestsMountPlacementClass();
    syncGuestsPopoverPosition();
  }, 50), {
    passive: true
  });
  function openCalendar() {
    if (guestsOpen) {
      closeGuests();
    }
    setCalendarMountPlacementClass();
    calendarMount.classList.add('is-open');
    datesBlock.setAttribute('aria-expanded', 'true');
    calendarOpen = true;
    suppressNextDocClick = true;
    requestAnimationFrame(function () {
      createFlatpickr();
    });
  }
  function closeCalendar() {
    calendarMount.classList.remove('is-open');
    datesBlock.setAttribute('aria-expanded', 'false');
    calendarOpen = false;
  }
  datesBlock.addEventListener('click', function (e) {
    if (e.target.closest('.flatpickr-calendar')) {
      return;
    }
    if (e.target.closest('.reservation-module__calendar-mount') && !e.target.closest('.flatpickr-calendar')) {
      return;
    }
    e.preventDefault();
    if (calendarOpen) {
      closeCalendar();
      return;
    }
    openCalendar();
  });

  // -------------------------------------------------------------------------
  // Guests popover (steppers + champs cachés adults / kids)
  // -------------------------------------------------------------------------
  function getAdultsKids() {
    var a = adultsHidden ? parseIntStrict(adultsHidden.value, 2) : 2;
    var k = kidsHidden ? parseIntStrict(kidsHidden.value, 0) : 0;
    return {
      adults: Math.min(12, Math.max(1, a)),
      kids: Math.min(10, Math.max(0, k))
    };
  }
  function syncGuestStepperUi() {
    var _getAdultsKids = getAdultsKids(),
      adults = _getAdultsKids.adults,
      kids = _getAdultsKids.kids;
    document.querySelectorAll('[data-guest-stepper]').forEach(function (row) {
      var key = row.getAttribute('data-guest-stepper');
      var min = parseIntStrict(row.getAttribute('data-min'), 0);
      var max = parseIntStrict(row.getAttribute('data-max'), 99);
      var val = key === 'adults' ? adults : kids;
      var display = row.querySelector('[data-guest-stepper-value]');
      if (display) {
        display.textContent = String(val);
      }
      var down = row.querySelector('[data-guest-step="down"]');
      var up = row.querySelector('[data-guest-step="up"]');
      if (down) {
        down.disabled = val <= min;
      }
      if (up) {
        up.disabled = val >= max;
      }
    });
    if (guestsSummary) {
      guestsSummary.textContent = formatGuestSummary(adults, kids, guestsSummaryI18n);
    }
  }
  function setAdultsKids(adults, kids) {
    if (adultsHidden) {
      adultsHidden.value = String(Math.min(12, Math.max(1, adults)));
    }
    if (kidsHidden) {
      kidsHidden.value = String(Math.min(10, Math.max(0, kids)));
    }
    syncGuestStepperUi();
  }
  function openGuests() {
    if (!guestsMount || !guestsTrigger) {
      return;
    }
    if (calendarOpen) {
      closeCalendar();
    }
    setGuestsMountPlacementClass();
    guestsMount.classList.add('is-open');
    guestsMount.setAttribute('aria-hidden', 'false');
    guestsTrigger.classList.add('is-active');
    guestsTrigger.setAttribute('aria-expanded', 'true');
    guestsOpen = true;
    suppressNextDocClick = true;
    syncGuestStepperUi();
    requestAnimationFrame(function () {
      syncGuestsPopoverPosition();
    });
  }
  function closeGuests() {
    if (!guestsMount || !guestsTrigger) {
      return;
    }
    guestsMount.classList.remove('is-open');
    guestsMount.setAttribute('aria-hidden', 'true');
    clearGuestsPopoverPosition();
    guestsTrigger.classList.remove('is-active');
    guestsTrigger.setAttribute('aria-expanded', 'false');
    guestsOpen = false;
  }
  function toggleGuests() {
    if (guestsOpen) {
      closeGuests();
    } else {
      openGuests();
    }
  }
  if (guestsMount && guestsTrigger && adultsHidden && kidsHidden) {
    syncGuestStepperUi();
    guestsTrigger.addEventListener('click', function (e) {
      // Les +/- et « Done » sont dans l’item mais hors du résumé : ne pas traiter comme ouverture/fermeture du trigger
      if (guestsMount.contains(e.target)) {
        return;
      }
      e.preventDefault();
      toggleGuests();
    });
    guestsTrigger.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') {
        return;
      }
      if (guestsMount.contains(e.target)) {
        return;
      }
      e.preventDefault();
      toggleGuests();
    });
    document.querySelectorAll('[data-guest-stepper]').forEach(function (row) {
      row.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-guest-step]');
        if (!btn || btn.disabled) {
          return;
        }
        var key = row.getAttribute('data-guest-stepper');
        var min = parseIntStrict(row.getAttribute('data-min'), 0);
        var max = parseIntStrict(row.getAttribute('data-max'), 99);
        var _getAdultsKids2 = getAdultsKids(),
          adults = _getAdultsKids2.adults,
          kids = _getAdultsKids2.kids;
        var delta = btn.getAttribute('data-guest-step') === 'up' ? 1 : -1;
        if (key === 'adults') {
          var next = adults + delta;
          if (next < min || next > max) {
            return;
          }
          setAdultsKids(next, kids);
        } else if (key === 'kids') {
          var _next = kids + delta;
          if (_next < min || _next > max) {
            return;
          }
          setAdultsKids(adults, _next);
        }
      });
    });
    if (guestsDone) {
      guestsDone.addEventListener('click', function () {
        closeGuests();
      });
    }
  }
  document.addEventListener('click', function (e) {
    if (suppressNextDocClick) {
      suppressNextDocClick = false;
      return;
    }
    if (calendarOpen) {
      if (datesBlock.contains(e.target) || calendarMount.contains(e.target)) {
        return;
      }
      closeCalendar();
    }
    if (guestsOpen && guestsMount && guestsTrigger) {
      if (guestsTrigger.contains(e.target) || guestsMount.contains(e.target)) {
        return;
      }
      closeGuests();
    }
  }, true);
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') {
      return;
    }
    if (guestsOpen) {
      closeGuests();
      return;
    }
    if (calendarOpen) {
      closeCalendar();
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReservationHero);
} else {
  initReservationHero();
}

/***/ }),

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _have_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./have-animation */ "./assets/have-animation.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");












$(function ($) {
  var $body = $('body');
  // Menu
  var $dropdown = $('.dropdown');
  var $mainNavBar = $('#navbarSupportedContent');
  var $previousmenu = $('.previousmenu');
  $('.dropdown a').on('click', function (event) {
    $previousmenu.addClass('show');
    $mainNavBar.addClass('submenu_show');
  });
  $body.on('click', function (e) {
    if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
      $('.dropdown-menu').removeClass('show');
      if ($mainNavBar.find(".dropdown.show").length === 0) {
        $previousmenu.removeClass('show');
        $mainNavBar.removeClass('submenu_show');
      }
    }
    if ($('.search_block').hasClass('active') && !$('.show_search').is(e.target) && !$('.search_block').is(e.target) && $('.search_block').has(e.target).length === 0) {
      $('.search_block').removeClass('active');
    }
  });
  $mainNavBar.on('hide.bs.collapse', function () {
    $('body').removeClass('overflow-hidden');
    $previousmenu.removeClass('show');
    $mainNavBar.removeClass('submenu_show');
  });
  $mainNavBar.on('shown.bs.collapse', function () {
    $mainNavBar.removeClass('submenu_show');
    setTimeout(function () {
      $('body').addClass('overflow-hidden');
    }, 300);
  });
  var $stayRoomsSlider = $('.section-2__rooms');
  if ($stayRoomsSlider.length) {
    $stayRoomsSlider.slick({
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      cssEase: 'ease',
      autoplay: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
  var $sliderArticles = $('.slider_articles');
  if ($sliderArticles.length) {
    $sliderArticles.slick({
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: false,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '100px'
        }
      }]
    });
  }
  var $sliderArticlesBuilder = $('.slider_articles_builder');
  if ($sliderArticlesBuilder.length) {
    $sliderArticlesBuilder.slick({
      dots: true,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: false,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '100px'
        }
      }]
    });
  }
  var $sliderNews = $('.slider_news');
  if ($sliderNews.length) {
    $sliderNews.slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
          centerMode: true,
          centerPadding: '100px'
        }
      }]
    });
  }
  var $sliderGallery = $('.slider_gallery');
  if ($sliderGallery.length) {
    $sliderGallery.slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      fade: false,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: false
    });
  }
  if ($('.gallery_modal').length) {
    $body.on('click', '.gallery_modal', function () {
      var currentSlider = $(this).data('target');
      var currentSlide = $(this).data('slideto');
      if ($(currentSlider).length) {
        $(currentSlider).slick('slickGoTo', currentSlide);
      }
    });
  }
  $body.on('click', '.slidernews_actions', function () {
    var action = $(this).data('actions');
    if (action != null) {
      if (action === "prev") {
        $sliderNews.slick('slickPrev');
      }
      if (action === "next") {
        $sliderNews.slick('slickNext');
      }
    }
  });
  $('.show_search').on('click', function () {
    $('.search_block').toggleClass('active');
  });
  $(window).scroll(function () {
    stickyHeader();
  });
  function stickyHeader() {
    var sticky = $('#header_sticky'),
      scroll = $(window).scrollTop();
    if (scroll > 0) {
      sticky.addClass('active');
    } else {
      sticky.removeClass('active');
    }
  }
  stickyHeader();
  (0,_have_animation__WEBPACK_IMPORTED_MODULE_11__.initHaveAnimation)();

  // Menu latéral (header) : ouverture / fermeture, backdrop, blocage du scroll
  var siteHeader = document.getElementById('site-header');
  var headerMenuToggle = document.getElementById('header-menu-toggle');
  var headerMenuFab = document.getElementById('header-menu-fab');
  var headerDrawerBackdrop = document.querySelector('.js-header-drawer-backdrop');
  var headerDrawer = document.querySelector('.js-header-drawer');
  /** Évite un second tap immédiat sur le burger (latence tactile iOS) qui refermait le menu. */
  var headerMenuIgnoreCloseUntil = 0;
  function getHeaderMenuBarHeight() {
    if (!siteHeader) {
      return 108;
    }
    var bar = siteHeader.querySelector('.header__content');
    if (bar) {
      return bar.offsetHeight;
    }
    var raw = getComputedStyle(siteHeader).getPropertyValue('--header-bar-height').trim();
    var parsed = parseInt(raw, 10);
    return Number.isFinite(parsed) ? parsed : 108;
  }
  function updateHeaderMenuFabVisibility() {
    if (!headerMenuFab) {
      return;
    }
    var threshold = getHeaderMenuBarHeight() + 100;
    var y = window.scrollY || document.documentElement.scrollTop;
    if (y > threshold) {
      headerMenuFab.classList.add('header__menu-fab--visible');
      document.body.classList.add('menu-fab--visible');
      headerMenuFab.setAttribute('aria-hidden', 'false');
      headerMenuFab.removeAttribute('tabindex');
    } else {
      headerMenuFab.classList.remove('header__menu-fab--visible');
      document.body.classList.remove('menu-fab--visible');
      headerMenuFab.setAttribute('aria-hidden', 'true');
      headerMenuFab.setAttribute('tabindex', '-1');
    }
  }
  function syncHeaderMenuFabAria() {
    if (!headerMenuFab) {
      return;
    }
    var open = document.documentElement.classList.contains('menu-drawer-open');
    headerMenuFab.setAttribute('aria-expanded', open ? 'true' : 'false');
    headerMenuFab.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  function closeHeaderDrawer() {
    headerMenuIgnoreCloseUntil = 0;
    document.documentElement.classList.remove('menu-drawer-open');
    document.body.classList.remove('menu-drawer-open');
    if (siteHeader) {
      siteHeader.classList.remove('header--drawer-open');
    }
    if (headerMenuToggle) {
      headerMenuToggle.setAttribute('aria-expanded', 'false');
      headerMenuToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }
    if (headerDrawer) {
      headerDrawer.setAttribute('aria-hidden', 'true');
    }
    if (headerDrawerBackdrop) {
      headerDrawerBackdrop.setAttribute('aria-hidden', 'true');
    }
    syncHeaderMenuFabAria();
  }
  function openHeaderDrawer() {
    document.documentElement.classList.add('menu-drawer-open');
    document.body.classList.add('menu-drawer-open');
    if (siteHeader) {
      siteHeader.classList.add('header--drawer-open');
    }
    if (headerMenuToggle) {
      headerMenuToggle.setAttribute('aria-expanded', 'true');
      headerMenuToggle.setAttribute('aria-label', 'Fermer le menu');
    }
    if (headerDrawer) {
      headerDrawer.setAttribute('aria-hidden', 'false');
    }
    if (headerDrawerBackdrop) {
      headerDrawerBackdrop.setAttribute('aria-hidden', 'false');
    }
    syncHeaderMenuFabAria();
  }

  /** `fromMenuButton` : après ouverture, ignore brièvement une fermeture via burger/FAB (double tap iOS). */
  function toggleHeaderDrawer(fromMenuButton) {
    if (document.documentElement.classList.contains('menu-drawer-open')) {
      if (fromMenuButton && Date.now() < headerMenuIgnoreCloseUntil) {
        return;
      }
      closeHeaderDrawer();
    } else {
      openHeaderDrawer();
      headerMenuIgnoreCloseUntil = Date.now() + 280;
    }
  }
  if (headerMenuToggle && siteHeader) {
    headerMenuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggleHeaderDrawer(true);
    });
  }
  if (headerMenuFab) {
    headerMenuFab.addEventListener('click', function (e) {
      e.preventDefault();
      toggleHeaderDrawer(true);
    });
  }
  updateHeaderMenuFabVisibility();
  window.addEventListener('scroll', updateHeaderMenuFabVisibility, {
    passive: true
  });
  window.addEventListener('resize', updateHeaderMenuFabVisibility);
  if (headerDrawerBackdrop) {
    headerDrawerBackdrop.addEventListener('click', closeHeaderDrawer);
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.documentElement.classList.contains('menu-drawer-open')) {
      closeHeaderDrawer();
    }
  });
  if (headerDrawer) {
    headerDrawer.querySelectorAll('a.header__drawer-link').forEach(function (anchor) {
      anchor.addEventListener('click', function () {
        closeHeaderDrawer();
      });
    });
  }
});

/***/ }),

/***/ "./assets/images/deco.png":
/*!********************************!*\
  !*** ./assets/images/deco.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/deco.22b155df.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-7be1ba","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_modules_es_-f8ad3e","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d2a0ee","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-dab795","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-97c0f6","vendors-node_modules_core-js_internals_delete-property-or-throw_js-node_modules_core-js_inter-6a42c7","vendors-node_modules_core-js_modules_es_date_now_js-node_modules_selectize_dist_js_standalone-e52ce2","vendors-node_modules_core-js_modules_es_array_sort_js-node_modules_core-js_modules_es_set_js--e8dfb7","vendors-node_modules_aos_dist_aos_js-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_mod-a71edf"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUosQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaGF2ZS1hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25ld3NsZXR0ZXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Jlc2VydmF0aW9uLWhlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gYW55IEpTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBKUyBmaWxlIChhcHAuanMgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgJy4vbWFpbic7XG5pbXBvcnQgJy4vanMvcmVzZXJ2YXRpb24taGVybyc7XG5pbXBvcnQgJy4vanMvbmV3c2xldHRlci1tb2RhbCc7XG5pbXBvcnQgJy4vYnVpbGRlcic7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIEFPUyA6IHN0eWxlcyBkYW5zIGFzc2V0cy9zdHlsZXMvYXBwLnNjc3MgKGVudHLDqWUgZGVmYXVsdCksIHBhcyBpY2kg4oCUIHNpbm9uIGFwcC5jc3MgbuKAmWVzdCBwYXMgbGnDqSBkYW5zIGJhc2UuaHRtbC50d2lnLlxuaW1wb3J0ICcuL2ltYWdlcy9kZWNvLnBuZyc7XG5cbmNvbnN0IHBhZ2VMb2FkU3RhcnQgPSBEYXRlLm5vdygpO1xuXG4vKiogTGFyZ2V1ciBtYXguIChweCkgOiBtw6ptZSBvcmRyZSBkZSBncmFuZGV1ciBxdWUgbGVzIGJyZWFrcG9pbnRzIFNDU1MgZHUgc2l0ZS4gKi9cbmNvbnN0IE1PQklMRV9BT1NfTUFYX1dJRFRIID0gOTkxO1xuXG5mdW5jdGlvbiBpc01vYmlsZUFvc1ZpZXdwb3J0KCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHtNT0JJTEVfQU9TX01BWF9XSURUSH1weClgKS5tYXRjaGVzO1xufVxuXG4vKipcbiAqIFN1ciBtb2JpbGUsIGxlcyBkYXRhLWFvcy1kZWxheSAoMjAw4oCTNjAwIG1zKSBhbGxvbmdlbnQgdHJvcCBsYSBzw6lxdWVuY2UuXG4gKiBPbiBsZXMgcsOpZHVpdCBhdmFudCBBT1MuaW5pdCBwb3VyIGdhcmRlciB1biBsw6lnZXIgZMOpY2FsYWdlIHNhbnMgZW1waWxlciBsZXMgYXR0ZW50ZXMuXG4gKi9cbmZ1bmN0aW9uIHNjYWxlRG93bkFvc0RlbGF5c0Zvck1vYmlsZSgpIHtcbiAgICBpZiAoIWlzTW9iaWxlQW9zVmlld3BvcnQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFvcy1kZWxheV0nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjb25zdCByYXcgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5Jyk7XG4gICAgICAgIGlmIChyYXcgPT09IG51bGwgfHwgcmF3ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHYgPSBwYXJzZUludChyYXcsIDEwKTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodikgfHwgdiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NhbGVkID0gTWF0aC5taW4oOTAsIE1hdGgucm91bmQodiAqIDAuMjIpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIFN0cmluZyhNYXRoLm1heCgwLCBzY2FsZWQpKSk7XG4gICAgfSk7XG59XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IG1haW5Mb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1sb2FkZXInKTtcbiAgICBjb25zdCBtaW5pbXVtTG9hZGVyRHVyYXRpb24gPSA1MDA7XG5cbiAgICBjb25zdCBoaWRlTWFpbkxvYWRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFtYWluTG9hZGVyKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5Mb2FkZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkaW5nJyk7XG4gICAgICAgIGxldCBpc0NsZWFuZWRVcCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDbGVhbmVkVXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0NsZWFuZWRVcCA9IHRydWU7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIG1haW5Mb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICBzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUoKTtcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZSA9IGlzTW9iaWxlQW9zVmlld3BvcnQoKTtcbiAgICAgICAgICAgIEFPUy5pbml0KHtcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAvLyBNb2JpbGUgOiBkw6ljbGVuY2hlbWVudCBwbHVzIHTDtHQgKG9mZnNldCBwbHVzIGJhcyksIGFuaW1hdGlvbiBwbHVzIGNvdXJ0ZS5cbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogbW9iaWxlID8gNTAwIDogMTAwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG1vYmlsZSA/IDI0IDogMTIwLFxuICAgICAgICAgICAgICAgIHRocm90dGxlRGVsYXk6IG1vYmlsZSA/IDQwIDogOTksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBtYWluTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhbnVwLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNsZWFudXAsIDkwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gcGFnZUxvYWRTdGFydDtcbiAgICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBtaW5pbXVtTG9hZGVyRHVyYXRpb24gLSBlbGFwc2VkKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dChoaWRlTWFpbkxvYWRlciwgcmVtYWluaW5nKTtcblxuICAgICQoXCIuY29weS10by1jbGlwYm9hcmRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRleHRUb0NvcHkgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGluaycpO1xuICAgICAgICBjb25zdCB0ZW1wVGV4dGFyZWEgPSAkKCc8dGV4dGFyZWE+Jyk7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGVtcFRleHRhcmVhKTtcbiAgICAgICAgdGVtcFRleHRhcmVhLnZhbCh0ZXh0VG9Db3B5KS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdGVtcFRleHRhcmVhLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25Nb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlJyk7XG4gICAgaWYgKCFyZXNlcnZhdGlvbk1vZHVsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYm9va0ZhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWZhYicpO1xuICAgIGNvbnN0IG1vZHVsZUhlaWdodCA9IDE0NTtcbiAgICBsZXQgaW5pdGlhbFRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIG1vZHVsZUhlaWdodDtcblxuICAgIGNvbnN0IHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUGFzdCA9IHdpbmRvdy5zY3JvbGxZID49IGluaXRpYWxUb3A7XG4gICAgICAgIHJlc2VydmF0aW9uTW9kdWxlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScsIGlzUGFzdCk7XG4gICAgICAgIGlmIChib29rRmFiKSBib29rRmFiLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnLCBpc1Bhc3QpO1xuICAgIH07XG5cbiAgICB1cGRhdGVSZXNlcnZhdGlvblN0YXRlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpbml0aWFsVG9wID0gd2luZG93LmlubmVySGVpZ2h0IC0gbW9kdWxlSGVpZ2h0O1xuICAgICAgICB1cGRhdGVSZXNlcnZhdGlvblN0YXRlKCk7XG4gICAgfSk7XG59KTsiLCJcbiQoZnVuY3Rpb24oJCkge1xuICAgICQoJy5kYXRhX2JnJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGJnVXJsID0gJCh0aGlzKS5kYXRhKCdiZycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmdVcmwgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyJyk7XG4gICAgfSk7XG5cbn0pOyIsIi8qKlxuICogQWpvdXRlIGxhIGNsYXNzZSBpcy1hbmltYXRlZCBhdXggw6lsw6ltZW50cyAuaGF2ZS1hbmltYXRpb24gbG9yc3F1J2lscyBlbnRyZW50IGRhbnMgbGEgem9uZSB2aXNpYmxlLlxuICogTGEgY2xhc3NlIG4nZXN0IGphbWFpcyByZXRpcsOpZSB1bmUgZm9pcyBham91dMOpZS5cbiAqXG4gKiBPZmZzZXQgKG1hcmdlIGludMOpcmlldXJlIGR1IGJhcyBkdSB2aWV3cG9ydCwgZW4gcHgpIDpcbiAqIC0gYXR0cmlidXQgZGF0YS1hbmltYXRpb24tb2Zmc2V0IHN1ciBsJ8OpbMOpbWVudFxuICogLSBzaW5vbiB2YXJpYWJsZSBDU1MgaMOpcml0w6llIC0taGF2ZS1hbmltYXRpb24tb2Zmc2V0IChleC4gc3VyIGJvZHkuaG9tZXBhZ2UpXG4gKiAtIHNpbm9uIDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRIYXZlQW5pbWF0aW9uKCkge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhdmUtYW5pbWF0aW9uJyk7XG4gICAgaWYgKCFub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdpcy1hbmltYXRlZCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlT2Zmc2V0UHggPSAoZWwpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLW9mZnNldCcpO1xuICAgICAgICBpZiAoZGF0YUF0dHIgIT09IG51bGwgJiYgZGF0YUF0dHIgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChkYXRhQXR0ciwgMTApO1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShwYXJzZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1oYXZlLWFuaW1hdGlvbi1vZmZzZXQnKS50cmltKCk7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBNYXRoLm1heCgwLCBuKSA6IDA7XG4gICAgfTtcblxuICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFuaW1hdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldFB4ID0gcGFyc2VPZmZzZXRQeChlbCk7XG4gICAgICAgIGNvbnN0IHJvb3RNYXJnaW4gPSBgMHB4IDBweCAtJHtvZmZzZXRQeH1weCAwcHhgO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH0pO1xufVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc2VsZWN0aXplL2Rpc3QvanMvc3RhbmRhbG9uZS9zZWxlY3RpemUubWluLmpzJyk7XG4vLyBTdHlsZXMgU2VsZWN0aXplIDogaW1wb3J0w6lzIGRhbnMgYXBwLnNjc3MgKGVudHLDqWUgwqsgZGVmYXVsdCDCuyksIHNpbm9uIGlscyBuZSBzb250IHBhcyBjaGFyZ8OpcyAoc2V1bCBkZWZhdWx0IGzigJllc3QgZGFucyBiYXNlLmh0bWwudHdpZykuXG5cbmNvbnN0IGNvdW50cmllcyA9IHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcycpO1xuY29uc3QgZW5Mb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpO1xuY29uc3QgZnJMb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZnIuanNvbicpO1xuXG5jb3VudHJpZXMucmVnaXN0ZXJMb2NhbGUoZW5Mb2NhbGUpO1xuY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKGZyTG9jYWxlKTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuICAgIG1vZGFsOiAnW2RhdGEtbmV3c2xldHRlci1tb2RhbF0nLFxuICAgIHRyaWdnZXI6ICdbZGF0YS1uZXdzbGV0dGVyLXRyaWdnZXJdJyxcbiAgICBjbG9zZTogJ1tkYXRhLW5ld3NsZXR0ZXItY2xvc2VdJyxcbiAgICBmb3JtOiAnW2RhdGEtbmV3c2xldHRlci1mb3JtXScsXG4gICAgZmVlZGJhY2s6ICdbZGF0YS1uZXdzbGV0dGVyLWZlZWRiYWNrXScsXG4gICAgY2FwdGNoYTogJ1tkYXRhLW5ld3NsZXR0ZXItY2FwdGNoYV0nLFxuICAgIGNvdW50cnlTZWxlY3Q6ICdbZGF0YS1uZXdzbGV0dGVyLWNvdW50cnldJyxcbn07XG5cbmNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XG5jb25zdCBCT0RZX09QRU5fQ0xBU1MgPSAnaGFzLW5ld3NsZXR0ZXItb3Blbic7XG5jb25zdCBTVUNDRVNTX0ZPUk1fQ0xBU1MgPSAnaXMtc3VjY2Vzcy1zdGF0ZSc7XG5cbi8qKlxuICogTGlzdGUgdW5pcXVlIGRlIHRvdXMgbGVzIHBheXMgLyB0ZXJyaXRvaXJlcyBJU08sIHRyaSBhbHBoYWLDqXRpcXVlIHNlbG9uIGxhIGxhbmd1ZSBk4oCZYWZmaWNoYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTG9jYWxlXG4gKiBAcmV0dXJucyB7eyBvcHRpb25zOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIGNvZGVzOiBTZXQ8c3RyaW5nPiwgZmxhdEZvck5hdGl2ZTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4gfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKSB7XG4gICAgY29uc3QgbGFuZyA9IHBhZ2VMb2NhbGUgPT09ICdlbicgPyAnZW4nIDogJ2ZyJztcbiAgICBjb25zdCBvZmZpY2lhbCA9IGNvdW50cmllcy5nZXROYW1lcyhsYW5nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KTtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmtleXMob2ZmaWNpYWwpLm1hcCgoY29kZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IGNvZGUsXG4gICAgICAgIHRleHQ6IG9mZmljaWFsW2NvZGVdLFxuICAgIH0pKTtcblxuICAgIG9wdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS50ZXh0LmxvY2FsZUNvbXBhcmUoYi50ZXh0LCBsYW5nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSksXG4gICAgKTtcbiAgICBvcHRzLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICAgICAgby4kb3JkZXIgPSBpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29kZXMgPSBuZXcgU2V0KG9wdHMubWFwKChvKSA9PiBvLnZhbHVlKSk7XG4gICAgY29uc3QgZmxhdEZvck5hdGl2ZSA9IG9wdHMubWFwKCh7IHZhbHVlLCB0ZXh0IH0pID0+ICh7IHZhbHVlLCB0ZXh0IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdHMsXG4gICAgICAgIGNvZGVzLFxuICAgICAgICBmbGF0Rm9yTmF0aXZlLFxuICAgIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGNvZGVzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUoZm9ybSwgY29kZXMpIHtcbiAgICAvLyAxKSBTdWdnZXN0aW9uIFN5bWZvbnkgKENGLUlQQ291bnRyeSwgZMOpZmF1dCBQRiwg4oCmKSDigJQgcHJpb3JpdGFpcmUgOiBzaW5vbiB1bmUgbG9jYWxlIG5hdmlnYXRldXIgwqsgZW4tVVMgwrtcbiAgICAvLyAgICBmYWlzYWl0IGNob2lzaXIgVVMgYXZhbnQgbcOqbWUgZGUgbGlyZSBkYXRhLXN1Z2dlc3RlZC1jb3VudHJ5ICg9IFBGIGhvcnMgQ0ROKS5cbiAgICBjb25zdCBzZXJ2ZXIgPSAoZm9ybS5kYXRhc2V0LnN1Z2dlc3RlZENvdW50cnkgfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChzZXJ2ZXIgJiYgY29kZXMuaGFzKHNlcnZlcikpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlcjtcbiAgICB9XG5cbiAgICAvLyAyKSBTZWNvdXJzIDogcsOpZ2lvbiBuYXZpZ2F0ZXVyIChlbi1VUyDihpIgVVMsIOKApiksIHNhdWYgZnItRlIgKMKrIEZyYW5jZSDCuyBuZSBkb2l0IHBhcyBwYXNzZXIgYXZhbnQgbGUgZMOpZmF1dCBtw6l0aWVyIHNhbnMgc2VydmV1cilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsaXN0ID1cbiAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzIHx8IFtuYXZpZ2F0b3IubGFuZ3VhZ2VdXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgZm9yIChjb25zdCByYXcgb2YgbGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IC9eW2Etel17Mn0tKFtBLVpdezJ9KSQvLmV4ZWMoU3RyaW5nKHJhdykucmVwbGFjZSgnXycsICctJykpO1xuICAgICAgICAgICAgaWYgKCFtIHx8ICFjb2Rlcy5oYXMobVsxXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnRlInKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG5cbiAgICAvLyAzKSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2UgcGFyIGTDqWZhdXRcbiAgICBpZiAoY29kZXMuaGFzKCdQRicpKSB7XG4gICAgICAgIHJldHVybiAnUEYnO1xuICAgIH1cbiAgICBpZiAoY29kZXMuaGFzKCdGUicpKSB7XG4gICAgICAgIHJldHVybiAnRlInO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvZGVzKVswXSA/PyAnUEYnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsXG4gKiBAcGFyYW0ge0FycmF5PHsgdmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nIH0+fSBmbGF0T3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVOYXRpdmVDb3VudHJ5U2VsZWN0KHNlbGVjdEVsLCBmbGF0T3B0aW9ucywgaW5pdGlhbCkge1xuICAgIHNlbGVjdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgbyBvZiBmbGF0T3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gby52YWx1ZTtcbiAgICAgICAgb3B0LnRleHRDb250ZW50ID0gby50ZXh0O1xuICAgICAgICBpZiAoby52YWx1ZSA9PT0gaW5pdGlhbCkge1xuICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiBpbml0Q291bnRyeVNlbGVjdGl6ZShmb3JtKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNvdW50cnlTZWxlY3QpO1xuICAgIGlmICghc2VsZWN0RWwgfHwgIShzZWxlY3RFbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUxvY2FsZSA9IGZvcm0uZGF0YXNldC5wYWdlTG9jYWxlIHx8ICdmcic7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmb3JtLmRhdGFzZXQuY291bnRyeVBsYWNlaG9sZGVyIHx8ICcnO1xuXG4gICAgbGV0IGJ1aWx0O1xuICAgIHRyeSB7XG4gICAgICAgIGJ1aWx0ID0gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBMaXN0ZSBwYXlzIChpMThuLWlzby1jb3VudHJpZXMpJywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9wdGlvbnMsIGNvZGVzLCBmbGF0Rm9yTmF0aXZlIH0gPSBidWlsdDtcbiAgICBjb25zdCBpbml0aWFsID0gcmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZShmb3JtLCBjb2Rlcyk7XG5cbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnIHx8ICEkLmZuLnNlbGVjdGl6ZSkge1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0RWwpO1xuICAgIGlmICgkc2VsZWN0WzBdLnNlbGVjdGl6ZSkge1xuICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGl0ZW1zOiBbaW5pdGlhbF0sXG4gICAgICAgICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxuICAgICAgICAgICAgbGFiZWxGaWVsZDogJ3RleHQnLFxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsndGV4dCddLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBtYXhJdGVtczogMSxcbiAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd0VtcHR5T3B0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogW3sgZmllbGQ6ICckb3JkZXInLCBkaXJlY3Rpb246ICdhc2MnIH1dLFxuICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JyxcbiAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzZWxlY3RpemUtY29udHJvbCBuZXdzbGV0dGVyLWNvdW50cnktc2VsZWN0aXplJyxcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RpemUtZHJvcGRvd24gbmV3c2xldHRlci1jb3VudHJ5LWRyb3Bkb3duJyxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBTZWxlY3RpemUnLCBlcnIpO1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdCA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gaW5zdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKSB7XG4gICAgaWYgKGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtLl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5oaWRkZW4gPSBmYWxzZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQk9EWV9PUEVOX0NMQVNTKTtcblxuICAgIGNvbnN0IG1haW4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXdzbGV0dGVyLW1haW5dJyk7XG4gICAgY29uc3QgZmlyc3RGaWVsZCA9IG1haW4gJiYgbWFpbi5xdWVyeVNlbGVjdG9yKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJyk7XG4gICAgaWYgKGZpcnN0RmllbGQpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmaXJzdEZpZWxkLmZvY3VzKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIG1vZGFsLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1BFTl9DTEFTUyk7XG5cbiAgICBjb25zdCBmZWVkYmFjayA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmZlZWRiYWNrKTtcbiAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycsICdpcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgbW9kYWwpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZlZWRiYWNrID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZmVlZGJhY2spO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IChmb3JtRGF0YS5nZXQoJ2VtYWlsJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2ZpcnN0TmFtZScpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2xhc3ROYW1lJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGNvdW50cnkgPSAoZm9ybURhdGEuZ2V0KCdjb3VudHJ5JykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IChmb3JtLmRhdGFzZXQucGFnZUxvY2FsZSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQubG9jYWxlIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3QgZ2VuZXJpY0Vycm9yTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5nZW5lcmljRXJyb3IgfHwgJ1VuZSBlcnJldXIgc1xcJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmQuJztcbiAgICBjb25zdCBpbmNvbXBsZXRlTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5pbmNvbXBsZXRlRXJyb3IgfHwgJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIGNvcnJlY3RlbWVudC4nO1xuICAgIGNvbnN0IHJlY2FwdGNoYUVuYWJsZWQgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhRW5hYmxlZCA9PT0gJzEnO1xuICAgIGNvbnN0IHJlY2FwdGNoYVNpdGVLZXkgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhU2l0ZUtleSB8fCAnJztcbiAgICBjb25zdCBjYXB0Y2hhSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNhcHRjaGEpO1xuXG4gICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnLCAnaXMtZXJyb3InKTtcbiAgICB9XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFNVQ0NFU1NfRk9STV9DTEFTUyk7XG5cbiAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCB8fCAhZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSB8fCAhY291bnRyeSkge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gaW5jb21wbGV0ZU1lc3NhZ2U7XG4gICAgICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2FwdGNoYVRva2VuID0gJyc7XG4gICAgaWYgKHJlY2FwdGNoYUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ3JlY2FwdGNoYSB8fCB0eXBlb2Ygd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCByZWNhcHRjaGFTaXRlS2V5ID09PSAnJykge1xuICAgICAgICAgICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXB0Y2hhVG9rZW4gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZShyZWNhcHRjaGFTaXRlS2V5LCB7IGFjdGlvbjogJ25ld3NsZXR0ZXJfc3Vic2NyaWJlJyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGNoYUlucHV0KSB7XG4gICAgICAgIGNhcHRjaGFJbnB1dC52YWx1ZSA9IGNhcHRjaGFUb2tlbjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYXB0Y2hhOiBjYXB0Y2hhVG9rZW4sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCBwYXlsb2FkLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IHBheWxvYWQubWVzc2FnZSB8fCBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gcGF5bG9hZC5tZXNzYWdlIHx8ICdUaGFua3Mg4oCUIHlvdSBhcmUgb24gdGhlIGxpc3QuJztcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbbmV3c2xldHRlcl0gRXJyZXVyIHLDqXNlYXUgb3UgaW5hdHRlbmR1ZSBsb3JzIGRlIGxhIHNvdW1pc3Npb24nLCBlcnJvcik7XG4gICAgICAgIGlmIChmZWVkYmFjaykge1xuICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaXMtZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMubW9kYWwpO1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW25ld3NsZXR0ZXJdIEluaXRpYWxpc2F0aW9uIGR1IHPDqWxlY3RldXIgcGF5cyBpbXBvc3NpYmxlIChkw6lwZW5kYW5jZXMgbWFucXVhbnRlcyA/IHlhcm4gaW5zdGFsbCknLCBlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBoYW5kbGVTdWJtaXQoZXZlbnQsIG1vZGFsKSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy50cmlnZ2VyKTtcbiAgICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy5jbG9zZSkgJiYgbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhPUEVOX0NMQVNTKSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcbn0gZWxzZSB7XG4gICAgaW5pdCgpO1xufVxuIiwiaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuaW1wb3J0IHsgRnJlbmNoIH0gZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qcyc7XG5pbXBvcnQgZW5nbGlzaCBmcm9tICdmbGF0cGlja3IvZGlzdC9sMTBuL2RlZmF1bHQuanMnO1xuXG4vKipcbiAqIEZsYXRwaWNrciBwYXJjb3VydCBkb2N1bWVudC5zdHlsZVNoZWV0cyBldCBsaXQgc2hlZXQuY3NzUnVsZXMgOyBzdXIgdW5lIGZldWlsbGUgY3Jvc3Mtb3JpZ2luXG4gKiAoZXguIEdvb2dsZSBGb250cyksIGzigJlhY2PDqHMgbMOodmUgU2VjdXJpdHlFcnJvciBhdmFudCBtw6ptZSBsZSB0cnkvY2F0Y2ggaW50ZXJuZS5cbiAqIFVuZSBmZXVpbGxlIDxzdHlsZT4gbG9jYWxlIGVuIHTDqnRlIGR1IDxoZWFkPiBnYXJhbnRpdCBxdWUgbGEgcHJlbWnDqHJlIGZldWlsbGUgZXN0IGxpc2libGUuXG4gKi9cbmZ1bmN0aW9uIHByZXBlbmRMb2NhbFN0eWxlc2hlZXRIb29rKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhdHBpY2tyLWxvY2FsLXN0eWxlc2hlZXQtaG9vaycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsLmlkID0gJ2ZsYXRwaWNrci1sb2NhbC1zdHlsZXNoZWV0LWhvb2snO1xuICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcvKiBmbGF0cGlja3I6IGZldWlsbGUgbG9jYWxlIHBvdXIgYWNjw6hzIGNzc1J1bGVzICovJykpO1xuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgbXMpIHtcbiAgICBsZXQgdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9LCBtcyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRTdHJpY3QodiwgZmFsbGJhY2spIHtcbiAgICBjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHYpLCAxMCk7XG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBmYWxsYmFjaztcbn1cblxuLyoqIExvY2FsZSBJU08gMiBsZXR0cmVzIGRlcHVpcyBsZSBIVE1MIChTeW1mb255IDogbGFuZyArIGRhdGEtbG9jYWxlIHN1ciA8aHRtbD4gb3UgPGJvZHk+KS4gKi9cbmZ1bmN0aW9uIGdldFNpdGVMb2NhbGUoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgcmF3ID1cbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpIHx8XG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnbGFuZycpIHx8XG4gICAgICAgIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpKSB8fFxuICAgICAgICAnZnInO1xuICAgIHJldHVybiBTdHJpbmcocmF3KS50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJylbMF07XG59XG5cbmZ1bmN0aW9uIGdldEZsYXRwaWNrckxvY2FsZSgpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRTaXRlTG9jYWxlKCk7XG4gICAgaWYgKGxvYyA9PT0gJ2ZyJykge1xuICAgICAgICByZXR1cm4gRnJlbmNoO1xuICAgIH1cbiAgICByZXR1cm4gZW5nbGlzaDtcbn1cblxuLyoqIEB0eXBlZGVmIHt7IGFkdWx0c19vbmU6IHN0cmluZywgYWR1bHRzOiBzdHJpbmcsIGtpZF9vbmU6IHN0cmluZywga2lkczogc3RyaW5nLCBzZXA6IHN0cmluZyB9fSBHdWVzdHNTdW1tYXJ5STE4biAqL1xuXG4vKiogUmVtcGxhY2UgbGUgbWFycXVldXIgX19DT1VOVF9fIChpc3N1IGRlcyBmaWNoaWVycyBkZSB0cmFkdWN0aW9uIFN5bWZvbnkpLiAqL1xuZnVuY3Rpb24gYXBwbHlDb3VudFRlbXBsYXRlKHRlbXBsYXRlLCBjb3VudCkge1xuICAgIHJldHVybiBTdHJpbmcodGVtcGxhdGUpLnNwbGl0KCdfX0NPVU5UX18nKS5qb2luKFN0cmluZyhjb3VudCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBhZHVsdHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBraWRzXG4gKiBAcGFyYW0ge0d1ZXN0c1N1bW1hcnlJMThuIHwgbnVsbH0gaTE4blxuICovXG5mdW5jdGlvbiBmb3JtYXRHdWVzdFN1bW1hcnkoYWR1bHRzLCBraWRzLCBpMThuKSB7XG4gICAgY29uc3QgdCA9XG4gICAgICAgIGkxOG4gfHxcbiAgICAgICAgLyoqIEB0eXBlIHtHdWVzdHNTdW1tYXJ5STE4bn0gKi8gKHtcbiAgICAgICAgICAgIGFkdWx0c19vbmU6ICcxIGFkdWx0JyxcbiAgICAgICAgICAgIGFkdWx0czogJ19fQ09VTlRfXyBhZHVsdHMnLFxuICAgICAgICAgICAga2lkX29uZTogJzEga2lkJyxcbiAgICAgICAgICAgIGtpZHM6ICdfX0NPVU5UX18ga2lkcycsXG4gICAgICAgICAgICBzZXA6ICcgwrcgJyxcbiAgICAgICAgfSk7XG4gICAgY29uc3QgYUxhYmVsID0gYWR1bHRzID09PSAxID8gdC5hZHVsdHNfb25lIDogYXBwbHlDb3VudFRlbXBsYXRlKHQuYWR1bHRzLCBhZHVsdHMpO1xuICAgIGlmIChraWRzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhTGFiZWw7XG4gICAgfVxuICAgIGNvbnN0IGtMYWJlbCA9IGtpZHMgPT09IDEgPyB0LmtpZF9vbmUgOiBhcHBseUNvdW50VGVtcGxhdGUodC5raWRzLCBraWRzKTtcbiAgICByZXR1cm4gYUxhYmVsICsgdC5zZXAgKyBrTGFiZWw7XG59XG5cbmZ1bmN0aW9uIGluaXRSZXNlcnZhdGlvbkhlcm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLXJlc2VydmF0aW9uLWZvcm0nKTtcbiAgICBjb25zdCBkYXRlc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzZXJ2YXRpb24tZGF0ZXNdJyk7XG4gICAgY29uc3QgY2FsZW5kYXJNb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jYWxlbmRhci1tb3VudCcpO1xuICAgIGNvbnN0IGFuY2hvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWZsYXRwaWNrci1hbmNob3InKTtcbiAgICBjb25zdCBjaGVja2luSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWNoZWNraW4nKTtcbiAgICBjb25zdCBjaGVja291dEhpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja291dCcpO1xuICAgIGNvbnN0IGNoZWNraW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWNoZWNraW4tZGlzcGxheScpO1xuICAgIGNvbnN0IGNoZWNrb3V0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja291dC1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBndWVzdHNNb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1ndWVzdHMtcG9wb3Zlci1tb3VudCcpO1xuICAgIGNvbnN0IGd1ZXN0c1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlX19pdGVtW2RhdGEtcmVzZXJ2YXRpb24tZmllbGQ9XCJndWVzdHNcIl0nKTtcbiAgICBjb25zdCBndWVzdHNTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWd1ZXN0cy1zdW1tYXJ5Jyk7XG4gICAgY29uc3QgYWR1bHRzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWFkdWx0cycpO1xuICAgIGNvbnN0IGtpZHNIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24ta2lkcycpO1xuICAgIGNvbnN0IGd1ZXN0c0RvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tZ3Vlc3RzLWRvbmUnKTtcblxuICAgIGlmICghZm9ybSB8fCAhZGF0ZXNCbG9jayB8fCAhY2FsZW5kYXJNb3VudCB8fCAhYW5jaG9yRWwgfHwgIWNoZWNraW5IaWRkZW4gfHwgIWNoZWNrb3V0SGlkZGVuIHx8ICFjaGVja2luRGlzcGxheSB8fCAhY2hlY2tvdXREaXNwbGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge0d1ZXN0c1N1bW1hcnlJMThuIHwgbnVsbH0gKi9cbiAgICBsZXQgZ3Vlc3RzU3VtbWFyeUkxOG4gPSBudWxsO1xuICAgIGNvbnN0IGkxOG5SYXcgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdHMtc3VtbWFyeS1pMThuJyk7XG4gICAgaWYgKGkxOG5SYXcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnlJMThuID0gSlNPTi5wYXJzZShpMThuUmF3KTtcbiAgICAgICAgfSBjYXRjaCAoX2UpIHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnlJMThuID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXBlbmRMb2NhbFN0eWxlc2hlZXRIb29rKCk7XG5cbiAgICBsZXQgZnAgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gbG9ja1llYXJJbnB1dHMoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSB8fCAhaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5jdXIteWVhcicpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxlbmRhckhvb2sgPSBmdW5jdGlvbiAoX3NlbGVjdGVkRGF0ZXMsIF9kYXRlU3RyLCBpbnN0YW5jZSkge1xuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uLWZsYXRwaWNrci1jYWxlbmRhcicpO1xuICAgICAgICB9XG4gICAgICAgIGxvY2tZZWFySW5wdXRzKGluc3RhbmNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2hvd01vbnRoc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA2NDAgPyAxIDogMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jRnJvbVNlbGVjdGlvbihzZWxlY3RlZERhdGVzLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBmbXRZbWQgPSAnWS1tLWQnO1xuICAgICAgICBjb25zdCBmbXRVaSA9ICdqIE0gWSc7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGNoZWNraW5IaWRkZW4udmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMF0sIGZtdFltZCk7XG4gICAgICAgICAgICBjaGVja2luRGlzcGxheS52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1swXSwgZm10VWkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tpbkhpZGRlbi52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY2hlY2tpbkRpc3BsYXkudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBjaGVja291dEhpZGRlbi52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1sxXSwgZm10WW1kKTtcbiAgICAgICAgICAgIGNoZWNrb3V0RGlzcGxheS52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1sxXSwgZm10VWkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tvdXRIaWRkZW4udmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNoZWNrb3V0RGlzcGxheS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRmxhdHBpY2tyKCkge1xuICAgICAgICBpZiAoZnApIHtcbiAgICAgICAgICAgIHJldHVybiBmcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZwID0gZmxhdHBpY2tyKGFuY2hvckVsLCB7XG4gICAgICAgICAgICBtb2RlOiAncmFuZ2UnLFxuICAgICAgICAgICAgLy8gdHJ1ZSBkw6ljbGVuY2hlIGZvY3VzQW5kQ2xvc2UoKSDihpIgZm9jdXMgc3VyIGzigJlpbnB1dCBjYWNow6kg4oaSIHpvb20gaU9TIChXZWJLaXQpIGF1IDLhtYkgam91ci5cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgLy8gaW5saW5lIDogb3BlbigpIGVzdCBub29wLCBtYWlzIMOpdml0ZSB0b3V0IGxpc3RlbmVyIGZvY3VzL2NsaWMgaW51dGlsZSBzdXIgbOKAmWFuY3JlLlxuICAgICAgICAgICAgY2xpY2tPcGVuczogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9udGhzOiBzaG93TW9udGhzQ291bnQoKSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBjYWxlbmRhck1vdW50LFxuICAgICAgICAgICAgZGlzYWJsZU1vYmlsZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pbkRhdGU6ICd0b2RheScsXG4gICAgICAgICAgICBsb2NhbGU6IE9iamVjdC5hc3NpZ24oe30sIGdldEZsYXRwaWNrckxvY2FsZSgpLCB7IGZpcnN0RGF5T2ZXZWVrOiAxIH0pLFxuICAgICAgICAgICAgbW9udGhTZWxlY3RvclR5cGU6ICdzdGF0aWMnLFxuICAgICAgICAgICAgb25SZWFkeTogY2FsZW5kYXJIb29rLFxuICAgICAgICAgICAgb25Nb250aENoYW5nZTogZnVuY3Rpb24gKF9zZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhpbnN0YW5jZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChzZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzeW5jRnJvbVNlbGVjdGlvbihzZWxlY3RlZERhdGVzLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZXMubGVuZ3RoID49IDIgJiYgY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNoZWNraW5IaWRkZW4udmFsdWUgJiYgY2hlY2tvdXRIaWRkZW4udmFsdWUpIHtcbiAgICAgICAgICAgIGZwLnNldERhdGUoW2NoZWNraW5IaWRkZW4udmFsdWUsIGNoZWNrb3V0SGlkZGVuLnZhbHVlXSwgZmFsc2UpO1xuICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oZnAuc2VsZWN0ZWREYXRlcywgZnApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmcCkge1xuICAgICAgICAgICAgICAgIGZwLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIGxvY2tZZWFySW5wdXRzKGZwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZwO1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck9wZW4gPSBmYWxzZTtcbiAgICBsZXQgZ3Vlc3RzT3BlbiA9IGZhbHNlO1xuICAgIGxldCBzdXBwcmVzc05leHREb2NDbGljayA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gaXNTdGlja3lNb2R1bGUoKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1tb2R1bGUnKTtcbiAgICAgICAgcmV0dXJuICEhKG1vZHVsZSAmJiBtb2R1bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1zdGlja3knKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzKCkge1xuICAgICAgICBjYWxlbmRhck1vdW50LmNsYXNzTGlzdC50b2dnbGUoJ3Jlc2VydmF0aW9uLW1vZHVsZV9fY2FsZW5kYXItbW91bnQtLXN0aWNreScsIGlzU3RpY2t5TW9kdWxlKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKSB7XG4gICAgICAgIGlmIChndWVzdHNNb3VudCkge1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuY2xhc3NMaXN0LnRvZ2dsZSgncmVzZXJ2YXRpb24tbW9kdWxlX19ndWVzdHMtcG9wb3Zlci1tb3VudC0tc3RpY2t5JywgaXNTdGlja3lNb2R1bGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQWxpZ25lIGxlIGJvcmQgZHJvaXQgZHUgcG9wb3ZlciBzdXIgbGUgY2hhbXAgR3Vlc3RzIChtb250YWdlID0gZW5mYW50IGR1IG1vZHVsZSwgY29tbWUgbGUgY2FsZW5kcmllcikuICovXG4gICAgZnVuY3Rpb24gc3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKCFndWVzdHNNb3VudCB8fCAhZ3Vlc3RzVHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1tb2R1bGUnKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5yaWdodCA9ICcnO1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG0gPSBtb2R1bGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHQgPSBndWVzdHNUcmlnZ2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5yaWdodCA9IE1hdGgubWF4KDAsIG0ucmlnaHQgLSB0LnJpZ2h0KSArICdweCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJHdWVzdHNQb3BvdmVyUG9zaXRpb24oKSB7XG4gICAgICAgIGlmIChndWVzdHNNb3VudCkge1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUucmlnaHQgPSAnJztcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGZwKSB7XG4gICAgICAgICAgICAgICAgZnAuc2V0KCdzaG93TW9udGhzJywgc2hvd01vbnRoc0NvdW50KCkpO1xuICAgICAgICAgICAgICAgIGZwLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIGxvY2tZZWFySW5wdXRzKGZwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICAgICAgICAgIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKSxcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdzY3JvbGwnLFxuICAgICAgICBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzKCk7XG4gICAgICAgICAgICBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgIH0sIDUwKSxcbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0sXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5DYWxlbmRhcigpIHtcbiAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzKCk7XG4gICAgICAgIGNhbGVuZGFyTW91bnQuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgICAgICBkYXRlc0Jsb2NrLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIGNhbGVuZGFyT3BlbiA9IHRydWU7XG4gICAgICAgIHN1cHByZXNzTmV4dERvY0NsaWNrID0gdHJ1ZTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlRmxhdHBpY2tyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQ2FsZW5kYXIoKSB7XG4gICAgICAgIGNhbGVuZGFyTW91bnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgICAgICBkYXRlc0Jsb2NrLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBjYWxlbmRhck9wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkYXRlc0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5mbGF0cGlja3ItY2FsZW5kYXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucmVzZXJ2YXRpb24tbW9kdWxlX19jYWxlbmRhci1tb3VudCcpICYmICFlLnRhcmdldC5jbG9zZXN0KCcuZmxhdHBpY2tyLWNhbGVuZGFyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbkNhbGVuZGFyKCk7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gR3Vlc3RzIHBvcG92ZXIgKHN0ZXBwZXJzICsgY2hhbXBzIGNhY2jDqXMgYWR1bHRzIC8ga2lkcylcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gZ2V0QWR1bHRzS2lkcygpIHtcbiAgICAgICAgY29uc3QgYSA9IGFkdWx0c0hpZGRlbiA/IHBhcnNlSW50U3RyaWN0KGFkdWx0c0hpZGRlbi52YWx1ZSwgMikgOiAyO1xuICAgICAgICBjb25zdCBrID0ga2lkc0hpZGRlbiA/IHBhcnNlSW50U3RyaWN0KGtpZHNIaWRkZW4udmFsdWUsIDApIDogMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkdWx0czogTWF0aC5taW4oMTIsIE1hdGgubWF4KDEsIGEpKSxcbiAgICAgICAgICAgIGtpZHM6IE1hdGgubWluKDEwLCBNYXRoLm1heCgwLCBrKSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0d1ZXN0U3RlcHBlclVpKCkge1xuICAgICAgICBjb25zdCB7IGFkdWx0cywga2lkcyB9ID0gZ2V0QWR1bHRzS2lkcygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ndWVzdC1zdGVwcGVyXScpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdC1zdGVwcGVyJyk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JyksIDk5KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGtleSA9PT0gJ2FkdWx0cycgPyBhZHVsdHMgOiBraWRzO1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwcGVyLXZhbHVlXScpO1xuICAgICAgICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gU3RyaW5nKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkb3duID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWd1ZXN0LXN0ZXA9XCJkb3duXCJdJyk7XG4gICAgICAgICAgICBjb25zdCB1cCA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwPVwidXBcIl0nKTtcbiAgICAgICAgICAgIGlmIChkb3duKSB7XG4gICAgICAgICAgICAgICAgZG93bi5kaXNhYmxlZCA9IHZhbCA8PSBtaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXApIHtcbiAgICAgICAgICAgICAgICB1cC5kaXNhYmxlZCA9IHZhbCA+PSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3Vlc3RzU3VtbWFyeSkge1xuICAgICAgICAgICAgZ3Vlc3RzU3VtbWFyeS50ZXh0Q29udGVudCA9IGZvcm1hdEd1ZXN0U3VtbWFyeShhZHVsdHMsIGtpZHMsIGd1ZXN0c1N1bW1hcnlJMThuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFkdWx0c0tpZHMoYWR1bHRzLCBraWRzKSB7XG4gICAgICAgIGlmIChhZHVsdHNIaWRkZW4pIHtcbiAgICAgICAgICAgIGFkdWx0c0hpZGRlbi52YWx1ZSA9IFN0cmluZyhNYXRoLm1pbigxMiwgTWF0aC5tYXgoMSwgYWR1bHRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChraWRzSGlkZGVuKSB7XG4gICAgICAgICAgICBraWRzSGlkZGVuLnZhbHVlID0gU3RyaW5nKE1hdGgubWluKDEwLCBNYXRoLm1heCgwLCBraWRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNHdWVzdFN0ZXBwZXJVaSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5HdWVzdHMoKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICBndWVzdHNNb3VudC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gICAgICAgIGd1ZXN0c01vdW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBndWVzdHNPcGVuID0gdHJ1ZTtcbiAgICAgICAgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSB0cnVlO1xuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VHdWVzdHMoKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBndWVzdHNNb3VudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIGd1ZXN0c01vdW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBjbGVhckd1ZXN0c1BvcG92ZXJQb3NpdGlvbigpO1xuICAgICAgICBndWVzdHNUcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBndWVzdHNUcmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBndWVzdHNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlR3Vlc3RzKCkge1xuICAgICAgICBpZiAoZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgY2xvc2VHdWVzdHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wZW5HdWVzdHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChndWVzdHNNb3VudCAmJiBndWVzdHNUcmlnZ2VyICYmIGFkdWx0c0hpZGRlbiAmJiBraWRzSGlkZGVuKSB7XG4gICAgICAgIHN5bmNHdWVzdFN0ZXBwZXJVaSgpO1xuXG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gTGVzICsvLSBldCDCqyBEb25lIMK7IHNvbnQgZGFucyBs4oCZaXRlbSBtYWlzIGhvcnMgZHUgcsOpc3Vtw6kgOiBuZSBwYXMgdHJhaXRlciBjb21tZSBvdXZlcnR1cmUvZmVybWV0dXJlIGR1IHRyaWdnZXJcbiAgICAgICAgICAgIGlmIChndWVzdHNNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVHdWVzdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJyAmJiBlLmtleSAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGd1ZXN0c01vdW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUd1ZXN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ndWVzdC1zdGVwcGVyXScpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1ndWVzdC1zdGVwXScpO1xuICAgICAgICAgICAgICAgIGlmICghYnRuIHx8IGJ0bi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3Qtc3RlcHBlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJyksIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JyksIDk5KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFkdWx0cywga2lkcyB9ID0gZ2V0QWR1bHRzS2lkcygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdC1zdGVwJykgPT09ICd1cCcgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FkdWx0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGFkdWx0cyArIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA8IG1pbiB8fCBuZXh0ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0QWR1bHRzS2lkcyhuZXh0LCBraWRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2tpZHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBraWRzICsgZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0IDwgbWluIHx8IG5leHQgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRBZHVsdHNLaWRzKGFkdWx0cywgbmV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChndWVzdHNEb25lKSB7XG4gICAgICAgICAgICBndWVzdHNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc3VwcHJlc3NOZXh0RG9jQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBzdXBwcmVzc05leHREb2NDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZXNCbG9jay5jb250YWlucyhlLnRhcmdldCkgfHwgY2FsZW5kYXJNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3Vlc3RzT3BlbiAmJiBndWVzdHNNb3VudCAmJiBndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGd1ZXN0c1RyaWdnZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGd1ZXN0c01vdW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRydWUsXG4gICAgKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgIT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlc2VydmF0aW9uSGVybyk7XG59IGVsc2Uge1xuICAgIGluaXRSZXNlcnZhdGlvbkhlcm8oKTtcbn1cbiIsImltcG9ydCB7IGluaXRIYXZlQW5pbWF0aW9uIH0gZnJvbSAnLi9oYXZlLWFuaW1hdGlvbic7XG5cbiQoZnVuY3Rpb24oJCkge1xuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAvLyBNZW51XG4gICAgbGV0ICRkcm9wZG93biA9ICQoJy5kcm9wZG93bicpO1xuICAgIGxldCAkbWFpbk5hdkJhciA9ICQoJyNuYXZiYXJTdXBwb3J0ZWRDb250ZW50Jyk7XG4gICAgbGV0ICRwcmV2aW91c21lbnUgPSAkKCcucHJldmlvdXNtZW51Jyk7XG5cbiAgICAkKCcuZHJvcGRvd24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAkcHJldmlvdXNtZW51LmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICRtYWluTmF2QmFyLmFkZENsYXNzKCdzdWJtZW51X3Nob3cnKTtcbiAgICB9KTtcblxuICAgICRib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghJGRyb3Bkb3duLmlzKGUudGFyZ2V0KSAmJiAkZHJvcGRvd24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgIGlmICgkbWFpbk5hdkJhci5maW5kKFwiLmRyb3Bkb3duLnNob3dcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJHByZXZpb3VzbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICRtYWluTmF2QmFyLnJlbW92ZUNsYXNzKCdzdWJtZW51X3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJCgnLnNlYXJjaF9ibG9jaycpLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAhJCgnLnNob3dfc2VhcmNoJykuaXMoZS50YXJnZXQpICYmICEkKCcuc2VhcmNoX2Jsb2NrJykuaXMoZS50YXJnZXQpICYmICQoJy5zZWFyY2hfYmxvY2snKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJCgnLnNlYXJjaF9ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJG1haW5OYXZCYXIub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICRwcmV2aW91c21lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgJG1haW5OYXZCYXIucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnVfc2hvdycpO1xuICAgIH0pO1xuXG4gICAgJG1haW5OYXZCYXIub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbWFpbk5hdkJhci5yZW1vdmVDbGFzcygnc3VibWVudV9zaG93Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcblxuXG4gICAgbGV0ICRzdGF5Um9vbXNTbGlkZXIgPSAkKCcuc2VjdGlvbi0yX19yb29tcycpO1xuICAgIGlmICgkc3RheVJvb21zU2xpZGVyLmxlbmd0aCkge1xuICAgICAgICAkc3RheVJvb21zU2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDAwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwODAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCAkc2xpZGVyQXJ0aWNsZXMgPSAkKCcuc2xpZGVyX2FydGljbGVzJyk7XG4gICAgaWYoJHNsaWRlckFydGljbGVzLmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyQXJ0aWNsZXMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckFydGljbGVzQnVpbGRlciA9ICQoJy5zbGlkZXJfYXJ0aWNsZXNfYnVpbGRlcicpO1xuICAgIGlmKCRzbGlkZXJBcnRpY2xlc0J1aWxkZXIubGVuZ3RoKSB7XG4gICAgICAgICRzbGlkZXJBcnRpY2xlc0J1aWxkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlck5ld3MgPSAkKCcuc2xpZGVyX25ld3MnKTtcbiAgICBpZigkc2xpZGVyTmV3cy5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlck5ld3Muc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcxMDBweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCAkc2xpZGVyR2FsbGVyeSA9ICQoJy5zbGlkZXJfZ2FsbGVyeScpO1xuICAgIGlmKCRzbGlkZXJHYWxsZXJ5Lmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyR2FsbGVyeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZigkKCcuZ2FsbGVyeV9tb2RhbCcpLmxlbmd0aCkge1xuICAgICAgICAkYm9keS5vbignY2xpY2snLCAnLmdhbGxlcnlfbW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGVyID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGUgPSAkKHRoaXMpLmRhdGEoJ3NsaWRldG8nKTtcbiAgICAgICAgICAgIGlmKCQoY3VycmVudFNsaWRlcikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChjdXJyZW50U2xpZGVyKS5zbGljaygnc2xpY2tHb1RvJywgY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJGJvZHkub24oJ2NsaWNrJywgJy5zbGlkZXJuZXdzX2FjdGlvbnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFjdGlvbiA9ICQodGhpcykuZGF0YSgnYWN0aW9ucycpO1xuICAgICAgICBpZihhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYoYWN0aW9uID09PSBcInByZXZcIikge1xuICAgICAgICAgICAgICAgICRzbGlkZXJOZXdzLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGFjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAkc2xpZGVyTmV3cy5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5zaG93X3NlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICBzdGlja3lIZWFkZXIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0aWNreUhlYWRlcigpIHtcbiAgICAgICAgdmFyIHN0aWNreSA9ICQoJyNoZWFkZXJfc3RpY2t5JyksIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RpY2t5SGVhZGVyKCk7XG4gICAgaW5pdEhhdmVBbmltYXRpb24oKTtcblxuICAgIC8vIE1lbnUgbGF0w6lyYWwgKGhlYWRlcikgOiBvdXZlcnR1cmUgLyBmZXJtZXR1cmUsIGJhY2tkcm9wLCBibG9jYWdlIGR1IHNjcm9sbFxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJNZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LXRvZ2dsZScpO1xuICAgIGNvbnN0IGhlYWRlck1lbnVGYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW1lbnUtZmFiJyk7XG4gICAgY29uc3QgaGVhZGVyRHJhd2VyQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWRyYXdlci1iYWNrZHJvcCcpO1xuICAgIGNvbnN0IGhlYWRlckRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZWFkZXItZHJhd2VyJyk7XG4gICAgLyoqIMOJdml0ZSB1biBzZWNvbmQgdGFwIGltbcOpZGlhdCBzdXIgbGUgYnVyZ2VyIChsYXRlbmNlIHRhY3RpbGUgaU9TKSBxdWkgcmVmZXJtYWl0IGxlIG1lbnUuICovXG4gICAgbGV0IGhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsID0gMDtcblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlck1lbnVCYXJIZWlnaHQoKSB7XG4gICAgICAgIGlmICghc2l0ZUhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIDEwODtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXIgPSBzaXRlSGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKGJhcikge1xuICAgICAgICAgICAgcmV0dXJuIGJhci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShzaXRlSGVhZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlYWRlci1iYXItaGVpZ2h0JykudHJpbSgpO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChyYXcsIDEwKTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShwYXJzZWQpID8gcGFyc2VkIDogMTA4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KCkge1xuICAgICAgICBpZiAoIWhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSBnZXRIZWFkZXJNZW51QmFySGVpZ2h0KCkgKyAxMDA7XG4gICAgICAgIGNvbnN0IHkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAoeSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jSGVhZGVyTWVudUZhYkFyaWEoKSB7XG4gICAgICAgIGlmICghaGVhZGVyTWVudUZhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGhlYWRlck1lbnVGYWIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbiA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIG9wZW4gPyAnRmVybWVyIGxlIG1lbnUnIDogJ091dnJpciBsZSBtZW51Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VIZWFkZXJEcmF3ZXIoKSB7XG4gICAgICAgIGhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGlmIChzaXRlSGVhZGVyKSB7XG4gICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSkge1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ091dnJpciBsZSBtZW51Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckRyYXdlcikge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyQmFja2Ryb3Auc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3luY0hlYWRlck1lbnVGYWJBcmlhKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbkhlYWRlckRyYXdlcigpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGlmIChzaXRlSGVhZGVyKSB7XG4gICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSkge1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRmVybWVyIGxlIG1lbnUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyKSB7XG4gICAgICAgICAgICBoZWFkZXJEcmF3ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyQmFja2Ryb3Auc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNIZWFkZXJNZW51RmFiQXJpYSgpO1xuICAgIH1cblxuICAgIC8qKiBgZnJvbU1lbnVCdXR0b25gIDogYXByw6hzIG91dmVydHVyZSwgaWdub3JlIGJyacOodmVtZW50IHVuZSBmZXJtZXR1cmUgdmlhIGJ1cmdlci9GQUIgKGRvdWJsZSB0YXAgaU9TKS4gKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVIZWFkZXJEcmF3ZXIoZnJvbU1lbnVCdXR0b24pIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtZHJhd2VyLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKGZyb21NZW51QnV0dG9uICYmIERhdGUubm93KCkgPCBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcGVuSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgICAgICBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IERhdGUubm93KCkgKyAyODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSAmJiBzaXRlSGVhZGVyKSB7XG4gICAgICAgIGhlYWRlck1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlSGVhZGVyRHJhd2VyKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaGVhZGVyTWVudUZhYikge1xuICAgICAgICBoZWFkZXJNZW51RmFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUhlYWRlckRyYXdlcih0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHkpO1xuXG4gICAgaWYgKGhlYWRlckRyYXdlckJhY2tkcm9wKSB7XG4gICAgICAgIGhlYWRlckRyYXdlckJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VIZWFkZXJEcmF3ZXIpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtZHJhd2VyLW9wZW4nKSkge1xuICAgICAgICAgICAgY2xvc2VIZWFkZXJEcmF3ZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhlYWRlckRyYXdlcikge1xuICAgICAgICBoZWFkZXJEcmF3ZXIucXVlcnlTZWxlY3RvckFsbCgnYS5oZWFkZXJfX2RyYXdlci1saW5rJykuZm9yRWFjaChmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VIZWFkZXJEcmF3ZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQU9TIiwicGFnZUxvYWRTdGFydCIsIkRhdGUiLCJub3ciLCJNT0JJTEVfQU9TX01BWF9XSURUSCIsImlzTW9iaWxlQW9zVmlld3BvcnQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiY29uY2F0IiwibWF0Y2hlcyIsInNjYWxlRG93bkFvc0RlbGF5c0Zvck1vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInJhdyIsImdldEF0dHJpYnV0ZSIsInYiLCJwYXJzZUludCIsIk51bWJlciIsImlzRmluaXRlIiwic2NhbGVkIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic2V0QXR0cmlidXRlIiwiU3RyaW5nIiwibWF4Iiwib24iLCJib2R5IiwibWFpbkxvYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJtaW5pbXVtTG9hZGVyRHVyYXRpb24iLCJoaWRlTWFpbkxvYWRlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlzQ2xlYW5lZFVwIiwiY2xlYW51cCIsIm1vYmlsZSIsImluaXQiLCJvbmNlIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJvZmZzZXQiLCJ0aHJvdHRsZURlbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJlbGFwc2VkIiwicmVtYWluaW5nIiwidGV4dFRvQ29weSIsImF0dHIiLCJ0ZW1wVGV4dGFyZWEiLCJhcHBlbmQiLCJ2YWwiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlc2VydmF0aW9uTW9kdWxlIiwiYm9va0ZhYiIsIm1vZHVsZUhlaWdodCIsImluaXRpYWxUb3AiLCJpbm5lckhlaWdodCIsInVwZGF0ZVJlc2VydmF0aW9uU3RhdGUiLCJpc1Bhc3QiLCJzY3JvbGxZIiwidG9nZ2xlIiwicGFzc2l2ZSIsImVhY2giLCJiZ1VybCIsImRhdGEiLCJjc3MiLCJpbml0SGF2ZUFuaW1hdGlvbiIsIm5vZGVzIiwibGVuZ3RoIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwYXJzZU9mZnNldFB4IiwiZGF0YUF0dHIiLCJwYXJzZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW0iLCJuIiwicGFyc2VGbG9hdCIsImNvbnRhaW5zIiwib2Zmc2V0UHgiLCJyb290TWFyZ2luIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsInVub2JzZXJ2ZSIsInJvb3QiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJvIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIkYiLCJzIiwiZSIsIl9lIiwiZiIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJzdGVwIiwiX2UyIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwiYXJyIiwibGVuIiwiYXJyMiIsImNvdW50cmllcyIsImVuTG9jYWxlIiwiZnJMb2NhbGUiLCJyZWdpc3RlckxvY2FsZSIsIlNFTEVDVE9SUyIsIm1vZGFsIiwidHJpZ2dlciIsImNsb3NlIiwiZm9ybSIsImZlZWRiYWNrIiwiY2FwdGNoYSIsImNvdW50cnlTZWxlY3QiLCJPUEVOX0NMQVNTIiwiQk9EWV9PUEVOX0NMQVNTIiwiU1VDQ0VTU19GT1JNX0NMQVNTIiwiYnVpbGRDb3VudHJ5U2VsZWN0RGF0YSIsInBhZ2VMb2NhbGUiLCJsYW5nIiwib2ZmaWNpYWwiLCJnZXROYW1lcyIsIm9wdHMiLCJtYXAiLCJjb2RlIiwidGV4dCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzZW5zaXRpdml0eSIsIiRvcmRlciIsImNvZGVzIiwiU2V0IiwiZmxhdEZvck5hdGl2ZSIsIl9yZWYiLCJvcHRpb25zIiwicmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZSIsIl9BcnJheSRmcm9tJCIsInNlcnZlciIsImRhdGFzZXQiLCJzdWdnZXN0ZWRDb3VudHJ5IiwidG9VcHBlckNhc2UiLCJoYXMiLCJsaXN0IiwibmF2aWdhdG9yIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIm0iLCJleGVjIiwicmVwbGFjZSIsInBvcHVsYXRlTmF0aXZlQ291bnRyeVNlbGVjdCIsInNlbGVjdEVsIiwiZmxhdE9wdGlvbnMiLCJpbml0aWFsIiwiaW5uZXJIVE1MIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm9wdCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInNlbGVjdGVkIiwiYXBwZW5kQ2hpbGQiLCJpbml0Q291bnRyeVNlbGVjdGl6ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJjb3VudHJ5UGxhY2Vob2xkZXIiLCJidWlsdCIsImNvbnNvbGUiLCJfYnVpbHQiLCJzZWxlY3RpemUiLCIkc2VsZWN0IiwiZGVzdHJveSIsIml0ZW1zIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJzZWFyY2hGaWVsZCIsIm1heEl0ZW1zIiwiYWxsb3dFbXB0eU9wdGlvbiIsInNvcnRGaWVsZCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiZHJvcGRvd25QYXJlbnQiLCJjb3B5Q2xhc3Nlc1RvRHJvcGRvd24iLCJ3cmFwcGVyQ2xhc3MiLCJkcm9wZG93bkNsYXNzIiwiaW5zdCIsIl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZSIsInJlZnJlc2hDb3VudHJ5RmllbGRBZnRlclJlc2V0Iiwib3Blbk1vZGFsIiwiaGlkZGVuIiwibWFpbiIsImZpcnN0RmllbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb2N1cyIsImNsb3NlTW9kYWwiLCJoYW5kbGVTdWJtaXQiLCJfeCIsIl94MiIsIl9oYW5kbGVTdWJtaXQiLCJfY2FsbGVlIiwiZXZlbnQiLCJzdWJtaXRCdXR0b24iLCJmb3JtRGF0YSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjb3VudHJ5IiwibG9jYWxlIiwiZ2VuZXJpY0Vycm9yTWVzc2FnZSIsImluY29tcGxldGVNZXNzYWdlIiwicmVjYXB0Y2hhRW5hYmxlZCIsInJlY2FwdGNoYVNpdGVLZXkiLCJjYXB0Y2hhSW5wdXQiLCJjYXB0Y2hhVG9rZW4iLCJyZXNwb25zZSIsInBheWxvYWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybURhdGEiLCJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZW5lcmljRXJyb3IiLCJpbmNvbXBsZXRlRXJyb3IiLCJkaXNhYmxlZCIsImdyZWNhcHRjaGEiLCJleGVjdXRlIiwicmVhZHkiLCJhY3Rpb24iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwidDAiLCJvayIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidDEiLCJjbG9zZXN0IiwicmVhZHlTdGF0ZSIsImZsYXRwaWNrciIsIkZyZW5jaCIsImVuZ2xpc2giLCJwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vayIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGVib3VuY2UiLCJtcyIsInQiLCJjbGVhclRpbWVvdXQiLCJwYXJzZUludFN0cmljdCIsImZhbGxiYWNrIiwiZ2V0U2l0ZUxvY2FsZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJnZXRGbGF0cGlja3JMb2NhbGUiLCJhcHBseUNvdW50VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImNvdW50Iiwiam9pbiIsImZvcm1hdEd1ZXN0U3VtbWFyeSIsImFkdWx0cyIsImtpZHMiLCJpMThuIiwiYWR1bHRzX29uZSIsImtpZF9vbmUiLCJzZXAiLCJhTGFiZWwiLCJrTGFiZWwiLCJpbml0UmVzZXJ2YXRpb25IZXJvIiwiZGF0ZXNCbG9jayIsImNhbGVuZGFyTW91bnQiLCJhbmNob3JFbCIsImNoZWNraW5IaWRkZW4iLCJjaGVja291dEhpZGRlbiIsImNoZWNraW5EaXNwbGF5IiwiY2hlY2tvdXREaXNwbGF5IiwiZ3Vlc3RzTW91bnQiLCJndWVzdHNUcmlnZ2VyIiwiZ3Vlc3RzU3VtbWFyeSIsImFkdWx0c0hpZGRlbiIsImtpZHNIaWRkZW4iLCJndWVzdHNEb25lIiwiZ3Vlc3RzU3VtbWFyeUkxOG4iLCJpMThuUmF3IiwicGFyc2UiLCJmcCIsImxvY2tZZWFySW5wdXRzIiwiaW5zdGFuY2UiLCJjYWxlbmRhckNvbnRhaW5lciIsImNhbGVuZGFySG9vayIsIl9zZWxlY3RlZERhdGVzIiwiX2RhdGVTdHIiLCJzaG93TW9udGhzQ291bnQiLCJpbm5lcldpZHRoIiwic3luY0Zyb21TZWxlY3Rpb24iLCJzZWxlY3RlZERhdGVzIiwiZm10WW1kIiwiZm10VWkiLCJmb3JtYXREYXRlIiwiY3JlYXRlRmxhdHBpY2tyIiwibW9kZSIsImNsb3NlT25TZWxlY3QiLCJjbGlja09wZW5zIiwic2hvd01vbnRocyIsImRhdGVGb3JtYXQiLCJhbGxvd0lucHV0IiwiaW5saW5lIiwiYXBwZW5kVG8iLCJkaXNhYmxlTW9iaWxlIiwibWluRGF0ZSIsImFzc2lnbiIsImZpcnN0RGF5T2ZXZWVrIiwibW9udGhTZWxlY3RvclR5cGUiLCJvblJlYWR5Iiwib25Nb250aENoYW5nZSIsIm9uQ2hhbmdlIiwiY2FsZW5kYXJPcGVuIiwiY2xvc2VDYWxlbmRhciIsIm9uQ2xvc2UiLCJzZXREYXRlIiwicmVkcmF3IiwiZ3Vlc3RzT3BlbiIsInN1cHByZXNzTmV4dERvY0NsaWNrIiwiaXNTdGlja3lNb2R1bGUiLCJtb2R1bGUiLCJzZXRDYWxlbmRhck1vdW50UGxhY2VtZW50Q2xhc3MiLCJzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzIiwic3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbiIsInN0eWxlIiwicmlnaHQiLCJsZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xlYXJHdWVzdHNQb3BvdmVyUG9zaXRpb24iLCJzZXQiLCJvcGVuQ2FsZW5kYXIiLCJjbG9zZUd1ZXN0cyIsImdldEFkdWx0c0tpZHMiLCJrIiwic3luY0d1ZXN0U3RlcHBlclVpIiwiX2dldEFkdWx0c0tpZHMiLCJyb3ciLCJkaXNwbGF5IiwiZG93biIsInVwIiwic2V0QWR1bHRzS2lkcyIsIm9wZW5HdWVzdHMiLCJ0b2dnbGVHdWVzdHMiLCJidG4iLCJfZ2V0QWR1bHRzS2lkczIiLCJkZWx0YSIsIiRib2R5IiwiJGRyb3Bkb3duIiwiJG1haW5OYXZCYXIiLCIkcHJldmlvdXNtZW51IiwiYWRkQ2xhc3MiLCJpcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImhhc0NsYXNzIiwiJHN0YXlSb29tc1NsaWRlciIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5maW5pdGUiLCJjc3NFYXNlIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiJHNsaWRlckFydGljbGVzIiwibGF6eUxvYWQiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCIkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyIiwiJHNsaWRlck5ld3MiLCIkc2xpZGVyR2FsbGVyeSIsImZhZGUiLCJjdXJyZW50U2xpZGVyIiwiY3VycmVudFNsaWRlIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGwiLCJzdGlja3lIZWFkZXIiLCJzdGlja3kiLCJzY3JvbGxUb3AiLCJzaXRlSGVhZGVyIiwiaGVhZGVyTWVudVRvZ2dsZSIsImhlYWRlck1lbnVGYWIiLCJoZWFkZXJEcmF3ZXJCYWNrZHJvcCIsImhlYWRlckRyYXdlciIsImhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsIiwiZ2V0SGVhZGVyTWVudUJhckhlaWdodCIsImJhciIsIm9mZnNldEhlaWdodCIsInVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5IiwieSIsInJlbW92ZUF0dHJpYnV0ZSIsInN5bmNIZWFkZXJNZW51RmFiQXJpYSIsIm9wZW4iLCJjbG9zZUhlYWRlckRyYXdlciIsIm9wZW5IZWFkZXJEcmF3ZXIiLCJ0b2dnbGVIZWFkZXJEcmF3ZXIiLCJmcm9tTWVudUJ1dHRvbiIsImFuY2hvciJdLCJzb3VyY2VSb290IjoiIn0=