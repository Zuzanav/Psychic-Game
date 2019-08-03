
// Load when DOM is ready
$(document).ready(function() {

// VARIABLES =====================================================================================

//--------------------------------------------------------------------------------------
// Array with all letters of the alphabet for computer to choose from 
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Variables for Scores
    var wins = 0;
    var losses = 0;
    var guesses = 9;

// Computer chooses a letter, randomly
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log ("computer guess: " + compGuess);
//--------------------------------------------------------------------------------------


// ON PRESS EVENT =============================================================================

// Watch for user to press a key
    document.onkeyup = function(event) {

    // save pressed key
        var userGuess = event.key;
        let lettersGuessed = userGuess;
        $("#lettersGuessed").append(lettersGuessed + ',');
        $('#guesses').text('Guesses Left: ' + guesses);
        console.log ("user guess: " + lettersGuessed);
        
        // If userGuess is same as compGuess 
        if (userGuess === compGuess)  {
          // Add to Wins
          wins++;
          $("#wins").text('Wins: ' + wins);
          // computer to pick a new letter
          compGuess = letters[Math.floor(Math.random() * letters.length)];
          // reset guesses back to 9
          guesses = 9;

  
        // reset user's letters guessed
          $('lettersGuessed').text("Your Guesses Thus Far: ");
          console.log ("computer guess win: " + compGuess);
          console.log ("Wins: " + wins);

          // Otherwise, amount of guesses goes down
        } else {
            guesses--;
            // display amount of current guesses left
            console.log ("Guesses left: " + guesses);
            }

        // when user is out of guesses, they lose and the game resets
        if (guesses === 0) {
            losses++;
            guesses = 9;
            lettersGuessed = '';
            $('#losses').text('Losses: ' + losses);

            compGuess = letters[Math.floor(Math.random() * letters.length)];
            console.log ("computer guess lose: " + compGuess);
        }
        }
    }); 