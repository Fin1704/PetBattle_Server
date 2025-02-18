const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    deck: {
        type: DataTypes.JSON,
        defaultValue: []
    },
    balance: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
}, {
    timestamps: true,
});

module.exports = Player;
