const {Schema, model} = require('mongoose');

const placeSchema = new Schema({
    name: String,
    provincia: String,
    codPostal: {
        Type: Number,
        default: 0
    },
    description: String
});

module.exports = model('Places', placeSchema);
