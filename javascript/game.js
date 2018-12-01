$(document).ready(function() {

var gameTotal = 0;
var wins = 0;
var losses = 0;

 // Generates a random number between 19 and 120 as the target number
var randomTotal = Math.floor(Math.random() * 101) + 19;

// Generates a random value for each gem between 1 and 12
var gem1 = Math.floor(Math.random() * 12) + 1;
console.log(gem1);

var gem2 = Math.floor(Math.random() * 12) + 1;
console.log(gem2)

var gem3 = Math.floor(Math.random() * 12) + 1;
console.log(gem3)

var gem4 = Math.floor(Math.random() * 12) + 1;
console.log(gem4)

function reset() {
    $("#target, #total").empty()
}

// Starts the game when clicked
$("#start").on("click", function() {
    $("#target").text(randomTotal);
});

// If a crystal is clicked, it's randomly assigned value is added to the user's total
$("#gem1").on("click", function() {
    gameTotal += gem1;
    $("#total").text(gameTotal);
    // If the total reaches exactly the random number, the user wins, the game resets, and a win is added to the win counter
    if (gameTotal === randomTotal) {
        wins++;
        $("#counter").text("Wins " + wins);
        reset();
    }
    // If the total goes over the random number, the user loses, the game resets, and a loss is added to the loss counter
    else if (gameTotal > randomTotal) {
        losses++;
        $("#counter2").text("Losses " + losses);
        reset();
    }
});

$("#gem2").on("click", function() {
    gameTotal += gem2;
    $("#total").text(gameTotal);
    if (gameTotal === randomTotal) {
        wins++;
        $("#counter").text("Wins " + wins);
        reset();
    }
    else if (gameTotal > randomTotal) {
        losses++;
        $("#counter2").text("Losses " + losses);
        reset();
    }
});

$("#gem3").on("click", function() {
    gameTotal += gem3;
    $("#total").text(gameTotal);
    if (gameTotal === randomTotal) {
        wins++;
        $("#counter").text("Wins " + wins);
        reset();
    }
    else if (gameTotal > randomTotal) {
        losses++;
        $("#counter2").text("Losses " + losses);
        reset();
    }
});

$("#gem4").on("click", function() {
    gameTotal += gem4;
    $("#total").text(gameTotal);
    if (gameTotal === randomTotal) {
        wins++;
        $("#counter").text("Wins " + wins);
        reset();
    }
    else if (gameTotal > randomTotal) {
        losses++;
        $("#counter2").text("Losses " + losses);
        reset();
    }
});

});











