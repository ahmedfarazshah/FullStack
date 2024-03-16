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
        auth : "mykey:f340c50a72a3c614277c4b0be3da1a12-us22" /// if upload on github then changed the key as it will be revoked by the mailchimp site
    }

    const request = https.request(url , option , response=>{
        response.on("data", data=>{
            console.log(JSON.parse(data))
            if(response.statusCode == 200){
                res.sendFile(__dirname + '/success.html')
            }else {
                res.sendFile(__dirname + "/failure.html")
            }
        })
    })

    request.write(jsonData)
    request.end() // that the data we send was complete


})
app.post("/failure" ,(req, res)=>{
    res.redirect("/")
})







// mailchimp key
// f340c50a72a3c614277c4b0be3da1a12-us22

// mailchimp id
// 4e65b78a93




app.listen(3000, function(){
    console.log("The Server is Running at Port 3000")
})