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




/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

type _Node = {
    val: number
    children: _Node[]

}

/**
 *
 *
 * @param root root node of an n-ary tree
 * @returns the post order traversal of the tree in an array
 */

function postorder(root: _Node | null): number[] {
    let nodesTraversed:number[] = []
    function _postOrderTraversal(node: _Node | null) {
        if (!node) {
            return;
        }

        node.children.forEach((child) => _postOrderTraversal(child));
        nodesTraversed.push(node.val)
    }

    _postOrderTraversal(root)
    return nodesTraversed
};

/**
 *
 *merge two binary trees
 *
 * @param root root node of an binary tree
 * @returns the pre order traversal of the tree in an array
 */
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    // If either root is null, return the other root
    if (!root1) return root2;
    if (!root2) return root1;

    // Initialize the queue with pairs of nodes to process
    let queue: [TreeNode, TreeNode][] = [[root1, root2]];

    // Merge the values of the root nodes
    root1.val += root2.val;

    // Process the queue
    while (queue.length > 0) {
        // Dequeue a pair of nodes
        let [node1, node2] = queue.shift()!;

        // Handle the left children
        if (node1.left && node2.left) {
            // Both nodes have left children; merge values and enqueue the pair
            node1.left.val += node2.left.val;
            queue.push([node1.left, node2.left]);
        } else if (!node1.left && node2.left) {
            // node1 is missing a left child; clone node2's left child
            node1.left = new TreeNode(node2.left.val);
            // Enqueue the new pair to continue merging their children
            queue.push([node1.left, node2.left]);
        }

        // Handle the right children
        if (node1.right && node2.right) {
            // Both nodes have right children; merge values and enqueue the pair
            node1.right.val += node2.right.val;
            queue.push([node1.right, node2.right]);
        } else if (!node1.right && node2.right) {
            // node1 is missing a right child; clone node2's right child
            node1.right = new TreeNode(node2.right.val);
            // Enqueue the new pair to continue merging their children
            queue.push([node1.right, node2.right]);
        }
    }

    // Return the merged tree rooted at root1
    return root1;
}
