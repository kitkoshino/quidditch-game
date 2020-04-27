class Character {
  constructor(game, selectedCharacter) {
    this.game = game;
    this.image = {
      left: this.createCharacterImage(`/images/${selectedCharacter}-right.png`), //chama funcao createCharacterImagem e envia esse url como parametro
      right: this.createCharacterImage(`/images/${selectedCharacter}-right.png`
      ), // createCharacterImagem e envia esse url como parametro
    };
    this.col = 10; // posicao x
    this.row = 10; // posicao y
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
    this.game.context.drawImage(this.image.right, this.col, this.row, this.imageWidth, this.imageHeight);
  }

  moveRight() {
    this.col += 20;
  }

  moveLeft() {
    this.col -= 20;
  }

  moveUp() {
    this.row -= 20;
  }

  moveDown() {
    this.row += 20;
  }
}
