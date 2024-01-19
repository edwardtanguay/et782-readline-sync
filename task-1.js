import readlineSync from "readline-sync";

const password = "123abc";
let userPassword = "";

 do {    
    userPassword = readlineSync.question("Bitte gib DEIN Passwort ein: "); 
    
    if (password !== userPassword) {
        console.log("Dein Passwort ist falsch!");
    }
 }

while (password !== userPassword);

console.clear();