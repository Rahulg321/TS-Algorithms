class nodeLL {
  data: number;
  next: nodeLL | null;

  constructor(data: number, next: nodeLL | null) {
    this.data = data;
    this.next = next;
  }
}

function swapPairs(head: nodeLL | null): nodeLL | null {
  if(head === null || head.next === null){
    return head;
  }

  const dummy: nodeLL = new nodeLL(0, head);
  let prev: nodeLL | null = dummy;
  let temp: nodeLL | null = head;
  while(temp != null && temp.next != null){
    let first: nodeLL | null = temp;
    let second: nodeLL = temp.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
    temp = first.next;
  }

  let newNode: nodeLL | null = dummy.next;
  return newNode;
}