var back;
var board1_back;
var board2_back;
var player1_back;
var player2_back;
var turn;
var hp1;
var hp2;
var hp1disp;
var hp2disp;
var mana1;
var mana1tot;
var mana1disp;
var mana2;
var mana2tot;
var mana2disp;
var manaplayedthisturn;
var select;
var select1img;
var select2img;
var topdeck1;
var topdeck2;
var deck1shuff;
var deck2shuff;
var deck1leftdisp;
var deck2leftdisp;
var hand1nb;
var hand2nb;
var hand1;
var hand2;
var hand1img;
var hand2img;
var board1nb;
var board2nb;
var board1;
var board2;
var board1img;
var board2img;
 
var gameState = {
	
	create: function () {

		//Disp Background
		back = game.add.image(0, 0, 'game_background');
		back.inputEnabled=true;
		back.events.onInputDown.add(this.selection.bind(this,'back',0), this);
		
		//Disp Players Back
		player1_back = game.add.image(50, 360, 'player1');
		player1_back.inputEnabled=true;
		player1_back.events.onInputDown.add(this.selection.bind(this,'player1',0), this);
		player2_back = game.add.image(50, 140, 'player2');
		player2_back.inputEnabled=true;
		player2_back.events.onInputDown.add(this.selection.bind(this,'player2',0), this);
		
		//Disp Boards Back
		board1_back = game.add.image(220, 320, 'board1');
		board1_back.inputEnabled=true;
		board1_back.events.onInputDown.add(this.selection.bind(this,'board_back1',0), this);
		board2_back = game.add.image(220, 100, 'board2');
		board2_back.inputEnabled=true;
		board2_back.events.onInputDown.add(this.selection.bind(this,'board_back2',0), this);

		//Init Turn
		turn = 0;

		//Init HP
		hp1 = 25;
		hp2 = 25;

		//Disp HP
		hp1disp = game.add.text(60, 410, '', {font: "20px Arial", fill: "#ffffff"});
		hp2disp = game.add.text(60, 190, '', {font: "20px Arial", fill: "#ffffff"});

		//Init Mana
		mana1 = 0;
		mana2 = 0;
		mana1tot = 0;
		mana2tot = 0;
		manaplayedthisturn = 0;

		//Disp Mana
		mana1disp = game.add.text(60, 380, '', {font: "20px Arial", fill: "#ffffff"});
		mana2disp = game.add.text(60, 220, '', {font: "20px Arial", fill: "#ffffff"});

		//Init selectors
		select = ['none',0];
		select1img = game.add.image(0, 0, 'select');
		select1img.scale.setTo(0.25,0.25);
		select1img.visible = false;
		select2img = game.add.image(0, 0, 'select');
		select2img.scale.setTo(0.25,0.25);
		select2img.tint = 0x2080FF;
		select2img.visible = false;

		//Init Decks
		topdeck1 = startHandnb;
		topdeck2 = startHandnb;
		deck1shuff = new Array(decknbmax);
		deck2shuff = new Array(decknbmax);
		for (var i=0;i<decknbmax;i++){
			deck1shuff[i] = deck1[i];
			deck2shuff[i] = deck2[i];
		}
		Phaser.ArrayUtils.shuffle(deck1shuff);
		Phaser.ArrayUtils.shuffle(deck2shuff);
		
		//Disp Decks
		deck1leftdisp = game.add.text(60, 440, '', {font: "20px Arial", fill: "#ffffff"});
		deck2leftdisp = game.add.text(60, 160, '', {font: "20px Arial", fill: "#ffffff"});

		//Init Hands
		hand1nb = startHandnb;
		hand2nb = startHandnb;
		hand1 = new Array(handnbmax);
		hand2 = new Array(handnbmax);
		for (var i=0;i<startHandnb;i++){
			hand1[i] = deck1shuff[i];
			hand2[i] = deck2shuff[i];
		}
		
		//Disp Hands
		hand1img = new Array(boardnbmax);
		for (var i=0;i<boardnbmax;i++){
			hand1img[i] = game.add.image(20+70*i, 540, 'cardtemp');
			hand1img[i].scale.setTo(0.25,0.25);
			hand1img[i].inputEnabled = true;
			hand1img[i].events.onInputDown.add(this.dispBigPreview.bind(this,0,i), this);
			hand1img[i].events.onInputOver.add(this.dispBigPreview.bind(this,0,i), this);
			hand1img[i].events.onInputDown.add(this.selection.bind(this,'hand1',i), this);
		}
		this.dispHand1();
		hand2img = new Array(boardnbmax);
		for (var i=0;i<boardnbmax;i++){
			hand2img[i] = game.add.image(20+70*i, 10, 'cardtemp');
			hand2img[i].scale.setTo(0.25,0.25);
			hand2img[i].inputEnabled = true;
			hand2img[i].events.onInputDown.add(this.dispBigPreview.bind(this,1,i), this);
			hand2img[i].events.onInputOver.add(this.dispBigPreview.bind(this,1,i), this);
			hand2img[i].events.onInputDown.add(this.selection.bind(this,'hand2',i), this);
		}
		this.dispHand2();
		
		//Init Boards
		board1nb = 0;
		board2nb = 0;
		board1 = new Array(boardnbmax);
		board2 = new Array(boardnbmax);

		//Disp Boards
		board1img = new Array(boardnbmax);
		for (var i=0;i<boardnbmax;i++){
			board1img[i] = game.add.image(230+70*(i%6), 330+100*Math.floor(i/6), 'cardtemp');
			board1img[i].scale.setTo(0.25,0.25);
			board1img[i].inputEnabled = true;
			board1img[i].events.onInputDown.add(this.dispBigPreview.bind(this,2,i), this);
			board1img[i].events.onInputOver.add(this.dispBigPreview.bind(this,2,i), this);
			board1img[i].events.onInputDown.add(this.selection.bind(this,'board1',i), this);
		}
		this.dispBoard1();
		board2img = new Array(boardnbmax);
		for (var i=0;i<boardnbmax;i++){
			board2img[i] = game.add.image(230+70*(i%6), 210-100*Math.floor(i/6), 'cardtemp');
			board2img[i].scale.setTo(0.25,0.25);
			board2img[i].inputEnabled = true;
			board2img[i].events.onInputDown.add(this.dispBigPreview.bind(this,3,i), this);
			board2img[i].events.onInputOver.add(this.dispBigPreview.bind(this,3,i), this);
			board2img[i].events.onInputDown.add(this.selection.bind(this,'board2',i), this);
		}
		this.dispBoard2();

		//Disp Big Preview
		bigPreview = game.add.image(1024-20-243,(640-338)/2, 'cardtemp');
		bigPreview.visible = false;	
		
		//Button Magic
		game.add.button(game.world.width-193-8, 8, 'button', this.changeTurn, this, 2, 1, 0);
		
		//Button Fullscreen
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8, 'buttonfull', gofull, this, 1, 0);
		button.scale.setTo(0.5,0.5);
	},
	
	update: function () {
		
	},
	
	changeTurn: function() {
		hp2--;
		manaplayedthisturn = 0;
		if(turn==0){
			turn = 1;
			mana2tot++;
			mana2=mana2tot;
			this.cpuTurn();
		}else{
			turn = 0;
			mana1tot++;
			mana1=mana1tot;
		}
		this.dispAll();
	},
	
	cpuTurn: function() {
		this.playCard(1,0,board2nb);
		this.changeTurn();
	},
	
	dispAll: function() {
		this.dispHand1();
		this.dispHand2();
		this.dispBoard1();
		this.dispBoard2();
	},
	
	dispHand1: function() {
		for (var i=0;i<handnbmax;i++){
			if (i<hand1nb){
				dispCard(hand1img[i],hand1[i]);
				hand1img[i].visible=true;
			}else{
				hand1img[i].visible=false;
			}
		}
	},
	
	dispHand2: function(){
		for (var i=0;i<handnbmax;i++){
			if (i<hand2nb){
				dispCard(hand2img[i],hand2[i]);
				hand2img[i].visible=true;
			}else{
				hand2img[i].visible=false;
			}
		}
	},
	
	dispBoard1: function(){
		hp1disp.text = "HP : " + hp1;
		var cardsleft = decknbmax-topdeck1;
		deck1leftdisp.text = "Cards left : " + cardsleft;
		mana1disp.text = "Mana : " + mana1 + "/" + mana1tot;
		for (var i=0;i<boardnbmax;i++){
			if (i<board1nb){
				dispCard(board1img[i],board1[i]);
				board1img[i].visible=true;
			}else{
				board1img[i].visible=false;
			}
		}
	},
	
	dispBoard2: function(){
		if (hp2<=0) this.Win();
		hp2disp.text = "HP : " + hp2;
		var cardsleft = decknbmax-topdeck2;
		deck2leftdisp.text = "Cards left : " + cardsleft;
		mana2disp.text = "Mana : " + mana2 + "/" + mana2tot;
		for (var i=0;i<boardnbmax;i++){
			if (i<board2nb){
				dispCard(board2img[i],board2[i]);
				board2img[i].visible=true;
			}else{
				board2img[i].visible=false;
			}
		}
	},
	
	dispBigPreview: function(h1h2b1b2,i){
		switch(h1h2b1b2){
			case 0 : dispCard(bigPreview,hand1[i]); break;
			case 1 : dispCard(bigPreview,hand2[i]); break;
			case 2 : dispCard(bigPreview,board1[i]); break;
			case 3 : dispCard(bigPreview,board2[i]); break;
			default :
		}
		bigPreview.visible = true;
	},
	
	selection: function(src,i){
		switch (src){
			case 'hand1' :
				if(select1img.visible){
					switch (select[0]){
						case 'hand1' :
							if (select[1]==i){
								this.dispTargets(0);
								select1img.visible = false;
							}else{
								select1img.x = hand1img[i].x-2;
								select1img.y = hand1img[i].y-2;
								select[1]=i;
								this.dispTargets(hand1[i]);
							}
						break;
						case 'board_back1' :
							this.dispTargets(0);
							select1img.visible = false;
						break;
						default:
							this.dispTargets(0);
							select1img.visible = false;
					}
				}else{
					select1img.visible=true;
					select1img.x = hand1img[i].x-2;
					select1img.y = hand1img[i].y-2;
					select = ['hand1',i];
					this.dispTargets(hand1[i]);
				}	
			break;
			case 'board_back1' :
				if(select1img.visible){
					switch (select[0]){
						case 'hand1' :
							select1img.visible = false;
							this.playCard(0,select[1],board1nb);
							this.dispTargets(0);
						break;
						case 'board_back1' :
							select1img.visible = false;
							this.dispTargets(0);
						break;
						default:
							select1img.visible = false;
							this.dispTargets(0);
					}
				}else{
				}
			break;
			default :
				if(select1img.visible){
					select1img.visible=false;
				}
				this.dispTargets(0);
		}
	},
	
	tinter: function(a,b,c,d,e,f,g,h){
		player1_back.tint = a;
		player2_back.tint = b;
		board1_back.tint = c;
		board2_back.tint = d;
		for (var i=0;i<handnbmax;i++){
			hand1img[i].tint = e;
			hand2img[i].tint = f;
		}
		for (var i=0;i<handnbmax;i++){
			board1img[i].tint = g;
			board2img[i].tint = h;
		}
	},
	
	dispTargets: function(card){
		if (card==0){
			this.tinter(0xFFFFFF,0xFFFFFF,0xFFFFFF,0xFFFFFF,0xFFFFFF,0xFFFFFF,0xFFFFFF,0xFFFFFF);
		}else{
			switch(card.target){
			case 'Board' :
				this.tinter(0x303030,0x303030,0xFFFFFF,0x303030,0x303030,0x303030,0x303030,0x303030);
			break;
			case 'AnyChar' :
				this.tinter(0xFFFFFF,0xFFFFFF,0x303030,0x303030,0x303030,0x303030,0xFFFFFF,0xFFFFFF);
			break;
			case 'FriendlyCrea' :
				this.tinter(0x303030,0x303030,0x303030,0x303030,0x303030,0x303030,0xFFFFFF,0x303030);
			break;
			case 'EnemyPlayer' :
				this.tinter(0x303030,0xFFFFFF,0x303030,0x303030,0x303030,0x303030,0x303030,0x303030);
			break;
			default :
			}
		}
		this.dispAll();
	},
	
	Win: function () {
		game.state.start('win');
	},
	
	playCard: function (player,nb,i) {
		if (player == 0){
			if (hand1nb>0){
				if (hand1[nb].mana<=mana1){
					mana1 -= hand1[nb].mana;
					hand1nb--;
					board1[i] = hand1[nb];
					board1nb++;
					for (var k=nb;k<hand1nb;k++)
						hand1[k] = hand1[k+1];
				}
			}
		}else{
			if (hand2nb>0){
				if (hand2[nb].mana<=mana2){
					mana2 -= hand2[nb].mana;
					hand2nb--;
					board2[i] = hand2[nb];
					board2nb++;
					for (var k=nb;k<hand2nb;k++)
						hand2[k] = hand2[k+1];
				}
			}
		}
		this.dispAll();
	}

};