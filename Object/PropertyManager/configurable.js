var car = {};

// A car can have any number of doors
Object.defineProperty(car, 'doors', {
  configurable: true,
  value: 4
});

// A car must have only four wheels
Object.defineProperty(car, 'wheels', {
  configurable: false,
  value: 4
});

delete car.doors;

// => "undefined"
console.log(car.doors);

delete car.wheels;
// => "4"
console.log(car.wheels);

Object.defineProperty(car, 'doors', {
  configurable: true,
  value: 5
});

// => "5"
console.log(car.doors);

// => Uncaught TypeError: Cannot redefine property: wheels
Object.defineProperty(car, 'wheels', {
  configurable: true,
  value: 4
});