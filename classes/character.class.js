class Character extends MoveableObject {
    walkAnimationImages = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    currentImage = 0;
    world;
    speed = 4;
    flipImage = false;

    constructor(world) {
        super().loadImg('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkAnimationImages);
        this.animate();
        this.world = world;
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.flipImage = false;
            } else if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.flipImage = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                let i = this.currentImage % this.walkAnimationImages.length;
                let path = this.walkAnimationImages[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 12);
    }

    jump() {

    }
}