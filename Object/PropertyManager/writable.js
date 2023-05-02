var car = {};

Object.defineProperty(car, 'wheels', {
  value: 4,
  writable: false
});

// => 4
console.log(car.wheels);

car.wheels = 5;

// => 4
console.log(car.wheels);