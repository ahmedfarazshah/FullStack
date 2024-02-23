// jquery stores everything as an object and to set something a we have to use a method 

// console.log(jQuery('h1'))
// console.log(document.querySelector("h1").innerHTML= "file")

$("h1").css('font-size', "10rem")
$("h1").html("<em>this is to checkx<em/>")

// console.log($('h1'))

console.log($('img').attr("src", "../Assets/Images/bird.png"))

$(document).keypress(function(event){
    var file = event.key;
    $('h1').html(`<em>${file}<em/>`).css('color', 'red') // USING LITERALS
    // $('h1').html("<em>"+ file + "<em/>").css('color', 'red') // WITHOUT USING TEMPLATE LITERALS
    
})