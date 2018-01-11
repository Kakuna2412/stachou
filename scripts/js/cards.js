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

var nb_cards = 13;
var names = ['card1', 'card2', 'card3', 'card4','card5', 'card6', 'card7', 'card8','card9', 'card10', 'card11','card12', 'card13'];
var images = ['card1img', 'card2img', 'card3img', 'card4img', 'card5img', 'card6img', 'card7img', 'card8img', 'card9img', 'card10img', 'card11img', 'card12img', 'card13img'];
var types = ['creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature', 'creature'];
var manas = [1,2,3,4,5,6,7,8,9,10,10,10,10];
var atks = [2,3,3,4,5,6,7,8,9,10,10,10,10];
var defs = [1,2,4,5,6,7,8,9,10,11,10,10,10];
var others = [[],[],[],[],[],[],[],[],[],[],[],[],[]];