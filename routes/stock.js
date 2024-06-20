var express = require('express');
var router = express.Router();

let stockController = require('../controllers/stockController')

router.get('/add', stockController.productAdd)

router.get('/search', stockController.search)

module.exports = router;
