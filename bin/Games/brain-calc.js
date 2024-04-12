import { gameStart, generateGameInstance } from '../../src/index.js';

gameStart('What is the result of this expression?');
function generateGameCalc() {
  const a = Math.floor(Math.random() * 110);
  const b = Math.floor(Math.random() * 110);
  const c = Math.floor(Math.random() * 110);
  let sign = '';
  if (c >= 0 && c <= 33) {
    sign = '+';
  } else if (c > 33 && c <= 66) {
    sign = '-';
  } else {
    sign = '*';
  }
  return `${a} ${sign} ${b}`;
}

function giveGameCalcAnswer(question) {
  return eval(question);
}

generateGameInstance(generateGameCalc, giveGameCalcAnswer, false, 3);





