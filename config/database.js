const Sequelize = require("sequelize");

const sequelize = new Sequelize('meeting', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;