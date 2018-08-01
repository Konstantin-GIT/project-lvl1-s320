

import readlineSync from 'readline-sync';

export const enterName = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
  const valueName = readlineSync.question('May I have your name? ');
  console.log(`Hi,${valueName}!`);
  return valueName;
};

export const beginProgramBraimEven = () => {
  const valueName = enterName();
  evenProgram(valueName,0);
};


export const askQuestion = () => {
  const randomNumber = Math.round (Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  return randomNumber;
};

export const getRangeRnd = (maxNumLen) => {
	return Math.floor(Math.pow(10, Math.floor(Math.random() * maxNumLen + 1)) * Math.random());
};

export const answerUser = () => {
  const answerUser = readlineSync.question('Your answer: ');
  return answerUser;
};

export const checkAnswer = (valueName,valueAnswer,valueRandom,counter) => {
  if (valueAnswer == 'no' && valueAnswer == 'yes' )
        {console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${valueName}! `);};

  if (valueRandom % 2 === 0 && valueAnswer === 'yes' || valueRandom % 2 != 0 && valueAnswer === 'no')
          {console.log('Correct!'); evenProgram(valueName,counter)}
            else
              {console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${valueName}!`);}
};

export const evenProgram = (valueName,counter) => {
    if (counter === 3)  return console.log(`Congratulations, ${valueName}!`);

    counter++;

    const valueRandom = askQuestion();

    const valueAnswer = answerUser();

    checkAnswer(valueName,valueAnswer,valueRandom,counter);
};
