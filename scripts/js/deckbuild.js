var deck1;
var deck2;
var preview;
var previewdisp;

var deckbuildState = {
	
	create: function () {
		
		preview = new Array(nb_cards);
		for (var i=0;i<nb_cards;i++){
			preview[i] = new Card(i);
		}
		previewdisp = new Array(nb_cards);
		for (var i=0;i<nb_cards;i++){
			previewdisp[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			var previewdisp_tmp = game.add.image(20, 20+40*i, previewdisp[i]);
			previewdisp_tmp.tint = 0xFFFFFF;
			previewdisp_tmp.anchor.set(0, 0);
			previewdisp[i].text = preview[i].name;
		}
		
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