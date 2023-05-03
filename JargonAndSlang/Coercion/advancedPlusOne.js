// Overall
// => '10'
console.log(++[[]][+[]] + [+[]]);

// Break the above down

// 1st
// unary operator will be getting the number.
// => 1
console.log(+[1]);
// => 0
console.log(+[0]);
// => 0
console.log(+[]);
// => [0]
console.log([+[]]);

// 2nd
// Get the 1st element of [[]], which is [].
// => []
console.log([[]][0]);

// 3rd
// unary operator will be getting the number.
// => 0
console.log(+[]);
// => 1
console.log(++[[]][0]);
// => 1
console.log(++[[]][+[]]);

// 4th
// Since the left operand is a number and the right is an array, the combination will be through concatenation, not summation.
// => '10'
console.log(1 + [0]);
// => '10'
console.log(++[[]][+[]] + [+[]]);