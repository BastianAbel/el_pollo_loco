class Character extends MoveableObject {
    walkAnimationImages = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImg('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkAnimationImages);
        this.animate();
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.walkAnimationImages.length;
            let path = this.walkAnimationImages[i];
            this.img = this.imageCache[path];
            this.currentImage++;    
        }, 1000 / 12    );
    }

    jump() {

    }
}