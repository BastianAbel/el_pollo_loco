/**
 * represents the level
 */
class Level {
    backgroundObjects;
    clouds;
    enemies;
    bottles;
    coins;
    level_end_x;

    /**
     * clones level to set new level to world
     * @param {number} levelEnd - coordinate of the level end
     * @param {array} backgroundObjects - array of the background objects
     * @param {array} clouds - array of the cloud objects
     * @param {array} enemies - array of the enemie objects
     * @param {array} bottles - array of the pickup bottle objects
     * @param {array} coins - array of the pickup coin objects
     */
    constructor(levelEnd, backgroundObjects, clouds, enemies, bottles, coins) {
        this.level_end_x = levelEnd;
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.enemies = enemies;
        this.bottles = bottles;
        this.coins = coins;
    }

    /**
     * @returns clone of the original level
     */
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