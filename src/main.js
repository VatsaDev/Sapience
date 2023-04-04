import Phaser from './lib/phaser.js'

import Game from './scenes/Game.js'

export default new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: "game",
	scene: [Game],
	pixelArt: true,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 200
			},
			debug: true
		}
	}
})
