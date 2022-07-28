require('./connection');

const Product = require('./models/places')

const product = new Product({
    name: 'Madrid',
    provincia: 'Mdrid',
    codPostal: 20555,
    description: 'Capital de España'
});

console.log(product);
