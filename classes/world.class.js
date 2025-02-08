class World {
    keyboard = new Keyboard;
    canvas;
    ctx;
    level = level_1;
    character = new Character(this);
    camera_x = 0;

    constructor(canvas) {
        this.setWorld();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addArrayToMap(this.level.backgroundObjects)
        this.addToMap(this.character);
        this.addArrayToMap(this.level.enemies)
        this.addArrayToMap(this.level.clouds)
        
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () { self.draw() })
    }

    addArrayToMap(array) {
        array.forEach(element => {
            this.addToMap(element)
        });
    }

    addToMap(obj) {
        this.ctx.save();
        this.applyTransformations(obj);
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
        this.removeTransformations(obj);
        this.ctx.restore();
    }

    applyTransformations(obj) {
        if (obj.flipImage) {
            this.ctx.translate(obj.width, 0);
            this.ctx.scale(-1, 1);
            obj.x = obj.x * -1
        }
    }

    removeTransformations(obj) {
        if (obj.flipImage) {
            obj.x = obj.x * -1
        }
    }

}