const $canvas = document.querySelector('canvas');

window.onload = function () {
  let character = 'harry-potter';

  const harrySelected = document.getElementById('harry-intro-image');
  const dracoSelected = document.getElementById('draci-intro-image');

  // SE CLICAR NO HARRY character = hp;

  // SE CLICAR NO DRACO character = dm;
  const game = new Game($canvas, character);
  const pauseBtn = document.getElementById('pause');
  const restartBtn = document.getElementById('restart');

  document.getElementById('start-btn').onclick = function () {
    // cria uma instancia do game
    game.start(); //inicia o jogo
    document.getElementById('game-intro').classList.add('hide-div'); //add class para esconder intro ao clicar em start
    document.getElementById('game-board').classList.remove('hide-div');
  };
  pauseBtn.onclick = function () {
    game.pause();
    if (game.isRunning) {
      pauseBtn.innerText = 'Pause';
    } else {
      pauseBtn.innerText = 'Resume';
    }
  };
  restartBtn.onclick = function () {
    game.reset();
  }
};
