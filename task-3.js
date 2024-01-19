import readlineSync from "readline-sync";

let pin = "";
const readline = require('readline-sync');

function createNumericPin() {
    let pin;

    do {
        pin = readline.question('Erstelle deinen numerischen Pin: ');

        // Überprüfe, ob der eingegebene Code nur aus Ziffern besteht
        if (!/^\d+$/.test(pin)) {
            console.log('Der Pin sollte nur Ziffern enthalten. Bitte versuche es erneut.');
        }
    } while (!/^\d+$/.test(pin));

    console.log(`Du hast den Pin "${pin}" erstellt. Gut gemacht!`);
}

createNumericPin();
