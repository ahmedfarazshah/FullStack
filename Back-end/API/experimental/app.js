const express = require("express")
const app = express()
const https = require("https")
const bodyParser = require("body-parser")
const { join } = require("path")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("/")) // this will ensure any static data ; according to me xd

// const bodyParser = require("body-parser")// incase if you used a form to get data from the client
// app.use(bodyParser({extenable: true}))



app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
    // res.send('nothing') will th
    // res.send()//it will either send file or run the send which is write (response)
})

app.post("/", (req,res)=>{
   
    //for the kanye qoutes
    const url = "https://api.kanye.rest"
    https.get(url, (response)=>{
        response.on('data', data =>{ // the string and the parameter should be the same to fetch the data
            const kanyeSays = JSON.parse(data)
            // res.write(kanyeSays.qoute)
            res.write(kanyeSays.quote)
            res.send()
        })
    })


})


app.post("/countries" , (req, res)=>{
    const userInputCountry = req.body.country;

    url = "https://restcountries.com/v3.1/name/"+userInputCountry
    https.get(url, response =>{
        response.on("data", data=>{
            
            const countryInfo = JSON.parse(data)
            const countryCode = countryInfo[0].cca2
            const icon = "https://flagcdn.com/48x36/"+countryCode +".png"            
            res.write("Country : " + countryInfo[0].name.common +"\n")
            res.write("Offical Name of Country : "+ countryInfo[0].name.official +"\n") 
            res.write("Capital City : " + countryInfo[0].capital +"\n")
            res.write("Continent : " + countryInfo[0].region + " sub : " + countryInfo[0].subregion +"\n")
            res.write("Borders with : " + countryInfo[0].borders +"\n")
            res.write("Area : " + countryInfo[0].area +"sqkm\n")
            res.write("Population : " + countryInfo[0].population +"\n")
            // res.write(`<img src= ${icon}></img> \n`) // it must be an external link
            res.write("<img src= "+ icon + ">") //i don't know but the image is not showing 
            res.send()

        })
    })




})









app.listen(1122, function(){
    console.log("The server is running at port 1122")
})