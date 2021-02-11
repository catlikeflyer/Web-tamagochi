import game, { handleUserAction } from './gamestate';
import { TICK_RATE } from './constants';
import initButtons from './buttons'

async function init(){
  console.log("Start Game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimFrame(){
    const now = Date.now();

    if (nextTimeToTick <= now){
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimFrame);
  }

  nextAnimFrame();
}

init();
