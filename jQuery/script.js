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

// how to create an element using jQuery

$('h1').before("<p> this is to check the element <br> or \n is it </p>")
$("h1").css('margin', "0")
// document.querySelector('h1').style.margin = "110px"

$('input').after('<button>xlikc</button>')


// animating using jQuery
$("button").on("click", function(){
    // $('img').slideToggle()
    // $('img').fadeOut().slideDown() // combining animations
    setTimeout($("h1").animate({opacity : 0.2}), 1000)
    

})