class Cloud extends BackgroundObject {
    speed = 0.25;

    constructor(imgPath, x) {
        super(imgPath);
        this.imgPath = imgPath;
        this.x = x;
    }
    
    clone() {
        return new Cloud(this.imgPath, this.x)
    }

    updateMovement() {
        this.moveLeft();
    }
}