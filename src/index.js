

import readlineSync from 'readline-sync';

export const displayMessageScreen = content => console.log(content);

export const enterUserName = () => {
  const valueName = readlineSync.question('May I have your name? ');
  console.log(`Hi,${valueName}!`);
  return valueName;
};

export const randomNumber = () => Math.round(Math.random() * 10);

export const randomSign = () => {
  const arrSign = ['+', '-', '*'];
  const rang = Math.floor(Math.random() * arrSign.length);
  return arrSign[rang];
};

export const resultOperation = (randomNumber1, randomNumber2, CurrentSign) => {
  switch (CurrentSign) {
    case '+':
      return randomNumber1 + randomNumber2;

    case '-':
      return randomNumber1 - randomNumber2;

    case '*':
      return randomNumber1 * randomNumber2;

    default:
      return displayMessageScreen('Я таких значений не знаю');
  }
};

export const askQuestionBraunEven = () => {
  const valueRandomNumber = randomNumber();
  displayMessageScreen(`Question: ${valueRandomNumber}`);
  return valueRandomNumber;
};

export const askQuestionBrainCalc = () => {
  const randomNumber1 = randomNumber();
  const randomNumber2 = randomNumber();
  const valueSign = randomSign();
  const valueQuestion = resultOperation(randomNumber1, randomNumber2, valueSign);
  const textQuestion = `Question: ${randomNumber1}${valueSign}${randomNumber2}`;

  displayMessageScreen(textQuestion);
  displayMessageScreen(valueQuestion);
  return valueQuestion;
};

export const answerUser = () => {
  const contentAnswer = readlineSync.question('Your answer: ');
  return contentAnswer;
};

export const checkAnswerBrainEven = (playerName, valueAnswer, valueQuestion, counter) => {
  if (valueAnswer !== 'no' && valueAnswer !== 'yes') { displayMessageScreen(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${playerName}! `); }
  if ((valueQuestion % 2 === 0 && valueAnswer === 'yes') || (valueQuestion % 2 !== 0 && valueAnswer === 'no')) {
    displayMessageScreen('Correct!');
    DriverProgramBrainEven(playerName, counter);
  } else displayMessageScreen(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${playerName}!`);
};

export const checkAnswerBrainCalc = (playerName, valueAnswer, valueQuestion, counter) => {
  if (valueAnswer == valueQuestion) {
    displayMessageScreen('Correct!');
    DriverProgramBrainCalc(playerName, counter);
  } else { displayMessageScreen(`Not correct, ${playerName}!`); }
};

export const DriverProgramBrainEven = (playerName, counter) => {
  if (counter === 3) return console.log(`Congratulations, ${playerName}!`);
  let newCounter = counter;
  newCounter += 1;

  const valueQuestion = askQuestionBraunEven();

  const valueAnswer = answerUser();

  return checkAnswerBrainEven(playerName, valueAnswer, valueQuestion, newCounter);
};

export const DriverProgramBrainCalc = (playerName, counter) => {
  if (counter === 3) return console.log(`Congratulations, ${playerName}!`);

  let newCounter = counter;
  newCounter += 1;

  const valueQuestion = askQuestionBrainCalc();

  const valueAnswer = answerUser();

  return checkAnswerBrainCalc(playerName, valueAnswer, valueQuestion, newCounter);
};
