/**
 * represents the chicken enemie
 */
class Chicken extends MovableObject {
    height = 120;
    width = 120;
    baseY = 310;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];
    damage = 5;
    standartSound = 'chickenClucking';
    deathSound = 'chickenHurt';

    /**
     * @param {number} levelEnd - coordinate of the level end
     */
    constructor(levelEnd) {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = (Math.random() * (levelEnd - 500)) + 650;
        this.speed = this.baseSpeed * (Math.random() * 0.7) + 0.3;
        this.offset = { left : 5, top : 10, right : 0, bottom : 10 };
        this.y = this.baseY;   
    }

    /**
     * 
     * @param {number} levelEnd - coordinate of the level end
     * @returns clone of the original enemie
     */
    clone(levelEnd) {
        return new Chicken(levelEnd)
    }

    /**
     * updates the movement
     */
    updateMovement() {
        if(!this.isDead()) {
            this.moveLeft(); 
        }
    }
    
    /**
     * updates the animation
     */
    updateAnimation() {
        if(this.isDead()) {
            this.playDeathSound();
            this.playDeathAnimation();
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    /**
     * updates the sound
     */
    updateSound() {
        const currentTime = new Date().getTime();
        if((currentTime % 5000) <= 40) {
            const randomNumber = Math.random() * 100;
            if(randomNumber > 95) {
                this.playSound(this.standartSound);
            };
    }

    }
    
}