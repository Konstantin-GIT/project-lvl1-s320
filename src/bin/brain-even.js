#!/usr/bin/env node
import { displayMessageScreen, enterUserName, DriverProgramBrainEven } from '../';

const contentGreeting = 'Welcome to the Brain Games!';
const taskGame = 'Answer "yes" if number even otherwise answer "no"';

displayMessageScreen(contentGreeting);

displayMessageScreen(taskGame);

const playerName = enterUserName();

DriverProgramBrainEven(playerName, 0);
