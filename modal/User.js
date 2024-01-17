const Sequelize = require('sequelize');

const sequelize = require('../db/dbConnect');

const userModel = sequelize.define('usertable',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
  },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    } 
}); 

module.exports = userModel; 