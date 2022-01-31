const db = require("../server/config/db");
const Product = require("../server/models/product");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const products = await Promise.all([
    Product.create({
      name: "Greak: Memories of Azure",
      imageUrl: "/images/greak.jpg",
      description: "Lovely classic game with sprites.",
      price: 1499,
      bannerImage: "/images/greakbanner.png",
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/g/greak-memories-of-azur-switch/screenshot-gallery/screenshot02?v=2021120220",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/g/greak-memories-of-azur-switch/screenshot-gallery/screenshot01?v=2021120220",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/g/greak-memories-of-azur-switch/screenshot-gallery/screenshot03?v=2021120220",
      genre: ["metroidvania", "platformer"],
    }),
    Product.create({
      name: "warriOrb",
      imageUrl: "/images/warriorb.jpg",
      description: "Fun platformer!",
      price: 1499,
      genre: ["sidescroller", "platformer"],
    }),
    Product.create({
      name: "Hob",
      imageUrl: "/images/hob.jpg",
      description: "Beautiful pixelated Souls platformer.",
      price: 1499,
      genre: ["hack-n-slash", "platformer"],
    }),
    Product.create({
      name: "Hollow Knight",
      imageUrl: "/images/hollowknight.jpg",
      description: "The pinnacle of indie gaming!",
      price: 1499,
      bannerImage: "/images/hollowknightbanner.jpg",
      galleryOne:
        "https://img-eshop.cdn.nintendo.net/i/208c3efdf8bf7cb5ba1f2154f5508d97af71b7853dc8e7eff302d3b1804bb178.jpg",
      galleryTwo:
        "https://img-eshop.cdn.nintendo.net/i/93309648ca2cf8d7a269da8f3deb386833497d857e8344d339caf3f81fc8a2f1.jpg",
      galleryThree:
        "https://img-eshop.cdn.nintendo.net/i/ddcf359a6e8a2bb8b2eabf9fc26b9511b047745320c2d56aeabf24222f0967fc.jpg",
      genre: ["metroidvania", "platformer"],
    }),
    Product.create({
      name: "Greak: Memories of Azure",
      imageUrl: "/images/greak.jpg",
      description: "Lovely classic game with sprites.",
      price: 1499,
      genre: ["metroidvania", "platformer"],
    }),
    Product.create({
      name: "warriOrb",
      imageUrl: "/images/warriorb.jpg",
      description: "Fun platformer!",
      price: 1499,
      genre: ["sidescroller", "platformer"],
    }),
    Product.create({
      name: "Hob",
      imageUrl: "/images/hob.jpg",
      description: "Beautiful pixelated Souls platformer.",
      price: 1499,
      genre: ["hack-n-slash", "platformer"],
    }),
    Product.create({
      name: "Hollow Knight",
      imageUrl: "/images/hollowknight.jpg",
      description: "The pinnacle of indie gaming!",
      price: 1499,
      genre: ["metroidvania", "platformer"],
    }),
    Product.create({
      name: "Greak: Memories of Azure",
      imageUrl: "/images/greak.jpg",
      description: "Lovely classic game with sprites.",
      price: 1499,
      genre: ["metroidvania", "platformer"],
    }),
    Product.create({
      name: "warriOrb",
      imageUrl: "/images/warriorb.jpg",
      description: "Fun platformer!",
      price: 1499,
      genre: ["sidescroller", "platformer"],
    }),
    Product.create({
      name: "Hob",
      imageUrl: "/images/hob.jpg",
      description: "Beautiful pixelated Souls platformer.",
      price: 1499,
      genre: ["hack-n-slash", "platformer"],
    }),
    Product.create({
      name: "Hollow Knight",
      imageUrl: "/images/hollowknight.jpg",
      description: "The pinnacle of indie gaming!",
      price: 1499,
      genre: ["metroidvania", "platformer"],
    }),
  ]);

  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
