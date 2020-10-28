const express = require('express');
const UserModel = require('../models/userModel');
const Auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  const user = await UserModel.findByEmail(email);

  if (!user || user.password !== password || !regex.test(email)) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  const { password: __, ...userWithoutPwd } = user;
  const token = Auth.createToken(userWithoutPwd);

  return res.status(200).json({ token });
});

module.exports = router;
