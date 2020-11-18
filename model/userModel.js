/* eslint-disable function-paren-newline */
const { connect } = require('mongodb');
const connection = require('./connection');

const addUser = async ({ name, email, password }) =>
  connection().then((db) =>
    db.collection('users').insertOne({ name, email, password, role: 'user' }),
  );

const findByEmail = async ({ email }) =>
  connect().then((db) => db.collection('users').findOne({ email }));

// const findByEmail = async (userEmail) => {
//   const db = await connection();
//   const results = await db
//     .getTable('users')
//     .select(['id', 'email', 'password', 'first_name', 'last_name'])
//     .where('email = :email_param')
//     .bind('email_param', userEmail)
//     .execute();

//   const fetchResults = await results.fetchOne();
//   const [id, email, password, name, lastName] = fetchResults;
//   return {
//     id,
//     email,
//     password,
//     name,
//     lastName,
//   };
// };

// const findById = async (userId) => {
//   const db = await connection();
//   const results = await db
//     .getTable('users')
//     .select(['id', 'email', 'password', 'first_name', 'last_name'])
//     .where('id = :id')
//     .bind('id', userId)
//     .execute();

//   const fetchResults = await results.fetchOne();
//   const [id, email, password, name, lastName] = fetchResults;
//   return {
//     id,
//     email,
//     password,
//     name,
//     lastName,
//   };
// };

// const updateUser = async ({ id, email, password, firstName, lastName }) => {
//   const db = await connection();
//   await db
//     .getTable('users')
//     .update()
//     .set('email', email)
//     .set('password', password)
//     .set('first_name', firstName)
//     .set('last_name', lastName)
//     .where('id = :id')
//     .bind('id', id)
//     .execute();
// };

// const emailCheck = (userEmail) => /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(userEmail);

// const passwordCheck = (userPass) => /^(\d|\w){6,}$/.test(userPass);

// const confirmPassCheck = (firstpass, secondPass) => firstpass === secondPass;

// const nameCheck = (userName) => /\w{3,}/.test(userName);

// const isValid = {
//   emailCheck,
//   passwordCheck,
//   confirmPassCheck,
//   nameCheck,
// };

module.exports = {
  addUser,
  findByEmail,
  // findById,
  // updateUser,
  // isValid,
};
