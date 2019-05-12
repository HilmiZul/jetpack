class Capcake {
  constructor() {
    this.reset();
  }

  reset() {
    this.r = random(50, 90);
    this.pos = createVector(random(width + this.r, width * 2), random(0, height - random(30, 70) - base.height));
    this.vel = random(4, 5);
    this.total = 1;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(-radians(frameCount % 360));
    image(capcakeImg, 0, 0, this.r, this.r);
    pop();
  }

  update() {
    this.pos.x -= this.vel;
  }

  edges() {
    if (this.pos.x < 0 - this.r) {
      this.reset();
      gas--;
    }
  }
}