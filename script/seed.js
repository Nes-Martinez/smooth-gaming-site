const db = require("../server/config/db");
const Product = require("../server/models/product");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const products = await Promise.all([
    Product.create({
      name: "Greak: Memories of Azure",
      developer: "Navegante Entertainment",
      imageUrl: "/images/greak.jpg",
      description:
        "Greak: Memories of Azur es un juego de desplazamiento lateral para un solo jugador con animaciones hechas a mano. Tendrás el papel de los hermanos, Greak, Adara y Raydel, para guiarlos a través de las tierras de Azur. Alterna el control entre ellos y usa sus habilidades únicas para escapar de la invasión urlag.",
      price: 19.99,
      bannerImage: "/images/greakbanner.jpg",
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/g/greak-memories-of-azur-switch/screenshot-gallery/screenshot02?v=2021120220",
      galleryOneText: "Greak: Memories of Azure #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/g/greak-memories-of-azur-switch/screenshot-gallery/screenshot01?v=2021120220",
      galleryTwoText: "Greak: Memories of Azure #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/g/greak-memories-of-azur-switch/screenshot-gallery/screenshot03?v=2021120220",
      galleryThreeText: "Greak: Memories of Azure #3",
      genre: ["Acción", "Rompecabezas", "Plataformas", "Aventura"],
      youTubeID: "RPbIU0RP4gI",
      launchDate: "2021-08-18",
    }),
    Product.create({
      name: "WarriOrb",
      imageUrl: "/images/warriorb.jpg",
      description:
        "WarriOrb es un juego de plataformas de acción en el que juegas como un poderoso demonio atrapado en un cuerpo fuera de lo normal. Tendrás que atravesar el mundo devastado para recuperar tu libertad y cordura. En el camino te encontrarás con demonios, gigantes, mutantes y todo tipo de criaturas mágicas y locas.",
      price: 12.99,
      bannerImage: "/images/warriorbbanner.jpg",
      genre: ["Acción", "Aventura", "Plataformas", "Rol (RPG)"],
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/w/warriorb-switch/screenshot-gallery/screenshot02?v=2021120320",
      galleryOneText: "WarriOrb #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/w/warriorb-switch/screenshot-gallery/screenshot01?v=2021120320",
      galleryTwoText: "WarriOrb #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/w/warriorb-switch/screenshot-gallery/screenshot03?v=2021120320",
      galleryThreeText: "WarriOrb #3",
      youTubeID: "61R9tC46k6M",
    }),
    Product.create({
      name: "Hob: The Definitive Edition",
      developer: "Runic Games",
      imageUrl: "/images/hob.jpg",
      description:
        "¡De los creadores de Torchlight™ y Torchlight II™! Recorre y transforma el misterioso mundo de Hob. Este vibrante y atmosférico juego de aventuras se desarrolla en un despiadado mundo en ruinas. Quien se atreva a indagar en sus misterios descubrirá que la supervivencia del planeta corre peligro. ¿Podrá ser salvado o acabará por descender irremediablemente en el caos? Esta versión definitiva con nuevas funciones y rendimiento mejorado solo está disponible en Nintendo Switch.",
      price: 14.99,
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_MX/games/switch/h/hob-the-definitive-edition-switch/screenshot-gallery/screenshot01?v=2021121123",
      galleryOneText: "Hob #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_MX/games/switch/h/hob-the-definitive-edition-switch/screenshot-gallery/screenshot02?v=2021121123",
      galleryTwoText: "Hob #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_MX/games/switch/h/hob-the-definitive-edition-switch/screenshot-gallery/screenshot04?v=2021121123",
      galleryThreeText: "Hob #3",
      bannerImage: "/images/hobbanner.jpg",
      genre: ["Aventura", "Acción", "Rompecabezas", "Plataforma"],
      youTubeID: "bK0dAoopB0c",
      launchDate: "2019-04-04",
    }),
    Product.create({
      name: "Hollow Knight",
      developer: "Team Cherry",
      imageUrl: "/images/hollowknight.jpg",
      description:
        "Hollow Knight es una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz nuevas amistades con extraños insectos y resuelve los antiguos misterios que yacen en el corazón del reino.",
      price: 14.99,
      bannerImage: "/images/hollowknightbanner.jpg",
      galleryOne:
        "https://img-eshop.cdn.nintendo.net/i/208c3efdf8bf7cb5ba1f2154f5508d97af71b7853dc8e7eff302d3b1804bb178.jpg",
      galleryOneText: "Hollow Knight #1",
      galleryTwo:
        "https://img-eshop.cdn.nintendo.net/i/93309648ca2cf8d7a269da8f3deb386833497d857e8344d339caf3f81fc8a2f1.jpg",
      galleryTwoText: "Hollow Knight #2",
      galleryThree:
        "https://img-eshop.cdn.nintendo.net/i/ddcf359a6e8a2bb8b2eabf9fc26b9511b047745320c2d56aeabf24222f0967fc.jpg",
      galleryThreeText: "Hollow Knight #3",
      genre: ["Indie", "Aventura", "Plataformas", "Acción"],
      youTubeID: "kWo5g-tsBNk",
      launchDate: "2018-06-12",
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
