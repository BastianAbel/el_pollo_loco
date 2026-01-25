class CollectableCoin extends CollectableObject {

    constructor(x, y) {
        super().loadImg('img/8_coin/coin_1.png');
        this.height = 150;
        this.width = 150;
        this.y = y;
        this.x = x;
        this.offset = { left : 55, top : 55, right : 55, bottom : 55 }    
    }

    clone() {
        return new CollectableCoin(this.x, this.y)
    }
}