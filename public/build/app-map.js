(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-map"],{

/***/ "./assets/map.js":
/*!***********************!*\
  !*** ./assets/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
var center = ol.proj.fromLonLat([-149.573503, -17.542943]); // Coordonnées de Tahiti

var markersData = [{
  name: 'Marker 2',
  lon: -149.573503,
  lat: -17.542943,
  label: 'Point A',
  description: 'Description du Point A',
  category: 'categoryA'
}];
var markersLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: markersData.map(function (marker) {
      var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([marker.lon, marker.lat])),
        properties: marker
      });
      iconFeature.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
          src: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        })
      }));
      return iconFeature;
    })
  })
});
var mapOptions = {
  view: new ol.View({
    center: center,
    zoom: 10,
    maxZoom: 20 // Définition du niveau de zoom maximum
  }),

  layers: [new ol.layer.Tile({
    source: new ol.source.WMTS({
      url: 'https://www.tefenua.gov.pf/tefenua/api/wmts',
      // URL du service WMTS
      layer: 'TEFENUA:FOND',
      // Nom de la couche WMTS
      matrixSet: 'EPSG:4326',
      // Système de coordonnées
      format: 'image/jpeg',
      projection: ol.proj.get('EPSG:4326'),
      tileGrid: new ol.tilegrid.WMTS({
        origin: [-180, 90],
        resolutions: [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156, 0.000002682209014892578, 0.000001341104507446289],
        matrixIds: ['EPSG:4326:0', 'EPSG:4326:1', 'EPSG:4326:2', 'EPSG:4326:3', 'EPSG:4326:4', 'EPSG:4326:5', 'EPSG:4326:6', 'EPSG:4326:7', 'EPSG:4326:8', 'EPSG:4326:9', 'EPSG:4326:10', 'EPSG:4326:11', 'EPSG:4326:12', 'EPSG:4326:13', 'EPSG:4326:14', 'EPSG:4326:15', 'EPSG:4326:16', 'EPSG:4326:17', 'EPSG:4326:18', 'EPSG:4326:19', 'EPSG:4326:20']
      }),
      style: 'default'
    })
  }), markersLayer],
  target: 'map'
};
var map = new ol.Map(mapOptions);
var overlay = new ol.Overlay({
  element: document.getElementById('popup'),
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});
map.addOverlay(overlay);
var popupContent = document.getElementById('popup-content');
var popupCloser = document.getElementById('popup-closer');
map.on('click', function (evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature;
  });
  if (feature) {
    var coordinates = feature.getGeometry().getCoordinates();
    overlay.setPosition(coordinates);
    popupContent.innerHTML = '<h3>' + feature.get('properties').label + '</h3><p>' + feature.get('properties').description + '</p>';
  } else {
    overlay.setPosition(undefined);
    popupContent.innerHTML = '';
  }
});
popupCloser.onclick = function () {
  overlay.setPosition(undefined);
  popupContent.innerHTML = '';
  return false;
};
map.on('pointermove', function (e) {
  if (e.dragging) {
    return;
  }
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});
//
// var categoryFilter = document.getElementById('category-filter');
//
// function applyCategoryFilter() {
//     var selectedCategories = Array.from(categoryFilter.selectedOptions).map(option => option.value);
//
//     markersLayer.getSource().clear();
//     markersData.forEach(function(marker) {
//         if (selectedCategories.includes('all') || selectedCategories.includes(marker.category)) {
//             var iconFeature = new ol.Feature({
//                 geometry: new ol.geom.Point(ol.proj.fromLonLat([marker.lon, marker.lat])),
//                 properties: marker
//             });
//             iconFeature.setStyle(new ol.style.Style({
//                 image: new ol.style.Icon({
//                     src: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//                 })
//             }));
//             markersLayer.getSource().addFeature(iconFeature);
//         }
//     });
// }
// categoryFilter.addEventListener('change', applyCategoryFilter);
//
//
// // Fonction pour rechercher un marqueur par label
// function findFeatureByLabel(label) {
//     var features = markersLayer.getSource().getFeatures();
//     for (var i = 0; i < features.length; i++) {
//         if (features[i].get('properties').label === label) {
//             return features[i];
//         }
//     }
//     return null;
// }
//
// // Ajouter un écouteur pour le champ de recherche
// document.getElementById('search_input').addEventListener('keyup', function() {
//     var inputLabel = this.value.trim();
//     if (inputLabel.length > 0) {
//         var feature = findFeatureByLabel(inputLabel);
//         if (feature) {
//             var coordinates = feature.getGeometry().getCoordinates();
//             map.getView().animate({
//                 center: coordinates,
//                 zoom: 14 // Vous pouvez ajuster ce zoom selon vos préférences
//             });
//             overlay.setPosition(coordinates);
//             popupContent.innerHTML = '<h3>' + feature.get('properties').label + '</h3><p>' + feature.get('properties').description + '</p>';
//         } else {
//             overlay.setPosition(undefined);
//             popupContent.innerHTML = '';
//         }
//     }
// });

//
// document.getElementById('search_input').addEventListener('keyup', function() {
//     var input = this;
//     var val = input.value;
//     var selectedCategories = Array.from(categoryFilter.selectedOptions).map(option => option.value);
//     closeAllLists();
//
//     if (val.length <= 0) {
//         return;
//     }
//
//     var items = document.createElement("DIV");
//     items.setAttribute("id", input.id + "-autocomplete-list");
//     items.setAttribute("class", "autocomplete-items");
//     input.parentNode.appendChild(items);
//
//     var matchedLabels = markersData.filter(marker => marker.label.toLowerCase().includes(val.toLowerCase()) &&
//         (selectedCategories.includes('all') || selectedCategories.includes(marker.category)));
//
//     matchedLabels.forEach(marker => {
//         var item = document.createElement("DIV");
//         item.innerHTML = marker.label;
//         item.addEventListener('click', function() {
//             input.value = this.innerHTML;
//             closeAllLists();
//             var feature = findFeatureByLabel(input.value);
//             if (feature) {
//                 var coordinates = feature.getGeometry().getCoordinates();
//                 map.getView().animate({
//                     center: coordinates,
//                     zoom: 14
//                 });
//                 overlay.setPosition(coordinates);
//                 popupContent.innerHTML = '<h3>' + feature.get('properties').label + '</h3><p>' + feature.get('properties').description + '</p>';
//             } else {
//                 overlay.setPosition(undefined);
//                 popupContent.innerHTML = '';
//             }
//         });
//         items.appendChild(item);
//     });
// });
//
// function closeAllLists(elmnt) {
//     var items = document.getElementsByClassName("autocomplete-items");
//     for (var i = 0; i < items.length; i++) {
//         if (elmnt !== items[i] && elmnt !== document.getElementById('search_input')) {
//             items[i].parentNode.removeChild(items[i]);
//         }
//     }
// }
//
// document.addEventListener("click", function (e) {
//     closeAllLists(e.target);
// });

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-7be1ba","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d2a0ee"], () => (__webpack_exec__("./assets/map.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVOYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxvSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2VudGVyID0gb2wucHJvai5mcm9tTG9uTGF0KFstMTQ5LjU3MzUwMywgLTE3LjU0Mjk0M10pOyAvLyBDb29yZG9ubsOpZXMgZGUgVGFoaXRpXG5cbnZhciBtYXJrZXJzRGF0YSA9IFtcbiAgICB7IG5hbWU6ICdNYXJrZXIgMicsIGxvbjogLTE0OS41NzM1MDMsIGxhdDogLTE3LjU0Mjk0MywgbGFiZWw6ICdQb2ludCBBJywgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBkdSBQb2ludCBBJywgY2F0ZWdvcnk6ICdjYXRlZ29yeUEnIH1cbl07XG5cbnZhciBtYXJrZXJzTGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgZmVhdHVyZXM6IG1hcmtlcnNEYXRhLm1hcChmdW5jdGlvbihtYXJrZXIpIHtcbiAgICAgICAgICAgIHZhciBpY29uRmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQob2wucHJvai5mcm9tTG9uTGF0KFttYXJrZXIubG9uLCBtYXJrZXIubGF0XSkpLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG1hcmtlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpY29uRmVhdHVyZS5zZXRTdHlsZShuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuSWNvbih7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHA6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMvbXMvaWNvbnMvcmVkLWRvdC5wbmcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBpY29uRmVhdHVyZTtcbiAgICAgICAgfSlcbiAgICB9KVxufSk7XG5cbnZhciBtYXBPcHRpb25zID0ge1xuICAgIHZpZXc6IG5ldyBvbC5WaWV3KHtcbiAgICAgICAgY2VudGVyOiBjZW50ZXIsXG4gICAgICAgIHpvb206IDEwLFxuICAgICAgICBtYXhab29tOiAyMCAvLyBEw6lmaW5pdGlvbiBkdSBuaXZlYXUgZGUgem9vbSBtYXhpbXVtXG4gICAgfSksXG4gICAgbGF5ZXJzOiBbXG4gICAgICAgIG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5XTVRTKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy50ZWZlbnVhLmdvdi5wZi90ZWZlbnVhL2FwaS93bXRzJywgLy8gVVJMIGR1IHNlcnZpY2UgV01UU1xuICAgICAgICAgICAgICAgIGxheWVyOiAnVEVGRU5VQTpGT05EJywgLy8gTm9tIGRlIGxhIGNvdWNoZSBXTVRTXG4gICAgICAgICAgICAgICAgbWF0cml4U2V0OiAnRVBTRzo0MzI2JywgLy8gU3lzdMOobWUgZGUgY29vcmRvbm7DqWVzXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnaW1hZ2UvanBlZycsXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogb2wucHJvai5nZXQoJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICAgIHRpbGVHcmlkOiBuZXcgb2wudGlsZWdyaWQuV01UUyh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogWy0xODAsIDkwXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzAzMTI1LCAwLjM1MTU2MjUsIDAuMTc1NzgxMjUsIDAuMDg3ODkwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4wNDM5NDUzMTI1LCAwLjAyMTk3MjY1NjI1LCAwLjAxMDk4NjMyODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDA1NDkzMTY0MDYyNSwgMC4wMDI3NDY1ODIwMzEyNSwgMC4wMDEzNzMyOTEwMTU2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDY4NjY0NTUwNzgxMjUsIDAuMDAwMzQzMzIyNzUzOTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDE3MTY2MTM3Njk1MzEyNSwgMC4wMDAwODU4MzA2ODg0NzY1NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4wMDAwNDI5MTUzNDQyMzgyODEyNSwgMC4wMDAwMjE0NTc2NzIxMTkxNDA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAxMDcyODgzNjA1OTU3MDMxMiwgMC4wMDAwMDUzNjQ0MTgwMjk3ODUxNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjAwMDAwMjY4MjIwOTAxNDg5MjU3OCwgMC4wMDAwMDEzNDExMDQ1MDc0NDYyODlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4SWRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnRVBTRzo0MzI2OjAnLCAnRVBTRzo0MzI2OjEnLCAnRVBTRzo0MzI2OjInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VQU0c6NDMyNjozJywgJ0VQU0c6NDMyNjo0JywgJ0VQU0c6NDMyNjo1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdFUFNHOjQzMjY6NicsICdFUFNHOjQzMjY6NycsICdFUFNHOjQzMjY6OCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnRVBTRzo0MzI2OjknLCAnRVBTRzo0MzI2OjEwJywgJ0VQU0c6NDMyNjoxMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnRVBTRzo0MzI2OjEyJywgJ0VQU0c6NDMyNjoxMycsICdFUFNHOjQzMjY6MTQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VQU0c6NDMyNjoxNScsICdFUFNHOjQzMjY6MTYnLCAnRVBTRzo0MzI2OjE3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdFUFNHOjQzMjY6MTgnLCAnRVBTRzo0MzI2OjE5JywgJ0VQU0c6NDMyNjoyMCdcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHN0eWxlOiAnZGVmYXVsdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBtYXJrZXJzTGF5ZXJcbiAgICBdLFxuICAgIHRhcmdldDogJ21hcCdcbn07XG5cbnZhciBtYXAgPSBuZXcgb2wuTWFwKG1hcE9wdGlvbnMpO1xuXG52YXIgb3ZlcmxheSA9IG5ldyBvbC5PdmVybGF5KHtcbiAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKSxcbiAgICBhdXRvUGFuOiB0cnVlLFxuICAgIGF1dG9QYW5BbmltYXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDI1MFxuICAgIH1cbn0pO1xubWFwLmFkZE92ZXJsYXkob3ZlcmxheSk7XG5cbnZhciBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY29udGVudCcpO1xudmFyIHBvcHVwQ2xvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlcicpO1xuXG5tYXAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciBmZWF0dXJlID0gbWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChldnQucGl4ZWwsIGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgIH0pO1xuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIG92ZXJsYXkuc2V0UG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuICAgICAgICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gJzxoMz4nICsgZmVhdHVyZS5nZXQoJ3Byb3BlcnRpZXMnKS5sYWJlbCArICc8L2gzPjxwPicgKyBmZWF0dXJlLmdldCgncHJvcGVydGllcycpLmRlc2NyaXB0aW9uICsgJzwvcD4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG92ZXJsYXkuc2V0UG9zaXRpb24odW5kZWZpbmVkKTtcbiAgICAgICAgcG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH1cbn0pO1xuXG5wb3B1cENsb3Nlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIG92ZXJsYXkuc2V0UG9zaXRpb24odW5kZWZpbmVkKTtcbiAgICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxubWFwLm9uKCdwb2ludGVybW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcGl4ZWwgPSBtYXAuZ2V0RXZlbnRQaXhlbChlLm9yaWdpbmFsRXZlbnQpO1xuICAgIHZhciBoaXQgPSBtYXAuaGFzRmVhdHVyZUF0UGl4ZWwocGl4ZWwpO1xuICAgIG1hcC5nZXRUYXJnZXRFbGVtZW50KCkuc3R5bGUuY3Vyc29yID0gaGl0ID8gJ3BvaW50ZXInIDogJyc7XG59KTtcbi8vXG4vLyB2YXIgY2F0ZWdvcnlGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktZmlsdGVyJyk7XG4vL1xuLy8gZnVuY3Rpb24gYXBwbHlDYXRlZ29yeUZpbHRlcigpIHtcbi8vICAgICB2YXIgc2VsZWN0ZWRDYXRlZ29yaWVzID0gQXJyYXkuZnJvbShjYXRlZ29yeUZpbHRlci5zZWxlY3RlZE9wdGlvbnMpLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbi8vXG4vLyAgICAgbWFya2Vyc0xheWVyLmdldFNvdXJjZSgpLmNsZWFyKCk7XG4vLyAgICAgbWFya2Vyc0RhdGEuZm9yRWFjaChmdW5jdGlvbihtYXJrZXIpIHtcbi8vICAgICAgICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcmllcy5pbmNsdWRlcygnYWxsJykgfHwgc2VsZWN0ZWRDYXRlZ29yaWVzLmluY2x1ZGVzKG1hcmtlci5jYXRlZ29yeSkpIHtcbi8vICAgICAgICAgICAgIHZhciBpY29uRmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbi8vICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQob2wucHJvai5mcm9tTG9uTGF0KFttYXJrZXIubG9uLCBtYXJrZXIubGF0XSkpLFxuLy8gICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG1hcmtlclxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICBpY29uRmVhdHVyZS5zZXRTdHlsZShuZXcgb2wuc3R5bGUuU3R5bGUoe1xuLy8gICAgICAgICAgICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuSWNvbih7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHA6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMvbXMvaWNvbnMvcmVkLWRvdC5wbmcnXG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIH0pKTtcbi8vICAgICAgICAgICAgIG1hcmtlcnNMYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlKGljb25GZWF0dXJlKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfVxuLy8gY2F0ZWdvcnlGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXBwbHlDYXRlZ29yeUZpbHRlcik7XG4vL1xuLy9cbi8vIC8vIEZvbmN0aW9uIHBvdXIgcmVjaGVyY2hlciB1biBtYXJxdWV1ciBwYXIgbGFiZWxcbi8vIGZ1bmN0aW9uIGZpbmRGZWF0dXJlQnlMYWJlbChsYWJlbCkge1xuLy8gICAgIHZhciBmZWF0dXJlcyA9IG1hcmtlcnNMYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgaWYgKGZlYXR1cmVzW2ldLmdldCgncHJvcGVydGllcycpLmxhYmVsID09PSBsYWJlbCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVzW2ldO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBudWxsO1xuLy8gfVxuLy9cbi8vIC8vIEFqb3V0ZXIgdW4gw6ljb3V0ZXVyIHBvdXIgbGUgY2hhbXAgZGUgcmVjaGVyY2hlXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgaW5wdXRMYWJlbCA9IHRoaXMudmFsdWUudHJpbSgpO1xuLy8gICAgIGlmIChpbnB1dExhYmVsLmxlbmd0aCA+IDApIHtcbi8vICAgICAgICAgdmFyIGZlYXR1cmUgPSBmaW5kRmVhdHVyZUJ5TGFiZWwoaW5wdXRMYWJlbCk7XG4vLyAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4vLyAgICAgICAgICAgICB2YXIgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbi8vICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4vLyAgICAgICAgICAgICAgICAgY2VudGVyOiBjb29yZGluYXRlcyxcbi8vICAgICAgICAgICAgICAgICB6b29tOiAxNCAvLyBWb3VzIHBvdXZleiBhanVzdGVyIGNlIHpvb20gc2Vsb24gdm9zIHByw6lmw6lyZW5jZXNcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgb3ZlcmxheS5zZXRQb3NpdGlvbihjb29yZGluYXRlcyk7XG4vLyAgICAgICAgICAgICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gJzxoMz4nICsgZmVhdHVyZS5nZXQoJ3Byb3BlcnRpZXMnKS5sYWJlbCArICc8L2gzPjxwPicgKyBmZWF0dXJlLmdldCgncHJvcGVydGllcycpLmRlc2NyaXB0aW9uICsgJzwvcD4nO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgb3ZlcmxheS5zZXRQb3NpdGlvbih1bmRlZmluZWQpO1xuLy8gICAgICAgICAgICAgcG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSk7XG5cbi8vXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuLy8gICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbi8vICAgICB2YXIgc2VsZWN0ZWRDYXRlZ29yaWVzID0gQXJyYXkuZnJvbShjYXRlZ29yeUZpbHRlci5zZWxlY3RlZE9wdGlvbnMpLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbi8vICAgICBjbG9zZUFsbExpc3RzKCk7XG4vL1xuLy8gICAgIGlmICh2YWwubGVuZ3RoIDw9IDApIHtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbi8vICAgICBpdGVtcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dC5pZCArIFwiLWF1dG9jb21wbGV0ZS1saXN0XCIpO1xuLy8gICAgIGl0ZW1zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuLy8gICAgIGlucHV0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuLy9cbi8vICAgICB2YXIgbWF0Y2hlZExhYmVscyA9IG1hcmtlcnNEYXRhLmZpbHRlcihtYXJrZXIgPT4gbWFya2VyLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsLnRvTG93ZXJDYXNlKCkpICYmXG4vLyAgICAgICAgIChzZWxlY3RlZENhdGVnb3JpZXMuaW5jbHVkZXMoJ2FsbCcpIHx8IHNlbGVjdGVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhtYXJrZXIuY2F0ZWdvcnkpKSk7XG4vL1xuLy8gICAgIG1hdGNoZWRMYWJlbHMuZm9yRWFjaChtYXJrZXIgPT4ge1xuLy8gICAgICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4vLyAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbWFya2VyLmxhYmVsO1xuLy8gICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuaW5uZXJIVE1MO1xuLy8gICAgICAgICAgICAgY2xvc2VBbGxMaXN0cygpO1xuLy8gICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBmaW5kRmVhdHVyZUJ5TGFiZWwoaW5wdXQudmFsdWUpO1xuLy8gICAgICAgICAgICAgaWYgKGZlYXR1cmUpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbi8vICAgICAgICAgICAgICAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuLy8gICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxuLy8gICAgICAgICAgICAgICAgICAgICB6b29tOiAxNFxuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgIG92ZXJsYXkuc2V0UG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuLy8gICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudC5pbm5lckhUTUwgPSAnPGgzPicgKyBmZWF0dXJlLmdldCgncHJvcGVydGllcycpLmxhYmVsICsgJzwvaDM+PHA+JyArIGZlYXR1cmUuZ2V0KCdwcm9wZXJ0aWVzJykuZGVzY3JpcHRpb24gKyAnPC9wPic7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIG92ZXJsYXkuc2V0UG9zaXRpb24odW5kZWZpbmVkKTtcbi8vICAgICAgICAgICAgICAgICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy9cbi8vIGZ1bmN0aW9uIGNsb3NlQWxsTGlzdHMoZWxtbnQpIHtcbi8vICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgaWYgKGVsbW50ICE9PSBpdGVtc1tpXSAmJiBlbG1udCAhPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9pbnB1dCcpKSB7XG4vLyAgICAgICAgICAgICBpdGVtc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1zW2ldKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbi8vICAgICBjbG9zZUFsbExpc3RzKGUudGFyZ2V0KTtcbi8vIH0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY2VudGVyIiwib2wiLCJwcm9qIiwiZnJvbUxvbkxhdCIsIm1hcmtlcnNEYXRhIiwibmFtZSIsImxvbiIsImxhdCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsIm1hcmtlcnNMYXllciIsImxheWVyIiwiVmVjdG9yIiwic291cmNlIiwiZmVhdHVyZXMiLCJtYXAiLCJtYXJrZXIiLCJpY29uRmVhdHVyZSIsIkZlYXR1cmUiLCJnZW9tZXRyeSIsImdlb20iLCJQb2ludCIsInByb3BlcnRpZXMiLCJzZXRTdHlsZSIsInN0eWxlIiwiU3R5bGUiLCJpbWFnZSIsIkljb24iLCJzcmMiLCJtYXBPcHRpb25zIiwidmlldyIsIlZpZXciLCJ6b29tIiwibWF4Wm9vbSIsImxheWVycyIsIlRpbGUiLCJXTVRTIiwidXJsIiwibWF0cml4U2V0IiwiZm9ybWF0IiwicHJvamVjdGlvbiIsImdldCIsInRpbGVHcmlkIiwidGlsZWdyaWQiLCJvcmlnaW4iLCJyZXNvbHV0aW9ucyIsIm1hdHJpeElkcyIsInRhcmdldCIsIk1hcCIsIm92ZXJsYXkiLCJPdmVybGF5IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhdXRvUGFuIiwiYXV0b1BhbkFuaW1hdGlvbiIsImR1cmF0aW9uIiwiYWRkT3ZlcmxheSIsInBvcHVwQ29udGVudCIsInBvcHVwQ2xvc2VyIiwib24iLCJldnQiLCJmZWF0dXJlIiwiZm9yRWFjaEZlYXR1cmVBdFBpeGVsIiwicGl4ZWwiLCJjb29yZGluYXRlcyIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJzZXRQb3NpdGlvbiIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIm9uY2xpY2siLCJlIiwiZHJhZ2dpbmciLCJnZXRFdmVudFBpeGVsIiwib3JpZ2luYWxFdmVudCIsImhpdCIsImhhc0ZlYXR1cmVBdFBpeGVsIiwiZ2V0VGFyZ2V0RWxlbWVudCIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=