const { Model, DataTypes } = require('sequelize');

class Visitante extends Model {
    static init(sequelize){
        super.init({
            bloco: DataTypes.STRING,
            apartamento: DataTypes.STRING,
            tipo_visitante: DataTypes.STRING,
            documento: DataTypes.STRING,
            tipo_documento: DataTypes.STRING,
            nome: DataTypes.STRING,
        },{
            tableName: 'visitante',
            sequelize
        });
    };
};

module.exports = Visitante;
