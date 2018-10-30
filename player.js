class Droid {
  constructor() {
    this.reset();
  }

  reset() {
    this.pos = createVector(width / 2 - droidImg.width * 2, height / 2 - 200);
    this.jumpStep = 5;
    this.jump = false;
    this.vel = 0;
    this.gravity = 0.3;
    this.angle = 0;
  }

  show() {
    push();
    // var c;
    // if (this.jump) {
    //   c = sin(this.angle) + sin(this.angle);
    // } else {
    //   c = cos(this.angle - 29.9);
    // }
    translate(this.pos.x, this.pos.y);
    // rotate(c);
    image(droidImg, 0, 0);
    pop();
  }

  update() {
    this.vel += this.gravity;
    this.pos.y += this.vel;
  }

  jumping() {
    if (this.jump) {
      this.vel = -this.jumpStep;
    }
  }

  jatohKeTanah() {
    if (this.pos.y + droidImg.height > height - base.height / 2) {
      this.pos.y = height + droidImg.height;
      play = false;
    }
  }

  // food mewakili capcake, donut dan kawan-kawan
  eat(food) {
    if (this.pos.x < food.pos.x + food.r / 2 && this.pos.x + droidImg.width / 2 > food.pos.x - food.r / 2) {
      if (this.pos.y < food.pos.y + food.r / 2 && this.pos.y + droidImg.height > food.pos.y - food.r / 2) {
        return true;
      }
    }
  }

  hit(bug) {
    if (this.pos.x < bug.pos.x + bug.r / 2 && this.pos.x + droidImg.width / 2 > bug.pos.x - bug.r / 2) {
      if (this.pos.y < bug.pos.y + bug.r / 2 && this.pos.y + droidImg.height / 2 > bug.pos.y - bug.r / 2) {
        return true;
      }
    }
  }
}