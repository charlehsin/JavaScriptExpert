var car = {};

Object.defineProperty(car, 'doors', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});

// => 4
console.log(car.doors);