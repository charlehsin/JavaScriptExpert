///////////////// not use fat arrow ////////////////////

var VendingMachine = function () {
  this.stock = ["Sgt. Pepper", "Choke", "Spite"];
  var dispense = function () {
    if (this.stock.length > 0) {
      return this.stock.pop();
    }
  };
  return {
    dispense: dispense.bind(this)
  };
};

var popMachine = new VendingMachine();

// => 'Spite'
console.log(popMachine.dispense());

////////////// use fat arrow ///////////////////////

var VendingMachine = function () {
  this.stock = ["Sgt. Pepper", "Choke", "Spite"];
  return {
    dispense: () => {
      if (this.stock.length > 0) {
        return this.stock.pop();
      }
    }
  };
};

var popMachine = new VendingMachine();

// => 'Spite'
console.log(popMachine.dispense());