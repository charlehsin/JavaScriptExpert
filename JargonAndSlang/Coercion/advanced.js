var Money = function (val, sym) {
  this.currencySymbol = sym;
  this.cents = val;
};

var dollar = new Money(100, '$');

// Not helpful
// => NaN
console.log(+dollar);

// Not helpful
// => Total: [object Object]
console.log("Total: " + dollar);

Money.prototype.toString = function () {
  return this.currencySymbol + (this.cents / 100).toFixed(2);
};

Money.prototype.valueOf = function () {
  return this.cents;
};

// Helpful!
// => 100
console.log(+dollar);

// Without specifying a hint for the internal DefaultValue function, JavaScript assumes you want a number.
// This results in a call to valueOf() instead, before trying toString().
// So you do not get $1.00 below.
// => 100
console.log(dollar + '');

// The rules of ToPrimitive say that the function must return a primitive value.
// The Array’s valueOf() method however returns an object, which causes the ToPrimitive function to move on and call toString(). 
// => $1.00
console.log([dollar] + '');
