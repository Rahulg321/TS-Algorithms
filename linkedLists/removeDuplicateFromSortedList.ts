class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  deleteDuplicates(head: ListNode | null): ListNode | null {
    let temp: ListNode | null = head;
    while (temp !== null && temp.next !== null) {
      if (temp.val === temp.next.val) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    return head;
  }
}
