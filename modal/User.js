const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Assuming your Sequelize connection is in a separate file

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Synchronize the model with the database (create the table if it doesn't exist)
User.sync()
  .then(() => {
    console.log('User model synced with the database');
  })
  .catch((err) => {
    console.error('Error syncing User model:', err.message);
  });

module.exports = User;
