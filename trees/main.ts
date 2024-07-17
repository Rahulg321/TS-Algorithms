class TreeNode<T> {
  value: T;
  children: TreeNode<T>[] = [];

  constructor(val: T) {
    this.value = val;
    this.children = [];
  }

  addChild(node: TreeNode<T>) {
    this.children.push(node);
  }

  removeChild(node: TreeNode<T>) {
    this.children.filter((child) => child !== node);
  }
}

class Tree<T> {
  rootNode: TreeNode<T> | null;

  constructor(rootNodeData: T) {
    // initialize with a new root Node
    this.rootNode = new TreeNode(rootNodeData);
  }

  breadthFirstSearch() {}
  depthFirstSearch() {}

  inOrderTraversal() {}
  preOrderTraversal() {}
  postOrderTraversal() {}
}

// creating nodes for a tree
let rootNode = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);

// add a root node for the tree

// create a new tree
let simpleTree = new Tree(rootNode);

rootNode.addChild(two);
rootNode.addChild(three);
