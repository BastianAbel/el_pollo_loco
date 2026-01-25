class CollectableBottle extends CollectableObject {

    constructor(imgPath) {
        super().loadImg(imgPath);
        this.imgPath = imgPath;
        this.height = 84;
        this.width = 45;
        this.y = 335;
        this.x = Math.random() * 2000 + 200;
        this.offset = { left : 0, top : 0, right : 0, bottom : 0 }
    
    }

    clone() {
        return new CollectableBottle(this.imgPath)
    }

    relocate(levelEnd) {
        this.x = Math.random() * (levelEnd - 200) + 200;
    }
}