/**
 * represents the endboss
 */
class Endboss extends MovableObject {
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    agro = 0;
    status = "idle";
    bossBar;
    deathSound = 'chickenHurt';

    constructor() {    
        super().loadImg('img/4_enemie_boss_chicken/1_walk/G2.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2600;
        this.speed = 2;
        this.offset = { left : 20, top : 50, right : 5, bottom : 15 }
        this.width = 250;
        this.height = 300;
        this.y = 135;
        this.damage = 20;
    }

    /**
     * @returns clone of the original endboss
     */
    clone() {
        return new Endboss()
    }

    /**
     * updates boss movement
     */
    updateMovement() {
        if(!this.isDead()) {
            if(this.agro == 2) {
                this.moveTowardsPlayer();
            }
        }
    }
    
    /**
     * updates boss animation
     */
    updateAnimation() {
        if(this.isDead()) {
            this.playDeathSound();
            this.playDeathAnimation();
        }else if(this.isHurt()) {            
            this.playAnimation(this.IMAGES_HURT);
        }else if(this.agro == 0) {
            this.loadImg('img/4_enemie_boss_chicken/1_walk/G2.png');
        }else if(this.agro == 1) {
            this.playAlertAnimation();
        }else if(this.agro == 2) {
            this.setAttackAnimation();
        }else {}
    }

    /**
     * plays attack animation
     */
    setAttackAnimation() {
        if(this.isColliding(this.world.character)) {
            this.playAnimation(this.IMAGES_ATTACK);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }
    
    /**
     * updates sound
     */
    updateSound() {
        if(this.agro == 1) {
            this.playSound("angryChicken")
        }
    }

    /**
     * activates agro of the boss
     */
    activateAgro() {
        let playerX = this.world.character.x;
        if(playerX + 450 >= this.x && this.agro === 0) {
            this.agro = 1;
        }
    }

    /**
     * plays alert animation
     */
    playAlertAnimation() {
        if(this.status == "idle") {
            this.alertTime = new Date().getTime();
            this.status = "allert";
            this.currentImage = 0;
        }
        this.playAnimation(this.IMAGES_ALERT);
        let currentTime = new Date().getTime();
        if((this.alertTime + 2000) < currentTime) {
            this.status = "attack";
            this.agro = 2;
        }
    }

    /**
     * updates movement towards player
     */
    moveTowardsPlayer() {
        if(this.x > this.world.character.x) {
            this.moveLeft();
            this.flipImage = false;
        }else if(this.x < this.world.character.x) {
            this.moveRight();
            this.flipImage = true;
        }
    }

    /**
     * removes damage from current hb and updates bossbar
     * @param {number} dmg - incoming damage
     */
    hurt(dmg) {
        this.hp -= dmg;
        this.world.bossBar.updateStatusbar(this.hp / 100);
        if(this.hp < 0 || this.hp === 0) {
            this.hp = 0
            this.world.bossBar = false;
        };
        this.lastHurt = new Date().getTime();
    }

    /**
     * checks if the boss was already seen
     * @returns boolean
     */
    firstEncounter() {
        return !this.world.bossBar && this.world.character.x + 600 >= this.x && this.hp > 0
    }

    /**
     * adds healthbar for the boss
     */
    setHealthbar() {
        this.world.bossBar = new Bossbar("img/7_statusbars/3_icons/icon_health_endboss.png", 10, 1);
    }

}