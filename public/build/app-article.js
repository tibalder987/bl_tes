(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-article"],{

/***/ "./assets/app-article.js":
/*!*******************************!*\
  !*** ./assets/app-article.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// start the Stimulus application
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
$(window).on('load', function () {
  const selectorFilter = $('body .container .filters');
  const selectorResult = $('body .container .result');
  loadProduct(1);

  /** Liste des produits : PAGINATION */
  selectorResult.delegate('.pagination span.page', 'click', function () {
    const page = $(this).attr('data-page');
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
  let resultFilters = $('.container .filters');
  let resultSelector = $('.container .result');
  let selectedCategory = null;
  if (resultFilters.find('#filter-category').val()) {
    selectedCategory = resultFilters.find('#filter-category').val();
  }
  let selectedSearch = null;
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
    beforeSend: function () {
      const html = "<div class='loader mt-5' id='loader-1'></div>";
      resultSelector.html(html);
    },
    success: function (data, status) {
      resultSelector.html(data);
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('Ajax request failed.');
    }
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_exec__("./assets/app-article.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKLElBQUksQ0FBQztJQUM3QixDQUFDO0lBQ0RPLEtBQUssRUFBRyxTQUFBQSxDQUFTQyxHQUFHLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QztFQUNKLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC1hcnRpY2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JGaWx0ZXIgPSAkKCdib2R5IC5jb250YWluZXIgLmZpbHRlcnMnKTtcbiAgICBjb25zdCBzZWxlY3RvclJlc3VsdCA9ICQoJ2JvZHkgLmNvbnRhaW5lciAucmVzdWx0Jyk7XG5cbiAgICBsb2FkUHJvZHVjdCgxKTtcblxuICAgIC8qKiBMaXN0ZSBkZXMgcHJvZHVpdHMgOiBQQUdJTkFUSU9OICovXG4gICAgc2VsZWN0b3JSZXN1bHQuZGVsZWdhdGUoJy5wYWdpbmF0aW9uIHNwYW4ucGFnZScsJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtcGFnZScpO1xuICAgICAgICAkKCdodG1sLCBib2R5IC5oZWFkZXInKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCwgJ2xpbmVhcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdChwYWdlKTtcbiAgICAgICAgICAgIH0sIDkwMClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvKiogTGlzdGUgZGVzIGFydGljbGVzIDogRklMVFJFUyAqL1xuICAgIHNlbGVjdG9yRmlsdGVyLmZpbmQoJyNzZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZFByb2R1Y3QoMSk7XG4gICAgfSk7XG59KTtcblxuXG5cbmZ1bmN0aW9uIGxvYWRQcm9kdWN0KHBhZ2UpIHtcblxuICAgIGxldCByZXN1bHRGaWx0ZXJzID0gJCgnLmNvbnRhaW5lciAuZmlsdGVycycpO1xuICAgIGxldCByZXN1bHRTZWxlY3RvciA9ICQoJy5jb250YWluZXIgLnJlc3VsdCcpO1xuXG4gICAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBudWxsO1xuICAgIGlmKHJlc3VsdEZpbHRlcnMuZmluZCgnI2ZpbHRlci1jYXRlZ29yeScpLnZhbCgpKSB7XG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSByZXN1bHRGaWx0ZXJzLmZpbmQoJyNmaWx0ZXItY2F0ZWdvcnknKS52YWwoKTtcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0ZWRTZWFyY2ggPSBudWxsO1xuICAgIGlmKHJlc3VsdEZpbHRlcnMuZmluZCgnI2ZpbHRlci1zZWFyY2gnKS52YWwoKSkge1xuICAgICAgICBzZWxlY3RlZFNlYXJjaCA9IHJlc3VsdEZpbHRlcnMuZmluZCgnI2ZpbHRlci1zZWFyY2gnKS52YWwoKTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICAgICAgICByZXN1bHRTZWxlY3Rvci5hdHRyKCdkYXRhLXBhdGgnKSxcbiAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLFxuICAgICAgICBkYXRhOiAgICAgICB7J3NlYXJjaCc6IHNlbGVjdGVkU2VhcmNoLCAnY2F0ZWdvcnknOiBzZWxlY3RlZENhdGVnb3J5LCAndHlwZSc6IHJlc3VsdFNlbGVjdG9yLmF0dHIoJ2RhdGEtdHlwZScpLCAnbmInOiByZXN1bHRTZWxlY3Rvci5hdHRyKCdkYXRhLW5iJyksICdwYWdlJzogcGFnZX0sXG4gICAgICAgIGRhdGFUeXBlOiAgICdodG1sJyxcbiAgICAgICAgYXN5bmM6ICAgICAgdHJ1ZSxcblxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBcIjxkaXYgY2xhc3M9J2xvYWRlciBtdC01JyBpZD0nbG9hZGVyLTEnPjwvZGl2PlwiO1xuICAgICAgICAgICAgcmVzdWx0U2VsZWN0b3IuaHRtbChodG1sKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgICAgICByZXN1bHRTZWxlY3Rvci5odG1sKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJ3aW5kb3ciLCJvbiIsInNlbGVjdG9yRmlsdGVyIiwic2VsZWN0b3JSZXN1bHQiLCJsb2FkUHJvZHVjdCIsImRlbGVnYXRlIiwicGFnZSIsImF0dHIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwic2V0VGltZW91dCIsImZpbmQiLCJyZXN1bHRGaWx0ZXJzIiwicmVzdWx0U2VsZWN0b3IiLCJzZWxlY3RlZENhdGVnb3J5IiwidmFsIiwic2VsZWN0ZWRTZWFyY2giLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkYXRhVHlwZSIsImFzeW5jIiwiYmVmb3JlU2VuZCIsImh0bWwiLCJzdWNjZXNzIiwic3RhdHVzIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==