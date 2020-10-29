const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// rota para adicionar usuario
app.post('/users', userController.addUserController);

app.post('/login', loginController.loginUser);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!');
});
