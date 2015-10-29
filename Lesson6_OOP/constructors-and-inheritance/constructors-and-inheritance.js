// constructor for Vehicle class
var Vehicle = function(color, name, numWheels) {
  this.color = color;
  this.name = name;
  this.numWheels = numWheels;
};

Vehicle.prototype.printNumWheels = function() {
  console.log(this.numWheels);
};

Vehicle.prototype.drive = function() {
  console.log('driving a vehicle named ' + this.name);
};

var v = new Vehicle('red', 'foo', 2);

// make a new class
var Car = function(color, name) {
    Vehicle.call(this, color, name, 4);
};

// make Car a subclass on Vehicle
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.drive = function() {
     console.log('driving a car named ' + this.name);
};

var car = new Car('yellow', 'madcar');
console.log(car.numWheels);
car.drive();
car.printNumWheels();
car.toString(); // exists on Object.prototype


// Explaining prototypes

// Object.prototype
// Object
// Vehicle.prototype
// Vehicle
// Car.prototype
// Car
