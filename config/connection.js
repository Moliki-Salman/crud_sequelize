const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const mysql2 = require("mysql2");
const sequelize = new Sequelize(
  "btuhjpfarapbxuo6wz4w", //db name
  "u4vxo06f0ymly0ba", //user , for local db set it to root
  "LxHOxBrw3kARPewJ4Taf", // password
  {
    host: "btuhjpfarapbxuo6wz4w-mysql.services.clever-cloud.com",//for local, set it to localhoost
    dialect: "mysql",
    dialectModule: mysql2,//this is added in the case if you connect with your databse locally
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { sequelize };
