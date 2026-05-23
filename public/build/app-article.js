(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-article"],{

/***/ "./assets/app-article.js":
/*!*******************************!*\
  !*** ./assets/app-article.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
// start the Stimulus application
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
$(window).on('load', function () {
  var selectorFilter = $('body .container .filters');
  var selectorResult = $('body .container .result');
  loadProduct(1);

  /** Liste des produits : PAGINATION */
  selectorResult.delegate('.pagination span.page', 'click', function () {
    var page = $(this).attr('data-page');
    $('html, body .header').animate({
      scrollTop: 0
    }, 200, 'linear', function () {
      setTimeout(function () {
        loadProduct(page);
      }, 900);
    });
  });

  /** Liste des articles : FILTRES */
  selectorFilter.find('#search').on('click', function () {
    loadProduct(1);
  });
});
function loadProduct(page) {
  var resultFilters = $('.container .filters');
  var resultSelector = $('.container .result');
  var selectedCategory = null;
  if (resultFilters.find('#filter-category').val()) {
    selectedCategory = resultFilters.find('#filter-category').val();
  }
  var selectedSearch = null;
  if (resultFilters.find('#filter-search').val()) {
    selectedSearch = resultFilters.find('#filter-search').val();
  }
  $.ajax({
    url: resultSelector.attr('data-path'),
    type: 'POST',
    data: {
      'search': selectedSearch,
      'category': selectedCategory,
      'type': resultSelector.attr('data-type'),
      'nb': resultSelector.attr('data-nb'),
      'page': page
    },
    dataType: 'html',
    async: true,
    beforeSend: function beforeSend() {
      var html = "<div class='loader mt-5' id='loader-1'></div>";
      resultSelector.html(html);
    },
    success: function success(data, status) {
      resultSelector.html(data);
    },
    error: function error(xhr, textStatus, errorThrown) {
      console.log('Ajax request failed.');
    }
  });
}

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-bun.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-bun.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";

