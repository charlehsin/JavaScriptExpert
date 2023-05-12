//Continuation passing style (CPS)

var person = {};
var bank = {
  funds: 0,
  receiveDepositFrom: function(person) {
    this.funds += person.funds;
    person.funds = 0;
  }
};
 
// => undefined
console.log(person.funds);
 
(function work(callback) {
  $.ajax({
    url: "http://some.webservice.com/work.json",
    context: document.body
  }).done(function() {
    callback(100);
  });
})(function(amount) {
  person.funds = amount;
 
  // => 100
  console.log(person.funds);
  bank.receiveDepositFrom(person);
 
  // => 0
  console.log(person.funds);
});