var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var alreadyGuessed = [];

var userGuess = null;

var randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
console.log("Wins: " + wins + "Losses: " + losses + "guessesRemaining: " + guessesRemaining + "guessesSoFar: " + alreadyGuessed + "randomLetter" + randomLetter);

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (alreadyGuessed.indexOf(userGuess) < 0 && allLetters.indexOf(userGuess) >= 0) {
        alreadyGuessed[alreadyGuessed.length] = userGuess;
        guessesRemaining--;
    }

    if (randomLetter == userGuess) {
        wins++;
        console.log("You Won!");
        guessesRemaining = 9;
        alreadyGuessed = [];
        randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        console.log("Wins: " + wins + "Losses: " + losses + "guessesRemaining: " + guessesRemaining + "guessesSoFar: " + alreadyGuessed + "randomLetter" + randomLetter);
    }

    if (guessesRemaining == 0) {
        losses++;
        console.log("You Lost!");
        guessesRemaining = 9;
        alreadyGuessed = [];
        randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        console.log("Wins: " + wins + "Losses: " + losses + "guessesRemaining: " + guessesRemaining + "guessesSoFar: " + alreadyGuessed + "randomLetter" + randomLetter);
    }
	
	var html = "<h1>THE PSYCHIC GAME</h1>" + "<h1>Guess Which Letter I'm Thinking Of</h1>" + "<h1>Wins: " + wins + "</h1>" + "<h1>Losses: " + losses + "</h1>" + "<h1>Guesses Remaining: " + guessesRemaining + "</h1>" + "<h1>Already Guessed: " + alreadyGuessed + "</h1>";
	
	document.querySelector("#body").innerHTML = html;

}