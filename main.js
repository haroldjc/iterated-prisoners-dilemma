import { Game, strategy } from './modules/game.main.js';

var startGame = iterations => {
    window.game = new Game(iterations);
}

// Page elements
const buttonSimulation = document.getElementById('button-simulation');
const buttonStart = document.getElementById('button-start');
const gameContainers = document.getElementsByClassName('game-container');
const inputIterations = document.getElementById('iterations');

buttonSimulation.addEventListener('click', () => {

    buttonSimulation.disabled = true;

    let playerStrategySelectors = document.querySelectorAll('.player-selector__item');
    let strategyArray = Object.entries(strategy);
    let strategySelector = document.createElement('select');
    
    strategyArray.forEach(v => {
        let optionText = document.createTextNode(v[0]);
        let option = document.createElement('option');
        option.appendChild(optionText);
        strategySelector.appendChild(option);
    });

    playerStrategySelectors.forEach(el => {
        el.appendChild(strategySelector.cloneNode(true));
    });

    let gameContainer = gameContainers[0];
    gameContainer.style.display = 'block';

});

buttonStart.addEventListener('click', () => {
    startGame(inputIterations.value);
});