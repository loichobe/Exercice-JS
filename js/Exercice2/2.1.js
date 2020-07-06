const readlineSync = require("readline-sync");
let age = readlineSync.question("Quel âge as-tu ?");
if ((age >= 18)) {
    console.log("You're an adult, welcome");
} else {
    console.log("You're a kid, go azay");
}