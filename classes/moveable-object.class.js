class MoveableObject {
    x = 50;
    y = 127;
    img;
    height = 300;
    width = 150;
    speed = 1;
    imageCache = {};
    offset = {};


    draw(ctx) {
        ctx.save();
        this.applyTransformations(ctx);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.removeTransformations();
        ctx.restore();
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.save();
            this.applyTransformations(ctx);
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offset.left, 
                this.y + this.offset.top, 
                this.width - this.offset.right, 
                this.height - this.offset.bottom
            );
            ctx.stroke();
            this.removeTransformations();
            ctx.restore();
    }
    }

    applyTransformations(ctx) {
        if (this.flipImage) {
            ctx.translate(this.width, 0);
            ctx.scale(-1, 1);
            this.x = this.x * -1
        }
    }

    removeTransformations() {
        if (this.flipImage) {
            this.x = this.x * -1
        }
    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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
        return this.x < obj.x + obj.width &&
           this.x + this.width > obj.x &&
           this.y < obj.y + obj.height &&
           this.y + this.height > obj.y;
    }


}