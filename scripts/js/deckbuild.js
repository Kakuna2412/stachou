var previewnb;
var previewnbdisp;
var preview;
var previewimg;
var bigPreview;
var deck1nb;
var deck1nbdisp;
var deck1;
var deck1img;
var deck2;

var deckbuildState = {
	
	create: function () {
		
		game.add.image(0, 0, 'deckbuild_background');
		
		previewnbdisp = game.add.text(220, 600, '', {font: "20px Arial", fill: "#ffffff"});
		
		preview = new Array(12);
		previewimg = new Array(12);
		previewnb = 0;
		for (var i=0;i<12;i++){
			previewimg[i] = game.add.image(230+130*(i%4), 40+180*(Math.floor(i/4)), 'cardtemp');
			previewimg[i].scale.setTo(0.5,0.5);
			previewimg[i].inputEnabled = true;
			previewimg[i].events.onInputDown.add(this.dispBigPreview.bind(this,1,i), this);
			previewimg[i].events.onInputOver.add(this.dispBigPreview.bind(this,1,i), this);
			previewimg[i].events.onInputDown.add(this.addDeck.bind(this,previewnb+i), this);
		}
		this.dispPreview();
		
		bigPreview = game.add.image(1024-20-243,(640-338)/2, 'cardtemp');
		bigPreview.visible = false;
		
		game.add.button(750, 540, 'buttondown', this.previewDown, this, 1, 0);
		game.add.button(750, 40, 'buttonup', this.previewUp, this, 1, 0);
		
		deck1nb = 0;
		deck1nbdisp = game.add.text(20, 20, '', {font: "20px Arial", fill: "#ffffff"});
		
		deck1 = new Array(10);
		deck1img = new Array(10);
		for (var i=0;i<10;i++){
			deck1img[i] = game.add.image(20, 50+42*i, 'card_added');
			deck1img[i].inputEnabled = true;
			deck1img[i].events.onInputDown.add(this.dispBigPreview.bind(this,0,i), this);
			deck1img[i].events.onInputOver.add(this.dispBigPreview.bind(this,0,i), this);
			deck1img[i].events.onInputDown.add(this.removeDeck.bind(this,i), this);
		}
		this.dispDeck();
		
		game.add.button(20, 500, 'buttonauto', this.autoDeck, this, 2, 1, 0);

		deck2 = [new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(0), new Card(1), new Card(1)];
		
		game.add.button(game.world.width-193-8, 8, 'button', this.startGame, this, 2, 1, 0);
		
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
		var previewnb_max = previewnb+12;
		if (previewnb_max>nb_cards) previewnb_max=nb_cards;
		previewnbdisp.text = previewnb+1 + "-" + previewnb_max + " out of " + nb_cards;
		for (var i=0;i<12;i++){
			if (previewnb+i<nb_cards){
				preview[i] = new Card(previewnb+i);
				this.dispCard(previewimg[i],preview[i]);
				previewimg[i].visible=true;
			}else{
				previewimg[i].visible=false;
			}
		}
	},
	
	dispBigPreview: function(deckprev,i) {
		if (deckprev==0)
			this.dispCard(bigPreview,deck1[i]);
		else
			this.dispCard(bigPreview,preview[i]);
		bigPreview.visible = true;
	},
	
	dispCard: function(cardimg,card) {
		cardimg.removeChildren();
		var img = game.add.image(20,40, card.image);
		cardimg.addChild(img);
		var name = game.add.text(21, 17, card.name, {font: "17px Arial", fill: "#000000"});
		cardimg.addChild(name);
		var mana = game.add.text(222, 17, card.mana, {font: "17px Arial", fill: "#000000"});
		mana.anchor.set(1,0);
		cardimg.addChild(mana);
		var type = game.add.text(21, 189, card.type, {font: "17px Arial", fill: "#000000"});
		cardimg.addChild(type);
		if (card.type=='Creature'){
			var atkdef = game.add.text(218, 328, card.atk + "/" + card.def, {font: "18px Arial", fill: "#000000"});
			atkdef.anchor.set(1,1);
			cardimg.addChild(atkdef);
		}
	},
	
	dispDeck: function() {
		deck1nbdisp.text = deck1nb + " out of 10";
		for(var i=0;i<10;i++){
			if (i<deck1nb){
				deck1img[i].removeChildren();
				var img = game.add.image(200,0, deck1[i].image);
				img.anchor.set(1,0);
				img.scale.setTo(40/148,40/148)
				deck1img[i].addChild(img);
				var name = game.add.text(10, 9, deck1[i].name, {font: "20px Arial", fill: "#000000"});
				deck1img[i].addChild(name);

				deck1img[i].visible=true;
			}else{
				deck1img[i].visible=false;
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
	
	update: function () {

	},
	
	startGame: function () {
		if (arguments[2] && (deck1nb == 10))
			game.state.start('game');
	}

};