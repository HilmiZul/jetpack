class Latar {
  constructor() {
    this.rSun = 150;
    this.posSun = createVector(width / 2 + this.rSun, 0 + this.rSun);
    this.velSun = random(0.3, 0.4);
    this.sunColor = color(255, 255, 50, 170);
    this.day = 'day';

    this.posAwan = createVector(0, this.posSun.y);
    this.velAwan = 0.1;

    this.velBg = 1.5;
    this.bg = createVector(0, height - bgImg.height);

    this.velBg2 = 0.5;
    this.bg2 = createVector(0 + bgImg.width / 2, height - bg2Img.height);
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
        theme = color(216, 236, 255);
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
      image(bgImg, this.bg.x, this.bg.y);
    } else {
      image(bgNightImg, this.bg.x, this.bg.y);
    }
  }

  updateBg() {
    this.bg.x -= this.velBg;
  }

  edgeBg() {
    if (this.bg.x < 0 - bgImg.width) {
      this.bg.x = width;
    }
  }

  showBg2() {
    if (this.day == 'day') {
      image(bg2Img, this.bg2.x, this.bg2.y);  
    } else {
      image(bg2NightImg, this.bg2.x, this.bg2.y);
    }
    
  }

  updateBg2() {
    this.bg2.x -= this.velBg2;
  }

  edgeBg2() {
    if (this.bg2.x < 0 - bg2Img.width) {
      this.bg2.x = width;
    }
  }
}