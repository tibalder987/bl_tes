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
          _context.next = 58;
          break;
        case 55:
          _context.prev = 55;
          _context.t1 = _context["catch"](32);
          if (feedback) {
            feedback.textContent = genericErrorMessage;
            feedback.classList.add('is-error');
          }
        case 58:
          _context.prev = 58;
          if (submitButton) {
            submitButton.disabled = false;
          }
          return _context.finish(58);
        case 61:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[32, 55, 58, 61], [37, 43]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8vLi9hc3NldHMvYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaGF2ZS1hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25ld3NsZXR0ZXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Jlc2VydmF0aW9uLWhlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gYW55IEpTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBKUyBmaWxlIChhcHAuanMgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgJy4vbWFpbic7XG5pbXBvcnQgJy4vanMvcmVzZXJ2YXRpb24taGVybyc7XG5pbXBvcnQgJy4vanMvbmV3c2xldHRlci1tb2RhbCc7XG5pbXBvcnQgJy4vYnVpbGRlcic7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIEFPUyA6IHN0eWxlcyBkYW5zIGFzc2V0cy9zdHlsZXMvYXBwLnNjc3MgKGVudHLDqWUgZGVmYXVsdCksIHBhcyBpY2kg4oCUIHNpbm9uIGFwcC5jc3MgbuKAmWVzdCBwYXMgbGnDqSBkYW5zIGJhc2UuaHRtbC50d2lnLlxuaW1wb3J0ICcuL2ltYWdlcy9kZWNvLnBuZyc7XG5cbmNvbnN0IHBhZ2VMb2FkU3RhcnQgPSBEYXRlLm5vdygpO1xuXG4vKiogTGFyZ2V1ciBtYXguIChweCkgOiBtw6ptZSBvcmRyZSBkZSBncmFuZGV1ciBxdWUgbGVzIGJyZWFrcG9pbnRzIFNDU1MgZHUgc2l0ZS4gKi9cbmNvbnN0IE1PQklMRV9BT1NfTUFYX1dJRFRIID0gOTkxO1xuXG5mdW5jdGlvbiBpc01vYmlsZUFvc1ZpZXdwb3J0KCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHtNT0JJTEVfQU9TX01BWF9XSURUSH1weClgKS5tYXRjaGVzO1xufVxuXG4vKipcbiAqIFN1ciBtb2JpbGUsIGxlcyBkYXRhLWFvcy1kZWxheSAoMjAw4oCTNjAwIG1zKSBhbGxvbmdlbnQgdHJvcCBsYSBzw6lxdWVuY2UuXG4gKiBPbiBsZXMgcsOpZHVpdCBhdmFudCBBT1MuaW5pdCBwb3VyIGdhcmRlciB1biBsw6lnZXIgZMOpY2FsYWdlIHNhbnMgZW1waWxlciBsZXMgYXR0ZW50ZXMuXG4gKi9cbmZ1bmN0aW9uIHNjYWxlRG93bkFvc0RlbGF5c0Zvck1vYmlsZSgpIHtcbiAgICBpZiAoIWlzTW9iaWxlQW9zVmlld3BvcnQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFvcy1kZWxheV0nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjb25zdCByYXcgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5Jyk7XG4gICAgICAgIGlmIChyYXcgPT09IG51bGwgfHwgcmF3ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHYgPSBwYXJzZUludChyYXcsIDEwKTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodikgfHwgdiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NhbGVkID0gTWF0aC5taW4oOTAsIE1hdGgucm91bmQodiAqIDAuMjIpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIFN0cmluZyhNYXRoLm1heCgwLCBzY2FsZWQpKSk7XG4gICAgfSk7XG59XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IG1haW5Mb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1sb2FkZXInKTtcbiAgICBjb25zdCBtaW5pbXVtTG9hZGVyRHVyYXRpb24gPSA1MDA7XG5cbiAgICBjb25zdCBoaWRlTWFpbkxvYWRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFtYWluTG9hZGVyKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5Mb2FkZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkaW5nJyk7XG4gICAgICAgIGxldCBpc0NsZWFuZWRVcCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDbGVhbmVkVXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0NsZWFuZWRVcCA9IHRydWU7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIG1haW5Mb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICBzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUoKTtcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZSA9IGlzTW9iaWxlQW9zVmlld3BvcnQoKTtcbiAgICAgICAgICAgIEFPUy5pbml0KHtcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAvLyBNb2JpbGUgOiBkw6ljbGVuY2hlbWVudCBwbHVzIHTDtHQgKG9mZnNldCBwbHVzIGJhcyksIGFuaW1hdGlvbiBwbHVzIGNvdXJ0ZS5cbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogbW9iaWxlID8gNTAwIDogMTAwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG1vYmlsZSA/IDI0IDogMTIwLFxuICAgICAgICAgICAgICAgIHRocm90dGxlRGVsYXk6IG1vYmlsZSA/IDQwIDogOTksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBtYWluTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhbnVwLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNsZWFudXAsIDkwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gcGFnZUxvYWRTdGFydDtcbiAgICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBtaW5pbXVtTG9hZGVyRHVyYXRpb24gLSBlbGFwc2VkKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dChoaWRlTWFpbkxvYWRlciwgcmVtYWluaW5nKTtcblxuICAgICQoXCIuY29weS10by1jbGlwYm9hcmRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRleHRUb0NvcHkgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGluaycpO1xuICAgICAgICBjb25zdCB0ZW1wVGV4dGFyZWEgPSAkKCc8dGV4dGFyZWE+Jyk7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGVtcFRleHRhcmVhKTtcbiAgICAgICAgdGVtcFRleHRhcmVhLnZhbCh0ZXh0VG9Db3B5KS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdGVtcFRleHRhcmVhLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25Nb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlJyk7XG4gICAgaWYgKCFyZXNlcnZhdGlvbk1vZHVsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYm9va0ZhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWZhYicpO1xuICAgIGNvbnN0IG1vZHVsZUhlaWdodCA9IDE0NTtcbiAgICBsZXQgaW5pdGlhbFRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIG1vZHVsZUhlaWdodDtcblxuICAgIGNvbnN0IHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUGFzdCA9IHdpbmRvdy5zY3JvbGxZID49IGluaXRpYWxUb3A7XG4gICAgICAgIHJlc2VydmF0aW9uTW9kdWxlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScsIGlzUGFzdCk7XG4gICAgICAgIGlmIChib29rRmFiKSBib29rRmFiLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnLCBpc1Bhc3QpO1xuICAgIH07XG5cbiAgICB1cGRhdGVSZXNlcnZhdGlvblN0YXRlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpbml0aWFsVG9wID0gd2luZG93LmlubmVySGVpZ2h0IC0gbW9kdWxlSGVpZ2h0O1xuICAgICAgICB1cGRhdGVSZXNlcnZhdGlvblN0YXRlKCk7XG4gICAgfSk7XG59KTsiLCJcbiQoZnVuY3Rpb24oJCkge1xuICAgICQoJy5kYXRhX2JnJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGJnVXJsID0gJCh0aGlzKS5kYXRhKCdiZycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmdVcmwgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyJyk7XG4gICAgfSk7XG5cbn0pOyIsIi8qKlxuICogQWpvdXRlIGxhIGNsYXNzZSBpcy1hbmltYXRlZCBhdXggw6lsw6ltZW50cyAuaGF2ZS1hbmltYXRpb24gbG9yc3F1J2lscyBlbnRyZW50IGRhbnMgbGEgem9uZSB2aXNpYmxlLlxuICogTGEgY2xhc3NlIG4nZXN0IGphbWFpcyByZXRpcsOpZSB1bmUgZm9pcyBham91dMOpZS5cbiAqXG4gKiBPZmZzZXQgKG1hcmdlIGludMOpcmlldXJlIGR1IGJhcyBkdSB2aWV3cG9ydCwgZW4gcHgpIDpcbiAqIC0gYXR0cmlidXQgZGF0YS1hbmltYXRpb24tb2Zmc2V0IHN1ciBsJ8OpbMOpbWVudFxuICogLSBzaW5vbiB2YXJpYWJsZSBDU1MgaMOpcml0w6llIC0taGF2ZS1hbmltYXRpb24tb2Zmc2V0IChleC4gc3VyIGJvZHkuaG9tZXBhZ2UpXG4gKiAtIHNpbm9uIDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRIYXZlQW5pbWF0aW9uKCkge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhdmUtYW5pbWF0aW9uJyk7XG4gICAgaWYgKCFub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdpcy1hbmltYXRlZCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlT2Zmc2V0UHggPSAoZWwpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLW9mZnNldCcpO1xuICAgICAgICBpZiAoZGF0YUF0dHIgIT09IG51bGwgJiYgZGF0YUF0dHIgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChkYXRhQXR0ciwgMTApO1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShwYXJzZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1oYXZlLWFuaW1hdGlvbi1vZmZzZXQnKS50cmltKCk7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBNYXRoLm1heCgwLCBuKSA6IDA7XG4gICAgfTtcblxuICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFuaW1hdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldFB4ID0gcGFyc2VPZmZzZXRQeChlbCk7XG4gICAgICAgIGNvbnN0IHJvb3RNYXJnaW4gPSBgMHB4IDBweCAtJHtvZmZzZXRQeH1weCAwcHhgO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH0pO1xufVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc2VsZWN0aXplL2Rpc3QvanMvc3RhbmRhbG9uZS9zZWxlY3RpemUubWluLmpzJyk7XG4vLyBTdHlsZXMgU2VsZWN0aXplIDogaW1wb3J0w6lzIGRhbnMgYXBwLnNjc3MgKGVudHLDqWUgwqsgZGVmYXVsdCDCuyksIHNpbm9uIGlscyBuZSBzb250IHBhcyBjaGFyZ8OpcyAoc2V1bCBkZWZhdWx0IGzigJllc3QgZGFucyBiYXNlLmh0bWwudHdpZykuXG5cbmNvbnN0IGNvdW50cmllcyA9IHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcycpO1xuY29uc3QgZW5Mb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpO1xuY29uc3QgZnJMb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZnIuanNvbicpO1xuXG5jb3VudHJpZXMucmVnaXN0ZXJMb2NhbGUoZW5Mb2NhbGUpO1xuY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKGZyTG9jYWxlKTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuICAgIG1vZGFsOiAnW2RhdGEtbmV3c2xldHRlci1tb2RhbF0nLFxuICAgIHRyaWdnZXI6ICdbZGF0YS1uZXdzbGV0dGVyLXRyaWdnZXJdJyxcbiAgICBjbG9zZTogJ1tkYXRhLW5ld3NsZXR0ZXItY2xvc2VdJyxcbiAgICBmb3JtOiAnW2RhdGEtbmV3c2xldHRlci1mb3JtXScsXG4gICAgZmVlZGJhY2s6ICdbZGF0YS1uZXdzbGV0dGVyLWZlZWRiYWNrXScsXG4gICAgY2FwdGNoYTogJ1tkYXRhLW5ld3NsZXR0ZXItY2FwdGNoYV0nLFxuICAgIGNvdW50cnlTZWxlY3Q6ICdbZGF0YS1uZXdzbGV0dGVyLWNvdW50cnldJyxcbn07XG5cbmNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XG5jb25zdCBCT0RZX09QRU5fQ0xBU1MgPSAnaGFzLW5ld3NsZXR0ZXItb3Blbic7XG5jb25zdCBTVUNDRVNTX0ZPUk1fQ0xBU1MgPSAnaXMtc3VjY2Vzcy1zdGF0ZSc7XG5cbi8qKlxuICogTGlzdGUgdW5pcXVlIGRlIHRvdXMgbGVzIHBheXMgLyB0ZXJyaXRvaXJlcyBJU08sIHRyaSBhbHBoYWLDqXRpcXVlIHNlbG9uIGxhIGxhbmd1ZSBk4oCZYWZmaWNoYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTG9jYWxlXG4gKiBAcmV0dXJucyB7eyBvcHRpb25zOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIGNvZGVzOiBTZXQ8c3RyaW5nPiwgZmxhdEZvck5hdGl2ZTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4gfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKSB7XG4gICAgY29uc3QgbGFuZyA9IHBhZ2VMb2NhbGUgPT09ICdlbicgPyAnZW4nIDogJ2ZyJztcbiAgICBjb25zdCBvZmZpY2lhbCA9IGNvdW50cmllcy5nZXROYW1lcyhsYW5nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KTtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmtleXMob2ZmaWNpYWwpLm1hcCgoY29kZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IGNvZGUsXG4gICAgICAgIHRleHQ6IG9mZmljaWFsW2NvZGVdLFxuICAgIH0pKTtcblxuICAgIG9wdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS50ZXh0LmxvY2FsZUNvbXBhcmUoYi50ZXh0LCBsYW5nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSksXG4gICAgKTtcbiAgICBvcHRzLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICAgICAgby4kb3JkZXIgPSBpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29kZXMgPSBuZXcgU2V0KG9wdHMubWFwKChvKSA9PiBvLnZhbHVlKSk7XG4gICAgY29uc3QgZmxhdEZvck5hdGl2ZSA9IG9wdHMubWFwKCh7IHZhbHVlLCB0ZXh0IH0pID0+ICh7IHZhbHVlLCB0ZXh0IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdHMsXG4gICAgICAgIGNvZGVzLFxuICAgICAgICBmbGF0Rm9yTmF0aXZlLFxuICAgIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGNvZGVzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUoZm9ybSwgY29kZXMpIHtcbiAgICAvLyAxKSBTdWdnZXN0aW9uIFN5bWZvbnkgKENGLUlQQ291bnRyeSwgZMOpZmF1dCBQRiwg4oCmKSDigJQgcHJpb3JpdGFpcmUgOiBzaW5vbiB1bmUgbG9jYWxlIG5hdmlnYXRldXIgwqsgZW4tVVMgwrtcbiAgICAvLyAgICBmYWlzYWl0IGNob2lzaXIgVVMgYXZhbnQgbcOqbWUgZGUgbGlyZSBkYXRhLXN1Z2dlc3RlZC1jb3VudHJ5ICg9IFBGIGhvcnMgQ0ROKS5cbiAgICBjb25zdCBzZXJ2ZXIgPSAoZm9ybS5kYXRhc2V0LnN1Z2dlc3RlZENvdW50cnkgfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChzZXJ2ZXIgJiYgY29kZXMuaGFzKHNlcnZlcikpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlcjtcbiAgICB9XG5cbiAgICAvLyAyKSBTZWNvdXJzIDogcsOpZ2lvbiBuYXZpZ2F0ZXVyIChlbi1VUyDihpIgVVMsIOKApiksIHNhdWYgZnItRlIgKMKrIEZyYW5jZSDCuyBuZSBkb2l0IHBhcyBwYXNzZXIgYXZhbnQgbGUgZMOpZmF1dCBtw6l0aWVyIHNhbnMgc2VydmV1cilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsaXN0ID1cbiAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzIHx8IFtuYXZpZ2F0b3IubGFuZ3VhZ2VdXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgZm9yIChjb25zdCByYXcgb2YgbGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IC9eW2Etel17Mn0tKFtBLVpdezJ9KSQvLmV4ZWMoU3RyaW5nKHJhdykucmVwbGFjZSgnXycsICctJykpO1xuICAgICAgICAgICAgaWYgKCFtIHx8ICFjb2Rlcy5oYXMobVsxXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnRlInKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG5cbiAgICAvLyAzKSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2UgcGFyIGTDqWZhdXRcbiAgICBpZiAoY29kZXMuaGFzKCdQRicpKSB7XG4gICAgICAgIHJldHVybiAnUEYnO1xuICAgIH1cbiAgICBpZiAoY29kZXMuaGFzKCdGUicpKSB7XG4gICAgICAgIHJldHVybiAnRlInO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvZGVzKVswXSA/PyAnUEYnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsXG4gKiBAcGFyYW0ge0FycmF5PHsgdmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nIH0+fSBmbGF0T3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVOYXRpdmVDb3VudHJ5U2VsZWN0KHNlbGVjdEVsLCBmbGF0T3B0aW9ucywgaW5pdGlhbCkge1xuICAgIHNlbGVjdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgbyBvZiBmbGF0T3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gby52YWx1ZTtcbiAgICAgICAgb3B0LnRleHRDb250ZW50ID0gby50ZXh0O1xuICAgICAgICBpZiAoby52YWx1ZSA9PT0gaW5pdGlhbCkge1xuICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiBpbml0Q291bnRyeVNlbGVjdGl6ZShmb3JtKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNvdW50cnlTZWxlY3QpO1xuICAgIGlmICghc2VsZWN0RWwgfHwgIShzZWxlY3RFbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUxvY2FsZSA9IGZvcm0uZGF0YXNldC5wYWdlTG9jYWxlIHx8ICdmcic7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmb3JtLmRhdGFzZXQuY291bnRyeVBsYWNlaG9sZGVyIHx8ICcnO1xuXG4gICAgbGV0IGJ1aWx0O1xuICAgIHRyeSB7XG4gICAgICAgIGJ1aWx0ID0gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBMaXN0ZSBwYXlzIChpMThuLWlzby1jb3VudHJpZXMpJywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9wdGlvbnMsIGNvZGVzLCBmbGF0Rm9yTmF0aXZlIH0gPSBidWlsdDtcbiAgICBjb25zdCBpbml0aWFsID0gcmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZShmb3JtLCBjb2Rlcyk7XG5cbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnIHx8ICEkLmZuLnNlbGVjdGl6ZSkge1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0RWwpO1xuICAgIGlmICgkc2VsZWN0WzBdLnNlbGVjdGl6ZSkge1xuICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGl0ZW1zOiBbaW5pdGlhbF0sXG4gICAgICAgICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxuICAgICAgICAgICAgbGFiZWxGaWVsZDogJ3RleHQnLFxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsndGV4dCddLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBtYXhJdGVtczogMSxcbiAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd0VtcHR5T3B0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogW3sgZmllbGQ6ICckb3JkZXInLCBkaXJlY3Rpb246ICdhc2MnIH1dLFxuICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JyxcbiAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzZWxlY3RpemUtY29udHJvbCBuZXdzbGV0dGVyLWNvdW50cnktc2VsZWN0aXplJyxcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RpemUtZHJvcGRvd24gbmV3c2xldHRlci1jb3VudHJ5LWRyb3Bkb3duJyxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBTZWxlY3RpemUnLCBlcnIpO1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdCA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gaW5zdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKSB7XG4gICAgaWYgKGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtLl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5oaWRkZW4gPSBmYWxzZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQk9EWV9PUEVOX0NMQVNTKTtcblxuICAgIGNvbnN0IG1haW4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXdzbGV0dGVyLW1haW5dJyk7XG4gICAgY29uc3QgZmlyc3RGaWVsZCA9IG1haW4gJiYgbWFpbi5xdWVyeVNlbGVjdG9yKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJyk7XG4gICAgaWYgKGZpcnN0RmllbGQpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmaXJzdEZpZWxkLmZvY3VzKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIG1vZGFsLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1BFTl9DTEFTUyk7XG5cbiAgICBjb25zdCBmZWVkYmFjayA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmZlZWRiYWNrKTtcbiAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycsICdpcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgbW9kYWwpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZlZWRiYWNrID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZmVlZGJhY2spO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IChmb3JtRGF0YS5nZXQoJ2VtYWlsJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2ZpcnN0TmFtZScpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2xhc3ROYW1lJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGNvdW50cnkgPSAoZm9ybURhdGEuZ2V0KCdjb3VudHJ5JykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IChmb3JtLmRhdGFzZXQucGFnZUxvY2FsZSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQubG9jYWxlIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3QgZ2VuZXJpY0Vycm9yTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5nZW5lcmljRXJyb3IgfHwgJ1VuZSBlcnJldXIgc1xcJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmQuJztcbiAgICBjb25zdCBpbmNvbXBsZXRlTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5pbmNvbXBsZXRlRXJyb3IgfHwgJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIGNvcnJlY3RlbWVudC4nO1xuICAgIGNvbnN0IHJlY2FwdGNoYUVuYWJsZWQgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhRW5hYmxlZCA9PT0gJzEnO1xuICAgIGNvbnN0IHJlY2FwdGNoYVNpdGVLZXkgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhU2l0ZUtleSB8fCAnJztcbiAgICBjb25zdCBjYXB0Y2hhSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNhcHRjaGEpO1xuXG4gICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnLCAnaXMtZXJyb3InKTtcbiAgICB9XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFNVQ0NFU1NfRk9STV9DTEFTUyk7XG5cbiAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCB8fCAhZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSB8fCAhY291bnRyeSkge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gaW5jb21wbGV0ZU1lc3NhZ2U7XG4gICAgICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2FwdGNoYVRva2VuID0gJyc7XG4gICAgaWYgKHJlY2FwdGNoYUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ3JlY2FwdGNoYSB8fCB0eXBlb2Ygd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCByZWNhcHRjaGFTaXRlS2V5ID09PSAnJykge1xuICAgICAgICAgICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXB0Y2hhVG9rZW4gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZShyZWNhcHRjaGFTaXRlS2V5LCB7IGFjdGlvbjogJ25ld3NsZXR0ZXJfc3Vic2NyaWJlJyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGNoYUlucHV0KSB7XG4gICAgICAgIGNhcHRjaGFJbnB1dC52YWx1ZSA9IGNhcHRjaGFUb2tlbjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYXB0Y2hhOiBjYXB0Y2hhVG9rZW4sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCBwYXlsb2FkLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IHBheWxvYWQubWVzc2FnZSB8fCBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gcGF5bG9hZC5tZXNzYWdlIHx8ICdUaGFua3Mg4oCUIHlvdSBhcmUgb24gdGhlIGxpc3QuJztcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gZ2VuZXJpY0Vycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLm1vZGFsKTtcbiAgICBpZiAoIW1vZGFsKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZm9ybSk7XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGluaXRDb3VudHJ5U2VsZWN0aXplKGZvcm0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBJbml0aWFsaXNhdGlvbiBkdSBzw6lsZWN0ZXVyIHBheXMgaW1wb3NzaWJsZSAoZMOpcGVuZGFuY2VzIG1hbnF1YW50ZXMgPyB5YXJuIGluc3RhbGwpJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gaGFuZGxlU3VibWl0KGV2ZW50LCBtb2RhbCkpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMudHJpZ2dlcik7XG4gICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMuY2xvc2UpICYmIG1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoT1BFTl9DTEFTUykpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG59IGVsc2Uge1xuICAgIGluaXQoKTtcbn1cbiIsImltcG9ydCBmbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcbmltcG9ydCB7IEZyZW5jaCB9IGZyb20gJ2ZsYXRwaWNrci9kaXN0L2wxMG4vZnIuanMnO1xuaW1wb3J0IGVuZ2xpc2ggZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9kZWZhdWx0LmpzJztcblxuLyoqXG4gKiBGbGF0cGlja3IgcGFyY291cnQgZG9jdW1lbnQuc3R5bGVTaGVldHMgZXQgbGl0IHNoZWV0LmNzc1J1bGVzIDsgc3VyIHVuZSBmZXVpbGxlIGNyb3NzLW9yaWdpblxuICogKGV4LiBHb29nbGUgRm9udHMpLCBs4oCZYWNjw6hzIGzDqHZlIFNlY3VyaXR5RXJyb3IgYXZhbnQgbcOqbWUgbGUgdHJ5L2NhdGNoIGludGVybmUuXG4gKiBVbmUgZmV1aWxsZSA8c3R5bGU+IGxvY2FsZSBlbiB0w6p0ZSBkdSA8aGVhZD4gZ2FyYW50aXQgcXVlIGxhIHByZW1pw6hyZSBmZXVpbGxlIGVzdCBsaXNpYmxlLlxuICovXG5mdW5jdGlvbiBwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vaygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYXRwaWNrci1sb2NhbC1zdHlsZXNoZWV0LWhvb2snKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBlbC5pZCA9ICdmbGF0cGlja3ItbG9jYWwtc3R5bGVzaGVldC1ob29rJztcbiAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLyogZmxhdHBpY2tyOiBmZXVpbGxlIGxvY2FsZSBwb3VyIGFjY8OocyBjc3NSdWxlcyAqLycpKTtcbiAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShlbCwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIG1zKSB7XG4gICAgbGV0IHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSwgbXMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW50U3RyaWN0KHYsIGZhbGxiYWNrKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KFN0cmluZyh2KSwgMTApO1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogZmFsbGJhY2s7XG59XG5cbi8qKiBMb2NhbGUgSVNPIDIgbGV0dHJlcyBkZXB1aXMgbGUgSFRNTCAoU3ltZm9ueSA6IGxhbmcgKyBkYXRhLWxvY2FsZSBzdXIgPGh0bWw+IG91IDxib2R5PikuICovXG5mdW5jdGlvbiBnZXRTaXRlTG9jYWxlKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHJhdyA9XG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGUnKSB8fFxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2xhbmcnKSB8fFxuICAgICAgICAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGUnKSkgfHxcbiAgICAgICAgJ2ZyJztcbiAgICByZXR1cm4gU3RyaW5nKHJhdykudG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRGbGF0cGlja3JMb2NhbGUoKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0U2l0ZUxvY2FsZSgpO1xuICAgIGlmIChsb2MgPT09ICdmcicpIHtcbiAgICAgICAgcmV0dXJuIEZyZW5jaDtcbiAgICB9XG4gICAgcmV0dXJuIGVuZ2xpc2g7XG59XG5cbi8qKiBAdHlwZWRlZiB7eyBhZHVsdHNfb25lOiBzdHJpbmcsIGFkdWx0czogc3RyaW5nLCBraWRfb25lOiBzdHJpbmcsIGtpZHM6IHN0cmluZywgc2VwOiBzdHJpbmcgfX0gR3Vlc3RzU3VtbWFyeUkxOG4gKi9cblxuLyoqIFJlbXBsYWNlIGxlIG1hcnF1ZXVyIF9fQ09VTlRfXyAoaXNzdSBkZXMgZmljaGllcnMgZGUgdHJhZHVjdGlvbiBTeW1mb255KS4gKi9cbmZ1bmN0aW9uIGFwcGx5Q291bnRUZW1wbGF0ZSh0ZW1wbGF0ZSwgY291bnQpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRlbXBsYXRlKS5zcGxpdCgnX19DT1VOVF9fJykuam9pbihTdHJpbmcoY291bnQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYWR1bHRzXG4gKiBAcGFyYW0ge251bWJlcn0ga2lkc1xuICogQHBhcmFtIHtHdWVzdHNTdW1tYXJ5STE4biB8IG51bGx9IGkxOG5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0R3Vlc3RTdW1tYXJ5KGFkdWx0cywga2lkcywgaTE4bikge1xuICAgIGNvbnN0IHQgPVxuICAgICAgICBpMThuIHx8XG4gICAgICAgIC8qKiBAdHlwZSB7R3Vlc3RzU3VtbWFyeUkxOG59ICovICh7XG4gICAgICAgICAgICBhZHVsdHNfb25lOiAnMSBhZHVsdCcsXG4gICAgICAgICAgICBhZHVsdHM6ICdfX0NPVU5UX18gYWR1bHRzJyxcbiAgICAgICAgICAgIGtpZF9vbmU6ICcxIGtpZCcsXG4gICAgICAgICAgICBraWRzOiAnX19DT1VOVF9fIGtpZHMnLFxuICAgICAgICAgICAgc2VwOiAnIMK3ICcsXG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGFMYWJlbCA9IGFkdWx0cyA9PT0gMSA/IHQuYWR1bHRzX29uZSA6IGFwcGx5Q291bnRUZW1wbGF0ZSh0LmFkdWx0cywgYWR1bHRzKTtcbiAgICBpZiAoa2lkcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYUxhYmVsO1xuICAgIH1cbiAgICBjb25zdCBrTGFiZWwgPSBraWRzID09PSAxID8gdC5raWRfb25lIDogYXBwbHlDb3VudFRlbXBsYXRlKHQua2lkcywga2lkcyk7XG4gICAgcmV0dXJuIGFMYWJlbCArIHQuc2VwICsga0xhYmVsO1xufVxuXG5mdW5jdGlvbiBpbml0UmVzZXJ2YXRpb25IZXJvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVyby1yZXNlcnZhdGlvbi1mb3JtJyk7XG4gICAgY29uc3QgZGF0ZXNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlc2VydmF0aW9uLWRhdGVzXScpO1xuICAgIGNvbnN0IGNhbGVuZGFyTW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tY2FsZW5kYXItbW91bnQnKTtcbiAgICBjb25zdCBhbmNob3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1mbGF0cGlja3ItYW5jaG9yJyk7XG4gICAgY29uc3QgY2hlY2tpbkhpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja2luJyk7XG4gICAgY29uc3QgY2hlY2tvdXRIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tY2hlY2tvdXQnKTtcbiAgICBjb25zdCBjaGVja2luRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja2luLWRpc3BsYXknKTtcbiAgICBjb25zdCBjaGVja291dERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tY2hlY2tvdXQtZGlzcGxheScpO1xuXG4gICAgY29uc3QgZ3Vlc3RzTW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tZ3Vlc3RzLXBvcG92ZXItbW91bnQnKTtcbiAgICBjb25zdCBndWVzdHNUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLW1vZHVsZV9faXRlbVtkYXRhLXJlc2VydmF0aW9uLWZpZWxkPVwiZ3Vlc3RzXCJdJyk7XG4gICAgY29uc3QgZ3Vlc3RzU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1ndWVzdHMtc3VtbWFyeScpO1xuICAgIGNvbnN0IGFkdWx0c0hpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1hZHVsdHMnKTtcbiAgICBjb25zdCBraWRzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWtpZHMnKTtcbiAgICBjb25zdCBndWVzdHNEb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWd1ZXN0cy1kb25lJyk7XG5cbiAgICBpZiAoIWZvcm0gfHwgIWRhdGVzQmxvY2sgfHwgIWNhbGVuZGFyTW91bnQgfHwgIWFuY2hvckVsIHx8ICFjaGVja2luSGlkZGVuIHx8ICFjaGVja291dEhpZGRlbiB8fCAhY2hlY2tpbkRpc3BsYXkgfHwgIWNoZWNrb3V0RGlzcGxheSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtHdWVzdHNTdW1tYXJ5STE4biB8IG51bGx9ICovXG4gICAgbGV0IGd1ZXN0c1N1bW1hcnlJMThuID0gbnVsbDtcbiAgICBjb25zdCBpMThuUmF3ID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3RzLXN1bW1hcnktaTE4bicpO1xuICAgIGlmIChpMThuUmF3KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBndWVzdHNTdW1tYXJ5STE4biA9IEpTT04ucGFyc2UoaTE4blJhdyk7XG4gICAgICAgIH0gY2F0Y2ggKF9lKSB7XG4gICAgICAgICAgICBndWVzdHNTdW1tYXJ5STE4biA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vaygpO1xuXG4gICAgbGV0IGZwID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGxvY2tZZWFySW5wdXRzKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UgfHwgIWluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuY3VyLXllYXInKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLXJlYWRvbmx5JywgJ3RydWUnKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsZW5kYXJIb29rID0gZnVuY3Rpb24gKF9zZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbi1mbGF0cGlja3ItY2FsZW5kYXInKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NrWWVhcklucHV0cyhpbnN0YW5jZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dNb250aHNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwID8gMSA6IDI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpIHtcbiAgICAgICAgY29uc3QgZm10WW1kID0gJ1ktbS1kJztcbiAgICAgICAgY29uc3QgZm10VWkgPSAnaiBNIFknO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBjaGVja2luSGlkZGVuLnZhbHVlID0gaW5zdGFuY2UuZm9ybWF0RGF0ZShzZWxlY3RlZERhdGVzWzBdLCBmbXRZbWQpO1xuICAgICAgICAgICAgY2hlY2tpbkRpc3BsYXkudmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMF0sIGZtdFVpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNraW5IaWRkZW4udmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNoZWNraW5EaXNwbGF5LnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWREYXRlcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgY2hlY2tvdXRIaWRkZW4udmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMV0sIGZtdFltZCk7XG4gICAgICAgICAgICBjaGVja291dERpc3BsYXkudmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMV0sIGZtdFVpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrb3V0SGlkZGVuLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjaGVja291dERpc3BsYXkudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZsYXRwaWNrcigpIHtcbiAgICAgICAgaWYgKGZwKSB7XG4gICAgICAgICAgICByZXR1cm4gZnA7XG4gICAgICAgIH1cblxuICAgICAgICBmcCA9IGZsYXRwaWNrcihhbmNob3JFbCwge1xuICAgICAgICAgICAgbW9kZTogJ3JhbmdlJyxcbiAgICAgICAgICAgIC8vIHRydWUgZMOpY2xlbmNoZSBmb2N1c0FuZENsb3NlKCkg4oaSIGZvY3VzIHN1ciBs4oCZaW5wdXQgY2FjaMOpIOKGkiB6b29tIGlPUyAoV2ViS2l0KSBhdSAy4bWJIGpvdXIuXG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGlubGluZSA6IG9wZW4oKSBlc3Qgbm9vcCwgbWFpcyDDqXZpdGUgdG91dCBsaXN0ZW5lciBmb2N1cy9jbGljIGludXRpbGUgc3VyIGzigJlhbmNyZS5cbiAgICAgICAgICAgIGNsaWNrT3BlbnM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd01vbnRoczogc2hvd01vbnRoc0NvdW50KCksXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxuICAgICAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgICBhcHBlbmRUbzogY2FsZW5kYXJNb3VudCxcbiAgICAgICAgICAgIGRpc2FibGVNb2JpbGU6IHRydWUsXG4gICAgICAgICAgICBtaW5EYXRlOiAndG9kYXknLFxuICAgICAgICAgICAgbG9jYWxlOiBPYmplY3QuYXNzaWduKHt9LCBnZXRGbGF0cGlja3JMb2NhbGUoKSwgeyBmaXJzdERheU9mV2VlazogMSB9KSxcbiAgICAgICAgICAgIG1vbnRoU2VsZWN0b3JUeXBlOiAnc3RhdGljJyxcbiAgICAgICAgICAgIG9uUmVhZHk6IGNhbGVuZGFySG9vayxcbiAgICAgICAgICAgIG9uTW9udGhDaGFuZ2U6IGZ1bmN0aW9uIChfc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbG9ja1llYXJJbnB1dHMoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAyICYmIGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKHNlbGVjdGVkRGF0ZXMsIF9kYXRlU3RyLCBpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN5bmNGcm9tU2VsZWN0aW9uKHNlbGVjdGVkRGF0ZXMsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjaGVja2luSGlkZGVuLnZhbHVlICYmIGNoZWNrb3V0SGlkZGVuLnZhbHVlKSB7XG4gICAgICAgICAgICBmcC5zZXREYXRlKFtjaGVja2luSGlkZGVuLnZhbHVlLCBjaGVja291dEhpZGRlbi52YWx1ZV0sIGZhbHNlKTtcbiAgICAgICAgICAgIHN5bmNGcm9tU2VsZWN0aW9uKGZwLnNlbGVjdGVkRGF0ZXMsIGZwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZnApIHtcbiAgICAgICAgICAgICAgICBmcC5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhmcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcDtcbiAgICB9XG5cbiAgICBsZXQgY2FsZW5kYXJPcGVuID0gZmFsc2U7XG4gICAgbGV0IGd1ZXN0c09wZW4gPSBmYWxzZTtcbiAgICBsZXQgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGlzU3RpY2t5TW9kdWxlKCkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlJyk7XG4gICAgICAgIHJldHVybiAhIShtb2R1bGUgJiYgbW9kdWxlLmNsYXNzTGlzdC5jb250YWlucygnaXMtc3RpY2t5JykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENhbGVuZGFyTW91bnRQbGFjZW1lbnRDbGFzcygpIHtcbiAgICAgICAgY2FsZW5kYXJNb3VudC5jbGFzc0xpc3QudG9nZ2xlKCdyZXNlcnZhdGlvbi1tb2R1bGVfX2NhbGVuZGFyLW1vdW50LS1zdGlja3knLCBpc1N0aWNreU1vZHVsZSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzKCkge1xuICAgICAgICBpZiAoZ3Vlc3RzTW91bnQpIHtcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LmNsYXNzTGlzdC50b2dnbGUoJ3Jlc2VydmF0aW9uLW1vZHVsZV9fZ3Vlc3RzLXBvcG92ZXItbW91bnQtLXN0aWNreScsIGlzU3RpY2t5TW9kdWxlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEFsaWduZSBsZSBib3JkIGRyb2l0IGR1IHBvcG92ZXIgc3VyIGxlIGNoYW1wIEd1ZXN0cyAobW9udGFnZSA9IGVuZmFudCBkdSBtb2R1bGUsIGNvbW1lIGxlIGNhbGVuZHJpZXIpLiAqL1xuICAgIGZ1bmN0aW9uIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlJyk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDUwMCkge1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUucmlnaHQgPSAnJztcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gbW9kdWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0ID0gZ3Vlc3RzVHJpZ2dlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUucmlnaHQgPSBNYXRoLm1heCgwLCBtLnJpZ2h0IC0gdC5yaWdodCkgKyAncHgnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCkge1xuICAgICAgICBpZiAoZ3Vlc3RzTW91bnQpIHtcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmcCkge1xuICAgICAgICAgICAgICAgIGZwLnNldCgnc2hvd01vbnRocycsIHNob3dNb250aHNDb3VudCgpKTtcbiAgICAgICAgICAgICAgICBmcC5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhmcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgICAgIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKTtcbiAgICAgICAgICAgICAgICBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCksXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnc2Nyb2xsJyxcbiAgICAgICAgZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICAgICAgc3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbigpO1xuICAgICAgICB9LCA1MCksXG4gICAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9LFxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBvcGVuQ2FsZW5kYXIoKSB7XG4gICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICB9XG4gICAgICAgIHNldENhbGVuZGFyTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICBjYWxlbmRhck1vdW50LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcbiAgICAgICAgZGF0ZXNCbG9jay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBjYWxlbmRhck9wZW4gPSB0cnVlO1xuICAgICAgICBzdXBwcmVzc05leHREb2NDbGljayA9IHRydWU7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZUZsYXRwaWNrcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUNhbGVuZGFyKCkge1xuICAgICAgICBjYWxlbmRhck1vdW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgICAgZGF0ZXNCbG9jay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgY2FsZW5kYXJPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGF0ZXNCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZmxhdHBpY2tyLWNhbGVuZGFyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlc2VydmF0aW9uLW1vZHVsZV9fY2FsZW5kYXItbW91bnQnKSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLmZsYXRwaWNrci1jYWxlbmRhcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlQ2FsZW5kYXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5DYWxlbmRhcigpO1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEd1ZXN0cyBwb3BvdmVyIChzdGVwcGVycyArIGNoYW1wcyBjYWNow6lzIGFkdWx0cyAvIGtpZHMpXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGdldEFkdWx0c0tpZHMoKSB7XG4gICAgICAgIGNvbnN0IGEgPSBhZHVsdHNIaWRkZW4gPyBwYXJzZUludFN0cmljdChhZHVsdHNIaWRkZW4udmFsdWUsIDIpIDogMjtcbiAgICAgICAgY29uc3QgayA9IGtpZHNIaWRkZW4gPyBwYXJzZUludFN0cmljdChraWRzSGlkZGVuLnZhbHVlLCAwKSA6IDA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZHVsdHM6IE1hdGgubWluKDEyLCBNYXRoLm1heCgxLCBhKSksXG4gICAgICAgICAgICBraWRzOiBNYXRoLm1pbigxMCwgTWF0aC5tYXgoMCwgaykpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN5bmNHdWVzdFN0ZXBwZXJVaSgpIHtcbiAgICAgICAgY29uc3QgeyBhZHVsdHMsIGtpZHMgfSA9IGdldEFkdWx0c0tpZHMoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZ3Vlc3Qtc3RlcHBlcl0nKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3Qtc3RlcHBlcicpO1xuICAgICAgICAgICAgY29uc3QgbWluID0gcGFyc2VJbnRTdHJpY3Qocm93LmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSwgMCk7XG4gICAgICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpLCA5OSk7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBrZXkgPT09ICdhZHVsdHMnID8gYWR1bHRzIDoga2lkcztcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtZ3Vlc3Qtc3RlcHBlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS50ZXh0Q29udGVudCA9IFN0cmluZyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZG93biA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwPVwiZG93blwiXScpO1xuICAgICAgICAgICAgY29uc3QgdXAgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtZ3Vlc3Qtc3RlcD1cInVwXCJdJyk7XG4gICAgICAgICAgICBpZiAoZG93bikge1xuICAgICAgICAgICAgICAgIGRvd24uZGlzYWJsZWQgPSB2YWwgPD0gbWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVwKSB7XG4gICAgICAgICAgICAgICAgdXAuZGlzYWJsZWQgPSB2YWwgPj0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGd1ZXN0c1N1bW1hcnkpIHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnkudGV4dENvbnRlbnQgPSBmb3JtYXRHdWVzdFN1bW1hcnkoYWR1bHRzLCBraWRzLCBndWVzdHNTdW1tYXJ5STE4bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBZHVsdHNLaWRzKGFkdWx0cywga2lkcykge1xuICAgICAgICBpZiAoYWR1bHRzSGlkZGVuKSB7XG4gICAgICAgICAgICBhZHVsdHNIaWRkZW4udmFsdWUgPSBTdHJpbmcoTWF0aC5taW4oMTIsIE1hdGgubWF4KDEsIGFkdWx0cykpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2lkc0hpZGRlbikge1xuICAgICAgICAgICAga2lkc0hpZGRlbi52YWx1ZSA9IFN0cmluZyhNYXRoLm1pbigxMCwgTWF0aC5tYXgoMCwga2lkcykpKTtcbiAgICAgICAgfVxuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuR3Vlc3RzKCkge1xuICAgICAgICBpZiAoIWd1ZXN0c01vdW50IHx8ICFndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICB9XG4gICAgICAgIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKTtcbiAgICAgICAgZ3Vlc3RzTW91bnQuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgICAgICBndWVzdHNNb3VudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgZ3Vlc3RzT3BlbiA9IHRydWU7XG4gICAgICAgIHN1cHByZXNzTmV4dERvY0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgc3luY0d1ZXN0U3RlcHBlclVpKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlR3Vlc3RzKCkge1xuICAgICAgICBpZiAoIWd1ZXN0c01vdW50IHx8ICFndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ3Vlc3RzTW91bnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgICAgICBndWVzdHNNb3VudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgY2xlYXJHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgZ3Vlc3RzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUd1ZXN0cygpIHtcbiAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcGVuR3Vlc3RzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ3Vlc3RzTW91bnQgJiYgZ3Vlc3RzVHJpZ2dlciAmJiBhZHVsdHNIaWRkZW4gJiYga2lkc0hpZGRlbikge1xuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcblxuICAgICAgICBndWVzdHNUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIExlcyArLy0gZXQgwqsgRG9uZSDCuyBzb250IGRhbnMgbOKAmWl0ZW0gbWFpcyBob3JzIGR1IHLDqXN1bcOpIDogbmUgcGFzIHRyYWl0ZXIgY29tbWUgb3V2ZXJ0dXJlL2Zlcm1ldHVyZSBkdSB0cmlnZ2VyXG4gICAgICAgICAgICBpZiAoZ3Vlc3RzTW91bnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlR3Vlc3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicgJiYgZS5rZXkgIT09ICcgJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndWVzdHNNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVHdWVzdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZ3Vlc3Qtc3RlcHBlcl0nKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtZ3Vlc3Qtc3RlcF0nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJ0biB8fCBidG4uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWd1ZXN0LXN0ZXBwZXInKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpLCA5OSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhZHVsdHMsIGtpZHMgfSA9IGdldEFkdWx0c0tpZHMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3Qtc3RlcCcpID09PSAndXAnID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdhZHVsdHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBhZHVsdHMgKyBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPCBtaW4gfHwgbmV4dCA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldEFkdWx0c0tpZHMobmV4dCwga2lkcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdraWRzJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0ga2lkcyArIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA8IG1pbiB8fCBuZXh0ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0QWR1bHRzS2lkcyhhZHVsdHMsIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZ3Vlc3RzRG9uZSkge1xuICAgICAgICAgICAgZ3Vlc3RzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHN1cHByZXNzTmV4dERvY0NsaWNrKSB7XG4gICAgICAgICAgICAgICAgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVzQmxvY2suY29udGFpbnMoZS50YXJnZXQpIHx8IGNhbGVuZGFyTW91bnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGd1ZXN0c09wZW4gJiYgZ3Vlc3RzTW91bnQgJiYgZ3Vlc3RzVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIGlmIChndWVzdHNUcmlnZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBndWVzdHNNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0cnVlLFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ICE9PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlQ2FsZW5kYXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRSZXNlcnZhdGlvbkhlcm8pO1xufSBlbHNlIHtcbiAgICBpbml0UmVzZXJ2YXRpb25IZXJvKCk7XG59XG4iLCJpbXBvcnQgeyBpbml0SGF2ZUFuaW1hdGlvbiB9IGZyb20gJy4vaGF2ZS1hbmltYXRpb24nO1xuXG4kKGZ1bmN0aW9uKCQpIHtcbiAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgLy8gTWVudVxuICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZHJvcGRvd24nKTtcbiAgICBsZXQgJG1haW5OYXZCYXIgPSAkKCcjbmF2YmFyU3VwcG9ydGVkQ29udGVudCcpO1xuICAgIGxldCAkcHJldmlvdXNtZW51ID0gJCgnLnByZXZpb3VzbWVudScpO1xuXG4gICAgJCgnLmRyb3Bkb3duIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJHByZXZpb3VzbWVudS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAkbWFpbk5hdkJhci5hZGRDbGFzcygnc3VibWVudV9zaG93Jyk7XG4gICAgfSk7XG5cbiAgICAkYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5pcyhlLnRhcmdldCkgJiYgJGRyb3Bkb3duLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICBpZiAoJG1haW5OYXZCYXIuZmluZChcIi5kcm9wZG93bi5zaG93XCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRwcmV2aW91c21lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5hdkJhci5yZW1vdmVDbGFzcygnc3VibWVudV9zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQoJy5zZWFyY2hfYmxvY2snKS5oYXNDbGFzcygnYWN0aXZlJykgJiYgISQoJy5zaG93X3NlYXJjaCcpLmlzKGUudGFyZ2V0KSAmJiAhJCgnLnNlYXJjaF9ibG9jaycpLmlzKGUudGFyZ2V0KSAmJiAkKCcuc2VhcmNoX2Jsb2NrJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRtYWluTmF2QmFyLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAkcHJldmlvdXNtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICRtYWluTmF2QmFyLnJlbW92ZUNsYXNzKCdzdWJtZW51X3Nob3cnKTtcbiAgICB9KTtcblxuICAgICRtYWluTmF2QmFyLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJG1haW5OYXZCYXIucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnVfc2hvdycpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cblxuICAgIGxldCAkc3RheVJvb21zU2xpZGVyID0gJCgnLnNlY3Rpb24tMl9fcm9vbXMnKTtcbiAgICBpZiAoJHN0YXlSb29tc1NsaWRlci5sZW5ndGgpIHtcbiAgICAgICAgJHN0YXlSb29tc1NsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQwMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDgwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckFydGljbGVzID0gJCgnLnNsaWRlcl9hcnRpY2xlcycpO1xuICAgIGlmKCRzbGlkZXJBcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlckFydGljbGVzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcblxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0ICRzbGlkZXJBcnRpY2xlc0J1aWxkZXIgPSAkKCcuc2xpZGVyX2FydGljbGVzX2J1aWxkZXInKTtcbiAgICBpZigkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyLmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcblxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0ICRzbGlkZXJOZXdzID0gJCgnLnNsaWRlcl9uZXdzJyk7XG4gICAgaWYoJHNsaWRlck5ld3MubGVuZ3RoKSB7XG4gICAgICAgICRzbGlkZXJOZXdzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcblxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckdhbGxlcnkgPSAkKCcuc2xpZGVyX2dhbGxlcnknKTtcbiAgICBpZigkc2xpZGVyR2FsbGVyeS5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlckdhbGxlcnkuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoJCgnLmdhbGxlcnlfbW9kYWwnKS5sZW5ndGgpIHtcbiAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgJy5nYWxsZXJ5X21vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFNsaWRlciA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudFNsaWRlID0gJCh0aGlzKS5kYXRhKCdzbGlkZXRvJyk7XG4gICAgICAgICAgICBpZigkKGN1cnJlbnRTbGlkZXIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoY3VycmVudFNsaWRlcikuc2xpY2soJ3NsaWNrR29UbycsIGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICRib2R5Lm9uKCdjbGljaycsICcuc2xpZGVybmV3c19hY3Rpb25zJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSAkKHRoaXMpLmRhdGEoJ2FjdGlvbnMnKTtcbiAgICAgICAgaWYoYWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmKGFjdGlvbiA9PT0gXCJwcmV2XCIpIHtcbiAgICAgICAgICAgICAgICAkc2xpZGVyTmV3cy5zbGljaygnc2xpY2tQcmV2Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhY3Rpb24gPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgJHNsaWRlck5ld3Muc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuc2hvd19zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnNlYXJjaF9ibG9jaycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgc3RpY2t5SGVhZGVyKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzdGlja3lIZWFkZXIoKSB7XG4gICAgICAgIHZhciBzdGlja3kgPSAkKCcjaGVhZGVyX3N0aWNreScpLCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0aWNreUhlYWRlcigpO1xuICAgIGluaXRIYXZlQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBNZW51IGxhdMOpcmFsIChoZWFkZXIpIDogb3V2ZXJ0dXJlIC8gZmVybWV0dXJlLCBiYWNrZHJvcCwgYmxvY2FnZSBkdSBzY3JvbGxcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbWVudS10b2dnbGUnKTtcbiAgICBjb25zdCBoZWFkZXJNZW51RmFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWZhYicpO1xuICAgIGNvbnN0IGhlYWRlckRyYXdlckJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1kcmF3ZXItYmFja2Ryb3AnKTtcbiAgICBjb25zdCBoZWFkZXJEcmF3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWRyYXdlcicpO1xuICAgIC8qKiDDiXZpdGUgdW4gc2Vjb25kIHRhcCBpbW3DqWRpYXQgc3VyIGxlIGJ1cmdlciAobGF0ZW5jZSB0YWN0aWxlIGlPUykgcXVpIHJlZmVybWFpdCBsZSBtZW51LiAqL1xuICAgIGxldCBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IDA7XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJNZW51QmFySGVpZ2h0KCkge1xuICAgICAgICBpZiAoIXNpdGVIZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAxMDg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFyID0gc2l0ZUhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jb250ZW50Jyk7XG4gICAgICAgIGlmIChiYXIpIHtcbiAgICAgICAgICAgIHJldHVybiBiYXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhdyA9IGdldENvbXB1dGVkU3R5bGUoc2l0ZUhlYWRlcikuZ2V0UHJvcGVydHlWYWx1ZSgnLS1oZWFkZXItYmFyLWhlaWdodCcpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocmF3LCAxMCk7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUocGFyc2VkKSA/IHBhcnNlZCA6IDEwODtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVIZWFkZXJNZW51RmFiVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgaWYgKCFoZWFkZXJNZW51RmFiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gZ2V0SGVhZGVyTWVudUJhckhlaWdodCgpICsgMTAwO1xuICAgICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19tZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0hlYWRlck1lbnVGYWJBcmlhKCkge1xuICAgICAgICBpZiAoIWhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4gPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBvcGVuID8gJ0Zlcm1lciBsZSBtZW51JyA6ICdPdXZyaXIgbGUgbWVudScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlSGVhZGVyRHJhd2VyKCkge1xuICAgICAgICBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IDA7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBpZiAoc2l0ZUhlYWRlcikge1xuICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLWRyYXdlci1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlck1lbnVUb2dnbGUpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51VG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdPdXZyaXIgbGUgbWVudScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXIpIHtcbiAgICAgICAgICAgIGhlYWRlckRyYXdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyQmFja2Ryb3ApIHtcbiAgICAgICAgICAgIGhlYWRlckRyYXdlckJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNIZWFkZXJNZW51RmFiQXJpYSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5IZWFkZXJEcmF3ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBpZiAoc2l0ZUhlYWRlcikge1xuICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLWRyYXdlci1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlck1lbnVUb2dnbGUpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Zlcm1lciBsZSBtZW51Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckRyYXdlcikge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyQmFja2Ryb3ApIHtcbiAgICAgICAgICAgIGhlYWRlckRyYXdlckJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBzeW5jSGVhZGVyTWVudUZhYkFyaWEoKTtcbiAgICB9XG5cbiAgICAvKiogYGZyb21NZW51QnV0dG9uYCA6IGFwcsOocyBvdXZlcnR1cmUsIGlnbm9yZSBicmnDqHZlbWVudCB1bmUgZmVybWV0dXJlIHZpYSBidXJnZXIvRkFCIChkb3VibGUgdGFwIGlPUykuICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlSGVhZGVyRHJhd2VyKGZyb21NZW51QnV0dG9uKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJykpIHtcbiAgICAgICAgICAgIGlmIChmcm9tTWVudUJ1dHRvbiAmJiBEYXRlLm5vdygpIDwgaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbG9zZUhlYWRlckRyYXdlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3BlbkhlYWRlckRyYXdlcigpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwgPSBEYXRlLm5vdygpICsgMjgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlck1lbnVUb2dnbGUgJiYgc2l0ZUhlYWRlcikge1xuICAgICAgICBoZWFkZXJNZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUhlYWRlckRyYXdlcih0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVIZWFkZXJEcmF3ZXIodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KTtcblxuICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICBoZWFkZXJEcmF3ZXJCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGVhZGVyRHJhd2VyKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJykpIHtcbiAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoZWFkZXJEcmF3ZXIpIHtcbiAgICAgICAgaGVhZGVyRHJhd2VyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EuaGVhZGVyX19kcmF3ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkFPUyIsInBhZ2VMb2FkU3RhcnQiLCJEYXRlIiwibm93IiwiTU9CSUxFX0FPU19NQVhfV0lEVEgiLCJpc01vYmlsZUFvc1ZpZXdwb3J0Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImNvbmNhdCIsIm1hdGNoZXMiLCJzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJyYXciLCJnZXRBdHRyaWJ1dGUiLCJ2IiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNjYWxlZCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNldEF0dHJpYnV0ZSIsIlN0cmluZyIsIm1heCIsIm9uIiwiYm9keSIsIm1haW5Mb2FkZXIiLCJxdWVyeVNlbGVjdG9yIiwibWluaW11bUxvYWRlckR1cmF0aW9uIiwiaGlkZU1haW5Mb2FkZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpc0NsZWFuZWRVcCIsImNsZWFudXAiLCJtb2JpbGUiLCJpbml0Iiwib25jZSIsImVhc2luZyIsImR1cmF0aW9uIiwib2Zmc2V0IiwidGhyb3R0bGVEZWxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZWxhcHNlZCIsInJlbWFpbmluZyIsInRleHRUb0NvcHkiLCJhdHRyIiwidGVtcFRleHRhcmVhIiwiYXBwZW5kIiwidmFsIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZXNlcnZhdGlvbk1vZHVsZSIsImJvb2tGYWIiLCJtb2R1bGVIZWlnaHQiLCJpbml0aWFsVG9wIiwiaW5uZXJIZWlnaHQiLCJ1cGRhdGVSZXNlcnZhdGlvblN0YXRlIiwiaXNQYXN0Iiwic2Nyb2xsWSIsInRvZ2dsZSIsInBhc3NpdmUiLCJlYWNoIiwiYmdVcmwiLCJkYXRhIiwiY3NzIiwiaW5pdEhhdmVBbmltYXRpb24iLCJub2RlcyIsImxlbmd0aCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicGFyc2VPZmZzZXRQeCIsImRhdGFBdHRyIiwicGFyc2VkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltIiwibiIsInBhcnNlRmxvYXQiLCJjb250YWlucyIsIm9mZnNldFB4Iiwicm9vdE1hcmdpbiIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJyb290IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwibyIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJGIiwicyIsImUiLCJfZSIsImYiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwic3RlcCIsIl9lMiIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJmcm9tIiwidGVzdCIsImFyciIsImxlbiIsImFycjIiLCJjb3VudHJpZXMiLCJlbkxvY2FsZSIsImZyTG9jYWxlIiwicmVnaXN0ZXJMb2NhbGUiLCJTRUxFQ1RPUlMiLCJtb2RhbCIsInRyaWdnZXIiLCJjbG9zZSIsImZvcm0iLCJmZWVkYmFjayIsImNhcHRjaGEiLCJjb3VudHJ5U2VsZWN0IiwiT1BFTl9DTEFTUyIsIkJPRFlfT1BFTl9DTEFTUyIsIlNVQ0NFU1NfRk9STV9DTEFTUyIsImJ1aWxkQ291bnRyeVNlbGVjdERhdGEiLCJwYWdlTG9jYWxlIiwibGFuZyIsIm9mZmljaWFsIiwiZ2V0TmFtZXMiLCJvcHRzIiwibWFwIiwiY29kZSIsInRleHQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic2Vuc2l0aXZpdHkiLCIkb3JkZXIiLCJjb2RlcyIsIlNldCIsImZsYXRGb3JOYXRpdmUiLCJfcmVmIiwib3B0aW9ucyIsInJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUiLCJfQXJyYXkkZnJvbSQiLCJzZXJ2ZXIiLCJkYXRhc2V0Iiwic3VnZ2VzdGVkQ291bnRyeSIsInRvVXBwZXJDYXNlIiwiaGFzIiwibGlzdCIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJtIiwiZXhlYyIsInJlcGxhY2UiLCJwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3QiLCJzZWxlY3RFbCIsImZsYXRPcHRpb25zIiwiaW5pdGlhbCIsImlubmVySFRNTCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJvcHQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJzZWxlY3RlZCIsImFwcGVuZENoaWxkIiwiaW5pdENvdW50cnlTZWxlY3RpemUiLCJIVE1MU2VsZWN0RWxlbWVudCIsInBsYWNlaG9sZGVyIiwiY291bnRyeVBsYWNlaG9sZGVyIiwiYnVpbHQiLCJjb25zb2xlIiwiX2J1aWx0Iiwic2VsZWN0aXplIiwiJHNlbGVjdCIsImRlc3Ryb3kiLCJpdGVtcyIsInZhbHVlRmllbGQiLCJsYWJlbEZpZWxkIiwic2VhcmNoRmllbGQiLCJtYXhJdGVtcyIsImFsbG93RW1wdHlPcHRpb24iLCJzb3J0RmllbGQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImRyb3Bkb3duUGFyZW50IiwiY29weUNsYXNzZXNUb0Ryb3Bkb3duIiwid3JhcHBlckNsYXNzIiwiZHJvcGRvd25DbGFzcyIsImluc3QiLCJfbmV3c2xldHRlckNvdW50cnlTZWxlY3RpemUiLCJyZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldCIsIm9wZW5Nb2RhbCIsImhpZGRlbiIsIm1haW4iLCJmaXJzdEZpZWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9jdXMiLCJjbG9zZU1vZGFsIiwiaGFuZGxlU3VibWl0IiwiX3giLCJfeDIiLCJfaGFuZGxlU3VibWl0IiwiX2NhbGxlZSIsImV2ZW50Iiwic3VibWl0QnV0dG9uIiwiZm9ybURhdGEiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY291bnRyeSIsImxvY2FsZSIsImdlbmVyaWNFcnJvck1lc3NhZ2UiLCJpbmNvbXBsZXRlTWVzc2FnZSIsInJlY2FwdGNoYUVuYWJsZWQiLCJyZWNhcHRjaGFTaXRlS2V5IiwiY2FwdGNoYUlucHV0IiwiY2FwdGNoYVRva2VuIiwicmVzcG9uc2UiLCJwYXlsb2FkIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsIkZvcm1EYXRhIiwiZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2VuZXJpY0Vycm9yIiwiaW5jb21wbGV0ZUVycm9yIiwiZGlzYWJsZWQiLCJncmVjYXB0Y2hhIiwiZXhlY3V0ZSIsInJlYWR5IiwiYWN0aW9uIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInQwIiwib2siLCJzdWNjZXNzIiwibWVzc2FnZSIsInQxIiwiY2xvc2VzdCIsInJlYWR5U3RhdGUiLCJmbGF0cGlja3IiLCJGcmVuY2giLCJlbmdsaXNoIiwicHJlcGVuZExvY2FsU3R5bGVzaGVldEhvb2siLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRlYm91bmNlIiwibXMiLCJ0IiwiY2xlYXJUaW1lb3V0IiwicGFyc2VJbnRTdHJpY3QiLCJmYWxsYmFjayIsImdldFNpdGVMb2NhbGUiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZ2V0RmxhdHBpY2tyTG9jYWxlIiwiYXBwbHlDb3VudFRlbXBsYXRlIiwidGVtcGxhdGUiLCJjb3VudCIsImpvaW4iLCJmb3JtYXRHdWVzdFN1bW1hcnkiLCJhZHVsdHMiLCJraWRzIiwiaTE4biIsImFkdWx0c19vbmUiLCJraWRfb25lIiwic2VwIiwiYUxhYmVsIiwia0xhYmVsIiwiaW5pdFJlc2VydmF0aW9uSGVybyIsImRhdGVzQmxvY2siLCJjYWxlbmRhck1vdW50IiwiYW5jaG9yRWwiLCJjaGVja2luSGlkZGVuIiwiY2hlY2tvdXRIaWRkZW4iLCJjaGVja2luRGlzcGxheSIsImNoZWNrb3V0RGlzcGxheSIsImd1ZXN0c01vdW50IiwiZ3Vlc3RzVHJpZ2dlciIsImd1ZXN0c1N1bW1hcnkiLCJhZHVsdHNIaWRkZW4iLCJraWRzSGlkZGVuIiwiZ3Vlc3RzRG9uZSIsImd1ZXN0c1N1bW1hcnlJMThuIiwiaTE4blJhdyIsInBhcnNlIiwiZnAiLCJsb2NrWWVhcklucHV0cyIsImluc3RhbmNlIiwiY2FsZW5kYXJDb250YWluZXIiLCJjYWxlbmRhckhvb2siLCJfc2VsZWN0ZWREYXRlcyIsIl9kYXRlU3RyIiwic2hvd01vbnRoc0NvdW50IiwiaW5uZXJXaWR0aCIsInN5bmNGcm9tU2VsZWN0aW9uIiwic2VsZWN0ZWREYXRlcyIsImZtdFltZCIsImZtdFVpIiwiZm9ybWF0RGF0ZSIsImNyZWF0ZUZsYXRwaWNrciIsIm1vZGUiLCJjbG9zZU9uU2VsZWN0IiwiY2xpY2tPcGVucyIsInNob3dNb250aHMiLCJkYXRlRm9ybWF0IiwiYWxsb3dJbnB1dCIsImlubGluZSIsImFwcGVuZFRvIiwiZGlzYWJsZU1vYmlsZSIsIm1pbkRhdGUiLCJhc3NpZ24iLCJmaXJzdERheU9mV2VlayIsIm1vbnRoU2VsZWN0b3JUeXBlIiwib25SZWFkeSIsIm9uTW9udGhDaGFuZ2UiLCJvbkNoYW5nZSIsImNhbGVuZGFyT3BlbiIsImNsb3NlQ2FsZW5kYXIiLCJvbkNsb3NlIiwic2V0RGF0ZSIsInJlZHJhdyIsImd1ZXN0c09wZW4iLCJzdXBwcmVzc05leHREb2NDbGljayIsImlzU3RpY2t5TW9kdWxlIiwibW9kdWxlIiwic2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzIiwic2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcyIsInN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24iLCJzdHlsZSIsInJpZ2h0IiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsZWFyR3Vlc3RzUG9wb3ZlclBvc2l0aW9uIiwic2V0Iiwib3BlbkNhbGVuZGFyIiwiY2xvc2VHdWVzdHMiLCJnZXRBZHVsdHNLaWRzIiwiayIsInN5bmNHdWVzdFN0ZXBwZXJVaSIsIl9nZXRBZHVsdHNLaWRzIiwicm93IiwiZGlzcGxheSIsImRvd24iLCJ1cCIsInNldEFkdWx0c0tpZHMiLCJvcGVuR3Vlc3RzIiwidG9nZ2xlR3Vlc3RzIiwiYnRuIiwiX2dldEFkdWx0c0tpZHMyIiwiZGVsdGEiLCIkYm9keSIsIiRkcm9wZG93biIsIiRtYWluTmF2QmFyIiwiJHByZXZpb3VzbWVudSIsImFkZENsYXNzIiwiaXMiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJoYXNDbGFzcyIsIiRzdGF5Um9vbXNTbGlkZXIiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwiY3NzRWFzZSIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIiRzbGlkZXJBcnRpY2xlcyIsImxhenlMb2FkIiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiJHNsaWRlckFydGljbGVzQnVpbGRlciIsIiRzbGlkZXJOZXdzIiwiJHNsaWRlckdhbGxlcnkiLCJmYWRlIiwiY3VycmVudFNsaWRlciIsImN1cnJlbnRTbGlkZSIsInRvZ2dsZUNsYXNzIiwic2Nyb2xsIiwic3RpY2t5SGVhZGVyIiwic3RpY2t5Iiwic2Nyb2xsVG9wIiwic2l0ZUhlYWRlciIsImhlYWRlck1lbnVUb2dnbGUiLCJoZWFkZXJNZW51RmFiIiwiaGVhZGVyRHJhd2VyQmFja2Ryb3AiLCJoZWFkZXJEcmF3ZXIiLCJoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCIsImdldEhlYWRlck1lbnVCYXJIZWlnaHQiLCJiYXIiLCJvZmZzZXRIZWlnaHQiLCJ1cGRhdGVIZWFkZXJNZW51RmFiVmlzaWJpbGl0eSIsInkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzeW5jSGVhZGVyTWVudUZhYkFyaWEiLCJvcGVuIiwiY2xvc2VIZWFkZXJEcmF3ZXIiLCJvcGVuSGVhZGVyRHJhd2VyIiwidG9nZ2xlSGVhZGVyRHJhd2VyIiwiZnJvbU1lbnVCdXR0b24iLCJhbmNob3IiXSwic291cmNlUm9vdCI6IiJ9