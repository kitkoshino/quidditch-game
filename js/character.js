class Character {
  constructor(game, selectedCharacter) {
    this.game = game;
    this.image = {
      left: this.createCharacterImage(`/images/${selectedCharacter}-left.png`), //chama funcao createCharacterImagem e envia esse url como parametro
      right: this.createCharacterImage(`/images/${selectedCharacter}-right.png`
      ), // createCharacterImagem e envia esse url como parametro
    };
    this.col = 10; // posicao x
    this.row = 10; // posicao y
    this.speed = 30;
    this.direction = 'right';
    this.imageWidth = 90;
    this.imageHeight = 60;
    console.log(selectedCharacter);
  }

  createCharacterImage(imageUrl) {
    //metodo para criar imagem
    const image = new Image();
    image.src = imageUrl;
    return image;
  }

  draw() {
    if(this.direction === 'right') {
      this.game.context.drawImage(this.image.right, this.col, this.row, this.imageWidth, this.imageHeight);
    } else if (this.direction === 'left') {
      this.game.context.drawImage(this.image.left, this.col, this.row, this.imageWidth, this.imageHeight);
    }
  }

  moveRight() {
    this.col += this.speed;
    this.direction = 'right';
    }

  moveLeft() {
    this.col -= this.speed;
    this.direction = 'left';
  }

  moveUp() {
    this.row -= this.speed;
  }

  moveDown() {
    this.row += this.speed;
  }

}
