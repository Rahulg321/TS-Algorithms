class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  // this function converts a sorted array to binary search Tree
  if (nums.length === 0) {
    return null;
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  let middleIndex = Math.floor(nums.length / 2);
  let middleElement = nums[middleIndex];

  let treeNode = new TreeNode(middleElement);
  treeNode.left = sortedArrayToBST(nums.slice(0, middleIndex));
  treeNode.right = sortedArrayToBST(nums.slice(middleIndex + 1, nums.length));

  return treeNode;
}

function hasPathSum(root: TreeNode, targetSum: number, sum = 0) {
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

function findMinimumDepth(root: TreeNode | null): number {
  // find the nearest leaf node
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

function findMaximumDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let leftDepth = this.findMaximumDepth(root.left);
  let rightDepth = this.findMaximumDepth(root.right);
  // find the max of left and right subtrees and add one to account for the current node itself
  return Math.max(leftDepth, rightDepth) + 1;
  // compares the depths of left and right subtree
}

function findMode(root: TreeNode | null): number[] {
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
