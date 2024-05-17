import {
    gameStart,
    generateGameInstance,
  } from '../../src/index.js';
  
  gameStart('Type number, which is missing in the progression?');
  
  let missingNumber = 0;
  
   export function generateGameProgression() {
    const progressionNumbers = [Math.floor(Math.random() * 110)];
    const progressionIncrement = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < 9; i += 1) {
      progressionNumbers.push(progressionNumbers[j] + progressionIncrement);
    }
    const randomIndex = Math.floor(Math.random() * 10);
    missingNumber = progressionNumbers[randomIndex];
    progressionNumbers[randomIndex] = '..';
    return progressionNumbers.join(' ');
  }
  function getGameProgressionAnswer() {
    return missingNumber;
  }
  
  generateGameInstance(generateGameProgression, getGameProgressionAnswer, false, 3);