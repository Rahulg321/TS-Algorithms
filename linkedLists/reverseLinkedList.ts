class listNode {
  data: number;
  next: listNode | null;
  prev: listNode | null;

  constructor(data: number, next: listNode | null, prev: listNode | null){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

function reverseLinkedList(head: listNode | null): listNode | null{
  let temp = head;
  let front: listNode | null = null;
  let rear: listNode | null = null;

  while(temp != null && temp.next != null){
    front = temp.next;
    front.prev = temp;
    rear = temp;
    temp = front;
  }
  return rear;
}