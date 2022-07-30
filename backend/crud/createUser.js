require('./conection');

const User = require('./models/places');

async function createUser(){
    const user = new User({
        username:'qwerty',
        password:'12345'
    });
    await user.save();
};

createUser();