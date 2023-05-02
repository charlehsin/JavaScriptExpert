// When a complex object is supplied as an argument, it is passed by reference to the function body.
// Conversely, when passing a primitive type to a function, JavaScript passes by value.

var object = {
  'foo': 'bar'
},
  num = 1;

// Passed by reference
; !function (obj) {
  obj.foo = 'baz';
}(object);

// => Object {foo: "baz"}
console.log(object);

// Passed by value;
; !function (num) {
  num = 2;
}(num);

// => 1
console.log(num);