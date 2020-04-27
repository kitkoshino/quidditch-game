class Character {
  constructor(game, selectedCharacter) {
    this.game = game;
    this.image = {
      left: this.createCharacterImage(`/images/${selectedCharacter}-left.png`), //chama funcao createCharacterImagem e envia esse url como parametro
      right: this.createCharacterImage(
        `/images/${selectedCharacter}-right.png`
      ), // createCharacterImagem e envia esse url como parametro
    };
    this.col = 10; // posicao x
    this.row = 10; // posicao y
    console.log(selectedCharacter);
  }

  createCharacterImage(imageUrl) {
    //metodo para criar imagem
    const image = new Image();
    image.src = imageUrl;
    return image;
  }

  draw() {
    this.game.context.drawImage(this.image.right, this.col * 100, this.row * 60, 90, 60);
  }

  moveRight() {
    this.col ++;
  }

  moveLeft() {
    this.col --;
  }

  moveUp() {
    this.row --;
  }

  moveDown() {
    this.row ++;
  }
}
