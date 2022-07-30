require('./connection');

const User = require('./models/user');

async function createUser(){
    const user = new User({
        username:'pedro',
        password:'12345'
    });
    await user.save();
};

createUser();