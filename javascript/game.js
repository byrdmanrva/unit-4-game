$(document).ready(function() {

// var total = [];
// var isEqual = false;
// var isOver = false;
var gemValue = [];

// Assign random values between 1 and 12 to each crystal 
// Generates a random value for each gem between 1 and 12
var gem1 = Math.floor(Math.random() * 12) + 1;
console.log(gem1);

var gem2 = Math.floor(Math.random() * 12) + 1;
console.log(gem2)

var gem3 = Math.floor(Math.random() * 12) + 1;
console.log(gem3)

var gem4 = Math.floor(Math.random() * 12) + 1;
console.log(gem4)


// Starts the game when clicked
$("#start").on("click", function() {
// $("target").empty();
 // Generates a random number between 19 and 120 as the target number
var randomTotal = Math.floor(Math.random() * 101) + 19;
console.log(randomTotal);
$("#target").text(randomTotal);

});
// If a crystal is clicked, it's randomly assigned value is added to the user's total

$("#gem1").on("click", function() {
$("#total").text(gem1);
});

$("#gem2").on("click", function() {
$("#total").text(gem2);
});

$("#gem3").on("click", function() {
$("#total").text(gem3);
});

$("#gem4").on("click", function() {
$("#total").text(gem4);
});

// If the total reaches exactly the random number, the user wins, the game resets, and a win is added to the win counter


// If the total goes over the random number, the user loses, the game resets, and a loss is added to the loss counter




});

// var randomTotal = total[Math.floor(Math.random() * total.length)];
// console.log(randomTotal);
// $("#target").text(randomTotal);

// for (var i = 1; i < 13; i++) {
//     gemValue.push([i]);
// };

// $("#target").text(randomTotal);
// window.onkeypress = function gameStart (){
//     $("#target").text(randomTotal);};










