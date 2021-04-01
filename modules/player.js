class Player {
    constructor(strategy) {
        this.strategy = strategy;
        this.history = [];
        this.score = [];
    }

    turn(opponentHistory) {
        let turnResult = this.strategy(opponentHistory);
        this.history.push(turnResult);
    }
}

class HumanPlayer extends Player {
    constructor(...args) {
        super(...args);
    }
}

export {Player, HumanPlayer};