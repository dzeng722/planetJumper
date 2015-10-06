// Planet Maker

var planet_array = [];
planet_array [0] = mars;
planet_array [1] = jupiter;
planet_array [2] = saturn;


// Initiates planet objects via (angle, x, y, radius, rotateAngle,, startAngle, endAngle) to be decided later

var mars = new Planet (mars, 0, 100, CANVAS.HEIGHT / 2, 25 , 36 / 180 * Math.PI, 0 / 180 * Math.PI , planet_1_endAngle = 36 / 180 * Math.PI );
var jupiter = new Planet (jupiter, 0, 200, CANVAS.HEIGHT / 2, );

// Draw planets for hero

var colors = ["teal", "red", "green", "blue", "yellow", "violet", "orange", "grey", "navy blue", "purple"];

function drawPlanet(centerX,centerY,radius,rotateAngle,startAngle,endAngle){
	var canvas = document.getElementByID("canvas");
	if (canvas..getContext) {
		var ctx = canvas.getContext("2d");
			for (i = 0;i < 10; i++){
				ctx.fillStyle = colours[i];
				ctx.translate(centerX, centerY);
				ctx.rotate(rotateAngle);
				ctx.translate(-centerX, -centerY);
				ctx.beginPath();
				ctx.moveTo(centerX,centerY);
				ctx.lineTo(centerX + radius, centerY);
				ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
				ctx.closePath();
				ctx.fill();
	}
}