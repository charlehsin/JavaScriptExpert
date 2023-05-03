// shorthand boolean

// number is coerced to a Boolean false
// NOT inverts it to true
// => true
console.log(!0);

// number is coerced to a Boolean true
// NOT inverts it to false
// => false
console.log(!1);

// number is coerced to a Boolean true
// NOT inverts it to false
// => false
console.log(!-1);

// string is coerced to a Boolean truthy *something*
// NOT inverts it to false
// => false
console.log(!'0');

// string is coerced to a Boolean truthy *something*
// NOT inverts it to false
// => false
console.log(!'1');

// this is coerced to a Boolean falsey *nothing*
// NOT inverts it to true
// => true
console.log(!undefined);

// this is coerced to a Boolean truthy *something*
// NOT inverts it to true
// => false
console.log(!this);

// unary operator coerces empty array into zero
// zero is coerced into Boolean false
// NOT inverts it to true
// => true
console.log(!+[]);

// inner NOT coerces the empty array to false
// false is not a valid array index so undefined is returned
// undefined is coerced into Boolean false
// NOT inverts it to true
// => false
console.log(![]);
// => undefined
console.log([][false]);
// => true
console.log(![][![]]);