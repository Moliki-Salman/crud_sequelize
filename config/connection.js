const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const mysql2 = require("mysql2");
const sequelize = new Sequelize("spareDech", "root", "1234",
 {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { sequelize };
