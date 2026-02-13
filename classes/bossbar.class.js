/**
 * represents the bossbar for the Endboss
 */

class Bossbar extends Statusbar {

    /**
     * 
     * @param {string} iconImgPath - img path for the statusbar icon
     * @param {number} y - y-position of the element
     * @param {number} barWidth - widht of the element
     */
    constructor(iconImgPath, y, barWidth) {
        super()
        this.icon.src = iconImgPath;
        this.x = 490;
        this.flipImage = true;
        this.iconX = this.x - 28;
        this.y = y;
        this.iconY = y + 2;
        this.barWidth = this.width * barWidth;
    }
}