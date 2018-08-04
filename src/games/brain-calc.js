import beginGame from '..';

const task = 'What is the result of the expression?';
const answer = 'Wrong answer.';
const description = { task, answer };
const resultOperation = (randomNum1, randomNum2, Sign) => {
  switch (Sign) {
    case '+':
      return randomNum1 + randomNum2;

    case '-':
      return randomNum1 - randomNum2;

    case '*':
      return randomNum1 * randomNum2;

    default:
      return console.log('No these signs');
  }
};

const askQuestion = () => {
  const randomNum1 = Math.round(Math.random() * 10);
  const randomNum2 = Math.round(Math.random() * 10);
  const arrSign = ['+', '-', '*'];
  const rang = Math.floor(Math.random() * arrSign.length);
  const CurrentSign = arrSign[rang];
  const rightAnswer = resultOperation(randomNum1, randomNum2, CurrentSign);

  return { question: `${randomNum1}${CurrentSign}${randomNum2}`, rightAnswer };
};


const start = () => beginGame(description, askQuestion);

export default start;
