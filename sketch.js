var backColor;

var topLeftCorner = 0;
var topRightCorner = 0;
var score = 0;

var scoreFont;

function preload() {
  scoreFont = loadFont("mansalva.ttf");
}

function setup() {
  createCanvas(800, 600);
  backColor = color("grey");
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
    score = "500,000";
    backColor = "brown";
  }

  if (topLeftCorner == 1 && topRightCorner == 1) {
    score = "1,000,000";
    backColor = "green";
  }

  background(backColor);
  textAlign(CENTER);
  textFont(scoreFont);
  textSize(50);
  text(score, width / 2, height / 2);
  circle(mouseX, mouseY, 100);

}