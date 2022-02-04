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
  developer: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Nintendo",
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "/images/switchgame.jpg",
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "Un juego bello!",
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 14.99,
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
  galleryOneText: {
    type: Sequelize.STRING,
    defaultValue: "Screenshot One",
  },
  galleryTwo: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img-eshop.cdn.nintendo.net/i/93309648ca2cf8d7a269da8f3deb386833497d857e8344d339caf3f81fc8a2f1.jpg",
  },
  galleryTwoText: {
    type: Sequelize.STRING,
    defaultValue: "Screenshot Two",
  },
  galleryThree: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img-eshop.cdn.nintendo.net/i/ddcf359a6e8a2bb8b2eabf9fc26b9511b047745320c2d56aeabf24222f0967fc.jpg",
  },
  galleryThreeText: {
    type: Sequelize.STRING,
    defaultValue: "Screenshot Three",
  },
  genre: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: ["Acción", "Plataformas"],
  },
  youTubeID: {
    type: Sequelize.STRING,
    defaultValue: "XoMEATvLpyA",
  },
  launchDate: {
    type: Sequelize.DATEONLY,
    defaultValue: 3 - 3 - 2017,
  },
});

module.exports = Product;
