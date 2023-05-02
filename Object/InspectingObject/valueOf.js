var Car = function (name) {
  this.name = name;
}

var tesla = Object.create(Car.prototype, {
  name: {
    value: 'tesla'
  }
});

// => [Object object]
console.log(tesla.valueOf());

Car.prototype.valueOf = function () {
  return this.name;
}

// => tesla
console.log(tesla.valueOf());