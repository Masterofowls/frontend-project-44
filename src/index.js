import readlineSync from 'readline-sync';

let name = '';
export function gameStart(rules) {
  console.log('Welcome to Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  console.log(rules);
}

export function failState() {
  console.log(`Oops, let's try again, ${name}! =)`);
}

export function winState() {
  console.log(`Greetings, ${name}!`);
}

export function gcd(a, b) {
  let newA = Math.abs(a);
  let newB = Math.abs(b);
  if (newB > newA) {
    const temp = newA;
    newA = newB;
    newB = temp;
  }
  while (true) {
    if (newB === 0) return newA;
    newA %= newB;
    if (newA === 0) return newB;
    newB %= newA;
  }
}



export function gameCycle(question, answer, useAnswerCheckingYN = false) {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer is: ');
  if (useAnswerCheckingYN === true) {
    if (
      (userAnswer === 'no' && answer)
      || (userAnswer === 'yes' && !answer)
      || (userAnswer !== 'yes' && userAnswer !== 'no')
    ) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${
          userAnswer === 'yes' ? 'no' : 'yes'
        }'.`,
      );
      return false;
    }
    return true;
  }
  if (+answer !== +userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
    );
    return false;
  }
  return true;
}



export function generateGameInstance(
  generateQuestion,
  generateAnswer,
  useAnswerCheckingYN,
  amount,
) {
  if (amount < 1) {
    return 0;
  }
  for (let i = 0; i < amount; i += 1) {
    const question = generateQuestion();
    const answer = generateAnswer(question);
    if (!(gameCycle(question, answer, useAnswerCheckingYN))) {
      failState();
      return -1;
    }
  }
  winState();
  return 1;
}

module.exports = {
 gameStart,
 failState,
 winState,
 gcd,
 gameCycle,
 generateGameInstance,
 
};