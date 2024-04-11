var express = require('express');
var router = express.Router();

let foroController = require('../controllers/controlador')

router.get('/', foroController.index)

router.get('/login', foroController.login)

router.get('/relojes/:idRelojes', foroController.show)

router.get('/add', foroController.productAdd)

router.get('/profile', foroController.profile)

router.get('/profile-edit', foroController.profileEdit)

router.get('/register', foroController.register)

router.get('/search-results', foroController.search)

module.exports = router;
