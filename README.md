# rogain-utils

Utilities for Rogain.

## createDefaultLocals(tree, props)

Creates a copy and extends default properties from tree and props.

```js
var locals = createDefaultLocals(tree, props);
// { '@attrs': { ... }, '@data': { ... }, '@children': [ ... ] }
```

## createFrame(tree, locals)

Creates a tree node of the `frame` type with `locals` as scope data and `tree` as children.  This represents a new scope, no variables fall through by default – all locals should be manually defined from outside scopes.

```js
var frame = createFrame(tree, locals);
// { type: 'frame', children: tree, locals: locals }
```


## Install

With [npm](https://www.npmjs.com) do:

```
npm install rogain-utils
```

## License

MIT