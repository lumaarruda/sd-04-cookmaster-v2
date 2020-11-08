const { ObjectId } = require('mongodb');
const connection = require('./connector');

const findById = async (collection, id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection(collection).findOne(ObjectId(id));
  return result;
};

const findAll = async (collection) => {
  const db = await connection();
  const results = await db.collection(collection).find({}).toArray();
  return results;
};

const findByName = async (collection, name) => {
  const db = await connection();
  const result = await db.collection(collection).findOne({ name });
  return result;
};

const findByEmail = async (collection, email) => {
  const db = await connection();
  const result = await db.collection(collection).findOne({ email });
  return result;
};

const createOne = async (collection, query) => {
  const db = await connection();
  const result = await db.collection(collection).insertOne(query);
  return result.ops[0];
};

const update = async (collection, id, query) => {
  const db = await connection();
  await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: query });
};

const remove = async (collection, id) => {
  const db = await connection();
  await db.collection(collection).deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  findAll,
  findByName,
  findByEmail,
  createOne,
  findById,
  update,
  remove,
};
