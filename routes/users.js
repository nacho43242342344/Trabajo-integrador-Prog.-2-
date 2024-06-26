var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

const registerValidation = require('../middleware/register-validation');
const loginValidation = require('../middleware/login-validation');

router.post('/profileValidation', loginValidation, usersController.profileL)

router.get('/profile-edit', usersController.profileEdit)

router.get('/login', usersController.login)

router.get('/register', usersController.formulario)

router.post('/addProfile', registerValidation, usersController.register)

router.get('/profile/:id', usersController.pieroCrack)

router.post('/logout', usersController.logout);



module.exports = router;