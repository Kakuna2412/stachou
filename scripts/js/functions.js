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