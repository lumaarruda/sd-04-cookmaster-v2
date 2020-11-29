const recipesModel = require('../models/recipesModel');

const register = async (req, res) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { user } = req;
    const { _id: id } = user;

    const recipe = await recipesModel.addRecipe(name, ingredients, preparation, id);

    return res.status(201).json({ recipe });
  } catch (_err) {
    res.status(500).json({ message: 'Error in controller register' });
  }
};

module.exports = { register };
