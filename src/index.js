

import readlineSync from 'readline-sync';

const enterName =()=> {
    const userAnswer = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userAnswer} !`);
    };

export default enterName;
