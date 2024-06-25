//const db = require('../database/models')
const { Association } = require('sequelize');
const db = require('../database/models')


const mainController = {
    index: function(req, res) {
        db.Product.findAll({
            include: [{association: 'productos_usuarios'},{association: 'comentario_productos'}], 
            order: [['created_at', 'DESC']] 
        })
            .then(function(data) {
                res.render('index', { info: data });
            })
            .catch(function(err) {
                console.log(err);
            });  
    },
    show:function (req,res) {
        const id = req.params.id
        db.Product.findByPk(id, {
            include: [{association: 'productos_usuarios'}]
        }
        )
            .then(function(data){
                db.Comment.findAll(
                    {where: {producto_id: data.id},
                    include:[{association: "usuarios_comentario"}] }
                )
                    .then(function(info){
                        res.render('product', {producto:data, coment: info})
                    })
                    .catch(function(error){
                        console.log(error)
                    })
            })
            .catch(function(err){
                console.log(err);
            })
    }
};

module.exports = mainController;