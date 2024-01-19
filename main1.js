import readlineSync from 'readline-sync';

const password = '123abc';
let guess = '';

do {
	console.clear();
	guess = readlineSync.question('What is the password? ', { hideEchoBack: true });
} while (guess !== password);

console.log('Password correct!');