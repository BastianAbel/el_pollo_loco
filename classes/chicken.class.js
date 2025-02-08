class Chicken extends MoveableObject {
    height = 120;
    width = 120;
    y = 310;
    speed = 1 + (Math.random() * 1)
    walkAnimationImages = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.walkAnimationImages);
        this.x = Math.random() * 520 + 150;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft(); 
        }, 1000 / 60)
        setInterval(() => {
            let i = this.currentImage % this.walkAnimationImages.length;
            let path = this.walkAnimationImages[i];
            this.img = this.imageCache[path];
            this.currentImage++;   
        }, 1000 / 10    );
    }
}