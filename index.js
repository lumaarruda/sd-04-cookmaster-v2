const express = require('express');

const app = express();
// Iniciando...

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
