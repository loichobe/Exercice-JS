function calcDistance(x1, x2, y1, y2) {
    let droite1 = x1 - x2;
    let droite2 = y1 - y2;

    console.log(Math.sqrt(droite1*droite1 + droite2*droite2));
}

console.log(calcDistance(10, 3, 22, 4));

