class Endboss extends MoveableObject {
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    currentImage = 0;
    width = 250;
    height = 300;
    y = 130;

    constructor() {
        super().loadImg('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate()
        this.x = 1000;
        this.speed = 3;
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