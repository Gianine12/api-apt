require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    
    define: {
        timestamps: true,
        underscored: true
    }
}
