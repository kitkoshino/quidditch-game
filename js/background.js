class Background {
  constructor(game) {
    this.game = game;
  }

  draw() {
    this.game.context.fillStyle = 'rgba(255,255,255,0.5)';
    this.game.context.fillRect(0, 0, 1500, 900);
  }
}
