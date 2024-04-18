var sillyName = require("sillyname")
var hash = require("hash.js")
const filesystem = require("fs")

var namesx = sillyName();
var file = `hey my name is ${namesx}`
var hashedfile = hash.sha256().update(`${file}`).digest("hex")

// THE NEW NAME AND NEW HASH VALUE WILL BE STORED
// filesystem.writeFile("hashed_message.txt", `the hash of file is : ${hashedfile},\n the file is :${file}`, err => {
//     if(err)throw err;
//     console.log("the hash value has been stored")
// })

filesystem.readFile("./hashed_message.txt", "utf-8", (err, data)=>{
    if(err)throw err;
    console.log(data)
})


