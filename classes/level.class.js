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

    clone() {
        return new Level(
            this.level_end_x,
            this.backgroundObjects.map(obj => obj.clone()),
            this.clouds.map(c => c.clone()),
            this.enemies.map(e => e.clone(this.level_end_x)),
            this.bottles.map(b => b.clone()),
            this.coins.map(c => c.clone())
        )
    }
}