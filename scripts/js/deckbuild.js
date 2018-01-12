var previewnb;
var previewnbdisp;
var preview;
var previewimg;
var bigPreview;
var deck1nb;
var deck1nbdiff;
var deck1nbdisp;
var deck1;
var deck1img;
var deck2;
var myCollectionRemain;

var deckbuildState = {
	
	create: function () {
		
		//Disp Background
		game.add.image(0, 0, 'deckbuild_background');
		
		//Init Collection
		myCollectionRemain = Array(nb_cards);
		for (var i=0;i<nb_cards;i++)
			myCollectionRemain[i] = myCollection[i];
		
		//Init Preview
		previewnb = 0;
		preview = new Array(12);
		
		//Disp Preview
		previewnbdisp = game.add.text(220, 600, '', {font: "20px Arial", fill: "#ffffff"});
		previewimg = new Array(12);
		for (var i=0;i<12;i++){
			previewimg[i] = game.add.image(230+130*(i%4), 40+180*(Math.floor(i/4)), 'cardtemp');
			previewimg[i].scale.setTo(0.5,0.5);
			previewimg[i].visible = false;
			previewimg[i].inputEnabled = true;
			previewimg[i].events.onInputDown.add(this.dispBigPreview.bind(this,1,i), this);
			previewimg[i].events.onInputOver.add(this.dispBigPreview.bind(this,1,i), this);
			previewimg[i].events.onInputDown.add(this.addDeck_.bind(this,i), this);
		}
		this.dispPreview();
		
		//Buttons Preview
		game.add.button(750, 540, 'buttondown', this.previewDown, this, 1, 0);
		game.add.button(750, 40, 'buttonup', this.previewUp, this, 1, 0);
		
		//Disp Big Preview
		bigPreview = game.add.image(1024-20-243,(640-338)/2, 'cardtemp');
		bigPreview.visible = false;
		
		//Init Deck
		deck1nb = 0;
		deck1nbdiff = 0;
		deck1 = new Array(decknbmax);
		
		//Disp Deck
		deck1nbdisp = game.add.text(20, 20, '', {font: "20px Arial", fill: "#ffffff"});
		deck1img = new Array(decknbmax);
		for (var i=0;i<decknbmax;i++){
			deck1img[i] = game.add.image(20+105*Math.floor(i/15), 50+32*(i%15), 'card_added');
			deck1img[i].inputEnabled = true;
			deck1img[i].events.onInputDown.add(this.dispBigPreview.bind(this,0,i), this);
			deck1img[i].events.onInputOver.add(this.dispBigPreview.bind(this,0,i), this);
			deck1img[i].events.onInputDown.add(this.removeDeck.bind(this,i), this);
		}
		this.dispDeck();
		
		//Buttons Deck
		game.add.button(48, 540, 'buttonauto', this.autoDeck, this, 2, 1, 0);

		//Init Deck 2
		deck2 = new Array(decknbmax);
		for (var i=0;i<decknbmax;i++)
			deck2[i] = new Card(0);
		
		//Button Fight
		game.add.button(game.world.width-193-8, 8, 'button', this.startGame, this, 2, 1, 0);
		
		//Button Fullscreen
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
		if (previewnb+1==previewnb_max)
			previewnbdisp.text = previewnb+1 + "/" + nb_cards;
		else
			previewnbdisp.text = previewnb+1 + "-" + previewnb_max + "/" + nb_cards;
		for (var i=0;i<12;i++){
			if (previewnb+i<nb_cards){
				preview[i] = new Card(previewnb+i);
				dispCard(previewimg[i],preview[i]);
				var myCollec = game.add.text(120, 280, myCollectionRemain[previewnb+i] + "/" + myCollection[previewnb+i], {font: "17px Arial", fill: "#000000"});
				previewimg[i].addChild(myCollec);
				if (myCollectionRemain[previewnb+i]==0)
					previewimg[i].tint = 0x303030;
				else
					previewimg[i].tint = 0xFFFFFF;
				previewimg[i].visible=true;
			}else{
				previewimg[i].visible=false;
			}
		}
	},
	
	dispBigPreview: function(deckprev,i) {
		if (deckprev==0)
			dispCard(bigPreview,deck1[i]);
		else
			dispCard(bigPreview,preview[i]);
		bigPreview.visible = true;
	},
	
	dispDeck: function() {
		deck1nbdisp.text = "Cards : " + deck1nb + "/" + decknbmax;
		for(var i=0;i<decknbmax;i++){
			if (i<deck1nb){
				deck1img[i].removeChildren();
				deck1img[i].scale.setTo(1/(1+Math.floor((deck1nb-1)/15)),0.75);
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
		var k = 0;
		for (var i=0;i<decknbmax;i++){
			if (myCollectionRemain[k]==0)
				k++;
			this.addDeck(Math.floor(k));
		}
		this.dispDeck();
	},
	
	addDeck_: function(k) {
		k += previewnb;
		this.addDeck(k);
	},
	
	addDeck: function(k) {
		if (myCollectionRemain[k]>0){
			if (deck1nb==0){
				deck1[0] = new Card(k);
				deck1nb++;
				myCollectionRemain[k]--;
			}else if (deck1nb<decknbmax){
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
				myCollectionRemain[k]--;
			}
		}
		this.dispDeck();
		this.dispPreview();
	},
	
	removeDeck: function(k) {
		myCollectionRemain[deck1[k].id]++;
		if (deck1nb>0 && k<deck1nb){
			deck1nb--;
			for (var i=k;i<deck1nb;i++)
				deck1[i] = deck1[i+1];
		}
		this.dispDeck();
		this.dispPreview();
	},
	
	update: function () {

	},
	
	startGame: function () {
		if (arguments[2] && (deck1nb == decknbmax))
			game.state.start('game');
	}

};