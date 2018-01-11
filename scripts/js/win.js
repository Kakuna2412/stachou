var winState = {
	
	create: function () {
		
		var winLabel = game.add.text(80,150,'You won !',{font: '30px Courier', fill:'#ffffff'});
		
		var button = game.add.button(game.world.width-193-8, 8, 'button', this.restart, this, 2, 1, 0);
		
		var button = game.add.button(game.world.width-64-8, game.world.height-64-8, 'buttonfull', gofull, this, 1, 0);
	},
	
	restart: function () {
		if (arguments[2])
			game.state.start('menu');
	}

};