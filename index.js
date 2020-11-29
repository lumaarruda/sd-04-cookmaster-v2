const express = require('express');

// importando userController do controller
const userController = require('./controllers/userController');
// importando login do controller
const login = require('./controllers/login');
// importando recipesController
const recipesController = require('./controllers/recipesController');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', userController);

app.use('/login', login);

app.use('/recipes', recipesController);

app.listen(port, () => console.log(`Rodando no localhost:${port}...`));
