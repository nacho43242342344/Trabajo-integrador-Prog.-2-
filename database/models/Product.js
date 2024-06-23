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
            defaultValue: null
        },
        deleted_at:{
            type: dataTypes.DATE,
            defaultValue: null
        }
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
    }
    let Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
        Product.belongsTo(models.User,{
            as: "productos_usuarios", // relacion en el controlador
            foreignKey: "usuario_id"
        })
        Product.hasMany(models.Comment,{
            as: "comentario_productos",
            foreignKey: "producto_id"
        })
    }
    return Product
}