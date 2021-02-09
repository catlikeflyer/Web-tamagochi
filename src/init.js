import game from './gamestate';

const TICK_RATE = 3000;

async function init(){
  console.log("Start Game");

  let nextTimeToTick = Date.now()

  function nextAnimFrame(){
    const now = Date.now()

    if (nextTimeToTick <= now){
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimFrame);
  }

  nextAnimFrame();
}

init();
