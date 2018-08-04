import beginGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const askQuestion = () => {
  const randomNum = Math.round(Math.random() * 10);
  const isEven = someNumber => ((someNumber % 2 === 0));
  const checkAnswer = number => (isEven(number) ? 'yes' : 'no');
  const rightAnswer = checkAnswer(randomNum);

  return { randomNum:randomNum,rightAnswer:rightAnswer} ;
};


const start = () => beginGame(description, askQuestion);

export default start;
