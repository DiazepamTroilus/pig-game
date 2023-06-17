'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = 1 - activePlayer;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
};

console.log(score1.textContent);
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;
    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
    //if rolled 1 , switch to the next player
  }
});
btnHold.addEventListener('click', function () {
  //1 add curr score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.check if player's score >=100
    if (scores[activePlayer] >= 100) {
      //if yes finish
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }

    //if not switch
  }
});
btnNew.addEventListener('click', function () {
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  current1.textContent = 0;
  current0.textContent = 0;
  dice.classList.add('hidden');
  scores[0] = 0;
  scores[1] = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  currentScore = 0;
});
