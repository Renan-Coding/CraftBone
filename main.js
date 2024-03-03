var platforms;
var player;
var cursors;
var score = 0;
var scoreText;
var itens = ["osso", "racao"];

class main extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("ground", "assets/plataforma.png");
    this.load.image("osso", "assets/osso.png");
    this.load.image("racao", "assets/racao.png");
    this.load.spritesheet("player", "assets/rocky.png", {
      frameWidth: 122,
      frameHeight: 120,
    });
  }

  create() {
    // Fundo do jogo
    this.add.image(400, 300, "background");

    // Plataformas
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 726, "ground").setScale(2).refreshBody();
    platforms.create(120, 500, "ground");
    platforms.create(750, 360, "ground");
    platforms.create(45, 190, "ground");

    // Jogador
    player = this.physics.add.sprite(600, 530, "player").setScale(0.8);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);

    // Criação dos itens e configuração da colisão e sobreposição
    var osso = this.physics.add
      .sprite(60, 50, "osso")
      .setScale(0.3)
      .refreshBody();
    var racao1 = this.physics.add
      .sprite(775, 50, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao2 = this.physics.add
      .sprite(600, 50, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao3 = this.physics.add
      .sprite(280, 300, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao4 = this.physics.add
      .sprite(60, 300, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao5 = this.physics.add
      .sprite(52, 580, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao6 = this.physics.add
      .sprite(180, 580, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao7 = this.physics.add
      .sprite(300, 580, "racao")
      .setScale(0.2)
      .refreshBody();
    var racao8 = this.physics.add
      .sprite(790, 580, "racao")
      .setScale(0.2)
      .refreshBody();

    this.physics.add.collider(osso, platforms);
    this.physics.add.collider(racao1, platforms);
    this.physics.add.collider(racao2, platforms);
    this.physics.add.collider(racao3, platforms);
    this.physics.add.collider(racao4, platforms);
    this.physics.add.collider(racao5, platforms);
    this.physics.add.collider(racao6, platforms);
    this.physics.add.collider(racao7, platforms);
    this.physics.add.collider(racao8, platforms);

    // Configuração da colisão e sobreposição com o jogador
    this.physics.add.overlap(player, osso, function (player, osso) {
      osso.destroy();
      score += 120;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao1, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao2, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao3, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao4, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao5, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao6, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao7, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    this.physics.add.overlap(player, racao8, function (player, racao) {
      racao.destroy();
      score += 10;
      scoreText.setText("Pontuação: " + score);
    });

    // Animações do jogador
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "player", frame: 1 }],
      frameRate: 10,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });

    // Controles do jogador
    cursors = this.input.keyboard.createCursorKeys();

    // Texto da pontuação
    scoreText = this.add.text(300, 32, "Pontuação: 0", {
      fontSize: "32px",
      fill: "#008000",
      fontStyle: "bold",
      fontFamily: "Arial",
    });
  }

  update() {

    if (score == 200) {
      this.scene.stop("menu");

      this.scene.start("vitoria");
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("turn");
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-360);
    }
  }
}
