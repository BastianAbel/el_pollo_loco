class Endboss extends MovableObject {
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor() {
        super().loadImg('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate()
        this.x = 1000;
        this.speed = 3;
        this.offset = { left : 20, top : 50, right : 5, bottom : 15 }
        this.width = 250;
        this.height = 300;
        this.y = 135;
        this.damage = 20;
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