const Sequelize = require("sequelize");

// mysql
const sequelize = new Sequelize("educationStudies", "root", "4585", {
  dialect: "mysql",
  host: "localhost",
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
