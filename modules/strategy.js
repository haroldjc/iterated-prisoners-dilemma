export function random(opponentHistory) {
    return Math.floor(Math.random() * 2);
}

export function titForTat(opponentHistory) {
    // if (arguments.length) {
    if (opponentHistory != undefined) {
        // console.log(opponentHistory[opponentHistory.length-1]);
        if (opponentHistory[opponentHistory.length-1]) {
            // debugger
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

export function alwaysCooperates() {
    return 0;
}

export function alwaysDefects() {
    return 1;
}