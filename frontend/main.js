var selectCity = document.getElementById("select-cities");
var cityNameSelect = document.getElementById("select-cities");
 

document
 	.getElementById("btn-buscar")
 	.addEventListener('click', (event) => {
		var idCity = selectCity.value
		var coordsCity = jsonCities[idCity].coord
		console.log(jsonCities[idCity].ciudad)
		map=tt.map({ 
			key: keyMap, 
			container: "map",
			center:coordsCity, 
			zoom:13,
			bearing: 0,
			maxZoom: 21,
			minZoom: 3.5,
		  }); 
		var marker = new tt.Marker().setLngLat(coordsCity).addTo(map);
		var popup = new tt.Popup({ anchor: 'top' }).setText(jsonCities[idCity].ciudad)
		marker.setPopup(popup).togglePopup()

});
