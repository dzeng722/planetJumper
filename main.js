function main(){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	document.body.appendChild(canvas);
	ctx.fillstyle = "black";

	// Listen for keyboard strokes and mouse clicks
	var keysDown = {};

	document.addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
	}. false);

	document.addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
	}, false);
	document.addEventListener("mousedown", getMousePosition, false);

	init ();

	var loop = function() {
		update();
		draw();

		//Loop about 60 fps.
		window.requestAnimationFrame(loop,canvas)
	}
	window.requestAnimationFrame(loop,canvas)
}