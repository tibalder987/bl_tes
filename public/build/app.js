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
  var moduleHeight = 145;
  var initialTop = window.innerHeight - moduleHeight;
  var updateReservationState = function updateReservationState() {
    if (window.scrollY >= initialTop) {
      reservationModule.classList.add('is-sticky');
    } else {
      reservationModule.classList.remove('is-sticky');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3NJLGNBQWMsQ0FBQyxDQUFDO01BQ2xCbU0sa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUMsQ0FBQztFQUNOO0VBRUFQLDZCQUE2QixDQUFDLENBQUM7RUFDL0JsakIsTUFBTSxDQUFDd0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFMGdCLDZCQUE2QixFQUFFO0lBQUV6ZixPQUFPLEVBQUU7RUFBSyxDQUFDLENBQUM7RUFDbkZ6RCxNQUFNLENBQUN3QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUwZ0IsNkJBQTZCLENBQUM7RUFFaEUsSUFBSU4sb0JBQW9CLEVBQUU7SUFDdEJBLG9CQUFvQixDQUFDcGdCLGdCQUFnQixDQUFDLE9BQU8sRUFBRStnQixpQkFBaUIsQ0FBQztFQUNyRTtFQUVBbGpCLFFBQVEsQ0FBQ21DLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVd00sQ0FBQyxFQUFFO0lBQzlDLElBQUlBLENBQUMsQ0FBQ2pKLEdBQUcsS0FBSyxRQUFRLElBQUkxRixRQUFRLENBQUNxWCxlQUFlLENBQUM5VixTQUFTLENBQUM4QyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUN2RjZlLGlCQUFpQixDQUFDLENBQUM7SUFDdkI7RUFDSixDQUFDLENBQUM7RUFFRixJQUFJVixZQUFZLEVBQUU7SUFDZEEsWUFBWSxDQUFDdmlCLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVb2pCLE1BQU0sRUFBRTtNQUM3RUEsTUFBTSxDQUFDbmhCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO1FBQ3pDK2dCLGlCQUFpQixDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFFSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9idWlsZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9oYXZlLWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmV3c2xldHRlci1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVzZXJ2YXRpb24taGVyby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuXG4vLyBhbnkgSlMgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIEpTIGZpbGUgKGFwcC5qcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcbmltcG9ydCAnLi9tYWluJztcbmltcG9ydCAnLi9qcy9yZXNlcnZhdGlvbi1oZXJvJztcbmltcG9ydCAnLi9qcy9uZXdzbGV0dGVyLW1vZGFsJztcbmltcG9ydCAnLi9idWlsZGVyJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuLy8gQU9TIDogc3R5bGVzIGRhbnMgYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyAoZW50csOpZSBkZWZhdWx0KSwgcGFzIGljaSDigJQgc2lub24gYXBwLmNzcyBu4oCZZXN0IHBhcyBsacOpIGRhbnMgYmFzZS5odG1sLnR3aWcuXG5pbXBvcnQgJy4vaW1hZ2VzL2RlY28ucG5nJztcblxuY29uc3QgcGFnZUxvYWRTdGFydCA9IERhdGUubm93KCk7XG5cbi8qKiBMYXJnZXVyIG1heC4gKHB4KSA6IG3Dqm1lIG9yZHJlIGRlIGdyYW5kZXVyIHF1ZSBsZXMgYnJlYWtwb2ludHMgU0NTUyBkdSBzaXRlLiAqL1xuY29uc3QgTU9CSUxFX0FPU19NQVhfV0lEVEggPSA5OTE7XG5cbmZ1bmN0aW9uIGlzTW9iaWxlQW9zVmlld3BvcnQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke01PQklMRV9BT1NfTUFYX1dJRFRIfXB4KWApLm1hdGNoZXM7XG59XG5cbi8qKlxuICogU3VyIG1vYmlsZSwgbGVzIGRhdGEtYW9zLWRlbGF5ICgyMDDigJM2MDAgbXMpIGFsbG9uZ2VudCB0cm9wIGxhIHPDqXF1ZW5jZS5cbiAqIE9uIGxlcyByw6lkdWl0IGF2YW50IEFPUy5pbml0IHBvdXIgZ2FyZGVyIHVuIGzDqWdlciBkw6ljYWxhZ2Ugc2FucyBlbXBpbGVyIGxlcyBhdHRlbnRlcy5cbiAqL1xuZnVuY3Rpb24gc2NhbGVEb3duQW9zRGVsYXlzRm9yTW9iaWxlKCkge1xuICAgIGlmICghaXNNb2JpbGVBb3NWaWV3cG9ydCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW9zLWRlbGF5XScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhdyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknKTtcbiAgICAgICAgaWYgKHJhdyA9PT0gbnVsbCB8fCByYXcgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdiA9IHBhcnNlSW50KHJhdywgMTApO1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2KSB8fCB2IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY2FsZWQgPSBNYXRoLm1pbig5MCwgTWF0aC5yb3VuZCh2ICogMC4yMikpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5JywgU3RyaW5nKE1hdGgubWF4KDAsIHNjYWxlZCkpKTtcbiAgICB9KTtcbn1cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgbWFpbkxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxvYWRlcicpO1xuICAgIGNvbnN0IG1pbmltdW1Mb2FkZXJEdXJhdGlvbiA9IDUwMDtcblxuICAgIGNvbnN0IGhpZGVNYWluTG9hZGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIW1haW5Mb2FkZXIpIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbkxvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRpbmcnKTtcbiAgICAgICAgbGV0IGlzQ2xlYW5lZFVwID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0NsZWFuZWRVcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQ2xlYW5lZFVwID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgbWFpbkxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNjYWxlRG93bkFvc0RlbGF5c0Zvck1vYmlsZSgpO1xuICAgICAgICAgICAgY29uc3QgbW9iaWxlID0gaXNNb2JpbGVBb3NWaWV3cG9ydCgpO1xuICAgICAgICAgICAgQU9TLmluaXQoe1xuICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgICAgIC8vIE1vYmlsZSA6IGTDqWNsZW5jaGVtZW50IHBsdXMgdMO0dCAob2Zmc2V0IHBsdXMgYmFzKSwgYW5pbWF0aW9uIHBsdXMgY291cnRlLlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBtb2JpbGUgPyA1MDAgOiAxMDAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogbW9iaWxlID8gMjQgOiAxMjAsXG4gICAgICAgICAgICAgICAgdGhyb3R0bGVEZWxheTogbW9iaWxlID8gNDAgOiA5OSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1haW5Mb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsZWFudXAsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2xlYW51cCwgOTAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBwYWdlTG9hZFN0YXJ0O1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIG1pbmltdW1Mb2FkZXJEdXJhdGlvbiAtIGVsYXBzZWQpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGhpZGVNYWluTG9hZGVyLCByZW1haW5pbmcpO1xuXG4gICAgJChcIi5jb3B5LXRvLWNsaXBib2FyZFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGV4dFRvQ29weSA9ICQodGhpcykuYXR0cignZGF0YS1saW5rJyk7XG4gICAgICAgIGNvbnN0IHRlbXBUZXh0YXJlYSA9ICQoJzx0ZXh0YXJlYT4nKTtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCh0ZW1wVGV4dGFyZWEpO1xuICAgICAgICB0ZW1wVGV4dGFyZWEudmFsKHRleHRUb0NvcHkpLnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICB0ZW1wVGV4dGFyZWEucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNlcnZhdGlvbk1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1tb2R1bGUnKTtcbiAgICBpZiAoIXJlc2VydmF0aW9uTW9kdWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtb2R1bGVIZWlnaHQgPSAxNDU7XG4gICAgbGV0IGluaXRpYWxUb3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtb2R1bGVIZWlnaHQ7XG5cbiAgICBjb25zdCB1cGRhdGVSZXNlcnZhdGlvblN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gaW5pdGlhbFRvcCkge1xuICAgICAgICAgICAgcmVzZXJ2YXRpb25Nb2R1bGUuY2xhc3NMaXN0LmFkZCgnaXMtc3RpY2t5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNlcnZhdGlvbk1vZHVsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdGlja3knKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVSZXNlcnZhdGlvblN0YXRlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpbml0aWFsVG9wID0gd2luZG93LmlubmVySGVpZ2h0IC0gbW9kdWxlSGVpZ2h0O1xuICAgICAgICB1cGRhdGVSZXNlcnZhdGlvblN0YXRlKCk7XG4gICAgfSk7XG59KTsiLCJcbiQoZnVuY3Rpb24oJCkge1xuICAgICQoJy5kYXRhX2JnJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGJnVXJsID0gJCh0aGlzKS5kYXRhKCdiZycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmdVcmwgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyJyk7XG4gICAgfSk7XG5cbn0pOyIsIi8qKlxuICogQWpvdXRlIGxhIGNsYXNzZSBpcy1hbmltYXRlZCBhdXggw6lsw6ltZW50cyAuaGF2ZS1hbmltYXRpb24gbG9yc3F1J2lscyBlbnRyZW50IGRhbnMgbGEgem9uZSB2aXNpYmxlLlxuICogTGEgY2xhc3NlIG4nZXN0IGphbWFpcyByZXRpcsOpZSB1bmUgZm9pcyBham91dMOpZS5cbiAqXG4gKiBPZmZzZXQgKG1hcmdlIGludMOpcmlldXJlIGR1IGJhcyBkdSB2aWV3cG9ydCwgZW4gcHgpIDpcbiAqIC0gYXR0cmlidXQgZGF0YS1hbmltYXRpb24tb2Zmc2V0IHN1ciBsJ8OpbMOpbWVudFxuICogLSBzaW5vbiB2YXJpYWJsZSBDU1MgaMOpcml0w6llIC0taGF2ZS1hbmltYXRpb24tb2Zmc2V0IChleC4gc3VyIGJvZHkuaG9tZXBhZ2UpXG4gKiAtIHNpbm9uIDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRIYXZlQW5pbWF0aW9uKCkge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhdmUtYW5pbWF0aW9uJyk7XG4gICAgaWYgKCFub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdpcy1hbmltYXRlZCcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlT2Zmc2V0UHggPSAoZWwpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLW9mZnNldCcpO1xuICAgICAgICBpZiAoZGF0YUF0dHIgIT09IG51bGwgJiYgZGF0YUF0dHIgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChkYXRhQXR0ciwgMTApO1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShwYXJzZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1oYXZlLWFuaW1hdGlvbi1vZmZzZXQnKS50cmltKCk7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBNYXRoLm1heCgwLCBuKSA6IDA7XG4gICAgfTtcblxuICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFuaW1hdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldFB4ID0gcGFyc2VPZmZzZXRQeChlbCk7XG4gICAgICAgIGNvbnN0IHJvb3RNYXJnaW4gPSBgMHB4IDBweCAtJHtvZmZzZXRQeH1weCAwcHhgO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH0pO1xufVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc2VsZWN0aXplL2Rpc3QvanMvc3RhbmRhbG9uZS9zZWxlY3RpemUubWluLmpzJyk7XG4vLyBTdHlsZXMgU2VsZWN0aXplIDogaW1wb3J0w6lzIGRhbnMgYXBwLnNjc3MgKGVudHLDqWUgwqsgZGVmYXVsdCDCuyksIHNpbm9uIGlscyBuZSBzb250IHBhcyBjaGFyZ8OpcyAoc2V1bCBkZWZhdWx0IGzigJllc3QgZGFucyBiYXNlLmh0bWwudHdpZykuXG5cbmNvbnN0IGNvdW50cmllcyA9IHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcycpO1xuY29uc3QgZW5Mb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpO1xuY29uc3QgZnJMb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZnIuanNvbicpO1xuXG5jb3VudHJpZXMucmVnaXN0ZXJMb2NhbGUoZW5Mb2NhbGUpO1xuY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKGZyTG9jYWxlKTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuICAgIG1vZGFsOiAnW2RhdGEtbmV3c2xldHRlci1tb2RhbF0nLFxuICAgIHRyaWdnZXI6ICdbZGF0YS1uZXdzbGV0dGVyLXRyaWdnZXJdJyxcbiAgICBjbG9zZTogJ1tkYXRhLW5ld3NsZXR0ZXItY2xvc2VdJyxcbiAgICBmb3JtOiAnW2RhdGEtbmV3c2xldHRlci1mb3JtXScsXG4gICAgZmVlZGJhY2s6ICdbZGF0YS1uZXdzbGV0dGVyLWZlZWRiYWNrXScsXG4gICAgY2FwdGNoYTogJ1tkYXRhLW5ld3NsZXR0ZXItY2FwdGNoYV0nLFxuICAgIGNvdW50cnlTZWxlY3Q6ICdbZGF0YS1uZXdzbGV0dGVyLWNvdW50cnldJyxcbn07XG5cbmNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XG5jb25zdCBCT0RZX09QRU5fQ0xBU1MgPSAnaGFzLW5ld3NsZXR0ZXItb3Blbic7XG5jb25zdCBTVUNDRVNTX0ZPUk1fQ0xBU1MgPSAnaXMtc3VjY2Vzcy1zdGF0ZSc7XG5cbi8qKlxuICogTGlzdGUgdW5pcXVlIGRlIHRvdXMgbGVzIHBheXMgLyB0ZXJyaXRvaXJlcyBJU08sIHRyaSBhbHBoYWLDqXRpcXVlIHNlbG9uIGxhIGxhbmd1ZSBk4oCZYWZmaWNoYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTG9jYWxlXG4gKiBAcmV0dXJucyB7eyBvcHRpb25zOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIGNvZGVzOiBTZXQ8c3RyaW5nPiwgZmxhdEZvck5hdGl2ZTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4gfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKSB7XG4gICAgY29uc3QgbGFuZyA9IHBhZ2VMb2NhbGUgPT09ICdlbicgPyAnZW4nIDogJ2ZyJztcbiAgICBjb25zdCBvZmZpY2lhbCA9IGNvdW50cmllcy5nZXROYW1lcyhsYW5nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KTtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmtleXMob2ZmaWNpYWwpLm1hcCgoY29kZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IGNvZGUsXG4gICAgICAgIHRleHQ6IG9mZmljaWFsW2NvZGVdLFxuICAgIH0pKTtcblxuICAgIG9wdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS50ZXh0LmxvY2FsZUNvbXBhcmUoYi50ZXh0LCBsYW5nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSksXG4gICAgKTtcbiAgICBvcHRzLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICAgICAgby4kb3JkZXIgPSBpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29kZXMgPSBuZXcgU2V0KG9wdHMubWFwKChvKSA9PiBvLnZhbHVlKSk7XG4gICAgY29uc3QgZmxhdEZvck5hdGl2ZSA9IG9wdHMubWFwKCh7IHZhbHVlLCB0ZXh0IH0pID0+ICh7IHZhbHVlLCB0ZXh0IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdHMsXG4gICAgICAgIGNvZGVzLFxuICAgICAgICBmbGF0Rm9yTmF0aXZlLFxuICAgIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGNvZGVzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUoZm9ybSwgY29kZXMpIHtcbiAgICAvLyAxKSBTdWdnZXN0aW9uIFN5bWZvbnkgKENGLUlQQ291bnRyeSwgZMOpZmF1dCBQRiwg4oCmKSDigJQgcHJpb3JpdGFpcmUgOiBzaW5vbiB1bmUgbG9jYWxlIG5hdmlnYXRldXIgwqsgZW4tVVMgwrtcbiAgICAvLyAgICBmYWlzYWl0IGNob2lzaXIgVVMgYXZhbnQgbcOqbWUgZGUgbGlyZSBkYXRhLXN1Z2dlc3RlZC1jb3VudHJ5ICg9IFBGIGhvcnMgQ0ROKS5cbiAgICBjb25zdCBzZXJ2ZXIgPSAoZm9ybS5kYXRhc2V0LnN1Z2dlc3RlZENvdW50cnkgfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChzZXJ2ZXIgJiYgY29kZXMuaGFzKHNlcnZlcikpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlcjtcbiAgICB9XG5cbiAgICAvLyAyKSBTZWNvdXJzIDogcsOpZ2lvbiBuYXZpZ2F0ZXVyIChlbi1VUyDihpIgVVMsIOKApiksIHNhdWYgZnItRlIgKMKrIEZyYW5jZSDCuyBuZSBkb2l0IHBhcyBwYXNzZXIgYXZhbnQgbGUgZMOpZmF1dCBtw6l0aWVyIHNhbnMgc2VydmV1cilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsaXN0ID1cbiAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzIHx8IFtuYXZpZ2F0b3IubGFuZ3VhZ2VdXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgZm9yIChjb25zdCByYXcgb2YgbGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IC9eW2Etel17Mn0tKFtBLVpdezJ9KSQvLmV4ZWMoU3RyaW5nKHJhdykucmVwbGFjZSgnXycsICctJykpO1xuICAgICAgICAgICAgaWYgKCFtIHx8ICFjb2Rlcy5oYXMobVsxXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnRlInKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG5cbiAgICAvLyAzKSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2UgcGFyIGTDqWZhdXRcbiAgICBpZiAoY29kZXMuaGFzKCdQRicpKSB7XG4gICAgICAgIHJldHVybiAnUEYnO1xuICAgIH1cbiAgICBpZiAoY29kZXMuaGFzKCdGUicpKSB7XG4gICAgICAgIHJldHVybiAnRlInO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvZGVzKVswXSA/PyAnUEYnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsXG4gKiBAcGFyYW0ge0FycmF5PHsgdmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nIH0+fSBmbGF0T3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVOYXRpdmVDb3VudHJ5U2VsZWN0KHNlbGVjdEVsLCBmbGF0T3B0aW9ucywgaW5pdGlhbCkge1xuICAgIHNlbGVjdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgbyBvZiBmbGF0T3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gby52YWx1ZTtcbiAgICAgICAgb3B0LnRleHRDb250ZW50ID0gby50ZXh0O1xuICAgICAgICBpZiAoby52YWx1ZSA9PT0gaW5pdGlhbCkge1xuICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiBpbml0Q291bnRyeVNlbGVjdGl6ZShmb3JtKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNvdW50cnlTZWxlY3QpO1xuICAgIGlmICghc2VsZWN0RWwgfHwgIShzZWxlY3RFbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUxvY2FsZSA9IGZvcm0uZGF0YXNldC5wYWdlTG9jYWxlIHx8ICdmcic7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmb3JtLmRhdGFzZXQuY291bnRyeVBsYWNlaG9sZGVyIHx8ICcnO1xuXG4gICAgbGV0IGJ1aWx0O1xuICAgIHRyeSB7XG4gICAgICAgIGJ1aWx0ID0gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBMaXN0ZSBwYXlzIChpMThuLWlzby1jb3VudHJpZXMpJywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9wdGlvbnMsIGNvZGVzLCBmbGF0Rm9yTmF0aXZlIH0gPSBidWlsdDtcbiAgICBjb25zdCBpbml0aWFsID0gcmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZShmb3JtLCBjb2Rlcyk7XG5cbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnIHx8ICEkLmZuLnNlbGVjdGl6ZSkge1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0RWwpO1xuICAgIGlmICgkc2VsZWN0WzBdLnNlbGVjdGl6ZSkge1xuICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGl0ZW1zOiBbaW5pdGlhbF0sXG4gICAgICAgICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxuICAgICAgICAgICAgbGFiZWxGaWVsZDogJ3RleHQnLFxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsndGV4dCddLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBtYXhJdGVtczogMSxcbiAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd0VtcHR5T3B0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogW3sgZmllbGQ6ICckb3JkZXInLCBkaXJlY3Rpb246ICdhc2MnIH1dLFxuICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JyxcbiAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzZWxlY3RpemUtY29udHJvbCBuZXdzbGV0dGVyLWNvdW50cnktc2VsZWN0aXplJyxcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RpemUtZHJvcGRvd24gbmV3c2xldHRlci1jb3VudHJ5LWRyb3Bkb3duJyxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBTZWxlY3RpemUnLCBlcnIpO1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdCA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gaW5zdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKSB7XG4gICAgaWYgKGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtLl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5oaWRkZW4gPSBmYWxzZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQk9EWV9PUEVOX0NMQVNTKTtcblxuICAgIGNvbnN0IG1haW4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXdzbGV0dGVyLW1haW5dJyk7XG4gICAgY29uc3QgZmlyc3RGaWVsZCA9IG1haW4gJiYgbWFpbi5xdWVyeVNlbGVjdG9yKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJyk7XG4gICAgaWYgKGZpcnN0RmllbGQpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmaXJzdEZpZWxkLmZvY3VzKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIG1vZGFsLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1BFTl9DTEFTUyk7XG5cbiAgICBjb25zdCBmZWVkYmFjayA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmZlZWRiYWNrKTtcbiAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycsICdpcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgbW9kYWwpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZlZWRiYWNrID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZmVlZGJhY2spO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IChmb3JtRGF0YS5nZXQoJ2VtYWlsJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2ZpcnN0TmFtZScpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2xhc3ROYW1lJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGNvdW50cnkgPSAoZm9ybURhdGEuZ2V0KCdjb3VudHJ5JykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IChmb3JtLmRhdGFzZXQucGFnZUxvY2FsZSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQubG9jYWxlIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3QgZ2VuZXJpY0Vycm9yTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5nZW5lcmljRXJyb3IgfHwgJ1VuZSBlcnJldXIgc1xcJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmQuJztcbiAgICBjb25zdCBpbmNvbXBsZXRlTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5pbmNvbXBsZXRlRXJyb3IgfHwgJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIGNvcnJlY3RlbWVudC4nO1xuICAgIGNvbnN0IHJlY2FwdGNoYUVuYWJsZWQgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhRW5hYmxlZCA9PT0gJzEnO1xuICAgIGNvbnN0IHJlY2FwdGNoYVNpdGVLZXkgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhU2l0ZUtleSB8fCAnJztcbiAgICBjb25zdCBjYXB0Y2hhSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNhcHRjaGEpO1xuXG4gICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnLCAnaXMtZXJyb3InKTtcbiAgICB9XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFNVQ0NFU1NfRk9STV9DTEFTUyk7XG5cbiAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCB8fCAhZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSB8fCAhY291bnRyeSkge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gaW5jb21wbGV0ZU1lc3NhZ2U7XG4gICAgICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2FwdGNoYVRva2VuID0gJyc7XG4gICAgaWYgKHJlY2FwdGNoYUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ3JlY2FwdGNoYSB8fCB0eXBlb2Ygd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCByZWNhcHRjaGFTaXRlS2V5ID09PSAnJykge1xuICAgICAgICAgICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXB0Y2hhVG9rZW4gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZShyZWNhcHRjaGFTaXRlS2V5LCB7IGFjdGlvbjogJ25ld3NsZXR0ZXJfc3Vic2NyaWJlJyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGNoYUlucHV0KSB7XG4gICAgICAgIGNhcHRjaGFJbnB1dC52YWx1ZSA9IGNhcHRjaGFUb2tlbjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYXB0Y2hhOiBjYXB0Y2hhVG9rZW4sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCBwYXlsb2FkLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IHBheWxvYWQubWVzc2FnZSB8fCBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gcGF5bG9hZC5tZXNzYWdlIHx8ICdUaGFua3Mg4oCUIHlvdSBhcmUgb24gdGhlIGxpc3QuJztcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gZ2VuZXJpY0Vycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLm1vZGFsKTtcbiAgICBpZiAoIW1vZGFsKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZm9ybSk7XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGluaXRDb3VudHJ5U2VsZWN0aXplKGZvcm0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBJbml0aWFsaXNhdGlvbiBkdSBzw6lsZWN0ZXVyIHBheXMgaW1wb3NzaWJsZSAoZMOpcGVuZGFuY2VzIG1hbnF1YW50ZXMgPyB5YXJuIGluc3RhbGwpJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gaGFuZGxlU3VibWl0KGV2ZW50LCBtb2RhbCkpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMudHJpZ2dlcik7XG4gICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMuY2xvc2UpICYmIG1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoT1BFTl9DTEFTUykpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG59IGVsc2Uge1xuICAgIGluaXQoKTtcbn1cbiIsImltcG9ydCBmbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcbmltcG9ydCB7IEZyZW5jaCB9IGZyb20gJ2ZsYXRwaWNrci9kaXN0L2wxMG4vZnIuanMnO1xuaW1wb3J0IGVuZ2xpc2ggZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9kZWZhdWx0LmpzJztcblxuLyoqXG4gKiBGbGF0cGlja3IgcGFyY291cnQgZG9jdW1lbnQuc3R5bGVTaGVldHMgZXQgbGl0IHNoZWV0LmNzc1J1bGVzIDsgc3VyIHVuZSBmZXVpbGxlIGNyb3NzLW9yaWdpblxuICogKGV4LiBHb29nbGUgRm9udHMpLCBs4oCZYWNjw6hzIGzDqHZlIFNlY3VyaXR5RXJyb3IgYXZhbnQgbcOqbWUgbGUgdHJ5L2NhdGNoIGludGVybmUuXG4gKiBVbmUgZmV1aWxsZSA8c3R5bGU+IGxvY2FsZSBlbiB0w6p0ZSBkdSA8aGVhZD4gZ2FyYW50aXQgcXVlIGxhIHByZW1pw6hyZSBmZXVpbGxlIGVzdCBsaXNpYmxlLlxuICovXG5mdW5jdGlvbiBwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vaygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYXRwaWNrci1sb2NhbC1zdHlsZXNoZWV0LWhvb2snKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBlbC5pZCA9ICdmbGF0cGlja3ItbG9jYWwtc3R5bGVzaGVldC1ob29rJztcbiAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLyogZmxhdHBpY2tyOiBmZXVpbGxlIGxvY2FsZSBwb3VyIGFjY8OocyBjc3NSdWxlcyAqLycpKTtcbiAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShlbCwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIG1zKSB7XG4gICAgbGV0IHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSwgbXMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW50U3RyaWN0KHYsIGZhbGxiYWNrKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KFN0cmluZyh2KSwgMTApO1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogZmFsbGJhY2s7XG59XG5cbi8qKiBMb2NhbGUgSVNPIDIgbGV0dHJlcyBkZXB1aXMgbGUgSFRNTCAoU3ltZm9ueSA6IGxhbmcgKyBkYXRhLWxvY2FsZSBzdXIgPGh0bWw+IG91IDxib2R5PikuICovXG5mdW5jdGlvbiBnZXRTaXRlTG9jYWxlKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHJhdyA9XG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGUnKSB8fFxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2xhbmcnKSB8fFxuICAgICAgICAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGUnKSkgfHxcbiAgICAgICAgJ2ZyJztcbiAgICByZXR1cm4gU3RyaW5nKHJhdykudG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRGbGF0cGlja3JMb2NhbGUoKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0U2l0ZUxvY2FsZSgpO1xuICAgIGlmIChsb2MgPT09ICdmcicpIHtcbiAgICAgICAgcmV0dXJuIEZyZW5jaDtcbiAgICB9XG4gICAgcmV0dXJuIGVuZ2xpc2g7XG59XG5cbi8qKiBAdHlwZWRlZiB7eyBhZHVsdHNfb25lOiBzdHJpbmcsIGFkdWx0czogc3RyaW5nLCBraWRfb25lOiBzdHJpbmcsIGtpZHM6IHN0cmluZywgc2VwOiBzdHJpbmcgfX0gR3Vlc3RzU3VtbWFyeUkxOG4gKi9cblxuLyoqIFJlbXBsYWNlIGxlIG1hcnF1ZXVyIF9fQ09VTlRfXyAoaXNzdSBkZXMgZmljaGllcnMgZGUgdHJhZHVjdGlvbiBTeW1mb255KS4gKi9cbmZ1bmN0aW9uIGFwcGx5Q291bnRUZW1wbGF0ZSh0ZW1wbGF0ZSwgY291bnQpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRlbXBsYXRlKS5zcGxpdCgnX19DT1VOVF9fJykuam9pbihTdHJpbmcoY291bnQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYWR1bHRzXG4gKiBAcGFyYW0ge251bWJlcn0ga2lkc1xuICogQHBhcmFtIHtHdWVzdHNTdW1tYXJ5STE4biB8IG51bGx9IGkxOG5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0R3Vlc3RTdW1tYXJ5KGFkdWx0cywga2lkcywgaTE4bikge1xuICAgIGNvbnN0IHQgPVxuICAgICAgICBpMThuIHx8XG4gICAgICAgIC8qKiBAdHlwZSB7R3Vlc3RzU3VtbWFyeUkxOG59ICovICh7XG4gICAgICAgICAgICBhZHVsdHNfb25lOiAnMSBhZHVsdCcsXG4gICAgICAgICAgICBhZHVsdHM6ICdfX0NPVU5UX18gYWR1bHRzJyxcbiAgICAgICAgICAgIGtpZF9vbmU6ICcxIGtpZCcsXG4gICAgICAgICAgICBraWRzOiAnX19DT1VOVF9fIGtpZHMnLFxuICAgICAgICAgICAgc2VwOiAnIMK3ICcsXG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGFMYWJlbCA9IGFkdWx0cyA9PT0gMSA/IHQuYWR1bHRzX29uZSA6IGFwcGx5Q291bnRUZW1wbGF0ZSh0LmFkdWx0cywgYWR1bHRzKTtcbiAgICBpZiAoa2lkcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYUxhYmVsO1xuICAgIH1cbiAgICBjb25zdCBrTGFiZWwgPSBraWRzID09PSAxID8gdC5raWRfb25lIDogYXBwbHlDb3VudFRlbXBsYXRlKHQua2lkcywga2lkcyk7XG4gICAgcmV0dXJuIGFMYWJlbCArIHQuc2VwICsga0xhYmVsO1xufVxuXG5mdW5jdGlvbiBpbml0UmVzZXJ2YXRpb25IZXJvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVyby1yZXNlcnZhdGlvbi1mb3JtJyk7XG4gICAgY29uc3QgZGF0ZXNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlc2VydmF0aW9uLWRhdGVzXScpO1xuICAgIGNvbnN0IGNhbGVuZGFyTW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tY2FsZW5kYXItbW91bnQnKTtcbiAgICBjb25zdCBhbmNob3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1mbGF0cGlja3ItYW5jaG9yJyk7XG4gICAgY29uc3QgY2hlY2tpbkhpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja2luJyk7XG4gICAgY29uc3QgY2hlY2tvdXRIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tY2hlY2tvdXQnKTtcbiAgICBjb25zdCBjaGVja2luRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja2luLWRpc3BsYXknKTtcbiAgICBjb25zdCBjaGVja291dERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tY2hlY2tvdXQtZGlzcGxheScpO1xuXG4gICAgY29uc3QgZ3Vlc3RzTW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tZ3Vlc3RzLXBvcG92ZXItbW91bnQnKTtcbiAgICBjb25zdCBndWVzdHNUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLW1vZHVsZV9faXRlbVtkYXRhLXJlc2VydmF0aW9uLWZpZWxkPVwiZ3Vlc3RzXCJdJyk7XG4gICAgY29uc3QgZ3Vlc3RzU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1ndWVzdHMtc3VtbWFyeScpO1xuICAgIGNvbnN0IGFkdWx0c0hpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1hZHVsdHMnKTtcbiAgICBjb25zdCBraWRzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWtpZHMnKTtcbiAgICBjb25zdCBndWVzdHNEb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWd1ZXN0cy1kb25lJyk7XG5cbiAgICBpZiAoIWZvcm0gfHwgIWRhdGVzQmxvY2sgfHwgIWNhbGVuZGFyTW91bnQgfHwgIWFuY2hvckVsIHx8ICFjaGVja2luSGlkZGVuIHx8ICFjaGVja291dEhpZGRlbiB8fCAhY2hlY2tpbkRpc3BsYXkgfHwgIWNoZWNrb3V0RGlzcGxheSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtHdWVzdHNTdW1tYXJ5STE4biB8IG51bGx9ICovXG4gICAgbGV0IGd1ZXN0c1N1bW1hcnlJMThuID0gbnVsbDtcbiAgICBjb25zdCBpMThuUmF3ID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3RzLXN1bW1hcnktaTE4bicpO1xuICAgIGlmIChpMThuUmF3KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBndWVzdHNTdW1tYXJ5STE4biA9IEpTT04ucGFyc2UoaTE4blJhdyk7XG4gICAgICAgIH0gY2F0Y2ggKF9lKSB7XG4gICAgICAgICAgICBndWVzdHNTdW1tYXJ5STE4biA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vaygpO1xuXG4gICAgbGV0IGZwID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGxvY2tZZWFySW5wdXRzKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UgfHwgIWluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuY3VyLXllYXInKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLXJlYWRvbmx5JywgJ3RydWUnKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsZW5kYXJIb29rID0gZnVuY3Rpb24gKF9zZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbi1mbGF0cGlja3ItY2FsZW5kYXInKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NrWWVhcklucHV0cyhpbnN0YW5jZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dNb250aHNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwID8gMSA6IDI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpIHtcbiAgICAgICAgY29uc3QgZm10WW1kID0gJ1ktbS1kJztcbiAgICAgICAgY29uc3QgZm10VWkgPSAnaiBNIFknO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBjaGVja2luSGlkZGVuLnZhbHVlID0gaW5zdGFuY2UuZm9ybWF0RGF0ZShzZWxlY3RlZERhdGVzWzBdLCBmbXRZbWQpO1xuICAgICAgICAgICAgY2hlY2tpbkRpc3BsYXkudmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMF0sIGZtdFVpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNraW5IaWRkZW4udmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNoZWNraW5EaXNwbGF5LnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWREYXRlcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgY2hlY2tvdXRIaWRkZW4udmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMV0sIGZtdFltZCk7XG4gICAgICAgICAgICBjaGVja291dERpc3BsYXkudmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMV0sIGZtdFVpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrb3V0SGlkZGVuLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjaGVja291dERpc3BsYXkudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZsYXRwaWNrcigpIHtcbiAgICAgICAgaWYgKGZwKSB7XG4gICAgICAgICAgICByZXR1cm4gZnA7XG4gICAgICAgIH1cblxuICAgICAgICBmcCA9IGZsYXRwaWNrcihhbmNob3JFbCwge1xuICAgICAgICAgICAgbW9kZTogJ3JhbmdlJyxcbiAgICAgICAgICAgIC8vIHRydWUgZMOpY2xlbmNoZSBmb2N1c0FuZENsb3NlKCkg4oaSIGZvY3VzIHN1ciBs4oCZaW5wdXQgY2FjaMOpIOKGkiB6b29tIGlPUyAoV2ViS2l0KSBhdSAy4bWJIGpvdXIuXG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGlubGluZSA6IG9wZW4oKSBlc3Qgbm9vcCwgbWFpcyDDqXZpdGUgdG91dCBsaXN0ZW5lciBmb2N1cy9jbGljIGludXRpbGUgc3VyIGzigJlhbmNyZS5cbiAgICAgICAgICAgIGNsaWNrT3BlbnM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd01vbnRoczogc2hvd01vbnRoc0NvdW50KCksXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxuICAgICAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgICBhcHBlbmRUbzogY2FsZW5kYXJNb3VudCxcbiAgICAgICAgICAgIGRpc2FibGVNb2JpbGU6IHRydWUsXG4gICAgICAgICAgICBtaW5EYXRlOiAndG9kYXknLFxuICAgICAgICAgICAgbG9jYWxlOiBPYmplY3QuYXNzaWduKHt9LCBnZXRGbGF0cGlja3JMb2NhbGUoKSwgeyBmaXJzdERheU9mV2VlazogMSB9KSxcbiAgICAgICAgICAgIG1vbnRoU2VsZWN0b3JUeXBlOiAnc3RhdGljJyxcbiAgICAgICAgICAgIG9uUmVhZHk6IGNhbGVuZGFySG9vayxcbiAgICAgICAgICAgIG9uTW9udGhDaGFuZ2U6IGZ1bmN0aW9uIChfc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbG9ja1llYXJJbnB1dHMoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAyICYmIGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKHNlbGVjdGVkRGF0ZXMsIF9kYXRlU3RyLCBpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN5bmNGcm9tU2VsZWN0aW9uKHNlbGVjdGVkRGF0ZXMsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjaGVja2luSGlkZGVuLnZhbHVlICYmIGNoZWNrb3V0SGlkZGVuLnZhbHVlKSB7XG4gICAgICAgICAgICBmcC5zZXREYXRlKFtjaGVja2luSGlkZGVuLnZhbHVlLCBjaGVja291dEhpZGRlbi52YWx1ZV0sIGZhbHNlKTtcbiAgICAgICAgICAgIHN5bmNGcm9tU2VsZWN0aW9uKGZwLnNlbGVjdGVkRGF0ZXMsIGZwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZnApIHtcbiAgICAgICAgICAgICAgICBmcC5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhmcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcDtcbiAgICB9XG5cbiAgICBsZXQgY2FsZW5kYXJPcGVuID0gZmFsc2U7XG4gICAgbGV0IGd1ZXN0c09wZW4gPSBmYWxzZTtcbiAgICBsZXQgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGlzU3RpY2t5TW9kdWxlKCkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlJyk7XG4gICAgICAgIHJldHVybiAhIShtb2R1bGUgJiYgbW9kdWxlLmNsYXNzTGlzdC5jb250YWlucygnaXMtc3RpY2t5JykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENhbGVuZGFyTW91bnRQbGFjZW1lbnRDbGFzcygpIHtcbiAgICAgICAgY2FsZW5kYXJNb3VudC5jbGFzc0xpc3QudG9nZ2xlKCdyZXNlcnZhdGlvbi1tb2R1bGVfX2NhbGVuZGFyLW1vdW50LS1zdGlja3knLCBpc1N0aWNreU1vZHVsZSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzKCkge1xuICAgICAgICBpZiAoZ3Vlc3RzTW91bnQpIHtcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LmNsYXNzTGlzdC50b2dnbGUoJ3Jlc2VydmF0aW9uLW1vZHVsZV9fZ3Vlc3RzLXBvcG92ZXItbW91bnQtLXN0aWNreScsIGlzU3RpY2t5TW9kdWxlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEFsaWduZSBsZSBib3JkIGRyb2l0IGR1IHBvcG92ZXIgc3VyIGxlIGNoYW1wIEd1ZXN0cyAobW9udGFnZSA9IGVuZmFudCBkdSBtb2R1bGUsIGNvbW1lIGxlIGNhbGVuZHJpZXIpLiAqL1xuICAgIGZ1bmN0aW9uIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlJyk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDUwMCkge1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUucmlnaHQgPSAnJztcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gbW9kdWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0ID0gZ3Vlc3RzVHJpZ2dlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUucmlnaHQgPSBNYXRoLm1heCgwLCBtLnJpZ2h0IC0gdC5yaWdodCkgKyAncHgnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCkge1xuICAgICAgICBpZiAoZ3Vlc3RzTW91bnQpIHtcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmcCkge1xuICAgICAgICAgICAgICAgIGZwLnNldCgnc2hvd01vbnRocycsIHNob3dNb250aHNDb3VudCgpKTtcbiAgICAgICAgICAgICAgICBmcC5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhmcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgICAgIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKTtcbiAgICAgICAgICAgICAgICBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCksXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnc2Nyb2xsJyxcbiAgICAgICAgZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICAgICAgc3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbigpO1xuICAgICAgICB9LCA1MCksXG4gICAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9LFxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBvcGVuQ2FsZW5kYXIoKSB7XG4gICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICB9XG4gICAgICAgIHNldENhbGVuZGFyTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICBjYWxlbmRhck1vdW50LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcbiAgICAgICAgZGF0ZXNCbG9jay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBjYWxlbmRhck9wZW4gPSB0cnVlO1xuICAgICAgICBzdXBwcmVzc05leHREb2NDbGljayA9IHRydWU7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZUZsYXRwaWNrcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUNhbGVuZGFyKCkge1xuICAgICAgICBjYWxlbmRhck1vdW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgICAgZGF0ZXNCbG9jay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgY2FsZW5kYXJPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGF0ZXNCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZmxhdHBpY2tyLWNhbGVuZGFyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlc2VydmF0aW9uLW1vZHVsZV9fY2FsZW5kYXItbW91bnQnKSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLmZsYXRwaWNrci1jYWxlbmRhcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlQ2FsZW5kYXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5DYWxlbmRhcigpO1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEd1ZXN0cyBwb3BvdmVyIChzdGVwcGVycyArIGNoYW1wcyBjYWNow6lzIGFkdWx0cyAvIGtpZHMpXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGdldEFkdWx0c0tpZHMoKSB7XG4gICAgICAgIGNvbnN0IGEgPSBhZHVsdHNIaWRkZW4gPyBwYXJzZUludFN0cmljdChhZHVsdHNIaWRkZW4udmFsdWUsIDIpIDogMjtcbiAgICAgICAgY29uc3QgayA9IGtpZHNIaWRkZW4gPyBwYXJzZUludFN0cmljdChraWRzSGlkZGVuLnZhbHVlLCAwKSA6IDA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZHVsdHM6IE1hdGgubWluKDEyLCBNYXRoLm1heCgxLCBhKSksXG4gICAgICAgICAgICBraWRzOiBNYXRoLm1pbigxMCwgTWF0aC5tYXgoMCwgaykpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN5bmNHdWVzdFN0ZXBwZXJVaSgpIHtcbiAgICAgICAgY29uc3QgeyBhZHVsdHMsIGtpZHMgfSA9IGdldEFkdWx0c0tpZHMoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZ3Vlc3Qtc3RlcHBlcl0nKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3Qtc3RlcHBlcicpO1xuICAgICAgICAgICAgY29uc3QgbWluID0gcGFyc2VJbnRTdHJpY3Qocm93LmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSwgMCk7XG4gICAgICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpLCA5OSk7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBrZXkgPT09ICdhZHVsdHMnID8gYWR1bHRzIDoga2lkcztcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtZ3Vlc3Qtc3RlcHBlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS50ZXh0Q29udGVudCA9IFN0cmluZyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZG93biA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwPVwiZG93blwiXScpO1xuICAgICAgICAgICAgY29uc3QgdXAgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtZ3Vlc3Qtc3RlcD1cInVwXCJdJyk7XG4gICAgICAgICAgICBpZiAoZG93bikge1xuICAgICAgICAgICAgICAgIGRvd24uZGlzYWJsZWQgPSB2YWwgPD0gbWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVwKSB7XG4gICAgICAgICAgICAgICAgdXAuZGlzYWJsZWQgPSB2YWwgPj0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGd1ZXN0c1N1bW1hcnkpIHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnkudGV4dENvbnRlbnQgPSBmb3JtYXRHdWVzdFN1bW1hcnkoYWR1bHRzLCBraWRzLCBndWVzdHNTdW1tYXJ5STE4bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBZHVsdHNLaWRzKGFkdWx0cywga2lkcykge1xuICAgICAgICBpZiAoYWR1bHRzSGlkZGVuKSB7XG4gICAgICAgICAgICBhZHVsdHNIaWRkZW4udmFsdWUgPSBTdHJpbmcoTWF0aC5taW4oMTIsIE1hdGgubWF4KDEsIGFkdWx0cykpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2lkc0hpZGRlbikge1xuICAgICAgICAgICAga2lkc0hpZGRlbi52YWx1ZSA9IFN0cmluZyhNYXRoLm1pbigxMCwgTWF0aC5tYXgoMCwga2lkcykpKTtcbiAgICAgICAgfVxuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuR3Vlc3RzKCkge1xuICAgICAgICBpZiAoIWd1ZXN0c01vdW50IHx8ICFndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICB9XG4gICAgICAgIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKTtcbiAgICAgICAgZ3Vlc3RzTW91bnQuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgICAgICBndWVzdHNNb3VudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgZ3Vlc3RzT3BlbiA9IHRydWU7XG4gICAgICAgIHN1cHByZXNzTmV4dERvY0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgc3luY0d1ZXN0U3RlcHBlclVpKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlR3Vlc3RzKCkge1xuICAgICAgICBpZiAoIWd1ZXN0c01vdW50IHx8ICFndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ3Vlc3RzTW91bnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgICAgICBndWVzdHNNb3VudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgY2xlYXJHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgZ3Vlc3RzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUd1ZXN0cygpIHtcbiAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcGVuR3Vlc3RzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ3Vlc3RzTW91bnQgJiYgZ3Vlc3RzVHJpZ2dlciAmJiBhZHVsdHNIaWRkZW4gJiYga2lkc0hpZGRlbikge1xuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcblxuICAgICAgICBndWVzdHNUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIExlcyArLy0gZXQgwqsgRG9uZSDCuyBzb250IGRhbnMgbOKAmWl0ZW0gbWFpcyBob3JzIGR1IHLDqXN1bcOpIDogbmUgcGFzIHRyYWl0ZXIgY29tbWUgb3V2ZXJ0dXJlL2Zlcm1ldHVyZSBkdSB0cmlnZ2VyXG4gICAgICAgICAgICBpZiAoZ3Vlc3RzTW91bnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlR3Vlc3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicgJiYgZS5rZXkgIT09ICcgJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndWVzdHNNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVHdWVzdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZ3Vlc3Qtc3RlcHBlcl0nKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtZ3Vlc3Qtc3RlcF0nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJ0biB8fCBidG4uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWd1ZXN0LXN0ZXBwZXInKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpLCA5OSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhZHVsdHMsIGtpZHMgfSA9IGdldEFkdWx0c0tpZHMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3Qtc3RlcCcpID09PSAndXAnID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdhZHVsdHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBhZHVsdHMgKyBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPCBtaW4gfHwgbmV4dCA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldEFkdWx0c0tpZHMobmV4dCwga2lkcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdraWRzJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0ga2lkcyArIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA8IG1pbiB8fCBuZXh0ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0QWR1bHRzS2lkcyhhZHVsdHMsIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZ3Vlc3RzRG9uZSkge1xuICAgICAgICAgICAgZ3Vlc3RzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHN1cHByZXNzTmV4dERvY0NsaWNrKSB7XG4gICAgICAgICAgICAgICAgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVzQmxvY2suY29udGFpbnMoZS50YXJnZXQpIHx8IGNhbGVuZGFyTW91bnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGd1ZXN0c09wZW4gJiYgZ3Vlc3RzTW91bnQgJiYgZ3Vlc3RzVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIGlmIChndWVzdHNUcmlnZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBndWVzdHNNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0cnVlLFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ICE9PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlQ2FsZW5kYXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRSZXNlcnZhdGlvbkhlcm8pO1xufSBlbHNlIHtcbiAgICBpbml0UmVzZXJ2YXRpb25IZXJvKCk7XG59XG4iLCJpbXBvcnQgeyBpbml0SGF2ZUFuaW1hdGlvbiB9IGZyb20gJy4vaGF2ZS1hbmltYXRpb24nO1xuXG4kKGZ1bmN0aW9uKCQpIHtcbiAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgLy8gTWVudVxuICAgIGxldCAkZHJvcGRvd24gPSAkKCcuZHJvcGRvd24nKTtcbiAgICBsZXQgJG1haW5OYXZCYXIgPSAkKCcjbmF2YmFyU3VwcG9ydGVkQ29udGVudCcpO1xuICAgIGxldCAkcHJldmlvdXNtZW51ID0gJCgnLnByZXZpb3VzbWVudScpO1xuXG4gICAgJCgnLmRyb3Bkb3duIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJHByZXZpb3VzbWVudS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAkbWFpbk5hdkJhci5hZGRDbGFzcygnc3VibWVudV9zaG93Jyk7XG4gICAgfSk7XG5cbiAgICAkYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5pcyhlLnRhcmdldCkgJiYgJGRyb3Bkb3duLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICBpZiAoJG1haW5OYXZCYXIuZmluZChcIi5kcm9wZG93bi5zaG93XCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRwcmV2aW91c21lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5hdkJhci5yZW1vdmVDbGFzcygnc3VibWVudV9zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQoJy5zZWFyY2hfYmxvY2snKS5oYXNDbGFzcygnYWN0aXZlJykgJiYgISQoJy5zaG93X3NlYXJjaCcpLmlzKGUudGFyZ2V0KSAmJiAhJCgnLnNlYXJjaF9ibG9jaycpLmlzKGUudGFyZ2V0KSAmJiAkKCcuc2VhcmNoX2Jsb2NrJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRtYWluTmF2QmFyLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAkcHJldmlvdXNtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICRtYWluTmF2QmFyLnJlbW92ZUNsYXNzKCdzdWJtZW51X3Nob3cnKTtcbiAgICB9KTtcblxuICAgICRtYWluTmF2QmFyLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJG1haW5OYXZCYXIucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnVfc2hvdycpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cblxuICAgIGxldCAkc3RheVJvb21zU2xpZGVyID0gJCgnLnNlY3Rpb24tMl9fcm9vbXMnKTtcbiAgICBpZiAoJHN0YXlSb29tc1NsaWRlci5sZW5ndGgpIHtcbiAgICAgICAgJHN0YXlSb29tc1NsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQwMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDgwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckFydGljbGVzID0gJCgnLnNsaWRlcl9hcnRpY2xlcycpO1xuICAgIGlmKCRzbGlkZXJBcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlckFydGljbGVzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcblxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0ICRzbGlkZXJBcnRpY2xlc0J1aWxkZXIgPSAkKCcuc2xpZGVyX2FydGljbGVzX2J1aWxkZXInKTtcbiAgICBpZigkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyLmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcblxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0ICRzbGlkZXJOZXdzID0gJCgnLnNsaWRlcl9uZXdzJyk7XG4gICAgaWYoJHNsaWRlck5ld3MubGVuZ3RoKSB7XG4gICAgICAgICRzbGlkZXJOZXdzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcblxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckdhbGxlcnkgPSAkKCcuc2xpZGVyX2dhbGxlcnknKTtcbiAgICBpZigkc2xpZGVyR2FsbGVyeS5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlckdhbGxlcnkuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoJCgnLmdhbGxlcnlfbW9kYWwnKS5sZW5ndGgpIHtcbiAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgJy5nYWxsZXJ5X21vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFNsaWRlciA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudFNsaWRlID0gJCh0aGlzKS5kYXRhKCdzbGlkZXRvJyk7XG4gICAgICAgICAgICBpZigkKGN1cnJlbnRTbGlkZXIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoY3VycmVudFNsaWRlcikuc2xpY2soJ3NsaWNrR29UbycsIGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICRib2R5Lm9uKCdjbGljaycsICcuc2xpZGVybmV3c19hY3Rpb25zJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSAkKHRoaXMpLmRhdGEoJ2FjdGlvbnMnKTtcbiAgICAgICAgaWYoYWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmKGFjdGlvbiA9PT0gXCJwcmV2XCIpIHtcbiAgICAgICAgICAgICAgICAkc2xpZGVyTmV3cy5zbGljaygnc2xpY2tQcmV2Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhY3Rpb24gPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgJHNsaWRlck5ld3Muc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuc2hvd19zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnNlYXJjaF9ibG9jaycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgc3RpY2t5SGVhZGVyKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzdGlja3lIZWFkZXIoKSB7XG4gICAgICAgIHZhciBzdGlja3kgPSAkKCcjaGVhZGVyX3N0aWNreScpLCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0aWNreUhlYWRlcigpO1xuICAgIGluaXRIYXZlQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBNZW51IGxhdMOpcmFsIChoZWFkZXIpIDogb3V2ZXJ0dXJlIC8gZmVybWV0dXJlLCBiYWNrZHJvcCwgYmxvY2FnZSBkdSBzY3JvbGxcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbWVudS10b2dnbGUnKTtcbiAgICBjb25zdCBoZWFkZXJNZW51RmFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWZhYicpO1xuICAgIGNvbnN0IGhlYWRlckRyYXdlckJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1kcmF3ZXItYmFja2Ryb3AnKTtcbiAgICBjb25zdCBoZWFkZXJEcmF3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWRyYXdlcicpO1xuICAgIC8qKiDDiXZpdGUgdW4gc2Vjb25kIHRhcCBpbW3DqWRpYXQgc3VyIGxlIGJ1cmdlciAobGF0ZW5jZSB0YWN0aWxlIGlPUykgcXVpIHJlZmVybWFpdCBsZSBtZW51LiAqL1xuICAgIGxldCBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IDA7XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJNZW51QmFySGVpZ2h0KCkge1xuICAgICAgICBpZiAoIXNpdGVIZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAxMDg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFyID0gc2l0ZUhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jb250ZW50Jyk7XG4gICAgICAgIGlmIChiYXIpIHtcbiAgICAgICAgICAgIHJldHVybiBiYXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhdyA9IGdldENvbXB1dGVkU3R5bGUoc2l0ZUhlYWRlcikuZ2V0UHJvcGVydHlWYWx1ZSgnLS1oZWFkZXItYmFyLWhlaWdodCcpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocmF3LCAxMCk7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUocGFyc2VkKSA/IHBhcnNlZCA6IDEwODtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVIZWFkZXJNZW51RmFiVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgaWYgKCFoZWFkZXJNZW51RmFiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gZ2V0SGVhZGVyTWVudUJhckhlaWdodCgpICsgMTAwO1xuICAgICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19tZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0hlYWRlck1lbnVGYWJBcmlhKCkge1xuICAgICAgICBpZiAoIWhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4gPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBvcGVuID8gJ0Zlcm1lciBsZSBtZW51JyA6ICdPdXZyaXIgbGUgbWVudScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlSGVhZGVyRHJhd2VyKCkge1xuICAgICAgICBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IDA7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBpZiAoc2l0ZUhlYWRlcikge1xuICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLWRyYXdlci1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlck1lbnVUb2dnbGUpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51VG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdPdXZyaXIgbGUgbWVudScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXIpIHtcbiAgICAgICAgICAgIGhlYWRlckRyYXdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyQmFja2Ryb3ApIHtcbiAgICAgICAgICAgIGhlYWRlckRyYXdlckJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNIZWFkZXJNZW51RmFiQXJpYSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5IZWFkZXJEcmF3ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBpZiAoc2l0ZUhlYWRlcikge1xuICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLWRyYXdlci1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlck1lbnVUb2dnbGUpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Zlcm1lciBsZSBtZW51Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckRyYXdlcikge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyQmFja2Ryb3ApIHtcbiAgICAgICAgICAgIGhlYWRlckRyYXdlckJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBzeW5jSGVhZGVyTWVudUZhYkFyaWEoKTtcbiAgICB9XG5cbiAgICAvKiogYGZyb21NZW51QnV0dG9uYCA6IGFwcsOocyBvdXZlcnR1cmUsIGlnbm9yZSBicmnDqHZlbWVudCB1bmUgZmVybWV0dXJlIHZpYSBidXJnZXIvRkFCIChkb3VibGUgdGFwIGlPUykuICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlSGVhZGVyRHJhd2VyKGZyb21NZW51QnV0dG9uKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJykpIHtcbiAgICAgICAgICAgIGlmIChmcm9tTWVudUJ1dHRvbiAmJiBEYXRlLm5vdygpIDwgaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbG9zZUhlYWRlckRyYXdlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3BlbkhlYWRlckRyYXdlcigpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwgPSBEYXRlLm5vdygpICsgMjgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlck1lbnVUb2dnbGUgJiYgc2l0ZUhlYWRlcikge1xuICAgICAgICBoZWFkZXJNZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUhlYWRlckRyYXdlcih0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVIZWFkZXJEcmF3ZXIodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KTtcblxuICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICBoZWFkZXJEcmF3ZXJCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGVhZGVyRHJhd2VyKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJykpIHtcbiAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoZWFkZXJEcmF3ZXIpIHtcbiAgICAgICAgaGVhZGVyRHJhd2VyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EuaGVhZGVyX19kcmF3ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkFPUyIsInBhZ2VMb2FkU3RhcnQiLCJEYXRlIiwibm93IiwiTU9CSUxFX0FPU19NQVhfV0lEVEgiLCJpc01vYmlsZUFvc1ZpZXdwb3J0Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImNvbmNhdCIsIm1hdGNoZXMiLCJzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJyYXciLCJnZXRBdHRyaWJ1dGUiLCJ2IiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNjYWxlZCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNldEF0dHJpYnV0ZSIsIlN0cmluZyIsIm1heCIsIm9uIiwiYm9keSIsIm1haW5Mb2FkZXIiLCJxdWVyeVNlbGVjdG9yIiwibWluaW11bUxvYWRlckR1cmF0aW9uIiwiaGlkZU1haW5Mb2FkZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpc0NsZWFuZWRVcCIsImNsZWFudXAiLCJtb2JpbGUiLCJpbml0Iiwib25jZSIsImVhc2luZyIsImR1cmF0aW9uIiwib2Zmc2V0IiwidGhyb3R0bGVEZWxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZWxhcHNlZCIsInJlbWFpbmluZyIsInRleHRUb0NvcHkiLCJhdHRyIiwidGVtcFRleHRhcmVhIiwiYXBwZW5kIiwidmFsIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZXNlcnZhdGlvbk1vZHVsZSIsIm1vZHVsZUhlaWdodCIsImluaXRpYWxUb3AiLCJpbm5lckhlaWdodCIsInVwZGF0ZVJlc2VydmF0aW9uU3RhdGUiLCJzY3JvbGxZIiwicGFzc2l2ZSIsImVhY2giLCJiZ1VybCIsImRhdGEiLCJjc3MiLCJpbml0SGF2ZUFuaW1hdGlvbiIsIm5vZGVzIiwibGVuZ3RoIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwYXJzZU9mZnNldFB4IiwiZGF0YUF0dHIiLCJwYXJzZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW0iLCJuIiwicGFyc2VGbG9hdCIsImNvbnRhaW5zIiwib2Zmc2V0UHgiLCJyb290TWFyZ2luIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsInVub2JzZXJ2ZSIsInJvb3QiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJvIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIkYiLCJzIiwiZSIsIl9lIiwiZiIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJzdGVwIiwiX2UyIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwiYXJyIiwibGVuIiwiYXJyMiIsImNvdW50cmllcyIsImVuTG9jYWxlIiwiZnJMb2NhbGUiLCJyZWdpc3RlckxvY2FsZSIsIlNFTEVDVE9SUyIsIm1vZGFsIiwidHJpZ2dlciIsImNsb3NlIiwiZm9ybSIsImZlZWRiYWNrIiwiY2FwdGNoYSIsImNvdW50cnlTZWxlY3QiLCJPUEVOX0NMQVNTIiwiQk9EWV9PUEVOX0NMQVNTIiwiU1VDQ0VTU19GT1JNX0NMQVNTIiwiYnVpbGRDb3VudHJ5U2VsZWN0RGF0YSIsInBhZ2VMb2NhbGUiLCJsYW5nIiwib2ZmaWNpYWwiLCJnZXROYW1lcyIsIm9wdHMiLCJtYXAiLCJjb2RlIiwidGV4dCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzZW5zaXRpdml0eSIsIiRvcmRlciIsImNvZGVzIiwiU2V0IiwiZmxhdEZvck5hdGl2ZSIsIl9yZWYiLCJvcHRpb25zIiwicmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZSIsIl9BcnJheSRmcm9tJCIsInNlcnZlciIsImRhdGFzZXQiLCJzdWdnZXN0ZWRDb3VudHJ5IiwidG9VcHBlckNhc2UiLCJoYXMiLCJsaXN0IiwibmF2aWdhdG9yIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIm0iLCJleGVjIiwicmVwbGFjZSIsInBvcHVsYXRlTmF0aXZlQ291bnRyeVNlbGVjdCIsInNlbGVjdEVsIiwiZmxhdE9wdGlvbnMiLCJpbml0aWFsIiwiaW5uZXJIVE1MIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm9wdCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInNlbGVjdGVkIiwiYXBwZW5kQ2hpbGQiLCJpbml0Q291bnRyeVNlbGVjdGl6ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJjb3VudHJ5UGxhY2Vob2xkZXIiLCJidWlsdCIsImNvbnNvbGUiLCJfYnVpbHQiLCJzZWxlY3RpemUiLCIkc2VsZWN0IiwiZGVzdHJveSIsIml0ZW1zIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJzZWFyY2hGaWVsZCIsIm1heEl0ZW1zIiwiYWxsb3dFbXB0eU9wdGlvbiIsInNvcnRGaWVsZCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiZHJvcGRvd25QYXJlbnQiLCJjb3B5Q2xhc3Nlc1RvRHJvcGRvd24iLCJ3cmFwcGVyQ2xhc3MiLCJkcm9wZG93bkNsYXNzIiwiaW5zdCIsIl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZSIsInJlZnJlc2hDb3VudHJ5RmllbGRBZnRlclJlc2V0Iiwib3Blbk1vZGFsIiwiaGlkZGVuIiwibWFpbiIsImZpcnN0RmllbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb2N1cyIsImNsb3NlTW9kYWwiLCJoYW5kbGVTdWJtaXQiLCJfeCIsIl94MiIsIl9oYW5kbGVTdWJtaXQiLCJfY2FsbGVlIiwiZXZlbnQiLCJzdWJtaXRCdXR0b24iLCJmb3JtRGF0YSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjb3VudHJ5IiwibG9jYWxlIiwiZ2VuZXJpY0Vycm9yTWVzc2FnZSIsImluY29tcGxldGVNZXNzYWdlIiwicmVjYXB0Y2hhRW5hYmxlZCIsInJlY2FwdGNoYVNpdGVLZXkiLCJjYXB0Y2hhSW5wdXQiLCJjYXB0Y2hhVG9rZW4iLCJyZXNwb25zZSIsInBheWxvYWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybURhdGEiLCJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZW5lcmljRXJyb3IiLCJpbmNvbXBsZXRlRXJyb3IiLCJkaXNhYmxlZCIsImdyZWNhcHRjaGEiLCJleGVjdXRlIiwicmVhZHkiLCJhY3Rpb24iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwidDAiLCJvayIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidDEiLCJjbG9zZXN0IiwicmVhZHlTdGF0ZSIsImZsYXRwaWNrciIsIkZyZW5jaCIsImVuZ2xpc2giLCJwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vayIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGVib3VuY2UiLCJtcyIsInQiLCJjbGVhclRpbWVvdXQiLCJwYXJzZUludFN0cmljdCIsImZhbGxiYWNrIiwiZ2V0U2l0ZUxvY2FsZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJnZXRGbGF0cGlja3JMb2NhbGUiLCJhcHBseUNvdW50VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImNvdW50Iiwiam9pbiIsImZvcm1hdEd1ZXN0U3VtbWFyeSIsImFkdWx0cyIsImtpZHMiLCJpMThuIiwiYWR1bHRzX29uZSIsImtpZF9vbmUiLCJzZXAiLCJhTGFiZWwiLCJrTGFiZWwiLCJpbml0UmVzZXJ2YXRpb25IZXJvIiwiZGF0ZXNCbG9jayIsImNhbGVuZGFyTW91bnQiLCJhbmNob3JFbCIsImNoZWNraW5IaWRkZW4iLCJjaGVja291dEhpZGRlbiIsImNoZWNraW5EaXNwbGF5IiwiY2hlY2tvdXREaXNwbGF5IiwiZ3Vlc3RzTW91bnQiLCJndWVzdHNUcmlnZ2VyIiwiZ3Vlc3RzU3VtbWFyeSIsImFkdWx0c0hpZGRlbiIsImtpZHNIaWRkZW4iLCJndWVzdHNEb25lIiwiZ3Vlc3RzU3VtbWFyeUkxOG4iLCJpMThuUmF3IiwicGFyc2UiLCJmcCIsImxvY2tZZWFySW5wdXRzIiwiaW5zdGFuY2UiLCJjYWxlbmRhckNvbnRhaW5lciIsImNhbGVuZGFySG9vayIsIl9zZWxlY3RlZERhdGVzIiwiX2RhdGVTdHIiLCJzaG93TW9udGhzQ291bnQiLCJpbm5lcldpZHRoIiwic3luY0Zyb21TZWxlY3Rpb24iLCJzZWxlY3RlZERhdGVzIiwiZm10WW1kIiwiZm10VWkiLCJmb3JtYXREYXRlIiwiY3JlYXRlRmxhdHBpY2tyIiwibW9kZSIsImNsb3NlT25TZWxlY3QiLCJjbGlja09wZW5zIiwic2hvd01vbnRocyIsImRhdGVGb3JtYXQiLCJhbGxvd0lucHV0IiwiaW5saW5lIiwiYXBwZW5kVG8iLCJkaXNhYmxlTW9iaWxlIiwibWluRGF0ZSIsImFzc2lnbiIsImZpcnN0RGF5T2ZXZWVrIiwibW9udGhTZWxlY3RvclR5cGUiLCJvblJlYWR5Iiwib25Nb250aENoYW5nZSIsIm9uQ2hhbmdlIiwiY2FsZW5kYXJPcGVuIiwiY2xvc2VDYWxlbmRhciIsIm9uQ2xvc2UiLCJzZXREYXRlIiwicmVkcmF3IiwiZ3Vlc3RzT3BlbiIsInN1cHByZXNzTmV4dERvY0NsaWNrIiwiaXNTdGlja3lNb2R1bGUiLCJtb2R1bGUiLCJzZXRDYWxlbmRhck1vdW50UGxhY2VtZW50Q2xhc3MiLCJ0b2dnbGUiLCJzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzIiwic3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbiIsInN0eWxlIiwicmlnaHQiLCJsZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xlYXJHdWVzdHNQb3BvdmVyUG9zaXRpb24iLCJzZXQiLCJvcGVuQ2FsZW5kYXIiLCJjbG9zZUd1ZXN0cyIsImdldEFkdWx0c0tpZHMiLCJrIiwic3luY0d1ZXN0U3RlcHBlclVpIiwiX2dldEFkdWx0c0tpZHMiLCJyb3ciLCJkaXNwbGF5IiwiZG93biIsInVwIiwic2V0QWR1bHRzS2lkcyIsIm9wZW5HdWVzdHMiLCJ0b2dnbGVHdWVzdHMiLCJidG4iLCJfZ2V0QWR1bHRzS2lkczIiLCJkZWx0YSIsIiRib2R5IiwiJGRyb3Bkb3duIiwiJG1haW5OYXZCYXIiLCIkcHJldmlvdXNtZW51IiwiYWRkQ2xhc3MiLCJpcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImhhc0NsYXNzIiwiJHN0YXlSb29tc1NsaWRlciIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5maW5pdGUiLCJjc3NFYXNlIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiJHNsaWRlckFydGljbGVzIiwibGF6eUxvYWQiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCIkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyIiwiJHNsaWRlck5ld3MiLCIkc2xpZGVyR2FsbGVyeSIsImZhZGUiLCJjdXJyZW50U2xpZGVyIiwiY3VycmVudFNsaWRlIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGwiLCJzdGlja3lIZWFkZXIiLCJzdGlja3kiLCJzY3JvbGxUb3AiLCJzaXRlSGVhZGVyIiwiaGVhZGVyTWVudVRvZ2dsZSIsImhlYWRlck1lbnVGYWIiLCJoZWFkZXJEcmF3ZXJCYWNrZHJvcCIsImhlYWRlckRyYXdlciIsImhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsIiwiZ2V0SGVhZGVyTWVudUJhckhlaWdodCIsImJhciIsIm9mZnNldEhlaWdodCIsInVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5IiwieSIsInJlbW92ZUF0dHJpYnV0ZSIsInN5bmNIZWFkZXJNZW51RmFiQXJpYSIsIm9wZW4iLCJjbG9zZUhlYWRlckRyYXdlciIsIm9wZW5IZWFkZXJEcmF3ZXIiLCJ0b2dnbGVIZWFkZXJEcmF3ZXIiLCJmcm9tTWVudUJ1dHRvbiIsImFuY2hvciJdLCJzb3VyY2VSb290IjoiIn0=