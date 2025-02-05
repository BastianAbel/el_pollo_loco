class World {
    canvas;
    ctx;
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png'),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png'),
    ];
    character = new Character();
    enemies = [new Chicken, new Chicken, new Chicken]
    clouds = [
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png')
    ]

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addArrayToMap(this.backgroundObjects)
        this.addToMap(this.character);
        this.addArrayToMap(this.enemies)
        this.addArrayToMap(this.clouds)

        let self = this;
        requestAnimationFrame(function () { self.draw() })
    }

    addArrayToMap(array) {
        array.forEach(element => {
            this.addToMap(element)
        });
    }

    addToMap(obj) {
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height)
    }
}