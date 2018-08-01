#!/usr/bin/env node
import {enterName,askQuestion,answerUser,checkAnswer,evenProgram} from '../';

console.log('Welcome to the Brain Games!');

const valueName = enterName();

evenProgram(valueName,0);
