function gofull() {
	if (arguments[2]){
		if (game.scale.isFullScreen)
		{
			game.scale.stopFullScreen();
		}
		else
		{
			game.scale.startFullScreen(false);
		}
	}
}

function dispCard (cardimg,card) {
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
	if ((card.type=='Creature') || (card.type=='Weapon')){
		var atkdef = game.add.text(218, 328, card.atk + "/" + card.def, {font: "18px Arial", fill: "#000000"});
		atkdef.anchor.set(1,1);
		cardimg.addChild(atkdef);
	}
	var text = game.add.text(25, 215, card.text, {font: "17px Arial", fill: "#000000"});
	cardimg.addChild(text);
}