const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", (req, res)=>{
    const today = new Date() // created the date object so that we will be able to fetch the current day and date
    const currentDay = today.getDay()

    if(currentDay === 6 || currentDay === 0){
        res.send("Hurray It is weekend and I can take a day or two off")
    }else{
        res.sendFile(__dirname + "/index.html")
    }
















    res.send("hi")
})


















app.listen(3333 , function(){
    console.log("the server is running at port 3333")
})















