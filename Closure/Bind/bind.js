// bind similar

var Car, proxy, tesla;
Car = function () {
  this.start = function () {
    return console.log("car started");
  };
  this.turnKey = function () {
    var carKey;
    carKey = document.getElementById("carKey");
    carKey.onclick = proxy(function (event) {
      this.start();
    }, this);
  };
  return this;
};

// Use a closure to bind the outer scope's reference to this into the newly created inner scope.
proxy = function (callback, self) {
  return function () {
    return callback.apply(self, arguments);
  };
};

tesla = new Car();

// Once a user click's the #carKey element they will see "car started"
tesla.turnKey();