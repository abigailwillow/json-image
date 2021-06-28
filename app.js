let fs = require('fs');
let jimp = require('Jimp');

let filename = 'bogos'

jimp.read(`images/png/${filename}.png`).then(image => {
    let jimg = [];

    for (let y = 0; y < image.bitmap.height; y++) {
        let pixelRow = [];
        for (let x = 0; x < image.bitmap.width; x++) {
            pixelRow.push(jimp.intToRGBA(image.getPixelColor(x, y)));
        }
        jimg.push(pixelRow);
    }

    fs.writeFile(`images/jimg/${filename}.json`, JSON.stringify(jimg), err => { if (err) throw err; });

}).catch(err => { throw err; });