"use strict";

class Satellite {
  constructor(this_planet, current_planet_id, angle, x, y)  {
    this.this_planet = this_planet;
    this.current_planet_id = current_planet_id;
    this.angle = angle;
    this.x = x;
    this.y = y;
  }

  updateEnvironmentMovement() {
    angle -=  this_planet.getSpeed() * time;
    x = x + (this_planet.getRadius()+SPRITE_HEIGHT) * cos(angle);
    y = y + (this_planet.getRadius()+SPRITE_HEIGHT) * sin(angle);
  };
}
