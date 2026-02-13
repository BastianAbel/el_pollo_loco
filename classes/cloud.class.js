/**
 * represents the cloud element
 */
class Cloud extends BackgroundObject {
    speed = 0.25;

    /**
     * @param {string} imgPath - img path of the cloud
     * @param {number} x - x-coordinate of the cloud
     */
    constructor(imgPath, x) {
        super(imgPath);
        this.imgPath = imgPath;
        this.x = x;
    }
    
    /**
     * @returns clone of the original cloud
     */
    clone() {
        return new Cloud(this.imgPath, this.x)
    }

    /**
     * updates movement
     */
    updateMovement() {
        this.moveLeft();
    }
}