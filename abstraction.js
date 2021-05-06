function Circle(radius) {
	this.radius = radius;
	let defaultLocation = { x: 0, y: 1 };
	let computBetterLocation = function(factor) {
		//...
	};
	this.draw = function() {
		computBetterLocation(0.1);
		defaultLocation;
		console.log('draw');
	};
}

const circle = new Circle(10);
circle.draw();
