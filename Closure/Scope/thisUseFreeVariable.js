// https://developer.mozilla.org/en-US/docs/Glossary/Scope
// In JavaScript, the this keyword always refers to the owner of scope from which the script is executing.

var Car, tesla;
Car = function () {
  this.start = function () {
    console.log("car started");
  };
  this.turnKey = function () {
    // Local free variable
    var that = this;
    var carKey = document.getElementById('carKey');
    carKey.onclick = function (event) {
      that.start();
    };
  };
  return this;
};
tesla = new Car();

// Once a user click's the #carKey element they will see "car started"
tesla.turnKey();