const goldenSnitchSound = new Audio('/sounds/getSound.flac');
const moveSound = new Audio('/sounds/move.wav');
const lostSound = new Audio ('/sounds/lose.wav');

class Game {
  constructor($canvas, selectedCharacter) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.selectedCharacter = selectedCharacter;
    this.character = new Character(this, selectedCharacter);
    this.background = new Background(this);
    this.goldenSnitch = new GoldenSnitch(this);
    this.bludgers = [];
    this.isRunning = true;
    this.isSoundOn = true;
    this.score = 0;
    this.bestScore = 0;
    this.setKeyMovements();
  }

  start() {
    console.log('jogo startado');
    this.isRunning = true;
    this.createBludger();
    this.gameLoop();
  }

  reset() {
    document.getElementById('game-over').classList.add('hide-div');
    this.isRunning = false;
    setTimeout(() => {
      this.character = new Character(this, this.selectedCharacter);
      this.background = new Background(this);
      this.goldenSnitch = new GoldenSnitch(this);
      this.bludgers = [];
      this.score = 0;
      this.start();
    }, 1000 / 30)
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
    this.drawScore();
    for (let bludger of this.bludgers) {
      bludger.draw();
    }
  }

  drawScore() {
    document.getElementById('run-score').innerText = `${this.score}`;
  }

  createBludger() {
    const newbludger = new Bludger(this);
    this.bludgers.push(newbludger);
  }

  gameOver() {
    this.isRunning = false;
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
    }
    document.getElementById('score').innerText = `Score: ${this.score}`;
    document.getElementById('best-score').innerText = `Best Score: ${this.bestScore}`;
    document.getElementById('game-over').classList.remove('hide-div');

    console.log('game over');
  }

  setKeyMovements() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 39:
          event.preventDefault();
          this.character.moveRight();
          break;
        case 37:
          event.preventDefault();
          this.character.moveLeft();
          break;
        case 38:
          event.preventDefault();
          this.character.moveUp();
          break;
        case 40:
          event.preventDefault();
          this.character.moveDown();
          break;
      }
    });
  }

  checkAllColision() {
    if (this.goldenSnitch.checkColision()) {
      if(this.isSoundOn) {
        goldenSnitchSound.play();
      }
      this.score++;
      this.goldenSnitch.randomPosition();
      this.goldenSnitch.randomFuturePosition();
      this.createBludger();
    }

    for (let bludger of this.bludgers) {
      if (bludger.checkColision()) {
        console.log('dead');
        this.gameOver();
      }
    }
  }

  gameLoop() {
    this.goldenSnitch.move();
    this.checkAllColision();
    for (let bludger of this.bludgers) {
      bludger.move();
    }

    this.clear();
    this.draw();

    if (this.isRunning) {
      setTimeout(() => {
        this.gameLoop();
      }, 1000 / 60);
    }
  }
}
