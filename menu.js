class menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" }); // Define o nome da cena como "menu"
  }

  preload() {
    // Pré-carrega as imagens da cena
    this.load.image("inicio", "assets/menu.png"); // Carrega a imagem de fundo do menu
    this.load.image("start", "assets/start.png"); // Carrega a imagem do botão de iniciar
  }

  create() {
    // Criação dos elementos visuais na cena
    this.add.image(425, 400, "inicio"); // Adiciona a imagem de fundo do menu

    // Cria o botão de iniciar
    var start = this.add
      .image(400, 500, "start") // Posiciona o botão na tela
      .setScale(0.7) // Define a escala do botão
      .setInteractive(); // Permite interação com o botão
    start.on("pointerdown", () => this.scene.start("main")); // Define o evento do botão para iniciar a cena (main)
  }
}
