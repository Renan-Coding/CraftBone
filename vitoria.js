class vitoria extends Phaser.Scene {
  constructor() {
    super({ key: "vitoria" });
  }

  preload() {
    this.load.image("vitoria", "assets/vitoria.png");
  }

  create() {
    this.add.image(425, 400, "vitoria");

    scoreText = this.add.text(300, 32, "Pontuação: 200", {
      fontSize: "32px",
      fill: "#fff",
      fontStyle: "bold",
      fontFamily: "Arial",
    });
  }
}
