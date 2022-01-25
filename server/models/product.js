const Sequelize = require("sequelize");
const db = require("../config/db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "What a beautiful indie game!",
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1499,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "/img/switchGame.png",
  },
  genre: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: ["action", "roleplaying"],
  },
});

module.exports = Product;
