import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
  /** @type {Phaser.GameObjects.Text} */
  Text;

  constructor() {
    super("game");
  }

  init() {}

  preload() {
    this.load.image(
      "tileset",
      "assets/tileset.png"
    );
    this.load.tilemapTiledJSON("map", "assets/map.tmj");
  }

  create() {
    this.map = this.make.tilemap({ key: "map" });
    this.tiles = this.map.addTilesetImage("tileset", "tileset");
    this.worldLayer = this.map.createLayer("Tile Layer 1", this.tiles, 0, 0);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.controlConfig = {
        camera: this.cameras.main,
        left: this.cursors.left,
        right: this.cursors.right,
        up: this.cursors.up,
        down: this.cursors.down,
        acceleration: 0.04,
        drag: 0.0005,
        maxSpeed: 0.7
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(this.controlConfig);
  }

  update() {
  }
}
