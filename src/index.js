import readlineSync from 'readline-sync';

const NUM_QUESTION = 3;

const DriverProgram = (userName, askQuestion) => {
  for (let i = 0; i < NUM_QUESTION; i += 1) {
    const result = askQuestion();

    console.log(`Question: ${result.randomNum}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (result.rightAnswer.toString() === answerUser.toString()) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
     Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};


const beginGame = (description, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  DriverProgram(userName, askQuestion);
};

export default beginGame;
