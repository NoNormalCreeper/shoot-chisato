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
        default: 'matter',
        matter: {
            debug: true
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
        'aimCenter': 'aim_center'
    }
    for (key in assetDict) {
        this.load.image(key, `../assets/${assetDict[key]}.png`);
    }
    this.load.spritesheet('chisato', 
        '../assets/chisato-sprite.png',
        { frameWidth: 960/3, frameHeight: 400 }
    );
}

function create() {
    this.matter.world.disableGravity();
    this.add.image(480, 300, 'background');
    chisato = this.matter.add.sprite(480, (600-400/2), 'sheet', 'chisato', { shape: shape.chisato });
    this.matter.world.setBounds();
    this.anims.create({
        key: 'left',
        frames: [ { key: 'chisato', frame: 0 } ],
        frameRate: 1
    });
    this.anims.create({
        key: 'right',
        frames: [ { key: 'chisato', frame: 2 } ],
        frameRate: 1
    });
    this.anims.create({
        key: 'center',
        frames: [ { key: 'chisato', frame: 1 } ],
        frameRate: 1
    });
    chisato.anims.play('center')

    aim = this.matter.add.image(480, 300, 'aimCursor');
    aimCenter = this.matter.add.image(480, 300, 'aimCenter')
    // this.input.on('pointermove', function (pointer) {
    //     aim.x = pointer.x;
    //     aim.y = pointer.y;
    // });
    // this.input.on('pointerdown', () => {
    //     chisato.anims.play('left');
    // });

    // this.matter.add.overlap(aimCenter, chisato, (aim, chisato) => {
    //     console.log(1);
    // });
}

function update() {
    pointer = this.input.activePointer;
    aim.x = pointer.x;
    aim.y = pointer.y;
    aimCenter.x = aim.x
    aimCenter.y = aim.y
}