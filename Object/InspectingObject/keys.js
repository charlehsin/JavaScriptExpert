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

// => ["openLid"]
console.log(Object.keys(box));