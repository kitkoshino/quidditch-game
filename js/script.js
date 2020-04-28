const $canvas = document.querySelector('canvas');

window.onload = function () {
  let character = 'harry-potter';

  const harrySelected = document.getElementById('harry-intro-image');
  const dracoSelected = document.getElementById('draci-intro-image');

  // SE CLICAR NO HARRY character = hp;

  
  // SE CLICAR NO DRACO character = dm;
  const game = new Game($canvas, character);
  document.getElementById('start-btn').onclick = function () {
     // cria uma instancia do game
    game.start(); //inicia o jogo
    document.getElementById('game-intro').classList.add('hide-div'); //add class para esconder intro ao clicar em start
    document.getElementById('game-board').classList.remove('hide-div');
  }; 
  /*document.getElementById('pause').onclick = function () {
    game.pause();
  }*/

};
