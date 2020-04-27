class GoldenSnitch {
  constructor (game) {
    this.game = game;
    this.image = new Image();
    this.image.src = '/images/snitch.png';
    this.snitchWidth = 90;
    this.snitchHeight = 40;
    this.col = Math.floor(Math.random() * (this.game.$canvas.width - this.snitchWidth));
    this.row = Math.floor(Math.random() * (this.game.$canvas.height - this.snitchHeight));
    this.speedCol = 2;
    this.speedRow = 2;    
    this.randomFuturePosition(); //ao executar, cria o targetCol e targetRow
  }

  draw() {
    this.game.context.drawImage(this.image, this.col, this.row, this.snitchWidth, this.snitchHeight);
    console.log('draw',this.col, this.row);
  }

  randomFuturePosition() {
    this.targetCol = Math.floor(Math.random() * (this.game.$canvas.width - this.snitchWidth));
    this.targetRow = Math.floor(Math.random() * (this.game.$canvas.height - this.snitchHeight));
  }

  /*checkColision() {
    const SnitchFind = (this.game.character.col === this.col && this.game.character.row === this.row);
    console.log('Gotcha!');
  }*/
 
  snitchPath() {
    this.col += this.speedCol;
    this.row += this.speedRow;
    console.log('position', this.col,this.row);
  } 

  loop() {
    this.game.clear();
    this.draw();
    /* this.snitchPath();
    this.game.clear();
    this.draw();
    setTimeout(this.loop(), 1); */
    console.log('col', this.col);
  };
}
