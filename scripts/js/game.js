 var deck1shuff;
 var deck2shuff;
 var hp1;
 var hp2;
 var hand1nb;
 var hand2nb;
 var hand1;
 var hand2;
 var topdeck1;
 var topdeck2;
 var board1;
 var board2;
 var hand1disp;
 var hand2disp;
 
 var gameState = {
	
	create: function () {
		
		deck1shuff = deck1;
		deck2shuff = deck2;
		Phaser.ArrayUtils.shuffle(deck1shuff);
		Phaser.ArrayUtils.shuffle(deck2shuff);
		hp1 = 25;
		hp2 = 25;
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
		
		board1 = new Array(9);
		board2 = new Array(9);
		
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		wkey.onDown.add(this.playCard_,this);
		
		hand1disp = new Array(12);
		hand2disp = new Array(12);
		for (var i=0;i<12;i++){
			hand1disp[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			var hand1disp_tmp = game.add.image(20, 20+40*i, hand1disp[i]);
			hand1disp_tmp.tint = 0xFFFFFF;
			hand1disp_tmp.anchor.set(0, 0);
		}
		for (var i=0;i<12;i++){
			hand2disp[i] = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
			var hand2disp_tmp = game.add.image(276, 20+40*i, hand2disp[i]);
			hand2disp_tmp.tint = 0xFFFFFF;
			hand2disp_tmp.anchor.set(0, 0);
		}
		this.dispHands();

		//for (var i=0;i<3;i++){
		//	for (var j=0;j<3;j++){
		//		if (board1[i][j]==0)
		//			var winLabel = game.add.text(310+80*j,150+50*i,'-',{font: '30px Courier', fill:'#ffffff'});
		//		else
		//			var winLabel = game.add.text(310+80*j,150+50*i,board1[i][j].name,{font: '30px Courier', fill:'#ffffff'});
		//		if (board2[i][j]==0)
		//			var winLabel = game.add.text(610+80*j,150+50*i,'-',{font: '30px Courier', fill:'#ffffff'});
		//		else
		//			var winLabel = game.add.text(610+80*j,150+50*i,board2[i][j].name,{font: '30px Courier', fill:'#ffffff'});
		//	}
		//}
		
		game.add.button(game.world.width-193-8, 8, 'button', this.Win, this, 2, 1, 0);
		
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8, 'buttonfull', gofull, this, 1, 0);
		button.scale.setTo(0.5,0.5);
	},
	
	update: function () {
		
	},
	
	dispHands: function(){
		for (var i=0;i<12;i++){
			if(i<hand1nb)
				hand1disp[i].text = hand1[i].name;
			else
				hand1disp[i].text = '';
			if(i<hand2nb)
				hand2disp[i].text = hand2[i].name;
			else
				hand2disp[i].text = '';
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
				for (var k=nb;k<hand1nb;k++)
					hand1[k] = hand1[k+1];
			}
		}else{
			if (hand2nb>0){
				hand2nb--;
				board2[i] = hand2[nb];
				for (var k=nb;k<hand2nb;k++)
					hand2[k] = hand2[k+1];
			}
		}		
	},
	
	playCard_: function () {
		this.playCard(0,0,0);
	}	

};