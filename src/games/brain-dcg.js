import beginGame from '..';

const task = 'Find the greatest common divisor of given numbers.';
const answer = 'Wrong answer.';
const description = { task, answer };

const gcd = (a, b) => {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};

const askQuestion = () => {
  const randomNum1 = Math.round(Math.random() * 10);
  const randomNum2 = Math.round(Math.random() * 10);
  const rightAnswer = gcd(randomNum1, randomNum2);

  return { question: `${randomNum1} ${randomNum2}`, rightAnswer };
};


const start = () => beginGame(description, askQuestion);

export default start;
