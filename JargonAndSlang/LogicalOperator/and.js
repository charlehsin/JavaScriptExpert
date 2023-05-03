var car = {
  hasWheels: function () {
    return true;
  },
  engineRunning: function () {
    return true;
  },
  wheelsTurning: function () {
    return true;
  },
  flying: function () {
    return false;
  }
};

if (car.inMotion = car.hasWheels() && car.engineRunning() && car.wheelsTurning()) {
  console.log('vrrrrooooommmm');
}

// => true
console.log(car.inMotion);

if (car.inFly = car.hasWheels() && car.engineRunning() && car.flying()) {
  console.log('vrrrrooooommmm fly');
}

// => false
console.log(car.inFly);