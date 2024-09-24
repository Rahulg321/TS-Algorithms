class nodeLinkedList {
  data: number;
  next: nodeLinkedList | null;

  constructor(data: number, next: nodeLinkedList | null) {
    this.data = data;
    this.next = next;
  }
}

// {1, 2, 2, 1}

function isPalindrome(head: nodeLinkedList): boolean {
  if (head === null || head.next === null) {
    return false;
  }
  let temp: nodeLinkedList | null = head;
  let count = 0;

  while (temp != null) {
    count++;
    temp = temp.next;
  }
  let mid = count / 2;
  let newTemp: nodeLinkedList | null | undefined = head;
  for (let i = 0; i < mid - 1; i++) {
    newTemp = newTemp?.next;
  }

  let midNext: nodeLinkedList | null = newTemp?.next || null;

  let first: nodeLinkedList | null = reverseFirst(head, newTemp);
  let second: nodeLinkedList | null = null;
  if (count % 2 == 0) {
    second = midNext;
  }
  else{
    second = midNext?.next || null;
  }

  while(first != null && second != null){
    if(first.data != second.data){
      return false;
    }
    first = first.next;
    second = second.next;
  }

  return true;
}

function reverseFirst(
  head: nodeLinkedList | null,
  end: nodeLinkedList | null
): nodeLinkedList | null {
  let prev: nodeLinkedList | null = null;
  let current: nodeLinkedList | null = head;
  let next: nodeLinkedList | null = null;
  while (current != end) {
    next = current?.next || null;
    if (current) {
      current.next = prev || null;
    }
    prev = current;
    current = next;
  }
  return prev;
}
