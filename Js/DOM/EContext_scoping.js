var file = 112;

function first(){
    var a = 'hello';
    second();
    function second(){
        var b = "hi";
        third();
    }
}

function third() {
    var c = "Whats up"
    console.log(c);
}       // a and b variables are not defined or declared in the execution context of the third or global scope
first();


// the execution context of third is after the second function but the scoping of third is only the global and of itself not the second or first and due to that it can only access the global variables and variables of itself;