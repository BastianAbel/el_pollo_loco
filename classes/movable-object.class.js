/**
 * represents all movable objects
 */
class MovableObject extends DrawableObject {
    acceleration = 0.5;
    speedY = 0;
    baseSpeed = 4;
    speed;
    imageCache = {};
    offset = {};
    hp = 100;
    deathTime;

    constructor() {
        super()
    }

    /**
     * increases x coordinate for right movement
     */
    moveRight() {
        this.x = this.x + this.speed;
    };

    /**
     * decreases x coordinate for left movement
     */
    moveLeft() {
        this.x -= this.speed
    }

    /**
     * initiates jump if object isnt in the air
     */
    jump() {
        if (!this.isAboveGround()) {
            this.speedY = 15;
        }
    }

    /**
     * checks if the two objects are colliding
     * @param {object} obj - object to check
     * @returns boolean
     */
    isColliding(obj) {
        const object1 = this.getBounds();
        const object2 = obj.getBounds();
        
        return object1.left < object2.right &&
        object1.right > object2.left &&
        object1.top < object2.bottom &&
        object1.bottom > object2.top;
    }
    
    /**
     * checks if object is dead and sets deathtime
     * returns true if dead
     * @returns boolean
     */
    isDead() {
        if(this.hp <= 0 && !this.deathTime) {
            this.setDeathTime();
        }
        return this.hp <= 0
    }

    /**
     * sets deathtime to current time
     */
    setDeathTime() {
        this.deathTime = new Date().getTime();
    }

    /**
     * checks and returns true if object is dead for more than 5 seconds
     * @returns boolean
     */
    corpseRotting() {
        let currentTime = new Date().getTime();
        return this.deathTime + 5000 < currentTime
    }

    /**
     * decreases y-speed if object is in air
     */
    applyGravity() {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration
            }
    }

    /**
     * checks and returns true if object is in air
     * @returns boolean
     */
    isAboveGround() {
        return this.y < this.baseY
    }

    /**
     * checks and returns true if is hurt and wasnt hurt last 0.5 seconds
     */
    isHurt() {
        let currentTime = new Date().getTime();
        return this.lastHurt + 500 > currentTime
    }

    /**
     * plays death animation
     */
    playDeathAnimation() {
        if (!this.dead) {
            this.dead = true;
            this.currentImage = 0;
        }
        this.playAnimationOnce(this.IMAGES_DEAD);
    }

    /**
     * decreases health by incoming damage
     * @param {number} dmg - incoming damage
     */
    hurt(dmg) {
        this.hp -= dmg;
        if(this.hp < 0) {
            this.hp = 0
        };
        this.lastHurt = new Date().getTime();
    }

    /**
     * plays clone of the related sound
     * @param {string} audioref - name of the sound
     */
    playSoundClone(audioref) {
        const original = loadedAudios[audioref];
        const audioClone = new Audio(original.src);
        audioClone.volume = original.volume;
        audioClone.muted = original.muted;
        audioClone.play()
    }
  
    /**
     * plays related sound
     * @param {string} audioref - name of the sound
     */
    playSound(audioref) {
    const audio = loadedAudios[audioref];
    audio.play();
    }

    /**
     * pauses the played audio
     * @param {string} audioref - name of the sound
     */
    pauseSound(audioref) {
    const audio = loadedAudios[audioref];
    audio.pause();
    }

    /**
     * plays the death sound
     */
    playDeathSound() {
        if(!this.dead) {
            this.playSoundClone(this.deathSound);
        }
    }

}