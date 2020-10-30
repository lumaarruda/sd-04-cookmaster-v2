// const Joi = require('joi');

// const schema = Joi.object({
//   name: Joi.string().required(),
//   ingredients: Joi.string().email().required(),
//   preparation: Joi.string().required(),
// });

const validateRecipes = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    // const { error } = schema.validate(name, ingredients, preparation);
    // console.log('error', error);

    // if (!error) {
    //   return res.status(400).json({ message: 'Invalid entries. Try again.' });
    // }

    if (!name || !ingredients || !preparation) {
      return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
  } catch (error) {
    console.error('validateUser', error);
  }

  next();
};

module.exports = { validateRecipes };
