function factorial(a) {
    let result = a;
    if (a === 0 || a === 1)
        return 1;
    for (let i = a - 1; i >= 1; i--) {
        a *= i;
    }
    return a;
}

console.log(factorial(20));