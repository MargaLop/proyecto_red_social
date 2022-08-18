var selectCity = document.getElementById("select-cities");

/*No es la solucion definitiva, es una prueba,
en un futuro se hara la llamada asincrona*/
const jsonCities = [
	{
		"ciudad": 0,
		"coord": {"lat":37.1960852121, "lng":-2.3448128003}
	}, {
		"ciudad": 1,
		"coord": {"lat":38.8254086192, "lng":-1.98037326935}
	}, {
		"ciudad": 2,
		"coord": {"lat":38.4786378049, "lng":-0.568699068376}
	}, {
		"ciudad": 3,
		"coord": {"lat":37.1960852121, "lng":-2.3448128003}
	}, {
		"ciudad": 4,
		"coord": {"lat":43.292357861, "lng":-5.99350932547}
	}, {
		"ciudad": 5,
		"coord": {"lat":40.5710367492, "lng":-4.94553505619}
	}, {
		"ciudad": 6,
		"coord": {"lat":38.7097707381, "lng":-6.14158521981}
	}, {
		"ciudad": 7,
		"coord": {"lat":39.5751889864, "lng":2.91229172079}
	}, {
		"ciudad": 8,
		"coord": {"lat":41.7310008895, "lng":1.98405401772}
	}, {
		"ciudad": 9,
		"coord": {"lat":42.3687127267, "lng":-3.58574245567}
	}, {
		"ciudad": 10,
		"coord": {"lat":39.7118899607, "lng":-6.16082194997}
	}, {
		"ciudad": 11,
		"coord": {"lat":36.5538729195, "lng":-5.7604183752}
	}, {
		"ciudad": 12,
		"coord": {"lat":43.1975220484, "lng":-4.03002122038}
	}, {
		"ciudad": 13,
		"coord": {"lat":40.2413705852, "lng":-0.146777086937}
	}, {
		"ciudad": 14,
		"coord": {"lat":35.8934069863, "lng":-5.34342403891}
	}, {
		"ciudad": 15,
		"coord": {"lat":38.9256128254, "lng":-3.82809764894}
	}, {
		"ciudad": 16,
		"coord": {"lat":37.9926944409, "lng":-4.80926161095}
	}, {
		"ciudad": 17,
		"coord": {"lat":39.8960496846, "lng":-2.19567153274}
	}, {
		"ciudad": 18,
		"coord": {"lat":42.1280117119, "lng":2.6735559327}
	}, {
		"ciudad": 19,
		"coord": {"lat":37.3125169672, "lng":-3.26788107732}
	}, {
		"ciudad": 20,
		"coord": {"lat":40.8134495654, "lng":-2.62368878371}
	}, {
		"ciudad": 21,
		"coord": {"lat":43.1437759117, "lng":-2.19417845709}
	}, {
		"ciudad": 22,
		"coord": {"lat":37.5771794021, "lng":-6.82930221031}
	}, {
		"ciudad": 23,
		"coord": {"lat":42.2030557371, "lng":-0.0728865943582}
	}, {
		"ciudad": 24,
		"coord": {"lat":38.0165122783, "lng":-3.44169215171}
	}, {
		"ciudad": 25,
		"coord": {"lat":43.1257958229, "lng":-8.4642836868}
	}, {
		"ciudad": 26,
		"coord": {"lat":42.2748706958, "lng":-2.5170441194}
	}, {
		"ciudad": 27,
		"coord": {"lat":28.3624928216, "lng":-14.5509933924}
	}, {
		"ciudad": 28,
		"coord": {"lat":42.6199552439, "lng":-5.83988102629}
	}, {
		"ciudad": 29,
		"coord": {"lat":42.0439686698, "lng":1.04798206104}
	}, {
		"ciudad": 30,
		"coord": {"lat":43.011764, "lng":-7.44638404764}
	}, {
		"ciudad": 31,
		"coord": {"lat":40.4950873744, "lng":-3.71704619215}
	}, {
		"ciudad": 32,
		"coord": {"lat":36.8138591651, "lng":-4.72586195603}
	}, {
		"ciudad": 33,
		"coord": {"lat":35.2908279949, "lng":-2.95053552337}
	}, {
		"ciudad": 34,
		"coord": {"lat":38.0023681653, "lng":-1.48575629332}
	}, {
		"ciudad": 35,
		"coord": {"lat":42.6672011509, "lng":-1.64611414443}
	}, {
		"ciudad": 36,
		"coord": {"lat":42.1964503002, "lng":-7.59259790937}
	}, {
		"ciudad": 37,
		"coord": {"lat":42.3718338546, "lng":-4.53585717538}
	}, {
		"ciudad": 38,
		"coord": {"lat":42.435764706, "lng":-8.46106294738}
	}, {
		"ciudad": 39,
		"coord": {"lat":40.8049892162, "lng":-6.06541224773}
	}, {
		"ciudad": 40,
		"coord": {"lat":41.1710254065, "lng":-4.05415057783}
	}, {
		"ciudad": 41,
		"coord": {"lat":37.4356699135, "lng":-5.68277303032}
	}, {
		"ciudad": 42,
		"coord": {"lat":41.6207742504, "lng":-2.58874304739}
	}, {
		"ciudad": 43,
		"coord": {"lat":41.0876143957, "lng":0.818127863314}
	}, {
		"ciudad": 44,
		"coord": {"lat":28.3125567678, "lng":-17.017856743}
	}, {
		"ciudad": 45,
		"coord": {"lat":40.6612619615, "lng":-0.815532258446}
	}, {
		"ciudad": 46,
		"coord": {"lat":39.7937341614, "lng":-4.14815562595}
	}, {
		"ciudad": 47,
		"coord": {"lat":39.3702562375, "lng":-0.800789615081}
	}, {
		"ciudad": 48,
		"coord": {"lat":41.6341260695, "lng":-4.84719141141}
	}, {
		"ciudad": 49,
		"coord": {"lat":43.2376797057, "lng":-2.85260007926}
	}, {
		"ciudad": 50,
		"coord": {"lat":41.7271743961, "lng":-5.98053925522}
	}, {
		"ciudad": 51,
		"coord": {"lat":41.6203648019, "lng":-1.06449678144}
	}
]

document
    .getElementById("btn-buscar")
    .addEventListener('click', (event) => {
		var idCity = selectCity.value
		var coordsCity = jsonCities[idCity].coord
		tt.map({ 
			key: keyMap, 
			container: "map",
			center: tt.map({ 
				key: keyMap, 
				container: "map",
				center: coordsCity, 
				zoom: 9
			  }), 
		  });
	});
