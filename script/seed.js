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
    }),
    Product.create({
      name: "warriOrb",
      imageUrl: "/images/switchGame.png",
      description: "Fun platformer!",
      price: 1499,
    }),
    Product.create({
      name: "Hob",
      imageUrl: "/images/switchGame.png",
      description: "Beautiful pixelated Souls platformer.",
      price: 1499,
    }),
    Product.create({
      name: "Hollow Knight",
      imageUrl: "/images/switchGame.png",
      description: "The pinnacle of indie gaming!",
      price: 1499,
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
