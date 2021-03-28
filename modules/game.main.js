import { Player, HumanPlayer } from './player.js';
import * as strategy from './strategy.js';

export class Game {
    constructor(rounds) {
        // this.playerStrategy = playerStrategy;
        // this.computerStrategy = computerStrategy;
        this.rounds = rounds;
        this.start();
    }

    start() {
        console.log(`Game starts, for ${this.rounds} rounds!`);
        window.player1 = new HumanPlayer(strategy.random);
        window.player2 = new Player(strategy.titForTat);

        // const 

        console.log(`Player 1 is using ${window.player1.strategy.name}`);
        console.log(`Player 2 is using ${window.player2.strategy.name}`);

        let playersHistory = [];

        for (let i = 0; i < this.rounds; i++) {
            if (i === 0) {
                window.player1.turn();
                window.player2.turn();
            } else {
                playersHistory[0] = player1.history.map(value => value);
                playersHistory[1] = player2.history.map(value => value);

                window.player1.turn(playersHistory[1]);
                window.player2.turn(playersHistory[0]);
            }

            this.checkRound(window.player1.history[i], window.player2.history[i]);
        }

        this.showResults();
    }

    checkRound(p1, p2) {
        if (p1 && p2) {
            player1.score += 1;
            player2.score += 1;
            // console.log('Both players defected!');
        } else if (!p1 && !p2) {
            player1.score += 3;
            player2.score += 3;
            // console.log('Both players cooperated!');
        } else if (p1 == 0 && p2 == 1) {
            player2.score += 5;
            // console.log('Player 1 cooperated, player 2 defected');
        } else if (p1 == 1 && p2 == 0) {
            player1.score += 5;
            // console.log('Player 1 defected, player 2 cooperated');
        }
    }

    showResults() {
        if (player1.score > player2.score) {
            console.log(`Player 1 wins over Player 2!`);
            console.log(`Player 1 has ${player1.score} and player 2 has ${player2.score}`)
        } else if (player1.score === player2.score) {
            console.log(`Players draw with ${player1.score} points!`);
        } else {
            console.log(`Player 2 wins over Player 1!`);
            console.log(`Player 2 has ${player2.score} and player 1 has ${player1.score}`)
        }
        console.log(player1.history);
        console.log(player2.history);
    }

}