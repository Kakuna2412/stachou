var previewgroup;
var previewnb;
var preview;
var previewname;
var previewimg;
var deck1nb;
var deck1nbdisp;
var deck1;
var deck1txt;
var deck1img;
var deck2;

var deckbuildState = {
	
	create: function () {
		
		game.add.image(0, 0, 'deckbuild_background');
		
		previewgroup = game.add.group(); //previewgroup.create(x,y,'img');sprite
		preview = new Array(12);
		previewname = new Array(12);
		previewimg = new Array(12);
		previewnb = 0;
		for (var i=0;i<12;i++){
			previewname[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			previewimg[i] = game.add.image(400+130*(i%4), 100+180*(Math.floor(i/4)), previewname[i]);
			previewimg[i].tint = 0xFFFFFF;
			previewimg[i].anchor.set(0, 0);
			previewimg[i].inputEnabled = true;
			previewimg[i].events.onInputDown.add(this.addDeck.bind(this,i), this);
		}
		this.dispPreview();
		
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
		
		game.add.button(20, 500, 'buttonauto', this.autoDeck, this, 2, 1, 0);

		deck2 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1)];
		this.dispDeck();
		
		game.add.button(game.world.width-193-8, 8, 'button', this.startGame, this, 2, 1, 0);
		
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8-64, 'buttonfull', this.previewDown, this, 1, 0);
		button.scale.setTo(0.5,0.5);
		var button = game.add.button(game.world.width-32-8, 150, 'buttonfull', this.previewUp, this, 1, 0);
		button.scale.setTo(0.5,0.5);
		
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8, 'buttonfull', gofull, this, 1, 0);
		button.scale.setTo(0.5,0.5);
	},
	
	previewDown: function() {
		if (previewnb+12<nb_cards)
			previewnb = previewnb+12;
		this.dispPreview();
	},
	
	previewUp: function() {
		if (previewnb>0)
			previewnb = previewnb-12;
		this.dispPreview();
	},
	
	dispPreview: function() {
		for (var i=0;i<12;i++){
			if (previewnb+i<nb_cards){
				preview[i] = new Card(previewnb+i);
				previewname[i].text = preview[i].name;
				previewimg[i].events.onInputDown.removeAll(this);
				previewimg[i].events.onInputDown.add(this.addDeck.bind(this,previewnb+i), this);
			}else{
				previewname[i].text = '';
				previewimg[i].events.onInputDown.removeAll(this);
			}
		}
	},
	
	autoDeck: function() {
		for (var i=deck1nb;i<10;i++)
			this.addDeck(Math.floor(Math.random()*nb_cards));
		this.dispDeck();
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
		deck1nbdisp.text = deck1nb + " out of 10";
		for(var i=0;i<10;i++){
			if (i<deck1nb)
				deck1txt[i].text = deck1[i].name;
			else
				deck1txt[i].text = '';
		}
	},
	
	update: function () {

	},
	
	startGame: function () {
		if (arguments[2] && (deck1nb == 10))
			game.state.start('game');
	}

};