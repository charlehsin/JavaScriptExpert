// Immediately Invoked Function Expression

// => foo
!function () { console.log('foo'); }();

// Uncaught SyntaxError: Unexpected token (
function() { console.log('foo'); } ();
