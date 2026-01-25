class SmallChicken extends Chicken {
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    standartSound = 'chickChirp';
    deathSound = 'chickenHurt';



    constructor(levelEnd) {
        super().loadImg('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = (Math.random() * (levelEnd - 500)) + 650;
        this.speed = this.baseSpeed * (Math.random() * 0.5) + 0.3;
        this.offset = { left : 14, top : 10, right : 14, bottom : 10 }    
    }

    clone(levelEnd) {
        return new SmallChicken(levelEnd)
    }

    updateMovement() {
        this.applyGravity();
        if(!this.isDead()) {
            if(!this.isAboveGround()) {
                let randomNumber = Math.random() * 1000;
                if(randomNumber > 995) {
                    this.speedY = 10;
                }
            }
            this.moveLeft();     
        }
    }


}