// we will use the file system module
// & will create a file in the directory of our own will 

// const { error } = require("console")
// const fileSystem = require("fs")
import fileSystem from "node:fs"

// creating a file of txt extension 
// fileSystem.writeFile("message.txt", "Don't tell anyone about it", (error) => {
//     if(error) {throw error};
//     console.log("The message has been saved")
// })

// fetching the file
fileSystem.readFile("./message.txt","utf-8", (err, filedata)=> {
    if(err) throw err;
    console.log(filedata);
})
