//const db = require('../database/models')
const db = require("../db/index")

const mainController = {
    index:function(req,res){
        return res.render('index', { info:db.productos })
    },
    show:function (req,res) {
        let rta;
        let busquedaRelojes = req.params.idRelojes
        for (let i = 0; i < db.productos.length; i++) {
            if(busquedaRelojes.toLowerCase() === db.productos[i].nombre.toLowerCase()){
                rta = db.productos[i]
            };           
        }
        return res.render('product', {datos:rta})
    },
}

module.exports = mainController;