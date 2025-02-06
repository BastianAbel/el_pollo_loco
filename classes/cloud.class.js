class Cloud extends BackgroundObject {
    speed = 0.25;

    constructor(imgPath) {
        super(imgPath);

        this.animate()
    }

    animate() {
        this.moveLeft();
    }
}