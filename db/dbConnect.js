const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mydatabase.sqlite", // Specify the path to your SQLite file
});

module.exports = sequelize;


// mysql
// const sequelize = new Sequelize("jindaltrading", "root", "4585", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;