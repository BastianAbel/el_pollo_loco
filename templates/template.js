/**
 * returns img html code of the homescreen
 * @returns html code
 */
function getHomeScreenTemplate() {
    return `
        <img class="background" src="img/9_intro_outro_screens/start/startscreen_1.png" alt="">
    `
}

/**
 * returns img html code of the gameover screen
 * @returns html code
 */
function getGameOverBackgroundTemplate() {
    return `                
        <img class="background game-state-img" src="img/9_intro_outro_screens/game_over/game over2.png" alt="">
    `
}

/**
 * returns img html code of the game won screen
 * @returns html code
 */
function getWinBackgroundTemplate() {
    return `                
        <img class="background game-state-img" src="img/9_intro_outro_screens/win/you-won.png" alt="">
    `
}

/**
 * returns html code of the start button
 * @returns html code
 */
function getStartButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>Start</span>
        </button>
    `
}

/**
 * returns html code of the exit button
 * @returns html code
 */
function getExitButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(openHomeScreen())>
            <span>Exit</span>
        </button>
    `
}

/**
 * returns html code of the play again button (case: you won)
 * @returns html code
 */
function getWinButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>nochmal?</span>
        </button>
    `
}

/**
 * returns html code of the play again button (case: youo lost)
 * @returns html code
 */
function getLoseButtonTemplate() {
    return `
        <button class="styled-button restart-button" onclick=(restart())>
            <span>nochmal!</span>
        </button>
    `
}
