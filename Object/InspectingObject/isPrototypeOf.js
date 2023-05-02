// => true
Object.prototype.isPrototypeOf([]);

// => true
Function.prototype.isPrototypeOf(() => { });

// => true
Function.prototype.isPrototypeOf(function () { });

// => true
Object.prototype.isPrototypeOf(() => { });