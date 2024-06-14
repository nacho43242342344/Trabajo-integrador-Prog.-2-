const { body } = require("express-validator")
const db = require("../database/models");
const bcryptjs = require('bcryptjs');

let loginValidation = [
    body('email')
        .notEmpty().withMessage('Debe ingresar un mail').bail()
        .isEmail().withMessage('Debes ingresar un formato de mail valido').bail()
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: value}
            })
            .then(function(user){
                if(!user){
                    throw new Error('No existe un usuario con ese mail')
                }
            })
        }),
    body('password')
        .notEmpty().withMessage('Ingrese una contraseña').bail()
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: req.body.email}
            })
            .then(function(user){
                if(user){
                    const password = user.password
                    const passwordOk = bcryptjs.compareSync(value, password)
                    if(!passwordOk){
                        throw new Error('Contraseña incorrecta')
                    }
                }
            })
        })
]


module.exports = loginValidation;