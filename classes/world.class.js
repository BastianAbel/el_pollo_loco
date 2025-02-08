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
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)) {
                    console.log('oof');
                }
            })
        }, 1000 / 5)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addArrayToMap(this.level.backgroundObjects)
        this.addArrayToMap(this.level.clouds)
        this.addToMap(this.character);
        this.addArrayToMap(this.level.enemies)
        
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
        obj.draw(this.ctx);
        // obj.drawFrame(this.ctx);        
    }
}