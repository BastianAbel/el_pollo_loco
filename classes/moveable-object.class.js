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
        ctx.restore();
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
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
                this.width - (this.offset.left + this.offset.right), 
                this.height - (this.offset.top + this.offset.bottom)
            );
            ctx.stroke();
    }
    }

    applyTransformations(ctx) {
        if (this.flipImage) {
            ctx.translate(this.x * 2 + this.width, 0);
            ctx.scale(-1, 1);
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
    

}