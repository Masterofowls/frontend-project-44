#!/usr/bin/env node

import {
    gameStart,
    generateGameInstance,
  } from '../../src/index.js';
  
  gameStart('What number is missing in the progression?');
  
  let missingNumber = 0;
  
  function generateGameProgression() {
    // Начальное число
    const progressionNumbers = [Math.floor(Math.random() * 110)];
    // Инкремент прогрессии
    const progressionIncrement = Math.floor(Math.random() * 10 + 1);
    for (let j = 0; j < 9; j += 1) {
      // Наполнение массива прогрессии
      progressionNumbers.push(progressionNumbers[j] + progressionIncrement);
    }
    // Случайный индекс для числа, которое будут угадывать
    const randomIndex = Math.floor(Math.random() * 10);
    // Число которое будут угадывать
    missingNumber = progressionNumbers[randomIndex];
    progressionNumbers[randomIndex] = '..';
    return progressionNumbers.join(' ');
  }
  function giveGameProgressionAnswer() {
    return missingNumber;
  }
  
  generateGameInstance(generateGameProgression, giveGameProgressionAnswer, false, 3);