function fibonacciSeries(n) {
    var output = [0,1,1] // it is used inside because the value after of value should reset.
    
    if(n <= 3 && n > 0){ // also can use != 0 but this will take negative a true
        return output.slice(0, n);
    }else{// this indicates that the for loop can also be used without a increment;
        for (output.length; output.length < n;){ // or you can declare a variable and initialize the value from 3 or from the lenth of the array
        output.push(output[output.length - 2] + output[output.length -1]);
        }          
    return output;
    }
}

/* for(var i = 3; i < n ; i++){
    rest is same
    the thing that happened here is that the i is equal to the output.length and when the output.length will be equal to the n then the function will stop;
}
*/

// this time its a global execution context 
function fibUsingWhile(n){
    
    var file = [0,1,1];
    
    if(n<=3 && n != 0){
        return file.slice(0,n);
    }
    else{
        while(file.length < n){ 

            file.push(file[file.length - 2] + file[file.length - 1]);
        }
        return file;
    }
}


/* testing the for loops 

// the file will add the number five times to the array

function file(number) {    
    var list = [];
    for (var o = 0; o <= 5 ; o++){
        list.push(number)
    } 

    return list;

}

*/