const sharp = require('sharp');

console.log("hello, world!")

sharp("./homer.gif", { animated: true })
    .resize(100)
    .gif({ pageHeight: 100 })
    .toFile("./homer-resized.gif", (err) => {
        console.log("error occurred", err)
    });
