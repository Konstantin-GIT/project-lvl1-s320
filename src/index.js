

import readlineSync from 'readline-sync';

const enterUserName = () => {
  const valueName = readlineSync.question('May I have your name? ');
  console.log(`Hi,${valueName}!`);
  return valueName;
};

const randomNumber = () => Math.round(Math.random() * 10);

const randomSign = () => {
  const arrSign = ['+', '-', '*'];
  const rang = Math.floor(Math.random() * arrSign.length);
  return arrSign[rang];
};

const resultOperation = (randomNumber1, randomNumber2, CurrentSign) => {
  switch (CurrentSign) {
    case '+':
      return randomNumber1 + randomNumber2;

    case '-':
      return randomNumber1 - randomNumber2;

    case '*':
      return randomNumber1 * randomNumber2;

    default:
      return 'Таких значений CurrentSign нет';
  }
};

const askQuestionBrainCalc = () => {
  const randomNumber1 = randomNumber();
  const randomNumber2 = randomNumber();
  const valueSign = randomSign();
  const valueQuestion = resultOperation(randomNumber1, randomNumber2, valueSign);
  console.log(`Question: ${randomNumber1}${valueSign}${randomNumber2}`);
  return valueQuestion;
};

const askQuestionBraunEven = () => {
  const valueRandomNumber = randomNumber();
  console.log(`Question: ${valueRandomNumber}`);
  return valueRandomNumber;
};


const DriverProgramBrainEven = (playerName, counter) => {
  if (counter === 3) return console.log(`Congratulations, ${playerName}!`);
  let newCounter = counter;
  newCounter += 1;

  const question = askQuestionBraunEven();

  const answer = readlineSync.question('Your answer: ');

  if ((question % 2 === 0 && answer === 'yes') || (question % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    DriverProgramBrainEven(playerName, newCounter);
  } else { return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${playerName}!`); }
};

const DriverProgramBrainCalc = (playerName, counter) => {
  if (counter === 3) return console.log(`Congratulations, ${playerName}!`);

  let newCounter = counter;
  newCounter += 1;

  const question = askQuestionBrainCalc();

  const answer = readlineSync.question('Your answer: ');

  if (answer == question) {
    console.log('Correct!');
    DriverProgramBrainCalc(playerName, newCounter);
  } else { return console.log(`Not correct, ${playerName}!`); }
};

const beginGame = (nameGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = enterUserName();
  switch (nameGame) {
    case 'brainEven':
      console.log('Answer "yes" if number even otherwise answer "no"');
      DriverProgramBrainEven(playerName, 0);
      break;

    case 'brainCalc':
      console.log('What is the result of the expression?');
      DriverProgramBrainCalc(playerName, 0);
      break;

    default: return 'Такой игры нет';
  }
};
export default beginGame;
