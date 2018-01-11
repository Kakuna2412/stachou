var game = new Phaser.Game(1024, 640, Phaser.AUTO, 'gameDiv');

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('deckbuild',deckbuildState);
game.state.add('game',gameState);
game.state.add('win',winState);

game.state.start('boot');