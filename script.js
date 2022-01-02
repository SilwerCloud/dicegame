'use strict';

// Roll dice button
const diceButton = document.querySelector('.btn--roll');
// New game button
const newGameButton = document.querySelector('.btn--new');
// Hold Button
const holdButton = document.querySelector('.btn--hold');
// Dice picture
const dicePic = document.querySelector('.dice');
// Player 1 score
const player1 = document.querySelector('#current--0');
// Player 2 score
const player2 = document.querySelector('#current--1');
// Playerss Background
const player1Active = document.querySelector('.player--0');
const player2Active = document.querySelector('.player--1');

// Players Total wins
const player1Wins = document.querySelector('#score--0');
const player2Wins = document.querySelector('#score--1');

// Reset game
const resetGameButton = document.querySelector('.btn--new');

// Generate random number 1 to 6
let randomNumber = Math.floor(Math.random() * 6) + 1;

// Players scores
let player1Score = 0;
let player2Score = 0;
// Current player playing P1=player 1 , P2=player 2
let currentPlayer = 'P1';

// How many games won
let player1WonGames = 0;
let player2WonGames = 0;

// -----Functions----

// Resets game
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 'P1';
  player1WonGames = 0;
  player2WonGames = 0;
  player1.textContent = player1Score;
  player1Wins.textContent = player1WonGames;
  player2.textContent = player2Score;
  player2Wins.textContent = player2WonGames;
}

// Changes player
function changePlayer() {
  if (currentPlayer === 'P1') {
    currentPlayer = 'P2';
    player1Active.classList.remove('player--active');
    player2Active.classList.add('player--active');
  } else {
    currentPlayer = 'P1';
    player2Active.classList.remove('player--active');
    player1Active.classList.add('player--active');
  }
}

// Rolls dice and adds points to current player
function rollDice() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  dicePic.src = `dice-${randomNumber}.png`;

  // Checks what player plays changePlayer() changes players
  if (currentPlayer === 'P1') {
    if (randomNumber === 1) {
      player1Score = 0;
      player1.textContent = player1Score;
      changePlayer();
    } else {
      player1Score += randomNumber;
      player1.textContent = player1Score;
      if (player2Score >= 100) {
        player1WonGames += 1;
        player1Score = 0;
        player1.textContent = player1Score;
        player1Wins.textContent = player1WonGames;
        changePlayer();
      }
    }
  } else {
    if (randomNumber === 1) {
      player2Score = 0;
      player2.textContent = player2Score;
      changePlayer();
    } else {
      player2Score += randomNumber;
      player2.textContent = player2Score;
      if (player2Score >= 100) {
        player2WonGames += 1;
        player2Score = 0;
        player2.textContent = player2Score;
        player2Wins.textContent = player2WonGames;
        changePlayer();
      }
    }
  }
}

// --------// Event listeneres --------

diceButton.addEventListener('click', rollDice);

holdButton.addEventListener('click', changePlayer);

resetGameButton.addEventListener('click', resetGame);
