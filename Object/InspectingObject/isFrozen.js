var bombPop = {
  wrapping: 'plastic',
  flavors: ['Cherry', 'Lime', 'Blue Raspberry']
};

// => false
console.log(Object.isFrozen(bombPop));

delete bombPop.wrapping;

// undefined;
console.log(bombPop.wrapping);

// prevent further modifications
Object.freeze(bombPop);

delete bombPop.flavors;

// => ["Cherry", "Lime", "Blue Raspberry"]
console.log(bombPop.flavors);

// => true
console.log(Object.isFrozen(bombPop));