module.exports = function(sequelize, dataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        producto_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        texto_comentario: {
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
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    };
    let Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "usuario_id"
        });
        Comment.belongsTo(models.Product, {
            as: 'productos', 
            foreignKey: 'producto_id'
        });
    };

    return Comment;
};