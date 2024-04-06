const db = require('../db/index')
const { search } = require('../routes')

const foroController = {
    index:function(req,res){
        return res.render('index', { datos:db })
    },
    header:function (req,res) {
        return res.render('headerLogueado', { datos:db })
    },
    login:function (req,res) {
        return res.render('login', { datos:db })
    },
    show:function (req,res) {
        return res.render('product', { datos:db })
    },
    profile:function (req,res) {
        return res.render('profile', { datos:db })
    },
    register:function (req,res) {
        return res.render('register', { datos:db })
    },
    search:function (req,res) {
        return res.render('search-results', { datos:db })
    }
}


module.exports = foroController;