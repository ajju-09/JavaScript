let rand = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Plz enter a valid number');
    }else if(guess < 1){
        alert('Plz enter a number greater than zero');
    }else if(guess > 100){
        alert('Plz enter a number smaller than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            display(guess);
            displayMessage(`Game Over. Random number is ${rand}`);
            endGame();
        }
        else{
            display(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === rand){
        displayMessage(`You guessed it Right`);
        endGame();
    }else if(guess < rand){
        displayMessage(`Number is Too Low`);
    }
    else if(guess > rand){
        displayMessage(`Number is Too High`);
    }
}
function display(guess){
    userInput.value = '';
    guesSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}
function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameStart = document.querySelector('#newGame');
    newGameStart.addEventListener('click', (e) => {
        rand = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guesSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

