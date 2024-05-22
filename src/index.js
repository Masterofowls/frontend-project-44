import readlineSync from 'readline-sync';

let name = '';
export function gameStart(rules) {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
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

/**
 * @param {any} question Вопрос
 * @param {any} answerCheck Ответ
 * @param {boolean} useAnswerCheckingYN Использование бинарного ответа типа yes/no
 * вместо точного ответа цифрами
 */

export function gameCycle(question, answer, useAnswerCheckingYN = false) {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
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
/**
 * @param {function} generateQuestion Функция генерирует вопрос -
 * () => { return question }
 * @param {function} generateAnswer Функция возвращает ответ - ( question ) => { return answer }
 * @param {boolean} useAnswerCheckingYN Использование бинарного ответа
 * типа yes/no вместо точного ответа цифрами
 * @param {number} amount Количество вопросов в одной игре(не меньше 1)
 */
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