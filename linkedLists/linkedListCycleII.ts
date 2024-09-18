class listnodE {
  data: number;
  next: listnodE | null;
  prev: listnodE | null;

  constructor(data: number, next: listnodE | null, prev: listnodE | null){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
// 1, 2, 3, 4, 5
function listCycleII(head: listnodE | null): listnodE  | null {

  let slow : listnodE | null = head;
  let fast : listnodE | null = head;
  while(slow!= null && fast != null && fast.next != null){
    slow = slow?.next;
    fast = fast?.next?.next;
    if(slow === fast) break;
  }

  if(fast === null || fast.next === null) return null;
  slow = head;
  while(slow !== fast){
    slow = slow?.next || null;
    fast = fast?.next || null;
  }
  return slow;
}