class Statusbar extends DrawableObject {
    background = new Image();
    icon = new Image();
    bar = new Image();
    width = 200;
    height = 60;
    barWidth = 200;
    iconSize = 55;
    iconY;
    iconX;
    flipImage = false;

    constructor(iconImgPath, y) {
        super();
        this.background.src = 'img/7_statusbars/4_bar_elements/statusbar_empty.png';
        this.icon.src = iconImgPath;
        this.bar.src = 'img/7_statusbars/4_bar_elements/statusbar_green.png';
        this.x = 25;
        this.iconX = this.x - 28;
        this.y = y;
        this.iconY = y - 6;
    }

}