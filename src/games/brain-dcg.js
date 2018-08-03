// import {  enterUserName, DriverProgramBrainGcd } from '../';

// const contentGreeting = 'Welcome to the Brain Games!';
// const taskGame = 'Find the greatest common divisor of given numbers.';

// console.log(contentGreeting);

// console.log(taskGame);

// const playerName = enterUserName();

// DriverProgramBrainGcd(playerName, 0);


// const DriverProgramBrainGcd = (playerName, counter) => {
//  if (counter === 3) return console.log(`Congratulations, ${playerName}!`);

//  let newCounter = counter;
//  newCounter += 1;

//  const question = askQuestionBrainGcd();

//  const answer = readlineSync.question('Your answer: ');

//  if (answer == question) {
//    console.log('Correct!');
//    DriverProgramBrainCalc(playerName, newCounter);

//  } else
//    {return `Not correct, ${playerName}!`; }


// const askQuestionBrainGcd = () => {
//  const randomNumber1 = randomNumber();
//  const randomNumber2 = randomNumber();
//  const valueQuestion = gcd(randomNumber1, randomNumber2);
//  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
//  return valueQuestion;
// };


// const gcd = (a,b) => {
//  let i = a;
//    while (a % i !== 0 || b % i !== 0) {
//    i = i - 1;
//    }
//    return i;
// };
