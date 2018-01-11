var preview;
var previewtxt;
var previewimg;
var deck1nb;
var deck1nbdisp;
var deck1;
var deck1disp;
var deck2;

var deckbuildState = {
	
	create: function () {
		
		preview = new Array(nb_cards);
		for (var i=0;i<nb_cards;i++){
			preview[i] = new Card(i);
		}
		previewtxt = new Array(nb_cards);
		for (var i=0;i<nb_cards;i++){
			previewtxt[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			previewimg = game.add.image(520, 20+40*i, previewtxt[i]);
			previewimg.tint = 0xFFFFFF;
			previewimg.anchor.set(0, 0);
			previewtxt[i].text = preview[i].name;
			//previewimg.onDown.add(this.addDeck,this);
		}
		
		deck1nb = 0;
		deck1nbdisp = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
		var deck1nbdisp_tmp = game.add.image(20, 600, deck1nbdisp);
		deck1nbdisp_tmp.tint = 0x6060FF;
		deck1nbdisp_tmp.anchor.set(0, 0);
		
		deck1 = new Array(10);
		deck1disp = new Array(10);
		for (var i=0;i<10;i++){
			deck1disp[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			var deck1disp_tmp = game.add.image(20, 20+40*i, deck1disp[i]);
			deck1disp_tmp.tint = 0x60FFFF;
			deck1disp_tmp.anchor.set(0, 0);
			deck1disp[i].text = '';
		}
		deck1nb = 10;
		deck1 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1), new Card(1), new Card(2), new Card(2), new Card(3)];
		deck2 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1)];
		this.dispDeck();
		this.removeDeck(7);
		this.removeDeck(7);
		this.removeDeck(7);
		this.removeDeck(7);
		this.addDeck(0);
		this.addDeck(0);
		
		var button = game.add.button(game.world.width-193-8, 8, 'button', this.Win, this, 2, 1, 0);
		
		var button = game.add.button(game.world.width-64-8, game.world.height-64-8, 'buttonfull', gofull, this, 1, 0);
	},
	
	addDeck: function(k) {
		if (deck1nb<10){
			var put = 0;
			for (var i=deck1nb-1;i>=0;i--){
				if (!put){
					if (k>deck1[i].id){
						deck1[i+1] = new Card(k);
						put = 1;
					}else
						deck1[i+1] = deck1[i];
				}
			}
			deck1nb++;
			this.dispDeck();
		}
	},
	
	removeDeck: function(k) {
		if (deck1nb>0 && k<deck1nb){
			deck1nb--;
			for (var i=k;i<deck1nb;i++)
				deck1[i] = deck1[i+1];
			this.dispDeck();
		}
	},
	
	dispDeck: function() {
		for(var i=0;i<10;i++){
			if (i<deck1nb)
				deck1disp[i].text = deck1[i].name;
			else
				deck1disp[i].text = '';
		}
		deck1nbdisp.text = "" + deck1nb;
	},
	
	update: function () {

	},
	
	Win: function () {
		if (arguments[2])
			game.state.start('game');
	}

};