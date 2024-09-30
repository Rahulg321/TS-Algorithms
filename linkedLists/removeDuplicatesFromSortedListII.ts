class nodeL {
  data: number;
  next: nodeL | null;

  constructor(data: number, next: nodeL | null) {
    this.data = data;
    this.next = next;
  }
}

function deleteDuplicates(head: nodeL | null): nodeL | null{

  let dummy: nodeL = new nodeL(0, head);
  let prev: nodeL = dummy;

  while(head != null){
    if(head.next != null && head.data === head.next.data){
      while(head.next != null && head.data === head.next.data){
        head = head?.next;
      }
      prev.next = head.next;
    }
    else{
      prev = prev.next;
    }
    head = head.next;
  }

  return dummy.next;
}