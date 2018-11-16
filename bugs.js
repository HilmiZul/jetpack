class Bugs {
  constructor() {
    this.reset();
  }

  reset() {
    this.r = random(30, 90);
    this.pos = createVector(random(width + this.r, width * 2), random(0, height - base.height));
    this.total = 1;
    this.vel = random(3, 9);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(-radians(frameCount * 2 % 5));
    for (let i = 0; i < this.total; i++) {
      image(bugImg, 0, 0, this.r, this.r);
    }
    pop();
  }

  update() {
    this.pos.x -= this.vel;
  }

  edges() {
    if (this.pos.x < 0 - bugImg.width) {
      return true;
    }
  }

  jiggling() {
    this.pos.x -= random(-2, 2);
  }
}