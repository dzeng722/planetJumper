window.onload = function main(){

	// Initiates parameters for canvas
	var CANVAS_WIDTH = 500;
	var CANVAS_HEIGHT = 300;
	var SPRITE_HEIGHT = 50;

	// Create canvas
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	document.body.appendChild(canvas);
	ctx.fillStyle = "red";

	// Listen for key presses and mouse clicks.

	var keystate = {};
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});
	document.addEventListener("mousedown", getMousePosition, false);

	function getMousePosition(evt){
		var x = event.x;
		var y = event.y;
		x -= canvas.offsetLeft;
  		y -= canvas.offsetTop;
	}


	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	init();

	loop();

	window.requestAnimationFrame(loop,canvas);
	
};