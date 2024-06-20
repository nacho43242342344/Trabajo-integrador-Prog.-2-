const db = require('../database/models')
//const db = require("../db/index")
const seq = db.Sequelize.Op

const stockController = {
    search: function(req, res) {
        
        db.Product.findAll({
            where :{
                [seq.or]: [ // comando or para que sea una regla o la otra.
                    {descripcion: {[seq.like]: req.query.search}},
                    {nombre_producto: {[seq.like]: req.query.search}}                    
                ]
            },
            order: [['created_at', 'DESC']], // para el orden descendente de lo ultimo que se agrega.

            include: [ // usamos los alias de los modelos.
                {association: 'usuarios'}
            ]
        })
        
            .then(function (data) {
                console.log(data)
            return res.send(data)
                return res.render('search-results', {data: data});} 
                )
            .catch(function (err) {
                return console.log(err);
            })        
    },/*
    search: function(req, res) {
        let nombreBusqueda = req.query.search; //obtiene el valor del parámetro de consulta llamado "search".
        return res.render('search-results', { datos: db.productos, nombreBusqueda: nombreBusqueda });// nombreBusqueda seria nuestro termino de busqueda que el usuario ingreso y que se va a filtar
    },*/
    productAdd:function(req,res){
        return res.render('product-add', {datos:db })
    },


    /*
    show: function (req, res) {
        const id = req.params.id;
        db.Products.findByPk(id)
        .then(function (data) {
            res.render("product", {product: data})
            // console.log(data);
            
        })
        .catch( function (err) {
            console.log(err);
            
        })
        
    },
    new: function (req, res) {
        db.Product.findAll({
            order:[
                ['created_at', 'DESC']
            ]
        })
        .then(function (data) {
            return res.render()            
        })
        .catch(function name(params) {
            
        })
        
    },*/
    




    
}


module.exports = stockController;