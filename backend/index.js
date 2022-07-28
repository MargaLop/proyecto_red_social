require('./connection');

const Product = require('./models/places')

const product = new Product({
    name: 'Madrid',
    provincia: 'Mdrid',
    codPostal: 20555,
    description: 'Capital de España, rica agua, buena agua'
});

//asincrono
product.save((err,document) => {
    if (err) console.log(err);
    console.log(document)
});
