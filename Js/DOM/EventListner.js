var numberOfItems = 4; // suppose there are 4 items you want to add event listner to
for(var i = 0 ; i < numberOfItems; i++){
    document.querySelectorAll("items")[i].addEventListener('click', function(){ // loop will first add the event listner to first and will so on to the last of item we wanted to add the event listner to 
        console.log("The item was pressed")
    })
}