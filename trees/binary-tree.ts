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

  minValueNode(node: BinaryTreeNode | null): BinaryTreeNode | null {
    // given a subtree it just finds the leftmost smallest node in the tree
    // the left most node is considered the predecessor

    let current = node;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current;
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

// const resultingModes = BT.findMode(BT.rootNode);


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
check if binary tree is symmetric
*/

function isSymmetric(root: TreeNode | null): boolean {

    if(!root){
        return false
    }

    if (!root.left && !root.right) {
        return true
    }

    if (!root.left || !root.right) {
        return false
    }

    let queue1: (TreeNode | null)[] = [root.left]
    let queue2: (TreeNode | null)[] = [root.right]


     while (queue1.length > 0 && queue2.length > 0) {
        let node1 = queue1.shift();
        let node2 = queue2.shift();

        // If both are null, continue to the next pair
        if (!node1 && !node2) {
            continue;
        }

        // If only one is null, or their values differ, it's not symmetric
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        // Enqueue in a mirrored fashion
        queue1.push(node1.left);
        queue1.push(node1.right);
        queue2.push(node2.right); // Notice the swapped order here
        queue2.push(node2.left);
    }

    return true

};

function sumOfLeftLeaves(root: TreeNode | null): number {
    let leftLeaves:number[] = []
    let sumResult = 0

    function _find_left_leaves(node: TreeNode | null, isLeft: boolean) {
        if (!node) {
            return null
        }

        if (!node.left && !node.right && isLeft) {
            leftLeaves.push(node.val)
        }

        _find_left_leaves(node.left, true)
        _find_left_leaves(node.right, false)

    }

    _find_left_leaves(root, false);

    if (leftLeaves.length > 0) {

        for (let i = 0; i < leftLeaves.length; i++) {
            sumResult += leftLeaves[i]
        }

        return sumResult

    } else {
        return sumResult
    }
};



/**
 *
 * expects a balanced binary tree, leaf nodes are 0 or 1 and internal nodes are 2 or 3
 * 2 for OR and 3 for AND
 * 0 for false and 1 for true
 *
 * need to evaluate the tree and return true or false
 *
 * @param root - The root node of the tree
 * @returns true or false if the tree is univalued
 */
function evaluateTree(root: TreeNode | null): boolean { // Added : boolean return type
    if (root === null) {
        return false;
    }

    if (root.val === 0 || root.val === 1) {
        return root.val === 1;
    }

    if (root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right);
    } else if (root.val === 3) {
        return evaluateTree(root.left) && evaluateTree(root.right);
    }
    // It's good practice to have a default return statement, even if it's unreachable
    return false;
};
