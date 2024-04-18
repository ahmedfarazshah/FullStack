function beers(){
    var i = 99;
    while(i > 1){
    console.log(i +" bottles of beer on the wall," + i + " bottles of beer. Take one down and pass it around," + (i-1)+ " bottles of beer on the wall.")
    i--;
    }
    // below code is due to the reamining number of bottles when they are 1 and no more left;
        if (i === 1){
        console.log(i +" bottles of beer on the wall," + i + " bottles of beer. Take one down and pass it around," + "No more bottles of beer on the wall.")   
        i--;
        if (i=== 0){
            console.log("No more bottles of beer on the wall, no bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");   
        }
    }else {
        i= 99;
    }
}
beers()