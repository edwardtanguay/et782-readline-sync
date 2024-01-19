import readlineSync from 'readline-sync';

const password = '123abc';

const guess = readlineSync.question('What is the password? ');
console.log(guess);