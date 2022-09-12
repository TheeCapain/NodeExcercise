let score = 100;
let playerone;
let playertwo;

export function initializePlayers(playeroneInit, playertwoInit){
    playerone =  playeroneInit;
    playertwo = playertwoInit;

}

export function initializeScore(scoreInit = 301){
score = scoreInit;
}

export function initializeGame() {
    console.log(playerone, playertwo)
    console.log("Game starts with score...", score)
}