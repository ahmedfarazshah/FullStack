const express = require("express")
const bp = require("body-parser") // gives us the data of the form that user submitted
const app = express();
app.use(bp.urlencoded({extended:true}))


app.get("/", (req, res)=>{
    // res.send("<button> first Number</button>")
    res.sendFile(__dirname + "/index.html")
    
})
// you created a route 
app.get("/answer", (req, res)=>{
    res.send("Don't just sneak here, write the numbers first and then we'll surprise you")
}) 
app.get("/bmicalculator", (req,res)=>{
    res.sendFile(__dirname + "/BmiCalculator.html")
})






// the route after sending the data

app.post("/answer", (req, res)=>{
    var number1 = Number(req.body.num1)
    var number2 = Number(req.body.num2)
    var result = number1 + number2
    res.send("The answer is "+ result)
})
//  console.log(__dirname) // the console will be of the server not the browser, because the js file is running on the server not on the browser the browser is fetching the js file

///////////////////////
//BMI Post
app.post("/bmicalculator", (req, res)=>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / (height * height);
    res.send("The BMI is "+ Math.floor(bmi))
    console.log(weight)

})


app.listen(3130, ()=>{
    console.log("the server is tuned to 3130 port")
    // console.log(__dirname)// shows the current location of the file : this called as a constant

})