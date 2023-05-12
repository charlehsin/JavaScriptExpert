// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

// This coroutine forms a very basic state machine that handles two positions (on, off) without needing to explicitly define a Boolean variable.
var toggle = (function* () {
  while (true) {
    yield true
    yield false
  }
})();

for (var x = 0; x < 5; x++) {

  // => true, false, true, false, true
  console.log(toggle.next().value)
}