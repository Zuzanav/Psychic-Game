
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
    var charArray = [];

//-------------------------------------------------------------------------


// FUNCTIONS  =====================================================================================

// COMPUTER SELECTS RANDOM LETTER --------------------------
    function randomLetter() {
      let guess = letters[Math.floor(Math.random() * letters.length)]
        return guess;
    };

    var compGuess = randomLetter();
    console.log ("computer guess: " + compGuess);


// RESET USER GUESS AMOUNT -------------------------------
    function resetLetterGuessed () {
        $('#lettersGuessed').text("Your Guesses Thus Far: ");
    };


// DISPLAY USER GUESS AMOUNT -----------------------------
    function guessesLeft (i) {
        $('#guesses').html('Guesses Left: ' + i);
    }


// WINNING ----------------------------------------------
function winning () {
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
};


// WRONG GUESS ------------------------------------------
function wrongGuess() {
    guesses--;
    guessesLeft(guesses);
    // display amount of current guesses left
    console.log ("Guesses left: " + guesses);
};


// LOSING ----------------------------------------------
function losing() {
    losses++;
    guesses = 9;
    resetLetterGuessed();
    $('#losses').text('Losses: ' + losses);
        
    compGuess = randomLetter();
    console.log ("computer guess lose: " + compGuess);
};


// ON PRESS EVENT =================================================================================

// Watch for user to press a key
    document.onkeyup = function(event) {

    // save pressed key
        let lettersGuessed = event.key;

            // if the keycode of the key pressed does not match parameters, 
            // let the user know to select a letter only 
            if ( !(event.keyCode >= 65 && event.keyCode <= 90 ) ) {
                alert("Please select a letter only.")

            } else {

                $("#lettersGuessed").append(lettersGuessed + ', ');
        
                console.log ("user guess: " + lettersGuessed);

                charArray.push(event.key)
    
                // If userGuess is same as compGuess 
                if (lettersGuessed === compGuess)  {
                    winning();
        
                // Otherwise, amount of guesses goes down
                } else {
                    wrongGuess();
                };
        
                // when user is out of guesses, they lose and the game resets
                if (guesses === 0) {
                    losing();
                };
            }

        } // end of on keyup function
    }); 


    /* 

                    if (charArray.indexOf(event.key) !== -1) {
                    alert("You already guessed that letter. Select a different one.")

                    */