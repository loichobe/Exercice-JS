class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
}

collides(otherRectangle) {
    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
        this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
        this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
        this.topLeftYPos   + this.length > otherRectangle.topLeftYPos) {
            return true;
        } else {
            return false;
        }
    }
}

let rectangle1 = new Rectangle(101, 30, 40, 19);
let rectangle2 = new Rectangle(81, 39, 12, 210);

console.log(rectangle1.collides(rectangle2));

let rectangle3 = new Rectangle(101, 30, 91, 18);
let rectangle4 = new Rectangle(107, 41, 71,  12);

console.log(rectangle3.collides(rectangle4));