
import {gameStart, generateGameInstance} from '../index.js';

gameStart('Answer "yes" if the number is even, or answer "no" if it does not');
export function generateGameEven() {
  return Math.floor(Math.random() * 110) || 11;
}
function giveGameEvenAnswer(question) {
  return question % 2 === 0;
}

generateGameInstance(generateGameEven, giveGameEvenAnswer, true, 3);
