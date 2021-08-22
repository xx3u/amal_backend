const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { RegisterSchema, LoginSchema } = require('../schemas/schemas');
const validationMiddleware = require('../middleware/validationMiddleware');

router.post('/register', validationMiddleware(RegisterSchema), UserController.register);
router.post('/login', validationMiddleware(LoginSchema), UserController.login);

module.exports = router;
