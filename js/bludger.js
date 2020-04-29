class Bludger {
  constructor(game) {
    this.game = game;
    this.randomSpeed();
    this.radius = 40;
    this.color = 'brown';
    this.image = new Image();
    this.image.src = '/images/bludger.png';
    this.randomPosition(); //cria posicao col e row a partir do metodo randomPosition
  }

  draw() {
    this.game.context.drawImage(
      this.image,
      this.col,
      this.row,
      this.radius,
      this.radius
    );
    /*  this.game.context.beginPath();
    this.game.context.arc(this.col, this.row, this.radius, 0, 2 * Math.PI);
    this.game.context.closePath();

    this.game.context.fillStyle = this.color;
    this.game.context.fill(); */
  }

  move() {
    if (this.row >= this.game.$canvas.height - this.radius || this.row <= 10) {
      this.speedRow = this.speedRow * -1;
    }

    if (this.col >= this.game.$canvas.width - this.radius || this.col <= 10) {
      this.speedCol = this.speedCol * -1;
    }

    console.log('position bludger:', this.col, this.row);
    this.row += this.speedRow;
    this.col += this.speedCol;
  }

  randomPosition() {
    this.col = Math.floor(
      Math.random() * (this.game.$canvas.width - this.radius)
    );
    this.row = Math.floor(
      Math.random() * (this.game.$canvas.height - this.radius)
    );
  }

  randomSpeed() {
    const initialSpeed = Math.floor(Math.random() * 4) + 2;
    this.speedCol = initialSpeed;
    this.speedRow = initialSpeed;
  }

  checkColision() {
    const middleCharacterWidth =
      this.game.character.col + this.game.character.imageWidth / 2;
    const middleCharacterHeight =
      this.game.character.row + this.game.character.imageHeight / 2;

    const endBludgerWidth = this.col + this.radius;
    const endBludgerHeight = this.row + this.radius;

    return (
      middleCharacterWidth >= this.col &&
      middleCharacterWidth <= endBludgerWidth &&
      middleCharacterHeight >= this.row &&
      middleCharacterHeight <= endBludgerHeight
    );
  }
}
