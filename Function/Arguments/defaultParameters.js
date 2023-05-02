var join = function (foo = 'foo', baz = (foo === 'foo') ? join(foo + "!") : 'baz') {
  return foo + ":" + baz;
}

// => hi:there
console.log(join("hi", "there"));

// Use the default parameter when not supplied
// => hi:baz
console.log(join("hi"));

// Use the default parameter when undefined is supplied
// => foo:there
console.log(join(undefined, "there"));

// Use an expression which has access to the current set of arguments
// => foo:foo!:baz
console.log(join('foo'));