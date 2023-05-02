var sum = function () {
  var len = arguments.length,
    total = 0;
  for (var x = 0; x < len; x++) {
    total += arguments[x];
  }
  return total;
};

// => 6
console.log(sum(1, 2, 3));

// However, arguments do not have all the array methods.
var sum2 = function () {
  var total = 0;
  while (arguments.length > 0) {
    total += arguments.pop();
  }
  return total;
};

// Uncaught TypeError: Object #<Object> has no method 'pop'
sum2(1, 2, 3);