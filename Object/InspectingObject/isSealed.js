var ziplockBag = {};

// => false
console.log(Object.isSealed(ziplockBag) === true);

// => true
console.log(Object.isExtensible(ziplockBag));

Object.seal(ziplockBag);

// => true
console.log(Object.isSealed(ziplockBag) === true);

// => false
console.log(Object.isExtensible(ziplockBag));