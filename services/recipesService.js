const recipesModel = require('../models/recipesModel');

const add = async (name, ingredients, preparation, userId) => {
  const newRecipe = await recipesModel.add(name, ingredients, preparation, userId);
  return newRecipe;
};

const getAll = async () => {
  const recipes = await recipesModel.getAll();
  return recipes;
};

const getOne = async (id) => {
  const recipe = await recipesModel.getById(id);
  return recipe;
};

module.exports = {
  add,
  getAll,
  getOne,
};
