// Hero stats and functions

// Stores hero's angle to all planets
var hero_planet_angle = [planet_array.length-1];
var hero_planet_dist = [planet_array.length-1];

// Assigns hero position
var hero = {
	speed = 256,
	this_planet = mars;
	current_planet_id = 0;
	angle = 0;
	x: 0,
	y: 0
};

// Check for hero to be on which planet
var refreshHeroVectors = function() { 

	// Updates planet to hero angles
	for (var i = hero_planet_angle.length - 1; i >= 0; i--) {
		hero_planet_angle[i] = (arctan( (y - planet_array[i].getCenterY()) / (x - planet_array[i].getCenterX() ) ) );
	};

	// Updates planet !surface to hero distance
	for (var i = hero_planet_dist.length - 1; i >= 0; i--) {
		hero_planet_dist[i] = sqrt( (x - planet_array[i].getCenterX)^2 + (y - planet_array[i].getCenterY)^2 ) - planet_array[i].getRadius();
	};
}

// Find which planet the hero is closest to
var findThisPlanet = function(current_planet_id) {

	var max_distance = 1000;

	for (var i = hero_planet_dist.length - 1; i >= 0; i--) {

		if ( current_planet_id != i && hero_planet_dist[i] < max_distance) {
			max_distance = hero_planet_dist[i];
			current_planet_id = i;
		}
	};

	return current_planet_id;
}

// Transports hero when jump reaches threshold
var flyToPlanet = function() {

	this.planet = planet_array[current_planet_id];
	x = this_planet.getRadius() * cos (angle/180);
	y = this_planet.getRadius() * sin (angle/180);
	angle = hero_planet_angle[current_planet_id];
}

// Update game objects
var updatePosition = function (modifier){

	// press left key to rotate counter-clockwise
	if (37 in keysDown) {
		hero.angle += angle_stepSize; 
	}

	// 
	if (39 in keysDown) {
		hero.angle -= angle_stepSize;
	}
	if (32 in keysDown) {
		hero.x += modifier*cos(angle);
		hero.y += modifier*sin(angle);
	}
}

// Reset the game when the player dies
var reset = function (){
	speed = 256,
	this_planet = mars;
	current_planet_id = 0;
	angle = 0;
	x: 0,
	y: 0
}
