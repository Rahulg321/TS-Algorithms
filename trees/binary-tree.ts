/* 
    in a binary tree, each node has exactly two child Nodes, nothing else
    this insert function maintains order of elements in binary tree
    since we are maintaining order this type of tree is known as binary search tree
    left node is smaller than the root and right node is bigger than the root
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
    if (value === null || value === undefined) {
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

  delete(value: number) {
    return this.deleteNode(this.rootNode, value);
  }

  deleteNode(node: BinaryTreeNode | null, value: number) {
    if (!node) return node;

    // since we have the order maintained in this tree we can traverse accordingly
    if (value > node.val) {
      node.right = this.deleteNode(node.right, value);
    } else if (value < node.val) {
      node.left = this.deleteNode(node.left, value);
    } else {
      // check if the node to be deleted has any children or not

      // whatever we return updates the pointer of the parent node
      if (!node.left && !node.right) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      // the node to delete has two children then we need to find the successor
      // the successor is the smallest node in the right subtree
      let smallestNode = this.minValueNode(node.right);
      // if (smallestNode) {
      //   node.val = smallestNode.val;
      // }

      // The syntax temp! in TypeScript is known as the non-null assertion operator. It tells the TypeScript compiler that you are sure the expression temp is not null or undefined at that point in the code. This can be useful when you, as the developer, know more about the code than the compiler can infer, and you want to override TypeScript's type-checking.

      node.val = smallestNode!.val;

      node.right = this.deleteNode(node.right, smallestNode!.val);
    }

    return node;
  }

  findMode(root: BinaryTreeNode | null): number[] {
    // find the maximum modes in the tree and return them as an array

    if (!root) {
      console.log("root is ", root);
      return [];
    }

    let resultingModes: number[] = [];
    let queue: BinaryTreeNode[] = [];
    let elementCount = new Map<number, number>();
    queue.push(root);

    while (queue.length > 0) {
      let nodeElement = queue.shift();

      if (nodeElement) {
        elementCount.set(
          nodeElement.val,
          (elementCount.get(nodeElement.val) || 0) + 1
        );

        if (nodeElement.left) {
          queue.push(nodeElement.left);
        }

        if (nodeElement.right) {
          queue.push(nodeElement.right);
        }
      }
    }

    let max = 0;
    for (const value of elementCount.values()) {
      if (value > max) {
        max = value;
      }
    }
    for (const [key, value] of elementCount.entries()) {
      if (value === max) {
        resultingModes.push(key);
      }
    }

    return resultingModes;
  }

  minValueNode(node: BinaryTreeNode | null): BinaryTreeNode | null {
    // given a subtree it just finds the leftmost smallest node in the tree
    // the left most node is considered the predecessor

    let current = node;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  findMinimumDepth(root: BinaryTreeNode | null): number {
    if (!root) {
      return 0;
    }

    if (!root.left && !root.right) {
      return 1;
    }

    if (!root.left) {
      return 1 + this.findMinimumDepth(root.right);
    }

    if (!root.right) {
      return 1 + this.findMinimumDepth(root.left);
    }

    return (
      1 +
      Math.min(
        this.findMinimumDepth(root.left),
        this.findMinimumDepth(root.right)
      )
    );
  }

  findMaximumDepth(root: BinaryTreeNode | null): number {
    if (!root) {
      return 0;
    }

    let leftDepth = this.findMaximumDepth(root.left);
    let rightDepth = this.findMaximumDepth(root.right);
    // find the max of left and right subtrees and add one to account for the current node itself
    return Math.max(leftDepth, rightDepth) + 1;
    // compares the depths of left and right subtree
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

  hasPathSum(root: BinaryTreeNode, targetSum: number, sum = 0) {
    // 112:- Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

    if (!root) {
      return false;
    }

    sum += root.val;

    if (!root.left && !root.right) {
      // it is a leaf node
      return sum === targetSum;
    }

    return (
      this.hasPathSum(root.left!, targetSum, sum) ||
      this.hasPathSum(root.right!, targetSum, sum)
    );
  }

  sortedArrayToBST(nums: number[]): BinaryTreeNode | null {
    let firstElement = nums.shift();
    let rootNode = new BinaryTreeNode(firstElement!);

    let currentCheckingNode = rootNode;
  }
}

let BT = new BinaryTree();

BT.insert(5);

// BT.insert(3);
// BT.insert(9);
// BT.insert(20);
// BT.insert(null);
// BT.insert(null);
// BT.insert(15);
// BT.insert(7);

console.log("level order traversal is ");
BT.levelOrderTraversal();

console.log("tree has path sum", BT.hasPathSum(BT.rootNode!, 5));

// const resultingModes = BT.findMode(BT.rootNode);
