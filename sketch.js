var backColor;

var topLeftCorner = 0;
var topRightCorner = 0;
var score = 0;

var avatarX, avatarY;
var bulletX, bulletY;

// var scoreFont;

// function preload() {
//   scoreFont = loadFont("mansalva.ttf");
// }

function setup() {
  createCanvas(800, 600);
  backColor = color("grey");
  noStroke();
  avatarX = width / 2;
  avatarY = height / 2;
}

function draw() {
  background(100);


  if (mouseX < 0 && mouseY < 0) {
    topLeftCorner = 1;
    print("tlc");
  }

  if (mouseX > width && mouseY < 0) {
    topRightCorner = 1;
    print("trc");
  }

  if (topLeftCorner == 1 || topRightCorner == 1) {
    score = score + 500000;
    backColor = "brown";
  }

  if (topLeftCorner == 1 && topRightCorner == 1) {
    score = score + 1000000;
    backColor = "green";
  }

  background(backColor);
  textAlign(CENTER);
  // textFont(scoreFont);
  textSize(50);
  fill("black");
  text(score, width / 2, height / 2);

  if (keyIsPressed) {
    if (key == "w") {
      avatarY--;
      bulletY = avatarY;
      bulletX = avatarX;
    }
    if (key == "s") {
      avatarY++;
      bulletY = avatarY;
      bulletX = avatarX;
    }
    if (key == "a") {
      avatarX--;
      bulletX = avatarX;
      bulletY = avatarY;
    }
    if (key == "d") {
      avatarX++;
      bulletX = avatarX;
      bulletY = avatarY;
    }
  }


  if (mouseIsPressed) {
    // background("orange");
    print(bulletX);
    bulletX++;
    bulletY++;
    circle(bulletX, bulletY, 5);

  }

  var v1 = createVector(avatarX, avatarY);
  var v2 = createVector(mouseX, mouseY);
  var angleBetween = v1.angleBetween(v2);

  fill("white");
  circle(avatarX, avatarY, 100);

  var purpCX = width / 2;
  var purpCY = height * .75;
  var purpCR = 50;

  fill("purple");
  circle(purpCX, purpCY, purpCR);

  if (dist(bulletX, bulletY, purpCX, purpCY) < 25 + 2.5) {
    if (purpleOnce == 0) {
      score = score + 2000000;
      purpleOnce = 1;
    }
  }

}

var purpleOnce = 0;