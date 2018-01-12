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
var names = ['Torch', 'Oni Ronin', 'Grenadin Drone', 'Rakano Outlaw','Pyre Adept', 'Golem3', 'Detonate', 'Golem4','Golem5', 'Golem6', 'Golem7','Golem8', 'Golem9'];
var images = ['card1img', 'card2img', 'card3img', 'card4img', 'card5img', 'card6img', 'card7img', 'card8img', 'card9img', 'card10img', 'card11img', 'card12img', 'card13img'];
var types = ['Spell', 'Creature', 'Creature', 'Creature', 'Creature', 'Creature', 'Spell', 'Creature', 'Creature', 'Creature', 'Creature', 'Creature', 'Creature'];
var manas = [1,1,1,2,2,3,4,4,5,6,7,8,9];
var atks = [0,2,1,2,3,3,0,4,5,6,7,8,9];
var defs = [0,1,1,2,1,3,0,4,5,6,7,8,9];
var others = [[],[],[],[],[],[],[],[],[],[],[],[],[]];