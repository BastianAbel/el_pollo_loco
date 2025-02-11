class MovableObject extends DrawableObject {
    speed = 1;
    imageCache = {};
    offset = {};
    hp = 100;

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

    getBounds() {
        let bounds = {
            left : this.x + this.offset.left,
            right : this.x + this.width - this.offset.right,
            top : this.y + this.offset.top,
            bottom : this.y + this.height - this.offset.bottom,    
        }
        return bounds
    }
    
    isDead() {
        if(this.hp <= 0) {
            return true
        }
    }
}