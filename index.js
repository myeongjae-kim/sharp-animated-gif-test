const sharp = require('sharp');

sharp("./homer.gif", { animated: true })
    .resize(100)
    .gif({ pageHeight: 100 })
    .toFile("./homer-resized.gif");
