<!doctype html> 

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
	bgReady = true;
};
bgImage.src = "images/background.png";

var hero = {
	speed = 256,
	x: 0,
	y: 0
};

class Planet {
	constructor(angleToHero, centerX, centerY, radius, rotateAngle, startAngle, endAngle) {
		this.angleToHero = angleToHero;
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.rotateAngle = rotateAngle;
		this.startAngle = startAngle;
		this.endAngle = endAngle;
	}

	var getAngleToHero = function() {
		return angleToHero;
	}

	var getCenterX = function() {
		return centerX;
	}

	var getCenterY = function() {
		return centerY;
	}

	var getRadius = function() {
		return radius;
	}

	var getRotateAngle = function() {
		return rotateAngle;
	}

	var getStartAngle = function() {
		return startAngle;
	}

	var getEndAngle = function() {
		return getEndAngle;
	}
}


/*	Planet Maker
	Mars
	Jupiter
	Saturn 
	*/

var mars = new Planet (100, canvas.Height / 2, 25 , 36 / 180 * Math.PI, 0 / 180 * Math.PI , planet_1_endAngle = 36 / 180 * Math.PI );



var colors = ["teal", "red", "green", "blue", "yellow", "violet", "orange", "grey", "navy blue", "purple"];

// Planet Drawer
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


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}. false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// Hero position on circle
var angle = 225;
current_Planet_Radius = 25;

x = now_Planet_Radius * cos (angle/180);
y = now_Planet_Radius  * sin (angle/180);

// Update game objects
var updatePosition = function (modifier){
	if (37 in keysDown) {
		hero.angle += angle_stepSize; 
	}
	if (39 in keysDown) {
		hero.angle -= angle_stepSize;
	}
	if (32 in keysDown) {
		hero.x += modifier*cos(angle);
		hero.y += modifier*sin(angle);
	}
}

// Check for hero to be on which planet
var findHeroPlanet = function() { 
	planet_1_angle = arctan((planet_1_centerY - y) / (planet_1_centerX - x));
	planet_1_distance = sqrt((planet_1_centerX - x)^2 + (planet_2_centerY - y)^2);
	planet_2_distance

}

var flyToPlanet = function (){
	

}

// Reset the game when the player catches a monster
var reset = function (){
	hero.x = canvas

}