module.exports = function(sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.STRING(250),
        },
        usuario:{
            type: dataTypes.STRING(250),
        },
        producto:{
            type: dataTypes.STRING(250),
        },
        contraseña:{
            type: dataTypes.STRING(250),
        },
        nacimiento:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        foto_de_perfil:{
            type: dataTypes.STRING(250),
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
    }
    let config = {
        tableName: "tabla_usuario",
        timestaps: false,
        underscored: true
    }
    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        user.hasMany(models.Product, {
            as: "product",
            foreignKey: "usuario_id"
        });
        user.hasMany(models.Comment, {
            as: "comment",
            foreignKey: "usuario_id"
        })
    }

    return User;
}