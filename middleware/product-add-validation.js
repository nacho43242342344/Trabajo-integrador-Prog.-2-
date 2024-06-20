const { body } = require("express-validator")
const db = require("../database/models")

let productAddValidation = [
    body("nombre_archivo_imagen")
        .notEmpty().withMessage("Debe ingresar la foto de un producto").bail(),
    body("nombre_producto")
        .notEmpty().withMessage("Debe ingresar un nombre a su producto").bail(),
    body("descripcion")
        .notEmpty().withMessage("Debe ingresar una descripción")
]

module.exports = productAddValidation;