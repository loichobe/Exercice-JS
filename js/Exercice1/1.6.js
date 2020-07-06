const readlineSync = require("readline-sync");
let number1 = readlineSync.question('Can you give me a first number ?');
let number2 = readlineSync.question('Can you give me a second number ?');
console.log(number1 / number2);