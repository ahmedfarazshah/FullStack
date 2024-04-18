var child = document.querySelector(".child")
var parent = document.querySelector(".parent")
var grandparent = document.querySelector(".grandparent");

/*
// 1 is by using the method of event ; stoppropogation() and using it in a callback function
// this is use of stop propogation method to stop capturing or bubbling to proceed further


parent.addEventListener("click", function (e) {
    console.log("parent bubling");
    // e.stopPropagation()
})

child.addEventListener("click",function() {
    console.log('child bubling')
})
grandparent.addEventListener("click", () => {
    console.log("Grandparent Bubble");
})
document.body.addEventListener('click', e =>{
    console.log("Document Bubble    ")
})
// both capturing and bubling

parent.addEventListener("click", function () {
    console.log("parent capturing");
}, capture= true)

child.addEventListener("click",(e)=> {
    // e.stopImmediatePropagation()
    console.log('child capture');
}, capture = true);

grandparent.addEventListener("click", (e) => {
    console.log("grandparent capturing")
}, capture = true)

document.addEventListener('click', e=>{
    // e.stopImmediatePropagation()
    console.log("Document Capture")
}, capture= true)

*/


// 2 - The  use of once property of the event 

document.addEventListener('click', e=>{
    console.log("Document Capture")
}, {once : true});


// 3 -  Use of timeout with removeEventListner method
// we also have to use another function
function printHi(){
    console.log('Hi')
}

child.addEventListener("click", printHi);
setTimeout(()=>{
    child.removeEventListener("click", printHi)
}, 2000);

setTimeout(e => {
    console.log("hey I am a time bomb don't just exit the page I will explode")
}, 3000);

// Mashallah brother



//  What if we use it without the timeout function
/*
parent.addEventListener('click', e => {
    console.log("Parent bubble")
})
parent.removeEventListener('click', e => {
    console.log("Parent bubble")
})
*/
// simple it won't work






// 4- The best practice is to use the target property and matches() method to select  and make your own function
// deligating/ selecting the or targeting the element onto which the event occured
// e.target(".parent")

/*
will print Hi whenever there is a click on the page

document.addEventListener('click', function (){
    console.log("Hi")
})
*/

/*

----Will only target the grandparent simply it deligates insides the grandparent element that we have selected


grandparent.addEventListener('click', e => {
    if(e.target.matches(".grandparent")){
        console.log("only the grandparent is cliked")
    }
})

*/


// But the ideal is to create a function


// function select (type , item , callback){
//     document.addEventListener(type, e => {
//         if(e.target.matches(item))
//         callback()
//     )
// }
// select("click", "div", e => {
//     console.log('file')
// })

function addGlobalEventListner ( type, selector , callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)){
        callback(e)} 
    })
}

addGlobalEventListner("click", ".parent", e =>{
    console.log('Hello World')
})
