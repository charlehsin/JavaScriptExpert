var Car = function (wheelCount) {
  this.odometer = 0;
  this.wheels = wheelCount || 4;
};
Car.prototype.drive = function (miles) {
  this.odometer += miles;
  return this.odometer;
};

var tesla = new Car();
// => 4
console.log(tesla.wheels);
// => 10
console.log(tesla.drive(10));

var isetta = new Car(3);
// =>3
console.log(isetta.wheels);
// => 10
console.log(isetta.drive(10));

// reset
tesla.odometer = 0;
isetta.odometer = 0;

isetta.drive = function (miles) {
  this.odometer -= miles;
  return this.odometer;
};

// => 10
console.log(tesla.drive(10));

// => -10
console.log(isetta.drive(10));

// reset
tesla.odometer = 0;
isetta.odometer = 0;

// Changes made to the prototype are propagated throughout the chain.
Car.prototype.drive = function (miles) {
  this.odometer += miles * 2;
  return this.odometer;
};

// tesla is using the prototype
// => 20
console.log(tesla.drive(10));
// => 20
console.log(tesla.odometer);

// isetta has its own drive function
// => -10
console.log(isetta.drive(10));
// => -10
console.log(isetta.odometer);

// However it cannot propagate changes to properties defined inside the constructor.
Car.prototype.odometer = 0;

// => 20
console.log(tesla.odometer);

// => -10
console.log(isetta.odometer);

// => -20 no change because the local function obscures the prototype's new version
console.log(isetta.drive(10));
