var myHeaders = new Headers();
var keyGeo = require('./.env')
myHeaders.append("Cookie", "PHPSESSID=uat7uu0q19c1ajnske0n66eegj");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.tomtom.com/map/1/style/metadata.xml?key=${keyApi}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));