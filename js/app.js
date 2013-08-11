App = Ember.Application.create();


 
 /*   $('#add').click(function() { 
      var marker = L.marker(new L.LatLng(53.9, 27.57), {
                icon: L.mapbox.marker.icon({'marker-color': 'CC0033'}),
                draggable: true
            });

      marker.bindPopup('This marker is draggable! Move it around.');
      marker.addTo(map); 
    }); */
 
$(function() {
        $('#add').click(function() { 
    L.mapbox.markerLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [53.9, 27.57]
    },
    properties: {
        title: 'A Single Marker',
        description: 'Just one of me',
        // one can customize markers by adding simplestyle properties
        // http://mapbox.com/developers/simplestyle/
        'marker-size': 'large',
        'marker-color': '#f0a'
    }
}).addTo(map);
    }); 
 });

App.ClickableView = Ember.View.extend({
  click: function(event){
   var marker = L.marker(new L.LatLng(53.9, 27.57), {
                icon: L.mapbox.marker.icon({'marker-color': 'CC0033'}),
                draggable: true
            });

      marker.bindPopup('This marker is draggable! Move it around.');
      marker.addTo(map);
  }
});