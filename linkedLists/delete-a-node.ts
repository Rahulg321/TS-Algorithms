class ListNode{
  data: number;
  next: ListNode | null;

  constructor(data: number, next: ListNode | null){
    this.data = data;
    this.next = next;
  }
};

function deleteNode (node: ListNode | null):  void {
  if(node == null || node.next == null) return;

  node.data = node.next.data;
  node.next = node.next.next;
}
