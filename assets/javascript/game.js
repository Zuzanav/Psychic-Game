// Wins: (# of times the user has guessed the letter correctly)

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// Guesses Left: (# of guesses left. This will update)

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// ====================================

$(document).ready(function() {

// Array with all letters of the alphabet for computer to choose from 
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for scores
    var wins = 0;
    var losses = 0;
    var guesses = 9;

    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesText = document.getElementById("guesses");


    // watch for user to press key
    document.onkeyup = function(event) {

        // save pressed key
        var userGuess = event.key;
        console.log (userGuess);
  
        // Computer chooses a letter, randomly
        var compGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log (compGuess);
  
        // Compare the guesses
        if (userGuess === compGuess)  {
          // Add to Wins
          wins++;
          winsText.textContent = "Wins: " + wins;
          console.log (wins);

          // Otherwise, amount of guesses goes down
        } else {
            guesses--;
            console.log (guesses);
            }

        // when user is out of guesses, they lose and the game resets
        if (guesses === 0) {
            losses++;
            guesses = 9
            lossesText.textContent = "Losses: " + losses;
        }
        
        }

        // Display Score Board
        // winsText.textContent = "Wins: " + wins;



    });



// if they do not match, the user has 8 guesses left (from 9 guesses)
// if they do not match and the user has 0 guesses left, then user loses 
// once the user wins or loses, the game resets and user and start a new game 
