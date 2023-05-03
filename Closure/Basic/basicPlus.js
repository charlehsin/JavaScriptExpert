var car;
function carFactory(kind) {
  var wheelCount, start;
  wheelCount = 4;
  start = function () {
    console.log('started with ' + wheelCount + ' wheels.');
  };

  // Closure created here.
  return (function () {
    return {
      make: kind,
      wheels: wheelCount,
      startEngine: start
    };
  }());
}

car = carFactory('Tesla');

// => Tesla
console.log(car.make);

// => started with 4 wheels.
car.startEngine();