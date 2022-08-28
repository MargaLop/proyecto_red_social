var markerPlace = { lat:39.90, lng: -4.6679915}
var marker = new tt.Marker().setLngLat(markerPlace).addTo(map);
var popup = new tt.Popup({ anchor: 'top' })
marker.setPopup(popup).togglePopup()