 var deck1shuff;
 var deck2shuff;
 var hp1;
 var hp2;
 var hp1disp;
 var hp2disp;
 var hand1nb;
 var hand2nb;
 var hand1;
 var hand2;
 var topdeck1;
 var topdeck2;
 var board1;
 var board2;
 var board1nb;
 var board2nb;
 var hand1img;
 var hand2img;
 var selectHid;
 var selectimg;
 var board1img;
 var board2img;
 
 var gameState = {
	
	create: function () {
		
		var back = game.add.image(0, 0, 'deckbuild_background');
		back.inputEnabled=true;
		back.events.onInputDown.add(this.selectBoard, this);
		selectimg = game.add.image(0, 0, 'select');
		selectimg.scale.setTo(0.25,0.25);
		selectimg.visible = false;
		board1nb = 0;
		board2nb = 0;
		deck1shuff = deck1;
		deck2shuff = deck2;
		Phaser.ArrayUtils.shuffle(deck1shuff);
		Phaser.ArrayUtils.shuffle(deck2shuff);
		hp1 = 25;
		hp2 = 25;
		hp1disp = game.add.text(90, 410, '', {font: "20px Arial", fill: "#ffffff"});
		hp2disp = game.add.text(90, 190, '', {font: "20px Arial", fill: "#ffffff"});
		hand1 = new Array(12);
		hand2 = new Array(12);
		hand1nb = 7;
		hand2nb = 7;
		for (var i=0;i<7;i++){
			hand1[i] = deck1shuff[i];
			hand2[i] = deck2shuff[i];
		}
		topdeck1 = 7;
		topdeck2 = 7;
		
		hand1img = new Array(12);
		for (var i=0;i<12;i++){
			hand1img[i] = game.add.image(20+70*i, 540, 'cardtemp');
			hand1img[i].scale.setTo(0.25,0.25);
			hand1img[i].inputEnabled = true;
			hand1img[i].events.onInputDown.add(this.dispBigPreview.bind(this,0,i), this);
			hand1img[i].events.onInputOver.add(this.dispBigPreview.bind(this,0,i), this);
			hand1img[i].events.onInputDown.add(this.selectHand.bind(this,i), this);
		}
		this.dispHand1();
		
		hand2img = new Array(12);
		for (var i=0;i<12;i++){
			hand2img[i] = game.add.image(20+70*i, 10, 'cardtemp');
			hand2img[i].scale.setTo(0.25,0.25);
			hand2img[i].inputEnabled = true;
			hand2img[i].events.onInputDown.add(this.dispBigPreview.bind(this,1,i), this);
			hand2img[i].events.onInputOver.add(this.dispBigPreview.bind(this,1,i), this);
		}
		this.dispHand2();
		
		board1 = new Array(12);
		board2 = new Array(12);
		
		board1img = new Array(12);
		for (var i=0;i<12;i++){
			board1img[i] = game.add.image(230+70*(i%6), 330+100*Math.floor(i/6), 'cardtemp');
			board1img[i].scale.setTo(0.25,0.25);
			board1img[i].inputEnabled = true;
			board1img[i].events.onInputDown.add(this.dispBigPreview.bind(this,2,i), this);
			board1img[i].events.onInputOver.add(this.dispBigPreview.bind(this,2,i), this);
		}
		this.dispBoard1();
		
		board2img = new Array(12);
		for (var i=0;i<12;i++){
			board2img[i] = game.add.image(230+70*(i%6), 210-100*Math.floor(i/6), 'cardtemp');
			board2img[i].scale.setTo(0.25,0.25);
			board2img[i].inputEnabled = true;
			board2img[i].events.onInputDown.add(this.dispBigPreview.bind(this,3,i), this);
			board2img[i].events.onInputOver.add(this.dispBigPreview.bind(this,3,i), this);
		}
		this.dispBoard2();
		
		bigPreview = game.add.image(1024-20-243,(640-338)/2, 'cardtemp');
		bigPreview.visible = false;		
		
		game.add.button(game.world.width-193-8, 8, 'button', this.Win, this, 2, 1, 0);
		
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8, 'buttonfull', gofull, this, 1, 0);
		button.scale.setTo(0.5,0.5);
	},
	
	update: function () {
		
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
	
	dispHand1: function(){
		for (var i=0;i<12;i++){
			if (i<hand1nb){
				this.dispCard(hand1img[i],hand1[i]);
				hand1img[i].visible=true;
			}else{
				hand1img[i].visible=false;
			}
		}
	},
	
	dispHand2: function(){
		for (var i=0;i<12;i++){
			if (i<hand2nb){
				this.dispCard(hand2img[i],hand2[i]);
				hand2img[i].visible=true;
			}else{
				hand2img[i].visible=false;
			}
		}
	},
	
	dispBoard1: function(){
		hp1disp.text = hp1 + "";
		for (var i=0;i<12;i++){
			if (i<board1nb){
				this.dispCard(board1img[i],board1[i]);
				board1img[i].visible=true;
			}else{
				board1img[i].visible=false;
			}
		}
	},
	
	dispBoard2: function(){
		hp2disp.text = hp2 + "";
		for (var i=0;i<12;i++){
			if (i<board2nb){
				this.dispCard(board2img[i],board2[i]);
				board2img[i].visible=true;
			}else{
				board2img[i].visible=false;
			}
		}
	},
	
	dispBigPreview: function(h1h2b1b2,i){
		switch(h1h2b1b2){
			case 0 : this.dispCard(bigPreview,hand1[i]); break;
			case 1 : this.dispCard(bigPreview,hand2[i]); break;
			case 2 : this.dispCard(bigPreview,board1[i]); break;
			case 3 : this.dispCard(bigPreview,board2[i]); break;
			default :
		}
		bigPreview.visible = true;
	},
	
	selectHand: function(i){
		if(selectimg.visible)
			selectimg.visible=false;
		else{
			selectimg.visible=true;
			selectimg.x = hand1img[i].x-2;
			selectimg.y = hand1img[i].y-2;
			selectHid = i;
		}
	},
	
	selectBoard: function(){
		if(selectimg.visible){
			selectimg.visible=false;
			this.playCard(0,selectHid,board1nb);
		}
	},
	
	Win: function () {
		if (arguments[2])
			game.state.start('win');
	},
	
	playCard: function (player,nb,i) {
		if (player == 0){
			if (hand1nb>0){
				hand1nb--;
				board1[i] = hand1[nb];
				board1nb++;
				for (var k=nb;k<hand1nb;k++)
					hand1[k] = hand1[k+1];
			}
		}else{
			if (hand2nb>0){
				hand2nb--;
				board2[i] = hand2[nb];
				board2nb++;
				for (var k=nb;k<hand2nb;k++)
					hand2[k] = hand2[k+1];
			}
		}
		this.dispHand1();
		this.dispHand2();
		this.dispBoard1();
		this.dispBoard2();
	}

};