const connection = require('./connection');
const { ObjectId } = require('mongodb');

const addRecipe = async (name, ingredients, preparation, userId) => {
  const result = await connection().then((db) =>
    db.collection('recipes').insertOne({ name, ingredients, preparation, userId }),
  );

  return result.ops[0];
};

module.exports = { addRecipe };
