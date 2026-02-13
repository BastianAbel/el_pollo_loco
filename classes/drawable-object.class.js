/**
 * represents all drawable objects
 */
class DrawableObject {
    currentImage = 0;
    x = 0;
    y = 0;
    img; height; width; offset;
    flipImage = false;

    constructor() {}

    /**
     * draws element
     * @param {object} ctx - canvas element
     */
    draw(ctx) {
        ctx.save();
        this.applyTransformations(ctx);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.restore();
    }

    /**
     * draws statusbars
     * @param {object} ctx - canvas element
     */
    drawStatusBar(ctx) {
        ctx.save();
        this.applyTransformations(ctx);
        ctx.drawImage(this.background, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.bar, this.x, this.y, this.barWidth, this.height);
        ctx.drawImage(this.icon, this.iconX, this.iconY, this.iconSize, this.iconSize);
        ctx.restore();
    }

    /**
     * draws boxes for element hitbox and size visualisation
     */
    drawFrame() {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof CollectableObject) {
            this.drawImgSize();
            this.drawHitbox();
        }
    }

    /**
     * draws rectangle for img size
     */
    drawImgSize() {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    /**
     * draws rectangle/hitbox for element
     */
    drawHitbox() {
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

    /**
     * flips the object img
     * @param {object} ctx - canvas element
     */
    applyTransformations(ctx) {
        if (this.flipImage) {
            ctx.translate(this.x * 2 + this.width, 0);
            ctx.scale(-1, 1);
        }
    }

    /**
     * creates image object to use
     * @param {string} path - img path to load
     */
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * loads an array of images
     * @param {array} arr - img path array
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * plays images one after another
     * @param {array} images - array of loadet images
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * @returns hitbox of the element
     */
    getBounds() {
        let bounds = {
            left : this.x + this.offset.left,
            right : this.x + this.width - this.offset.right,
            top : this.y + this.offset.top,
            bottom : this.y + this.height - this.offset.bottom,    
        }
        return bounds
    }

    /**
     * plays an animation just once
     * @param {array} arr loadet image array
     */
    playAnimationOnce(arr) {
        if (this.currentImage < arr.length) {
            this.playAnimation(arr);
        }else if(this instanceof Character){
            openGameOverScreen();
        }else if(this instanceof Endboss) {
            openWinScreen();
        }
    }

}