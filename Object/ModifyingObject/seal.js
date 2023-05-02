var envelope = {
  letter: 'To whom it may concern'
};

// => false
Object.isSealed(envelope);

Object.seal(envelope);

envelope.letter = "Oh Hai";
envelope.stamped = true;

// => Oh Hai
console.log(envelope.letter);

// => undefined
console.log(envelope.stamped);