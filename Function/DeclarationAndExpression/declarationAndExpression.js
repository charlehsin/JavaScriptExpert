// => Hi, I'm a function declaration!
declaration();

function declaration() {
  console.log("Hi, I'm a function declaration!");
}

// => Uncaught TypeError: undefined is not a function
expression();

var expression = function () {
  console.log("Hi, I'm a function expression!");
}