const readlineSync = require("readline-sync");
let min = readlineSync.question("Donnez un nombre minimum");
let max = readlineSync.question("Donnez un nombre maximum");
let current = readlineSync.question("Donnez un nombre actuel")

if (min > max) {
    console.log("Sérieusement ?");
} else if (current < min) {
    console.log("Le chiffre demandé est plus petit que " + min);
} else if (current > max) {
    console.log("Le chiffre demandé est plus grand que " + max);
} else {
    console.log(current + " est entre " + min + " et " + max);
}