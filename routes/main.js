var express = require('express');
var router = express.Router();

let foroController = require('../controllers/controlador')

router.get('/', foroController.index)
router.get('/headerLogueado', foroController.header)
router.get('/login', foroController.login)
router.get('/relojes', foroController.show)
router.get('/product-add', foroController.prodAdd)
router.get('/profile', foroController.profile)
router.get('/profile-edit', foroController.profEdit)
router.get('/register', foroController.register)
router.get('/search-results', foroController.search)

module.exports = router;
