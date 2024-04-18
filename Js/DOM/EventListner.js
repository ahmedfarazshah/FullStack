// to select multiple items or elements

var numberOfItems = 4; // suppose there are 4 items you want to add event listner to
for(var i = 0 ; i < numberOfItems; i++){
    document.querySelectorAll("items")[i].addEventListener('click', function(){ // loop will first add the event listner to first and will so on to the last of item we wanted to add the event listner to 
        console.log("The item was pressed")
    })
}

// customly typed built event function

// first we will make a higher order function that will take another function as parameter

function cal(numberOne , numberTwo , callback){
    alert(callback(numberOne, numberTwo))
}

function modulous (a, b){
    return a % b 
}

// cal(5,2, modulous)
// we won't add any parathesis as it will be executed before we wanted it to execute

// NOW we will make higher order function so that we can pass a parameter in the callback

function who (name, callback){
    var attributes = {
        name : name,
        fatherN : 'we gather info soon',
        age : 33
    }
    var file = 'this to a confidential file'
    if(attributes.name === 'satoshi')
        callback(file);
    else
        callback(attributes)
}
// who('satoshdi', function(sho){ 
//     console.log(sho)
// })

// so we made a function that will give us back something when we pass a parameter in the callback function



//  NOW we will make our own Event Listner 

function ourEventListner (eventtype , callback){
    
    var eventThatHappened = {
            typeofevent : "keypress",
            key : "s",
            durationofkeypress : 3
    }
    
    if (eventThatHappened.key === eventtype)
        callback(eventThatHappened) // if the eventype that will pass will not match the key then the callback will not run
    // if none property is found how will it run mate
}
ourEventListner('s', function(sho){ 
    console.log('it this a key')
    console.log(sho)
})