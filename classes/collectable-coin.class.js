class CollectableCoin extends CollectableObject {

    constructor() {
        super().loadImg('img/8_coin/coin_1.png');
        this.height = 150;
        this.width = 150;
        this.y = 315;
        this.x = Math.random() * 500 + 200;
        this.offset = { left : 55, top : 55, right : 55, bottom : 55 }    
    }
}