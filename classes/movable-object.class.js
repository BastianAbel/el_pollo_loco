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

    moveRight() {
        this.x = this.x + this.speed;
    };

    moveLeft() {
        this.x -= this.speed
    }

    jump() {
        if (!this.isAboveGround()) {
            this.speedY = 15;
        }
    }

    isColliding(obj) {
        const object1 = this.getBounds();
        const object2 = obj.getBounds();
        
        return object1.left < object2.right &&
        object1.right > object2.left &&
        object1.top < object2.bottom &&
        object1.bottom > object2.top;
    }
    
    isDead() {
        if(this.hp <= 0 && !this.deathTime) {
            this.setDeathTime();
        }
        return this.hp <= 0
    }

    setDeathTime() {
        this.deathTime = new Date().getTime();
    }

    corpseRotting() {
        let currentTime = new Date().getTime();
        return this.deathTime + 5000 < currentTime
    }

    applyGravity() {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration
            }
    }

    isAboveGround() {
        return this.y < this.baseY
    }

    isHurt() {
        let currentTime = new Date().getTime();
        return this.lastHurt + 500 > currentTime
    }

    playDeathAnimation() {
        if (!this.dead) {
            this.dead = true;
            this.currentImage = 0;
        }
        this.playAnimationOnce(this.IMAGES_DEAD);
    }

    hurt(dmg) {
        this.hp -= dmg;
        if(this.hp < 0) {
            this.hp = 0
        };
        this.lastHurt = new Date().getTime();
    }

    playSoundClone(audioref) {
    const original = loadedAudios[audioref];
    const audioClone = original.cloneNode(true);
    audioClone.volume = original.volume;
    audioClone.muted = muted;
    audioClone.play();
    }

    playSoundClone(audioref) {
        const original = loadedAudios[audioref];
        const audioClone = new Audio(original.src);
        audioClone.volume = original.volume;
        audioClone.muted = original.muted;
        audioClone.play()
    }
  

    playSound(audioref) {
    const audio = loadedAudios[audioref];
    audio.play();
    }

    pauseSound(audioref) {
    const audio = loadedAudios[audioref];
    audio.pause();
    }
}