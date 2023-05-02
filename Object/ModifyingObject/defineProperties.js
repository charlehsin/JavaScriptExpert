var car = {};

Object.defineProperties(car, {
  'wheels': {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
  },
  'doors': {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
  }
});

// => 4
console.log(car.doors);

// => 4
console.log(car.wheels);