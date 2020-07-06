const readlineSync = require("readline-sync");

    let serie = {
        name : "",
        production_year : "",
        cast_members : "",
    };

    function askTvSerie() {
    serie.name = readlineSync.question("Quel est ton film préféré ?");
    serie.production_year = readlineSync.question("Quel est son année de production ?");
    serie.cast_members = readlineSync.question("Acteur?");
    }

    askTvSerie();
    serie = JSON.stringify(serie);

console.log(serie);