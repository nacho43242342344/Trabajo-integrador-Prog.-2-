var express = require('express');
var router = express.Router();

let foroController = require('../controllers/controlador')

router.get('/', foroController.index)

router.get('/headerLogueado', foroController.header)

router.get('/login', foroController.login)

router.get('/relojes', foroController.show)

//router.ger('/product-add', foroController.product-add)

router.get('/profile/:profile-edit?', foroController.profile)

router.get('/register', foroController.register)

router.get('/search-results', foroController.search)

module.exports = router;
