const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createOne = async (collection, query) => {
  try {
    const db = await connection();
    const result = await db.collection(collection).insertOne(query);
    return result.ops[0];
  } catch (err) {
    throw err;
  }
};

const findOne = async (collection, query) => {
  try {
    const db = await connection();
    const results = await db.collection(collection).findOne(query);
    return results;
  } catch (err) {
    throw err;
  }
};

const findAll = async (collection) => {
  try {
    const db = await connection();
    const results = await db.collection(collection).find({}).toArray();
    return results;
  } catch (err) {
    throw err;
  }
};

const findById = async (collection, id) => {
  if (!ObjectId.isValid(id)) return null;
  try {
    const db = await connection();
    const result = await db.collection(collection).findOne(ObjectId(id));
    return result;
  } catch (err) {
    throw err;
  }
};

const update = async (collection, id, query) => {
  try {
    const db = await connection();
    const edit = await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: query });
    return edit;
  } catch (err) {
    throw err;
  }
};

module.exports = { createOne, findOne, findAll, findById, update };
