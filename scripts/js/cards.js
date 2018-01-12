function Card(id) {
	this.id = id;
	this.name = names[id];
	this.image = images[id];
    this.type = types[id];
    this.mana = manas[id];
    this.atk = atks[id];
    this.def = defs[id];
	this.text = texts[id];
	this.other = others[id];   
}

nb_cards = 13;
names = ['Torch', 'Oni Ronin', 'Grenadin Drone', 'Rakano Outlaw','Pyre Adept', 'Longsword', 'Wisdom', 'Detonate','Golem4', 'Golem5', 'Golem6','Golem7', 'Golem8'];
images = ['card1img', 'card2img', 'card3img', 'card4img', 'card5img', 'card6img', 'card7img', 'card8img', 'card9img', 'card10img', 'card11img', 'card12img', 'card13img'];
types = ['Instant', 'Creature', 'Creature', 'Creature', 'Creature', 'Weapon', 'Spell', 'Spell', 'Creature', 'Creature', 'Creature', 'Creature', 'Creature'];
manas = [1,1,1,2,2,2,3,4,4,5,6,7,8];
atks = [0,2,1,2,3,2,0,0,4,5,6,7,8];
defs = [0,1,1,2,1,2,0,0,4,5,6,7,8];
texts = ['Deal 3 damage', 'Warcry', 'Summon a 1/1', 'Warcry\nQuickdraw', '', '', 'Draw 2 cards', 'Deal 4 damage to enemy\nplayer', '', '', '', '', ''];
others = [[],[],[],[],[],[],[],[],[],[],[],[],[]];
var myCollection = [4,4,4,4,4,4,4,3,2,1,0,1,1];