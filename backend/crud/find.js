require('../connection');

const Place = require('../models/places');

async function main(){
    const places = await Place.find({name:'Madrid'})
    console.log(places)
}

main()
