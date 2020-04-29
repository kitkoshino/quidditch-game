class Bludger {
  constructor(game) {
    this.game = game;
    this.randomSpeed();
    this.radius = 40;
    this.color = 'brown';
    this.image = new Image();
    this.image.src = '/images/bludger.png';
    this.direction = Math.floor(Math.random() * 3);
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
    if (this.row >= this.game.$canvas.height - this.radius || this.row <= 0) {
      this.speedRow = this.speedRow * -1;
    }

    if (this.col >= this.game.$canvas.width - this.radius || this.col <= 0) {
      this.speedCol = this.speedCol * -1;
    }

    this.row += this.speedRow;
    this.col += this.speedCol;
  }

  randomPosition() {
    if (this.direction === 0) {
      //0 = top
      this.row = 10;
      this.col = Math.floor(
        Math.random() * (this.game.$canvas.width - this.radius)
      );
    } else if (this.direction === 1) {
      // 1 = right
      this.col = this.game.$canvas.width - this.game.character.imageWidth;
      this.row = Math.floor(
        Math.random() * (this.game.$canvas.height - this.radius)
      );
    } else if (this.direction === 2) {
      // 2 = bottom
      this.row = this.game.$canvas.height - this.game.character.imageHeight;
      this.col = Math.floor(
        Math.random() * (this.game.$canvas.width - this.radius));
    } else if (this.direction === 3) {
      // 3 = left
      this.col = 10;
      this.row = Math.floor(
        Math.random() * (this.game.$canvas.height - this.radius)
      );
    }
    console.log('nasceu:' ,this.col, this.row);
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
