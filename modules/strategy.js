export function random(opponentHistory) {
    return Math.floor(Math.random() * 2);
}

export function titForTat(opponentHistory) {
    console.log('Tit for tat');
}

export function alwaysCooperates() {
    console.log('Cooperate');
    return 0;
}

export function alwaysDefects() {
    console.log('Defect!');
    return 1;
}