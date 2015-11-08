/***
*This class defines the characteristics of the planets and contains functions
*that help create the planets
*/


var Planet = function (planetName, centerX, centerY, radius, speed, colour) {

	this.planetName = planetName;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed;
	this.colour = colour;

	var getName = function() {
		return this.planetName;
	};

	var getAngleToHero = function() {
		return this.angleToHero;
	};

	var getCenterX = function() {
		return this.centerX;
	};

	var getCenterY = function() {
		return this.centerY;
	};

	var getRadius = function() {
		return this.radius;
	};

	var getSpeed = function() {
		return this.speed;
	};

	var getColor = function () {
		return planetColor;
	};

	var makePlanet = function(file) {

		var planet_array = [];
		planet_array [0] = mars;
		planet_array [1] = jupiter;
		planet_array [2] = saturn;

		planet[0] = new Planet (mars, 0, 100, CANVAS.HEIGHT / 2, 25 , 36 / 180 * Math.PI, 0 / 180 * Math.PI , 36 / 180 * Math.PI );
	};

	var drawPlanet = function(planet) {

		var centerX,centerY,radius;

		this.centerX = planet.getCenterX();
		this.centerY = planet.getCenterY();
		this.radius = planet.getRadius();

		var canvas = document.getElementByID("canvas");
		var context = canvas.getContext('2d');

		context.beginPath();
		context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.planetColor;
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = '#003300';
		context.stroke();
	};
};

var planet_array = new Planet(
	("PLANET_ONE", 150, 150, 30, 0, "green"),
	("PLANET_TWO", 300, 100, 50, 0, "blue"),
	("PLANET_THREE", 400, 200, 20, 0, "yellow")
);
