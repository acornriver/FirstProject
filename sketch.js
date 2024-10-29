//code by sbPRF
//랜덤워커 배치 버전

// let ball;
let balls = [];

function setup() {
  createCanvas(400, 400);
  // ball = new Walker();

  for (i = 0; i < 15; i++) {
    let b = new Walker();
    balls.push(b);
  }
}

function draw() {
  background(100, 180, 160, 130);

  for (let b of balls) {
    b.focus();
    b.move();
    b.display();
  }
}
