// ES 6 introduces two new variable types, “let” and “const”, both of which allow developers to use block-level scope.

for (var x = 0; x < 10; x++) {
  var foo = "bar";
}

// => 'bar'
console.log(foo);

///////////////////////////

for (var x = 0; x < 10; x++) {
  let foo2 = "bar";

  // => bar
  console.log(foo2);
}
// => ReferenceError: foo2 is not defined
console.log(foo2);