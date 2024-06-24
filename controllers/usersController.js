const db = require('../database/models')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const data = require("../db/index")

const usersController = {
    login:function (req,res) {
        return res.render('login')
    },
    index: function(req, res){
        return res.render('profile')
    },
    profile: function (req, res) {
         
        users.findByPk(req.params.id, {

          include: [{association: 'productos_usuarios',
              include: [{ association: 'usuarios_comentario' }
              ],}
          ],
    
        }
        )
          .then(function (resul) {
            db.Product.findAll({
              where: { 
                id_usuario: req.params.id },
              order: [
                ['created_at', 'DESC']
            ],
              include: [
                { association: 'comentario' }
              ]
            })
              .then(function (data) {
                return res.render('profile', { resul: resul, data: data })
              })          
              .catch(function (err) {
                console.log(err);
              })
    
          })
          .catch(function (err) {
            console.log(err);
          })
      },
        
   /*
    profile:function (req,res) {
        const resultValidation = validationResult(req)

        if(!resultValidation.isEmpty()){
            console.log('resultValidation', JSON.stringify(resultValidation, null, 4));
            return res.render('login', { errors: resultValidation.mapped(), old: req.body })
        } else {
            db.User.findOne({
                where: [{email: req.body.email}]
            })
            .then(function (user) {
                req.session.user = user;

                if(req.body.remember != undefined) {
                    res.cookie('userId', user.id, {maxAge: 1000 * 60 * 2})
                    console.log('cookie establecida', user.id);
                }
                return res.redirect('/');
            })
            .catch(function(err) {
                console.log(err);
            })

        }
    },*/
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
    pieroCrack:function (req, res) {
        return res.render('profile', {datos:data.usuario, prod:data.productos})
    },
    profileEdit:function (req, res) {
        return res.render('profile-edit', {datos:data })
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("userId");
        return res.redirect("/")
    }
}

module.exports = usersController;