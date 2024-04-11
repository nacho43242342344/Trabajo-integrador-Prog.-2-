var express = require('express');
var router = express.Router();

let foroController = require('../controllers/controlador')

router.get('/', foroController.index)

router.get('/headerLogueado', foroController.header)

router.get('/login', foroController.login)

router.get('/relojes/:idRelojes', foroController.show)

//router.ger('/add', foroController.productAdd)

router.get('/profile/:profile-edit?/:email?/:usuario?/:contrasena?/:fechaNacimiento?/:nroDocumento?/:fotoPerfil?', foroController.profile)

router.get('/register', foroController.register)

router.get('/search-results', foroController.search)

module.exports = router;
