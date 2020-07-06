const readlineSync = require("readline-sync");

function average(arr) {
    let total = 0;
    for(let i in arr) {
    total += arr[i];
}
    return total / arr.length;
}

function min(arr) {
    let min = Math.min.apply(Math, arr);
    return Math.min(...arr);
}


function max(arr) {
    let max = Math.max.apply(Math, arr);
    return Math.max(...arr);
}

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


let n = readlineSync.question("Write a number");
let arr = multiRand(n);
console.log(arr);
console.log(Math.round(average(arr)));
console.log(average(arr));
console.log(min(arr));
console.log(max(arr));