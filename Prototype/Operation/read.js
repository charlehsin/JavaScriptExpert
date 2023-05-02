var Car = function (wheelCount) {
  this.odometer = 0;
  this.wheels = wheelCount || 4;
};
Car.prototype.drive = function (miles) {
  this.odometer += miles;
  return this.odometer;
};
var tesla = new Car();

// => true
console.log(Object.getPrototypeOf(tesla) === Car.prototype);

// => true
console.log(tesla.__proto__ === Car.prototype);