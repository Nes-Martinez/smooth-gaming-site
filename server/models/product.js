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
    defaultValue: "/images/switchgame.jpg",
  },
  bannerImage: {
    type: Sequelize.STRING,
    defaultValue: "/images/hollowKnightbanner.jpg",
  },
  galleryOne: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img-eshop.cdn.nintendo.net/i/208c3efdf8bf7cb5ba1f2154f5508d97af71b7853dc8e7eff302d3b1804bb178.jpg",
  },
  galleryTwo: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img-eshop.cdn.nintendo.net/i/93309648ca2cf8d7a269da8f3deb386833497d857e8344d339caf3f81fc8a2f1.jpg",
  },
  galleryThree: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img-eshop.cdn.nintendo.net/i/ddcf359a6e8a2bb8b2eabf9fc26b9511b047745320c2d56aeabf24222f0967fc.jpg",
  },
  genre: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: ["action", "roleplaying"],
  },
});

module.exports = Product;
