export class Strategy {
    constructor(name) {
        this.name = name;
    }

    // Default strategy is random
    play() {
        console.log('Your move!!!')
    }

    move(previousMove) {
        
    }
}