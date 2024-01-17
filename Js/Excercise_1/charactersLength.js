/* this works similar to the twitter blog section */



var essay = prompt("write an essay of 300 words");
console.log(essay);
// if you the essay will not be sent in the console the system will throw an error that it don't have a value of essay.lenth
var wordswritten = essay.length;
var totalWords = 300;
var wordsLeft = totalWords - wordswritten;

var wordText = ("Total number of characters: " + totalWords + " 2. characters written :" + wordswritten + " 3. characters Remaining: " + wordsLeft);

alert(wordText);

//  this is for the twitter character counter

var essay = prompt("Write message, note that max limit is 180 characters");
console.log(essay);

var final = essay.slice(0, 180);
alert(final);
