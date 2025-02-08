class Level {
    backgroundObjects;
    clouds;
    enemies;
    level_end_x = 4000;

    constructor(backgroundObjects, clouds, enemies) {
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.enemies = enemies;
    }
}