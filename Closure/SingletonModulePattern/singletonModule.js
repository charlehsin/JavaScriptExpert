// Create a closure
var SecretStore = (function () {
  var data, secret, newSecret;

  // Emulation of a private variables and functions
  data = 'secret';
  secret = function () {
    return data;
  }
  newSecret = function (newValue) {
    data = newValue;
    return secret();
  }

  // Return an object literal which is the only way to access the private data.
  return {
    getSecret: secret,
    setSecret: newSecret,
  };
})();

var secret = SecretStore;

// => "secret"
console.log(secret.getSecret());

// => "foo"
console.log(secret.setSecret("foo"));

// => "foo"
console.log(secret.getSecret());

var secret2 = SecretStore;

// => "foo"
console.log(secret2.getSecret());