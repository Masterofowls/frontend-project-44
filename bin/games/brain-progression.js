#!/usr/bin/env node

import {
  gameStart,
  generateGameInstance,
} from '../../src/index.js';

gameStart('What number is missing in the progression?');

let missingNumber = 0;

function generateGameProgression() {
  const progressionNumbers = [Math.floor(Math.random() * 110)];
  const progressionIncrement = Math.floor(Math.random() * 10 + 1);
  for (let j = 0; j < 9; j += 1) {
    progressionNumbers.push(progressionNumbers[j] + progressionIncrement);
  }
  const randomIndex = Math.floor(Math.random() * 10);
  missingNumber = progressionNumbers[randomIndex];
  progressionNumbers[randomIndex] = '..';
  return progressionNumbers.join(' ');
}
function giveGameProgressionAnswer() {
  return missingNumber;
}

generateGameInstance(generateGameProgression, giveGameProgressionAnswer, false, 3);
