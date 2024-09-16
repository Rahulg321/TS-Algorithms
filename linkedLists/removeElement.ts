/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number, next: ListNode | null){
    this.data = data;
    this.next = next;
  }
}

class Solution {
function removeElement(head : ListNode, val: number): ListNode | null{
  while(head != null && head.data == val){
    head = head.next;
  }

  let temp = head;
  let prev: ListNode | null = null;

  // Traverse the rest of the list
  while (temp !== null) {
      if (temp.data === val) {
          if (prev !== null) {
              prev.next = temp.next;
          }
          temp = temp.next;
      } else {
          prev = temp;
          temp = temp.next;
      }
  }

  return head;

}
}