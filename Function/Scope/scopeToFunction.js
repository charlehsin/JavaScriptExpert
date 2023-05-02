// JavaScript is scoped to the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

var x = 20;

// Functions have their own scope
; !function () {
  var x = "foo";

  // => "foo"
  console.log(x);
}();

// => 20
console.log(x);

for (x = 0; x < 10; x++) {

  // => 0..9
  console.log(x);
}

// => 10
console.log(x);