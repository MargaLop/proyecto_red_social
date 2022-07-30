require('../connection');

const User = require('../models/user');

async function getUser(){
    const userFound = await User.findOne({username:'pedro'})
    console.log(userFound)
}

getUser()