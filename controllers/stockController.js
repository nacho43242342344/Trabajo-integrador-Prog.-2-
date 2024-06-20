const db = require('../database/models')
//const db = require("../db/index")
const seq = db.Sequelize.Op
const {validationResult} = require("express-validator")

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
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            const product = {
                nombre_archivo_imagen: req.body.nombre_archivo_imagen,
                nombre_producto: req.body.nombre_producto,
                descripcion: req.body.descripcion,
                usuario_id: req.session.user.id                
            }
            db.Product.create(product)
                .then(function (product) {
                    return res.render('product', {datos:product})
                })
                .catch(function (err) {
                    console.log("Error al guardar el producto", err)
                })
        } else {
            return res.render ('product-add', {errors: errors.mapped(), old: req.body})
        }
    },
    crear: function (req,res) {
        return res.render("product-add")
    }


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