// The beauty of the IIFE is that it uses a unary expression to coerce a function declaration,
// which would normally need to be explicitly called into a function expression that can self - execute.
// One other point worth mentioning is the use of the semicolon prepending the statement.
// Adding it provides a bit of defensive programming against other malformed modules that might not have a trailing semicolon.
// If this were just a function declaration, it would be absorbed into the preceding module, which can often occur when multiple scripts are concatenated together as part of a deploy process.
// It is highly recommended that you follow this convention to protect yourself against mystery bugs in production. 

; (function () {
    ...
})();

; !function () {
    ...
}();

; -function () {
    ...
}();

; +function () {
    ...
}();

;∼function() {
    ...
} ();

// Not Recommended
; void function () {
    ...
}();

// Not Recommended
; delete function () {
    ...
}();