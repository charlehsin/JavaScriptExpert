// True because both strings use the same characters and length.
console.log(Object.is('true', 'true'));

// False because type case counts as a difference.
console.log(Object.is('True', 'true'));

// True because function is coerced to true using the logical not operator.
console.log(Object.is(!function(){}(), true));

// True because the built-in Math object has no prototype.
console.log(Object.is(undefined, Math.prototype));

// => false
console.log(NaN === 0/0);
 
// => true
console.log(Object.is(NaN, 0 / 0));