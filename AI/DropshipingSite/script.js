// script.js

// Add any JavaScript functionality or interactions here
$(document).ready(function(){
    // Example: Add a mouse hover effect
    $(".product").hover(
        function() {
            $(this).css("border", "2px solid #333");
        }, 
        function() {
            $(this).css("border", "1px solid #ddd");
        }
    );
});
