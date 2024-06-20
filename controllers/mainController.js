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
                console.log(data);
                res.render('index', { info: data });
            })
            .catch(function(err) {
                console.log(err);
            });  
    },
    show:function (req,res) {
        const id = req.params.id
        db.Product.findByPk(id)
            .then(function(data){
                console.log(data);
                res.render('product', {producto:data})
            })
            .catch(function(err){
                console.log(err);
            })
    }
};

module.exports = mainController;