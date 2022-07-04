// const chalk = require('chalk');
import chalk from 'chalk';

//import the greet module that is in the current folder
// const greet = require('./greet');
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

