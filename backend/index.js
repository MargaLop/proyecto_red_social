require('./connection');

const Product = require('./models/places')

const product = new Product({
    name: 'Madrid',
    provincia: 'Mdrid',
    lat: 20555,
    long: 1234,
    description: 'Capital de España, rica agua, buena agua'
});

//asincrono
product.save((err,document) => {
    if (err) console.log(err);
    console.log(document)
});
