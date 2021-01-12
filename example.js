import Keyboard from './keyboard.js';

function loop(){

    Keyboard._update();

    if(Keyboard.getKey(Keyboard.KeyCode.SPACE)){
        console.log("Space is held down!");
    }

    if(Keyboard.getKeyDown(Keyboard.KeyCode.SPACE)){
        console.log('Space was just pressed!');
    }

    if(Keyboard.getKeyDown(Keyboard.KeyCode.SPACE)){
        console.log('Space was just released!');
    }

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);