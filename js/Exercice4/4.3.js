const readlineSync = require("readline-sync");
let n = readlineSync.question("Write a number");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(rand10(10));

function multiRand(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
    arr.push(rand10());
    }   
    return arr;
}
console.log(multiRand(n));