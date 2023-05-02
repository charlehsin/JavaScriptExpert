var Car = function () {

  // Instance Property
  this.running = false;

  // Instance Method
  this.start = function () {
    return this.running = true;
  }
}

var tesla = new Car();

// => false
console.log(tesla.running);

// => true
console.log(tesla.start());