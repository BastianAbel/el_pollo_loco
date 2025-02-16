class Cloud extends BackgroundObject {
    speed = 0.25;

    constructor(imgPath, x) {
        super(imgPath);
        this.x = x;

        this.animate()
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}