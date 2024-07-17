/* 
    in a binary tree, each node has exactly two child Nodes, nothing else
*/

class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(
    value: number,
    leftNode?: BinaryTreeNode,
    rightNode?: BinaryTreeNode
  ) {
    this.val = value;
    // if the left and right node exists then assign value to it
    this.left = leftNode === undefined ? null : leftNode;
    this.right = rightNode === undefined ? null : rightNode;
  }
}
class BinaryTree {
  rootNode: BinaryTreeNode | null;

  constructor() {
    this.rootNode = null;
  }

  insert(value: number | null) {
    if (!value) {
      return;
    }

    const newNode = new BinaryTreeNode(value);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode) {
    // this insert function maintains order of elements in binary tree
    // since we are maintaining order this type of tree is known as binary search tree

    if (newNode.val < node.val) {
      if (node.left === null) {
        console.log("inserted node at the left");
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        console.log("inserted node at the right");
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  preOrderTraversal(rootNode: BinaryTreeNode | null) {
    // root -> left -> right
    if (!rootNode) {
      return null;
    }

    console.log(rootNode.val);
    this.preOrderTraversal(rootNode.left);
    this.preOrderTraversal(rootNode.right);
  }

  inOrderTraversal(rootNode: BinaryTreeNode | null) {
    // root -> left -> right
    if (!rootNode) {
      return null;
    }

    this.inOrderTraversal(rootNode.left);
    console.log(rootNode.val);
    this.inOrderTraversal(rootNode.right);
  }

  levelOrderTraversal(): void {
    if (!this.rootNode) {
      // there is no tree and no node in the tree
      return;
    }

    let queue: (BinaryTreeNode | null)[] = [this.rootNode];

    while (queue.length > 0) {
      // return the first element from the queue
      let node = queue.shift();

      if (node) {
        console.log(node.val);
        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }

  postOrderTraversal(rootNode: BinaryTreeNode | null) {
    // root -> left -> right
    if (!rootNode) {
      return null;
    }

    this.postOrderTraversal(rootNode.left);
    this.postOrderTraversal(rootNode.right);
    console.log(rootNode.val);
  }

  search(value: number): BinaryTreeNode | null {
    return this.searchNode(this.rootNode, value);
  }

  searchNode(
    node: BinaryTreeNode | null,
    value: number
  ): BinaryTreeNode | null {
    if (!node) {
      console.log("the tree is empty, root node does not exist");
      return null;
    }

    if (value < node.val) {
      return this.searchNode(node.left, value);
    } else if (value > node.val) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }
}

let BT = new BinaryTree();

BT.insert(50);
BT.insert(30);
BT.insert(70);
BT.insert(20);
BT.insert(40);
BT.insert(10);
BT.insert(25);
BT.insert(27);
BT.insert(60);
BT.insert(80);
BT.insert(55);

// console.log("postorder traversal is");
// BT.postOrderTraversal(BT.rootNode);

const result = BT.search(27);
console.log("result is ", result);
if (!result) {
  console.log("could not find the node");
}
