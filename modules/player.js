class Player {
    constructor(strategy) {
        this.strategy = strategy;
        this.history = [];
        this.score = 0;

        console.log(strategy);
    }

    play(opponentHistory) {
        console.log(opponentHistory);
    }
}

class HumanPlayer extends Player {
    constructor(...args) {
        super(...args);
    }
}

export {Player, HumanPlayer};