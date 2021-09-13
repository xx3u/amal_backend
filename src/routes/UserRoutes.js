const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { RegisterSchema, LoginSchema } = require('../schemas/schemas');
const validationMiddleware = require('../middleware/validationMiddleware');
const accessByRole = require('../middleware/accessByRole');
const auth = require('../middleware/passport');

router.post('/register', auth, accessByRole('admin'), validationMiddleware(RegisterSchema), UserController.register);
router.post('/login', validationMiddleware(LoginSchema), UserController.login);
router.post('/token', UserController.token);

module.exports = router;
