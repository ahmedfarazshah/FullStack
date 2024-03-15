const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")//used with the http module to send some data with the help of an api
const https = require("https")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public")) // to get static pages on the web you need to relocate it to a specified folder in the express





app.get("/", (req,res)=>{
    res.sendFile(__dirname+ "/index.html")
    // res.send() // .send has high priority than the .sendfile
})

app.post("/" , (req,res)=>{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data ={
        members :[
            {
                email_address : email,
                status : "subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME : lastName,
                }


            }
        ]
    }
    const jsonData = JSON.stringify(data)// the above data for the mailchimp site
    url = "https://us22.api.mailchimp.com/3.0/lists/4e65b78a93"
    
    const option = { // this is in node documentation to do so
        method : "POST",
        auth : "ahmed2:e2ed7648c9007e2b355cb4e6d7fb636e-us22"
    }

    const request = https.request(url , option , function(response){
        response.on("data", data=>{
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end() // that the data we send was complete
})








// mailchimp key
// 169553b20d186670ba88a22580859379-us22
// e2ed7648c9007e2b355cb4e6d7fb636e-us22 new

// mailchimp id
// 4e65b78a93




app.listen(3000, function(){
    console.log("The Server is Running at Port 3000")
})