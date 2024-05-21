import emoji from "./emoji.js" 


const meaningx = emoji.map(value=>{
    const file = value.meaning
    return file.substring(0,50)
    
})
console.log(meaningx) //this will return only the meaning array and will shorten it

//////////////////////////////// Filter ////////////////////////////
/////// will return an array 

const array = [12,3,44,34,3, 300]
//////////////// You don't need return if you have one line of code 
const emojiFilter = emoji.filter(value=>value.meaning.length > 50)
console.log( emojiFilter) // this emoji returns an array whose meaning length is greater than 50 characters

const filtered = array.filter(value=>{
    return value >12
})
console.log(filtered)



//////////////////////////////////////// Reduce //////////////////////
////////////// will only return an value after accumulating items in array
// takes in 2 inputs

const arrayFull =  array.reduce((accu , currntNum)=>accu+ currntNum)

console.log(arrayFull)
//////////////////////////////////// Find /////////////////
/// return the first matches 

const matched = array.find(value=> value >20)
console.log(matched)

///////////////////////////////// Find Index///////////////
/// returns the index of first matched


const matchIndex = array.findIndex(vale =>vale > 10)
console.log(matchIndex)









