// set default

var Car = function () {
  var args = Array.prototype.slice.call(arguments);

  this.name = args[0] || 'tesla'
  this.mpg = args[1] || 100
  this.mph = args[2] || 80

  // => Volt
  console.log(this.name);

  // => 90
  console.log(this.mpg);

  // => 80
  console.log(this.mph);
}

new Car('Volt', 90);