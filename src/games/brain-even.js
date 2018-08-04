import beginGame from '..';

const contentAnswer = 'Answer "yes" if number even otherwise answer "no".';

const askQuestion = () => {
  const randomNum = Math.round(Math.random() * 10);
  return randomNum;
};

const checkAnswer = answer => ((answer % 2 === 0) ? 'yes' : 'no');


const start = () => beginGame(contentAnswer, askQuestion, checkAnswer);

export default start;
