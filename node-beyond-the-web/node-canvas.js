var Canvas = require('canvas'),
    Image = Canvas.Image,
    canvas = new Canvas(200, 200),
    ctx = canvas.getContext('2d'),
    pngStringify = require('console-png'),
    fs = require('fs'),
    imageToAscii = require("image-to-ascii"),
    js2Image = require('js2image');

ctx.font = '20px Impact';
ctx.rotate(0.1);
ctx.fillText("Awesome!", 25, 50);

var te = ctx.measureText('Awesome!');
ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + te.width, 102);
ctx.stroke();


// Ascii image in console
/*
  imageToAscii(canvas.toBuffer(), (error, converted) => {
  console.log(error || converted);
  })
*/

// Create image
// fs.writeFile('./output/test.png', canvas.toBuffer());


/*
  pngStringify(canvas.toBuffer(), function (error, string) {
  if (error) throw error;
  console.log(string);
  });
*/
