const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-shah:qwerty00@cluster0.urbnhke.mongodb.net/blogProject")
// mongoose.connect("mongodb://localhost:27017/BlogProject")

const BlogSchema = mongoose.Schema({
  title : String,
  content : {type : String}
})

const blogs = mongoose.model("blog", BlogSchema)

/////////////// created the database and blogs collection


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

app.get("/", (req, res)=>{

  blogs.find({}).then(data=>{
    res.render("home", {dummyContent: homeStartingContent, post : data})
  })



  
})

app.get("/about",(req,res)=>{
  res.render("about", {aboutInfo: aboutContent})
})

app.get("/contact", (req,res)=>{
  res.render("contact", {contactInfo : contactContent})
})  

app.get("/compose", (req, res)=>{
  res.render("compose")
})


app.post("/compose", (req,res)=>{

  const post1 = new blogs({
    title : req.body.userContentTitle,
    content : req.body.userContentPost
  })
  post1.save()
  
  
  
  res.redirect("/")
})

app.get("/post/:postName", function(req,res){ // you can use - / . for routing before : 
  
  const requestedTitle = _.lowerCase(req.params.postName)

  blogs.find().then(data=>{data.forEach(post=>{
      const storedTitle = _.lowerCase(post.title)

      if(requestedTitle === storedTitle){
        const requestedContent = post.content
        const camelTitle = _.camelCase(storedTitle) // there is no need to store the values in a variable as you can use post.title or post.content inside if statement
  
  
        res.render("post", {title: camelTitle, content: requestedContent})
      }

  })})
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
