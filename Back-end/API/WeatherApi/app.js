const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const https = require("https") // this is a module / builtin npm that will fetch data from the desired url and acts as an api
app.use(bodyParser.urlencoded({extended:true})) // this is needed to use requests from the client side


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
    
 
})

app.post("/", (req,res)=>{
    console.log(req.body.city)
    
    
    
    
    const query = "gilgit"
    const units = "metric"
    const appid = "7ff55636455c62a85cfdce83f7359d37"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&appid="+ appid ;
    
    https.get(url, response=>{
        // console.log(response)
    
        response.on("data", data =>{ // the data is in hexadecimal and to convert it into a object we use json.parse
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = "https://openweathermap.org/img/wn/"+ weatherData.weather[0].icon + "@2x.png";
            
            
            
            
            res.write("<h1>The Temperature in "+ req.body.city+" is :" + temp +" </h1>")
            res.write("<p>The weather in "+req.body.city+" is :" + weatherDescription +" </p>")
            res.write(`<img src= ${icon}></img>`)
            res.send()
            
            // res.send("<h1>The weather in Gilgit is :" + weatherDescription +" </h1> \n <h1> and the temperature is: "+ temp + " Degree Celcius </h1>") // you should use .write for sending multiple lines of code to client side
        })
        
    })
    // res.send(weatherDegC) // there should be only one res.send or it will throw error 
    // res.send("the server is running and status code is 200")
})
















app.listen(3130 , (err)=>{
    if(err)throw err;
    console.log("the server is running at port 3130")
})