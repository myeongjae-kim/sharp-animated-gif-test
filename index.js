const sharp = require('sharp');

// generate resized animated gif
sharp("./homer.gif", { animated: true })
    .resize(100)
    .gif({ pageHeight: 100 })
    .toFile("./homer-resized.gif");

// generate webp, every frame is spread
sharp("./homer.gif", { animated: true })
    .resize(100)
    .webp()
    .toFile("./homer-resized.webp");
