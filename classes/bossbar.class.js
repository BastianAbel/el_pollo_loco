class Bossbar extends Statusbar {
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