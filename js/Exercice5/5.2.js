
const readlineSync = require("readline-sync");

function askTvSerie() {
    let serie = {
        name : "",
        production_year : "",
        cast_members : [],
    };
    serie.name = readlineSync.question("Quel est ton film préféré ?");
    serie.production_year = readlineSync.question("Quel est son année de production ?");
    let actors = readlineSync.question("Acteurs ?");
        while (actors !== "") {
            serie.cast_members.push({actors});
            actors = readlineSync.question("Autres acteurs ?");
        }
    return serie;
}

    function randomizeCast(serie) {
        serie.cast_members.sort(() => Math.random());
        return serie;
    }

let serie = askTvSerie();
console.log(JSON.stringify(serie));
serie = randomizeCast(serie);
console.log(JSON.stringify(serie));