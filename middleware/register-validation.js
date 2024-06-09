const { body } = require("express-validator")
const db = require("../database/models")

let registerValidation = [ 
    body('email') 
        .notEmpty().withMessage('Debe ingresar un mail.').bail()
        .custom(function (value) {
            return db.User.findOne({
                where: { email:value },
            })
            .then(function(user){
                if(user){
                    throw new Error('El mail ingresado ya existe.')
                }
            })
        }),
    body('usuario')
        .notEmpty().withMessage('Debe ingresar un nombre de usuario.').bail(),
    body('contraseña')
        .notEmpty().withMessage('Ingrese una contraseña.').bail()
        .isLength({min:4}).withMessage('La contraseña debe ser mas larga.')

]

module.exports = registerValidation;