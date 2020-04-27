const $canvas = document.querySelector('canvas');

window.onload = function () {
  let character = 'harry-potter';
  
  // SE CLICAR NO HARRY character = hp;
  // SE CLICAR NO DRACO character = dm;
  document.getElementById('start-btn').onclick = function () {
    const game = new Game($canvas, character); // cria uma instancia do game
    game.start(); //inicia o jogo
    document.getElementById('game-intro').classList.add('hide-div'); //add class para esconder intro ao clicar em start
    document.getElementById('game-board').classList.remove('hide-div');
  }; 

};
