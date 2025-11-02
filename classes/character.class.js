class Character extends MovableObject {
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_LONG_IDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    world;
    coins = 0;
    bottles = 0;
    baseY = 128;
    idle = false;
    lastHurt = 0;
    dead = false;
    throwing = false;
    thowingInterval;
    firstMove;

    constructor(world) {
        super().loadImg('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.world = world;
        this.speed = this.baseSpeed;
        this.y = this.baseY;
        this.height = 300;
        this.width = 150;
        this.offset = { left: 30, top: 120, right: 45, bottom: 10 }
    }

    updateMovement() {
        if (!this.isDead()) {
            this.applyGravity()

            if (this.world.keyboard.throw) {
                this.startThrowing();
            } else {
                this.stopThrowing();
            }

            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.flipImage = false;
                this.firstMove = true;
            }else if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.flipImage = true;
                this.firstMove = true;
            }

            if (this.world.keyboard.jump) {
                this.jump();
                this.firstMove = true;
            }
            this.world.camera_x = -this.x + 100;
        }
    }

    jumpsOn(obj) {
        return (this.isHigherThan(obj) && this.isFalling())
    }

    isHigherThan(obj) {
        const char = this.getBounds();
        const object = obj.getBounds();
        return object.top + 50 > char.bottom    
    }

    isFalling() {
        return this.speedY < 0
    }

    updateAnimation() {
        if (this.isDead()) {
            this.playDeathSound();
            this.playDeathAnimation();
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.resetIdle();
        } else if (this.world.keyboard.jump || this.isAboveGround()) {
            this.playJumpAnimation(this.IMAGES_JUMPING);
            this.resetIdle();
        } else if (this.world.keyboard.right || this.world.keyboard.left) {
            this.playAnimation(this.IMAGES_WALKING);
            this.resetIdle();
            let i = this.currentImage % this.IMAGES_WALKING.length;
        } else {
            this.setIdle();
            this.playIdleAnimation();
        }
    }

    updateSound() {
        this.updateIdleSound();
        this.updateStepSound();
        this.updateJumpSound();
    }

    setIdle() {
        if (!this.idle) {
            this.idle = true;
            this.lastIdle = new Date().getTime();
        }
    }

    updateIdleSound() {
        if(!this.idleSound && this.longIdle() && this.idle) {
            this.idleSound = true;
            this.playSound('snoring');
        }else if(!this.idle) {
            this.idleSound = false;
            this.pauseSound('snoring');
        }
    }

    updateStepSound() {
        if (this.world.keyboard.right || this.world.keyboard.left) {
            let i = this.currentImage % this.IMAGES_WALKING.length;
                if((i === 2 || i === 5) && this.lastPlayedStepImg != i) {
                    this.lastPlayedStepImg = i;
                    this.playSoundClone('sandStep');
                }
        }
    }

    updateJumpSound() {
        if (this.world.keyboard.jump && !this.isAboveGround()) {
            this.playSoundClone('jump');
        }
    }

    playDeathSound() {
        if(!this.dead) {
            this.playSoundClone('death');
        }
    }

    playHurtSound() {
        this.playSoundClone('hurt');
    }

    playBottlePickupSound() {
        this.playSoundClone('bottlePickup');
    }

    playCoinPickupSound() {
        this.playSoundClone('coinPickup');
    }

    playThrowSound() {
        this.playSoundClone('throw');
    }

    resetIdle() {
        this.idle = false;
    }

    playIdleAnimation() {
        if (!this.longIdle()) {
            this.playAnimation(this.IMAGES_IDLE);
        } else {
            this.playAnimation(this.IMAGES_LONG_IDLE);
        }
    }

    longIdle() {
        let currentTime = new Date().getTime();
        return this.lastIdle + 5000 < currentTime
    }

    playJumpAnimation(images) {
        const thresholds = [15, 12, 8, 6, 0, -5, -8, -12];
        let index = thresholds.findIndex(threshold => this.speedY >= threshold);
        this.img = this.imageCache[images[index !== -1 ? index : images.length - 1]];
    }

    hurt(dmg) {
        this.hp -= dmg;
        if(this.hp < 0) {
            this.hp = 0
        };
        this.world.healthBar.updateStatusbar(this.hp / 100);
        this.lastHurt = new Date().getTime();
        this.playHurtSound();
    }

    collectBottle(bottle) {
        if (this.bottles < 10) {
            bottle.relocate(this.world.level.level_end_x);
            this.bottles += 1;
            this.world.bottleBar.updateStatusbar(this.bottles / 10);
            this.playBottlePickupSound();
        }
    }

    collectCoin(coin) {
        if (this.coins < 10) {
            this.world.level.coins = this.world.level.coins.filter(c => c !== coin);
            this.coins += 1;
            this.world.coinBar.updateStatusbar(this.coins / this.world.level_max_coins);
            this.playCoinPickupSound();
        }
    }

    startThrowing() {
        if (!this.throwing && this.bottles > 0) {
            this.throwing = true;
            this.throw();
            this.thowingInterval = setInterval(() => {
                if (this.bottles <= 0) {
                    this.stopThrowing();
                }
                if(this.bottles > 0) {
                    this.throw();
                }
            }, 250)
        }
    }

    stopThrowing() {
        if (this.throwing) {
            clearInterval(this.thowingInterval);
            this.throwing = false
        }
    }

    throw() {
        this.world.throwables.push(new ThrowableBottle(this.world, this.x, this.y, this.flipImage))
        this.bottles -= 1;
        this.world.bottleBar.updateStatusbar(this.bottles / 10);
        this.playThrowSound();
    }
}