var foo = {
  foo: 'foo'
};
var bar = Object.create(foo, {
  bar: {
    enumerable: true,
    value: 'bar'
  }
});

// => bar true
// => foo false
for (var x in bar) {
  console.log(`${x} ${bar.hasOwnProperty(x)}`);
}

var myProps = Object.getOwnPropertyNames(bar).map(function (i) {
  return bar.hasOwnProperty(i) ? i : undefined;
});

// => ['bar']
console.log(myProps);