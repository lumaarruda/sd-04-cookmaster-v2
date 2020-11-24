const connection = require('../database/connection');

const create = (user) =>
  connection()
  .then(async (schema) => {
    const userResp = await schema.collection('users').findOne({ email: user.email });
    if (userResp) {
      throw new Error('Email already registered');
    }
    return schema.collection('users').insertOne(user);
  })
  .then((result) => result.ops[0]);

const findByEmail = (email) =>
  connection()
  .then(async (schema) => {
    const userResp = await schema.collection('users').findOne({ email });
    if (!userResp) {
      throw new Error('Incorrect username or password');
    }
    return userResp;
  });

module.exports = { create, findByEmail };
