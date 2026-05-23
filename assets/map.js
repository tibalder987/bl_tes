var center = ol.proj.fromLonLat([-149.573503, -17.542943]); // Coordonnées de Tahiti

var markersData = [
    { name: 'Marker 2', lon: -149.573503, lat: -17.542943, label: 'Point A', description: 'Description du Point A', category: 'categoryA' }
];

var markersLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: markersData.map(function(marker) {
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
    layers: [
        new ol.layer.Tile({
            source: new ol.source.WMTS({
                url: 'https://www.tefenua.gov.pf/tefenua/api/wmts', // URL du service WMTS
                layer: 'TEFENUA:FOND', // Nom de la couche WMTS
                matrixSet: 'EPSG:4326', // Système de coordonnées
                format: 'image/jpeg',
                projection: ol.proj.get('EPSG:4326'),
                tileGrid: new ol.tilegrid.WMTS({
                    origin: [-180, 90],
                    resolutions: [
                        0.703125, 0.3515625, 0.17578125, 0.087890625,
                        0.0439453125, 0.02197265625, 0.010986328125,
                        0.0054931640625, 0.00274658203125, 0.001373291015625,
                        0.0006866455078125, 0.00034332275390625,
                        0.000171661376953125, 0.0000858306884765625,
                        0.00004291534423828125, 0.000021457672119140625,
                        0.000010728836059570312, 0.000005364418029785156,
                        0.000002682209014892578, 0.000001341104507446289
                    ],
                    matrixIds: [
                        'EPSG:4326:0', 'EPSG:4326:1', 'EPSG:4326:2',
                        'EPSG:4326:3', 'EPSG:4326:4', 'EPSG:4326:5',
                        'EPSG:4326:6', 'EPSG:4326:7', 'EPSG:4326:8',
                        'EPSG:4326:9', 'EPSG:4326:10', 'EPSG:4326:11',
                        'EPSG:4326:12', 'EPSG:4326:13', 'EPSG:4326:14',
                        'EPSG:4326:15', 'EPSG:4326:16', 'EPSG:4326:17',
                        'EPSG:4326:18', 'EPSG:4326:19', 'EPSG:4326:20'
                    ]
                }),
                style: 'default'
            })
        }),
        markersLayer
    ],
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