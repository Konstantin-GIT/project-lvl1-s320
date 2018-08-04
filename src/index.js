import readlineSync from 'readline-sync';

const DriverProgram = (game, gameState) => {
  if (gameState.counter === 3) { return console.log(`Congratulations, ${gameState.userName}!`); }
  if (gameState.failed) {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${gameState.userName}!`);
  }

  const questionValue = game.askQuestion();

  console.log(`Question: ${questionValue.question}`);
  const answer = readlineSync.question('Your answer: ');
  const newGameState = (answer === questionValue.answer)
    ? { counter: gameState.counter + 1, failed: false, userName: gameState.userName } :
    { counter: gameState.counter + 1, failed: true, userName: gameState.userName };
  return DriverProgram(game, newGameState);
};

const beginGame = game => () => {
  console.log('Welcome to the Brain Games!');
  console.log(game.contentAnswer);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameState = { userName, counter: 0, failed: false };
  DriverProgram(game, gameState);
};

export default beginGame;
