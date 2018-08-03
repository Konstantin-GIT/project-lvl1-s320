import beginGame from '..';

const contentAnswer = 'Brain Even title';
const askQuestion = () => {
  const randomNum = Math.round(Math.random() * 10);
  return {
    question: randomNum,
    answer: (randomNum % 2 === 0) ? 'yes' : 'no',
  };
};

const Game = { contentAnswer, askQuestion };

export default beginGame(Game);
