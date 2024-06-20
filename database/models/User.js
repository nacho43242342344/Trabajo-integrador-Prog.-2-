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
        password:{
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
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        deleted_at:{
            type: dataTypes.DATE,
        }
    }
    let config = {
        tableName: "tabla_usuarios",
        underscored: true,
        timestamps: true,
    }
    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "productos",
            foreignKey: "usuario_id"
        });
        User.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "usuario_id"
        })
    }

    return User;
}