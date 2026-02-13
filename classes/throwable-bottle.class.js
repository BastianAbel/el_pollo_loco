/**
 * represents a thrown bottle
 */
class ThrowableBottle extends ThrowableObject {
    speedY = 15;
    y = 250;
    x = 200;
    height = 80;
    width = 60;
    baseY = 500;
    world;
    int;
    direction;
    IMAGES_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    /**
     * @param {object} world - reference of the world
     * @param {number} x - x-coordinate of the bottle
     * @param {number} y - y-coordinate of the bottle
     * @param {boolean} direction - represents direction right or left 
     */
    constructor(world, x, y, direction) {
        super().loadImg('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_ROTATION);

        this.speed = this.baseSpeed * 1.5;
        this.x = x + 90;
        this.y = y + 140;
        this.world = world;
        this.offset = { left: 0, top: 0, right: 0, bottom: 0 }
        this.direction = direction;
    }

    /**
     * updates bottle movement
     */
    updateMovement() {
        this.applyGravity();
        if(this.isAboveGround() && !this.direction) {
            this.moveRight();
        } else if(this.isAboveGround() && this.direction){
            this.moveLeft();
        } else {
            this.delete();
        }
    }

    /**
     * updates bottle animation
     */
    updateAnimation() {
        this.playAnimation(this.IMAGES_ROTATION);
    }

    /**
     * deletes bottle of the world
     */
    delete() {
        this.world.throwables = this.world.throwables.filter(t => t !== this);
    }
}