const $canvas = document.querySelector('canvas');
const harryBtn = document.getElementById('harry-intro-image');
const dracoBtn = document.getElementById('draco-intro-image');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('restart'); // botão do game-over
const restartGameBtn = document.getElementById('restart-game'); // botão do jogo
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
      pauseBtn.classList.remove('draco-second-color');
      pauseBtn.classList.remove('harry-second-color');
    } else {
      pauseBtn.innerHTML = '<i class="fa fa-play"></i>';
      if(selectedCharacter === 'harry-potter'){
        pause.classList.add('harry-second-color');
      } else {
        pause.classList.add('draco-second-color');
      }
    }
  };

  soundBtn.onclick = function () {
    game.isSoundOn = !game.isSoundOn;
    if (game.isSoundOn) {
      soundBtn.innerHTML = '<i class ="fa fa-volume-up"></i>';
      soundBtn.classList.remove('draco-second-color');
      soundBtn.classList.remove('harry-second-color');
    } else {
      soundBtn.innerHTML = '<i class ="fa fa-volume-off"></i>';
      if (selectedCharacter === 'harry-potter') {
        soundBtn.classList.add('harry-second-color');
      } else {
        soundBtn.classList.add('draco-second-color');
      }
    }
    game.playBlackgroundMusic();
  };

  restartBtn.onclick = function () {
    game.reset();
  };

  restartGameBtn.onclick = function () {
    game.reset();
    pauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    pause.classList.remove('draco-second-color');
    pause.classList.remove('harry-second-color');
  };

  harryBtn.addEventListener('click', function () {
    selectedCharacter = 'harry-potter';
    dracoBtn.src = '/images/draco-right.pb.png';
    harryBtn.src = '/images/harry-potter-right.png';
    startBtn.style.visibility = 'visible';
    buttonColors();
  });

  dracoBtn.addEventListener('click', function () {
    selectedCharacter = 'draco';
    harryBtn.src = '/images/harry-potter-right-pb.png';
    dracoBtn.src = '/images/draco-right.png';
    startBtn.style.visibility = 'visible';
    buttonColors();
  });

  function buttonColors() {
    const allBtns = document.querySelectorAll('button');
    const scoreBoard = document.getElementById('scoreboard');
    console.log(allBtns);
    if (selectedCharacter === 'draco') {
      console.log('aqui');
      for (button of allBtns) {
        button.classList.add(
          'draco-main-color',
          'draco-btn',
        );
        button.classList.remove(
          'harry-main-color',
          'harry-btn'
        )
      }
      scoreBoard.classList.add('draco-main-color');
      scoreBoard.classList.remove('harry-main-color');

    } else {
      for (button of allBtns) {
        console.log('harry');
        button.classList.add(
          'harry-main-color',
          'harry-btn',
        );
        button.classList.remove(
          'draco-main-color',
          'draco-btn'
        )
      }
      scoreBoard.classList.add('harry-main-color');
      scoreBoard.classList.remove('draco-main-color');
    }
  }
};
