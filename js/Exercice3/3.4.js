let array = []
for (let i = 1; i < 100; i++) {
    array.push(i);
}

let min = Math.min.apply(Math, array);
let max = Math.max.apply(Math, array);

console.log("Minimum " + min + " Maximum " + max);