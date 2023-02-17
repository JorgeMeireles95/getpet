const mongoose = require('../db/conn.js');
const {Schema} = mongoose;



const User = mongoose.model(
    'User', new Schema({

    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    image:{
        type: String,
    },
    phone:{
        type: String,
        required:true
    },

    },
    // quando dado for criado ou atualizado, ele vai criar um campo chamado createdAt e updatedAt
    {timestamps: true}),
);






module.exports = User;