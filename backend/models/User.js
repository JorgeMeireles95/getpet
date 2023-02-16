const mongoose = require('../db/conn.js');
const {Schema} = mongoose;



const User = mongoose.model(
    'User', new Schema({

    name:{
        type: String,
        required
    },
    email:{
        type: String,
        required
    },
    image:{
        type: String,
    },
    phone:{
        type: String,
        required
    }

},
// quando dado for criado ou atualizado, ele vai criar um campo chamado createdAt e updatedAt
{timestamps: true}),
);






module.exports = User;