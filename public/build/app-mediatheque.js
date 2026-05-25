(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-mediatheque"],{

/***/ "./assets/app-mediatheque.js":
/*!***********************************!*\
  !*** ./assets/app-mediatheque.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// start the Stimulus application
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
$(window).on('load', function () {
  const resultFilters = $('.container .filters');
  const selectorResult = $('body .container .result');
  loadMedia(1);

  /** Liste des produits : PAGINATION */
  selectorResult.delegate('.pagination span.page', 'click', function () {
    const page = $(this).attr('data-page');
    $('html, body .header').animate({
      scrollTop: 0
    }, 200, 'linear', function () {
      setTimeout(function () {
        loadMedia(page);
      }, 900);
    });
  });
  resultFilters.find('#filter-document-type').on('change', function () {
    loadMedia(1);
  });
});
function loadMedia(page) {
  let resultFilters = $('.container .filters');
  let resultSelector = $('.container .result');
  let selectedMediaDocumentType = null;
  if (resultFilters.find('#filter-document-type').val()) {
    selectedMediaDocumentType = resultFilters.find('#filter-document-type').val();
  }
  $.ajax({
    url: resultSelector.attr('data-path'),
    type: 'POST',
    data: {
      'mediaType': resultSelector.attr('data-mediaType'),
      'mediaDocumentType': selectedMediaDocumentType,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_exec__("./assets/app-mediatheque.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1lZGlhdGhlcXVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQVEsQ0FBQztBQUMzQkMscUJBQU0sQ0FBQ0YsQ0FBQyxHQUFHRSxxQkFBTSxDQUFDQyxNQUFNLEdBQUdILENBQUM7QUFFNUJBLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBVztFQUM1QixNQUFNQyxhQUFhLEdBQUdOLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztFQUM5QyxNQUFNTyxjQUFjLEdBQUdQLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztFQUVuRFEsU0FBUyxDQUFDLENBQUMsQ0FBQzs7RUFFWjtFQUNBRCxjQUFjLENBQUNFLFFBQVEsQ0FBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUUsWUFBVztJQUNoRSxNQUFNQyxJQUFJLEdBQUdWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0Q1gsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNZLE9BQU8sQ0FBQztNQUFFQyxTQUFTLEVBQUU7SUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxZQUFXO01BQ3hFQyxVQUFVLENBQUMsWUFBVztRQUNsQk4sU0FBUyxDQUFDRSxJQUFJLENBQUM7TUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGSixhQUFhLENBQUNTLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDVixFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVc7SUFDaEVHLFNBQVMsQ0FBQyxDQUFDLENBQUM7RUFDaEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBR0YsU0FBU0EsU0FBU0EsQ0FBQ0UsSUFBSSxFQUFFO0VBRXJCLElBQUlKLGFBQWEsR0FBR04sQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0VBQzVDLElBQUlnQixjQUFjLEdBQUdoQixDQUFDLENBQUMsb0JBQW9CLENBQUM7RUFFNUMsSUFBSWlCLHlCQUF5QixHQUFHLElBQUk7RUFDcEMsSUFBR1gsYUFBYSxDQUFDUyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0csR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNsREQseUJBQXlCLEdBQUdYLGFBQWEsQ0FBQ1MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNHLEdBQUcsQ0FBQyxDQUFDO0VBQ2pGO0VBRUFsQixDQUFDLENBQUNtQixJQUFJLENBQUM7SUFDSEMsR0FBRyxFQUFTSixjQUFjLENBQUNMLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUNVLElBQUksRUFBUSxNQUFNO0lBQ2xCQyxJQUFJLEVBQVE7TUFBQyxXQUFXLEVBQUVOLGNBQWMsQ0FBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDO01BQUUsbUJBQW1CLEVBQUVNLHlCQUF5QjtNQUFHLE1BQU0sRUFBRVA7SUFBSSxDQUFDO0lBQy9IYSxRQUFRLEVBQUksTUFBTTtJQUNsQkMsS0FBSyxFQUFPLElBQUk7SUFFaEJDLFVBQVUsRUFBRSxTQUFBQSxDQUFBLEVBQVc7TUFDbkIsTUFBTUMsSUFBSSxHQUFHLCtDQUErQztNQUM1RFYsY0FBYyxDQUFDVSxJQUFJLENBQUNBLElBQUksQ0FBQztJQUM3QixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxTQUFBQSxDQUFTTCxJQUFJLEVBQUVNLE1BQU0sRUFBRTtNQUM1QlosY0FBYyxDQUFDVSxJQUFJLENBQUNKLElBQUksQ0FBQztJQUM3QixDQUFDO0lBQ0RPLEtBQUssRUFBRyxTQUFBQSxDQUFTQyxHQUFHLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QztFQUNKLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC1tZWRpYXRoZXF1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlc3VsdEZpbHRlcnMgPSAkKCcuY29udGFpbmVyIC5maWx0ZXJzJyk7XG4gICAgY29uc3Qgc2VsZWN0b3JSZXN1bHQgPSAkKCdib2R5IC5jb250YWluZXIgLnJlc3VsdCcpO1xuXG4gICAgbG9hZE1lZGlhKDEpO1xuXG4gICAgLyoqIExpc3RlIGRlcyBwcm9kdWl0cyA6IFBBR0lOQVRJT04gKi9cbiAgICBzZWxlY3RvclJlc3VsdC5kZWxlZ2F0ZSgnLnBhZ2luYXRpb24gc3Bhbi5wYWdlJywnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9ICQodGhpcykuYXR0cignZGF0YS1wYWdlJyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHkgLmhlYWRlcicpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwLCAnbGluZWFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRNZWRpYShwYWdlKTtcbiAgICAgICAgICAgIH0sIDkwMClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRGaWx0ZXJzLmZpbmQoJyNmaWx0ZXItZG9jdW1lbnQtdHlwZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE1lZGlhKDEpO1xuICAgIH0pXG59KTtcblxuXG5mdW5jdGlvbiBsb2FkTWVkaWEocGFnZSkge1xuXG4gICAgbGV0IHJlc3VsdEZpbHRlcnMgPSAkKCcuY29udGFpbmVyIC5maWx0ZXJzJyk7XG4gICAgbGV0IHJlc3VsdFNlbGVjdG9yID0gJCgnLmNvbnRhaW5lciAucmVzdWx0Jyk7XG5cbiAgICBsZXQgc2VsZWN0ZWRNZWRpYURvY3VtZW50VHlwZSA9IG51bGw7XG4gICAgaWYocmVzdWx0RmlsdGVycy5maW5kKCcjZmlsdGVyLWRvY3VtZW50LXR5cGUnKS52YWwoKSkge1xuICAgICAgICBzZWxlY3RlZE1lZGlhRG9jdW1lbnRUeXBlID0gcmVzdWx0RmlsdGVycy5maW5kKCcjZmlsdGVyLWRvY3VtZW50LXR5cGUnKS52YWwoKTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICAgICAgICByZXN1bHRTZWxlY3Rvci5hdHRyKCdkYXRhLXBhdGgnKSxcbiAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLFxuICAgICAgICBkYXRhOiAgICAgICB7J21lZGlhVHlwZSc6IHJlc3VsdFNlbGVjdG9yLmF0dHIoJ2RhdGEtbWVkaWFUeXBlJyksICdtZWRpYURvY3VtZW50VHlwZSc6IHNlbGVjdGVkTWVkaWFEb2N1bWVudFR5cGUgLCAncGFnZSc6IHBhZ2V9LFxuICAgICAgICBkYXRhVHlwZTogICAnaHRtbCcsXG4gICAgICAgIGFzeW5jOiAgICAgIHRydWUsXG5cbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gXCI8ZGl2IGNsYXNzPSdsb2FkZXIgbXQtNScgaWQ9J2xvYWRlci0xJz48L2Rpdj5cIjtcbiAgICAgICAgICAgIHJlc3VsdFNlbGVjdG9yLmh0bWwoaHRtbCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAgICAgcmVzdWx0U2VsZWN0b3IuaHRtbChkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZ2xvYmFsIiwialF1ZXJ5Iiwid2luZG93Iiwib24iLCJyZXN1bHRGaWx0ZXJzIiwic2VsZWN0b3JSZXN1bHQiLCJsb2FkTWVkaWEiLCJkZWxlZ2F0ZSIsInBhZ2UiLCJhdHRyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNldFRpbWVvdXQiLCJmaW5kIiwicmVzdWx0U2VsZWN0b3IiLCJzZWxlY3RlZE1lZGlhRG9jdW1lbnRUeXBlIiwidmFsIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiZGF0YVR5cGUiLCJhc3luYyIsImJlZm9yZVNlbmQiLCJodG1sIiwic3VjY2VzcyIsInN0YXR1cyIsImVycm9yIiwieGhyIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=