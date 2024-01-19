import readlineSync from 'readline-sync';

const password = '123abc';
let guess = '';

do {
	guess = readlineSync.question('What is the password? ');
	console.log(guess);
} while (guess !== password);

console.log('Password correct!');