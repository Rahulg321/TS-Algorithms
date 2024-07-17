// in this type of tree each node can have upto n children

class NaryTreeNode<T> {
  value: T;
  children: NaryTreeNode<T>[];

  constructor(value: T) {
    this.value = value;
    this.children = [];
  }

  addChild(node: NaryTreeNode<T>): void {
    this.children.push(node);
  }
}

// Define the structure of an n-ary tree
class NaryTree<T> {
  root: NaryTreeNode<T> | null;

  constructor(value: T) {
    this.root = new NaryTreeNode(value);
  }

  preOrderTraversal(node: NaryTreeNode<T>) {
    if (!node) {
      return;
    }

    console.log(node.value);
    node.children.forEach((child) => this.preOrderTraversal(child));
  }

  postOrderTraversal(node: NaryTreeNode<T>) {
    if (!node) {
      return;
    }

    node.children.forEach((child) => this.postOrderTraversal(child));
    console.log(node.value);
  }

  //   we cannot do inorder traversal in Nary tree
}

const NT = new NaryTree(1);
const node2 = new NaryTreeNode(2);
const node3 = new NaryTreeNode(3);
const node4 = new NaryTreeNode(4);
const node5 = new NaryTreeNode(5);

NT.root?.addChild(node2);
NT.root?.addChild(node3);

node2.addChild(node4);
node2.addChild(node5);

console.log("pre order traversal");
NT.preOrderTraversal(NT.root!);

console.log("post order traversal");
NT.postOrderTraversal(NT.root!);
