var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 480,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', '../assets/bg.png');
}

function create() {
    this.add.image(0, 0, 'background').setOrigin(0, 0);
}

function update() {
    ;
}