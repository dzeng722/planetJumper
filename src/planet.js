var Planet = function (planetName, centerX, centerY, radius, rotateAngle, startAngle, endAngle) {
		
		this.planetName = planetName;
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.rotateAngle = rotateAngle;
		this.startAngle = startAngle;
		this.endAngle = endAngle;

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

	var getRotateAngle = function() {
		return this.rotateAngle;
	};

	var getStartAngle = function() {
		return this.startAngle;
	};

	var getEndAngle = function() {
		return this.getEndAngle;
	};
};
