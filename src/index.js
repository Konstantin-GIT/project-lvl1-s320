import readlineSync from 'readline-sync';

const DriverProgram = (game, gameState) => {
  if (gameState.counter === 3) { return console.log('You won'); }
  if (gameState.failed) { return console.log('Sorry try again'); }

  const questionValue = game.askQuestion();

  console.log(`Question: ${questionValue.question}`);
  const answer = readlineSync.question('Your answer: ');

  const newGameState = (answer === questionValue.answer) ?
    { counter: gameState.counter += 1, failed: false, userName: gameState.userName } :
    { counter: gameState.counter += 1, failed: true, userName: gameState.userName };
  return DriverProgram(game, newGameState);
};

const beginGame = game => () => {
  console.log('Welcome ...');
  console.log(game.contentAnswer);
  const userName = 'Kos'; // enterName from cli
  const gameState = { userName, counter: 0, failed: false };
  DriverProgram(game, gameState);
};

export default beginGame;
