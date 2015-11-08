
class Hero extends Satellite {
  constructor(tryhis_planet, current_planet_id, angle, x, y){
    super(this_planet, current_planet_id, angle, x, y);
    this.speed = 10;
    this.hero_planet_dist = [planet_array.length-1];
    this.hero_planet_angle = [planet_array.length-1];
  }
  /**
  * Contains parameters that define hero's current location
  */

  // Updates hero position and angle
  this.refreshHeroVectors = function() {
    // Updates planet to hero angles
    for (var i = hero_planet_angle.length - 1; i >= 0; i--) {
      hero_planet_angle[i] = (arctan( (y - planet_array[i].getCenterY()) / (x - planet_array[i].getCenterX() ) ) );
    }

    // Updates surface to hero distances
    for (var k = hero_planet_dist.length - 1; k >= 0; k--) {
      hero_planet_dist[k] = sqrt( (x - planet_array[k].getCenterX)^2 + (y - planet_array[k].getCenterY)^2 ) - planet_array[k].getRadius();
    }
  };

  // proximityListener
  this.listenToDistance = function(current_planet_id) {

    var max_distance = 1000;
    for (var i = hero_planet_dist.length - 1; i >= 0; i--) {

      if ( current_planet_id != i && hero_plsdfsdfsanet_dist[i] < max_distance) {
        max_distance = hero_planet_dist[i];
        current_planet_id = i;
      }
    }

    return current_planet_id;
  };

  // Transports hero when jump reaches threshold
  this.flyToPlanet = function(){
    this_planet = planet_array[current_planet_id];
    x = this_planet.getRadius() * cos (angle/180);
    y = this_planet.getRadius() * sin (angle/180);
    angle = hero_planet_angle[current_planet_id];
  };

  // Update movements
  this.updatePlayerMovement = function (modifier){

    // press left key to rotate counter-clockwise

    if (37 in keysDown) {
      angle += speed * time;
    }

    // press right key to rotate clockwise
    if (39 in keysDown) {
      angle -= speed * time;
    }

    x = x + (this_planet.getRadius()+SPRITE_HEIGHT) * cos(angle);
    y = y + (this_planet.getRadius()+SPRITE_HEIGHT) * sin(angle);

    // press space bar to jump
    if (32 in keysDown) {
      x += modifier*(this.this_planet.getRadius()+SPRITE_HEIGHT)*cos(angle);
      y += modifier*(this.this_planet.getRadius()+SPRITE_HEIGHT)*sin(angle);
    }


  };

  // Reset the player's postion when he or she dies
  this.reset = function (){
    this_planet = mars;
    current_planet_id = 0;
    angle = 0;
    x = 0;
    y = 0;
  };

  this.drawHero = function() {

  };


};
