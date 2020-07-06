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


function random() {
    return Math.floor(Math.random()*1000) + 1;
}

let rectangle = [];
    for (let i = 0; i < 1000; i++) {
        rectangle[i] = new Rectangle(random(), random(), random(), random());
    }



// Je ne sais pas finir l'exercice...