const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual Sequelize instance

const studentModel = sequelize.define('Student', {
   Name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    Courses: {
        type: DataTypes.STRING,
        allowNull: false,
         
    },
    mobileNum: {
        type: DataTypes.STRING(20),
        allowNull: false,
       
    },
}, {
    // Other model options go here
});

// Sync the model with the database (create the table)
 
module.exports = studentModel;
