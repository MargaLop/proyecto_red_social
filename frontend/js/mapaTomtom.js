const keyMap = require('../../backend/API/.env');
var map;

function start() { 
    console.log("running")
    map = new tt.map({
        "key": keyMap,
        "container":"map",
    });
}

map.on('load',function() {
  setTimeout( function() { 
      //Using the flyTo function to smoothly animate 
      // the map to a new position
      map.flyTo({
          "center":{lat:37.336634, lng: -121.891623},
          "zoom":13
      })
  }, 6000)
}); 
