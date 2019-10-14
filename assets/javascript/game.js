
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

//-------------------------------------------------------------------------

// Computer chooses a letter, randomly
    function randomLetter () {
      let guess = letters[Math.floor(Math.random() * letters.length)]
        return guess;
    };

    var compGuess = randomLetter();
    console.log ("computer guess: " + compGuess);


    function resetLetterGuessed () {
        $('#lettersGuessed').text("Your Guesses Thus Far: ");
    };

//-------------------------------------------------------------------------

// function to show amount of guesses left 
    function guessesLeft (i) {
        $('#guesses').text('Guesses Left: ' + i);
    }



// ON PRESS EVENT =============================================================================

// Watch for user to press a key
    document.onkeyup = function(event) {

//--------------------------------------------------------------------------------------

    // save pressed key
        //var userGuess = event.key;
        let lettersGuessed = event.key;
        var regex = /^[A-Za-z]+$/;
        
        //Validate TextBox value against the Regex
        var isValid = regex.test(lettersGuessed);
        console.log(isValid);
        
        if (!isValid || lettersGuessed === 'Enter') {
            alert("Only letters allowed");

        } else {

            $("#lettersGuessed").append(lettersGuessed + ',');
            //$('#guesses').text('Guesses Left: ' + guesses);
            guessesLeft(guesses);
    
            console.log ("user guess: " + lettersGuessed);
        };
         
        
        // If userGuess is same as compGuess 
        if (lettersGuessed === compGuess)  {
          // Add to Wins
          wins++;
          $("#wins").text('Wins: ' + wins);
          // computer to pick a new letter
          compGuess = randomLetter();
          // reset guesses back to 9
          guesses = 9;
  
        // reset user's letters guessed
          resetLetterGuessed();
          console.log ("computer guess win: " + compGuess);
          console.log ("Wins: " + wins);

          // Otherwise, amount of guesses goes down
        } else {
            guesses--;
            guessesLeft(guesses);
            // display amount of current guesses left
            console.log ("Guesses left: " + guesses);
            //$('#guesses').text('Guesses Left: ' + guesses);
            }

        // when user is out of guesses, they lose and the game resets
        if (guesses === 0) {
            losses++;
            guesses = 9;
            resetLetterGuessed();
            $('#losses').text('Losses: ' + losses);

            compGuess = randomLetter();
            console.log ("computer guess lose: " + compGuess);
        
            // store userGuess in JSON array and add to guesses thus far 
            // when there is a new guess, i need a new if/else that checks to see if new guess already is inside that array 
            // 
        }

        } // end of on keyup function
    }); 