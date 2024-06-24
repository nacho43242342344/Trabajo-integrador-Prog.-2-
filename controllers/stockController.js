const db = require('../database/models')
//const db = require("../db/index")
const seq = db.Sequelize.Op
const {validationResult} = require("express-validator")

const stockController = {
    search: function(req, res) {
        
        db.Product.findAll({
            where :{
                [seq.or]: [ // comando or para que sea una regla o la otra.
                    {descripcion: {[seq.like]: `%${req.query.search}%`}},
                    {nombre_producto: {[seq.like]: `%${req.query.search}%`}}                    
                ]
            },
            order: [['created_at', 'DESC']], // para el orden descendente de lo ultimo que se agrega.

            include: [ // usamos los alias de los modelos.
                {association: 'productos_usuarios'}
            ]
        })
        
            .then(function (data) {
                //console.log(data)
            //return res.send(data)
            return res.render('search-results', {productos: data});} 
                )
            .catch(function (err) {
                return console.log(err);
            })        
    },
    productAdd:function(req,res){
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            console.log("esta es la sección", req.session.user)
            const product = {
                nombre_archivo_imagen: req.body.nombre_archivo_imagen,
                nombre_producto: req.body.nombre_producto,
                descripcion: req.body.descripcion,
                usuario_id: req.session.user.id,
                productos_usuarios: req.session.user,         
            }
            console.log("aca esta el productttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
            console.log(product)
            db.Product.create(product)
                .then(function (product) {
                    return res.render('product', {producto:product})
                })
                .catch(function (err) {
                    console.log("Error al guardar el producto", err)
                })
        } else {
            return res.render ('product-add', {errors: errors.mapped(), old: req.body})
        }
    },
    crear: function (req,res) {
        return res.render("product-add", {titulo: "Agregar productos"})
    },
    edit: function(req, res){
        id = req.params.id
        db.Product.findByPk(id, {
            include: [{association: 'productos_usuarios'}]
        }

        )
            .then(function(data){
                //console.log("este es el producto a editar", data);
                res.render("product-edit", {producto: data, titulo: "Editar producto"})      
            })
            .catch(function(error){
                console.log(error)
            })
        },
        editProduct: function(req, res){
            const errors = validationResult(req)
            if (errors.isEmpty()) {
                const product = {
                    nombre_archivo_imagen: req.body.nombre_archivo_imagen,
                    nombre_producto: req.body.nombre_producto,
                    descripcion: req.body.descripcion,
                    usuario_id: req.session.user_id                
                }
                db.Product.update(product, {
                    where: {id: req.params.id}
                }
                )
                    .then(function (product) {
                        const idProd = req.params.id
                        res.redirect(`/relojes/${idProd}`)
                    })
                    .catch(function (err) {
                        console.log("Error al editar el producto", err)
                    })
            } else {
                return res.render ('product-edit', {errors: errors.mapped(), producto: req.body})
            }
        }
  
}


module.exports = stockController;