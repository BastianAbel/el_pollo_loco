class Level {
    backgroundObjects;
    clouds;
    enemies;
    bottles;
    coins;
    level_end_x = 4000;

    constructor(backgroundObjects, clouds, enemies, bottles, coins) {
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.enemies = enemies;
        this.bottles = bottles;
        this.coins = coins;
    }
}