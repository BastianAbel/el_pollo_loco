class Chicken extends MovableObject {
    height = 120;
    width = 120;
    y = 310;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    damage = 5;

    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = Math.random() * 520 + 150;
        this.speed = this.baseSpeed * (Math.random() * 0.5) + 0.3;
        this.offset = { left : 5, top : 10, right : 0, bottom : 10 }    
    }

    updateMovement() {
        // this.moveLeft(); 
    }
    
    updateAnimation() {
        this.playAnimation(this.IMAGES_WALKING);
    }
    
}