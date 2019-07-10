
// Load when DOM is ready
$(document).ready(function() {

// Array with all letters of the alphabet for computer to choose from 
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for Scores
    var wins = 0;
    var losses = 0;
    var guesses = 9;

// Variables for HTML Text
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesText = document.getElementById("guesses");

// Starting the Game with 0 wins, 0 losses and 9 Guesses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guesses;

// Computer chooses a letter, randomly
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log ("computer guess: " + compGuess);

// Watch for user to press a key
    document.onkeyup = function(event) {

    // save pressed key
        var userGuess = event.key;
        console.log ("user guess: " + userGuess);
  
        // Compare the guesses
        if (userGuess === compGuess)  {
          // Add to Wins
          wins++;
          winsText.textContent = "Wins: " + wins;
          compGuess = letters[Math.floor(Math.random() * letters.length)];
          console.log ("computer guess win: " + compGuess);
          console.log ("Wins: " + wins);

          // Otherwise, amount of guesses goes down
        } else {
            guesses--;
            guessesText.textContent = "Guesses Left: " + guesses;
            console.log ("Guesses left: " + guesses);
            }

        // when user is out of guesses, they lose and the game resets
        if (guesses === 0) {
            losses++;
            guesses = 9
            lossesText.textContent = "Losses: " + losses;

            compGuess = letters[Math.floor(Math.random() * letters.length)];
            console.log ("computer guess lose: " + compGuess);
        }

        
        }


    });



// if they do not match, the user has 8 guesses left (from 9 guesses)
// if they do not match and the user has 0 guesses left, then user loses 
// once the user wins or loses, the game resets and user and start a new game 
