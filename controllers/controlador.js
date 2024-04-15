const db = require('../db/index')

const foroController = {
    index:function(req,res){
        return res.render('index', { info:db.productos })
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
        return res.render('profile', { datos:db.usuario, prod:db.productos })
    },
    register:function (req,res) {
        return res.render('register', { datos:db })
    },
    search: function(req, res) {
        let nombreBusqueda = req.query.search; //obtiene el valor del parámetro de consulta llamado "search".
        return res.render('search-results', { datos: db.productos, nombreBusqueda: nombreBusqueda });// nombreBusqueda seria nuestro termino de busqueda que el usuario ingreso y que se va a filtar
    },
    productAdd:function(req,res){
                return res.render('product-add', {datos:db })
    },
    profileEdit:function (req, res) {
        return res.render('profile-edit', {datos:db })
    }
}


module.exports = foroController;