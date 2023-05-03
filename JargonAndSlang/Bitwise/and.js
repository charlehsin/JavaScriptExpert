// Converting Hex to RGB

// my favorite hex color
var color = 0xC0FFEE;

// Red
// => 192
console.log((color >> 16) & 0xFF);

// Green
// => 255
console.log((color >> 8) & 0xFF);

// Blue
// => 238
console.log(color & 0xFF);

