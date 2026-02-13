/**
 * represents standart statusbars
 */
class Statusbar extends DrawableObject {
    background = new Image();
    icon = new Image();
    bar = new Image();
    width = 200;
    height = 60;
    barWidth;
    iconSize = 55;
    iconY;
    iconX;
    flipImage = false;

    /**
     * @param {string} iconImgPath - ig path for statusbar icon
     * @param {number} y - y-coordinate of the statusbar
     * @param {number} barWidth - statusbar width
     */
    constructor(iconImgPath, y, barWidth) {
        super();
        this.background.src = 'img/7_statusbars/4_bar_elements/statusbar_empty.png';
        this.icon.src = iconImgPath;
        this.bar.src = 'img/7_statusbars/4_bar_elements/statusbar_green.png';
        this.x = 25;
        this.iconX = this.x - 28;
        this.y = y;
        this.iconY = y - 6;
        this.barWidth = this.width * barWidth;
    }

    /**
     * updates statusbar inner width
     * @param {number} percent 
     */
    updateStatusbar(percent) {
        this.barWidth = this.width * percent
    }

}