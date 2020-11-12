const express = require('express');
const recipesValidations = require('../middlewares/recipesValidation');
const tokenValidations = require('../auth/validateToken');
const model = require('../models/model');

const router = express.Router();

// Register new recipe
router.post(
  '/',
  tokenValidations.validateAuthenticity(),
  tokenValidations.validateToken,
  recipesValidations.validateFields,
  async (req, res) => {
    try {
      const { name, ingredients, preparation } = req.body;
      const { _id } = req.user;

      const recipe = await model.add('recipes', { name, ingredients, preparation, userId: _id });
      return res.status(201).json({ recipe });
    } catch (_e) {
      res.status(501).json({ message: 'Failed to register new recipe!' });
    }
  },
);

// show all recipes
router.get(
  '/',
  tokenValidations.validateAuthenticity(false),
  tokenValidations.validateToken,
  async (_req, res) => {
    const recipes = await model.findAll('recipes');

    res.status(200).json(recipes);
  },
);

// show recipe
router.get(
  '/:id',
  tokenValidations.validateAuthenticity(false),
  tokenValidations.validateToken,
  recipesValidations.validateRecipeExistence,
  async (req, res) => res.status(200).json(req.recipe),
);

// update recipe
router.put(
  '/:id',
  tokenValidations.validateAuthenticity(),
  tokenValidations.validateToken,
  async (req, res) => {
    const { id } = req.params;
    const { role, _id } = req.user;
    const { name, ingredients, preparation } = req.body;

    const recipe = await model.findById('recipes', id);
    if (role === 'admin' || _id === recipe.userId) {
      await model.update('recipes', id, { name, ingredients, preparation });

      const updatedRecipe = await model.findById('recipes', id);

      return res.status(200).json(updatedRecipe);
    }

    return res.status(401).json({ message: 'you cant update this recipe' });
  },
);

module.exports = router;
