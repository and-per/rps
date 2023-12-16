class Player {
    constructor(name){
        this.name = name
        this.wins = 0
        this.lose = 0
    }

    NewStats(W, L){
        this.wins = W
        this.lose = L
    }
}