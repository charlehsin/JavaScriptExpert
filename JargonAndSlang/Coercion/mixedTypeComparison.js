// => true
console.log([1] == 1);

// => true
console.log([1] == "1");

// => true
console.log([{
  toString: function () {
    return 1;
  }
}] == "1");

// => false
console.log([1] === 1);

// => false
console.log([1] === "1");

// => false
console.log([{
  toString: function () {
    return 1;
  }
}] === "1");