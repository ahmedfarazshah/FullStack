import qrfile from "qr-image"
import fs from "fs"

//////////////////////////////////////////
// Pipe is required because you are using a (qrimage) module and using it in a native fs module so you are piping aka linking the value of modules
// and we use stream when we link files..

// const file = qrfile.image("this is a text fo qr code ", {type : 'svg'})
// file.pipe(fs.writeFile('i_love_qr.svg', "this is a message and check it", err =>{
//     if(err)throw err;
// }));

var file = qrfile.image("Looking forward to see you", {type: "svg", size:'3'})
file.pipe(fs.createWriteStream("qrcodenew.svg"))

// var srtingImage = qrfile.imageSync("data of qr", {type:"svg"})
// console.log(srtingImage)



///////////////////////////////////////////////
// THIS CODE SNIPPET WON'T WORK BECAUSE THE FILE IS CONTAINING SOMETHING OF ANOTHER STREAM(MODULE) & TO CONNECT ANOTHER MODULE YOU HAVE TO USE PIPE
// fs.writeFile("qrImage.txt", file, err =>{
//     console.log("the error is " + err)
// })
////////////////////////////////////////////////


///////////////////////////////////////////////
// the qrfile.imageSync is synchronous (blocking) and without it qrfile.image asynchronous(non blocking)
// the method with sync is used when you file is short and you want to execute the code when whole file is read so that your synchornous code might have a something on the file that was needed to be runed
///////////////////////////////////////////////////

//////////////////////
//synchronos : for short files to be stored on memory : writefile, imagesync
//asynchronous : for large files:  createfileStream , image method
////////////////////