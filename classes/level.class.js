class Level {
    backgroundObjects;
    clouds;
    enemies;
    bottles;
    coins;
    level_end_x;

    constructor(levelEnd, backgroundObjects, clouds, enemies, bottles, coins) {
        this.level_end_x = levelEnd;
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.enemies = enemies;
        this.bottles = bottles;
        this.coins = coins;
    }
}