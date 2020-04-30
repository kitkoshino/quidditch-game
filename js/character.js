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
    this.speed = 40;
    this.gravity = 0.5;
    this.speedWithGravity = 0.5;
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
    if (this.direction === 'right') {
      this.game.context.drawImage(
        this.image.right,
        this.col,
        this.row,
        this.imageWidth,
        this.imageHeight
      );
    } else if (this.direction === 'left') {
      this.game.context.drawImage(
        this.image.left,
        this.col,
        this.row,
        this.imageWidth,
        this.imageHeight
      );
    }
  }

  moveRight() {
    if (this.col + this.speed <= this.game.$canvas.width - this.imageWidth) {
      this.col += this.speed;
      this.direction = 'right';
    } else {
      this.col = this.game.$canvas.width - this.imageWidth;
    }
  }

  moveLeft() {
    if (this.col - this.speed >= 0) {
      this.col -= this.speed;
      this.direction = 'left';
    } else {
      this.col = 0;
    }
  }

  moveUp() {
    this.speedWithGravity = 0.5;
    if (this.row - this.speed >= 0) {
      this.row -= this.speed;
    } else {
      this.row = 0;
    }
  }

  moveDown() {
    if (this.row + this.speed <= this.game.$canvas.height - this.imageHeight) {
      this.row += this.speed;
      this.speedWithGravity + 40;
    } else {
      this.row = this.game.$canvas.height - this.imageHeight;
    }
  }

  downWithGravity() {
    this.speedWithGravity += (this.gravity / 1000 * 16);
    if (
      this.row + this.speedWithGravity <=
      this.game.$canvas.height - this.imageHeight
    ) {
      this.row += this.speedWithGravity;
    } else {
      this.row = this.game.$canvas.height - this.imageHeight;
    }
  }
}
