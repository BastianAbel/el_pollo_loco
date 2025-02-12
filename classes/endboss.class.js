class Endboss extends MovableObject {
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    currentImage = 0;
    offset = {
        left : 20,
        top : 50,
        right : 5,
        bottom : 15
    }
    width = 250;
    height = 300;
    y = 135;
    damage = 20;

    constructor() {
        super().loadImg('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate()
        this.x = 1000;
        this.speed = 3;
    }

    animate() {
        // setInterval(() => {
        //     this.moveLeft(); 
        // }, 1000 / 60)
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10    );
    }
}