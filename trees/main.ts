console.log("hello world");
class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number) {
    this.value = value;
  }

  addChild(node: TreeNode) {
    this.children.push(node);
  }
}
