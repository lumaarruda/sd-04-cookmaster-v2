const express = require('express');

const app = express();

const usersController = require('./middlewares/userValidation.js');
const loginController = require('./controllers/loginController');
// const recipesController = require('./controllers/recipesController');

app.use(express.json());

app.use('/login', loginController);
app.use('/users', usersController);
// app.use('/recipes', recipesController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(3000, () => console.log('Listening on port 3000'));
