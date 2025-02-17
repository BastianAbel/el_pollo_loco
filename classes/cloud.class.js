class Cloud extends BackgroundObject {
    speed = 0.25;

    constructor(imgPath, x) {
        super(imgPath);
        this.x = x;
    }
    
    updateMovement() {
        this.moveLeft();
    }
}