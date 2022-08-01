require('../connection');

const User = require('../models/user');
 
async function updateUser(){
    const user = await User.updateOne({username:'pedro'},{password:'12345'})
    console.log(user)
};

updateUser(); 
