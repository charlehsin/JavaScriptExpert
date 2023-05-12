// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

var letter, alphabet, sequence;

function* alphabet() {
  var charCode = 65;
  while (charCode < 91) {
    yield String.fromCharCode(charCode++);
  }
};
sequence = alphabet();
letter = sequence.next();

while (!letter.done) {
  // => A..Z
  console.log(letter.value);
  letter = sequence.next();
}