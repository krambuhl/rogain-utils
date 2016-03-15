import contains from 'object-contains';
export default function findPath(tree, match, path='*') { 
  if (contains(tree, match)) {
    return path.substr(2);
  }

  if (tree.children) {
    path += '.children';

    var res = tree.children.map((child, i) => {
      var dpath = findPath(child, match, path + '.' + i);
      return dpath ? i : undefined;
    }).filter(child => child !== undefined);

    if (res.length > 0) {
      var i = res[0];
      return findPath(tree.children[i], match, path + '.' + i);
    }
  }
}
