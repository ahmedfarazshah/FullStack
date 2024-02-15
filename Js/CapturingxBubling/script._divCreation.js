// How to create a div using html

var newDiv = document.createElement("div")
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "red"
newDiv.style.borderRadius = "20px"
document.body.append(newDiv)


newDiv.addEventListener("click", function(){
    alert("hey I have got clicked")
    document.body.style.backgroundColor = "red";
} 
)
