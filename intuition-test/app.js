/*
GAME FEATURES: 
- player must guess a number between a min and max
- player is allowed a certain amount of guesses
- notify player of guesses remianing 
- notify the player of the correct answer if loose 
- let player choose to replay
*/

// game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//play again event listenr
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

//listen for guess

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate to check if black and meets min/max values

  if (isNaN(guess) | (guess < min) || guess > max) {
    setMessage(`Enter a number between ${min} and ${max}`, 'green');
  }
  //check if nunmber is guessed correctly
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct`);
  } else {
    // wrong guess
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // game over- lost

      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // game continues

      //change border color
      guessInput.style.borderColor = 'red';

      //change tetxt color
      message.style.color = 'red';

      //clear input

      guessInput.value = '';

      //notify user that the number is wrong
      setMessage(`${guess} is incorrect, you have ${guessesLeft} guesses left`);
    }
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  guessInput.disabled = true;
  //change border
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  //set message
  setMessage(msg);

  //play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//get winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
