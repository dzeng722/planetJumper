class Satellite (this_planet, current_planet_id, angle, x, y)
{
  constructor(this_planet, current_planet_id, angle, x, y)  {
    this.this_planet = this_planet;
    this.current_planet_id = current_planet_id;
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.satelliteColor = satelliteColor;
  }

  this.updateEnvironmentMovement = function() {
    angle -=  this_planet.getSpeed() * time;
    x = x + (this_planet.getRadius()+SPRITE_HEIGHT) * cos(angle);
    y = y + (this_planet.getRadius()+SPRITE_HEIGHT) * sin(angle);
  };



}
