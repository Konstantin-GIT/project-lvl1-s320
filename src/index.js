import readlineSync from 'readline-sync';

const DriverProgram = (userName, askQuestion, checkAnswer) => {
  for (let i = 0; i < 3; i += 1) {
    const result = askQuestion();

    console.log(`Question: ${result}`);

    const answerUser = readlineSync.question('Your answer: ');
    const answerRight = checkAnswer(result);

    if (answerRight.toString() === answerUser.toString()) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
     Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};


const beginGame = (contentAnswer, askQuestion, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(contentAnswer);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  DriverProgram(userName, askQuestion, checkAnswer);
};

export default beginGame;
