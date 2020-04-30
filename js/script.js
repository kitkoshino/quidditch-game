const $canvas = document.querySelector('canvas');
const harryBtn = document.getElementById('harry-intro-image');
const dracoBtn = document.getElementById('draco-intro-image');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('restart');
const restartGameBtn = document.getElementById('restart-game');
const startBtn = document.getElementById('start-btn');
const soundBtn = document.getElementById('sound-btn');

const selectSound = new Audio('/sounds/select.aiff');

window.onload = function () {
  let selectedCharacter;
  let game;

  startBtn.onclick = function () {
    game = new Game($canvas, selectedCharacter); // cria uma instancia do game
    game.start(); //inicia o jogo
    document.getElementById('game-intro').classList.add('hide-div'); //add class para esconder intro ao clicar em start
    document.getElementById('game-board').classList.remove('hide-div');
  };

  pauseBtn.onclick = function () {
    game.pause();
    if (game.isRunning) {
      pauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
      pauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
  };

  soundBtn.onclick = function () {
    game.isSoundOn = !game.isSoundOn;
    if(game.isSoundOn) {
      soundBtn.innerHTML = '<i class ="fa fa-volume-up"></i>';
    } else {
      soundBtn.innerHTML = '<i class ="fa fa-volume-off"></i>';
    }
    game.playBlackgroundMusic();
  };

  restartBtn.onclick = function () {
    game.reset();
  };

  restartGameBtn.onclick = function () {
    game.reset();
  };

  harryBtn.addEventListener('click', function () {
    selectedCharacter = 'harry-potter';
    dracoBtn.src = '/images/draco-right.pb.png';
    harryBtn.src = '/images/harry-potter-right.png';
    startBtn.style.visibility = 'visible';
  });

  dracoBtn.addEventListener('click', function () {
    selectedCharacter = 'draco';
    harryBtn.src = '/images/harry-potter-right-pb.png';
    dracoBtn.src = '/images/draco-right.png';
    startBtn.style.visibility = 'visible';
  });
};
