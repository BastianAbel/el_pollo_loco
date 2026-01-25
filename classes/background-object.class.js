class BackgroundObject extends MovableObject {
    height = 480;
    width = 720;
    
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.imgPath = imgPath;
        this.x = x;
    }

    clone() {
        return new BackgroundObject(this.imgPath, this.x)
    }

}