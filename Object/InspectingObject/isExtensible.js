var car = {
  doors: 4
};

// => true
console.log(Object.isExtensible(car) === true);

Object.preventExtensions(car);

// => false
console.log(Object.isExtensible(car) === true);