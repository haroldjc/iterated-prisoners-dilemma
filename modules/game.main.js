import { Player, HumanPlayer } from './player.js';
import * as strategy from './strategy.js';

export class Game {
    constructor(playerStrategy, computerStrategy, rounds) {
        this.playerStrategy = playerStrategy;
        this.computerStrategy = computerStrategy;
        this.rounds = rounds;
        this.start();
    }

    start() {
        console.log(strategy);
        window.player1 = new HumanPlayer(strategy.random);
        window.player2 = new Player(strategy.alwaysDefects);
    }
}