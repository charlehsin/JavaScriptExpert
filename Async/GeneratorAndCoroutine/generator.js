// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

var sequence, sq;

sq = function* (initialValue) {
  var current, num, step;
  num = initialValue || 2;
  step = 0;
  while (true) {
    current = num * step++;
    yield current
  }
};

sequence = sq(20);

// => 0
console.log(sequence.next().value);

// => 20
console.log(sequence.next().value);

// => 40
console.log(sequence.next().value);

// => 60
console.log(sequence.next().value);