const readlineSync = require("readline-sync");
let x = readlineSync.question("What is your favorite number ?");


while (x!=42) {
    console.log("Are you sure ?");
    x = readlineSync.question("What is your favorite number ?");
}
    console.log("Correct !");
