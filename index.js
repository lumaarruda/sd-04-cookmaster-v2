const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar!
app.get('/', (request, response) => {
  response.send();
});
