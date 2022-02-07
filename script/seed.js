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
      name: "Gleamlight",
      developer: "DICO CO, Ltd.",
      imageUrl: "/images/gleamlight.jpg",
      description:
        "Sumérgete en el bello arte de los cristales, navegando sin la dependencia de una interfaz de usuario de un juego estándar, mientras completas la misteriosa historia de este mundo. Ponte en la piel del protagonista y viaja por todo este hermoso, y a la vez temible, mundo de cristal.",
      price: 19.99,
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/g/gleamlight-switch/screenshot-gallery/screenshot03?v=2021120922",
      galleryOneText: "Gleamlight #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/g/gleamlight-switch/screenshot-gallery/screenshot04?v=2021120922",
      galleryTwoText: "Gleamlight #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/g/gleamlight-switch/screenshot-gallery/screenshot05?v=2021120922",
      galleryThreeText: "Gleamlight #3",
      bannerImage: "/images/gleamlightbanner.jpg",
      genre: ["Indie", "Acción", "Aventura"],
      youTubeID: "1ehw1PaRSgE",
      launchDate: "2020-08-20",
    }),
    Product.create({
      name: "Death's Door",
      developer: "Acid Nerve",
      imageUrl: "/images/deathsdoor.jpg",
      description:
        "Cosechar las almas de los muertos y fichar en tu puesto puede hacerse monótono, pero es un trabajo honrado para un cuervo. La cosa se anima cuando roban el alma que tienes asignada y tienes que seguirle el rastro a un ladrón desesperado hasta un mundo que la muerte no ha tocado.",
      price: 19.99,
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/d/deaths-door-switch/screenshot-gallery/screenshot03?v=2021121206",
      galleryOneText: "Death's Door #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/d/deaths-door-switch/screenshot-gallery/screenshot04?v=2021121206",
      galleryTwoText: "Death's Door #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/d/deaths-door-switch/screenshot-gallery/screenshot05?v=2021121206",
      galleryThreeText: "Death's Door #3",
      bannerImage: "/images/deathsdoorbanner.jpg",
      genre: ["Acción", "Aventura", "Juego de arcade"],
      youTubeID: "IbPg9ErW0Q8",
      launchDate: "2021-11-23",
    }),
    Product.create({
      name: "Hades",
      developer: "Supergiant Games",
      imageUrl: "/images/hades.jpg",
      description:
        "Hades es un juego de estilo 'roguelike' desarrollado por Supergiant Games, creadores de Bastion, Transistor y Pyre. En este juego, encarnas a Zagreo, el hijo inmortal de Hades, en un misión por escapar del Inframundo. Para hacerlo, se verá obligado a luchar con hordas de almas perdidas a lo largo de múltiples estancias. La muerte tan solo será un pequño inconveniente para Zagreo, que regresará a la morada de la que parte (la morada de Hades) para iniciar un nuevo intento de escapar. Cada intento te dará recursos que puedes gastar tanto durante la aventura como de vuelta en la morada, haciéndote más fuerte y permitiéndote que, poco a poco, avances más y más en tus intentos de escapar.",
      price: 24.99,
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_MX/games/switch/h/hob-the-definitive-edition-switch/screenshot-gallery/screenshot01?v=2021121123",
      galleryOneText: "Hades #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/h/hades-switch/screenshot-gallery/screenshot04?v=2021120813",
      galleryTwoText: "Hades #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/h/hades-switch/screenshot-gallery/screenshot05?v=2021120813",
      galleryThreeText: "Hades #3",
      bannerImage: "/images/hadesbanner.jpg",
      genre: ["Indie", "Acción", "Aventura", "Juego de rol"],
      youTubeID: "mD8x5xLHRho",
      launchDate: "2020-09-17",
    }),
    Product.create({
      name: "Cris Tales",
      developer: "Dreams Uncorporated, SYCK",
      imageUrl: "/images/cristales.jpg",
      description:
        "Vive el pasado, el presente y el futuro al mismo tiempo en este sentido y precioso homenaje a los JRPG clásicos. Descubre una combinación única de historias que se ramifican, combate innovador y la jugabilidad de RPG clásico en Cris Tales, una exploración apasionante e inolvidable de cómo nuestras acciones se repiten en el tiempo. Vive el despertar de Crisbell, la Maga del Tiempo, y únete a sus fantásticos compañeros en un mundo de fantasía que se enfrenta a un oscuro futuro. La poderosa Emperatriz de las Eras y sus fuerzas amenazan con provocar un cataclismo que destruirá Crystallis y los otros cuatro reinos de la región.",
      price: 39.99,
      galleryOne:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/c/cris-tales-switch/screenshot-gallery/screenshot01?v=2021121921",
      galleryOneText: "Cris Tales #1",
      galleryTwo:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/c/cris-tales-switch/screenshot-gallery/screenshot03?v=2021121921",
      galleryTwoText: "Cris Tales #2",
      galleryThree:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/es_LA/games/switch/c/cris-tales-switch/screenshot-gallery/screenshot04?v=2021121921",
      galleryThreeText: "Cris Tales #3",
      bannerImage: "/images/cristalesbanner.jpg",
      genre: ["Indie", "Juego de rol", "Aventura", "Acción", "Otros"],
      youTubeID: "8hyzuto5JnQ",
      launchDate: "2021-07-20",
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