/* global Bun -- Deno case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var ENGINE_IS_BUN = __webpack_require__(/*! ../internals/engine-is-bun */ "./node_modules/core-js/internals/engine-is-bun.js");
var USER_AGENT = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
  var version = global.Bun.version.split('.');
  return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setInterval = schedulersFix(global.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setTimeout = schedulersFix(global.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-7be1ba","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_modules_es_-f8ad3e"], () => (__webpack_exec__("./assets/app-article.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxzRUFBc0U7QUFDMUU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNYWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9FQUFvRTtBQUN4RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1hZO0FBQ2I7QUFDQSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFGQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAtYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RvckZpbHRlciA9ICQoJ2JvZHkgLmNvbnRhaW5lciAuZmlsdGVycycpO1xuICAgIGNvbnN0IHNlbGVjdG9yUmVzdWx0ID0gJCgnYm9keSAuY29udGFpbmVyIC5yZXN1bHQnKTtcblxuICAgIGxvYWRQcm9kdWN0KDEpO1xuXG4gICAgLyoqIExpc3RlIGRlcyBwcm9kdWl0cyA6IFBBR0lOQVRJT04gKi9cbiAgICBzZWxlY3RvclJlc3VsdC5kZWxlZ2F0ZSgnLnBhZ2luYXRpb24gc3Bhbi5wYWdlJywnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9ICQodGhpcykuYXR0cignZGF0YS1wYWdlJyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHkgLmhlYWRlcicpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwLCAnbGluZWFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0KHBhZ2UpO1xuICAgICAgICAgICAgfSwgOTAwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qKiBMaXN0ZSBkZXMgYXJ0aWNsZXMgOiBGSUxUUkVTICovXG4gICAgc2VsZWN0b3JGaWx0ZXIuZmluZCgnI3NlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkUHJvZHVjdCgxKTtcbiAgICB9KTtcbn0pO1xuXG5cblxuZnVuY3Rpb24gbG9hZFByb2R1Y3QocGFnZSkge1xuXG4gICAgbGV0IHJlc3VsdEZpbHRlcnMgPSAkKCcuY29udGFpbmVyIC5maWx0ZXJzJyk7XG4gICAgbGV0IHJlc3VsdFNlbGVjdG9yID0gJCgnLmNvbnRhaW5lciAucmVzdWx0Jyk7XG5cbiAgICBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IG51bGw7XG4gICAgaWYocmVzdWx0RmlsdGVycy5maW5kKCcjZmlsdGVyLWNhdGVnb3J5JykudmFsKCkpIHtcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9IHJlc3VsdEZpbHRlcnMuZmluZCgnI2ZpbHRlci1jYXRlZ29yeScpLnZhbCgpO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZFNlYXJjaCA9IG51bGw7XG4gICAgaWYocmVzdWx0RmlsdGVycy5maW5kKCcjZmlsdGVyLXNlYXJjaCcpLnZhbCgpKSB7XG4gICAgICAgIHNlbGVjdGVkU2VhcmNoID0gcmVzdWx0RmlsdGVycy5maW5kKCcjZmlsdGVyLXNlYXJjaCcpLnZhbCgpO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogICAgICAgIHJlc3VsdFNlbGVjdG9yLmF0dHIoJ2RhdGEtcGF0aCcpLFxuICAgICAgICB0eXBlOiAgICAgICAnUE9TVCcsXG4gICAgICAgIGRhdGE6ICAgICAgIHsnc2VhcmNoJzogc2VsZWN0ZWRTZWFyY2gsICdjYXRlZ29yeSc6IHNlbGVjdGVkQ2F0ZWdvcnksICd0eXBlJzogcmVzdWx0U2VsZWN0b3IuYXR0cignZGF0YS10eXBlJyksICduYic6IHJlc3VsdFNlbGVjdG9yLmF0dHIoJ2RhdGEtbmInKSwgJ3BhZ2UnOiBwYWdlfSxcbiAgICAgICAgZGF0YVR5cGU6ICAgJ2h0bWwnLFxuICAgICAgICBhc3luYzogICAgICB0cnVlLFxuXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFwiPGRpdiBjbGFzcz0nbG9hZGVyIG10LTUnIGlkPSdsb2FkZXItMSc+PC9kaXY+XCI7XG4gICAgICAgICAgICByZXN1bHRTZWxlY3Rvci5odG1sKGh0bWwpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFNlbGVjdG9yLmh0bWwoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBCdW4gLS0gRGVubyBjYXNlICovXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBCdW4gPT0gJ2Z1bmN0aW9uJyAmJiBCdW4gJiYgdHlwZW9mIEJ1bi52ZXJzaW9uID09ICdzdHJpbmcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBFTkdJTkVfSVNfQlVOID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4nKTtcbnZhciBVU0VSX0FHRU5UID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuLy8gZGlydHkgSUU5LSBhbmQgQnVuIDAuMy4wLSBjaGVja3NcbnZhciBXUkFQID0gL01TSUUgLlxcLi8udGVzdChVU0VSX0FHRU5UKSB8fCBFTkdJTkVfSVNfQlVOICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZXJzaW9uID0gZ2xvYmFsLkJ1bi52ZXJzaW9uLnNwbGl0KCcuJyk7XG4gIHJldHVybiB2ZXJzaW9uLmxlbmd0aCA8IDMgfHwgdmVyc2lvblswXSA9PSAwICYmICh2ZXJzaW9uWzFdIDwgMyB8fCB2ZXJzaW9uWzFdID09IDMgJiYgdmVyc2lvblsyXSA9PSAwKTtcbn0pKCk7XG5cbi8vIElFOS0gLyBCdW4gMC4zLjAtIHNldFRpbWVvdXQgLyBzZXRJbnRlcnZhbCAvIHNldEltbWVkaWF0ZSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL292ZW4tc2gvYnVuL2lzc3Vlcy8xNjMzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGhhc1RpbWVBcmcpIHtcbiAgdmFyIGZpcnN0UGFyYW1JbmRleCA9IGhhc1RpbWVBcmcgPyAyIDogMTtcbiAgcmV0dXJuIFdSQVAgPyBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKSA+IGZpcnN0UGFyYW1JbmRleDtcbiAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xuICAgIHZhciBwYXJhbXMgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgZmlyc3RQYXJhbUluZGV4KSA6IFtdO1xuICAgIHZhciBjYWxsYmFjayA9IGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGZuLCB0aGlzLCBwYXJhbXMpO1xuICAgIH0gOiBmbjtcbiAgICByZXR1cm4gaGFzVGltZUFyZyA/IHNjaGVkdWxlcihjYWxsYmFjaywgdGltZW91dCkgOiBzY2hlZHVsZXIoY2FsbGJhY2spO1xuICB9IDogc2NoZWR1bGVyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZmluZCAtLSB0ZXN0aW5nXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldEludGVydmFsID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0SW50ZXJ2YWwsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRJbnRlcnZhbCAhPT0gc2V0SW50ZXJ2YWwgfSwge1xuICBzZXRJbnRlcnZhbDogc2V0SW50ZXJ2YWxcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldFRpbWVvdXQgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRUaW1lb3V0LCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRUaW1lb3V0IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldFRpbWVvdXQgIT09IHNldFRpbWVvdXQgfSwge1xuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcbiJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsIndpbmRvdyIsIm9uIiwic2VsZWN0b3JGaWx0ZXIiLCJzZWxlY3RvclJlc3VsdCIsImxvYWRQcm9kdWN0IiwiZGVsZWdhdGUiLCJwYWdlIiwiYXR0ciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzZXRUaW1lb3V0IiwiZmluZCIsInJlc3VsdEZpbHRlcnMiLCJyZXN1bHRTZWxlY3RvciIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJ2YWwiLCJzZWxlY3RlZFNlYXJjaCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImRhdGFUeXBlIiwiYXN5bmMiLCJiZWZvcmVTZW5kIiwiaHRtbCIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9