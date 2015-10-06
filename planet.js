class Planet {
	constructor(name, centerX, centerY, radius, rotateAngle, startAngle, endAngle) {
		this.name = name;
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.rotateAngle = rotateAngle;
		this.startAngle = startAngle;
		this.endAngle = endAngle;
	}

	var getName = function() {
		return name;
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
