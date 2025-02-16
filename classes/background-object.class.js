class BackgroundObject extends MovableObject {
    height = 480;
    width = 720;
    
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
    }
}