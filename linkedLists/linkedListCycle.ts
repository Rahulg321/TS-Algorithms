class listnode {
  data: number;
  next: listnode | null;
  prev: listnode | null;

  constructor(data: number, next: listnode | null, prev: listnode | null){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
// 1, 2, 3, 4, 5
function listCycle(head: listnode | null): boolean{
  let slow : listnode | null = head;
  let fast : listnode | null = head;
  while(slow!= null && fast != null && fast.next != null){
    slow = slow?.next;
    fast = fast?.next?.next;
    if(slow === fast) return true;
  }
  return false;
}