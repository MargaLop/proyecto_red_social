require('../connection');

const Place = require('../models/places');

async function createPlace(){
    const savePlace = new Place({
        name: 'Sgovia',
        description: 'muy bonico'
    })
    await savePlace.save();
}

createPlace()