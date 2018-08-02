#!/usr/bin/env node
import { displayMessageScreen, enterUserName, DriverProgramBrainCalc } from '../';

const contentGreeting = 'Welcome to the Brain Games!';
const taskGame = 'What is the result of the expression?';

displayMessageScreen(contentGreeting);

displayMessageScreen(taskGame);

const playerName = enterUserName();

DriverProgramBrainCalc(playerName, 0);
