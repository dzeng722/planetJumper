/**
* \brief Calls functions to update and draw players and objects on planets
*
*/

	var loop = function() {
		update();
		draw();

		//Loop about 60 fps.
		window.requestAnimationFrame(loop,canvas);
	};

	var init = function() {

	};

	var draw = function() {

	};

	var update = function() {
		var modifier = 10;
		updateEnvironmentMovement();
		updatePlayerMovement(modifier);
	};
