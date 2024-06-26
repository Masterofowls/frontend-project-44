#!/usr/bin/env node

import { gameStart, gcd, generateGameInstance } from '../../src/index.js';

gameStart('Find the greatest common divisor of given numbers.');

function generateGameGCD() {
  const a = Math.floor(Math.random() * 110);
  const b = Math.floor(Math.random() * 110);
  return `${a} ${b}`;
}

function giveGameGCDAnswer(question) {
  const ab = [];
  question.split(' ').forEach((value) => {
    ab.push(value);
  });
  const [a, b] = ab;
  return gcd(a, b);
}

generateGameInstance(generateGameGCD, giveGameGCDAnswer, false, 3);
