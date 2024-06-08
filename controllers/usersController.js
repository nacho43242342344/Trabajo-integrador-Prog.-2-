const db = require('../database/models')
const user = db.User

const usersController = {
    login:function (req,res) {
        return res.render('login', { datos:db })
    },
    profile:function (req,res) {
        return res.render('profile', { datos:db.usuario, prod:db.productos })
    },
    register:function (req,res) {
        return res.render('register', { datos:db })
    },
    profileEdit:function (req, res) {
        return res.render('profile-edit', {datos:db })
    }
}

module.exports = usersController;