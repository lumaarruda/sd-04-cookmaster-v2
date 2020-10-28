const { errorsMessages } = require('../service');
const { userModels } = require('../model');

const emailValid = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;

const validCreateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  switch (true) {
    case !name:
    case !email:
    case !password:
    case !emailValid.test(email):
      errorsMessages(res, 'Invalid entries. Try again.', 'bad_request');
      break;
    default:
      next();
  }
};

const emailValidator = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existOrNotProduct = await userModels.getByEmailModel(email);
    if (existOrNotProduct) {
      return errorsMessages(res, 'Email already registered', 'conflict');
    }
    next();
  } catch (err) {
    console.error('validationExistProd', err);
  }
};

module.exports = { validCreateUser, emailValidator };
