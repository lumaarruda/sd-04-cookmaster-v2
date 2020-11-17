const express = require('express');
const middlewares = require('./middlewares');
const controller = require('./controllers');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/users', middlewares.validations.validarCadastro, middlewares.validations.existEmail, controller.cadastro);

app.use((err, _req, res, _next) => {
  res.status(405).json(err.message);
});

app.listen(3000, console.log('rodando'));
