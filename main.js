import { Game } from './modules/game.main.js';

var startGame = () => {
    window.game = new Game(20);
}

// Page elements
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    startGame();
});

let matrix = [];
for(let i=0;i<2;i++){
    matrix[i] = [];
    for(let j=0;j<2;j++){
        matrix[i][j]=`${j},${i}`;
    }
}

// console.table(matrix);