class Game {
  constructor($canvas, selectedCharacter) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.character = new Character(this, selectedCharacter);
    this.background = new Background(this);
    this.goldenSnitch = new GoldenSnitch(this);
    this.setKeyMovements();
  }

  start() {
    console.log('jogo startado');
    this.draw();
  }

  clear() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  draw() {
    this.background.draw();
    this.goldenSnitch.draw();
    this.character.draw();
  }

  setKeyMovements() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 39:
          if (this.character.col < this.$canvas.width - this.character.imageWidth) {
            event.preventDefault();
            this.character.moveRight();
            this.clear();
            this.draw();
          }
          break;
        case 37:
          if (this.character.col > 0) {
            event.preventDefault();
            this.character.moveLeft();
            this.clear();
            this.draw();
          }
          break;
        case 38:
          if (this.character.row > 0) {
            event.preventDefault();
            this.character.moveUp();
            this.clear();
            this.draw();
          }
          break;
        case 40:
          if (this.character.row < this.$canvas.height - this.character.imageHeight) {
            event.preventDefault();
            this.character.moveDown();
            this.clear();
            this.draw();
          }
          break;
      }
    });
  }
}
