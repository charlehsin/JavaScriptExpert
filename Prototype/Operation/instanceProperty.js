// Both wheels and odometer are instance properties.
var Car = function (wheelCount) {
  this.wheels = wheelCount || 4
}
Car.prototype.odometer = 0;

var tesla = new Car();

// => 4
console.log(tesla.wheels);

// => 0
console.log(tesla.odometer);