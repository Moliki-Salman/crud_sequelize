const Sequelize = require("sequelize");
const { sequelize } = require("../config/connection");

const Blog = sequelize.define("BlogPost", {
  blog_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNul: false,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNul: false,
    unique: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNul: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("BlogPost table created successfully");
  })
  .catch((err) => {
    console.error("Error creating BlogPost table:", err);
  });

module.exports = { Blog };

