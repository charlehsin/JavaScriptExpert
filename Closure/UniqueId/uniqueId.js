var getUniqueId = (function () {
  var id = 0;
  return function (element) {
    if (!element.id) {
      element.id = 'generated-uid-' + id++;
    }
    return element.id;
  };
})();

var elementWithId = document.createElement('p');
elementWithId.id = 'foo-bar';
var elementWithoutId = document.createElement('p');

// => 'foo-bar'
getUniqueId(elementWithId);

// => 'generated-id-0'
getUniqueId(elementWithoutId);