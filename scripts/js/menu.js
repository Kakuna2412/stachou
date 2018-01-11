var manager = null;
var emitter = null;
var font1, font2, font3 = null;

var menuState = {
		
	create: function () {
		
		game.add.image(0, 0, 'sky');
 
		manager = this.game.plugins.add(Phaser.ParticleStorm);
 
		var data = {
			ignoreForce: true,
			lifespan: 6000,
			image: 'cloud',
			scale: { min: 0.1, max: 1 }
		};
 
		var stars = {
			ignoreScrollSpeed: true,
			lifespan: 4000,
			image: 'star',
			//sendToBack: true,
			vx: { min: -2, max: 2 },
			vy: -5
		};
 
		manager.addData('basic', data);
		manager.addData('stars', stars);
 
		emitter = manager.createEmitter();

		emitter.scrollSpeed.y = -3;
		emitter.force.y = 0.1;
 
		font2 = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
		var font2_add = game.add.image(game.world.centerX, game.world.centerY+32, font2);
		font2_add.tint = 0x60FFFF;
		font2_add.anchor.set(0.5, 1);
 
		emitter.addToWorld();
 
		emitter.emit('basic', [0, 800], 700, { repeat: -1, frequency: 2000 });
	
		line = manager.createLineZone(game.world.centerX-40, game.world.centerY, game.world.centerX+40, game.world.centerY);	
		emitter.emit('stars', 0, 0, { zone: line, total: 1, repeat: -1, frequency: 100 });
	
		font1 = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
		var font1_add = game.add.image(game.world.centerX, game.world.centerY-16, font1);
		font1_add.tint = 0xFFFFFF;
		font1_add.anchor.set(0.5, 1);

		var button = game.add.button(game.world.width-193-8, 8, 'button', '', this, 2, 1, 0);
		button.onInputUp.add(this.start,this);
		
		var button = game.add.button(game.world.width-64-8, game.world.height-64-8, 'buttonfull', gofull, this, 1, 0);
	},
	
	update: function () {
		font1.text = "Stachou";
		font2.text = "x " + game.input.x + " y " + game.input.y;
	},
	
	render: function () {
		//emitter.debug(0, 0);
	},
	
	start: function () {
		if (arguments[2])
			game.state.start('deckbuild');
	}

};