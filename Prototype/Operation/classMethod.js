// Class methods, which are sometimes called static methods, are functions available only to the class itself.
// Class methods can access class properties, but not properties of an object instance. 
String.reverse = function (s) {
  return s.split("").reverse().join("");
};

// => secret message
console.log(String.reverse("egassem terces"));