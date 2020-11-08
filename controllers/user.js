const { userModel } = require('../model');
const jwtToken = require('../services/jwtToken');

const newUser = async (req, res) => {
  const userData = req.body;
  userData.role = 'user';

  userModel
    .create(userData)
    .then((response) => res.status(201).send({ user: response }))
    .catch(() => res.status(409).send({ message: 'Email already registered' }));
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userData = await userModel.user('email', email);

  if (!userData || userData.password !== password) {
    return res.status(401).send({ message: 'Incorrect username or password' });
  }
  const token = jwtToken.create(userData);
  userData.token = token;

  return res.status(200).send(userData);
};

module.exports = { newUser, login };
