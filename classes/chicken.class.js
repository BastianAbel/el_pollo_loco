class Chicken extends MoveableObject {
    height = 120;
    width = 120;
    y = 310;

    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = Math.random() * 520 + 150;
    }
}