function getHomeScreenTemplate() {
    return `
        <img class="background" src="img/9_intro_outro_screens/start/startscreen_1.png" alt="">
    `
}

function getGameOverBackgroundTemplate() {
    return `                
        <img class="background game-state-img" src="img/9_intro_outro_screens/game_over/game over2.png" alt="">
    `
}

function getWinBackgroundTemplate() {
    return `                
        <img class="background game-state-img" src="img/9_intro_outro_screens/win/you-won.png" alt="">
    `
}

function getStartButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>Start</span>
        </button>
    `
}

function getExitButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(openHomeScreen())>
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
