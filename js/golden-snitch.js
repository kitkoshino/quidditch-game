class GoldenSnitch {
  constructor(game) {
    this.game = game;
    this.image = new Image();
    this.image.src = '/images/snitch.png';
    this.image1 = new Image();
    this.image1.src = '/images/snitch2.png';
    this.snitchWidth = 90;
    this.snitchHeight = 40;
    this.speed = 2;
    this.contador = 0;
    this.randomPosition();
    this.randomFuturePosition(); //ao executar, cria o targetCol e targetRow
    this.direction = 'up';
  }

  draw() {
    if (this.contador % 10 === 0) {
      if(this.direction === 'up') {
        this.direction = 'down'
      } else {
        this.direction = 'up';
      }
     
    }

    if(this.direction === 'up') {
      this.game.context.drawImage(
        this.image,
        this.col,
        this.row,
        this.snitchWidth,
        this.snitchHeight
      );
    } else {
      this.game.context.drawImage(
        this.image1,
        this.col,
        this.row,
        this.snitchWidth,
        this.snitchHeight
      );
    }

    //console.log('draw',this.col, this.row);
  }

  randomFuturePosition() {
    this.targetCol =
      Math.floor(
        Math.random() *
          ((this.game.$canvas.width - this.snitchWidth) / this.speed)
      ) * this.speed;
    this.targetRow =
      Math.floor(
        Math.random() *
          ((this.game.$canvas.height - this.snitchHeight) / this.speed)
      ) * this.speed;
  }

  randomPosition() {
    this.col =
      Math.floor(
        Math.random() *
          ((this.game.$canvas.width - this.snitchWidth) / this.speed)
      ) * this.speed;
    this.row =
      Math.floor(
        Math.random() *
          ((this.game.$canvas.height - this.snitchHeight) / this.speed)
      ) * this.speed;
  }

  checkColision() {
    return (
      this.game.character.col >= this.col &&
      this.game.character.col <= this.col + this.snitchWidth &&
      this.game.character.row >= this.row &&
      this.game.character.row <= this.row + this.snitchHeight
    );
  }

  moveRight() {
    this.col += this.speed;
  }

  moveLeft() {
    this.col -= this.speed;
  }

  moveUp() {
    this.row -= this.speed;
  }

  moveDown() {
    this.row += this.speed;
  }

  move() {
    this.contador++;
    if (this.row === this.targetRow && this.col === this.targetCol) {
      this.randomFuturePosition();
    }
    if (this.row < this.targetRow) {
      this.moveDown();
    } else if (this.row > this.targetRow) {
      this.moveUp();
    }

    if (this.col < this.targetCol) {
      this.moveRight();
    } else if (this.col > this.targetCol) {
      this.moveLeft();
    }
    // console.log('chamou move');
  }
}
