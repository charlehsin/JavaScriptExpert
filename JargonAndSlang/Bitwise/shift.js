// ">>" maintains the sign bit (result is a signed integer), while ">>>" does not (result is an unsigned integer).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// Bitwise operators always convert the operands to 32-bit integers.

// Signum Function

var sign = function (x) {
  return (x >> 31) | ((-x) >>> 31);
};

// -100 is 11111111111111111111111110011100
// => 11111111111111111111111110011100
console.log((-100 >>> 0).toString(2));
let shiftLeft1KeepSign = -100 >> 1;
let shiftLeft1NotKeepSign = -100 >>> 1;
// => 11111111111111111111111111001110
console.log((shiftLeft1KeepSign >>> 0).toString(2));
// => 1111111111111111111111111001110
console.log((shiftLeft1NotKeepSign >>> 0).toString(2));

// 100 is 1100100
// => 1100100
console.log((100 >>> 0).toString(2));
shiftLeft1KeepSign = 100 >> 1;
shiftLeft1NotKeepSign = 100 >>> 1;
// => 110010
console.log((shiftLeft1KeepSign >>> 0).toString(2));
// => 110010
console.log((shiftLeft1NotKeepSign >>> 0).toString(2));

// Negative number after >> 31 will become -1.
// => -1
console.log(-100 >> 31);
// Positive number after >>> 31 will become 0.
// Only the 1st bit will be left and will be treated as non-signed.
// => 0
console.log(100 >>> 31);
// Positive number after >> 31 will become 0.
// => 0
console.log(100 >> 31);
// Negative number after >>> 31 will become 1.
// Only the 1st bit will be left and will be treated as non-signed.
// => 1
console.log((-100) >>> 31);

// => -1
console.log(sign(-100));

// => 0
console.log(sign(0));

// => 1
console.log(sign(100));