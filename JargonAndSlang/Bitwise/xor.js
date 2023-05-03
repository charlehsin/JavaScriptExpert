// Determining Sign Equality

var signsMatch = function (x, y) {
  return !((x ^ y) < 0);
};

// => false
console.log(signsMatch(10, -10));

// => true
console.log(signsMatch(0, 0));

// => true
console.log(signsMatch(0, -0));

// => true
console.log(signsMatch(-10, -10));

// => true
console.log(signsMatch(1, 1e0));

// => false
console.log(signsMatch(-1, 1e0));

////////////////////////////////////////////////

// Toggling Bits

var light = {
  on: 1,
  toggle: function () {
    return this.on ^= 1;
  }
};

// => 0
console.log(light.toggle());

// => 1
console.log(light.toggle());

// => 0
console.log(light.toggle());