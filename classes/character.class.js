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
    ]
    currentImage = 0;
    offset = {
        left : 30,
        top : 120,
        right : 45,
        bottom : 10
    }
    world;
    speed = 4;
    flipImage = false;

    speedY = 0;
    acceleration = 0.5;
    y = 50;

    constructor(world) {
        super().loadImg('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.world = world;
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.flipImage = false;
            }
            
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.flipImage = true;
            }

            if(this.world.keyboard.jump) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.world.keyboard.jump || this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);

        this.applyGravity()
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration
            }
        }, 1000 / 60)
    }

    isAboveGround() {
        return this.y < 128
    }
}