/* Object literals are not JSON. Many people confuse the Object literal syntax with JSON,
and even if they look similar, they are not the same. JSON is only a data description language,
so it cannot contain functions. Additionally, many JSON parsers expect properties to be defined
using double quotes that the literal syntax does not require.
 */

var foo = {
  bar: 'baz'
};

var foo2 = Object.create(Object.prototype, {
  bar: {
    writable: true,
    configurable: true,
    value: 'baz'
  }
});

// => baz
console.log(foo.bar);

// => baz
console.log(foo2.bar);

///////////////////////////////////////////////////

var foo = new Object();
var bar = {};

// => object
console.log(typeof (foo))

// => object
console.log(typeof (bar))

window.Object = function () { arguments.callee.call() };

// => Uncaught RangeError: Maximum call stack size exceeded
var foo = new Object();