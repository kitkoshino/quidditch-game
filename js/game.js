class Game {
  constructor($canvas, selectedCharacter) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.character = new Character(this, selectedCharacter);
    this.background = new Background(this);
    this.goldenSnitch = new GoldenSnitch(this);
    this.bludgers = [];
    this.isRunning = true;
    this.setKeyMovements();
  }

  start() {
    console.log('jogo startado');
    this.draw();
    this.createBludger();
    this.gameLoop();
  }

  clear() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = false;
    } else {
      this.isRunning = true;
      this.gameLoop();
    }
  }

  draw() {
    this.background.draw();
    this.goldenSnitch.draw();
    this.character.draw();
    for (let bludger of this.bludgers) {
      bludger.draw();
    }
  }

  createBludger() {
    const newbludger = new Bludger(this);
    this.bludgers.push(newbludger);
  }

  setKeyMovements() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 39:
          if (
            this.character.col <
            this.$canvas.width - this.character.imageWidth
          ) {
            event.preventDefault();
            this.character.moveRight();
          }
          break;
        case 37:
          if (this.character.col > 0) {
            event.preventDefault();
            this.character.moveLeft();
          }
          break;
        case 38:
          if (this.character.row > 0) {
            event.preventDefault();
            this.character.moveUp();
          }
          break;
        case 40:
          if (
            this.character.row <
            this.$canvas.height - this.character.imageHeight
          ) {
            event.preventDefault();
            this.character.moveDown();
          }
          break;
      }
    });
  }

  checkAllColision() {
    if (this.goldenSnitch.checkColision()) {
      this.goldenSnitch.randomPosition();
      this.goldenSnitch.randomFuturePosition();
      this.createBludger();
    }

   for (let bludger of this.bludgers) {
     if (bludger.checkColision()){
       console.log('dead');
     }
   }
  }

  gameLoop() {
    this.checkAllColision();
    this.goldenSnitch.move();
    this.clear();
    this.draw();

    for (let bludger of this.bludgers) {
      bludger.move();
    }

    if (this.isRunning) {
      setTimeout(() => {
        this.gameLoop();
      }, 1000 / 60);
    }
  }
}
