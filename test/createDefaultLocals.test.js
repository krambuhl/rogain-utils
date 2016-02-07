var test = require('tape');
var templates = require('./fixtures/templates.json');
var Template = template.Template;
var createDefaultLocals = require('../dist').createDefaultLocals;

test.skip('createDefaultLocals(tree, props)', function(t) {
  t.plan(0);

  var locals = createDefaultLocals(Template, { });
});

test.skip('createDefaultLocals(tree, props) :: @children', function(t) {
  t.plan(0);
});

test.skip('createDefaultLocals(tree, props) :: @data', function(t) {
  t.plan(0);
});

test.skip('createDefaultLocals(tree, props) :: @attr', function(t) {
  t.plan(0);
});

test.skip('createDefaultLocals(tree, props) :: @attr :: props.@attr', function(t) {
  t.plan(0);
});

test.skip('createDefaultLocals(tree, props) :: @attr :: tree.attr', function(t) {
  t.plan(0);
});