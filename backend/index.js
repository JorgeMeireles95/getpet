const express = require('express');
const cors = require('cors');
const app = express();



//configura JSON para o express
app.use(express.json());
                                       //libera para acessar a api
app.use(cors({credentials: true, origin:'http://localhost:3000'})) // permite que o front-end acesse o back-end




//Imagens
app.use(express.static('public'));



//Rotas

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(5000, () => {
  console.log('o server está rodando http://localhost:3000');
});