class nodeList {
  data: number;
  next: nodeList | null;

  constructor(data: number, next: nodeList | null) {
    this.data = data;
    this.next = next;
  }
}

function deleteMiddle(head: nodeList): nodeList | null {
  if (head === null || head.next === null) {
    return null;
  }

  let temp: nodeList | null = head;
  let count: number = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  }

  let newTemp: nodeList | null = head;
  let mid = count / 2;
  for (let i = 0; i < mid - 1; i++) {
    newTemp = newTemp?.next || null;
  }
  if (newTemp) {
    newTemp.next = newTemp?.next?.next || null;
  }

  return head;
}
