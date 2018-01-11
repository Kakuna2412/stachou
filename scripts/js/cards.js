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

var nb_cards = 4;
var names = ['card1', 'card2', 'card3', 'card4'];
var images = ['card1img', 'card2img', 'card3img', 'card4img'];
var types = ['creature', 'creature', 'creature', 'creature'];
var manas = [1,2,3,4];
var atks = [2,3,3,4];
var defs = [1,2,4,5];
var others = [[],[],[],[]];