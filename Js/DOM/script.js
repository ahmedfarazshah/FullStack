// Know that when there is elements its an array 
// and when it is only element it returns the value of the selected item

// do remember that the selectors are always inside the qoutation marks due to the similarity in the inline js


// there are several types of selectors 

// document.firstElemetchild.lastELementChild.nextElementSibiling // returns only the elemet
// document.getElemetsbyTagName("") // will same return an array            // array of same tags names/ elemets
// document.getElemetsByClass("") // returns an array
// document.getElementByClass("selector") //  returns the element as the id is specific
// document.querySelector(".file, #item")           // the selection of selector's working is similar to the selection of selectors in css  
// document.querySelector("li").innerHTML= "is it working";  // it will also removes the anchor tag as you have asked to do the specific task;
// document.querySelectorAll("a") // will select all the anchor tags in the window object and will return an array 
// while the document.querySelector("a") // will select just the first anchor tag/element is sees 




//document.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.innerHTML = "hey he is always messing with me";



document.querySelector("h1").classList.toggle('huge');

