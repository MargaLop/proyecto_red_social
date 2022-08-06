var myHeaders = new Headers();
var keyGeo = require('./.env')
myHeaders.append("Cookie", "PHPSESSID=uat7uu0q19c1ajnske0n66eegj");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`http://apiv1.geoapi.es/poblaciones?CPRO=22&CMUM=907&type=JSON&key=${keyGeo}&sandbox=1`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));