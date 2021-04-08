let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake= [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//direction definition
let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//Create background function
function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); //x, y, height, width
}

function createSnake() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//draw food
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//keyboard navigation game
document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = 'left';
    if(event.keyCode == 38 && direction != "down") direction = 'up';
    if(event.keyCode == 39 && direction != "left") direction = 'right';
    if (event.keyCode == 40 && direction != "up") direction = 'down'; 
}

function startGame () {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    createBG();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);