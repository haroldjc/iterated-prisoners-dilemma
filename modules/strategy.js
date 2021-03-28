export function random(opponentHistory) {
    return Math.floor(Math.random() * 2);
}

export function alwaysCooperates() {
    return 0;
}

export function alwaysDefects() {
    return 1;
}

export function titForTat(opponentHistory) {
    if (opponentHistory != undefined) {
        if (opponentHistory[opponentHistory.length-1]) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

export function grimTrigger(opponentHistory) {
    if (this.resentment === undefined) {
        this.resentment = false;
    }
        
    if (opponentHistory != undefined) {
        if (!this.resentment) {
            if (opponentHistory[opponentHistory.length-1]) {
                this.resentment = true;
                return 1;
            }
            return 0;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}