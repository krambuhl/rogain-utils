var test = require('tape');
var templates = require('./fixtures/templates.json');
var createFrame = require('../dist').createFrame;

test('createFrame(tree, locals)', function(t) {
  var data = { mydata: 'cool-stuff' };
  var tree = {
    type: 'text',
    data: 'super-duper'
  };

  var frame = createFrame(tree, data);

  t.plan(4);

  t.equal(frame.children.type, tree.type);
  t.equal(frame.children.data, tree.data);

  t.equal(Object.keys(frame.locals).length, Object.keys(data).length);
  t.equal(frame.locals.mydata, data.mydata);
});