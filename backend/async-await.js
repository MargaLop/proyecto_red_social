require('./connection');

const Place = require('./models/places');

async function main(){
    const place = new Place({
        name: 'Madrid',
        provincia: 'Mdrid',
        lat: 20555,
        long: 50996,
        description: 'Capital de España, rica agua, buena agua'
    });

    const placeSaved = await place.save();
    return placeSaved;
};

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err));
