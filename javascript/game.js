$(document).ready(function() {

var gameTotal = 0;
var wins = 0;
var losses = 0;
var randomTotal = Math.floor(Math.random() * 101) + 19;

    var gem1 = Math.floor(Math.random() * 12) + 1;

    var gem2 = Math.floor(Math.random() * 12) + 1;

    var gem3 = Math.floor(Math.random() * 12) + 1;

    var gem4 = Math.floor(Math.random() * 12) + 1;

// Starts the game when clicked
$("#start").on("click", function() {
    
    

    $("#target").text(randomTotal);
    
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

function reset() {
    $("#target, #total").empty()
    randomTotal = Math.floor(Math.random() * 101) + 19;

    gem1 = Math.floor(Math.random() * 12) + 1;
    console.log(gem1);

    gem2 = Math.floor(Math.random() * 12) + 1;
    console.log(gem2)

    gem3 = Math.floor(Math.random() * 12) + 1;
    console.log(gem3)

    gem4 = Math.floor(Math.random() * 12) + 1;
    console.log(gem4)

    gameTotal = 0;
    $("#target").text(randomTotal);
}

});











