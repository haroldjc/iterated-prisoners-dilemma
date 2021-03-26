import { Game } from './modules/game.main.js';

var startGame = () => {
    window.game = new Game();
}

// Page elements
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    startGame();
});