var Car = function () {

  // Instance Property
  this.running = false;

  // Instance Method
  this.start = function () {
    return this.running = true;
  }
}

// Instance Method
Car.prototype.stop = function () {
  return this.running = false;
}

var tesla = new Car();

// => false
console.log(tesla.running);

// => true
console.log(tesla.start());

// => false
console.log(tesla.stop());