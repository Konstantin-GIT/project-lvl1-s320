#!/usr/bin/env node
import { enterUserName, displayMessageScreen } from '..';

const contentGreeting = 'Welcome to the Brain Games!';

displayMessageScreen(contentGreeting);

enterUserName();
