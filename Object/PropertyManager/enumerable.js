var car = {};

Object.defineProperty(car, 'doors', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});

Object.defineProperty(car, 'wheels', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});

Object.defineProperty(car, 'secretTrackingDeviceEnabled', {
  enumerable: false,
  value: true
});

// => doors
// => wheels
for (var x in car) {
  console.log(x);
}

// => ["doors", "wheels"]
console.log(Object.keys(car));

// => ["doors", "wheels", "secretTrackingDeviceEnabled"]
console.log(Object.getOwnPropertyNames(car));

// => false
console.log(car.propertyIsEnumerable('secretTrackingDeviceEnabled'));

// => true
console.log(car.secretTrackingDeviceEnabled);