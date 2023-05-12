Q = require('q');

// chained

// Simulates a long running process
var sleep = function (ms) {
  return function (callback) {
    setTimeout(callback, ms);
  };
};

// Using Continuation Passing Style.
var squareCPS = function (num, callback) {
  sleep(1000).call(this, function () {
    callback(num * num);
  });
};

// => 100000000
squareCPS(10, function (num) {
  squareCPS(num, function (num) {
    squareCPS(num, function (num) {
      console.log(num);
    });
  });
});

// Using Promises.
var square = function (num) {
  var later = Q.defer();
  sleep(1000).call(this, function () {
    later.resolve(num * num);
  });
  return later.promise;
};

// => 100000000
square(10)
  .then(square)
  .then(square)
  .then(function (total) {
    console.log(total);
  });

///////////////////////////

// parallel join

Q.allSettled([
  square(10),
  square(20),
  square(30)
]).then(function (results) {
  results.forEach(function (result) {

    // => 100
    // => 400
    // => 900
    console.log(result.value);
  });
});