const db = require('../database/models')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')

const usersController = {
    login:function (req,res) {
        return res.render('login', { datos:db })
    },
    profile:function (req,res) {
        return res.render('profile', { datos:db.usuario, prod:db.productos })
    },
    register:function (req,res) {
        const registerValidation = validationResult(req)
        if (registerValidation.isEmpty()) {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            }
        }else{
            return res.render ('register', {errors: registerValidation.mapped(), old: req.body})
        }
            db.User
                .create(user)
                .then(function (user) {
                    return res.redirect("/login");
                })
                .catch(function (error) {
                    console.log("Error al guardar el usuario", err)
                })
    },
    profileEdit:function (req, res) {
        return res.render('profile-edit', {datos:db })
    }
}

module.exports = usersController;