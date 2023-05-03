// https://developer.mozilla.org/en-US/docs/Glossary/Scope

// Free Variable
// Free variables are any nonlocal variables that the function body has access to.
// To qualify as a free variable, it must be defined outside the function body and not be passed as a function argument.
var iAmFree = 'Free to be me!';

function canHazAccess(notFree) {

  var notSoFree = "i am bound to this scope";

  // => "Free to be me!"
  console.log(iAmFree);
}

// => ReferenceError: notSoFree is not defined
console.log(notSoFree)

canHazAccess();