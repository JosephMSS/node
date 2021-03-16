const sharp = require("sharp");

sharp("img/image.png").resize(720).toFile("img/image2.png");
