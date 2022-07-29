const {Schema, model} = require('mongoose');

const placeSchema = new Schema({
    name: String,
    provincia: String,
    lat: Number,
    long: Number,
    description: String
});

module.exports = model('Places', placeSchema);
