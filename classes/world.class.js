/**
 * represents the world managing the game
 */
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

    /**
     * @param {object} canvas - canvas element
     */
    constructor(canvas) {
        this.setWorld();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
    }

    /**
     * starts the game
     */
    startGame() {
        this.draw();
        this.animationInterval = setInterval(() => {this.updateAnimations()}, 1000 / 10);
        this.movementInterval = setInterval(() => {this.updateMovements(), this.checkCollisions(), this.updateSounds()}, 1000 / 60)
    }

    /**
     * stops the game
     */
    stopGame() {
        cancelAnimationFrame(this.animationFrameId);
        clearInterval(this.animationInterval);
        clearInterval(this.movementInterval);
        clearInterval(this.collisionInterval);
    }

    /** 
     * sets the world object to the character
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * checks for collisions
     */
    checkCollisions() {
        this.checkForEnemyCollision();
        this.checkCollectablesCollision();
        this.checkForEndbossInteraction();
    }

    /**
     * check enemie specific collisions
     */
    checkForEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            this.checkForDeadEnemies(enemy);
            this.checkPlayerEnemieCollision(enemy);
            this.checkThrowablesEnemieCollision(enemy);
        })
    }

    /**
     * checks for dead enemies and removes them after a certain amount of time
     */
    checkForDeadEnemies(enemy) {
        if(enemy.isDead() && enemy.corpseRotting()) {
            this.level.enemies = this.level.enemies.filter(e => e !== enemy)
        }
    }

    /**
     * checks player enemie collisions
     */
    checkPlayerEnemieCollision(enemy) {
        if(this.character.isColliding(enemy)) {
            if(this.character.jumpsOn(enemy) && !(enemy instanceof Endboss) && !enemy.isDead()) {
                enemy.hurt(enemy.hp);
                this.character.speedY = 15;
            }else if(!this.character.isDead() && !this.character.isHurt() && !enemy.hp == 0 && !this.character.isHigherThan(enemy)) {
                this.character.hurt(enemy.damage);
            }
        }
    }

    /**
     * checks throwables collisions with enemies
     */
    checkThrowablesEnemieCollision(enemy) {
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
    }

    /**
     * checks collision with collectables
     */
    checkCollectablesCollision() {
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
    }

    /**
     * checks for interactions with the endboss (first interaction and set healthbar)
     */
    checkForEndbossInteraction() {
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

    /**
     * draws all elements to the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawMapElementsToCanvas();
        this.ctx.translate(-this.camera_x, 0);
        this.drawStatusbarsToCanvas();
        this.ctx.translate(this.camera_x, 0);
        this.drawMapLifeToCanvas();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        this.animationFrameId = requestAnimationFrame(function () { self.draw() })
    }

    /**
     * draws map interior to the canvas
     */
    drawMapElementsToCanvas() {
        this.addArrayToMap(this.level.backgroundObjects)
        this.addArrayToMap(this.level.clouds)
        this.addArrayToMap(this.level.bottles)
        this.addArrayToMap(this.level.coins)
    }

    /**
     * draws statusbars to the canvas
     */
    drawStatusbarsToCanvas() {
        this.healthBar.drawStatusBar(this.ctx);
        this.bottleBar.drawStatusBar(this.ctx);
        this.coinBar.drawStatusBar(this.ctx);
        if(this.bossBar) {
            this.bossBar.drawStatusBar(this.ctx);
        }
    }

    /**
     * draws moving objects to the canvas
     */
    drawMapLifeToCanvas() {
        this.addToMap(this.character);
        this.addArrayToMap(this.level.enemies);
        this.addArrayToMap(this.throwables);
    }

    /**
     * draws an array of elements to the map
     * @param {array} array - array of the elements to add
     */
    addArrayToMap(array) {
        array.forEach(element => {
            this.addToMap(element)
        });
    }

    /**
     * draws object on the canvas
     * @param {object} obj - object to draw
     */
    addToMap(obj) {
        obj.draw(this.ctx);
        // obj.drawFrame(this.ctx);        
    }

    /**
     * updates all movements
     */
    updateMovements() {
        this.updateArrayMovement(this.level.clouds);
        this.character.updateMovement();
        if(this.character.firstMove) {
            this.updateArrayMovement(this.level.enemies);
            this.updateArrayMovement(this.throwables);
        }
        this.updateBossAgro();
    }

    /**
     * updates movement of objects inside the array
     * @param {array} array - array of objects to update
     */
    updateArrayMovement(array) {
        array.forEach(e => {
            e.updateMovement();
        })
    }
    
    /**
     * updates animations
     */
    updateAnimations() {
        this.character.updateAnimation();
        this.updateArrayAnimation(this.level.enemies);
        this.updateArrayAnimation(this.throwables);
    }
    
    /**
     * updates sounds
     */
    updateSounds() {
        this.character.updateSound();
        this.updateArraySound(this.level.enemies)
    }
    
    /**
     * updates animation of objects inside the array
     * @param {array} array - array of objects to update
     */
    updateArrayAnimation(array) {
        array.forEach(e => {
            e.updateAnimation();
        })
    }

    /**
     * updates sound of objects inside the array
     * @param {array} array 
     */
    updateArraySound(array) {
        array.forEach(e => {
            e.updateSound();
        })
    }

    /**
     * updates the agro of the endboss
     */
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