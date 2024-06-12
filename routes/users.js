var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

const registerValidation = require('../middleware/register-validation')

router.get('/profile', usersController.profile)

router.get('/profile-edit', usersController.profileEdit)

router.get('/login', usersController.login)

router.get('/register', usersController.formulario)

router.post('/addProfile', registerValidation, usersController.register)


module.exports = router;