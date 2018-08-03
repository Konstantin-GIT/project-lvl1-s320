

const brain-even = {
  gameState: {counter: 0, failed: false, namePlayer: },

  start : ()=> {
   console.log('Welcome to the Brain Games!');
   console.log('Answer "yes" if number even otherwise answer "no"');
   namePlayer = readlineSync.question('May I have your name? ');
   console.log(`Hi,${valueName}!`);
   return {counter: 0,failed: false, namePlayer:namePlayer
   };
 },

  step:(gameState)=> {
    let rightAnswer ='';
    const userData =  Math.round(Math.random() * 10);
    console.log(`Question: ${userData}`);
    const answer = readlineSync.question('Your answer: ');
    if (userData % 2 === 0) rightAnswer = 'yes' else rightAnswer = 'no';
    if answer === rightAnswer {
      console.log('Correct!');
      return { counter: (gameState.counter +=1), failed: false }
    } else { console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${playerName}!`);
      return {counter: (gameState.counter +=1), failed: true;}
  },
isFinished: (gameState) => {
    // TODO: написать условия
    return gameState.counter > 3 ? true : false &&
      gameState.failed === true ? true : false
  },
  const print_game_result (gameState)=> {
  if gameState.failed
    { console.log('You lose the game. Try again') }
  else {
    { console.log('You win') }
  }

}

const end ()=> {







};

export default brain-even;
