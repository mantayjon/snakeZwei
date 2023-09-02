var canvas = document.getElementById("snakeboard");

var ctx = canvas.getContext("2d");

class Snake {

    constructor(startX, startY, rectSize) {
        this.xPos = startX;
        this.yPos = startY;
        this.rectSize = rectSize;
        this.direction = "right";
        this.tail = undefined;
    }

    update(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    move() {
        switch (this.direction) {
            case "up":
                this.yPos -= this.rectSize;
                this.checkVertical();
                console.log(this.xPos,this.yPos);
            case "down":
                this.yPos += this.rectSize;
                this.checkVertical();
                console.log(this.xPos,this.yPos);
            case "left":
                this.xPos -= this.rectSize;
                this.checkHorizontal();
                console.log(this.xPos,this.yPos);
            case "right":
                this.xPos += this.rectSize;
                this.checkHorizontal();
                console.log(this.xPos,this.yPos);
        }
    }
    checkHorizontal() {
        if (this.xPos < 0) this.xPos = canvas.width - this.rectSize;
        if (this.xPos > canvas.width - this.rectSize) this.xPos = 0;

    }

    checkVertical() {
        if (this.yPos < 0) this.yPos = canvas.height - this.rectSize;
        if (this.yPos > canvas.height - this.rectSize) this.yPos = 0;

    }


    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.xPos, this.yPos, this.rectSize, this.rectSize);
    }

}

var rectSize = 40;

var x = canvas.width / 2 - rectSize / 2;
var y = canvas.height / 2 - rectSize / 2;

var snake = new Snake(x, y, rectSize);


function checkKey(e) {

    e = e || window.event;

    if (snake != null) {


        if (e.keyCode == '38') {
            // up arrow
            snake.direction = "up";
        }
        else if (e.keyCode == '40') {
            // down arrow
            snake.direction = "down";
        }
        else if (e.keyCode == '37') {
            // left arrow
            snake.direction = "left";
        }
        else if (e.keyCode == '39') {
            // right arrow
            snake.direction = "right";
        }
    }

}

window.requestAnimationFrame(render)




function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    snake.draw();
    document.onkeydown = checkKey;
    window.requestAnimationFrame(render);
    console.log(snake.direction)
}

