let x;
let y;
let size;
let position;
let velocity;
let score;
let gameOver;

function setup() {
  createCanvas(500, 500).position((windowWidth - width) / 2, (windowHeight - height) / 2);
  size = 50;
  x = width / 2 - size / 2;
  y = height - size;
  position = createVector(random(width), 0);
  velocity = createVector(0, 5);
  score = 0;
  gameOver = false;
}

function draw() {
  if (gameOver) {
    displayGameOver();
    return;
  }

  background(255, 0, 102);
  handleMovement();
  updatePosition();
  handleCollision();
  displayScore();
  drawPlayer();
}

function displayGameOver() {
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Game Over!", width / 2, height / 2);
}

function handleMovement() {
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW) && x < width - size) {
    x += 5;
  }
}

function updatePosition() {
  fill(255, 255, 0);
  ellipse(position.x, position.y, 20, 20);
  position.add(velocity);
}

function handleCollision() {
  if (position.y >= height) {
    if (position.x > x && position.x < x + size) {
      score++;
    } else {
      gameOver = true;
    }
    position.set(random(width), 0);
  }
}

function displayScore() {
  textFont('Handjet', 70);
  textAlign(CENTER, CENTER);
  text(score, width / 2, (height / 2) - 50);
}

function drawPlayer() {
  fill(255, 255, 0);
  square(x, y, size);
}
