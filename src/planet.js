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

	this.getName = function() {
		return this.planetName;
	};

	this.getAngleToHero = function() {
		return this.angleToHero;
	};

	this.getCenterX = function() {
		return this.centerX;
	};

	this.getCenterY = function() {
		return this.centerY;
	};

	this.getRadius = function() {
		return this.radius;
	};

	this.getSpeed = function() {
		return this.speed;
	};

	this.getColor = function () {
		return planetColor;
	};

	this.drawPlanet = function() {

		var centerX,centerY,radius;
		this.centerX = this.getCenterX();
		this.centerY = this.getCenterY();
		this.radius = this.getRadius();

		ctx.beginPath();
		ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.lineWidth = 5;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
	};
};

var planet_array  = [];
planet_array.push(new Planet("PLANET_ONE", 150, 150, 30, 0, "green"));
planet_array.push(new Planet("PLANET_TWO", 300, 100, 50, 0, "blue"));
planet_array.push(new Planet("PLANET_THREE", 400, 200, 20, 0, "yellow"));

console.log(planet_array[1].getName());
