var loadState = {
	
	preload: function () {
		game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		
		var loadingLabel = game.add.text(100,200,'Loading the Stach...',{font: '30px Courier', fill:'#ffffff'});
		
		game.load.script('particlestorm', 'scripts/particle-storm.min.js');

		game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71, 3);
		game.load.spritesheet('buttonfull', 'assets/buttons/fullscreen-button64.png', 64, 64, 2);
		game.load.spritesheet('buttonauto', 'assets/buttons/button_auto.png', 150, 50, 2);
		game.load.spritesheet('buttonup', 'assets/buttons/buttonUp.png', 32, 32, 2);
		game.load.spritesheet('buttondown', 'assets/buttons/buttonDown.png', 32, 32, 2);
		
		game.load.image('font', 'assets/menu/font.png');	
		game.load.image('sky', 'assets/menu/sky.jpg');
		game.load.image('cloud', 'assets/menu/stach_tsp.png');
		game.load.image('star', 'assets/menu/pixel4x4_yellow.png');
		
		game.load.image('deckbuild_background', 'assets/deckbuild/deckbuild_background.jpg');
		game.load.image('card_added', 'assets/deckbuild/card_added.png');
		
		game.load.image('cardtemp', 'assets/cards/card_tmp.png');
		game.load.image('card1img', 'assets/cards/card1.jpg');
		game.load.image('card2img', 'assets/cards/card2.jpg');
		game.load.image('card3img', 'assets/cards/card3.jpg');
		game.load.image('card4img', 'assets/cards/card4.jpg');
		game.load.image('card5img', 'assets/cards/card5.jpg');
		game.load.image('card6img', 'assets/cards/card6.jpg');
		game.load.image('card7img', 'assets/cards/card7.jpg');
		game.load.image('card8img', 'assets/cards/card8.jpg');
		game.load.image('card9img', 'assets/cards/card9.jpg');
		game.load.image('card10img', 'assets/cards/card10.jpg');
		game.load.image('card11img', 'assets/cards/card11.jpg');
		game.load.image('card12img', 'assets/cards/card12.jpg');
		game.load.image('card13img', 'assets/cards/card13.jpg');
	},
	
	create: function () {
		game.state.start('menu');
	}

};