const Sequelize = require("sequelize");
require("dotenv").config();

console.log(process.env.DB_NAME, process.env.DV_USER, process.env.DB_PW);

const sequelize = new Sequelize(
  
  process.env.DB_NAME,
  process.env.DV_USER,
  process.env.DB_PW,
  
  {
    
    host: "localhost",
    dialect: "mysql",
    prot: 3306,
  }
);

module.exports = sequelize;