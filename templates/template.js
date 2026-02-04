function getGameOverBackgroundTemplate() {
    return `                
        <img class="background game-over-img" src="img/9_intro_outro_screens/game_over/game over2.png" alt="">
    `
}

function getWinBackgroundTemplate() {
    return `                
        <img class="background game-over-img" src="img/9_intro_outro_screens/win/you-won.png" alt="">
    `
}

function getStartButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(start())>
            <span>Exit</span>
        </button>
    `
}

function getExitButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>Exit</span>
        </button>
    `
}

function getWinButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>nochmal?</span>
        </button>
    `
}

function getLoseButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>nochmal!</span>
        </button>
    `
}
