class Latar {
  constructor() {
    this.rSun = 150;
    this.posSun = createVector(width / 2 + this.rSun, 0 + this.rSun);
    this.velSun = random(0.1, 0.3);
    this.sunColor = color(255, 255, 50, 170);
    this.day = 'day';

    this.posAwan = createVector(0, this.posSun.y);
    this.velAwan = 0.1;

    this.velBg = 0.7;
    this.bg = createVector(0, height - bg0.height);
    this.velBgClone = 0.7;
    this.bgClone = createVector(0 + bg0.width, height - bg0.height);

    this.velBg1 = 0.3;
    this.bg1 = createVector(0, height - bg1.height);

    this.velBg2 = 0.3;
    this.bg2 = createVector(0 + bg1.width, height - bg2.height);
  }

  showSun() {
    fill(this.sunColor);
    noStroke();
    ellipse(this.posSun.x, this.posSun.y, this.rSun, this.rSun);
  }

  updateSun() {
    this.posSun.x -= this.velSun;
  }

  edgeSun() {
    if (this.posSun.x < 0 - this.rSun / 2) {
      this.posSun.x = width + this.rSun / 2;
      if (this.day == 'day') {
        this.day = 'night';
        theme = color(50, 50, 50);
        this.sunColor = color(255, 250);
      } else {
        this.day = 'day';
        theme = color(244, 250, 255);
        this.sunColor = color(255, 255, 50, 170);
      }
    }
  }

  showAwan() {
    image(awan, this.posAwan.x, this.posAwan.y);
  }

  updateAwan() {
    this.posAwan.x -= this.velAwan;
  }

  edgeAwan() {
    if (this.posAwan.x < 0 - awan.width) {
      this.posAwan.x = width;
    }
  }

  showBg() {
    if (this.day == 'day') {
      image(bg0, this.bg.x, this.bg.y);
    } else {
      image(bg0_night, this.bg.x, this.bg.y);
    }
  }

  updateBg() {
    this.bg.x -= this.velBg;
  }

  edgeBg() {
    if (this.bg.x < 0 - bg0.width) {
      this.bg.x = width;
    }
  }

  showBgClone() {
    if (this.day == 'day') {
      image(bg0_clone, this.bgClone.x, this.bgClone.y);
    } else {
      image(bg0_night_clone, this.bgClone.x, this.bgClone.y);
    }
  }

  updateBgClone() {
    this.bgClone.x -= this.velBgClone;
  }

  edgeBgClone() {
    if (this.bgClone.x < 0 - bg0_clone.width) {
      this.bgClone.x = this.bg.x + bg0.width;
    }
  }

  showBg1() {
    if (this.day == 'day') {
      image(bg1, this.bg1.x, this.bg1.y);
    } else {
      image(bg1_night, this.bg1.x, this.bg1.y);
    }

  }

  updateBg1() {
    this.bg1.x -= this.velBg1;
  }

  edgeBg1() {
    if (this.bg1.x < 0 - bg1.width) {
      this.bg1.x = this.bg2.x + bg2.width;
    }
  }

  showBg2() {
    if (this.day == 'day') {
      image(bg2, this.bg2.x, this.bg2.y);
    } else {
      image(bg2_night, this.bg2.x, this.bg2.y);
    }

  }

  updateBg2() {
    this.bg2.x -= this.velBg2;
  }

  edgeBg2() {
    if (this.bg2.x < 0 - bg2.width) {
      this.bg2.x = this.bg1.x + bg1.width;
    }
  }
}