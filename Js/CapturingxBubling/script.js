var child = document.querySelector(".child")
var parent = document.querySelector(".parent")
var grandparent = document.querySelector(".grandparent");

parent.addEventListener("click", function () {
    console.log("parent bubling");
})

child.addEventListener("click",function() {
    console.log('child bubling')
})
grandparent.addEventListener("click", () => {
    console.log("grandparent bubble using arrow  function");
})
document.body.addEventListener('click', e =>{
    console.log("Document Bubble    ")
})
// both capturing and bubling

parent.addEventListener("click", function () {
    console.log("parent capturing");
}, capture= true)

child.addEventListener("click",()=> {
    console.log('child capture')
}, capture = true);

grandparent.addEventListener("click", (e) => {
    console.log("grandparent capturing")
}, capture = true)

document.addEventListener('click', e=>{
    console.log("Document Capture")
}, capture= true)


// how to stop this propogation???

// we can do

setTimeout()