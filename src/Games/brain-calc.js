import { gameStart, generateGameInstance } from '../index.js';

gameStart('What is the result of the expression?');
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
  try {
    return new Function(`return ${question}`)();
  } catch (error) {
    console.error('Error evaluating question:', error);
    return null;
  }
}
generateGameInstance(generateGameCalc, giveGameCalcAnswer, false, 3);

export default generateGameCalc;