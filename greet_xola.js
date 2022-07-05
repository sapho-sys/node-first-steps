// const chalk = require('chalk');
import chalk from 'chalk';
import figlet from "figlet";

//import the greet module that is in the current folder
import greet from './greet.js'
figlet(greet("Sapho"), function(err, data) {
    if (err) {
        console.log(chalk.red('Something went wrong...'));
        console.dir(chalk.blue(err));
        return;
    }
    console.log(chalk.green(data))
});

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

