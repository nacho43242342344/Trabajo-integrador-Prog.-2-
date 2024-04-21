var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')

router.get('/profile', usersController.profile)

router.get('/profile-edit', usersController.profileEdit)

router.get('/login', usersController.login)

router.get('/register', usersController.register)

module.exports = router;
