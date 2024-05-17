import { gameStart, generateGameInstance } from '../../src/index.js';

gameStart('Type "yes" if given number is prime. Otherwise answer "no".');
const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107,
];

export function generateGamePrime() {
  return Math.floor(Math.random() * 110) || 11;
}
function giveGamePrimeAnswer(question) {
  return primeNumbers.includes(question);
}

generateGameInstance(generateGamePrime, giveGamePrimeAnswer, true, 3);