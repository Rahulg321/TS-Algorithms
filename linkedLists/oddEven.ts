class nodeLinkedlist {
  data: number;
  next: nodeLinkedlist | null;

  constructor(data: number, next: nodeLinkedlist | null) {
    this.data = data;
    this.next = next;
  }
}

function oddEven(head: nodeLinkedlist): nodeLinkedlist | null {
  if (head === null || head.next === null) {
    return head;
  }

  let temp: nodeLinkedlist | null = head;
  let odd: nodeLinkedlist | null = head;
  let even: nodeLinkedlist | null = head.next;
  let evenStart: nodeLinkedlist | null = even;

  while (even != null && even.next != null) {
    if (odd) {
      odd.next = odd.next?.next || null;
    }
    even.next = even.next?.next || null;
    odd = odd?.next || null;
    even = even?.next || null;
  }

  if (odd) {
    odd.next = evenStart || null;
  }
  return head;
}
