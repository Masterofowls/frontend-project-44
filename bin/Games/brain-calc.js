const readlineSync = require('readline-sync');


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
}


function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN; // В случае некорректного оператора возвращаем NaN
  }
}

// Функция для запуска игры "Калькулятор"
function startCalculator() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operator = getRandomOperator();
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateExpression(num1, operator, num2);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}


startCalculator();





