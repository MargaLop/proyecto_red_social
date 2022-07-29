require('../connection');

const Place = require('../models/places');

async function main(){
    const places = await Place.find()
    console.log(places)
}

main()
