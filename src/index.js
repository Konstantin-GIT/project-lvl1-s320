import readlineSync from 'readline-sync';

const NUM_QUESTION = 3;

const DriverProgram = (userName, description, askQuestion) => {
  for (let i = 0; i < NUM_QUESTION; i += 1) {
    const result = askQuestion();

    console.log(`Question: ${result.question}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (result.rightAnswer.toString() === answerUser.toString()) {
      console.log('Correct!');
    } else {
      return console.log(`${description.answer} \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};


const beginGame = (description, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description.task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  DriverProgram(userName, description, askQuestion);
};

export default beginGame;
