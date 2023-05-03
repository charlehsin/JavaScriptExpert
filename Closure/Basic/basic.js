// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// In its most basic form, a closure is simply an outer function that returns an inner function.
// Doing this creates a mechanism to return an enclosed scope on demand.

function outer(name) {
  var hello = "hi",
    inner;

  return inner = function () {
    return hello + " " + name;
  };
}

// Create and use the closure
var name = outer("mark")();

// => 'hi mark'
console.log(name);

///////////   fat arrow ///////////////////////

var outer2 = (name) => {
  var hello = "hi",
    inner;

  return inner => hello + " " + name;
}
var name2 = outer2("mark")();

// => 'hi mark'
console.log(name2);