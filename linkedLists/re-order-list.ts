


function reorderlist(head:ListNode){

    let slow = head;
    let fast = head.next;


    while(fast.next !== null && fast !== null){
        slow = slow.next
        fast = fast.next.next
    }

    let firstHalf = head;
    let secondHalf = reverseList(slow.next)
    slow.next = null //breaking the list at the middle


    while(firstHalf && secondHalf){

        let tempLeft = firstHalf.next
        let tempRight = secondHalf.next

        firstHalf.next = secondHalf
        secondHalf.next = tempLeft

        firstHalf = tempLeft
        secondHalf = tempRight


    }


    return head

}

function reverseList(head:ListNode){
    if(!head || !head.next){
        return head
    }

    let stack = []

    while(head){
        stack.push(head)
        head = head.next
    }

    let newHead = stack.pop()
    let current = newHead;


    while(stack.length > 0){
        current.next = stack.pop()
    }

    current.next = null

    return newHead

}
