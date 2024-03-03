class vitoria extends Phaser.Scene {
  constructor() {
    super({ key: 'vitoria' });
  }

  preload() {
    this.load.image("vitoria", "assets/vitoria.png");
  }

  create() {
    this.add.image(425, 400, "vitoria");
  }
}