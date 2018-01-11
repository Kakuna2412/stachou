var manager = null;
var emitter = null;
var font1, font2, font3 = null;

var menuState = {
		
	create: function () {
		
		var fullscreenKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
		fullscreenKey.onDown.add(gofull, this);
 
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
	
		font3 = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
		var font3_add = game.add.image(game.world.width-8, game.world.height-8, font3);
		font3_add.tint = 0x6060FF;
		font3_add.anchor.set(1, 1);
		font3_add.scale.setTo(0.5,0.5);
		font3.text = "F : fullscreen";
 
		emitter.addToWorld();
 
		emitter.emit('basic', [0, 800], 700, { repeat: -1, frequency: 2000 });
	
		line = manager.createLineZone(game.world.centerX-40, game.world.centerY, game.world.centerX+40, game.world.centerY);	
		emitter.emit('stars', 0, 0, { zone: line, total: 1, repeat: -1, frequency: 100 });
	
		font1 = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
		var font1_add = game.add.image(game.world.centerX, game.world.centerY-16, font1);
		font1_add.tint = 0xFFFFFF;
		font1_add.anchor.set(0.5, 1);

		var nameLabel = game.add.text(80,150,'Press Z',{font: '30px Courier', fill:'#ffffff'});
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
		wkey.onDown.addOnce(this.start,this);
	},
	
	update: function () {
		font1.text = "Stachou";
		font2.text = "x " + game.input.x + " y " + game.input.y;
	},
	
	render: function () {
		//emitter.debug(0, 0);
	},
	
	start: function () {
		game.state.start('deckbuild');
	}

};