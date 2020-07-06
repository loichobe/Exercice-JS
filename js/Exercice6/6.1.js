class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

moveBy(xOffset, yOffset) {
    this.xPos +=  xOffset;
    this.yPos +=  yOffset;
}

get surface() {
    return Math.PI*(Math.pow(this.radius, 2));
}
}

let cercle = new Circle(5, 5, 20)
console.log(cercle);
console.log(cercle.surface);
cercle.moveBy(2,2);
console.log(JSON.stringify(cercle));