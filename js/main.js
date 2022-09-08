var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
};

var game = new Phaser.Game(config);

function preload() {
    assetDict = {
        // 'name': 'file_name'
        'background': 'bg',
        'background2': 'bg2',
        'chisatoStop': 'stop',
        'chisatoLeft': 'left',
        'chisatoRight': 'right',
        'shotFlash': 'shot_flash',
        'shotHole': 'hole',
        'aimCursor': 'aim',
    }
    for (key in assetDict) {
        this.load.image(key, `../assets/${assetDict[key]}.png`);
    }
    this.load.spritesheet('chisato', 
        '../assets/chisato-sprite.png',
        { frameWidth: 960/3 }
    );
}

function create() {
    this.add.image(480, 300, 'background');
    var chisato = this.physics.add.sprite(480, 450, 'chisato');
    chisato.setCollideWorldBounds(true);
    this.anims.create({
        key: 'left',
        frames: [ { key: 'chisato', frame: 0 } ],
        frameRate: 10
    });
    this.anims.create({
        key: 'right',
        frames: [ { key: 'chisato', frame: 2 } ],
        frameRate: 10
    });
    this.anims.create({
        key: 'center',
        frames: [ { key: 'chisato', frame: 1 } ],
        frameRate: 10
    });
    var aim = this.add.image(480, 300, 'aimCursor');
    this.input.on('pointermove', function (pointer) {
        aim.x = pointer.x;
        aim.y = pointer.y;
    });
}

function update() {
    
}