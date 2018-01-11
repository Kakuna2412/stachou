var loadState = {
	
	preload: function () {
		game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		//game.forceSingleUpdate = true;
		
		var loadingLabel = game.add.text(80,150,'loading...',{font: '30px Courier', fill:'#ffffff'});
		
		game.load.script('particlestorm', 'scripts/particle-storm.min.js');

		game.load.image('font', 'assets/menu/font.png');	
		game.load.image('sky', 'assets/menu/sky.jpg');
		game.load.image('cloud', 'assets/menu/stach_tsp.png');
		game.load.image('star', 'assets/menu/pixel4x4_yellow.png');
		
		game.load.image('card1img', 'assets/play/card1.jpg');
		game.load.image('card2img', 'assets/play/card2.jpg');
		game.load.image('card3img', 'assets/play/card3.jpg');
		game.load.image('card4img', 'assets/play/card4.jpg');
	},
	
	create: function () {
		game.state.start('menu');
	}

};