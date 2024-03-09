// jshint esversion:6

const express = require("express");
const app = express(); // making a variable as the method of express module

app.get("/" ,(req, res)=>{ // "/ "is the same route of port of we have set
    // console.log(req) // console.log("after this the response")// console.log(res)// console.log(res)
    res.send("hellow")
});

app.get('/contact', (req, res)=>{
    res.send("<h2>Contact me or Reach to me in Gilgit</h2>")
})
app.get("/about", (req, res)=>{
    res.send("<h2>Hey I am a blockchain developer</h2>")
})
app.get("/hobbies", (req, res)=>{
    res.send("I code everyday to and will be a top class blockchain developer in the world" )
})


app.listen(3300, function(){   // listen method tells the server /tunes the server to listen to a http request at specific port address
    console.log("the http request at port 3300 is working on our local server")
    console.log("and when the browser will be in touch with our server the server would return nothing as there is not any response sending back to browser")
})