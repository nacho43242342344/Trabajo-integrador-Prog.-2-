const db = require('../database/models')

const stockController = {
    search: function(req, res) {
        let nombreBusqueda = req.query.search; //obtiene el valor del parámetro de consulta llamado "search".
        return res.render('search-results', { datos: db.productos, nombreBusqueda: nombreBusqueda });// nombreBusqueda seria nuestro termino de busqueda que el usuario ingreso y que se va a filtar
    },
    productAdd:function(req,res){
                return res.render('product-add', {datos:db })
    },
}


module.exports = stockController;