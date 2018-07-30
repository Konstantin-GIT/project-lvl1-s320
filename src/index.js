

import readlineSync from 'readline-sync';

export const enterName = () => {

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

};
