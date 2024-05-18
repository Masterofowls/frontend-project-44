import { gameStart, generateGameInstance } from '../index.js';

gameStart('Answer "yes" if the number is even, otherwise answer "no"');
function generateGameEven(){
  return Math.floor(Math.random() * 110) || 11;
}
function giveGameEvenAnswer(question) {
  return question % 2 === 0;
}
generateGameInstance(generateGameEven, giveGameEvenAnswer, true, 3);

export default generateGameEven;
