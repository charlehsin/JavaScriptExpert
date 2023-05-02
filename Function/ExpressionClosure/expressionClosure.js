// Expression closures are a shortcut for writing simple functions. 

// => 10
console.log([1, 2, 3, 4].reduceRight(function (curr, val) { return curr + val }));

// => 10
console.log([1, 2, 3, 4].reduceRight((curr, val) => curr + val));