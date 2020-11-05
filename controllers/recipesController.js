const express = require('express');
const validateToken = require('../middlewares/middleValidateToken');
const validateRecipe = require('../middlewares/middleValidateRecipes');
const recipeModel = require('../models/recipesModel');

const router = express.Router();

// POST  /recipes
router.post('/', validateToken.validationToken, validateRecipe.validateRecipe, async (req, res) => {
  try {
    const { id } = req.user;
    const { name, ingredients, preparation } = req.body;
    const recipe = await recipeModel.add(name, ingredients, preparation, id);
    return res.status(201).json({ recipe });
  } catch (error) {
    res.status(501).json({ message: 'Falha ao criar receita' });
  }
});

router.get('/', async (req, res) => {
  try {
    const recipes = await recipeModel.findAll();
    return res.status(200).json(recipes);
  } catch (error) {}
});

module.exports = router;
