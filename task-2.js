import readlineSync from "readline-sync";

// let input = "";



// do {
//     input = readlineSync.question("Magst Du V8-Motoren? (yes/no): ");
        
// } while (input.toLowerCase() !== "yes" && input.toLowerCase() !== "no");

// console.log("Danke für die Antwort.")





let input = "";

do {
    input = readlineSync.question("Magst Du V8-Motoren? (yes/no): ");

    if (input.toLowerCase() === "yes") {
        console.log("Das freut mich zu hören! V8-Motoren sind großartig.");
    } else if (input.toLowerCase() === "no") {
        console.log("Schade, aber jeder hat seinen eigenen Geschmack.");
    } else {
        console.log("Ungültige Eingabe. Bitte antworte mit 'yes' oder 'no'.");
    }

} while (input.toLowerCase() !== "yes" && input.toLowerCase() !== "no");

console.log("Danke für die Antwort.");
