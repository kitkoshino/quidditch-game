class Bludger {
  constructor(game) {
    this.game = game;
    this.randomSpeed();
    this.radius = 20;
    this.color = 'brown';
    this.randomPosition(); //cria posicao col e row a partir do metodo randomPosition
  }

  draw() {
    this.game.context.beginPath();
    this.game.context.arc(this.col, this.row, this.radius, 0, 2 * Math.PI);
    this.game.context.closePath();

    this.game.context.fillStyle = this.color;
    this.game.context.fill();
  }

  move() {
    if (this.row >= this.game.$canvas.height - this.radius || this.row <= 10) {
      this.speedRow = this.speedRow * -1;
    }

    if (this.col >= this.game.$canvas.width - this.radius || this.col <= 10) {
      this.speedCol = this.speedCol * -1;
    }

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

  randomSpeed(){
    const initialSpeed = Math.floor(Math.random() * 4) + 2;
    this.speedCol = initialSpeed;
    this.speedRow = initialSpeed;
  }

  checkColision() {
    return (
      this.game.character.col >= this.col &&
      this.game.character.col <= this.col + this.radius &&
      this.game.character.row >= this.row &&
      this.game.character.row <= this.row + this.radius
    );
  }
}
