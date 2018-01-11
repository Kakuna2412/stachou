var deck1 = null;
var deck2 = null;

var deckbuildState = {
	
	create: function () {
		
		deck1 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1), new Card(1), new Card(2), new Card(2), new Card(3)];
		deck2 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1)];
		
		var button = game.add.button(game.world.width-193-8, 8, 'button', '', this, 2, 1, 0);
		button.onInputUp.add(this.Win,this);
		
		var button = game.add.button(game.world.width-64-8, game.world.height-64-8, 'buttonfull', gofull, this, 1, 0);
	},
	
	update: function () {

	},
	
	Win: function () {
		if (arguments[2])
			game.state.start('game');
	}

};