const readlineSync = require("readline-sync");
let shoesize = readlineSync.question('Can you give me your shoe size ?');
let birth = readlineSync.question('Can you give me your birth year ?');
let calcul1 = shoesize * 2 + 5
let calcul2 = calcul1 * 50 - birth + 1766
console.log(calcul2)