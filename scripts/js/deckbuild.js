var preview;
var previewtxt;
var previewimg;
var deck1nb;
var deck1nbdisp;
var deck1;
var deck1txt;
var deck1img;
var deck2;

var deckbuildState = {
	
	create: function () {
		
		preview = new Array(nb_cards);
		for (var i=0;i<nb_cards;i++){
			preview[i] = new Card(i);
		}
		previewtxt = new Array(nb_cards);
		previewimg = new Array(nb_cards);
		for (var i=0;i<nb_cards;i++){
			previewtxt[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			previewimg[i] = game.add.image(520, 20+40*i, previewtxt[i]);
			previewimg[i].tint = 0xFFFFFF;
			previewimg[i].anchor.set(0, 0);
			previewtxt[i].text = preview[i].name;
			previewimg[i].inputEnabled = true;
			previewimg[i].events.onInputDown.add(this.addDeck.bind(this,i), this);
		}
		
		deck1nb = 0;
		deck1nbdisp = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
		var deck1nbdisp_tmp = game.add.image(20, 600, deck1nbdisp);
		deck1nbdisp_tmp.tint = 0x6060FF;
		deck1nbdisp_tmp.anchor.set(0, 0);
		
		deck1 = new Array(10);
		deck1txt = new Array(10);
		deck1img = new Array(10);
		for (var i=0;i<10;i++){
			deck1txt[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			deck1img[i] = game.add.image(20, 20+40*i, deck1txt[i]);
			deck1img[i].tint = 0x60FFFF;
			deck1img[i].anchor.set(0, 0);
			deck1img[i].inputEnabled = true;
			deck1img[i].events.onInputDown.add(this.removeDeck.bind(this,i), this);
			deck1txt[i].text = '';
		}
		//deck1nb = 10;
		//deck1 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1), new Card(1), new Card(2), new Card(2), new Card(3)];
		deck2 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1)];
		this.dispDeck();
		
		var button = game.add.button(game.world.width-193-8, 8, 'button', this.Win, this, 2, 1, 0);
		
		var button = game.add.button(game.world.width-64-8, game.world.height-64-8, 'buttonfull', gofull, this, 1, 0);
	},
	
	addDeck: function(k) {
		if (deck1nb==0)
			deck1[0] = new Card(k);
		if (deck1nb<10){
			var put = 0;
			for (var i=deck1nb-1;i>=0;i--){
				if (!put){
					if (k>deck1[i].id){
						deck1[i+1] = new Card(k);
						put = 1;
					}else{
						deck1[i+1] = deck1[i];
						if(i==0)
							deck1[i] = new Card(k);
					}
				}
			}
			deck1nb++;
		}
		this.dispDeck();
	},
	
	removeDeck: function(k) {
		if (deck1nb>0 && k<deck1nb){
			deck1nb--;
			for (var i=k;i<deck1nb;i++)
				deck1[i] = deck1[i+1];
		}
		this.dispDeck();
	},
	
	dispDeck: function() {
		deck1nbdisp.text = "" + deck1nb;
		for(var i=0;i<10;i++){
			if (i<deck1nb)
				deck1txt[i].text = deck1[i].name;
			else
				deck1txt[i].text = '';
		}
	},
	
	update: function () {

	},
	
	Win: function () {
		if (arguments[2])
			game.state.start('game');
	}

};