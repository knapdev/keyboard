import Keyboard from './keyboard.js';

function loop(){

    Keyboard._update();

    if(Keyboard.getKeyDown(Keyboard.KeyCode.SPACE)){
        console.log('Space pressed!');
    }

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);