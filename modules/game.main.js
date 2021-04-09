import { Player, HumanPlayer } from './player.js';
import * as strategy from './strategy.js';
export { strategy };

const MUTUAL_REWARD = 3;
const MUTUAL_DEFEFCT = 1;
const TEMPTATION_PAYOFF = 5;
const SUCKER_PAYOFF = 0;

// Page elements
const elPlayerOneScore = document.querySelector('.player-1 .js-score');
const elPlayerTwoScore = document.querySelector('.player-2 .js-score');

export class Game {
    constructor(rounds, strategyPlayer1, strategyPlayer2) {
        this.rounds = rounds;
        this.strategyPlayer1 = strategyPlayer1;
        this.strategyPlayer2 = strategyPlayer2;
        this.start();
    }

    start() {
        console.log(`Game starts, for ${this.rounds} rounds!`);
        window.player1 = new HumanPlayer(strategy[this.strategyPlayer1]);
        window.player2 = new Player(strategy[this.strategyPlayer2]);

        console.log(`Player 1 is using ${window.player1.strategy.name}`);
        console.log(`Player 2 is using ${window.player2.strategy.name}`);

        let playersHistory = [];

        for (let i = 0; i < this.rounds; i++) {
            setTimeout(() => {
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
            }, 50 * i);
        }

        setTimeout(() => this.showResults(), 50 * this.rounds);
    }

    checkRound(p1, p2) {
        // Both players defected
        if (p1 && p2) {
            player1.score.push(MUTUAL_DEFEFCT);
            player2.score.push(MUTUAL_DEFEFCT);;
        // Both players cooperated
        } else if (!p1 && !p2) {
            player1.score.push(MUTUAL_REWARD);
            player2.score.push(MUTUAL_REWARD);
        // Player 1 cooperated, player 2 defected
        } else if (p1 == 0 && p2 == 1) {
            player2.score.push(TEMPTATION_PAYOFF);
            player1.score.push(SUCKER_PAYOFF);
        // Player 1 defected, player 2 cooperated
        } else if (p1 == 1 && p2 == 0) {
            player1.score.push(TEMPTATION_PAYOFF);
            player2.score.push(SUCKER_PAYOFF);
        }

        elPlayerOneScore.firstChild.nodeValue = player1.score.reduce((a, v) => a + v);
        elPlayerTwoScore.firstChild.nodeValue = player2.score.reduce((a, v) => a + v);
    }

    showResults() {

        let scores = [];
        scores[0] = player1.score.reduce((a, v) => a + v);
        scores[1] = player2.score.reduce((a, v) => a + v);

        if (scores[0] > scores[1]) {
            console.log(`Player 1 wins over Player 2!`);
            console.log(`Player 1 has ${scores[0]} and player 2 has ${scores[1]}`)
        } else if (scores[0] === scores[1]) {
            console.log(`Players draw with ${scores[0]} points!`);
        } else {
            console.log(`Player 2 wins over Player 1!`);
            console.log(`Player 2 has ${scores[1]} and player 1 has ${scores[0]}`)
        }
        console.log(player1.history);
        console.log(player2.history);
    }

}