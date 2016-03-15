var test = require('tape');
var findPath = require('../dist').findPath;

var tree = {
  type: 'node',
  children: [
    { type: 'text', data: 'hello-world' },
    { type: 'component', name: 'NonEmpty' },
    { type: 'tag', name: 'p' },
    { type: 'tag', name: 'div' },
    { type: 'component', name: 'Box', children: [
      { type: 'tag', name: 'div' },
      { type: 'component', name: 'Children' },
      { type: 'tag', name: 'div' }
    ] }
  ]
}

test('findPath(tree, match) :: not found', function(t) {
  t.plan(1);
  
  var res = findPath(tree, { type: 'doodoo' });
  
  t.equal(res === undefined, true);
});

test('findPath(tree, match) :: find shallow', function(t) {
  t.plan(1);
  
  var res = findPath(tree, { type: 'text' });
  
  t.equal(res, 'children.0');
});

test('findPath(tree, match) :: find deep', function(t) {
  t.plan(1);
  
  var res = findPath(tree, { type: 'component', name: 'Children' });
  
  t.equal(res, 'children.4.children.1');
});