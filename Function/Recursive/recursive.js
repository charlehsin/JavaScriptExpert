var tree = {
  name: 'Users',
  children: [{
    name: 'heavysixer',
    children: [{
      name: 'Applications',
      children: []
    }, {
      name: 'Downloads',
      children: []
    }, {
      name: 'Library',
      children: [{
        name: 'Accounts',
        children: []
      }, {
        name: 'Arduino',
        children: []
      }]
    }]
  }, {
    name: 'root',
    children: []
  }]
};

var walker = function walk(branch, newDepth) {
  var depth = newDepth || 0;
  var len = branch.children.length;
  console.log(depth + ':' + branch.name);
  while (len > 0) {
    len--;
    walker(branch.children[len], depth + 1);
  }
};

/*
  => 0:Users
  => 1:root
  => 1:heavysixer
  => 2:Library
  => 3:Arduino
  => 3:Accounts
  => 2:Downloads
  => 2:Applications
*/
walker(tree);