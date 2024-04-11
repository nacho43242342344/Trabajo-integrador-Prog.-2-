const db = require('../db/index')

const foroController = {
    index:function(req,res){
        return res.render('index', { info:db.productos })
    },
    header:function (req,res) {
        return res.render('headerLogueado', { datos:db })
    },
    login:function (req,res) {
        return res.render('login', { datos:db })
    },
    show:function (req,res) {
        let rta;
        let busquedaRelojes = req.params.idRelojes
        for (let i = 0; i < db.productos.length; i++) {
            if(busquedaRelojes.toLowerCase() === db.productos[i].nombre.toLowerCase()){
                rta = db.productos[i]
            };           
        }
        return res.render('product', { datos:rta})
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
    // productAdd:function(req,res){
    //     return res.render('product-add', {})
    // }
}


module.exports = foroController;