// Configurações do jogo
var config = {
  type: Phaser.AUTO, // Tipo de renderização do jogo
  width: 850, // Largura da tela
  height: 800, // Altura da tela

  // Configurações de física do jogo
  physics: {
    default: "arcade", // física arcade padrão

    // Configurações do arcade
    arcade: {
      gravity: { y: 300 }, // Gravidade no eixo y
      debug: false, // Modo da hitbox
    },
  },

  // Lista de cenas do jogo
  scene: [menu, main, vitoria],
};

// Criação do jogo com as configurações especificadas
var game = new Phaser.Game(config);
