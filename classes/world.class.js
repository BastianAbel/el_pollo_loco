class World {
    keyboard = new Keyboard;
    canvas;
    ctx;
    level = level_1;
    character = new Character(this);
    camera_x = 0;
    healthBar = new Statusbar('img/7_statusbars/3_icons/icon_health.png', 10, 1);
    bottleBar = new Statusbar('img/7_statusbars/3_icons/icon_salsa_bottle.png', 54, 0);
    coinBar = new Statusbar('img/7_statusbars/3_icons/icon_coin.png', 94, 0);
    throwables = [];

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
                    if(!this.character.isDead()) {
                        this.character.hurt(enemy.damage);
                    }
                }
            })
            this.level.bottles.forEach((bottle) => {
                if(this.character.isColliding(bottle)) {
                    this.character.collectBottle(bottle);
                }
            })
            this.level.coins.forEach((coin) => {
                if(this.character.isColliding(coin)) {
                    this.character.collectCoin(coin);
                }
            })
        }, 1000 / 10)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        
        this.ctx.translate(this.camera_x, 0);
        
        this.addArrayToMap(this.level.backgroundObjects)
        this.addArrayToMap(this.level.clouds)
        this.addArrayToMap(this.level.bottles)
        this.addArrayToMap(this.level.coins)
        
        this.ctx.translate(-this.camera_x, 0);
        this.healthBar.drawStatusBar(this.ctx);
        this.bottleBar.drawStatusBar(this.ctx);
        this.coinBar.drawStatusBar(this.ctx);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addArrayToMap(this.level.enemies);
        this.addArrayToMap(this.throwables);
        
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