// CPS (Continuation passing style) style
var user;
login('user', 'password', function (result) {
  if (result.ok) {
    user = result.user;
  }
});

// Promise style and assumes login returns a promise object.
var promise = login('user', 'password');

promise.then(function (result) {
  if (result.ok) {
    user = result.user;
  }
});