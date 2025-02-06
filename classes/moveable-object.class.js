class MoveableObject {
    x = 50;
    y = 127;
    img;
    height = 300;
    width = 150;
    speed = 1;
    imageCache = {};


    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x = this.x + this.speed;
    };

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed
        }, 1000 / 60)
    }

}