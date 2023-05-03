// https://developer.mozilla.org/en-US/docs/Glossary/Scope
// In JavaScript, the this keyword always refers to the owner of scope from which the script is executing.

var Car, tesla;
Car = function () {
  this.start = function () {
    console.log("car started");
  };

  this.turnKey = function () {
    var carKey = document.getElementById('car_key');
    carKey.onclick = function (event) {
      this.start();
    };
  };
  return this;
};
tesla = new Car();

// Once a user clicks the #carKey element they will see "Uncaught TypeError: Object has no method 'start'"
tesla.turnKey();
