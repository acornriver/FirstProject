class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.w = 10;
    this.c = color(255);
    this.fcs = 0;
    this.fear = 0;
  }

  move() {
    // 위치 업데이트
    this.vel.add(random(-3, 3), random(-3, 3));
    this.pos.add(this.vel);

    // 벽에 충돌하면 중앙으로 이동
    if (this.pos.x > width || this.pos.x < 0) {
      this.pos.x = width / 2;
      this.fear = this.fear + 50;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.pos.y = height / 2;
      this.fear = this.fear + 50;
    }
  }

  focus() {
    // 마우스의 중앙 거리 계산
    let mouseDist = dist(width / 2, height / 2, mouseX, mouseY);

    // 거리에 따라 속도 크기 조정
    this.fcs = map(mouseDist, 0, 200, 0.5, 6);

    // 속도 벡터의 크기를 `fcs`에 맞게 설정
    this.vel.setMag(this.fcs);

    //fear 컨트롤
    this.fear = this.fear - 1;
    this.fear = constrain(this.fear, 0, 200);

    print(this.fear);
  }

  ballShape(aWidth, aColor) {
    this.w = aWidth;
    this.c = aColor;
    
  }

  display() {
    // 공 표시
    fill(this.fear, 50, 50,);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
