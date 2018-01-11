function Card(id) {
	this.id = id;
	this.name = names[id];
	this.image = images[id];
    this.type = types[id];
    this.mana = manas[id];
    this.atk = atks[id];
    this.def = defs[id];
	this.other = others[id];   
}

names = ['card1', 'card2', 'card3', 'card4'];
images = ['card1img', 'card2img', 'card3img', 'card4img'];
types = ['creature', 'creature', 'creature', 'creature'];
manas = [1,2,3,4];
atks = [2,3,3,4];
defs = [1,2,4,5];
others = [[],[],[],[]];