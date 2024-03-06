import qrfile from "qr-image"
import fs from "fs"
 
var file = qrfile.image("this is a text fo qr code ", {type : 'svg'})
file.pipe(fs.createWriteStream('i_love_qr.svg'));

// fs.writeFile("qrImage.txt", file, err =>{
//     console.log("the error is " + err)
// })
var svg_string = qrfile.imageSync('I love QR!', { type: 'svg' });


