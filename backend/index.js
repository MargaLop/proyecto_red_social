'use strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/myApp')
    .then(() => {
        console.log("coneccion a la BD joya");

        //creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correto");
        });

    })
    .catch(err => console.log(err));