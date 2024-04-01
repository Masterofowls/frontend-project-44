
import {gameStart, failState, winState, loseState, gcd, gameCycle, generateGameInstance} from './index.js';

index.gameStart('Answer "yes" if the number is even, or answer "no" if it does not');
function generateGameEven() {
  return Math.floor(Math.random() * 110) || 11;
}
function giveGameEvenAnswer(question) {
  return question % 2 === 0;
}

index.generateGameInstance(generateGameEven, giveGameEvenAnswer, true, 3);
