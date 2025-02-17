class ThrowableBottle extends ThrowableObject {
    speedY = 15;
    y = 250;
    x = 200;
    height = 80;
    width = 60;
    baseY = 500;
    world;
    int;

    constructor(world, x, y) {
        super().loadImg('img/6_salsa_bottle/salsa_bottle.png')

        this.speed = this.baseSpeed * 1.5;
        this.x = x + 90;
        this.y = y + 140;
        this.world = world;
    }

    updateMovement() {
        this.applyGravity();
        if(this.isAboveGround()) {
            this.moveRight()
        } else {
            this.world.throwables = this.world.throwables.filter(t => t !== this);
        }
    }

    updateAnimation() {

    }

}