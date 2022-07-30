require('./connection');

const User = require('./models/places');

async function createUser(){
    const user = new User({
        username:'pedro',
        password:'12345'
    });
    await user.save();
};

createUser();