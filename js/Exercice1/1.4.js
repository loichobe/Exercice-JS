const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your name please ?');
let firstName = readlineSync.question("Can you give me your first name ?");
let city = readlineSync.question ("Can you tell me your city ?");
console.log("Hello " + firstName + ' ' + name + " you're from " + city);