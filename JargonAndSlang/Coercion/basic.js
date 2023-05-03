// In JavaScript, coercion is always about simplifying complex objects to a primitive form or converting between two primitive types.

// Explicit type conversion
// => "1"
var a = (1).toString();
console.log(a);

// Implicit coercion
// => "1"
var a = 1 + "";
console.log(a);

// To String
// When JavaScript attempts to convert an object to a string, it calls the toString() method first. If toString() does not return a primitive representation, it defers to the valueOf() function.
// If the valueOf() function cannot produce a primitive value either, JavaScript throws a TypeError exception
// => '0'
var s = '' + 0;
console.log(s);

// To Number
// The unary operator’s job is to convert the operand that follows into a number.
// Like the concatenation process, it also involves coercing the object into a primitive form, this time a number.
// Just as in the string conversion process, JavaScript relies on the results of toString() or valueOf().
// However, the order is reversed: JavaScript calls valueOf() first and then toString().
// => 10
console.log(+'10');

// Context-Aware Coercion
// => 1373558473636
console.log(+new Date());
// => Thu Jul 11 2013 11:01:13 GMT-0500 (CDT)
console.log(new Date() + '');