var Animal, cat, dog;

Animal = function (inLove) {
  this.lovesHumans = inLove || false;
};
cat = new Animal();
dog = new Animal(true);

// => [Function: Animal]
console.log(cat.constructor);

// => [Function: Animal]
console.log(dog.constructor);

// => false
console.log(cat.lovesHumans);

// => true
console.log(dog.lovesHumans);

///////////////////////////////////////////////////

// capture the errors so our script will continue to execute.
try {
  console.log(cat.jump());
} catch (e) {
  // => TypeError: cat.jump is not a function
  console.log(e);
}

/*
* We can change the base object and have the changes reflected downward even
* to objects who have already been instantiated.
*/
Animal.prototype.jump = function () {
  return "how high?!";
};

// => how high?!
console.log(cat.jump());

// => how high?!
console.log(dog.jump());

/*
* Changes to the local property do not propagate up the prototype chain.
* Instead, the reference to the prototype's property is blocked by the new local
* property of the same name.
*/
cat.jump = function () {
  return "no";
}

// => no
console.log(cat.jump());

// => how high?!
console.log(dog.jump());