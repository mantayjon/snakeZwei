export default class Snake {

    constructor(startX, startY, rectSize) {
        this.xSnakePos = startX;
        this.ySnakePos = startY;
        this.rectSize = rectSize;
        this.tail = undefined;
    }

    update(xPos, yPos) {
        this.xSnakePos = xPos;
        this.ySnakePos = yPos;
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.xSnakePos, this.ySnakePos, this.rectSize, this.rectSize);
    }

}
