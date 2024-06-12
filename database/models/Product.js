module.exports= function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id:{
            foreingKey: true,
            type: dataTypes.INTEGER,
        },
        nombre_archivo_imagen:{
            type: dataTypes.STRING(255),
        },
        nombre_producto:{
            type: dataTypes.STRING(255),
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        deleted_at:{
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "productos",
        underscored: true,
    }
    let Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
        Product.belongsTo(models.User,{
            as: "user",
            foreingKey: "usuario_id"
        })
        Product.hasMany(models.Comment,{
            as: "comment",
            foreingKey: "post_id"
        })
    }
    return Product
}