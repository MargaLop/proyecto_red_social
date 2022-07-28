const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/rsmargalop'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connect(uri) 
        .then(() => { 
			console.log("La conexión a la base de datos realizada conrrectamente!!!")
        })
        .catch(err => console.log(err));
		