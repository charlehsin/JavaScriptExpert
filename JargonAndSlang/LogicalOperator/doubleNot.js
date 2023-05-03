var user = {
  isAdmin: function () {
    return !!this.admin;
  }
};

// undefined this.admin is coerced to false
// then inverted to true
// then inverted again to false
// => false
console.log(user.isAdmin());

user.admin = true;

// this.admin is true without coercion
// inverted to false
// inverted back to true
// => true
console.log(user.isAdmin());

user.admin = false;

// => false
console.log(user.isAdmin());