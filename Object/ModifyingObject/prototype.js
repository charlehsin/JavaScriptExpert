var Dog = function () { };
Dog.prototype.speak = function () {
  return "woof";
};

var Cat = function () { };
Cat.prototype.speak = function () {
  return "meow";
};

var Tabby = function () { };
Tabby.prototype = new Cat();
var tabbyCat = new Tabby();

// => 'meow'
console.log(tabbyCat.speak());

// => { speak: [Function (anonymous)] }
console.log(Dog.prototype);

// => { speak: [Function (anonymous)] }
console.log(Cat.prototype);

// => Cat {}
console.log(Tabby.prototype);

// => undefined
console.log(tabbyCat.prototype);

// Setting the prototype of an object instance will not affect the instantiated properties
tabbyCat.prototype = new Dog();

// => Dog {}
console.log(tabbyCat.prototype);

// => 'meow'
console.log(tabbyCat.speak());