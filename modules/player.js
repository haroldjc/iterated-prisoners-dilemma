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

    opponentRate(opponentHistory) {
        let rate = {
            cooperate: 0,
            defect: 0
        };
        for (let i = 0; i < opponentHistory.length; i++) {
            if (opponentHistory[i]) {
                rate.defect++;
            } else {
                rate.cooperate++;
            }
        }

        return rate.cooperate / rate.defect;
    }
}

class HumanPlayer extends Player {
    constructor(...args) {
        super(...args);
    }
}

export {Player, HumanPlayer};