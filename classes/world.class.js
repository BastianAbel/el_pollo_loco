class World {
    animationFrameId;
    animationInterval;
    movementInterval;
    collisionInterval;
    keyboard = new Keyboard;
    canvas;
    ctx;
    level = level_1.clone();
    character = new Character(this);
    camera_x = 0;
    healthBar = new Statusbar('img/7_statusbars/3_icons/icon_health.png', 10, 1);
    bottleBar = new Statusbar('img/7_statusbars/3_icons/icon_salsa_bottle.png', 54, 0);
    coinBar = new Statusbar('img/7_statusbars/3_icons/icon_coin.png', 94, 0);
    bossBar;
    throwables = [];
    level_max_coins = this.level.coins.length;

    constructor(canvas) {
        this.setWorld();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        // this.startGame()
    }

    startGame() {
        this.draw();
        this.animationInterval = setInterval(() => {this.updateAnimations()}, 1000 / 10);
        this.movementInterval = setInterval(() => {this.updateMovements(), this.checkCollisions(), this.updateSounds()}, 1000 / 60)
    }

    stopGame() {
        cancelAnimationFrame(this.animationFrameId);
        clearInterval(this.animationInterval);
        clearInterval(this.movementInterval);
        clearInterval(this.collisionInterval);
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
            this.level.enemies.forEach((enemy) => {
                if(enemy.isDead() && enemy.corpseRotting()) {
                    this.level.enemies = this.level.enemies.filter(e => e !== enemy)
                }
                if(this.character.isColliding(enemy)) {
                    if(this.character.jumpsOn(enemy) && !(enemy instanceof Endboss) && !enemy.isDead()) {
                        enemy.hurt(enemy.hp);
                        this.character.speedY = 15;
                    }else if(!this.character.isDead() && !this.character.isHurt() && !enemy.hp == 0 && !this.character.isHigherThan(enemy)) {
                        this.character.hurt(enemy.damage);
                    }
                }
                this.throwables.forEach((bottle => {
                    if(enemy.isColliding(bottle) && !enemy.isDead()) {
                        if(enemy instanceof Endboss) {
                            enemy.hurt(20);      
                        }else {
                            enemy.hurt(enemy.hp);
                        }
                        bottle.delete();                  
                    }
                }))
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
            this.level.enemies.forEach((enemy => {
                let endboss;
                if(enemy instanceof Endboss) {
                    endboss = enemy;
                    if(endboss.firstEncounter()) {
                        endboss.setHealthbar();
                    }
                }
            }))
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
        if(this.bossBar) {
            this.bossBar.drawStatusBar(this.ctx);
        }
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addArrayToMap(this.level.enemies);
        this.addArrayToMap(this.throwables);
        
        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        this.animationFrameId = requestAnimationFrame(function () { self.draw() })
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

    updateMovements() {
        this.updateArrayMovement(this.level.clouds);
        this.character.updateMovement();
        if(this.character.firstMove) {
            this.updateArrayMovement(this.level.enemies);
            this.updateArrayMovement(this.throwables);
        }
        this.updateBossAgro();
    }

    updateArrayMovement(array) {
        array.forEach(e => {
            e.updateMovement();
        })
    }
    
    updateAnimations() {
        this.character.updateAnimation();
        this.updateArrayAnimation(this.level.enemies);
        this.updateArrayAnimation(this.throwables);
    }
    
    updateSounds() {
        this.character.updateSound();
        this.updateArraySound(this.level.enemies)
    }
    
    updateArrayAnimation(array) {
        array.forEach(e => {
            e.updateAnimation();
        })
    }

    updateArraySound(array) {
        array.forEach(e => {
            e.updateSound();
        })
    }

    updateBossAgro() {
        this.level.enemies.forEach(enemy => {
            if(enemy instanceof Endboss) {
                if(!enemy.world) {
                    enemy.world = this;
                }
                enemy.activateAgro();
            }
        });
    }

}