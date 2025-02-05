class BackgroundObject extends MoveableObject {
    x = 0;
    y = 0;
    height = 480;
    width = 720;
    
    constructor(imgPath) {
        super().loadImg(imgPath);

    }
}