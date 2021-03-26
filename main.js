import { Strategy } from './modules/strategy.js';

var startGame = () => {
    window.game = new Strategy('Deflect');
}

startGame();
game.play();