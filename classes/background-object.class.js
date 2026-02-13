/**
 * represents an element of the background
 */
class BackgroundObject extends MovableObject {
    height = 480;
    width = 720;
    
    /**
     * 
     * @param {string} imgPath - path to the img
     * @param {number} x - x-position of the element
     */
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.imgPath = imgPath;
        this.x = x;
    }

    /**
     * 
     * @returns a clone of the original element
     */
    clone() {
        return new BackgroundObject(this.imgPath, this.x)
    }

}