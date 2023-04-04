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
  }

  update() {
  }
}
