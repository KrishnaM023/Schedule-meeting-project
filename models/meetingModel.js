const { DataTypes } = require('sequelize');
const db = require('../config/database');

// SQL Query
const Meeting = db.define('Meeting', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    meetingLink : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Meeting;
