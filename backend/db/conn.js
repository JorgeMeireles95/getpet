const mongoose = require('mongoose');


async function connect() {
   await mongoose.connect('mongodb://localhost:27017/getapet') 
        console.log('Conectado ao banco de dados');
}



connect().catch(error => console.log(error));




module.exports = mongoose;