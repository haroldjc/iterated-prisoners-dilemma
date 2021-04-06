import { Game, strategy } from './modules/game.main.js';

var startGame = (iterations, strategyOne, strategyTwo) => {
    window.game = new Game(iterations, strategyOne, strategyTwo);
}

// Page elements
const buttonSimulation = document.getElementById('button-simulation');
const buttonStart = document.getElementById('button-start');
const gameContainers = document.getElementsByClassName('game-container');
const inputIterations = document.getElementById('iterations');

/*
    buttonSimulation
    Initiate the options and settings for a new game simulation.
*/
buttonSimulation.addEventListener('click', () => {

    buttonSimulation.disabled = true;

    let playerStrategySelectors = document.querySelectorAll('.player-selector__item');
    let strategySelector = document.createElement('select');
    
    Object.keys(strategy).forEach(v => {
        let optionText = document.createTextNode(v);
        let option = document.createElement('option');
        option.appendChild(optionText);
        strategySelector.appendChild(option);
    });

    playerStrategySelectors.forEach((el, i) => {
        strategySelector.setAttribute('name', `player-${i}`);
        el.appendChild(strategySelector.cloneNode(true));
    });

    let gameContainer = gameContainers[0];
    gameContainer.style.display = 'block';

});

/*
    buttonStart
    Start simulation
*/
buttonStart.addEventListener('click', () => {
    const playerOneStrategy = document.querySelector('[name="player-0"]');
    const playerTwoStrategy = document.querySelector('[name="player-1"]');

    startGame(inputIterations.value, playerOneStrategy.value, playerTwoStrategy.value);
});