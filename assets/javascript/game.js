
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

// RESET USER GUESS AMOUNT -------------------------------
    function resetLetterGuessed () {
        $('#lettersGuessed').text("Your Guesses Thus Far: ");
    };


// DISPLAY USER GUESS AMOUNT -----------------------------
    function guessesLeft (i) {
        $('#guesses').html('Guesses Left: ' + i);
    };

// WINNING ----------------------------------------------
function winning () {
    // Add to Wins
    wins++;
    $("#wins").text('Wins: ' + wins);
    // computer to pick a new letter
    compGuess = randomLetter();
    // reset guesses back to 9
    guesses = 9;
    charArray.length = 0;    
     // reset user's letters guessed
    resetLetterGuessed();
};


// WRONG GUESS ------------------------------------------
function wrongGuess() {
    guesses--;
    // display amount of current guesses left
    guessesLeft(guesses);
};


// LOSING ----------------------------------------------
function losing() {
    losses++;
    guesses = 9;
    resetLetterGuessed();
    charArray.length = 0;
    $('#losses').text('Losses: ' + losses);
    compGuess = randomLetter();
};

//===============================================================================================

// ON PRESS EVENT =================================================================================

// Watch for user to press a key
    document.onkeyup = function(event) {

    // save pressed key
        let lettersGuessed = event.key;

            // WRONG KEY
            // if the keycode of the key pressed does not match parameters, let the user know to select a letter only 
            if ( !(event.keyCode >= 65 && event.keyCode <= 90 ) ) {
                alert("Please select a letter only.")

            } else {

                if (charArray.indexOf(event.key) !== -1) { 
                    alert("You already guessed that letter. Select a different one.")

                } else {
                    // add guessed letter to display
                    $("#lettersGuessed").append(lettersGuessed + ', ');
                            
                    console.log ("user guess: " + lettersGuessed);

                    // add guessed letter to array
                    charArray.push(event.key)
                    
                    // USER WIN 
                    if (lettersGuessed === compGuess)  {
                        winning();

                    // USER GUESSES WRONG
                    } else {
                        wrongGuess();
                    };

                    // USER LOSES 
                    if (guesses === 0) {
                        losing();
                    };
                }
            }
        } // end of on keyup function
        
    });  // end document ready function