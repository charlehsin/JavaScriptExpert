var box = Object.create({}, {
  openLid: {
    value: function () {
      return "nothing";
    },
    enumerable: true
  },
  openSecretCompartment: {
    value: function () {
      return 'treasure';
    },
    enumerable: false
  }
});

// => ["openLid", "openSecretCompartment"]
console.log(Object.getOwnPropertyNames(box).sort());