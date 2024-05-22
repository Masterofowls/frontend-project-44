import readlineSync from 'readline-sync';

let name = '';
function gameStart(rules) {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name');
  console.log(`Hello, ${name}!`);
  console.log(rules);
}
export function failState() {
  console.log(`Let's try again, ${name}!`);
}
export function winState() {
  console.log(`Congratulations, ${name}!`);
}
export function gcd(a, b) {
  let a2 = Math.abs(a);
  let b2 = Math.abs(b);
  if (b2 > a2) {
    const temp = a2;
    a2 = b2;
    b2 = temp;
  }
  const run = true;
  while (run) {
    if (b2 === 0) return a2;
    a2 %= b2;
    if (a2 === 0) return b2;
    b2 %= a2;
  }
}
export function gameCycle(question, answer, useAnswerCheckingYN = false) {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Type your answer: ');
  if (useAnswerCheckingYN === true) {
    if (
      (userAnswer === 'no' && answer)
      || (userAnswer === 'yes' && !answer)
      || (userAnswer !== 'yes' && userAnswer !== 'no')
    ) {
      console.log(
        `'${userAnswer}' is incorrect answer ;(. Right answer was '${
          userAnswer === 'yes' ? 'no' : 'yes'
        }'.`,
      );
      return false;
    }
    return true;
  }
  if (+answer !== +userAnswer) {
    console.log(
      `'${userAnswer}' is incorrect answer ;(. Right answer was '${answer}'.`,
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

export default gameStart;
