module.exports = function(sequelize, dataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        post_id: {
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
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "tabla_comment",
        timestamps: true,
        underscored: true
    };
    let Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "usuario_id"
        });
        Comment.belongsTo(models.Product, {
            as: 'product', 
            foreignKey: 'post_id'
        });
    };

    return Comment;
};