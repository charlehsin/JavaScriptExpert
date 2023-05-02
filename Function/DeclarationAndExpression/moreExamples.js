function sayHi() {
  console.log("hi");
}

var hi = function sayHi() {
  console.log("hello");
}

// => "hello"
hi();

// => 'hi'
sayHi();