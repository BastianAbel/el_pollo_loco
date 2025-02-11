class Chicken extends MovableObject {
    height = 120;
    width = 120;
    y = 310;
    speed = 1 + (Math.random() * 1)
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    currentImage = 0;
    offset = {
        left : 5,
        top : 10,
        right : 0,
        bottom : 10
    }

    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = Math.random() * 520 + 150;
        // this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft(); 
        }, 1000 / 60)
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10    );
    }
}