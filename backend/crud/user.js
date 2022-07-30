const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        requiered:true
    },
    password: String,
    date:{
        type: Date,
        default: new Date()
    }
});

module.exports = model('user', userSchema);
