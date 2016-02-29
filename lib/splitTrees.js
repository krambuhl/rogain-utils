import contains from 'object-contains';

export default function splitTrees(treeList, match) { 
  if (match === undefined) {
    return treeList.map(tree => [tree]);
  }

  return treeList.reduce((list, tree) => {
    if (contains(tree, match)) {
      list.push([]);
    } else {
      list[list.length - 1].push(tree);
    }

    return list;
  }, [[]]);
}