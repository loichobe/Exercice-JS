const readlineSync = require("readline-sync");
// let number1 = Math.trunc(20.77);
// let number2 = 10;
let number1 = readlineSync.question("Chiffre décimal");
let number2 = readlineSync.question("Chiffre normal");

console.log(Math.trunc(number1) * number2);