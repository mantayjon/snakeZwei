const canvas = document.getElementById("snakeboard");

console.log(canvas);
const ctx = canvas.getContext("2d");


class Snake {

    constructor(startX, startY) {
        this.xSnakePos = startX;
        this.ySnakePos = startY;
        this.tail = undefined;
    }

    updatePos(xPos, yPos) {
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

var rectSize = canvas.width / 19;
var xPos = canvas.width / 2 - rectSize / 2;
var yPos = canvas.height / 2 - rectSize / 2;


var snake = new Snake(xPos, yPos)


function checkHorizontal() {
    if (xPos < 0) xPos = canvas.height - rectSize;
    if (xPos > canvas.height - rectSize) xPos = 0;

}
function checkVertical() {
    if (yPos < 0) yPos = canvas.height - rectSize;
    if (yPos > canvas.width - rectSize) yPos = 0;

}

function checkKey(e) {

    if (snake != null) {
        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
            yPos = yPos - rectSize;
            checkVertical();
            snake.updatePos(xPos, yPos);
        }
        else if (e.keyCode == '40') {
            // down arrow
            yPos = yPos + rectSize;
            checkVertical();
            snake.updatePos(xPos, yPos);
        }
        else if (e.keyCode == '37') {
            // left arrow
            xPos = xPos - rectSize;
            checkHorizontal();
            snake.updatePos(xPos, yPos);
        }
        else if (e.keyCode == '39') {
            // right arrow
            xPos = xPos + rectSize;
            checkHorizontal();
            snake.updatePos(xPos, yPos);
        }
    }

}

window.requestAnimationFrame(render)




function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw();
    document.onkeydown = checkKey;
    window.requestAnimationFrame(render);
}

