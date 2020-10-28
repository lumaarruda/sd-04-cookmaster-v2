const { userModels } = require('../../model');
const { HTTPStatus } = require('../../config');
const { errorsMessages } = require('../../service');

const createUserController = async (req, res) => {
  try {
    const role = 'user';
    const data = { ...req.body, role };
    const userCreate = await userModels.createUserModel(data);
    console.log('user create', userCreate);

    return res.status(HTTPStatus.CREATED).json(userCreate);
  } catch (err) {
    console.error('createUserController', err);
    return errorsMessages(res);
  }
};

module.exports = createUserController;
