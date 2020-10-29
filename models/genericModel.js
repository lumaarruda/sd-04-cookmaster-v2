const connection = require('./connection');

const getBy = (collection, field, info) => connection()
  .then((db) => db.collection(collection).findOne({ [field]: info }));

const addNew = (collection, info) => connection()
  .then((db) => db.collection(collection).insertOne(info))
  .then(((result) => result.ops[0]));

module.exports = { getBy, addNew };
