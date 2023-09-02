import Snake from './snake.js';

const canvas = document.getElementById("snakeboard");

console.log(canvas);
const ctx = canvas.getContext("2d");

var snake = new Snake(canvas.width / 2 - rectSize / 2, canvas.height / 2 - rectSize / 2)


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
            yPos = yPos - snake.rectSize;
            checkVertical();
            snake.update(xPos, yPos);
        }
        else if (e.keyCode == '40') {
            // down arrow
            yPos = yPos + snake.rectSize;
            checkVertical();
            snake.update(xPos, yPos);
        }
        else if (e.keyCode == '37') {
            // left arrow
            xPos = xPos - snake.rectSize;
            checkHorizontal();
            snake.update(xPos, yPos);
        }
        else if (e.keyCode == '39') {
            // right arrow
            xPos = xPos + snake.rectSize;
            checkHorizontal();
            snake.update(xPos, yPos);
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

