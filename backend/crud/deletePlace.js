require('../connection');

const Place = require('../models/places');

async function deletePlace(){
    const dlPlace = await Place.findByIdAndDelete({name:'Segovia'})
    console.log(dlPlace)
}

deletePlace()