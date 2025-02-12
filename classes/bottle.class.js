class Bottle extends CollectableObject {
    offset = {
        left : 0,
        top : 0,
        right : 0,
        bottom : 0
    }


    constructor(imgPath) {
        super().loadImg(imgPath);
        this.height = 84;
        this.width = 45;
        this.y = 335;
        this.x = Math.random() * 500 + 200;
    }
}