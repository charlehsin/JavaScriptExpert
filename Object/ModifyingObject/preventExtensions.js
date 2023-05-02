var car = {
  doors: 4
};

// => true
console.log(Object.isExtensible(car) === true);

Object.preventExtensions(car);

// => false
console.log(Object.isExtensible(car) === true);

// => 4
console.log(car.doors);
delete car.doors;

// => undefined
console.log(car.doors);

car.tires = 4;

// => undefined
console.log(car.tires);