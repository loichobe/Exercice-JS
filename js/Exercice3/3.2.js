//  let average = (array) => array.reduce((a, b) => a + b) / array.length;
// console.log(average([1,2,3,4,5]));

let arr = [1,2,3,4,5];
let total = 0;
for(let i = 0; i < arr.length; i++) {
    total += arr[i];
}
let avg = total / arr.length;
console.log(avg);