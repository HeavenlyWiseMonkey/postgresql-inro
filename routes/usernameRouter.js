const { Router } = require('express');
const usernameController = require('../controllers/usernameController');

const usernameRouter = Router();

usernameRouter.get('/', usernameController.getUsernames);

usernameRouter.get('/new', usernameController.createUsernameGet);

usernameRouter.post('/new', usernameController.createUsernamePost);

usernameRouter.get('/delete', usernameController.deleteAllUsernames);

module.exports = usernameRouter;