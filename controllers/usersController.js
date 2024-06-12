const db = require('../database/models')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const data = require("../db/index")

const usersController = {
    login:function (req,res) {
        return res.render('login', { datos:data })
    },
    profile:function (req,res) {
        return res.render('profile', { datos:data.usuario, prod:data.productos })
    },
    formulario: function (req,res) {
        return res.render('register')
    },
    register:function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const user = {
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                fechaNacimiento: req.body.fechaNacimiento,
                nroDocumento: req.body.nroDocumento,
                nroDocumento: req.body.nroDocumento
            }
            db.User.create(user)
                .then(function (user) {
                    req.session.user = user;
                    return res.redirect("/");
                })
                .catch(function (err) {
                    console.log("Error al guardar el usuario", err)
                })
            console.log(user)
        }else{
            return res.render ('register', {errors: errors.mapped(), old: req.body})
        }
    },
    profileEdit:function (req, res) {
        return res.render('profile-edit', {datos:data })
    }
}

module.exports = usersController;