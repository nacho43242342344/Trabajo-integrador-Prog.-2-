var express = require('express');
var router = express.Router();

let stockController = require('../controllers/stockController')
let productAddValidation = require("../middleware/product-add-validation")

router.post('/add', productAddValidation, stockController.productAdd)

router.get("/addProd", stockController.crear)

router.get('/search', stockController.search)

module.exports = router;
