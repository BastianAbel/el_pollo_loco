class SmallChicken extends Chicken {
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];


    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = Math.random() * 520 + 150;
        this.speed = this.baseSpeed * (Math.random() * 0.5) + 0.3;
        this.offset = { left : 14, top : 10, right : 14, bottom : 10 }    
    }

    updateMovement() {
        this.applyGravity();
        if(!this.isAboveGround()) {
            let randomNumber = Math.random() * 1000;
            if(randomNumber > 995) {
                this.speedY = 10;
            }
        }
        this.moveLeft(); 
    }

}