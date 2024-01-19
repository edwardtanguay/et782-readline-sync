import readlineSync from 'readline-sync';

const password = '123abc';
let guess = '';

do {
	guess = readlineSync.question('What is the password? ', { hideEchoBack: true });
} while (guess !== password);

console.clear();
console.log('Password correct!');