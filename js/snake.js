export default class Snake {

    constructor(startX, startY) {
        this.xSnakePos = startX;
        this.ySnakePos = startY;
        this.rectSize = canvas.width / 19;
        this.tail = undefined;
    }

    update(xPos, yPos) {
        this.xSnakePos = xPos;
        this.ySnakePos = yPos;
    }


    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.xSnakePos, this.ySnakePos, rectSize, rectSize);
    }

    //function updatePositions
    //if(tail!=) tail.updatePositions

}
