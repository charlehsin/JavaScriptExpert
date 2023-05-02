var Car = function () {
  var name = 'Tesla';
  var wheelCount = '4';
  this.getName = function () {
    return name;
  }
  this.getWheelCount = function () {
    return wheelCount;
  }
  this.setName = function (newName) {
    name = newName;
  }
  this.setWheelCount = function (newCount) {
    wheelCount = newCount;
  }
}
var myCar = new Car();

// #=> undefined
console.log(myCar.name);

myCar.name = "Corvette";

// #=> 'Corvette'
console.log(myCar.name);

// #=> 'Tesla'
console.log(myCar.getName());

// #=> 'Corvette'
myCar.setName('Corvette');
console.log(myCar.getName());