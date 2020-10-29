const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/users', userController.register);

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
