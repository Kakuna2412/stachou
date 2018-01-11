var winState = {
	
	create: function () {
		
		var fullscreenKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
		fullscreenKey.onDown.add(gofull, this);
		
		var winLabel = game.add.text(80,150,'You won ! Press Z',{font: '30px Courier', fill:'#ffffff'});
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
		wkey.onDown.addOnce(this.restart,this);
	},
	
	restart: function () {
		game.state.start('menu');
	}

};