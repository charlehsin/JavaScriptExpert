var friend = {
  warmth: 0,
  useSweater: function (level) {
    this.warmth = level;
  }
};
var me = {
  warmth: 0,
  isWarm: function () {
    return this.warmth === 100;
  }

};

// => false
console.log(me.isWarm());

try {
  me.useSweater(100);
} catch (e) {
  // => Object #<Object> has no method 'useSweater'
  console.log(e.message);
}

friend.useSweater.call(me, 100);

// => true
console.log(me.isWarm());

me.warmth = 0;

// => false
console.log(me.isWarm());

friend.useSweater.apply(me, [100]);

// => true
console.log(me.isWarm());