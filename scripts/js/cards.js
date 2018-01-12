function Card(id) {
	this.id = id;
	this.name = names[id];
	this.image = images[id];
    this.type = types[id];
    this.mana = manas[id];
    this.atk = atks[id];
	this.atkc = atks[id];
    this.def = defs[id];
	this.defc = defs[id];
	this.rarity = rarity[id];
	this.text = texts[id];
	this.textc = texts[id];
	this.target = targets[id];
	this.other = others[id];
	this.otherc = others[id];   
}

nb_cards = 13;
names = ['Mana', 'Torch', 'Oni Ronin', 'Grenadin Drone', 'Rakano Outlaw','Pyre Adept', 'Longsword', 'Wisdom', 'Detonate','Golem4', 'Golem5', 'Golem6','Golem7', 'Golem8'];
images = ['card0img', 'card1img', 'card2img', 'card3img', 'card4img', 'card5img', 'card6img', 'card7img', 'card8img', 'card9img', 'card10img', 'card11img', 'card12img', 'card13img'];
types = ['Mana', 'Instant', 'Creature', 'Creature', 'Creature', 'Creature', 'Weapon', 'Spell', 'Spell', 'Creature', 'Creature', 'Creature', 'Creature', 'Creature'];
manas = [0,1,1,1,2,2,2,3,4,4,5,6,7,8];
atks = [0,0,2,1,2,3,2,0,0,4,5,6,7,8];
defs = [0,0,1,1,2,1,2,0,0,4,5,6,7,8];
rarity = ['C','C','C','C','C','C','C','C','C','C','C','C','C'];
texts = ['','Deal 3 damage', 'Warcry', 'Summon a 1/1', 'Warcry\nQuickdraw', '', '', 'Draw 2 cards', 'Deal 4 damage to enemy\nplayer', '', '', '', '', ''];
targets = ['Board', 'AnyChar', 'Board', 'Board', 'Board', 'Board', 'FriendlyCrea', 'Board', 'EnemyPlayer', 'Board', 'Board', 'Board', 'Board', 'Board'];
others = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var myCollection = [20,4,4,4,4,4,4,4,3,2,1,0,1,1];

decknbmax = 30;
handnbmax = 12;
boardnbmax = 12;
startHandnb = 7;