const readlineSync = require("readline-sync");


// Utilisation de l'opérateur new pour créer un nouvel objet à partir de 0
let n = new Number(readlineSync.question("Enter a number"));
// null signifie que l'objet n'a aucune valeur
let x = null;
// Valeur pour définir 
let i = 1;
// Somme totale
let sum = 0;

// Boucle jusqu'à arriver au chiffre demandé au début
while (i <= n) {
    // Cette ligne signifie le nombre de chiffre que je peux rentrer
    x = new Number(readlineSync.question("Enter a new number"))
    // Sommes des chiffres rentrés
    sum += x;
    // Valeur qui augmente de 1 jusqu'au chiffre demandé
    i++;
}
console.log(sum);