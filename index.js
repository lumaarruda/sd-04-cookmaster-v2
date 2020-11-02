const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', userRouter);

app.listen(3000, () => console.log('Ouvindo porta 3000'));
