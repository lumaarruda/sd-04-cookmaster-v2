const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', userController);

app.use('/login', (req, res) => {
  res.send('<h1><i>login</i></h1>');
});

app.listen(port, () => console.log(`Rodando no localhost:${port}...`));
