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
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./assets/main.js");
/* harmony import */ var _js_reservation_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/reservation-hero */ "./assets/js/reservation-hero.js");
/* harmony import */ var _js_newsletter_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/newsletter-modal */ "./assets/js/newsletter-modal.js");
/* harmony import */ var _js_newsletter_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_newsletter_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_aos_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/aos-utils */ "./assets/js/aos-utils.js");
/* harmony import */ var _images_deco_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/deco.png */ "./assets/images/deco.png");



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
// AOS : styles dans assets/styles/app.scss (entrée default), pas ici — sinon app.css n'est pas lié dans base.html.twig.

var pageLoadStart = Date.now();
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
      (0,_js_aos_utils__WEBPACK_IMPORTED_MODULE_8__.scaleDownAosDelaysForMobile)();
      var mobile = (0,_js_aos_utils__WEBPACK_IMPORTED_MODULE_8__.isMobileAosViewport)();
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      aos__WEBPACK_IMPORTED_MODULE_7___default().init({
        once: true,
        easing: 'ease-out',
        // Mobile : déclenchement plus tôt (offset plus bas), animation plus courte.
        duration: reducedMotion ? 0 : mobile ? 500 : 1000,
        offset: mobile ? 24 : 120,
        throttleDelay: mobile ? 40 : 99,
        disable: reducedMotion
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

/***/ "./assets/js/aos-utils.js":
/*!********************************!*\
  !*** ./assets/js/aos-utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMobileAosViewport: () => (/* binding */ isMobileAosViewport),
/* harmony export */   scaleDownAosDelaysForMobile: () => (/* binding */ scaleDownAosDelaysForMobile)
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






var MOBILE_AOS_MAX_WIDTH = 991;
function isMobileAosViewport() {
  return window.matchMedia("(max-width: ".concat(MOBILE_AOS_MAX_WIDTH, "px)")).matches;
}

/**
 * Sur mobile, les data-aos-delay (200–600 ms) allongent trop la séquence d'apparition.
 * On les réduit avant AOS.init pour garder un léger décalage sans empiler les attentes.
 * Appelé une seule fois, avant AOS.init, après que le DOM est complet.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ047RUFFQVAsNkJBQTZCLENBQUMsQ0FBQztFQUMvQm5qQixNQUFNLENBQUN3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUyaEIsNkJBQTZCLEVBQUU7SUFBRXJnQixPQUFPLEVBQUU7RUFBSyxDQUFDLENBQUM7RUFDbkY5QyxNQUFNLENBQUN3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUyaEIsNkJBQTZCLENBQUM7RUFFaEUsSUFBSU4sb0JBQW9CLEVBQUU7SUFDdEJBLG9CQUFvQixDQUFDcmhCLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdpQixpQkFBaUIsQ0FBQztFQUNyRTtFQUVBcmpCLFFBQVEsQ0FBQ3FCLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVeU4sQ0FBQyxFQUFFO0lBQzlDLElBQUlBLENBQUMsQ0FBQ2pKLEdBQUcsS0FBSyxRQUFRLElBQUk3RixRQUFRLENBQUN3WCxlQUFlLENBQUNuWCxTQUFTLENBQUMyRCxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUN2RnFmLGlCQUFpQixDQUFDLENBQUM7SUFDdkI7RUFDSixDQUFDLENBQUM7RUFFRixJQUFJVixZQUFZLEVBQUU7SUFDZEEsWUFBWSxDQUFDN2YsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0csT0FBTyxDQUFDLFVBQVV3Z0IsTUFBTSxFQUFFO01BQzdFQSxNQUFNLENBQUNwaUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7UUFDekNnaUIsaUJBQWlCLENBQUMsQ0FBQztNQUN2QixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hhdmUtYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hb3MtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25ld3NsZXR0ZXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Jlc2VydmF0aW9uLWhlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gYW55IEpTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBKUyBmaWxlIChhcHAuanMgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgJy4vbWFpbic7XG5pbXBvcnQgJy4vanMvcmVzZXJ2YXRpb24taGVybyc7XG5pbXBvcnQgJy4vanMvbmV3c2xldHRlci1tb2RhbCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgeyBpc01vYmlsZUFvc1ZpZXdwb3J0LCBzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUgfSBmcm9tICcuL2pzL2Fvcy11dGlscyc7XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIEFPUyA6IHN0eWxlcyBkYW5zIGFzc2V0cy9zdHlsZXMvYXBwLnNjc3MgKGVudHLDqWUgZGVmYXVsdCksIHBhcyBpY2kg4oCUIHNpbm9uIGFwcC5jc3Mgbidlc3QgcGFzIGxpw6kgZGFucyBiYXNlLmh0bWwudHdpZy5cbmltcG9ydCAnLi9pbWFnZXMvZGVjby5wbmcnO1xuXG5jb25zdCBwYWdlTG9hZFN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgbWFpbkxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxvYWRlcicpO1xuICAgIGNvbnN0IG1pbmltdW1Mb2FkZXJEdXJhdGlvbiA9IDUwMDtcblxuICAgIGNvbnN0IGhpZGVNYWluTG9hZGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIW1haW5Mb2FkZXIpIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbkxvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRpbmcnKTtcbiAgICAgICAgbGV0IGlzQ2xlYW5lZFVwID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0NsZWFuZWRVcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQ2xlYW5lZFVwID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgbWFpbkxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNjYWxlRG93bkFvc0RlbGF5c0Zvck1vYmlsZSgpO1xuICAgICAgICAgICAgY29uc3QgbW9iaWxlID0gaXNNb2JpbGVBb3NWaWV3cG9ydCgpO1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlZE1vdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXM7XG4gICAgICAgICAgICBBT1MuaW5pdCh7XG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICAgICAgLy8gTW9iaWxlIDogZMOpY2xlbmNoZW1lbnQgcGx1cyB0w7R0IChvZmZzZXQgcGx1cyBiYXMpLCBhbmltYXRpb24gcGx1cyBjb3VydGUuXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHJlZHVjZWRNb3Rpb24gPyAwIDogKG1vYmlsZSA/IDUwMCA6IDEwMDApLFxuICAgICAgICAgICAgICAgIG9mZnNldDogbW9iaWxlID8gMjQgOiAxMjAsXG4gICAgICAgICAgICAgICAgdGhyb3R0bGVEZWxheTogbW9iaWxlID8gNDAgOiA5OSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlOiByZWR1Y2VkTW90aW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWFpbkxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYW51cCwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjbGVhbnVwLCA5MDApO1xuICAgIH07XG5cbiAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHBhZ2VMb2FkU3RhcnQ7XG4gICAgY29uc3QgcmVtYWluaW5nID0gTWF0aC5tYXgoMCwgbWluaW11bUxvYWRlckR1cmF0aW9uIC0gZWxhcHNlZCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoaGlkZU1haW5Mb2FkZXIsIHJlbWFpbmluZyk7XG5cbiAgICAkKFwiLmNvcHktdG8tY2xpcGJvYXJkXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0ZXh0VG9Db3B5ID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxpbmsnKTtcbiAgICAgICAgY29uc3QgdGVtcFRleHRhcmVhID0gJCgnPHRleHRhcmVhPicpO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRlbXBUZXh0YXJlYSk7XG4gICAgICAgIHRlbXBUZXh0YXJlYS52YWwodGV4dFRvQ29weSkuc2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIHRlbXBUZXh0YXJlYS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc2VydmF0aW9uTW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLW1vZHVsZScpO1xuICAgIGlmICghcmVzZXJ2YXRpb25Nb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJvb2tGYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1mYWInKTtcbiAgICBjb25zdCBtb2R1bGVIZWlnaHQgPSAxNDU7XG4gICAgbGV0IGluaXRpYWxUb3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtb2R1bGVIZWlnaHQ7XG5cbiAgICBjb25zdCB1cGRhdGVSZXNlcnZhdGlvblN0YXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpc1Bhc3QgPSB3aW5kb3cuc2Nyb2xsWSA+PSBpbml0aWFsVG9wO1xuICAgICAgICByZXNlcnZhdGlvbk1vZHVsZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knLCBpc1Bhc3QpO1xuICAgICAgICBpZiAoYm9va0ZhYikgYm9va0ZhYi5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJywgaXNQYXN0KTtcbiAgICB9O1xuXG4gICAgdXBkYXRlUmVzZXJ2YXRpb25TdGF0ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVSZXNlcnZhdGlvblN0YXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaW5pdGlhbFRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIG1vZHVsZUhlaWdodDtcbiAgICAgICAgdXBkYXRlUmVzZXJ2YXRpb25TdGF0ZSgpO1xuICAgIH0pO1xufSk7IiwiLyoqXG4gKiBBam91dGUgbGEgY2xhc3NlIGlzLWFuaW1hdGVkIGF1eCDDqWzDqW1lbnRzIC5oYXZlLWFuaW1hdGlvbiBsb3JzcXUnaWxzIGVudHJlbnQgZGFucyBsYSB6b25lIHZpc2libGUuXG4gKiBMYSBjbGFzc2Ugbidlc3QgamFtYWlzIHJldGlyw6llIHVuZSBmb2lzIGFqb3V0w6llLlxuICpcbiAqIE9mZnNldCAobWFyZ2UgaW50w6lyaWV1cmUgZHUgYmFzIGR1IHZpZXdwb3J0LCBlbiBweCkgOlxuICogLSBhdHRyaWJ1dCBkYXRhLWFuaW1hdGlvbi1vZmZzZXQgc3VyIGwnw6lsw6ltZW50XG4gKiAtIHNpbm9uIHZhcmlhYmxlIENTUyBow6lyaXTDqWUgLS1oYXZlLWFuaW1hdGlvbi1vZmZzZXQgKGV4LiBzdXIgYm9keS5ob21lcGFnZSlcbiAqIC0gc2lub24gMFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhhdmVBbmltYXRpb24oKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGF2ZS1hbmltYXRpb24nKTtcbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJykpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VPZmZzZXRQeCA9IChlbCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhQXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24tb2Zmc2V0Jyk7XG4gICAgICAgIGlmIChkYXRhQXR0ciAhPT0gbnVsbCAmJiBkYXRhQXR0ciAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KGRhdGFBdHRyLCAxMCk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHBhcnNlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgcGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXcgPSBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhhdmUtYW5pbWF0aW9uLW9mZnNldCcpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IE1hdGgubWF4KDAsIG4pIDogMDtcbiAgICB9O1xuXG4gICAgbm9kZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYW5pbWF0ZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0UHggPSBwYXJzZU9mZnNldFB4KGVsKTtcbiAgICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IGAwcHggMHB4IC0ke29mZnNldFB4fXB4IDBweGA7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgfSk7XG59XG4iLCJjb25zdCBNT0JJTEVfQU9TX01BWF9XSURUSCA9IDk5MTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlQW9zVmlld3BvcnQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke01PQklMRV9BT1NfTUFYX1dJRFRIfXB4KWApLm1hdGNoZXM7XG59XG5cbi8qKlxuICogU3VyIG1vYmlsZSwgbGVzIGRhdGEtYW9zLWRlbGF5ICgyMDDigJM2MDAgbXMpIGFsbG9uZ2VudCB0cm9wIGxhIHPDqXF1ZW5jZSBkJ2FwcGFyaXRpb24uXG4gKiBPbiBsZXMgcsOpZHVpdCBhdmFudCBBT1MuaW5pdCBwb3VyIGdhcmRlciB1biBsw6lnZXIgZMOpY2FsYWdlIHNhbnMgZW1waWxlciBsZXMgYXR0ZW50ZXMuXG4gKiBBcHBlbMOpIHVuZSBzZXVsZSBmb2lzLCBhdmFudCBBT1MuaW5pdCwgYXByw6hzIHF1ZSBsZSBET00gZXN0IGNvbXBsZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUoKSB7XG4gICAgaWYgKCFpc01vYmlsZUFvc1ZpZXdwb3J0KCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hb3MtZGVsYXldJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgY29uc3QgcmF3ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScpO1xuICAgICAgICBpZiAocmF3ID09PSBudWxsIHx8IHJhdyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ID0gcGFyc2VJbnQocmF3LCAxMCk7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHYpIHx8IHYgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjYWxlZCA9IE1hdGgubWluKDkwLCBNYXRoLnJvdW5kKHYgKiAwLjIyKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknLCBTdHJpbmcoTWF0aC5tYXgoMCwgc2NhbGVkKSkpO1xuICAgIH0pO1xufVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc2VsZWN0aXplL2Rpc3QvanMvc3RhbmRhbG9uZS9zZWxlY3RpemUubWluLmpzJyk7XG4vLyBTdHlsZXMgU2VsZWN0aXplIDogaW1wb3J0w6lzIGRhbnMgYXBwLnNjc3MgKGVudHLDqWUgwqsgZGVmYXVsdCDCuyksIHNpbm9uIGlscyBuZSBzb250IHBhcyBjaGFyZ8OpcyAoc2V1bCBkZWZhdWx0IGzigJllc3QgZGFucyBiYXNlLmh0bWwudHdpZykuXG5cbmNvbnN0IGNvdW50cmllcyA9IHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcycpO1xuY29uc3QgZW5Mb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpO1xuY29uc3QgZnJMb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZnIuanNvbicpO1xuXG5jb3VudHJpZXMucmVnaXN0ZXJMb2NhbGUoZW5Mb2NhbGUpO1xuY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKGZyTG9jYWxlKTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuICAgIG1vZGFsOiAnW2RhdGEtbmV3c2xldHRlci1tb2RhbF0nLFxuICAgIHRyaWdnZXI6ICdbZGF0YS1uZXdzbGV0dGVyLXRyaWdnZXJdJyxcbiAgICBjbG9zZTogJ1tkYXRhLW5ld3NsZXR0ZXItY2xvc2VdJyxcbiAgICBmb3JtOiAnW2RhdGEtbmV3c2xldHRlci1mb3JtXScsXG4gICAgZmVlZGJhY2s6ICdbZGF0YS1uZXdzbGV0dGVyLWZlZWRiYWNrXScsXG4gICAgY2FwdGNoYTogJ1tkYXRhLW5ld3NsZXR0ZXItY2FwdGNoYV0nLFxuICAgIGNvdW50cnlTZWxlY3Q6ICdbZGF0YS1uZXdzbGV0dGVyLWNvdW50cnldJyxcbn07XG5cbmNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XG5jb25zdCBCT0RZX09QRU5fQ0xBU1MgPSAnaGFzLW5ld3NsZXR0ZXItb3Blbic7XG5jb25zdCBTVUNDRVNTX0ZPUk1fQ0xBU1MgPSAnaXMtc3VjY2Vzcy1zdGF0ZSc7XG5cbi8qKlxuICogTGlzdGUgdW5pcXVlIGRlIHRvdXMgbGVzIHBheXMgLyB0ZXJyaXRvaXJlcyBJU08sIHRyaSBhbHBoYWLDqXRpcXVlIHNlbG9uIGxhIGxhbmd1ZSBk4oCZYWZmaWNoYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTG9jYWxlXG4gKiBAcmV0dXJucyB7eyBvcHRpb25zOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIGNvZGVzOiBTZXQ8c3RyaW5nPiwgZmxhdEZvck5hdGl2ZTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4gfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKSB7XG4gICAgY29uc3QgbGFuZyA9IHBhZ2VMb2NhbGUgPT09ICdlbicgPyAnZW4nIDogJ2ZyJztcbiAgICBjb25zdCBvZmZpY2lhbCA9IGNvdW50cmllcy5nZXROYW1lcyhsYW5nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KTtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmtleXMob2ZmaWNpYWwpLm1hcCgoY29kZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IGNvZGUsXG4gICAgICAgIHRleHQ6IG9mZmljaWFsW2NvZGVdLFxuICAgIH0pKTtcblxuICAgIG9wdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS50ZXh0LmxvY2FsZUNvbXBhcmUoYi50ZXh0LCBsYW5nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSksXG4gICAgKTtcbiAgICBvcHRzLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICAgICAgby4kb3JkZXIgPSBpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29kZXMgPSBuZXcgU2V0KG9wdHMubWFwKChvKSA9PiBvLnZhbHVlKSk7XG4gICAgY29uc3QgZmxhdEZvck5hdGl2ZSA9IG9wdHMubWFwKCh7IHZhbHVlLCB0ZXh0IH0pID0+ICh7IHZhbHVlLCB0ZXh0IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdHMsXG4gICAgICAgIGNvZGVzLFxuICAgICAgICBmbGF0Rm9yTmF0aXZlLFxuICAgIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGNvZGVzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUoZm9ybSwgY29kZXMpIHtcbiAgICAvLyAxKSBTdWdnZXN0aW9uIFN5bWZvbnkgKENGLUlQQ291bnRyeSwgZMOpZmF1dCBQRiwg4oCmKSDigJQgcHJpb3JpdGFpcmUgOiBzaW5vbiB1bmUgbG9jYWxlIG5hdmlnYXRldXIgwqsgZW4tVVMgwrtcbiAgICAvLyAgICBmYWlzYWl0IGNob2lzaXIgVVMgYXZhbnQgbcOqbWUgZGUgbGlyZSBkYXRhLXN1Z2dlc3RlZC1jb3VudHJ5ICg9IFBGIGhvcnMgQ0ROKS5cbiAgICBjb25zdCBzZXJ2ZXIgPSAoZm9ybS5kYXRhc2V0LnN1Z2dlc3RlZENvdW50cnkgfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChzZXJ2ZXIgJiYgY29kZXMuaGFzKHNlcnZlcikpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlcjtcbiAgICB9XG5cbiAgICAvLyAyKSBTZWNvdXJzIDogcsOpZ2lvbiBuYXZpZ2F0ZXVyIChlbi1VUyDihpIgVVMsIOKApiksIHNhdWYgZnItRlIgKMKrIEZyYW5jZSDCuyBuZSBkb2l0IHBhcyBwYXNzZXIgYXZhbnQgbGUgZMOpZmF1dCBtw6l0aWVyIHNhbnMgc2VydmV1cilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsaXN0ID1cbiAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzIHx8IFtuYXZpZ2F0b3IubGFuZ3VhZ2VdXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgZm9yIChjb25zdCByYXcgb2YgbGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IC9eW2Etel17Mn0tKFtBLVpdezJ9KSQvLmV4ZWMoU3RyaW5nKHJhdykucmVwbGFjZSgnXycsICctJykpO1xuICAgICAgICAgICAgaWYgKCFtIHx8ICFjb2Rlcy5oYXMobVsxXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnRlInKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG5cbiAgICAvLyAzKSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2UgcGFyIGTDqWZhdXRcbiAgICBpZiAoY29kZXMuaGFzKCdQRicpKSB7XG4gICAgICAgIHJldHVybiAnUEYnO1xuICAgIH1cbiAgICBpZiAoY29kZXMuaGFzKCdGUicpKSB7XG4gICAgICAgIHJldHVybiAnRlInO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvZGVzKVswXSA/PyAnUEYnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsXG4gKiBAcGFyYW0ge0FycmF5PHsgdmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nIH0+fSBmbGF0T3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVOYXRpdmVDb3VudHJ5U2VsZWN0KHNlbGVjdEVsLCBmbGF0T3B0aW9ucywgaW5pdGlhbCkge1xuICAgIHNlbGVjdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgbyBvZiBmbGF0T3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gby52YWx1ZTtcbiAgICAgICAgb3B0LnRleHRDb250ZW50ID0gby50ZXh0O1xuICAgICAgICBpZiAoby52YWx1ZSA9PT0gaW5pdGlhbCkge1xuICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiBpbml0Q291bnRyeVNlbGVjdGl6ZShmb3JtKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNvdW50cnlTZWxlY3QpO1xuICAgIGlmICghc2VsZWN0RWwgfHwgIShzZWxlY3RFbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUxvY2FsZSA9IGZvcm0uZGF0YXNldC5wYWdlTG9jYWxlIHx8ICdmcic7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmb3JtLmRhdGFzZXQuY291bnRyeVBsYWNlaG9sZGVyIHx8ICcnO1xuXG4gICAgbGV0IGJ1aWx0O1xuICAgIHRyeSB7XG4gICAgICAgIGJ1aWx0ID0gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBMaXN0ZSBwYXlzIChpMThuLWlzby1jb3VudHJpZXMpJywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9wdGlvbnMsIGNvZGVzLCBmbGF0Rm9yTmF0aXZlIH0gPSBidWlsdDtcbiAgICBjb25zdCBpbml0aWFsID0gcmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZShmb3JtLCBjb2Rlcyk7XG5cbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnIHx8ICEkLmZuLnNlbGVjdGl6ZSkge1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0RWwpO1xuICAgIGlmICgkc2VsZWN0WzBdLnNlbGVjdGl6ZSkge1xuICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGl0ZW1zOiBbaW5pdGlhbF0sXG4gICAgICAgICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxuICAgICAgICAgICAgbGFiZWxGaWVsZDogJ3RleHQnLFxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsndGV4dCddLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBtYXhJdGVtczogMSxcbiAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd0VtcHR5T3B0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogW3sgZmllbGQ6ICckb3JkZXInLCBkaXJlY3Rpb246ICdhc2MnIH1dLFxuICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JyxcbiAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzZWxlY3RpemUtY29udHJvbCBuZXdzbGV0dGVyLWNvdW50cnktc2VsZWN0aXplJyxcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RpemUtZHJvcGRvd24gbmV3c2xldHRlci1jb3VudHJ5LWRyb3Bkb3duJyxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBTZWxlY3RpemUnLCBlcnIpO1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdCA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gaW5zdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKSB7XG4gICAgaWYgKGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtLl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5oaWRkZW4gPSBmYWxzZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQk9EWV9PUEVOX0NMQVNTKTtcblxuICAgIGNvbnN0IG1haW4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXdzbGV0dGVyLW1haW5dJyk7XG4gICAgY29uc3QgZmlyc3RGaWVsZCA9IG1haW4gJiYgbWFpbi5xdWVyeVNlbGVjdG9yKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJyk7XG4gICAgaWYgKGZpcnN0RmllbGQpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmaXJzdEZpZWxkLmZvY3VzKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIG1vZGFsLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1BFTl9DTEFTUyk7XG5cbiAgICBjb25zdCBmZWVkYmFjayA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmZlZWRiYWNrKTtcbiAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycsICdpcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgbW9kYWwpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZlZWRiYWNrID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZmVlZGJhY2spO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IChmb3JtRGF0YS5nZXQoJ2VtYWlsJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2ZpcnN0TmFtZScpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2xhc3ROYW1lJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGNvdW50cnkgPSAoZm9ybURhdGEuZ2V0KCdjb3VudHJ5JykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IChmb3JtLmRhdGFzZXQucGFnZUxvY2FsZSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQubG9jYWxlIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3QgZ2VuZXJpY0Vycm9yTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5nZW5lcmljRXJyb3IgfHwgJ1VuZSBlcnJldXIgc1xcJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmQuJztcbiAgICBjb25zdCBpbmNvbXBsZXRlTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5pbmNvbXBsZXRlRXJyb3IgfHwgJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIGNvcnJlY3RlbWVudC4nO1xuICAgIGNvbnN0IHJlY2FwdGNoYUVuYWJsZWQgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhRW5hYmxlZCA9PT0gJzEnO1xuICAgIGNvbnN0IHJlY2FwdGNoYVNpdGVLZXkgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhU2l0ZUtleSB8fCAnJztcbiAgICBjb25zdCBjYXB0Y2hhSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNhcHRjaGEpO1xuXG4gICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnLCAnaXMtZXJyb3InKTtcbiAgICB9XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFNVQ0NFU1NfRk9STV9DTEFTUyk7XG5cbiAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCB8fCAhZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSB8fCAhY291bnRyeSkge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gaW5jb21wbGV0ZU1lc3NhZ2U7XG4gICAgICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2FwdGNoYVRva2VuID0gJyc7XG4gICAgaWYgKHJlY2FwdGNoYUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ3JlY2FwdGNoYSB8fCB0eXBlb2Ygd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCByZWNhcHRjaGFTaXRlS2V5ID09PSAnJykge1xuICAgICAgICAgICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXB0Y2hhVG9rZW4gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZShyZWNhcHRjaGFTaXRlS2V5LCB7IGFjdGlvbjogJ25ld3NsZXR0ZXJfc3Vic2NyaWJlJyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGNoYUlucHV0KSB7XG4gICAgICAgIGNhcHRjaGFJbnB1dC52YWx1ZSA9IGNhcHRjaGFUb2tlbjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYXB0Y2hhOiBjYXB0Y2hhVG9rZW4sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCBwYXlsb2FkLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IHBheWxvYWQubWVzc2FnZSB8fCBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gcGF5bG9hZC5tZXNzYWdlIHx8ICdUaGFua3Mg4oCUIHlvdSBhcmUgb24gdGhlIGxpc3QuJztcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbbmV3c2xldHRlcl0gRXJyZXVyIHLDqXNlYXUgb3UgaW5hdHRlbmR1ZSBsb3JzIGRlIGxhIHNvdW1pc3Npb24nLCBlcnJvcik7XG4gICAgICAgIGlmIChmZWVkYmFjaykge1xuICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaXMtZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMubW9kYWwpO1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW25ld3NsZXR0ZXJdIEluaXRpYWxpc2F0aW9uIGR1IHPDqWxlY3RldXIgcGF5cyBpbXBvc3NpYmxlIChkw6lwZW5kYW5jZXMgbWFucXVhbnRlcyA/IHlhcm4gaW5zdGFsbCknLCBlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBoYW5kbGVTdWJtaXQoZXZlbnQsIG1vZGFsKSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy50cmlnZ2VyKTtcbiAgICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy5jbG9zZSkgJiYgbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhPUEVOX0NMQVNTKSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcbn0gZWxzZSB7XG4gICAgaW5pdCgpO1xufVxuIiwiaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuaW1wb3J0IHsgRnJlbmNoIH0gZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qcyc7XG5pbXBvcnQgZW5nbGlzaCBmcm9tICdmbGF0cGlja3IvZGlzdC9sMTBuL2RlZmF1bHQuanMnO1xuXG4vKipcbiAqIEZsYXRwaWNrciBwYXJjb3VydCBkb2N1bWVudC5zdHlsZVNoZWV0cyBldCBsaXQgc2hlZXQuY3NzUnVsZXMgOyBzdXIgdW5lIGZldWlsbGUgY3Jvc3Mtb3JpZ2luXG4gKiAoZXguIEdvb2dsZSBGb250cyksIGzigJlhY2PDqHMgbMOodmUgU2VjdXJpdHlFcnJvciBhdmFudCBtw6ptZSBsZSB0cnkvY2F0Y2ggaW50ZXJuZS5cbiAqIFVuZSBmZXVpbGxlIDxzdHlsZT4gbG9jYWxlIGVuIHTDqnRlIGR1IDxoZWFkPiBnYXJhbnRpdCBxdWUgbGEgcHJlbWnDqHJlIGZldWlsbGUgZXN0IGxpc2libGUuXG4gKi9cbmZ1bmN0aW9uIHByZXBlbmRMb2NhbFN0eWxlc2hlZXRIb29rKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhdHBpY2tyLWxvY2FsLXN0eWxlc2hlZXQtaG9vaycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsLmlkID0gJ2ZsYXRwaWNrci1sb2NhbC1zdHlsZXNoZWV0LWhvb2snO1xuICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcvKiBmbGF0cGlja3I6IGZldWlsbGUgbG9jYWxlIHBvdXIgYWNjw6hzIGNzc1J1bGVzICovJykpO1xuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgbXMpIHtcbiAgICBsZXQgdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9LCBtcyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRTdHJpY3QodiwgZmFsbGJhY2spIHtcbiAgICBjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHYpLCAxMCk7XG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBmYWxsYmFjaztcbn1cblxuLyoqIExvY2FsZSBJU08gMiBsZXR0cmVzIGRlcHVpcyBsZSBIVE1MIChTeW1mb255IDogbGFuZyArIGRhdGEtbG9jYWxlIHN1ciA8aHRtbD4gb3UgPGJvZHk+KS4gKi9cbmZ1bmN0aW9uIGdldFNpdGVMb2NhbGUoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgcmF3ID1cbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpIHx8XG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnbGFuZycpIHx8XG4gICAgICAgIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpKSB8fFxuICAgICAgICAnZnInO1xuICAgIHJldHVybiBTdHJpbmcocmF3KS50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJylbMF07XG59XG5cbmZ1bmN0aW9uIGdldEZsYXRwaWNrckxvY2FsZSgpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRTaXRlTG9jYWxlKCk7XG4gICAgaWYgKGxvYyA9PT0gJ2ZyJykge1xuICAgICAgICByZXR1cm4gRnJlbmNoO1xuICAgIH1cbiAgICByZXR1cm4gZW5nbGlzaDtcbn1cblxuLyoqIEB0eXBlZGVmIHt7IGFkdWx0c19vbmU6IHN0cmluZywgYWR1bHRzOiBzdHJpbmcsIGtpZF9vbmU6IHN0cmluZywga2lkczogc3RyaW5nLCBzZXA6IHN0cmluZyB9fSBHdWVzdHNTdW1tYXJ5STE4biAqL1xuXG4vKiogUmVtcGxhY2UgbGUgbWFycXVldXIgX19DT1VOVF9fIChpc3N1IGRlcyBmaWNoaWVycyBkZSB0cmFkdWN0aW9uIFN5bWZvbnkpLiAqL1xuZnVuY3Rpb24gYXBwbHlDb3VudFRlbXBsYXRlKHRlbXBsYXRlLCBjb3VudCkge1xuICAgIHJldHVybiBTdHJpbmcodGVtcGxhdGUpLnNwbGl0KCdfX0NPVU5UX18nKS5qb2luKFN0cmluZyhjb3VudCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBhZHVsdHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBraWRzXG4gKiBAcGFyYW0ge0d1ZXN0c1N1bW1hcnlJMThuIHwgbnVsbH0gaTE4blxuICovXG5mdW5jdGlvbiBmb3JtYXRHdWVzdFN1bW1hcnkoYWR1bHRzLCBraWRzLCBpMThuKSB7XG4gICAgY29uc3QgdCA9XG4gICAgICAgIGkxOG4gfHxcbiAgICAgICAgLyoqIEB0eXBlIHtHdWVzdHNTdW1tYXJ5STE4bn0gKi8gKHtcbiAgICAgICAgICAgIGFkdWx0c19vbmU6ICcxIGFkdWx0JyxcbiAgICAgICAgICAgIGFkdWx0czogJ19fQ09VTlRfXyBhZHVsdHMnLFxuICAgICAgICAgICAga2lkX29uZTogJzEga2lkJyxcbiAgICAgICAgICAgIGtpZHM6ICdfX0NPVU5UX18ga2lkcycsXG4gICAgICAgICAgICBzZXA6ICcgwrcgJyxcbiAgICAgICAgfSk7XG4gICAgY29uc3QgYUxhYmVsID0gYWR1bHRzID09PSAxID8gdC5hZHVsdHNfb25lIDogYXBwbHlDb3VudFRlbXBsYXRlKHQuYWR1bHRzLCBhZHVsdHMpO1xuICAgIGlmIChraWRzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhTGFiZWw7XG4gICAgfVxuICAgIGNvbnN0IGtMYWJlbCA9IGtpZHMgPT09IDEgPyB0LmtpZF9vbmUgOiBhcHBseUNvdW50VGVtcGxhdGUodC5raWRzLCBraWRzKTtcbiAgICByZXR1cm4gYUxhYmVsICsgdC5zZXAgKyBrTGFiZWw7XG59XG5cbmZ1bmN0aW9uIGluaXRSZXNlcnZhdGlvbkhlcm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLXJlc2VydmF0aW9uLWZvcm0nKTtcbiAgICBjb25zdCBkYXRlc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzZXJ2YXRpb24tZGF0ZXNdJyk7XG4gICAgY29uc3QgY2FsZW5kYXJNb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jYWxlbmRhci1tb3VudCcpO1xuICAgIGNvbnN0IGFuY2hvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWZsYXRwaWNrci1hbmNob3InKTtcbiAgICBjb25zdCBjaGVja2luSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWNoZWNraW4nKTtcbiAgICBjb25zdCBjaGVja291dEhpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja291dCcpO1xuICAgIGNvbnN0IGNoZWNraW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWNoZWNraW4tZGlzcGxheScpO1xuICAgIGNvbnN0IGNoZWNrb3V0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja291dC1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBndWVzdHNNb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1ndWVzdHMtcG9wb3Zlci1tb3VudCcpO1xuICAgIGNvbnN0IGd1ZXN0c1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlX19pdGVtW2RhdGEtcmVzZXJ2YXRpb24tZmllbGQ9XCJndWVzdHNcIl0nKTtcbiAgICBjb25zdCBndWVzdHNTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWd1ZXN0cy1zdW1tYXJ5Jyk7XG4gICAgY29uc3QgYWR1bHRzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWFkdWx0cycpO1xuICAgIGNvbnN0IGtpZHNIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24ta2lkcycpO1xuICAgIGNvbnN0IGd1ZXN0c0RvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tZ3Vlc3RzLWRvbmUnKTtcblxuICAgIGlmICghZm9ybSB8fCAhZGF0ZXNCbG9jayB8fCAhY2FsZW5kYXJNb3VudCB8fCAhYW5jaG9yRWwgfHwgIWNoZWNraW5IaWRkZW4gfHwgIWNoZWNrb3V0SGlkZGVuIHx8ICFjaGVja2luRGlzcGxheSB8fCAhY2hlY2tvdXREaXNwbGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge0d1ZXN0c1N1bW1hcnlJMThuIHwgbnVsbH0gKi9cbiAgICBsZXQgZ3Vlc3RzU3VtbWFyeUkxOG4gPSBudWxsO1xuICAgIGNvbnN0IGkxOG5SYXcgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdHMtc3VtbWFyeS1pMThuJyk7XG4gICAgaWYgKGkxOG5SYXcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnlJMThuID0gSlNPTi5wYXJzZShpMThuUmF3KTtcbiAgICAgICAgfSBjYXRjaCAoX2UpIHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnlJMThuID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXBlbmRMb2NhbFN0eWxlc2hlZXRIb29rKCk7XG5cbiAgICBsZXQgZnAgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gbG9ja1llYXJJbnB1dHMoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSB8fCAhaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5jdXIteWVhcicpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxlbmRhckhvb2sgPSBmdW5jdGlvbiAoX3NlbGVjdGVkRGF0ZXMsIF9kYXRlU3RyLCBpbnN0YW5jZSkge1xuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uLWZsYXRwaWNrci1jYWxlbmRhcicpO1xuICAgICAgICB9XG4gICAgICAgIGxvY2tZZWFySW5wdXRzKGluc3RhbmNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2hvd01vbnRoc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA2NDAgPyAxIDogMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jRnJvbVNlbGVjdGlvbihzZWxlY3RlZERhdGVzLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBmbXRZbWQgPSAnWS1tLWQnO1xuICAgICAgICBjb25zdCBmbXRVaSA9ICdqIE0gWSc7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGNoZWNraW5IaWRkZW4udmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMF0sIGZtdFltZCk7XG4gICAgICAgICAgICBjaGVja2luRGlzcGxheS52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1swXSwgZm10VWkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tpbkhpZGRlbi52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY2hlY2tpbkRpc3BsYXkudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBjaGVja291dEhpZGRlbi52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1sxXSwgZm10WW1kKTtcbiAgICAgICAgICAgIGNoZWNrb3V0RGlzcGxheS52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1sxXSwgZm10VWkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tvdXRIaWRkZW4udmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNoZWNrb3V0RGlzcGxheS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRmxhdHBpY2tyKCkge1xuICAgICAgICBpZiAoZnApIHtcbiAgICAgICAgICAgIHJldHVybiBmcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZwID0gZmxhdHBpY2tyKGFuY2hvckVsLCB7XG4gICAgICAgICAgICBtb2RlOiAncmFuZ2UnLFxuICAgICAgICAgICAgLy8gdHJ1ZSBkw6ljbGVuY2hlIGZvY3VzQW5kQ2xvc2UoKSDihpIgZm9jdXMgc3VyIGzigJlpbnB1dCBjYWNow6kg4oaSIHpvb20gaU9TIChXZWJLaXQpIGF1IDLhtYkgam91ci5cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgLy8gaW5saW5lIDogb3BlbigpIGVzdCBub29wLCBtYWlzIMOpdml0ZSB0b3V0IGxpc3RlbmVyIGZvY3VzL2NsaWMgaW51dGlsZSBzdXIgbOKAmWFuY3JlLlxuICAgICAgICAgICAgY2xpY2tPcGVuczogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9udGhzOiBzaG93TW9udGhzQ291bnQoKSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBjYWxlbmRhck1vdW50LFxuICAgICAgICAgICAgZGlzYWJsZU1vYmlsZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pbkRhdGU6ICd0b2RheScsXG4gICAgICAgICAgICBsb2NhbGU6IE9iamVjdC5hc3NpZ24oe30sIGdldEZsYXRwaWNrckxvY2FsZSgpLCB7IGZpcnN0RGF5T2ZXZWVrOiAxIH0pLFxuICAgICAgICAgICAgbW9udGhTZWxlY3RvclR5cGU6ICdzdGF0aWMnLFxuICAgICAgICAgICAgb25SZWFkeTogY2FsZW5kYXJIb29rLFxuICAgICAgICAgICAgb25Nb250aENoYW5nZTogZnVuY3Rpb24gKF9zZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhpbnN0YW5jZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChzZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzeW5jRnJvbVNlbGVjdGlvbihzZWxlY3RlZERhdGVzLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZXMubGVuZ3RoID49IDIgJiYgY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNoZWNraW5IaWRkZW4udmFsdWUgJiYgY2hlY2tvdXRIaWRkZW4udmFsdWUpIHtcbiAgICAgICAgICAgIGZwLnNldERhdGUoW2NoZWNraW5IaWRkZW4udmFsdWUsIGNoZWNrb3V0SGlkZGVuLnZhbHVlXSwgZmFsc2UpO1xuICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oZnAuc2VsZWN0ZWREYXRlcywgZnApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmcCkge1xuICAgICAgICAgICAgICAgIGZwLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIGxvY2tZZWFySW5wdXRzKGZwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZwO1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck9wZW4gPSBmYWxzZTtcbiAgICBsZXQgZ3Vlc3RzT3BlbiA9IGZhbHNlO1xuICAgIGxldCBzdXBwcmVzc05leHREb2NDbGljayA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gaXNTdGlja3lNb2R1bGUoKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1tb2R1bGUnKTtcbiAgICAgICAgcmV0dXJuICEhKG1vZHVsZSAmJiBtb2R1bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1zdGlja3knKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzKCkge1xuICAgICAgICBjYWxlbmRhck1vdW50LmNsYXNzTGlzdC50b2dnbGUoJ3Jlc2VydmF0aW9uLW1vZHVsZV9fY2FsZW5kYXItbW91bnQtLXN0aWNreScsIGlzU3RpY2t5TW9kdWxlKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKSB7XG4gICAgICAgIGlmIChndWVzdHNNb3VudCkge1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuY2xhc3NMaXN0LnRvZ2dsZSgncmVzZXJ2YXRpb24tbW9kdWxlX19ndWVzdHMtcG9wb3Zlci1tb3VudC0tc3RpY2t5JywgaXNTdGlja3lNb2R1bGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQWxpZ25lIGxlIGJvcmQgZHJvaXQgZHUgcG9wb3ZlciBzdXIgbGUgY2hhbXAgR3Vlc3RzIChtb250YWdlID0gZW5mYW50IGR1IG1vZHVsZSwgY29tbWUgbGUgY2FsZW5kcmllcikuICovXG4gICAgZnVuY3Rpb24gc3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKCFndWVzdHNNb3VudCB8fCAhZ3Vlc3RzVHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1tb2R1bGUnKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5yaWdodCA9ICcnO1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG0gPSBtb2R1bGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHQgPSBndWVzdHNUcmlnZ2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5yaWdodCA9IE1hdGgubWF4KDAsIG0ucmlnaHQgLSB0LnJpZ2h0KSArICdweCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJHdWVzdHNQb3BvdmVyUG9zaXRpb24oKSB7XG4gICAgICAgIGlmIChndWVzdHNNb3VudCkge1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUucmlnaHQgPSAnJztcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGZwKSB7XG4gICAgICAgICAgICAgICAgZnAuc2V0KCdzaG93TW9udGhzJywgc2hvd01vbnRoc0NvdW50KCkpO1xuICAgICAgICAgICAgICAgIGZwLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIGxvY2tZZWFySW5wdXRzKGZwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICAgICAgICAgIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKSxcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdzY3JvbGwnLFxuICAgICAgICBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzKCk7XG4gICAgICAgICAgICBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgIH0sIDUwKSxcbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0sXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5DYWxlbmRhcigpIHtcbiAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzKCk7XG4gICAgICAgIGNhbGVuZGFyTW91bnQuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgICAgICBkYXRlc0Jsb2NrLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIGNhbGVuZGFyT3BlbiA9IHRydWU7XG4gICAgICAgIHN1cHByZXNzTmV4dERvY0NsaWNrID0gdHJ1ZTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlRmxhdHBpY2tyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQ2FsZW5kYXIoKSB7XG4gICAgICAgIGNhbGVuZGFyTW91bnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgICAgICBkYXRlc0Jsb2NrLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBjYWxlbmRhck9wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkYXRlc0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5mbGF0cGlja3ItY2FsZW5kYXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucmVzZXJ2YXRpb24tbW9kdWxlX19jYWxlbmRhci1tb3VudCcpICYmICFlLnRhcmdldC5jbG9zZXN0KCcuZmxhdHBpY2tyLWNhbGVuZGFyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbkNhbGVuZGFyKCk7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gR3Vlc3RzIHBvcG92ZXIgKHN0ZXBwZXJzICsgY2hhbXBzIGNhY2jDqXMgYWR1bHRzIC8ga2lkcylcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gZ2V0QWR1bHRzS2lkcygpIHtcbiAgICAgICAgY29uc3QgYSA9IGFkdWx0c0hpZGRlbiA/IHBhcnNlSW50U3RyaWN0KGFkdWx0c0hpZGRlbi52YWx1ZSwgMikgOiAyO1xuICAgICAgICBjb25zdCBrID0ga2lkc0hpZGRlbiA/IHBhcnNlSW50U3RyaWN0KGtpZHNIaWRkZW4udmFsdWUsIDApIDogMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkdWx0czogTWF0aC5taW4oMTIsIE1hdGgubWF4KDEsIGEpKSxcbiAgICAgICAgICAgIGtpZHM6IE1hdGgubWluKDEwLCBNYXRoLm1heCgwLCBrKSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0d1ZXN0U3RlcHBlclVpKCkge1xuICAgICAgICBjb25zdCB7IGFkdWx0cywga2lkcyB9ID0gZ2V0QWR1bHRzS2lkcygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ndWVzdC1zdGVwcGVyXScpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdC1zdGVwcGVyJyk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JyksIDk5KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGtleSA9PT0gJ2FkdWx0cycgPyBhZHVsdHMgOiBraWRzO1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwcGVyLXZhbHVlXScpO1xuICAgICAgICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gU3RyaW5nKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkb3duID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWd1ZXN0LXN0ZXA9XCJkb3duXCJdJyk7XG4gICAgICAgICAgICBjb25zdCB1cCA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwPVwidXBcIl0nKTtcbiAgICAgICAgICAgIGlmIChkb3duKSB7XG4gICAgICAgICAgICAgICAgZG93bi5kaXNhYmxlZCA9IHZhbCA8PSBtaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXApIHtcbiAgICAgICAgICAgICAgICB1cC5kaXNhYmxlZCA9IHZhbCA+PSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3Vlc3RzU3VtbWFyeSkge1xuICAgICAgICAgICAgZ3Vlc3RzU3VtbWFyeS50ZXh0Q29udGVudCA9IGZvcm1hdEd1ZXN0U3VtbWFyeShhZHVsdHMsIGtpZHMsIGd1ZXN0c1N1bW1hcnlJMThuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFkdWx0c0tpZHMoYWR1bHRzLCBraWRzKSB7XG4gICAgICAgIGlmIChhZHVsdHNIaWRkZW4pIHtcbiAgICAgICAgICAgIGFkdWx0c0hpZGRlbi52YWx1ZSA9IFN0cmluZyhNYXRoLm1pbigxMiwgTWF0aC5tYXgoMSwgYWR1bHRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChraWRzSGlkZGVuKSB7XG4gICAgICAgICAgICBraWRzSGlkZGVuLnZhbHVlID0gU3RyaW5nKE1hdGgubWluKDEwLCBNYXRoLm1heCgwLCBraWRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNHdWVzdFN0ZXBwZXJVaSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5HdWVzdHMoKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICBndWVzdHNNb3VudC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gICAgICAgIGd1ZXN0c01vdW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBndWVzdHNPcGVuID0gdHJ1ZTtcbiAgICAgICAgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSB0cnVlO1xuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VHdWVzdHMoKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBndWVzdHNNb3VudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIGd1ZXN0c01vdW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBjbGVhckd1ZXN0c1BvcG92ZXJQb3NpdGlvbigpO1xuICAgICAgICBndWVzdHNUcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBndWVzdHNUcmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBndWVzdHNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlR3Vlc3RzKCkge1xuICAgICAgICBpZiAoZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgY2xvc2VHdWVzdHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wZW5HdWVzdHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChndWVzdHNNb3VudCAmJiBndWVzdHNUcmlnZ2VyICYmIGFkdWx0c0hpZGRlbiAmJiBraWRzSGlkZGVuKSB7XG4gICAgICAgIHN5bmNHdWVzdFN0ZXBwZXJVaSgpO1xuXG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gTGVzICsvLSBldCDCqyBEb25lIMK7IHNvbnQgZGFucyBs4oCZaXRlbSBtYWlzIGhvcnMgZHUgcsOpc3Vtw6kgOiBuZSBwYXMgdHJhaXRlciBjb21tZSBvdXZlcnR1cmUvZmVybWV0dXJlIGR1IHRyaWdnZXJcbiAgICAgICAgICAgIGlmIChndWVzdHNNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVHdWVzdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJyAmJiBlLmtleSAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGd1ZXN0c01vdW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUd1ZXN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ndWVzdC1zdGVwcGVyXScpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1ndWVzdC1zdGVwXScpO1xuICAgICAgICAgICAgICAgIGlmICghYnRuIHx8IGJ0bi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3Vlc3Qtc3RlcHBlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJyksIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JyksIDk5KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFkdWx0cywga2lkcyB9ID0gZ2V0QWR1bHRzS2lkcygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdC1zdGVwJykgPT09ICd1cCcgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FkdWx0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGFkdWx0cyArIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA8IG1pbiB8fCBuZXh0ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0QWR1bHRzS2lkcyhuZXh0LCBraWRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2tpZHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBraWRzICsgZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0IDwgbWluIHx8IG5leHQgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRBZHVsdHNLaWRzKGFkdWx0cywgbmV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChndWVzdHNEb25lKSB7XG4gICAgICAgICAgICBndWVzdHNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc3VwcHJlc3NOZXh0RG9jQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBzdXBwcmVzc05leHREb2NDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZXNCbG9jay5jb250YWlucyhlLnRhcmdldCkgfHwgY2FsZW5kYXJNb3VudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3Vlc3RzT3BlbiAmJiBndWVzdHNNb3VudCAmJiBndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGd1ZXN0c1RyaWdnZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGd1ZXN0c01vdW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRydWUsXG4gICAgKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgIT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlR3Vlc3RzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlc2VydmF0aW9uSGVybyk7XG59IGVsc2Uge1xuICAgIGluaXRSZXNlcnZhdGlvbkhlcm8oKTtcbn1cbiIsImltcG9ydCB7IGluaXRIYXZlQW5pbWF0aW9uIH0gZnJvbSAnLi9oYXZlLWFuaW1hdGlvbic7XG5cbiQoZnVuY3Rpb24oJCkge1xuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAvLyBNZW51XG4gICAgbGV0ICRkcm9wZG93biA9ICQoJy5kcm9wZG93bicpO1xuICAgIGxldCAkbWFpbk5hdkJhciA9ICQoJyNuYXZiYXJTdXBwb3J0ZWRDb250ZW50Jyk7XG4gICAgbGV0ICRwcmV2aW91c21lbnUgPSAkKCcucHJldmlvdXNtZW51Jyk7XG5cbiAgICAkKCcuZHJvcGRvd24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAkcHJldmlvdXNtZW51LmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICRtYWluTmF2QmFyLmFkZENsYXNzKCdzdWJtZW51X3Nob3cnKTtcbiAgICB9KTtcblxuICAgICRib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghJGRyb3Bkb3duLmlzKGUudGFyZ2V0KSAmJiAkZHJvcGRvd24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgIGlmICgkbWFpbk5hdkJhci5maW5kKFwiLmRyb3Bkb3duLnNob3dcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJHByZXZpb3VzbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICRtYWluTmF2QmFyLnJlbW92ZUNsYXNzKCdzdWJtZW51X3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJCgnLnNlYXJjaF9ibG9jaycpLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAhJCgnLnNob3dfc2VhcmNoJykuaXMoZS50YXJnZXQpICYmICEkKCcuc2VhcmNoX2Jsb2NrJykuaXMoZS50YXJnZXQpICYmICQoJy5zZWFyY2hfYmxvY2snKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJCgnLnNlYXJjaF9ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJG1haW5OYXZCYXIub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICRwcmV2aW91c21lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgJG1haW5OYXZCYXIucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnVfc2hvdycpO1xuICAgIH0pO1xuXG4gICAgJG1haW5OYXZCYXIub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbWFpbk5hdkJhci5yZW1vdmVDbGFzcygnc3VibWVudV9zaG93Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcblxuXG4gICAgbGV0ICRzdGF5Um9vbXNTbGlkZXIgPSAkKCcuc2VjdGlvbi0yX19yb29tcycpO1xuICAgIGlmICgkc3RheVJvb21zU2xpZGVyLmxlbmd0aCkge1xuICAgICAgICAkc3RheVJvb21zU2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDAwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwODAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCAkc2xpZGVyQXJ0aWNsZXMgPSAkKCcuc2xpZGVyX2FydGljbGVzJyk7XG4gICAgaWYoJHNsaWRlckFydGljbGVzLmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyQXJ0aWNsZXMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckFydGljbGVzQnVpbGRlciA9ICQoJy5zbGlkZXJfYXJ0aWNsZXNfYnVpbGRlcicpO1xuICAgIGlmKCRzbGlkZXJBcnRpY2xlc0J1aWxkZXIubGVuZ3RoKSB7XG4gICAgICAgICRzbGlkZXJBcnRpY2xlc0J1aWxkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlck5ld3MgPSAkKCcuc2xpZGVyX25ld3MnKTtcbiAgICBpZigkc2xpZGVyTmV3cy5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlck5ld3Muc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcxMDBweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCAkc2xpZGVyR2FsbGVyeSA9ICQoJy5zbGlkZXJfZ2FsbGVyeScpO1xuICAgIGlmKCRzbGlkZXJHYWxsZXJ5Lmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyR2FsbGVyeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZigkKCcuZ2FsbGVyeV9tb2RhbCcpLmxlbmd0aCkge1xuICAgICAgICAkYm9keS5vbignY2xpY2snLCAnLmdhbGxlcnlfbW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGVyID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGUgPSAkKHRoaXMpLmRhdGEoJ3NsaWRldG8nKTtcbiAgICAgICAgICAgIGlmKCQoY3VycmVudFNsaWRlcikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChjdXJyZW50U2xpZGVyKS5zbGljaygnc2xpY2tHb1RvJywgY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJGJvZHkub24oJ2NsaWNrJywgJy5zbGlkZXJuZXdzX2FjdGlvbnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFjdGlvbiA9ICQodGhpcykuZGF0YSgnYWN0aW9ucycpO1xuICAgICAgICBpZihhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYoYWN0aW9uID09PSBcInByZXZcIikge1xuICAgICAgICAgICAgICAgICRzbGlkZXJOZXdzLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGFjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAkc2xpZGVyTmV3cy5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5zaG93X3NlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICBzdGlja3lIZWFkZXIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0aWNreUhlYWRlcigpIHtcbiAgICAgICAgdmFyIHN0aWNreSA9ICQoJyNoZWFkZXJfc3RpY2t5JyksIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RpY2t5SGVhZGVyKCk7XG4gICAgaW5pdEhhdmVBbmltYXRpb24oKTtcblxuICAgIC8vIE1lbnUgbGF0w6lyYWwgKGhlYWRlcikgOiBvdXZlcnR1cmUgLyBmZXJtZXR1cmUsIGJhY2tkcm9wLCBibG9jYWdlIGR1IHNjcm9sbFxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJNZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LXRvZ2dsZScpO1xuICAgIGNvbnN0IGhlYWRlck1lbnVGYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW1lbnUtZmFiJyk7XG4gICAgY29uc3QgaGVhZGVyRHJhd2VyQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWRyYXdlci1iYWNrZHJvcCcpO1xuICAgIGNvbnN0IGhlYWRlckRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZWFkZXItZHJhd2VyJyk7XG4gICAgLyoqIMOJdml0ZSB1biBzZWNvbmQgdGFwIGltbcOpZGlhdCBzdXIgbGUgYnVyZ2VyIChsYXRlbmNlIHRhY3RpbGUgaU9TKSBxdWkgcmVmZXJtYWl0IGxlIG1lbnUuICovXG4gICAgbGV0IGhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsID0gMDtcblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlck1lbnVCYXJIZWlnaHQoKSB7XG4gICAgICAgIGlmICghc2l0ZUhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIDEwODtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXIgPSBzaXRlSGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKGJhcikge1xuICAgICAgICAgICAgcmV0dXJuIGJhci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShzaXRlSGVhZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlYWRlci1iYXItaGVpZ2h0JykudHJpbSgpO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChyYXcsIDEwKTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShwYXJzZWQpID8gcGFyc2VkIDogMTA4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KCkge1xuICAgICAgICBpZiAoIWhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSBnZXRIZWFkZXJNZW51QmFySGVpZ2h0KCkgKyAxMDA7XG4gICAgICAgIGNvbnN0IHkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAoeSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtZmFiLS12aXNpYmxlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jSGVhZGVyTWVudUZhYkFyaWEoKSB7XG4gICAgICAgIGlmICghaGVhZGVyTWVudUZhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGhlYWRlck1lbnVGYWIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbiA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICBoZWFkZXJNZW51RmFiLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIG9wZW4gPyAnRmVybWVyIGxlIG1lbnUnIDogJ091dnJpciBsZSBtZW51Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VIZWFkZXJEcmF3ZXIoKSB7XG4gICAgICAgIGhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGlmIChzaXRlSGVhZGVyKSB7XG4gICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSkge1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVUb2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ091dnJpciBsZSBtZW51Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckRyYXdlcikge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyQmFja2Ryb3Auc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3luY0hlYWRlck1lbnVGYWJBcmlhKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbkhlYWRlckRyYXdlcigpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGlmIChzaXRlSGVhZGVyKSB7XG4gICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSkge1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRmVybWVyIGxlIG1lbnUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyKSB7XG4gICAgICAgICAgICBoZWFkZXJEcmF3ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICAgICAgaGVhZGVyRHJhd2VyQmFja2Ryb3Auc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNIZWFkZXJNZW51RmFiQXJpYSgpO1xuICAgIH1cblxuICAgIC8qKiBgZnJvbU1lbnVCdXR0b25gIDogYXByw6hzIG91dmVydHVyZSwgaWdub3JlIGJyacOodmVtZW50IHVuZSBmZXJtZXR1cmUgdmlhIGJ1cmdlci9GQUIgKGRvdWJsZSB0YXAgaU9TKS4gKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVIZWFkZXJEcmF3ZXIoZnJvbU1lbnVCdXR0b24pIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtZHJhd2VyLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKGZyb21NZW51QnV0dG9uICYmIERhdGUubm93KCkgPCBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcGVuSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgICAgICBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IERhdGUubm93KCkgKyAyODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSAmJiBzaXRlSGVhZGVyKSB7XG4gICAgICAgIGhlYWRlck1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlSGVhZGVyRHJhd2VyKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaGVhZGVyTWVudUZhYikge1xuICAgICAgICBoZWFkZXJNZW51RmFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUhlYWRlckRyYXdlcih0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHkpO1xuXG4gICAgaWYgKGhlYWRlckRyYXdlckJhY2tkcm9wKSB7XG4gICAgICAgIGhlYWRlckRyYXdlckJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VIZWFkZXJEcmF3ZXIpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtZHJhd2VyLW9wZW4nKSkge1xuICAgICAgICAgICAgY2xvc2VIZWFkZXJEcmF3ZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhlYWRlckRyYXdlcikge1xuICAgICAgICBoZWFkZXJEcmF3ZXIucXVlcnlTZWxlY3RvckFsbCgnYS5oZWFkZXJfX2RyYXdlci1saW5rJykuZm9yRWFjaChmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VIZWFkZXJEcmF3ZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQU9TIiwiaXNNb2JpbGVBb3NWaWV3cG9ydCIsInNjYWxlRG93bkFvc0RlbGF5c0Zvck1vYmlsZSIsInBhZ2VMb2FkU3RhcnQiLCJEYXRlIiwibm93Iiwid2luZG93Iiwib24iLCJib2R5IiwiZG9jdW1lbnQiLCJtYWluTG9hZGVyIiwicXVlcnlTZWxlY3RvciIsIm1pbmltdW1Mb2FkZXJEdXJhdGlvbiIsImhpZGVNYWluTG9hZGVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaXNDbGVhbmVkVXAiLCJjbGVhbnVwIiwibW9iaWxlIiwicmVkdWNlZE1vdGlvbiIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaW5pdCIsIm9uY2UiLCJlYXNpbmciLCJkdXJhdGlvbiIsIm9mZnNldCIsInRocm90dGxlRGVsYXkiLCJkaXNhYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJlbGFwc2VkIiwicmVtYWluaW5nIiwiTWF0aCIsIm1heCIsInRleHRUb0NvcHkiLCJhdHRyIiwidGVtcFRleHRhcmVhIiwiYXBwZW5kIiwidmFsIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZXNlcnZhdGlvbk1vZHVsZSIsImJvb2tGYWIiLCJtb2R1bGVIZWlnaHQiLCJpbml0aWFsVG9wIiwiaW5uZXJIZWlnaHQiLCJ1cGRhdGVSZXNlcnZhdGlvblN0YXRlIiwiaXNQYXN0Iiwic2Nyb2xsWSIsInRvZ2dsZSIsInBhc3NpdmUiLCJpbml0SGF2ZUFuaW1hdGlvbiIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZm9yRWFjaCIsImVsIiwicGFyc2VPZmZzZXRQeCIsImRhdGFBdHRyIiwiZ2V0QXR0cmlidXRlIiwicGFyc2VkIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInJhdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbSIsIm4iLCJwYXJzZUZsb2F0IiwiY29udGFpbnMiLCJvZmZzZXRQeCIsInJvb3RNYXJnaW4iLCJjb25jYXQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwidW5vYnNlcnZlIiwicm9vdCIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJNT0JJTEVfQU9TX01BWF9XSURUSCIsInYiLCJzY2FsZWQiLCJtaW4iLCJyb3VuZCIsInNldEF0dHJpYnV0ZSIsIlN0cmluZyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwibyIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJGIiwicyIsImUiLCJfZSIsImYiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwic3RlcCIsIl9lMiIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJmcm9tIiwidGVzdCIsImFyciIsImxlbiIsImFycjIiLCJjb3VudHJpZXMiLCJlbkxvY2FsZSIsImZyTG9jYWxlIiwicmVnaXN0ZXJMb2NhbGUiLCJTRUxFQ1RPUlMiLCJtb2RhbCIsInRyaWdnZXIiLCJjbG9zZSIsImZvcm0iLCJmZWVkYmFjayIsImNhcHRjaGEiLCJjb3VudHJ5U2VsZWN0IiwiT1BFTl9DTEFTUyIsIkJPRFlfT1BFTl9DTEFTUyIsIlNVQ0NFU1NfRk9STV9DTEFTUyIsImJ1aWxkQ291bnRyeVNlbGVjdERhdGEiLCJwYWdlTG9jYWxlIiwibGFuZyIsIm9mZmljaWFsIiwiZ2V0TmFtZXMiLCJvcHRzIiwibWFwIiwiY29kZSIsInRleHQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic2Vuc2l0aXZpdHkiLCIkb3JkZXIiLCJjb2RlcyIsIlNldCIsImZsYXRGb3JOYXRpdmUiLCJfcmVmIiwib3B0aW9ucyIsInJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUiLCJfQXJyYXkkZnJvbSQiLCJzZXJ2ZXIiLCJkYXRhc2V0Iiwic3VnZ2VzdGVkQ291bnRyeSIsInRvVXBwZXJDYXNlIiwiaGFzIiwibGlzdCIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJtIiwiZXhlYyIsInJlcGxhY2UiLCJwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3QiLCJzZWxlY3RFbCIsImZsYXRPcHRpb25zIiwiaW5pdGlhbCIsImlubmVySFRNTCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJvcHQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJzZWxlY3RlZCIsImFwcGVuZENoaWxkIiwiaW5pdENvdW50cnlTZWxlY3RpemUiLCJIVE1MU2VsZWN0RWxlbWVudCIsInBsYWNlaG9sZGVyIiwiY291bnRyeVBsYWNlaG9sZGVyIiwiYnVpbHQiLCJjb25zb2xlIiwiX2J1aWx0Iiwic2VsZWN0aXplIiwiJHNlbGVjdCIsImRlc3Ryb3kiLCJpdGVtcyIsInZhbHVlRmllbGQiLCJsYWJlbEZpZWxkIiwic2VhcmNoRmllbGQiLCJtYXhJdGVtcyIsImFsbG93RW1wdHlPcHRpb24iLCJzb3J0RmllbGQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImRyb3Bkb3duUGFyZW50IiwiY29weUNsYXNzZXNUb0Ryb3Bkb3duIiwid3JhcHBlckNsYXNzIiwiZHJvcGRvd25DbGFzcyIsImluc3QiLCJfbmV3c2xldHRlckNvdW50cnlTZWxlY3RpemUiLCJyZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldCIsIm9wZW5Nb2RhbCIsImhpZGRlbiIsIm1haW4iLCJmaXJzdEZpZWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9jdXMiLCJjbG9zZU1vZGFsIiwiaGFuZGxlU3VibWl0IiwiX3giLCJfeDIiLCJfaGFuZGxlU3VibWl0IiwiX2NhbGxlZSIsImV2ZW50Iiwic3VibWl0QnV0dG9uIiwiZm9ybURhdGEiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY291bnRyeSIsImxvY2FsZSIsImdlbmVyaWNFcnJvck1lc3NhZ2UiLCJpbmNvbXBsZXRlTWVzc2FnZSIsInJlY2FwdGNoYUVuYWJsZWQiLCJyZWNhcHRjaGFTaXRlS2V5IiwiY2FwdGNoYUlucHV0IiwiY2FwdGNoYVRva2VuIiwicmVzcG9uc2UiLCJwYXlsb2FkIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsIkZvcm1EYXRhIiwiZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2VuZXJpY0Vycm9yIiwiaW5jb21wbGV0ZUVycm9yIiwiZGlzYWJsZWQiLCJncmVjYXB0Y2hhIiwiZXhlY3V0ZSIsInJlYWR5IiwiYWN0aW9uIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInQwIiwib2siLCJzdWNjZXNzIiwibWVzc2FnZSIsInQxIiwiY2xvc2VzdCIsInJlYWR5U3RhdGUiLCJmbGF0cGlja3IiLCJGcmVuY2giLCJlbmdsaXNoIiwicHJlcGVuZExvY2FsU3R5bGVzaGVldEhvb2siLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRlYm91bmNlIiwibXMiLCJ0IiwiY2xlYXJUaW1lb3V0IiwicGFyc2VJbnRTdHJpY3QiLCJmYWxsYmFjayIsImdldFNpdGVMb2NhbGUiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZ2V0RmxhdHBpY2tyTG9jYWxlIiwiYXBwbHlDb3VudFRlbXBsYXRlIiwidGVtcGxhdGUiLCJjb3VudCIsImpvaW4iLCJmb3JtYXRHdWVzdFN1bW1hcnkiLCJhZHVsdHMiLCJraWRzIiwiaTE4biIsImFkdWx0c19vbmUiLCJraWRfb25lIiwic2VwIiwiYUxhYmVsIiwia0xhYmVsIiwiaW5pdFJlc2VydmF0aW9uSGVybyIsImRhdGVzQmxvY2siLCJjYWxlbmRhck1vdW50IiwiYW5jaG9yRWwiLCJjaGVja2luSGlkZGVuIiwiY2hlY2tvdXRIaWRkZW4iLCJjaGVja2luRGlzcGxheSIsImNoZWNrb3V0RGlzcGxheSIsImd1ZXN0c01vdW50IiwiZ3Vlc3RzVHJpZ2dlciIsImd1ZXN0c1N1bW1hcnkiLCJhZHVsdHNIaWRkZW4iLCJraWRzSGlkZGVuIiwiZ3Vlc3RzRG9uZSIsImd1ZXN0c1N1bW1hcnlJMThuIiwiaTE4blJhdyIsInBhcnNlIiwiZnAiLCJsb2NrWWVhcklucHV0cyIsImluc3RhbmNlIiwiY2FsZW5kYXJDb250YWluZXIiLCJjYWxlbmRhckhvb2siLCJfc2VsZWN0ZWREYXRlcyIsIl9kYXRlU3RyIiwic2hvd01vbnRoc0NvdW50IiwiaW5uZXJXaWR0aCIsInN5bmNGcm9tU2VsZWN0aW9uIiwic2VsZWN0ZWREYXRlcyIsImZtdFltZCIsImZtdFVpIiwiZm9ybWF0RGF0ZSIsImNyZWF0ZUZsYXRwaWNrciIsIm1vZGUiLCJjbG9zZU9uU2VsZWN0IiwiY2xpY2tPcGVucyIsInNob3dNb250aHMiLCJkYXRlRm9ybWF0IiwiYWxsb3dJbnB1dCIsImlubGluZSIsImFwcGVuZFRvIiwiZGlzYWJsZU1vYmlsZSIsIm1pbkRhdGUiLCJhc3NpZ24iLCJmaXJzdERheU9mV2VlayIsIm1vbnRoU2VsZWN0b3JUeXBlIiwib25SZWFkeSIsIm9uTW9udGhDaGFuZ2UiLCJvbkNoYW5nZSIsImNhbGVuZGFyT3BlbiIsImNsb3NlQ2FsZW5kYXIiLCJvbkNsb3NlIiwic2V0RGF0ZSIsInJlZHJhdyIsImd1ZXN0c09wZW4iLCJzdXBwcmVzc05leHREb2NDbGljayIsImlzU3RpY2t5TW9kdWxlIiwibW9kdWxlIiwic2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzIiwic2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcyIsInN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24iLCJzdHlsZSIsInJpZ2h0IiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsZWFyR3Vlc3RzUG9wb3ZlclBvc2l0aW9uIiwic2V0Iiwib3BlbkNhbGVuZGFyIiwiY2xvc2VHdWVzdHMiLCJnZXRBZHVsdHNLaWRzIiwiayIsInN5bmNHdWVzdFN0ZXBwZXJVaSIsIl9nZXRBZHVsdHNLaWRzIiwicm93IiwiZGlzcGxheSIsImRvd24iLCJ1cCIsInNldEFkdWx0c0tpZHMiLCJvcGVuR3Vlc3RzIiwidG9nZ2xlR3Vlc3RzIiwiYnRuIiwiX2dldEFkdWx0c0tpZHMyIiwiZGVsdGEiLCIkYm9keSIsIiRkcm9wZG93biIsIiRtYWluTmF2QmFyIiwiJHByZXZpb3VzbWVudSIsImFkZENsYXNzIiwiaXMiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJoYXNDbGFzcyIsIiRzdGF5Um9vbXNTbGlkZXIiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwiY3NzRWFzZSIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIiRzbGlkZXJBcnRpY2xlcyIsImxhenlMb2FkIiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiJHNsaWRlckFydGljbGVzQnVpbGRlciIsIiRzbGlkZXJOZXdzIiwiJHNsaWRlckdhbGxlcnkiLCJmYWRlIiwiY3VycmVudFNsaWRlciIsImRhdGEiLCJjdXJyZW50U2xpZGUiLCJ0b2dnbGVDbGFzcyIsInNjcm9sbCIsInN0aWNreUhlYWRlciIsInN0aWNreSIsInNjcm9sbFRvcCIsInNpdGVIZWFkZXIiLCJoZWFkZXJNZW51VG9nZ2xlIiwiaGVhZGVyTWVudUZhYiIsImhlYWRlckRyYXdlckJhY2tkcm9wIiwiaGVhZGVyRHJhd2VyIiwiaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwiLCJnZXRIZWFkZXJNZW51QmFySGVpZ2h0IiwiYmFyIiwib2Zmc2V0SGVpZ2h0IiwidXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHkiLCJ5IiwicmVtb3ZlQXR0cmlidXRlIiwic3luY0hlYWRlck1lbnVGYWJBcmlhIiwib3BlbiIsImNsb3NlSGVhZGVyRHJhd2VyIiwib3BlbkhlYWRlckRyYXdlciIsInRvZ2dsZUhlYWRlckRyYXdlciIsImZyb21NZW51QnV0dG9uIiwiYW5jaG9yIl0sInNvdXJjZVJvb3QiOiIifQ==