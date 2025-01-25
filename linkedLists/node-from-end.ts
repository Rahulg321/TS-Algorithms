function deleteNodeFromEnd(head:ListNode, n : number){

     if (!head) return null;

        let stack = [];
        let current = head;

        // Build the stack
        while (current) {
            stack.push(current);
            current = current.next;
        }

        // If removing the head node
        if (n === stack.length) {
            return head.next;
        }

        // Get the node before the target
        let prev = stack[stack.length - n - 1];
        prev.next = prev.next.next;

        return head;

}
