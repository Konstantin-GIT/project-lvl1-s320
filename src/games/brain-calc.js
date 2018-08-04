import beginGame from '..';

const resultOperation = (randomNum1, randomNum2, Sign) => {
  switch (Sign) {
    case '+':
      return randomNum1 + randomNum2;

    case '-':
      return randomNum1 - randomNum2;

    case '*':
      return randomNum1 * randomNum2;

    default:
      return console.log('Я таких значений не знаю');
  }
};

const contentAnswer = 'What is the result of the expression?';

const askQuestion = () => {
  const randomNum1 = Math.round(Math.random() * 10);
  const randomNum2 = Math.round(Math.random() * 10);
  const arrSign = ['+', '-', '*'];
  const rang = Math.floor(Math.random() * arrSign.length);
  const CurrentSign = arrSign[rang];
  const newAnswer = resultOperation(randomNum1, randomNum2, CurrentSign);
  console.log(newAnswer);
  return {
    question: `${randomNum1}${CurrentSign}${randomNum2}`,
    answer: newAnswer,
  };
};

const Game = { contentAnswer, askQuestion };

export default beginGame(Game);
