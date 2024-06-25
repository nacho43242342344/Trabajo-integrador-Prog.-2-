var express = require('express');
var router = express.Router();

let stockController = require('../controllers/stockController')
let productAddValidation = require("../middleware/product-add-validation")

router.post('/add', productAddValidation, stockController.productAdd)

router.get("/addProd", stockController.crear)

router.get('/search', stockController.search)

router.get("/edit/:id", stockController.edit)

router.get("/borrar/:id", stockController.borrar)

router.post("/editprod/:id", productAddValidation, stockController.editProduct)

module.exports = router;
