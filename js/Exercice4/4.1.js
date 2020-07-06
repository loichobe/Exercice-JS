const readlineSyns = require("readline-sync");

let l = readlineSyns.question("What is the length of a rectangle ?")
let w = readlineSyns.question("What is the width of a rectangle ?")

function calcSurface (l, w) {
    return l * w;
}

console.log("The surface is " + calcSurface (l , w));